import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Gift, Plus } from 'lucide-react';
import PageShell from '@/components/PageShell';
import PageHeader from '@/components/PageHeader';
import PlanCard from '@/components/PlanCard';
import { buildMetadata } from '@/lib/seo';
import { pagePath } from '@/lib/paths';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata(locale, 'pricing');
}

export default async function PricingPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'pricingPage' });
  const teaser = await getTranslations({ locale, namespace: 'pricingTeaser' });
  const href = pagePath(locale, 'pilot');
  const faqs = [1, 2, 3].map((n) => ({ q: t(`faq${n}Q`), a: t(`faq${n}A`) }));

  return (
    <PageShell>
      <PageHeader title={t('title')}>
        <p className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-brand-amber px-5 py-2.5 font-bold text-primary shadow-btn">
          <Gift className="h-5 w-5" aria-hidden="true" />
          {t('banner')}
        </p>
        <p className="mt-3 text-sm italic text-on-surface-variant">{t('plannedBadge')}</p>
      </PageHeader>

      <section className="section-y bg-surface">
        <div className="container-x">
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            <PlanCard
              title={t('basicTitle')}
              price={t('basicPrice')}
              period={t('basicPeriod')}
              features={t.raw('basicFeatures') as string[]}
              tag={teaser('plannedTag')}
              ctaLabel={t('cta')}
              ctaHref={href}
            />
            <PlanCard
              featured
              title={t('proTitle')}
              price={t('proPrice')}
              period={t('proPeriod')}
              features={t.raw('proFeatures') as string[]}
              tag={teaser('plannedTag')}
              ctaLabel={t('cta')}
              ctaHref={href}
            />
          </div>

          <p className="mx-auto mt-10 max-w-xl text-center text-lg font-semibold text-primary">{t('firstMonthFree')}</p>

          <div className="mx-auto mt-16 max-w-2xl">
            <h2 className="font-display text-2xl font-extrabold text-primary sm:text-3xl">{t('faqHeading')}</h2>
            <div className="mt-6 space-y-3">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  name="pricing-faq"
                  className="group rounded-2xl bg-white ring-1 ring-primary/10 transition-shadow open:shadow-lift open:ring-brand-green/30"
                >
                  <summary className="flex min-h-[64px] cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-5 py-4 font-display font-bold text-primary marker:hidden [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary-container text-primary transition-all duration-200 group-open:rotate-45 group-open:bg-primary group-open:text-white">
                      <Plus className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </summary>
                  <p className="px-5 pb-5 leading-relaxed text-on-surface-variant">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
