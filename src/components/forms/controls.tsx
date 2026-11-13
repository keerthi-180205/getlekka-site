import { AlertCircle } from 'lucide-react';

export const inputClass =
  'block w-full min-h-[56px] rounded-2xl border border-line bg-white px-4 text-base text-on-surface shadow-resting transition-all placeholder:text-outline focus:border-brand-green focus:outline-none focus:ring-4 focus:ring-brand-green/15 aria-[invalid=true]:border-error aria-[invalid=true]:ring-4 aria-[invalid=true]:ring-error/10';

interface FieldProps {
  id: string;
  label: string;
  required?: boolean;
  /** Visually hidden text announced after the label for required fields. */
  requiredSr?: string;
  error?: string;
  help?: string;
  children: React.ReactNode;
}

/** Label + control + help + error, wired together for assistive tech via ids. */
export function Field({ id, label, required, requiredSr, error, help, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block font-display text-[0.95rem] font-bold text-primary">
        {label}
        {required && (
          <>
            <span aria-hidden="true" className="ml-1 text-error">
              *
            </span>
            <span className="sr-only"> ({requiredSr})</span>
          </>
        )}
      </label>
      {children}
      {help && !error && (
        <p id={`${id}-help`} className="mt-2 text-sm text-on-surface-variant">
          {help}
        </p>
      )}
      <FieldError id={id} message={error} />
    </div>
  );
}

export function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={`${id}-error`} className="mt-2 flex items-start gap-1.5 text-sm font-medium text-error">
      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
      {message}
    </p>
  );
}

/** Builds the aria attributes a control needs from its field state. */
export function describedBy(id: string, opts: { error?: string; help?: string }) {
  const ids = [opts.error ? `${id}-error` : null, opts.help && !opts.error ? `${id}-help` : null].filter(Boolean);
  return {
    'aria-invalid': opts.error ? true : undefined,
    'aria-describedby': ids.length ? ids.join(' ') : undefined,
  } as const;
}

export function ErrorSummary({ message }: { message: string }) {
  return (
    <div
      role="alert"
      className="mb-6 flex items-start gap-3 rounded-2xl bg-error-container p-4 font-medium text-on-error-container"
    >
      <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
      <span>{message}</span>
    </div>
  );
}
