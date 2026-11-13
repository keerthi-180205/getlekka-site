interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
  tone?: 'dark' | 'light';
  as?: 'h1' | 'h2';
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  tone = 'dark',
  as: Tag = 'h2',
  className = '',
}: SectionHeadingProps) {
  const isLight = tone === 'light';
  const alignment = align === 'center' ? 'mx-auto text-center items-center' : 'items-start text-left';

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment} ${className}`}>
      {eyebrow && (
        <span
          className={`eyebrow inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 ${
            isLight
              ? 'bg-white/10 text-primary-fixed ring-1 ring-white/15'
              : 'bg-secondary-container/70 text-primary ring-1 ring-primary/10'
          }`}
        >
          <span
            aria-hidden="true"
            className={`h-1.5 w-1.5 rounded-full ${isLight ? 'bg-brand-amber' : 'bg-brand-green'}`}
          />
          {eyebrow}
        </span>
      )}
      <Tag
        className={`section-title font-display text-balance text-[1.75rem] font-extrabold leading-[1.22] tracking-[-0.015em] sm:text-4xl lg:text-[2.6rem] ${
          isLight ? 'text-white' : 'text-primary'
        }`}
      >
        {title}
      </Tag>
      {description && (
        <p className={`text-lg leading-relaxed ${isLight ? 'text-primary-fixed/85' : 'text-on-surface-variant'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
