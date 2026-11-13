import { useTranslations } from 'next-intl';
import { MessageCircle } from 'lucide-react';

// One calm tint per language pill; the last ("Mix") is the dashed, combined one.
const STYLES = [
  'bg-white text-primary ring-1 ring-primary/10 -rotate-2 animate-float',
  'bg-brand-amber text-primary -rotate-1 [animation-delay:-2s] animate-float-slow',
  'bg-primary text-white rotate-2 [animation-delay:-4s] animate-float',
  'bg-transparent text-primary border-2 border-dashed border-primary/40 rotate-1 animate-float-slow',
];

export default function LanguagesStrip() {
  const t = useTranslations('languagesStrip');
  const pills = t.raw('pills') as string[];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-tertiary-fixed/70 via-surface to-secondary-container/60 py-16 md:py-24">
      <div className="container-x text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-brand-green shadow-float">
          <MessageCircle className="h-7 w-7" aria-hidden="true" />
        </span>
        <h2 className="mx-auto mt-6 max-w-3xl font-display text-balance text-3xl font-extrabold leading-tight tracking-tight text-primary sm:text-5xl">
          {t('heading')}
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-lg text-on-surface-variant">{t('sub')}</p>

        <ul className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {pills.map((pill, i) => (
            <li
              key={pill}
              className={`rounded-full px-7 py-3.5 font-display text-2xl font-extrabold shadow-float sm:px-10 sm:py-5 sm:text-4xl ${STYLES[i % STYLES.length]}`}
            >
              {pill}
            </li>
          ))}
        </ul>

        <p className="mt-10 text-on-surface-variant">{t('note')}</p>
      </div>
    </section>
  );
}
