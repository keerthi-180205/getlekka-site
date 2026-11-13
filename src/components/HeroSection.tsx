import { useLocale, useTranslations } from 'next-intl';
import { CheckCircle2, ChevronDown } from 'lucide-react';
import { ButtonLink } from './ui/Button';
import PhoneChatMockup from './PhoneChatMockup';
import { pagePath } from '@/lib/paths';

export default function HeroSection() {
  const locale = useLocale();
  const t = useTranslations('hero');
  const points = t.raw('points') as string[];

  return (
    <section className="hero-bg relative isolate overflow-x-clip">
      <div aria-hidden="true" className="ledger-grid absolute inset-0 -z-10" />

      <div className="container-x pb-16 pt-8 sm:pt-12 lg:pb-28 lg:pt-20">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
          {/* Copy */}
          <div className="animate-fade-up text-center lg:col-span-7 lg:text-left">
            <span className="inline-flex items-center gap-2.5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary shadow-float ring-1 ring-primary/10">
              <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-amber opacity-70" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-amber" />
              </span>
              {t('badge')}
            </span>

            <h1 className="hero-title mt-6 font-display text-balance text-[2.1rem] font-extrabold leading-[1.18] tracking-[-0.02em] text-primary sm:text-5xl lg:text-[3.6rem]">
              {t('titleLead')}{' '}
              {/* the highlighted sentence starts on its own line so the marker stays tidy */}
              <span className="mt-1 block">
                <span className="box-decoration-clone bg-[linear-gradient(transparent_62%,rgba(242,169,59,0.55)_62%)] px-1 -mx-1">
                  {t('titleAccent')}
                </span>
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-on-surface-variant sm:text-xl lg:mx-0">
              {t('subtitle')}
            </p>

            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
              <ButtonLink href={pagePath(locale, 'pilot')} size="lg" arrow>
                {t('ctaPrimary')}
              </ButtonLink>
              <ButtonLink href="#how" variant="secondary" size="lg">
                {t('ctaSecondary')}
                <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
              </ButtonLink>
            </div>

            <ul className="mt-8 flex flex-col items-center gap-x-6 gap-y-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-2 text-left text-[0.95rem] font-semibold text-on-surface-variant">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Phone */}
          <div className="animate-fade-up [animation-delay:150ms] lg:col-span-5">
            <PhoneChatMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
