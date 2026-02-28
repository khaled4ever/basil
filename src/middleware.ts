
import { NextResponse } from 'next/server';
import type { NextRequest, NextFetchEvent } from 'next/server';

// Configuration
const TRACKED_GCLIDS_COOKIE = 'tracked_gclids';
const MAX_GCLIDS_IN_COOKIE = 10; // To prevent cookie from getting too large
const GCLID_COOKIE_MAX_AGE_SECONDS = 60 * 60 * 2; // Keep GCLIDs for 2 hours

export function middleware(request: NextRequest, event: NextFetchEvent) {
  // Vercel and Next.js prefetch pages, which we want to ignore
  const isPrefetch = request.headers.get('x-purpose') === 'prefetch';
  if (isPrefetch) {
    return NextResponse.next();
  }

  // A real ad click will have a gclid or a test parameter
  const gclid = request.nextUrl.searchParams.get('gclid') || request.nextUrl.searchParams.get('test_ad_click');
  
  // 1. If there's no gclid, do nothing.
  if (!gclid) {
    return NextResponse.next();
  }

  // 2. Get the list of already tracked GCLIDs from the cookie.
  const trackedGclidsCookie = request.cookies.get(TRACKED_GCLIDS_COOKIE)?.value || '';
  const trackedGclids = trackedGclidsCookie ? trackedGclidsCookie.split('|') : [];

  // 3. If this GCLID has already been tracked in this session, do nothing.
  // This prevents overcounting on page reloads or internal navigation.
  if (trackedGclids.includes(gclid)) {
    return NextResponse.next();
  }

  // 4. This is a new, unique ad click. Let's track it.
  const ip = request.ip ?? request.headers.get('x-forwarded-for');
  if (!ip) {
    console.warn("[Ad-Tracker-Middleware] Could not determine IP address. Aborting tracking for this request.");
    return NextResponse.next();
  }

  console.log(`[Ad-Tracker-Middleware] New unique ad click detected! GCLID: ${gclid}, IP: ${ip}.`);
  
  // 5. Fire the tracking request in the background.
  const trackUrl = new URL('/api/track-click', request.url);
  event.waitUntil(
    fetch(trackUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ip }),
    })
    .then(response => {
      if (response.ok) {
        console.log(`[Ad-Tracker-Middleware] Tracking request for IP ${ip} sent successfully.`);
      } else {
        console.error(`[Ad-Tracker-Middleware] Tracking request failed with status: ${response.status}`);
      }
    })
    .catch(err => {
      console.error("[Ad-Tracker-Middleware] CRITICAL: Error firing tracking request:", err);
    })
  );

  // 6. Proceed with the user's request immediately.
  const response = NextResponse.next();
  
  // 7. Add the new GCLID to our list, limit the list size, and update the cookie.
  const updatedGclids = [...trackedGclids, gclid].slice(-MAX_GCLIDS_IN_COOKIE);
  response.cookies.set(TRACKED_GCLIDS_COOKIE, updatedGclids.join('|'), {
    path: '/',
    httpOnly: true,
    sameSite: 'lax',
    maxAge: GCLID_COOKIE_MAX_AGE_SECONDS,
  });

  return response;
}

export const config = {
  matcher: [
    // This matcher ensures the middleware runs on all pages but excludes API routes and static files.
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
};
