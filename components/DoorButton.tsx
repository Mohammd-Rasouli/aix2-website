'use client';

import { track } from '@/lib/track';
import type { DoorContent } from '@/content/types';
import styles from './DoorButton.module.css';

/**
 * One of the two doors. The glyph is a door in plan view, as drawn on an architect's
 * sheet, inside the AIx2 lens: on hover the lens lights and the door swings open.
 * `force` shows a state on /styleguide without the pointer.
 */
export function DoorButton({ door, location, force }: { door: DoorContent; location: string; force?: 'hover' | 'focus' | 'active' }) {
  return (
    <a
      className={styles.door}
      href={door.href}
      data-door={door.id}
      data-force={force}
      onClick={() => track({ name: 'door_click', door: door.id, location })}
    >
      <span className={styles.lens} aria-hidden="true">
        <svg className={styles.glyph} viewBox="0 0 24 24" focusable="false">
          <path className={styles.wall} d="M1.5 20H5M19 20h3.5" />
          <path className={styles.arc} d="M19 20A14 14 0 0 0 5 6" pathLength={1} />
          <path className={styles.leaf} d="M5 20H19" />
          <circle className={styles.hinge} cx="5" cy="20" r="1.1" />
        </svg>
      </span>
      <span className={styles.label}>{door.label}</span>
      <svg className={styles.arrow} viewBox="0 0 20 12" aria-hidden="true" focusable="false">
        <path d="M0 6h18M13 1l5 5-5 5" />
      </svg>
    </a>
  );
}
