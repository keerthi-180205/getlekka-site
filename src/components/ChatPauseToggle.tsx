'use client';

import { useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';

/**
 * Pause/play for the looping chat animation (WCAG 2.2.2). The mockup itself is server
 * rendered; this toggles the `chat-anim` class on the nearest `[data-chat]` wrapper.
 * When paused, every message is simply shown. Hidden entirely for reduced-motion users,
 * who never get the animation in the first place.
 */
export default function ChatPauseToggle({ pauseLabel, playLabel }: { pauseLabel: string; playLabel: string }) {
  const ref = useRef<HTMLButtonElement>(null);
  const [playing, setPlaying] = useState(true);

  const toggle = () => {
    const chat = ref.current?.closest('[data-chat]');
    chat?.classList.toggle('chat-anim', !playing);
    setPlaying(!playing);
  };

  return (
    <button
      ref={ref}
      type="button"
      onClick={toggle}
      aria-pressed={!playing}
      className="inline-flex min-h-[44px] items-center gap-2 rounded-full px-4 text-sm font-semibold text-on-surface-variant transition-colors hover:bg-primary/5 hover:text-primary motion-reduce:hidden"
    >
      {playing ? <Pause className="h-4 w-4" aria-hidden="true" /> : <Play className="h-4 w-4" aria-hidden="true" />}
      {playing ? pauseLabel : playLabel}
    </button>
  );
}
