'use client';

import { useEffect, useRef } from 'react';

/**
 * A figure that counts up once, in step with its drawing (CC-77). The server renders the final value, so
 * the number is right without script and for assistive tech; with motion allowed, the client counts from 0.
 */
export function CountUp({ value, suffix = '', delay = 0, duration = 900, className }: { value: number; suffix?: string; delay?: number; duration?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf = 0;
    const start = performance.now() + delay;
    el.textContent = `0${suffix}`;
    const tick = (now: number) => {
      const t = Math.min(1, Math.max(0, (now - start) / duration));
      const e = 1 - Math.pow(1 - t, 3);
      el.textContent = `${Math.round(value * e)}${suffix}`;
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value, suffix, delay, duration]);
  return (
    <span ref={ref} className={className}>
      {value}
      {suffix}
    </span>
  );
}
