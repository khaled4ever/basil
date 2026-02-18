import { type MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const sitemapUrl = new URL('/sitemap.xml', 'https://xn--ogbac0ap0gofko.com');
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: sitemapUrl.toString(),
  };
}
