const AMBER = '#F2A93B';

interface LogoMarkProps {
  className?: string;
  /** `light` = cream bubble with a green ₹, for dark backgrounds. */
  tone?: 'dark' | 'light';
}

/**
 * The GetLekka mark: a speech bubble holding a ₹, with amber "voice" arcs —
 * you speak, and your rupee accounts are recorded.
 * Keep in sync with public/logo-mark*.svg (the exported files for designers/print).
 */
export function LogoMark({ className = 'h-10 w-10', tone = 'dark' }: LogoMarkProps) {
  const bubble = tone === 'dark' ? '#003423' : '#FBF7EF';
  const glyph = tone === 'dark' ? '#FFFFFF' : '#003423';
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="3" width="42" height="34" rx="13" fill={bubble} />
      <path d="M10 33 Q10.5 41 7.5 45 Q17 43.5 22 34 Z" fill={bubble} />
      <g transform="translate(-1.3 0)">
        <path
          d="M13 12 H27 M13 17.5 H27 M16 12 H19 C26 12 26 22.5 19 22.5 H16 L25.5 31"
          stroke={glyph}
          strokeWidth="3.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g stroke={AMBER} strokeWidth="3.1" strokeLinecap="round">
          <path d="M32 15.2 Q35.6 20.5 32 25.8" />
          <path d="M37 11.6 Q42.6 20.5 37 29.4" />
        </g>
      </g>
    </svg>
  );
}

interface LogoProps {
  /** `light` renders the mark and wordmark for dark backgrounds. */
  tone?: 'dark' | 'light';
  className?: string;
}

export default function Logo({ tone = 'dark', className = '' }: LogoProps) {
  const isLight = tone === 'light';
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark tone={tone} className="h-10 w-10 shrink-0 drop-shadow-sm" />
      <span
        className={`font-display text-[1.35rem] font-extrabold leading-none tracking-tight ${
          isLight ? 'text-white' : 'text-primary'
        }`}
      >
        Get<span className={isLight ? 'text-primary-fixed-dim' : 'text-brand-green'}>Lekka</span>
      </span>
    </span>
  );
}
