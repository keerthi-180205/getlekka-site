import { notFound } from 'next/navigation';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { Inter, Noto_Sans_Kannada, Plus_Jakarta_Sans } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const display = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const notoKannada = Noto_Sans_Kannada({
  subsets: ['kannada'],
  variable: '--font-noto-kannada',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

// Only these namespaces are used by client components; everything else stays server-side.
const CLIENT_NAMESPACES = ['common', 'nav', 'pilotPage', 'contactPage', 'forms'] as const;

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'kn' }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (locale !== 'en' && locale !== 'kn') {
    notFound();
  }

  setRequestLocale(locale);
  const all = await getMessages();
  const clientMessages = Object.fromEntries(CLIENT_NAMESPACES.map((ns) => [ns, all[ns]]));
  const common = await getTranslations({ locale, namespace: 'common' });

  return (
    <html
      lang={locale === 'kn' ? 'kn-IN' : 'en-IN'}
      className={`${inter.variable} ${display.variable} ${notoKannada.variable}`}
    >
      <body className="bg-surface text-on-surface antialiased min-h-screen flex flex-col font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-primary focus:px-5 focus:py-3 focus:font-semibold focus:text-white"
        >
          {common('skipToContent')}
        </a>
        <NextIntlClientProvider locale={locale} messages={clientMessages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
