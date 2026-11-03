import { site } from '@/content/site';
import { MegaNav } from '@/components/ds/MegaNav';
import styles from './SiteHeader.module.css';

/** Announcement bar (LC section 0) and the main navigation with its mega menus. */
export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  return (
    <>
      {/* Two notes: the One-Week Proof first (CC-68), then the latest Stanford session. Phones show the first. */}
      <p className={styles.bar}>
        <a className={styles.proof} href={site.announcementProof.href}>
          <span className={styles.badge}>{site.announcementProof.badge}</span>
          <span className={styles.long}>{site.announcementProof.label}</span>
          <span className={styles.short}>{site.announcementProof.short}</span>
          <span aria-hidden="true"> →</span>
        </a>
        <span className={styles.sep} aria-hidden="true" />
        <a className={styles.second} href={site.announcement.href}>
          {site.announcement.label}
          <span aria-hidden="true"> →</span>
        </a>
      </p>
      <MegaNav overlay={overlay} />
    </>
  );
}
