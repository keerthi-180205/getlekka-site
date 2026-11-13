import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import PageShell from '@/components/PageShell';
import PhoneChatMockup from '@/components/PhoneChatMockup';
import { ButtonLink } from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import Logo from '@/components/ui/Logo';
import PlanCard from '@/components/PlanCard';

// Internal showcase (planner M1). Not indexed; delete this folder before launch (M7).
export const metadata: Metadata = { title: 'Components', robots: { index: false, follow: false } };

export default async function DevComponentsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <PageShell>
      <div className="container-x space-y-16 py-12">
        <SectionHeading as="h1" eyebrow="Dev only" title="Component showcase" description="Buttons, logo, plan card and the chat mockup." />

        <section className="space-y-4">
          <h2 className="font-display text-xl font-extrabold text-primary">Logo</h2>
          <div className="flex flex-wrap items-center gap-8">
            <Logo />
            <div className="on-dark rounded-2xl bg-primary p-5">
              <Logo tone="light" />
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-xl font-extrabold text-primary">Buttons</h2>
          <div className="flex flex-wrap items-center gap-4">
            <ButtonLink href="#" arrow>Primary</ButtonLink>
            <ButtonLink href="#" variant="secondary">Secondary</ButtonLink>
            <ButtonLink href="#" variant="amber">Amber</ButtonLink>
            <div className="on-dark flex gap-4 rounded-2xl bg-primary p-4">
              <ButtonLink href="#" variant="light">Light</ButtonLink>
              <ButtonLink href="#" variant="outline-light">Outline</ButtonLink>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="font-display text-xl font-extrabold text-primary">Plan cards</h2>
          <div className="grid max-w-3xl gap-8 md:grid-cols-2">
            <PlanCard title="Basic" price="₹149" period="/month" features={['Feature one', 'Feature two']} tag="Planned" ctaLabel="Join" ctaHref="#" />
            <PlanCard featured title="Pro" price="₹299" period="/month" features={['Feature one', 'Feature two']} tag="Planned" ctaLabel="Join" ctaHref="#" />
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-xl font-extrabold text-primary">Phone chat mockup</h2>
          <PhoneChatMockup />
        </section>
      </div>
    </PageShell>
  );
}
