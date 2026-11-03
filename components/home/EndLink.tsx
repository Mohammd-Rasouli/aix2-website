import type { ReactNode } from 'react';
import shell from './Section.module.css';

/** A section's closing link: "See all proof →". */
export function EndLink({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a className={[shell.endLink, className].filter(Boolean).join(' ')} href={href}>
      {children}
      <svg viewBox="0 0 20 12" aria-hidden="true" focusable="false">
        <path d="M0 6h18M13 1l5 5-5 5" />
      </svg>
    </a>
  );
}
