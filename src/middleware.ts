
import { NextResponse } from 'next/server';
import type { NextRequest, NextFetchEvent } from 'next/server';

const AD_CLICK_COOKIE = 'ad-click-tracked-session';
const AD_CLICK_COOKIE_MAX_AGE_SECONDS = 30 * 60; // 30 minutes

// The middleware now accepts 'event' as a second argument.
export function middleware(request: NextRequest, event: NextFetchEvent) {
  // A test parameter to allow developers to simulate an ad click
  const isTestClick = request.nextUrl.searchParams.has('test_ad_click');
  // A real ad click will have a gclid
  const isAdClick = request.nextUrl.searchParams.has('gclid');
  // Vercel and Next.js prefetch pages, which we want to ignore
  const isPrefetch = request.headers.get('x-purpose') === 'prefetch';

  // 1. If it's not a real ad click, not a test click, or if it's a prefetch, do nothing.
  if ((!isAdClick && !isTestClick) || isPrefetch) {
    return NextResponse.next();
  }
  
  // 2. Check if we've already tracked a click for this session
  if (request.cookies.has(AD_CLICK_COOKIE)) {
    return NextResponse.next();
  }

  // 3. Get IP address
  const ip = request.ip ?? request.headers.get('x-forwarded-for');
  if (!ip) {
    console.log("[Ad-Tracker-Middleware] Could not determine IP address. Aborting tracking for this request.");
    return NextResponse.next();
  }
  
  console.log(`[Ad-Tracker-Middleware] Ad click detected! IP: ${ip}. URL: ${request.nextUrl.href}`);
  console.log("[Ad-Tracker-Middleware] Firing tracking request to /api/track-click...");
  
  // 4. Fire the tracking request and tell Vercel to wait for it to finish.
  const trackUrl = new URL('/api/track-click', request.url);
  
  event.waitUntil(
    fetch(trackUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ip }),
    })
    .then(response => {
        if (!response.ok) {
            console.error(`[Ad-Tracker-Middleware] Tracking request failed with status: ${response.status}`);
        } else {
            console.log("[Ad-Tracker-Middleware] Tracking request sent successfully.");
        }
    })
    .catch(err => {
        console.error("[Ad-Tracker-Middleware] CRITICAL: Error firing tracking request:", err);
    })
  );

  // 5. IMPORTANT: Always allow the request to proceed immediately.
  const response = NextResponse.next();

  // 6. Set a cookie to prevent tracking subsequent requests in the same session.
  response.cookies.set(AD_CLICK_COOKIE, 'true', {
    path: '/',
    httpOnly: true,
    sameSite: 'lax',
    maxAge: AD_CLICK_COOKIE_MAX_AGE_SECONDS,
  });

  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
};
