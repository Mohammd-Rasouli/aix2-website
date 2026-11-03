'use client';

import { useState } from 'react';
import styles from './TalkVideo.module.css';

/**
 * Click-to-load video: nothing from the video host loads before the visitor asks for it,
 * and then only from the privacy-enhanced domain.
 */
export function TalkVideo({ id, title, labels }: { id?: string; title: string; labels: { play: string; pending: string; note: string } }) {
  const [on, setOn] = useState(false);
  if (!id) {
    return (
      <div className={styles.frame} data-state="pending">
        <span className={styles.lens} aria-hidden="true" />
        <p className={styles.pending}>{labels.pending}</p>
      </div>
    );
  }
  return (
    <div className={styles.frame}>
      {on ? (
        <iframe
          className={styles.iframe}
          src={`https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?autoplay=1&rel=0`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button type="button" className={styles.play} onClick={() => setOn(true)}>
          <span className={styles.lens} aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false">
              <path d="M9 7l8 5-8 5z" />
            </svg>
          </span>
          <span className={styles.playLabel}>{labels.play}</span>
          <span className={styles.note}>{labels.note}</span>
        </button>
      )}
    </div>
  );
}
