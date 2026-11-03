'use client';

import { useEffect, useRef, type ReactNode } from 'react';

/**
 * Marks its child `data-in="true"` once a quarter of it is on screen, so CSS can play the
 * diagram's entrance once. Under reduced motion the CSS shows the finished state regardless.
 */
export function Reveal({ children, className, label }: { children: ReactNode; className?: string; label: string }) {
  const el = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = el.current;
    if (!node) return;
    if (!('IntersectionObserver' in window)) {
      node.dataset.in = 'true';
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          node.dataset.in = 'true';
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={el} className={className} role="figure" aria-label={label} data-in="false">
      {children}
    </div>
  );
}
