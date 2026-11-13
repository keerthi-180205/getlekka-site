import { useTranslations } from 'next-intl';
import { ArrowLeftRight, KeyRound, Send, ShieldCheck, Trash2 } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';

const POINTS = [
  { key: 'p1', icon: KeyRound },
  { key: 'p2', icon: ArrowLeftRight },
  { key: 'p3', icon: Send },
  { key: 'p4', icon: Trash2 },
] as const;

export default function TrustSection() {
  const t = useTranslations('trust');

  return (
    <section className="on-dark relative isolate overflow-hidden bg-primary section-y text-white">
      <div aria-hidden="true" className="ledger-grid-light absolute inset-0 -z-10" />
      <div aria-hidden="true" className="absolute left-1/2 top-0 -z-10 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-brand-green/40 blur-3xl" />

      <div className="container-x">
        <div className="flex flex-col items-center text-center">
          <span className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-brand-amber text-primary shadow-btn">
            <ShieldCheck className="h-9 w-9" aria-hidden="true" />
          </span>
          <SectionHeading eyebrow={t('tag')} title={t('heading')} description={t('intro')} tone="light" />
        </div>

        <ul className="mx-auto mt-14 grid max-w-4xl gap-5 sm:grid-cols-2">
          {POINTS.map(({ key, icon: Icon }) => (
            <li
              key={key}
              className="flex items-start gap-4 rounded-3xl bg-white/[0.07] p-6 ring-1 ring-white/15 backdrop-blur-sm transition-colors hover:bg-white/[0.11]"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-container text-brand-amber ring-1 ring-white/10">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-display text-lg font-extrabold leading-snug text-white">{t(`${key}Title`)}</h3>
                <p className="mt-1.5 leading-relaxed text-primary-fixed/85">{t(key)}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
