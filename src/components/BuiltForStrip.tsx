import { useTranslations } from 'next-intl';
import { Pill, Scissors, ShoppingBasket, Smartphone, Sparkles, Store } from 'lucide-react';

const ICONS = [ShoppingBasket, Pill, Scissors, Sparkles, Smartphone, Store];

/** Who it's for, at a glance. Audience labels only — no logos, counts or testimonials. */
export default function BuiltForStrip() {
  const t = useTranslations('builtFor');
  const items = t.raw('items') as string[];

  return (
    <section aria-label={t('heading')} className="border-y border-primary/10 bg-white">
      <div className="container-x flex flex-col items-center gap-x-8 gap-y-4 py-6 lg:flex-row lg:justify-between">
        <div className="max-w-md text-center lg:text-left">
          <p className="font-display text-lg font-bold leading-snug text-primary">{t('heading')}</p>
          <p className="mt-1 text-[0.95rem] leading-relaxed text-on-surface-variant">{t('sub')}</p>
        </div>
        <ul className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {items.map((label, i) => {
            const Icon = ICONS[i] ?? ShoppingBasket;
            return (
              <li
                key={label}
                className="inline-flex items-center gap-2 rounded-full bg-surface px-4 py-2 text-[0.95rem] font-semibold text-on-surface ring-1 ring-primary/10"
              >
                <Icon className="h-4 w-4 text-brand-green" aria-hidden="true" />
                {label}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
