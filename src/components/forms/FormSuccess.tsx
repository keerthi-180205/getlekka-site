import { CheckCircle2 } from 'lucide-react';
import { ButtonLink } from '../ui/Button';

interface FormSuccessProps {
  title: string;
  message: string;
  backLabel: string;
  backHref: string;
}

export default function FormSuccess({ title, message, backLabel, backHref }: FormSuccessProps) {
  return (
    <div
      role="status"
      className="rounded-[2rem] bg-white p-8 text-center shadow-lift ring-1 ring-primary/10 sm:p-12"
    >
      <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-secondary-container">
        <CheckCircle2 className="h-11 w-11 text-brand-green" aria-hidden="true" />
      </span>
      <h2 className="mt-6 font-display text-3xl font-extrabold text-primary">{title}</h2>
      <p className="mx-auto mt-3 max-w-sm text-lg leading-relaxed text-on-surface-variant">{message}</p>
      <div className="mt-8 flex justify-center">
        <ButtonLink href={backHref} arrow>
          {backLabel}
        </ButtonLink>
      </div>
    </div>
  );
}
