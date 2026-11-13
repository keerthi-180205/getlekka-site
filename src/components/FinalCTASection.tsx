import { useLocale, useTranslations } from 'next-intl';
import { Mic, Sparkles } from 'lucide-react';
import { ButtonLink } from './ui/Button';
import { pagePath } from '@/lib/paths';

export default function FinalCTASection() {
  const locale = useLocale();
  const t = useTranslations('finalCta');

  return (
    <section className="bg-surface px-4 pb-16 pt-6 sm:px-6 md:pb-24">
      <div className="on-dark relative isolate mx-auto max-w-content overflow-hidden rounded-[2rem] bg-primary px-6 py-14 text-center text-white shadow-phone sm:px-12 md:py-20">
        <div aria-hidden="true" className="ledger-grid-light absolute inset-0 -z-10" />
        <div aria-hidden="true" className="absolute -left-20 -top-20 -z-10 h-72 w-72 rounded-full bg-brand-green/50 blur-3xl" />
        <div aria-hidden="true" className="absolute -bottom-24 -right-16 -z-10 h-72 w-72 rounded-full bg-brand-amber/30 blur-3xl" />
        <span
          aria-hidden="true"
          className="absolute -right-4 -top-10 -z-10 select-none font-display text-[16rem] font-extrabold leading-none text-white/[0.04]"
        >
          ₹
        </span>

        <span className="mx-auto inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-primary-fixed ring-1 ring-white/15">
          <Sparkles className="h-4 w-4 text-brand-amber" aria-hidden="true" />
          {t('badge')}
        </span>
        <h2 className="mx-auto mt-6 max-w-3xl font-display text-balance text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
          {t('heading')}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-primary-fixed/85">{t('sub')}</p>

        <div className="mt-9 flex justify-center">
          <ButtonLink href={pagePath(locale, 'pilot')} variant="amber" size="lg" className="w-full sm:w-auto">
            <Mic className="h-5 w-5" aria-hidden="true" />
            {t('button')}
          </ButtonLink>
        </div>
        <p className="mt-5 text-sm font-medium text-primary-fixed/80">{t('note')}</p>
      </div>
    </section>
  );
}
