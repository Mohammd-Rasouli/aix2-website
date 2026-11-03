import type { ReactNode } from 'react';
import { SiteFooter } from '@/components/ds/SiteFooter';
import { SiteHeader } from '@/components/shell/SiteHeader';
import { SmoothScroll } from '@/components/shell/SmoothScroll';
import styles from './PageShell.module.css';

/** The frame of every inner page: skip link, header with the mega menus, main, footer. */
export function PageShell({ children, page }: { children: ReactNode; page: string }) {
  return (
    <div className={styles.page} data-page={page}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" tabIndex={-1} className={styles.main}>
        {children}
      </main>
      {/* The contact page is the call to action itself, so its footer has no CTA strip (CC-53). */}
      <SiteFooter cta={page !== '/contact'} />
      <SmoothScroll />
    </div>
  );
}
