'use client';

import { useEffect, useRef, useState, useSyncExternalStore } from 'react';

function subscribeMedia(query: string) {
  return (callback: () => void) => {
    const mql = window.matchMedia(query);
    mql.addEventListener('change', callback);
    return () => mql.removeEventListener('change', callback);
  };
}

/** Live media-query match. Server snapshot is `serverDefault`. */
export function useMediaQuery(query: string, serverDefault = false): boolean {
  return useSyncExternalStore(
    subscribeMedia(query),
    () => window.matchMedia(query).matches,
    () => serverDefault,
  );
}

export function useReducedMotion(): boolean {
  return useMediaQuery('(prefers-reduced-motion: reduce)', false);
}

/** True once the element has entered the viewport (fires once). */
export function useInViewOnce<T extends Element>(rootMargin = '0px 0px -15% 0px') {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [inView, rootMargin]);
  return { ref, inView };
}
