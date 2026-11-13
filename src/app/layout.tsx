// Pass-through root layout. The real <html>/<body> live in [locale]/layout.tsx (per-locale
// `lang`) and in not-found.tsx. Next requires a root layout file for `next dev` to compile.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
