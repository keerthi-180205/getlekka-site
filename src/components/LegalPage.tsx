import { getTranslations } from 'next-intl/server';
import { FileText } from 'lucide-react';
import PageShell from './PageShell';
import PageHeader from './PageHeader';

type Section = { h: string; p: string[] };

export default async function LegalPage({ locale, doc }: { locale: string; doc: 'privacy' | 'terms' }) {
  const t = await getTranslations({ locale, namespace: 'legal' });
  const sections = t.raw(`${doc}.sections`) as Section[];

  return (
    <PageShell>
      <PageHeader title={t(`${doc}.title`)}>
        <p className="mt-5 text-sm font-semibold text-on-surface-variant">{t('updated')}</p>
        <p className="mx-auto mt-3 inline-flex max-w-xl items-center gap-2 rounded-2xl bg-brand-amber/25 px-4 py-2 text-sm font-medium text-tertiary">
          <FileText className="h-4 w-4 shrink-0" aria-hidden="true" />
          {t('draftNote')}
        </p>
      </PageHeader>

      <article className="section-y bg-surface">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <nav aria-label={t('toc')} className="hidden lg:col-span-4 lg:block">
            <div className="sticky top-28 rounded-3xl bg-white p-6 ring-1 ring-primary/10">
              <p className="eyebrow text-brand-green">{t('toc')}</p>
              <ol className="mt-4 space-y-1">
                {sections.map((s, i) => (
                  <li key={s.h}>
                    <a
                      href={`#sec-${i + 1}`}
                      className="block rounded-xl px-3 py-2 text-[0.95rem] font-medium text-on-surface-variant transition-colors hover:bg-primary/5 hover:text-primary"
                    >
                      {s.h}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>

          <div className="space-y-5 lg:col-span-8">
            {sections.map((s, i) => (
              <section
                key={s.h}
                id={`sec-${i + 1}`}
                className="scroll-mt-24 rounded-3xl bg-white p-6 ring-1 ring-primary/10 sm:p-8"
              >
                <h2 className="font-display text-xl font-extrabold text-primary sm:text-2xl">{s.h}</h2>
                <div className="mt-3 space-y-3 leading-relaxed text-on-surface">
                  {s.p.map((para) => (
                    <p key={para}>{para}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </article>
    </PageShell>
  );
}
