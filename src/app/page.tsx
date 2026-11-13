import { redirect } from 'next/navigation';

// Only reached in `next dev`, where English lives at /en/. In production this file's output
// (a redirect stub) is replaced by the real English home page when
// scripts/copy-en-to-root.mjs copies out/en over out/.
export default function RootRedirect() {
  redirect('/en/');
}
