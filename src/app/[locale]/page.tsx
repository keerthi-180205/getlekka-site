import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { buildMetadata, SITE_URL } from '@/lib/seo';
import PageShell from '@/components/PageShell';
import HeroSection from '@/components/HeroSection';
import BuiltForStrip from '@/components/BuiltForStrip';
import ProblemSection from '@/components/ProblemSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import FeaturesSection from '@/components/FeaturesSection';
import LanguagesStrip from '@/components/LanguagesStrip';
import TrustSection from '@/components/TrustSection';
import PricingTeaserSection from '@/components/PricingTeaserSection';
import FAQSection from '@/components/FAQSection';
import FinalCTASection from '@/components/FinalCTASection';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata(locale, '');
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const f = await getTranslations({ locale, namespace: 'faq' });
  const common = await getTranslations({ locale, namespace: 'common' });

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'GetLekka',
      url: SITE_URL,
      logo: `${SITE_URL}/logo.svg`,
      email: common('email'),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [1, 2, 3, 4, 5, 6].map((n) => ({
        '@type': 'Question',
        name: f(`q${n}`),
        acceptedAnswer: { '@type': 'Answer', text: f(`a${n}`) },
      })),
    },
  ];

  return (
    <PageShell stickyCta>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <HeroSection />
      <BuiltForStrip />
      <ProblemSection />
      <HowItWorksSection />
      <FeaturesSection />
      <LanguagesStrip />
      <TrustSection />
      <PricingTeaserSection />
      <FAQSection />
      <FinalCTASection />
    </PageShell>
  );
}
