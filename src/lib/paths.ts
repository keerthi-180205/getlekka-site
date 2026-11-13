/** URL helpers shared by server and client components (no server-only imports here). */

/**
 * Production: English at `/` (scripts/copy-en-to-root.mjs copies out/en to out/), Kannada at `/kn`.
 * `next dev` has no such copy, so English lives under `/en` there and links must say so.
 */
export function localePrefix(locale: string): string {
  if (locale === 'kn') return '/kn';
  return process.env.NODE_ENV === 'development' ? '/en' : '';
}

/** `pagePath('kn', 'pilot')` → `/kn/pilot/`; `pagePath('en')` → `/`. */
export function pagePath(locale: string, page = ''): string {
  const base = localePrefix(locale);
  return page ? `${base}/${page}/` : `${base}/`;
}
