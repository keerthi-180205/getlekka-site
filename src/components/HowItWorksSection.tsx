import { useTranslations } from 'next-intl';
import { BellRing, CheckCheck, Mic, RotateCcw } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';

const WAVE = [8, 16, 24, 12, 28, 18, 10, 24, 14, 20, 9, 22, 13, 8, 18];

export default function HowItWorksSection() {
  const t = useTranslations('howItWorks');
  const mock = useTranslations('hero.mockup');

  const steps = [
    {
      n: 1,
      key: 'step1',
      visual: (
        <div className="flex w-full max-w-[17rem] items-center gap-3 rounded-2xl rounded-tr-sm border border-wa-border bg-wa-bubble p-3 shadow-sm">
          <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-green text-white">
            <span className="absolute inset-0 animate-pulse-ring rounded-full" />
            <Mic className="h-5 w-5" />
          </span>
          <span className="flex h-8 flex-1 items-center gap-[3px]">
            {WAVE.map((h, i) => (
              <span
                key={i}
                style={{ height: h, animationDelay: `${i * 80}ms` }}
                className="w-[3px] origin-center animate-wave rounded-full bg-brand-green/70"
              />
            ))}
          </span>
          <span className="text-xs font-semibold text-on-surface-variant">{mock('voiceDuration')}</span>
        </div>
      ),
    },
    {
      n: 2,
      key: 'step2',
      visual: (
        <div className="w-full max-w-[17rem] overflow-hidden rounded-2xl rounded-tl-sm bg-white shadow-sm ring-1 ring-primary/5">
          <div className="px-3.5 pb-2 pt-3">
            <p className="text-[0.9rem] font-bold text-primary">{mock('botResponseTitle')}</p>
            <p className="mt-0.5 text-[0.85rem] text-on-surface-variant">{mock('botResponseDue')}</p>
          </div>
          <div className="flex items-center justify-center gap-1.5 border-t border-surface-container-high py-2 text-sm font-bold text-brand-green">
            <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
            {mock('undo')}
          </div>
        </div>
      ),
    },
    {
      n: 3,
      key: 'step3',
      visual: (
        <div className="flex w-full max-w-[17rem] items-center gap-3 rounded-2xl rounded-tl-sm bg-white p-3.5 shadow-sm ring-1 ring-primary/5">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-amber/25 text-gold">
            <BellRing className="h-5 w-5" aria-hidden="true" />
          </span>
          <p className="flex-1 text-[0.9rem] font-bold leading-snug text-primary">{mock('botResponseSummary')}</p>
          <CheckCheck className="h-4 w-4 shrink-0 text-sky-500" aria-hidden="true" />
        </div>
      ),
    },
  ];

  return (
    <section id="how" className="section-y relative bg-white">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent"
      />
      <div className="container-x">
        <SectionHeading eyebrow={t('tag')} title={t('heading')} />

        <ol className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((s, i) => (
            <li
              key={s.key}
              className="relative flex flex-col rounded-3xl bg-surface p-6 pt-10 ring-1 ring-primary/10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
            >
              {/* Number badge */}
              <span className="absolute -top-5 left-6 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary font-display text-lg font-extrabold text-white shadow-btn">
                {s.n}
              </span>
              {/* Dashed connector to the next step (desktop) */}
              {i < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute -right-8 top-0 hidden h-px w-8 translate-y-[-0.1rem] border-t-2 border-dashed border-primary/25 md:block"
                />
              )}

              <div className="chat-wallpaper flex min-h-[10rem] items-center justify-center rounded-2xl p-4">
                {s.visual}
              </div>

              <span className="eyebrow mt-6 text-brand-green">{t(`${s.key}Tag`)}</span>
              <h3 className="mt-1 font-display text-2xl font-extrabold text-primary">{t(`${s.key}Title`)}</h3>
              <p className="mt-3 leading-relaxed text-on-surface-variant">{t(`${s.key}Desc`)}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
