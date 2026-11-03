'use client';

import { useEffect } from 'react';

/**
 * Lenis smooth scrolling, driven by GSAP's ticker so ScrollTrigger stays in sync.
 * Off under reduced motion (BRIEF §5): native scrolling, no hijacking. Desktop with a mouse only.
 * Lenis and GSAP load only when it runs, so phones and reduced-motion visitors never download them.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    // Touch scrolling is never smoothed, so phones and tablets keep native scrolling and no loop runs.
    if (!window.matchMedia('(pointer: fine) and (min-width: 1024px)').matches) return;
    let cancelled = false;
    let teardown: (() => void) | undefined;
    Promise.all([import('lenis'), import('gsap'), import('gsap/ScrollTrigger')]).then(([l, g, s]) => {
      if (cancelled) return;
      const { gsap } = g;
      const { ScrollTrigger } = s;
      gsap.registerPlugin(ScrollTrigger);
      const lenis = new l.default({ lerp: 0.14, smoothWheel: true });
      lenis.on('scroll', ScrollTrigger.update);
      const tick = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
      teardown = () => {
        gsap.ticker.remove(tick);
        lenis.destroy();
      };
    });
    return () => {
      cancelled = true;
      teardown?.();
    };
  }, []);
  return null;
}
