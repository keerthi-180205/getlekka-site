import Header from './Header';
import Footer from './Footer';
import StickyMobileCTA from './StickyMobileCTA';

/** Header + <main id="main"> + footer. `stickyCta` adds the mobile "Join free pilot" bar. */
export default function PageShell({
  children,
  stickyCta = false,
}: {
  children: React.ReactNode;
  stickyCta?: boolean;
}) {
  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        {children}
      </main>
      {stickyCta && <StickyMobileCTA />}
      <Footer />
    </>
  );
}
