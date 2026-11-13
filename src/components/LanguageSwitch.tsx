'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { Languages } from 'lucide-react';
import { localePrefix } from '@/lib/paths';

/** Switches EN ⇄ ಕನ್ನಡ, keeping the user on the same page. Names are shown in their own script. */
export default function LanguageSwitch({ className = '' }: { className?: string }) {
  const locale = useLocale();
  const pathname = usePathname() || '/';

  // Strip any locale prefix, then add the target one. Paths always end with a slash.
  const bare = pathname.replace(/^\/(en|kn)(?=\/|$)/, '') || '/';
  const withSlash = bare.endsWith('/') ? bare : `${bare}/`;
  const isKannada = locale === 'kn';
  const target = `${localePrefix(isKannada ? 'en' : 'kn')}${withSlash}`;

  return (
    <Link
      href={target}
      hrefLang={isKannada ? 'en' : 'kn'}
      lang={isKannada ? 'en' : 'kn'}
      className={`inline-flex min-h-[44px] items-center gap-2 rounded-full border border-primary/15 bg-white/80 px-3.5 text-sm font-semibold text-primary shadow-resting transition-all hover:border-primary/40 hover:bg-white hover:shadow-float ${className}`}
      aria-label={isKannada ? 'Switch to English' : 'ಕನ್ನಡ ಭಾಷೆಗೆ ಬದಲಿಸಿ'}
    >
      <Languages className="hidden h-4 w-4 text-brand-green min-[400px]:block" aria-hidden="true" />
      <span>{isKannada ? 'English' : 'ಕನ್ನಡ'}</span>
    </Link>
  );
}
