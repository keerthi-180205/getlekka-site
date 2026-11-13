import { useLocale, useTranslations } from 'next-intl';
import { Gift } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import PlanCard from './PlanCard';
import { pagePath } from '@/lib/paths';

export default function PricingTeaserSection() {
  const locale = useLocale();
  const t = useTranslations('pricingTeaser');
  const href = pagePath(locale, 'pricing');

  return (
    <section className="section-y relative bg-surface">
      <div className="container-x">
        <SectionHeading eyebrow={t('tag')} title={t('heading')} description={t('intro')} />

        <div className="mt-8 flex flex-col items-center gap-3 text-center">
          <span className="inline-flex items-center gap-2.5 rounded-full bg-brand-amber px-5 py-2.5 font-bold text-primary shadow-btn">
            <Gift className="h-5 w-5" aria-hidden="true" />
            {t('badge')}
          </span>
          <p className="text-sm italic text-on-surface-variant">*{t('notice')}</p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-8 md:grid-cols-2">
          <PlanCard
            title={t('basicTitle')}
            price={t('basicPrice')}
            period={t('basicPeriod')}
            features={t.raw('basicFeatures') as string[]}
            tag={t('plannedTag')}
            ctaLabel={t('viewPricing')}
            ctaHref={href}
          />
          <PlanCard
            featured
            title={t('proTitle')}
            price={t('proPrice')}
            period={t('proPeriod')}
            features={t.raw('proFeatures') as string[]}
            tag={t('plannedTag')}
            ctaLabel={t('viewPricing')}
            ctaHref={href}
          />
        </div>
      </div>
    </section>
  );
}
