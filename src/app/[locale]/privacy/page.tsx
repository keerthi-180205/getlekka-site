import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import LegalPage from '@/components/LegalPage';
import { buildMetadata } from '@/lib/seo';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata(locale, 'privacy');
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <LegalPage locale={locale} doc="privacy" />;
}
