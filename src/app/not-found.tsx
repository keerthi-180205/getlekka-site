import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import '@/styles/globals.css';
import en from '../../messages/en.json';
import Logo from '@/components/ui/Logo';
import { ButtonLink } from '@/components/ui/Button';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const display = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-display', display: 'swap' });

/** Root-level 404 (English). Renders its own <html> because it sits outside the [locale] layout. */
export default function NotFound() {
  const t = en.notFound;
  return (
    <html lang="en-IN" className={`${inter.variable} ${display.variable}`}>
      <body className="hero-bg relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 font-sans text-on-surface antialiased">
        <div aria-hidden="true" className="ledger-grid absolute inset-0 -z-10" />
        <main id="main" className="mx-auto flex max-w-md flex-col items-center text-center">
          <a href="/" aria-label={en.common.brandName} className="mb-10 rounded-xl">
            <Logo />
          </a>

          {/* Illustration: a cup of chai with rising steam */}
          <svg viewBox="0 0 160 140" className="h-36 w-40" fill="none" aria-hidden="true">
            <ellipse cx="78" cy="124" rx="56" ry="9" fill="#003423" fillOpacity="0.1" />
            <path d="M34 54h92v28a40 40 0 0 1-40 40h-12a40 40 0 0 1-40-40V54z" fill="#003423" />
            <path d="M126 64h8a14 14 0 0 1 0 28h-12" stroke="#003423" strokeWidth="8" strokeLinecap="round" />
            <rect x="34" y="54" width="92" height="9" rx="4.5" fill="#1F7A4D" />
            <path d="M58 40c-8-8 8-14 0-24M80 40c-8-8 8-14 0-24M102 40c-8-8 8-14 0-24" stroke="#F2A93B" strokeWidth="5" strokeLinecap="round" />
          </svg>

          <p className="mt-6 font-display text-7xl font-extrabold tracking-tight text-primary/15">404</p>
          <h1 className="-mt-4 font-display text-3xl font-extrabold tracking-tight text-primary">{t.title}</h1>
          <p className="mt-3 text-lg text-on-surface-variant">{t.desc}</p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <ButtonLink href="/" size="lg">
              {t.homeBtn}
            </ButtonLink>
            <ButtonLink href="/pilot/" variant="secondary" size="lg">
              {t.pilotBtn}
            </ButtonLink>
          </div>
        </main>
      </body>
    </html>
  );
}
