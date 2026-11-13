import { useTranslations } from 'next-intl';
import { BellRing, Calculator, Mic2, MessageSquare, Moon, RotateCcw, Undo2 } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';

const WAVE = [10, 18, 28, 14, 32, 20, 12, 28, 16, 24, 10, 26, 15, 9, 22, 12, 18, 8];
const BARS = [
  { h: 28, c: 'bg-brand-green' },
  { h: 52, c: 'bg-brand-amber' },
  { h: 36, c: 'bg-secondary' },
  { h: 60, c: 'bg-primary' },
  { h: 44, c: 'bg-brand-green' },
];

export default function FeaturesSection() {
  const t = useTranslations('features');
  const langs = useTranslations('languagesStrip');
  const mock = useTranslations('hero.mockup');
  const pills = langs.raw('pills') as string[];

  const card = 'group relative flex flex-col overflow-hidden rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1.5';
  const light = `${card} bg-white ring-1 ring-primary/10 shadow-resting hover:shadow-lift`;
  const tile = 'flex h-12 w-12 items-center justify-center rounded-2xl';
  const mini = 'mt-auto pt-6';

  return (
    <section className="section-y relative bg-gradient-to-b from-surface to-sage/60">
      <div className="container-x">
        <SectionHeading eyebrow={t('tag')} title={t('heading')} />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {/* f1 — Voice credit book (hero card) */}
          <article className={`${card} on-dark bg-primary text-white shadow-lift md:col-span-2`}>
            <div aria-hidden="true" className="ledger-grid-light absolute inset-0 opacity-70" />
            <div aria-hidden="true" className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-green/40 blur-3xl" />
            <div className="relative grid gap-8 md:grid-cols-12 md:items-center">
              <div className="md:col-span-6">
                <span className={`${tile} bg-brand-amber text-primary`}>
                  <Mic2 className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-extrabold">{t('f1Title')}</h3>
                <p className="mt-3 max-w-md leading-relaxed text-primary-fixed/85">{t('f1Desc')}</p>
              </div>
              <div aria-hidden="true" className="md:col-span-6">
                <div className="flex h-16 items-center justify-center gap-[3px] rounded-2xl bg-white/10 px-4 ring-1 ring-white/15">
                  {WAVE.map((h, i) => (
                    <span
                      key={i}
                      style={{ height: h, animationDelay: `${i * 70}ms` }}
                      className="w-[3px] origin-center animate-wave rounded-full bg-brand-amber"
                    />
                  ))}
                </div>
                <div className="mt-3 flex justify-center gap-2">
                  {pills.map((p) => (
                    <span key={p} className="rounded-full bg-white/10 px-3 py-1 text-sm font-semibold ring-1 ring-white/15">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>

          {/* f2 — Reminders */}
          <article className={light}>
            <span className={`${tile} bg-brand-amber/25 text-gold`}>
              <BellRing className="h-6 w-6" aria-hidden="true" />
            </span>
            <h3 className="mt-5 font-display text-xl font-extrabold text-primary">{t('f2Title')}</h3>
            <p className="mt-3 leading-relaxed text-on-surface-variant">{t('f2Desc')}</p>
            <div aria-hidden="true" className={mini}>
              <div className="flex items-center justify-between rounded-2xl bg-surface p-3 ring-1 ring-primary/10">
                <span className="font-display font-extrabold text-primary">₹1,100</span>
                <span className="rounded-full bg-brand-green px-3 py-1 text-xs font-bold text-white">UPI</span>
              </div>
            </div>
          </article>

          {/* f3 — Day-end calculator (receipt-style visual) */}
          <article className={light}>
            <span className={`${tile} bg-secondary-container text-secondary`}>
              <Calculator className="h-6 w-6" aria-hidden="true" />
            </span>
            <h3 className="mt-5 font-display text-xl font-extrabold text-primary">{t('f3Title')}</h3>
            <p className="mt-3 leading-relaxed text-on-surface-variant">{t('f3Desc')}</p>
            <div aria-hidden="true" className={mini}>
              <div className="paper rounded-2xl border border-line px-4 py-3 pl-12 font-display text-sm font-bold text-on-surface-variant">
                <div className="flex justify-between"><span>500</span><span>+</span></div>
                <div className="flex justify-between"><span>1,200</span><span>+</span></div>
                <div className="flex justify-between"><span>350</span><span>=</span></div>
                <div className="mt-1 border-t-2 border-primary/30 pt-1 text-right text-lg text-primary">₹2,050</div>
              </div>
            </div>
          </article>

          {/* f4 — 9 PM summary */}
          <article className={light}>
            <span className={`${tile} bg-primary text-brand-amber`}>
              <Moon className="h-6 w-6" aria-hidden="true" />
            </span>
            <h3 className="mt-5 font-display text-xl font-extrabold text-primary">{t('f4Title')}</h3>
            <p className="mt-3 leading-relaxed text-on-surface-variant">{t('f4Desc')}</p>
            <div aria-hidden="true" className={mini}>
              <div className="flex h-[4.5rem] items-end gap-2.5 rounded-2xl bg-surface px-4 pb-3 ring-1 ring-primary/10">
                {BARS.map((b, i) => (
                  <span key={i} style={{ height: b.h }} className={`flex-1 rounded-t-lg ${b.c}`} />
                ))}
              </div>
            </div>
          </article>

          {/* f5 — Undo */}
          <article className={light}>
            <span className={`${tile} bg-error-container text-error`}>
              <Undo2 className="h-6 w-6" aria-hidden="true" />
            </span>
            <h3 className="mt-5 font-display text-xl font-extrabold text-primary">{t('f5Title')}</h3>
            <p className="mt-3 leading-relaxed text-on-surface-variant">{t('f5Desc')}</p>
            <div aria-hidden="true" className={mini}>
              <span className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-surface px-5 font-bold text-brand-green ring-1 ring-primary/10">
                <RotateCcw className="h-4 w-4" />
                {mock('undo')}
              </span>
            </div>
          </article>

          {/* f6 — No new app (full-width strip) */}
          <article
            className={`${card} bg-gradient-to-br from-secondary-container to-primary-fixed shadow-resting hover:shadow-lift md:col-span-2 lg:col-span-3`}
          >
            <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <span className={`${tile} h-14 w-14 shrink-0 bg-white text-brand-green shadow-sm`}>
                <MessageSquare className="h-7 w-7" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-display text-xl font-extrabold text-primary">{t('f6Title')}</h3>
                <p className="mt-1 max-w-2xl leading-relaxed text-on-secondary-container">{t('f6Desc')}</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
