import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type Variant = 'primary' | 'secondary' | 'light' | 'amber' | 'outline-light';
type Size = 'md' | 'lg';

const base =
  'group inline-flex items-center justify-center gap-2 rounded-2xl font-bold transition-all duration-200 active:scale-[0.98] select-none';

const variants: Record<Variant, string> = {
  primary:
    'bg-primary text-white shadow-btn hover:-translate-y-0.5 hover:bg-primary-container hover:shadow-lift',
  secondary:
    'bg-white text-primary border border-primary/15 shadow-resting hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-float',
  light: 'bg-white text-primary shadow-lift hover:-translate-y-0.5 hover:bg-primary-fixed',
  amber: 'bg-brand-amber text-primary shadow-btn hover:-translate-y-0.5 hover:brightness-105',
  'outline-light': 'border border-white/35 text-white hover:bg-white/10 hover:border-white/60',
};

const sizes: Record<Size, string> = {
  md: 'min-h-[48px] px-5 py-2.5 text-[0.95rem]',
  lg: 'min-h-[56px] px-7 py-3.5 text-base',
};

export function buttonClasses(variant: Variant = 'primary', size: Size = 'md', extra = ''): string {
  return `${base} ${variants[variant]} ${sizes[size]} ${extra}`.trim();
}

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  /** Show the trailing arrow (nudges right on hover). */
  arrow?: boolean;
  className?: string;
  onClick?: () => void;
}

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  size = 'md',
  arrow = false,
  className = '',
  onClick,
}: ButtonLinkProps) {
  const classes = buttonClasses(variant, size, className);
  const content = (
    <>
      {children}
      {arrow && (
        <ArrowRight
          className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      )}
    </>
  );

  // In-page anchors use a plain <a>; everything else goes through next/link.
  if (href.startsWith('#')) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} onClick={onClick}>
      {content}
    </Link>
  );
}
