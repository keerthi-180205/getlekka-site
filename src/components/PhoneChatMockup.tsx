import { useTranslations } from 'next-intl';
import {
  BatteryFull,
  Calculator,
  Camera,
  CheckCheck,
  ChevronLeft,
  Mic,
  Moon,
  MoreVertical,
  Play,
  RotateCcw,
  Signal,
  Smile,
  Wifi,
} from 'lucide-react';
import { LogoMark } from './ui/Logo';
import ChatPauseToggle from './ChatPauseToggle';

// Static waveform: heights in px, first few are "already played" (darker).
const WAVE = [6, 12, 18, 10, 22, 14, 8, 20, 12, 16, 7, 18, 11, 6];

/**
 * Illustrative WhatsApp chat. Owner = outgoing (right, green); GetLekka = incoming (left, white).
 * Bubbles 1–2 are always shown; 3–4 loop via CSS (see globals.css) and are all visible when
 * paused or when the user prefers reduced motion.
 */
export default function PhoneChatMockup() {
  const t = useTranslations('hero.mockup');
  const features = useTranslations('features');

  return (
    <figure className="relative isolate mx-auto w-full max-w-[320px]">
      {/* Glow behind the device */}
      <div
        aria-hidden="true"
        className="absolute -inset-x-6 -inset-y-8 -z-10 rounded-[4rem] bg-gradient-to-br from-brand-green/30 via-secondary-fixed-dim/30 to-brand-amber/40 blur-3xl"
      />

      {/* Floating feature chips (decorative; hidden on small phones to avoid crowding) */}
      <div
        aria-hidden="true"
        className="absolute -right-8 top-10 z-20 hidden animate-float items-center gap-2.5 rounded-2xl bg-white p-2.5 pr-4 shadow-lift ring-1 ring-primary/5 sm:flex xl:-right-20"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-amber/20 text-gold">
          <Calculator className="h-5 w-5" />
        </span>
        <span className="text-left leading-tight">
          <span className="block text-[11px] font-semibold text-on-surface-variant">{features('f3Title')}</span>
          <span className="block font-display text-base font-extrabold text-primary">₹2,050</span>
        </span>
      </div>
      <div
        aria-hidden="true"
        className="absolute -left-8 bottom-24 z-20 hidden animate-float-slow items-center gap-2.5 rounded-2xl bg-white p-2.5 pr-4 shadow-lift ring-1 ring-primary/5 sm:flex xl:-left-20"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-brand-amber">
          <Moon className="h-5 w-5" />
        </span>
        <span className="text-left leading-tight">
          <span className="block text-[11px] font-semibold text-on-surface-variant">{features('f4Title')}</span>
          <span className="block font-display text-base font-extrabold text-primary">9:00</span>
        </span>
      </div>

      <div
        data-chat
        role="img"
        aria-label={t('ariaLabel')}
        className="chat-anim relative rounded-[2.75rem] bg-[#0a1f17] p-[9px] shadow-phone ring-1 ring-black/10"
      >
        {/* Speaker notch */}
        <div aria-hidden="true" className="absolute left-1/2 top-[14px] z-10 h-[18px] w-[78px] -translate-x-1/2 rounded-full bg-[#0a1f17]" />

        <div className="overflow-hidden rounded-[2.2rem] bg-wa-wall">
          {/* Status bar */}
          <div aria-hidden="true" className="flex items-center justify-between bg-primary-container px-6 pb-1 pt-2.5 text-[11px] font-semibold text-white">
            <span>9:14</span>
            <span className="flex items-center gap-1">
              <Signal className="h-3 w-3" />
              <Wifi className="h-3 w-3" />
              <BatteryFull className="h-3.5 w-3.5" />
            </span>
          </div>

          {/* Chat header */}
          <div aria-hidden="true" className="flex items-center gap-2 bg-primary-container px-2 pb-2.5 pt-1.5 text-white">
            <ChevronLeft className="h-5 w-5 shrink-0" />
            <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white">
              <LogoMark className="h-7 w-7" />
            </span>
            <span className="min-w-0 flex-1 leading-tight">
              <span className="block truncate text-sm font-bold">{t('title')}</span>
              <span className="block text-[11px] text-primary-fixed/80">{t('online')}</span>
            </span>
            <MoreVertical className="h-5 w-5 shrink-0" />
          </div>

          {/* Messages */}
          <div aria-hidden="true" className="chat-wallpaper flex min-h-[372px] flex-col justify-end gap-2.5 px-3 py-4">
            {/* 1 — owner voice note (outgoing) */}
            <div className="flex justify-end">
              <div className="relative max-w-[88%] rounded-2xl rounded-tr-sm border border-wa-border bg-wa-bubble px-2.5 pb-1.5 pt-2.5 shadow-sm">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-green text-white">
                    <Play className="ml-0.5 h-3.5 w-3.5 fill-current" />
                  </span>
                  <span className="flex h-6 items-center gap-[3px]">
                    {WAVE.map((h, i) => (
                      <span
                        key={i}
                        style={{ height: h }}
                        className={`w-[3px] rounded-full ${i < 5 ? 'bg-brand-green' : 'bg-brand-green/35'}`}
                      />
                    ))}
                  </span>
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/70 text-brand-green">
                    <Mic className="h-3 w-3" />
                  </span>
                </div>
                <p className="mt-2 text-[12.5px] italic leading-snug text-on-surface">“{t('voiceNoteShopkeeper')}”</p>
                <div className="mt-1 flex items-center justify-between text-[10px] text-on-surface-variant">
                  <span>{t('voiceDuration')}</span>
                  <span className="flex items-center gap-1">
                    9:14
                    <CheckCheck className="h-3.5 w-3.5 text-sky-500" />
                  </span>
                </div>
              </div>
            </div>

            {/* 2 — GetLekka confirmation (incoming) */}
            <div className="flex justify-start">
              <div className="max-w-[90%] overflow-hidden rounded-2xl rounded-tl-sm bg-white shadow-sm">
                <div className="px-3 pb-2 pt-2.5">
                  <p className="text-[13px] font-bold leading-snug text-primary">{t('botResponseTitle')}</p>
                  <p className="mt-0.5 text-[12px] leading-snug text-on-surface-variant">{t('botResponseDue')}</p>
                  <p className="mt-1 text-right text-[10px] text-on-surface-variant">9:14</p>
                </div>
                <div className="flex items-center justify-center gap-1.5 border-t border-surface-container-high py-2 text-[12.5px] font-bold text-brand-green">
                  <RotateCcw className="h-3.5 w-3.5" />
                  {t('undo')}
                </div>
              </div>
            </div>

            {/* 3 — owner question (outgoing) */}
            <div className="chat-b3 flex justify-end">
              <div className="rounded-2xl rounded-tr-sm border border-wa-border bg-wa-bubble px-3 py-2 shadow-sm">
                <p className="text-[12.5px] font-medium text-on-surface">{t('questionShopkeeper')}</p>
                <p className="mt-0.5 flex items-center justify-end gap-1 text-[10px] text-on-surface-variant">
                  9:15
                  <CheckCheck className="h-3.5 w-3.5 text-sky-500" />
                </p>
              </div>
            </div>

            {/* 4 — GetLekka summary (incoming), with a typing indicator sharing its slot */}
            <div className="grid">
              <div className="chat-typing col-start-1 row-start-1 flex items-end justify-start">
                <div className="flex items-center gap-1 rounded-2xl rounded-tl-sm bg-white px-3.5 py-3 shadow-sm">
                  <span className="chat-dot h-1.5 w-1.5 rounded-full bg-outline" />
                  <span className="chat-dot h-1.5 w-1.5 rounded-full bg-outline" />
                  <span className="chat-dot h-1.5 w-1.5 rounded-full bg-outline" />
                </div>
              </div>
              <div className="chat-b4 col-start-1 row-start-1 flex justify-start">
                <div className="max-w-[90%] rounded-2xl rounded-tl-sm bg-white px-3 py-2 shadow-sm">
                  <p className="text-[13px] font-bold leading-snug text-primary">{t('botResponseSummary')}</p>
                  <p className="mt-0.5 text-right text-[10px] text-on-surface-variant">9:15</p>
                </div>
              </div>
            </div>
          </div>

          {/* Input bar */}
          <div aria-hidden="true" className="flex items-center gap-2 bg-wa-wall px-2.5 pb-4 pt-1">
            <span className="flex h-10 flex-1 items-center gap-2 rounded-full bg-white px-3 text-outline shadow-sm">
              <Smile className="h-5 w-5" />
              <span className="flex-1" />
              <Camera className="h-5 w-5" />
            </span>
            <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-brand-green text-white">
              <span className="absolute inset-0 animate-pulse-ring rounded-full" />
              <Mic className="h-5 w-5" />
            </span>
          </div>
        </div>
      </div>

      <figcaption className="mt-4 flex flex-wrap items-center justify-center gap-x-3 text-center text-sm text-on-surface-variant">
        <span className="italic">{t('caption')}</span>
        <ChatPauseToggle pauseLabel={t('pause')} playLabel={t('play')} />
      </figcaption>
    </figure>
  );
}
