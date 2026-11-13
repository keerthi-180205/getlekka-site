import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { MapPin, Quote } from 'lucide-react';
import PageShell from '@/components/PageShell';
import PageHeader from '@/components/PageHeader';
import { ButtonLink } from '@/components/ui/Button';
import { buildMetadata } from '@/lib/seo';
import { pagePath } from '@/lib/paths';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata(locale, 'about');
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'aboutPage' });

  // Paragraphs still wrapped in [brackets] are owner placeholders ("to be added by …").
  // Keep them out of the public page until real text replaces them in messages/*.json.
  const story = [t('storyP1'), t('storyP2'), t('storyP3')].filter((p) => !p.trim().startsWith('['));

  return (
    <PageShell>
      <PageHeader eyebrow={t('missionTag')} title={t('mission')}>
        <p className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-semibold text-primary shadow-float ring-1 ring-primary/10">
          <MapPin className="h-4 w-4 text-brand-green" aria-hidden="true" />
          {t('locationBadge')}
        </p>
      </PageHeader>

      <section className="section-y bg-surface">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <div className="on-dark relative isolate overflow-hidden rounded-3xl bg-primary p-8 text-white shadow-lift lg:sticky lg:top-28">
              <div aria-hidden="true" className="ledger-grid-light absolute inset-0 -z-10" />
              <Quote className="h-10 w-10 text-brand-amber" aria-hidden="true" />
              <h2 className="mt-5 font-display text-2xl font-extrabold leading-snug">{t('storyHeading')}</h2>
            </div>
          </aside>

          <div className="space-y-6 text-lg leading-relaxed text-on-surface lg:col-span-8">
            {story.map((p, i) => (
              <p key={p} className={i === 0 ? 'text-xl font-medium text-primary' : ''}>
                {p}
              </p>
            ))}

            <div className="on-dark relative isolate mt-12 overflow-hidden rounded-3xl bg-primary-container p-8 text-center text-white sm:p-10">
              <div aria-hidden="true" className="ledger-grid-light absolute inset-0 -z-10" />
              <h2 className="font-display text-2xl font-extrabold sm:text-3xl">{t('ctaHeading')}</h2>
              <div className="mt-6 flex justify-center">
                <ButtonLink href={pagePath(locale, 'pilot')} variant="amber" size="lg" arrow>
                  {t('ctaButton')}
                </ButtonLink>
              </div>
              <p className="mt-5 text-base">
                <a
                  href={pagePath(locale, 'contact')}
                  className="font-semibold text-primary-fixed underline underline-offset-4 hover:text-white"
                >
                  {t('contactLink')}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
