import type { MetadataRoute } from 'next';
import { LOCALES, PAGES, SITE_URL, pathFor } from '@/lib/seo';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.flatMap((page) =>
    LOCALES.map((locale) => ({
      url: `${SITE_URL}${pathFor(locale, page)}`,
      lastModified: new Date('2026-11-12'),
      alternates: {
        languages: {
          'en-IN': `${SITE_URL}${pathFor('en', page)}`,
          'kn-IN': `${SITE_URL}${pathFor('kn', page)}`,
        },
      },
    })),
  );
}
