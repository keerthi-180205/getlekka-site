import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { Mail, MapPin } from 'lucide-react';
import Logo from './ui/Logo';
import { pagePath } from '@/lib/paths';

export default function Footer() {
  const locale = useLocale();
  const common = useTranslations('common');
  const nav = useTranslations('nav');
  const footer = useTranslations('footer');

  const columns = [
    {
      title: footer('navigation'),
      links: [
        { href: pagePath(locale, 'pricing'), label: nav('pricing') },
        { href: pagePath(locale, 'about'), label: nav('about') },
        { href: pagePath(locale, 'pilot'), label: nav('pilot') },
        { href: pagePath(locale, 'contact'), label: nav('contact') },
      ],
    },
    {
      title: footer('legal'),
      links: [
        { href: pagePath(locale, 'privacy'), label: nav('privacy') },
        { href: pagePath(locale, 'terms'), label: nav('terms') },
      ],
    },
  ];

  return (
    <footer className="on-dark relative isolate mt-auto overflow-hidden bg-primary text-white">
      <div aria-hidden="true" className="ledger-grid-light absolute inset-0 -z-10 opacity-60" />
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-brand-green/30 blur-3xl"
      />

      <div className="container-x pb-28 pt-14 md:pb-10 md:pt-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <Link href={pagePath(locale)} aria-label={common('brandName')} className="inline-block rounded-xl">
              <Logo tone="light" />
            </Link>
            <p className="mt-6 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              {common('tagline')}
            </p>
            <p className="mt-3 max-w-sm text-primary-fixed/80">{common('taglineSub')}</p>
            <a
              href={`mailto:${common('email')}`}
              className="mt-6 inline-flex min-h-[48px] items-center gap-2.5 rounded-full bg-white/10 px-5 font-semibold text-white ring-1 ring-white/15 transition-colors hover:bg-white/15"
            >
              <Mail className="h-4 w-4 text-brand-amber" aria-hidden="true" />
              {common('email')}
            </a>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title} className="md:col-span-3">
              <h2 className="eyebrow text-primary-fixed-dim">{col.title}</h2>
              <ul className="mt-5 space-y-1">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="inline-flex min-h-[44px] items-center text-lg font-medium text-white/90 transition-colors hover:text-brand-amber"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-primary-fixed/75 sm:flex-row sm:items-center sm:justify-between">
          <p>{common('copyright')}</p>
          <p className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-brand-amber" aria-hidden="true" />
            {common('madeIn')}
          </p>
          <p>{footer('builtFor')}</p>
        </div>
      </div>
    </footer>
  );
}
