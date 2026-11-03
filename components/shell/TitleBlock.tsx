'use client';

import { useEffect, useState } from 'react';
import { framing } from '@/content/home';
import { site } from '@/content/site';
import styles from './TitleBlock.module.css';

/**
 * The drawing's title block, used as the page-position indicator ("Sheet 03 / 13").
 * Appears after the first screen while the page scrolls, and steps aside when it stops.
 */
export function TitleBlock() {
  const [sheet, setSheet] = useState(1);
  const [shown, setShown] = useState(false);
  const total = site.sheets.length;

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-sheet]'));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setSheet(Number((e.target as HTMLElement).dataset.sheet));
        }
      },
      { rootMargin: '-50% 0px -50% 0px' },
    );
    sections.forEach((s) => io.observe(s));
    // Shown while the page moves, gone a moment after it stops, so it never sits on what is being read.
    let idle: ReturnType<typeof setTimeout> | undefined;
    const onScroll = () => {
      const past = window.scrollY > window.innerHeight * 0.7;
      setShown(past);
      clearTimeout(idle);
      if (past) idle = setTimeout(() => setShown(false), 1600);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      io.disconnect();
      clearTimeout(idle);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const current = site.sheets.find((s) => s.number === sheet) ?? site.sheets[0]!;
  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <aside className={styles.block} data-shown={shown ? 'true' : 'false'} aria-hidden="true">
      <div className={styles.row}>
        <span className={styles.key}>AIx2 · As-built sheet</span>
        <span className={styles.value}>
          {pad(current.number)} / {pad(total)}
        </span>
      </div>
      <div className={styles.name}>
        {current.name}
        {framing[current.id] && current.id !== 'hero' && <span className={styles.what}>{framing[current.id]!.what}</span>}
      </div>
    </aside>
  );
}
