import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { pagePath } from './paths';

export const SITE_URL = 'https://getlekka.com';
export const LOCALES = ['en', 'kn'] as const;
export const PAGES = ['', 'pricing', 'about', 'pilot', 'contact', 'privacy', 'terms'] as const;

export const pathFor = pagePath;

export async function buildMetadata(locale: string, page: string): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'meta' });
  const key = page || 'home';
  const title = t(`${key}.title`);
  const description = t(`${key}.description`);
  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: {
      canonical: pathFor(locale, page),
      languages: {
        'en-IN': pathFor('en', page),
        'kn-IN': pathFor('kn', page),
        'x-default': pathFor('en', page),
      },
    },
    openGraph: {
      title,
      description,
      url: pathFor(locale, page),
      siteName: 'GetLekka',
      locale: locale === 'kn' ? 'kn_IN' : 'en_IN',
      type: 'website',
    },
    twitter: { card: 'summary', title, description },
  };
}
