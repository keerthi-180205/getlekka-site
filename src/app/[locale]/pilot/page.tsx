import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ArrowLeftRight, Gift, KeyRound, Send, ShieldCheck, Trash2 } from 'lucide-react';
import PageShell from '@/components/PageShell';
import PilotForm from '@/components/PilotForm';
import { buildMetadata } from '@/lib/seo';

type Props = { params: Promise<{ locale: string }> };

const POINTS = [
  { key: 'p1', icon: KeyRound },
  { key: 'p2', icon: ArrowLeftRight },
  { key: 'p3', icon: Send },
  { key: 'p4', icon: Trash2 },
] as const;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata(locale, 'pilot');
}

export default async function PilotPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'pilotPage' });
  const trust = await getTranslations({ locale, namespace: 'trust' });
  const common = await getTranslations({ locale, namespace: 'common' });

  return (
    <PageShell>
      <div className="hero-bg relative isolate overflow-hidden">
        <div aria-hidden="true" className="ledger-grid absolute inset-0 -z-10" />
        <div className="container-x grid gap-10 py-10 md:py-16 lg:grid-cols-12 lg:gap-12 lg:py-20">
          {/* Left: the pitch and the safety promises */}
          <div className="lg:col-span-5">
            <div className="on-dark relative isolate overflow-hidden rounded-[2rem] bg-primary p-7 text-white shadow-lift sm:p-10 lg:sticky lg:top-28">
              <div aria-hidden="true" className="ledger-grid-light absolute inset-0 -z-10" />
              <div aria-hidden="true" className="absolute -right-16 -top-16 -z-10 h-56 w-56 rounded-full bg-brand-green/40 blur-3xl" />

              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-brand-amber px-3.5 py-1.5 text-sm font-bold text-primary">
                  <Gift className="h-4 w-4" aria-hidden="true" />
                  {common('freeDuringPilot')}
                </span>
                <span className="inline-flex items-center rounded-full bg-white/10 px-3.5 py-1.5 text-sm font-semibold text-primary-fixed ring-1 ring-white/15">
                  {t('badge')}
                </span>
              </div>
              <h1 className="mt-6 font-display text-balance text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
                {t('title')}
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-primary-fixed/85">{t('subtitle')}</p>

              <div className="mt-8 border-t border-white/15 pt-6">
                <p className="flex items-center gap-2 font-display font-bold text-primary-fixed">
                  <ShieldCheck className="h-5 w-5 text-brand-amber" aria-hidden="true" />
                  {trust('tag')}
                </p>
                <ul className="mt-4 space-y-4">
                  {POINTS.map(({ key, icon: Icon }) => (
                    <li key={key} className="flex items-start gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-amber ring-1 ring-white/10">
                        <Icon className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" />
                      </span>
                      <span className="pt-1 leading-snug text-white/95">{trust(key)}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-primary-fixed/75">{t('safeNote')}</p>
              </div>
            </div>
          </div>

          {/* Right: the form */}
          <div className="lg:col-span-7">
            <PilotForm />
          </div>
        </div>
      </div>
    </PageShell>
  );
}
