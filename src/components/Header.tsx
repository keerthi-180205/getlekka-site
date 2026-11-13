'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { ArrowRight, Menu, X } from 'lucide-react';
import Logo from './ui/Logo';
import LanguageSwitch from './LanguageSwitch';
import { ButtonLink } from './ui/Button';
import { pagePath } from '@/lib/paths';

export default function Header() {
  const locale = useLocale();
  const nav = useTranslations('nav');
  const common = useTranslations('common');
  const pathname = usePathname() || '/';

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { href: `${pagePath(locale)}#how`, label: nav('howItWorks'), page: '' },
    { href: pagePath(locale, 'pricing'), label: nav('pricing'), page: 'pricing' },
    { href: pagePath(locale, 'about'), label: nav('about'), page: 'about' },
  ];
  const pilotHref = pagePath(locale, 'pilot');

  const isCurrent = (page: string) => page !== '' && pathname.replace(/^\/(en|kn)(?=\/|$)/, '').startsWith(`/${page}`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Full-screen mobile menu: lock page scroll and close on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-all duration-300 ${
        scrolled || open
          ? 'border-primary/10 bg-surface/90 shadow-[0_8px_24px_-16px_rgba(0,52,35,0.35)]'
          : 'border-transparent bg-surface/60'
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between gap-3">
        <Link
          href={pagePath(locale)}
          className="rounded-xl transition-transform hover:scale-[1.02]"
          aria-label={common('brandName')}
          onClick={() => setOpen(false)}
        >
          <Logo />
        </Link>

        {/* Desktop navigation */}
        <nav aria-label={nav('mainNav')} className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              aria-current={isCurrent(l.page) ? 'page' : undefined}
              className={`rounded-full px-4 py-2.5 text-[0.95rem] font-semibold transition-colors hover:bg-primary/5 hover:text-primary ${
                isCurrent(l.page) ? 'bg-primary/5 text-primary' : 'text-on-surface-variant'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <LanguageSwitch />
          <ButtonLink href={pilotHref} arrow className="hidden !rounded-full sm:inline-flex">
            {common('joinPilot')}
          </ButtonLink>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-xl text-primary transition-colors hover:bg-primary/5 md:hidden"
            aria-label={open ? nav('closeMenu') : nav('openMenu')}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile full-screen menu */}
      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 bottom-0 top-16 z-40 flex flex-col overflow-y-auto bg-surface px-4 pb-8 pt-4 md:hidden"
        >
          <nav aria-label={nav('mainNav')} className="flex flex-1 flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                aria-current={isCurrent(l.page) ? 'page' : undefined}
                className="flex min-h-[60px] items-center justify-between rounded-2xl px-4 font-display text-xl font-bold text-primary transition-colors hover:bg-primary/5"
              >
                {l.label}
                <ArrowRight className="h-5 w-5 text-brand-green" aria-hidden="true" />
              </Link>
            ))}
            <Link
              href={pagePath(locale, 'contact')}
              onClick={() => setOpen(false)}
              className="flex min-h-[60px] items-center justify-between rounded-2xl px-4 font-display text-xl font-bold text-primary transition-colors hover:bg-primary/5"
            >
              {nav('contact')}
              <ArrowRight className="h-5 w-5 text-brand-green" aria-hidden="true" />
            </Link>
          </nav>
          <ButtonLink href={pilotHref} size="lg" arrow onClick={() => setOpen(false)} className="w-full">
            {common('joinPilot')}
          </ButtonLink>
        </div>
      )}
    </header>
  );
}
