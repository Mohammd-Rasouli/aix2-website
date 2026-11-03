import type { Ref } from 'react';
import type { ModelKeyContent } from '@/content/types';
import { cloudPath } from '@/scene/cloud2d';
import styles from './ModelKey.module.css';

export type ModelStage = 'all' | 'lens' | 'built' | 'finding';

const CLOUD = cloudPath(3, 4, 16, 10, 5);

/**
 * The key beside the 3D model, like the legend on a drawing: what the model is,
 * and what each of its three states means. On the live hero the scroll sets
 * `data-stage`, so the row that matches the screen is the one that is lit.
 */
export function ModelKey({ content, stage = 'all', ref, className }: { content: ModelKeyContent; stage?: ModelStage; ref?: Ref<HTMLDivElement>; className?: string }) {
  return (
    <div ref={ref} className={[styles.key, className].filter(Boolean).join(' ')} data-stage={stage}>
      <p className={styles.title}>{content.title}</p>
      <p className={styles.line}>{content.line}</p>
      <ul className={styles.rows}>
        {content.rows.map((r) => (
          <li key={r.id} className={styles.row} data-row={r.id}>
            <span className={styles.swatch} data-kind={r.id} aria-hidden="true">
              {r.id === 'finding' && (
                <svg viewBox="0 0 22 18" focusable="false">
                  <path d={CLOUD} />
                </svg>
              )}
            </span>
            <span className={styles.text}>
              <span className={styles.term}>{r.term}</span> {r.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
