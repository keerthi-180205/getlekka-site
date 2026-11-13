'use client';

import { useEffect, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { ButtonLink } from './ui/Button';
import { pagePath } from '@/lib/paths';

/** Mobile-only "Join free pilot" bar that appears after the hero has scrolled away. */
export default function StickyMobileCTA() {
  const locale = useLocale();
  const common = useTranslations('common');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-primary/10 bg-surface/90 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 shadow-[0_-12px_32px_-16px_rgba(0,52,35,0.3)] backdrop-blur-xl md:hidden">
      <ButtonLink href={pagePath(locale, 'pilot')} size="lg" arrow className="w-full">
        {common('joinPilot')}
      </ButtonLink>
    </div>
  );
}
