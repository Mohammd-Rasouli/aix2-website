'use client';

import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { track } from '@/lib/track';
import { LensPlate } from './LensPlate';
import styles from './LensToggle.module.css';

type Lens = 'operator' | 'investor';

interface Props {
  operator: { label: string; line: string };
  investor: { label: string; line: string };
  /** Accessible name of the control. */
  name?: string;
  initial?: Lens;
}

const ORDER: Lens[] = ['operator', 'investor'];

/**
 * Operator / Investor: one company model, two overlays. A radio group: arrow keys
 * move and select, the line under it is announced, and each change fires lens_toggle.
 */
export function LensToggle({ operator, investor, name = 'Choose a lens', initial = 'operator' }: Props) {
  const [lens, setLens] = useState<Lens>(initial);
  const buttons = useRef<Record<Lens, HTMLButtonElement | null>>({ operator: null, investor: null });
  const content = { operator, investor };

  // The 3D scene, where it runs, shows the same lens.
  useEffect(() => {
    window.dispatchEvent(new CustomEvent('aix2:lens', { detail: lens }));
  }, [lens]);

  const choose = (next: Lens, focus = false) => {
    if (next !== lens) {
      setLens(next);
      track({ name: 'lens_toggle', lens: next });
    }
    if (focus) buttons.current[next]?.focus();
  };

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    const i = ORDER.indexOf(lens);
    if (['ArrowRight', 'ArrowDown'].includes(e.key)) {
      e.preventDefault();
      choose(ORDER[(i + 1) % ORDER.length]!, true);
    } else if (['ArrowLeft', 'ArrowUp'].includes(e.key)) {
      e.preventDefault();
      choose(ORDER[(i - 1 + ORDER.length) % ORDER.length]!, true);
    } else if (e.key === 'Home') {
      e.preventDefault();
      choose('operator', true);
    } else if (e.key === 'End') {
      e.preventDefault();
      choose('investor', true);
    }
  };

  return (
    <div className={styles.wrap} data-lens={lens}>
      <div className={styles.toggle} role="radiogroup" aria-label={name} onKeyDown={onKey}>
        <span className={styles.thumb} aria-hidden="true" />
        {ORDER.map((id) => (
          <button
            key={id}
            ref={(el) => {
              buttons.current[id] = el;
            }}
            type="button"
            role="radio"
            aria-checked={lens === id}
            tabIndex={lens === id ? 0 : -1}
            className={styles.option}
            onClick={() => choose(id)}
          >
            {content[id].label}
          </button>
        ))}
      </div>
      <p className={styles.line} aria-live="polite">
        <span className={styles.lineLabel}>{content[lens].label}:</span> {content[lens].line}
      </p>
      <div className={styles.plate} data-scene-anchor="lens">
        <LensPlate lens={lens} label={`${content[lens].label}: ${content[lens].line}`} />
      </div>
    </div>
  );
}
