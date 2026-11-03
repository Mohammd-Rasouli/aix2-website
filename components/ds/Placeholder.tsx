import type { ReactNode } from 'react';
import styles from './Placeholder.module.css';

/** A visible mark on content that is still to be confirmed (listed in docs/open-questions.md). */
export function Placeholder({ children, question }: { children: ReactNode; question?: string }) {
  return (
    <span className={styles.placeholder} title={question ? `To confirm: ${question}` : 'To confirm'}>
      {children}
      <span className={styles.flag}>to confirm{question ? ` · ${question}` : ''}</span>
    </span>
  );
}
