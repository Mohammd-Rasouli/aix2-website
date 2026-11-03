'use client';

import { useEffect, useRef } from 'react';
import type { StatNumber } from '@/content/types';
import { formatStat } from '@/lib/format';

/**
 * Renders the final value on the server (right without JS and for screen readers),
 * then counts up from `start` when `run` turns true. Reduced motion: no count.
 */
export function CountUp({
  value,
  run,
  start = 0,
  duration = 900,
  className,
}: {
  value: StatNumber;
  run: boolean;
  start?: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !run || done.current) return;
    done.current = true;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf = 0;
    const t0 = performance.now();
    const step = (t: number) => {
      const k = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - k, 5); // quint out
      const v = start + (value.value - start) * eased;
      const shown = (value.decimals ?? 0) > 0 ? v : Math.round(v);
      el.textContent = formatStat(value, shown);
      if (k < 1) raf = requestAnimationFrame(step);
    };
    el.textContent = formatStat(value, start);
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [run, value, duration, start]);

  // The animated digits are hidden from assistive tech; the final value is announced once.
  return (
    <span className={className}>
      <span ref={ref} aria-hidden="true">
        {formatStat(value, value.value)}
      </span>
      <span className="visually-hidden">{formatStat(value, value.value)}</span>
    </span>
  );
}
