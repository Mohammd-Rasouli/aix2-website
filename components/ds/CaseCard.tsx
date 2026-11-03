'use client';

import type { PointerEvent } from 'react';
import type { CaseContent } from '@/content/types';
import { clientLogos } from '@/content/cases/logos';
import { CaseVisual, artKind } from './CaseArt';
import styles from './CaseCard.module.css';

/** Mouse only: the card leans a little toward the pointer. */
function useDepth() {
  const move = (e: PointerEvent<HTMLElement>) => {
    if (e.pointerType !== 'mouse') return;
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty('--ry', `${(x * 3).toFixed(2)}deg`);
    el.style.setProperty('--rx', `${(-y * 3).toFixed(2)}deg`);
  };
  const leave = (e: PointerEvent<HTMLElement>) => {
    e.currentTarget.style.setProperty('--ry', '0deg');
    e.currentTarget.style.setProperty('--rx', '0deg');
  };
  return { onPointerMove: move, onPointerLeave: leave };
}

function Go() {
  return (
    <span className={styles.go} aria-hidden="true">
      <svg viewBox="0 0 12 12" focusable="false">
        <path d="M3.5 2.5h6v6M9.5 2.5l-7 7" />
      </svg>
    </span>
  );
}

/** A proof case: anonymous client, headline, From → To results, how, and who measured. */
export function CaseCard({ item }: { item: CaseContent }) {
  const depth = useDepth();
  return (
    <article className={styles.card} {...depth}>
      {artKind(item.id) && (
        <div className={styles.art}>
          <CaseVisual id={item.id} />
        </div>
      )}
      {item.name && (
        <p className={styles.name}>
          {clientLogos[item.name] ? (
            // eslint-disable-next-line @next/next/no-img-element -- small static mark
            <img src={clientLogos[item.name]!.src} alt={item.name} width={clientLogos[item.name]!.w} height={clientLogos[item.name]!.h} />
          ) : (
            item.name
          )}
        </p>
      )}
      <p className={styles.client}>{item.client}</p>
      {/* CC-66: every engagement began with a one-week proof of concept (USR-10). */}
      <p className={styles.poc}>Started with a one-week proof</p>
      <h3 className={styles.headline}>
        <a className={styles.stretch} href={item.href}>
          {item.headline}
        </a>
      </h3>
      <ul className={styles.stats} data-kind={item.statsKind ?? 'results'}>
        {item.stats.map((s) => (
          <li key={s.label} className={styles.stat}>
            <span className={styles.statLabel}>{s.label}</span>
            <span className={styles.fromTo}>
              <span className={styles.from}>{s.from}</span>
              <span className={styles.arrow} aria-hidden="true">
                →
              </span>
              <span className="visually-hidden"> to </span>
              <span className={styles.to}>{s.to}</span>
            </span>
          </li>
        ))}
      </ul>
      <p className={styles.how}>{item.how}</p>
      <p className={styles.label}>{item.label}</p>
      {item.dependsOn && <p className={styles.pending}>Placeholder until {item.dependsOn} is answered</p>}
      <Go />
    </article>
  );
}
