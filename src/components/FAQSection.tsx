import { useTranslations } from 'next-intl';
import { Mail, Plus } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';

/** Accordion built on <details>/<summary>: keyboard + screen-reader accessible and works without JS. */
export default function FAQSection() {
  const t = useTranslations('faq');
  const common = useTranslations('common');

  return (
    <section className="section-y relative bg-white">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <SectionHeading eyebrow={t('tag')} title={t('heading')} align="left" />
            <a
              href={`mailto:${common('email')}`}
              className="group mt-8 flex items-center gap-4 rounded-3xl bg-surface p-5 ring-1 ring-primary/10 transition-all hover:-translate-y-0.5 hover:shadow-lift"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-brand-amber">
                <Mail className="h-6 w-6" aria-hidden="true" />
              </span>
              <span className="leading-tight">
                <span className="block font-display font-extrabold text-primary">{t('moreTitle')}</span>
                <span className="block text-brand-green underline-offset-4 group-hover:underline">{common('email')}</span>
              </span>
            </a>
          </div>
        </div>

        <div className="space-y-3 lg:col-span-7">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <details
              key={n}
              name="faq"
              open={n === 1}
              className="group rounded-2xl bg-surface ring-1 ring-primary/10 transition-shadow open:bg-white open:shadow-lift open:ring-brand-green/30"
            >
              <summary className="flex min-h-[64px] cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-5 py-4 font-display text-[1.05rem] font-bold text-primary marker:hidden [&::-webkit-details-marker]:hidden">
                {t(`q${n}`)}
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary-container text-primary transition-all duration-200 group-open:rotate-45 group-open:bg-primary group-open:text-white">
                  <Plus className="h-5 w-5" aria-hidden="true" />
                </span>
              </summary>
              <p className="px-5 pb-5 leading-relaxed text-on-surface-variant">{t(`a${n}`)}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
