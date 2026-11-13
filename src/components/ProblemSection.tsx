import { useTranslations } from 'next-intl';
import { BookX, Banknote, Users2 } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';

const CARDS = [
  { key: 'card1', icon: BookX, tile: 'bg-error-container text-error' },
  { key: 'card2', icon: Banknote, tile: 'bg-tertiary-fixed text-tertiary-container' },
  { key: 'card3', icon: Users2, tile: 'bg-secondary-container text-secondary' },
] as const;

/** The pain, drawn as pages from a ruled khata (ledger) book. */
export default function ProblemSection() {
  const t = useTranslations('problem');

  return (
    <section className="section-y relative overflow-hidden bg-surface">
      <div className="container-x">
        <SectionHeading eyebrow={t('tag')} title={t('heading')} description={t('intro')} />

        <ul className="mt-14 grid gap-6 md:grid-cols-3 md:gap-7">
          {CARDS.map(({ key, icon: Icon, tile }, i) => (
            <li
              key={key}
              className={`paper group rounded-3xl border border-line p-7 pl-[3.4rem] shadow-resting transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift ${
                i === 0 ? 'md:-rotate-1' : i === 2 ? 'md:rotate-1' : ''
              } md:hover:rotate-0`}
            >
              <span
                aria-hidden="true"
                className="absolute right-5 top-3 font-display text-6xl font-extrabold text-primary/[0.06]"
              >
                0{i + 1}
              </span>
              <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${tile} shadow-sm`}>
                <Icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-6 font-display text-xl font-extrabold text-primary">{t(`${key}Title`)}</h3>
              <p className="mt-3 leading-relaxed text-on-surface-variant">{t(`${key}Desc`)}</p>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-12 max-w-2xl text-center font-display text-xl font-bold leading-snug text-primary sm:text-2xl">
          {t('closing')}
        </p>
      </div>
    </section>
  );
}
