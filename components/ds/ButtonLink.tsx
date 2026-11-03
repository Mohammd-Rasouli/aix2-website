'use client';

import type { ReactNode } from 'react';
import { track } from '@/lib/track';
import styles from './Button.module.css';

interface Props {
  href: string;
  children: ReactNode;
  /** primary: cream fill, one per view. secondary: outline. text: a link with an arrow. */
  variant?: 'primary' | 'secondary' | 'text';
  size?: 'md' | 'lg';
  /** Fires cta_click with this name. */
  cta?: string;
  location?: string;
  arrow?: boolean;
  className?: string;
  /** Shows a state on /styleguide without the pointer. */
  force?: 'hover' | 'focus' | 'active';
}

/** Every action on the site is a link that looks like one of three buttons. */
export function ButtonLink({ href, children, variant = 'primary', size = 'md', cta, location = 'page', arrow = variant === 'text', className, force }: Props) {
  const external = /^https?:\/\//.test(href);
  return (
    <a
      href={href}
      className={[styles.button, styles[variant], styles[size], className].filter(Boolean).join(' ')}
      data-force={force}
      onClick={cta ? () => track({ name: 'cta_click', cta, location }) : undefined}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <span>{children}</span>
      {arrow && (
        <svg className={styles.arrow} viewBox="0 0 20 12" aria-hidden="true" focusable="false">
          <path d="M0 6h18M13 1l5 5-5 5" />
        </svg>
      )}
      {external && <span className="visually-hidden"> (opens in a new tab)</span>}
    </a>
  );
}
