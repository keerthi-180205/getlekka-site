import { Check } from 'lucide-react';
import { ButtonLink } from './ui/Button';

interface PlanCardProps {
  title: string;
  price: string;
  period: string;
  features: string[];
  featured?: boolean;
  /** Small "Planned" tag so the price is never mistaken for a live plan. */
  tag: string;
  ctaLabel: string;
  ctaHref: string;
}

/** Shared by the home pricing teaser and the full pricing page. */
export default function PlanCard({
  title,
  price,
  period,
  features,
  featured = false,
  tag,
  ctaLabel,
  ctaHref,
}: PlanCardProps) {
  return (
    <div
      className={`relative flex flex-col rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1.5 sm:p-8 ${
        featured
          ? 'on-dark bg-primary text-white shadow-lift ring-1 ring-brand-amber/50'
          : 'bg-white text-on-surface shadow-resting ring-1 ring-primary/10 hover:shadow-lift'
      }`}
    >
      <span
        className={`absolute right-6 top-0 -translate-y-1/2 rounded-full px-3.5 py-1 text-xs font-bold ${
          featured ? 'bg-brand-amber text-primary' : 'bg-secondary-container text-primary'
        }`}
      >
        {tag}
      </span>

      <h3 className={`font-display text-lg font-extrabold ${featured ? 'text-primary-fixed' : 'text-primary'}`}>{title}</h3>
      <p className="mt-3 flex items-baseline gap-1.5">
        <span className={`font-display text-5xl font-extrabold tracking-tight ${featured ? 'text-white' : 'text-primary'}`}>
          {price}
        </span>
        <span className={featured ? 'text-primary-fixed/80' : 'text-on-surface-variant'}>{period}</span>
      </p>

      <ul className="my-7 flex-1 space-y-3.5">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3">
            <span
              className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                featured ? 'bg-brand-amber text-primary' : 'bg-secondary-container text-brand-green'
              }`}
            >
              <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
            </span>
            <span className={featured ? 'text-white/95' : 'text-on-surface'}>{f}</span>
          </li>
        ))}
      </ul>

      <ButtonLink href={ctaHref} variant={featured ? 'amber' : 'secondary'} size="lg" className="w-full">
        {ctaLabel}
      </ButtonLink>
    </div>
  );
}
