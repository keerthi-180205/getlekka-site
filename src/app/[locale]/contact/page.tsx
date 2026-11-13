import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Mail, MapPin } from 'lucide-react';
import PageShell from '@/components/PageShell';
import ContactForm from '@/components/ContactForm';
import { buildMetadata } from '@/lib/seo';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata(locale, 'contact');
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'contactPage' });
  const common = await getTranslations({ locale, namespace: 'common' });

  return (
    <PageShell>
      <div className="hero-bg relative isolate overflow-hidden">
        <div aria-hidden="true" className="ledger-grid absolute inset-0 -z-10" />
        <div className="container-x grid gap-10 py-10 md:py-16 lg:grid-cols-12 lg:gap-12 lg:py-20">
          <div className="lg:col-span-5">
            <div className="on-dark relative isolate overflow-hidden rounded-[2rem] bg-primary p-7 text-white shadow-lift sm:p-10 lg:sticky lg:top-28">
              <div aria-hidden="true" className="ledger-grid-light absolute inset-0 -z-10" />
              <div aria-hidden="true" className="absolute -right-16 -top-16 -z-10 h-56 w-56 rounded-full bg-brand-green/40 blur-3xl" />

              <h1 className="font-display text-balance text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
                {t('title')}
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-primary-fixed/85">{t('subtitle')}</p>

              <div className="mt-8 space-y-4 border-t border-white/15 pt-6">
                <p className="text-sm text-primary-fixed/75">{t('directEmailNotice')}</p>
                <a
                  href={`mailto:${common('email')}`}
                  className="flex min-h-[56px] items-center gap-3 rounded-2xl bg-white/10 px-4 font-display font-bold ring-1 ring-white/15 transition-colors hover:bg-white/15"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-amber text-primary">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </span>
                  {common('email')}
                </a>
                <p className="flex items-center gap-2 text-primary-fixed/80">
                  <MapPin className="h-4 w-4 text-brand-amber" aria-hidden="true" />
                  {common('madeIn')}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </PageShell>
  );
}
