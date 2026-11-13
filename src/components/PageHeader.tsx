interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}

/** Title band for inner pages: same warm backdrop + ledger grid as the home hero. */
export default function PageHeader({ eyebrow, title, description, children }: PageHeaderProps) {
  return (
    <header className="hero-bg relative isolate overflow-hidden border-b border-primary/10">
      <div aria-hidden="true" className="ledger-grid absolute inset-0 -z-10" />
      <div className="container-x animate-fade-up py-14 text-center md:py-20">
        {eyebrow && (
          <span className="eyebrow inline-flex items-center gap-2 rounded-full bg-secondary-container/70 px-3.5 py-1.5 text-primary ring-1 ring-primary/10">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand-green" />
            {eyebrow}
          </span>
        )}
        <h1 className="section-title mx-auto mt-5 max-w-3xl font-display text-balance text-[2rem] font-extrabold leading-[1.2] tracking-[-0.02em] text-primary sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-on-surface-variant">{description}</p>
        )}
        {children}
      </div>
    </header>
  );
}
