import { Hero, type Variant } from '@/components/hero/Hero';
import { RedLines } from '@/components/redlines/RedLines';
import { SiteHeader } from '@/components/shell/SiteHeader';
import { SmoothScroll } from '@/components/shell/SmoothScroll';
import { TitleBlock } from '@/components/shell/TitleBlock';
import styles from './DirectionPage.module.css';

const META: Record<Variant, { name: string; other: Variant; otherName: string }> = {
  a: { name: 'Direction A · Navy ink on light paper', other: 'b', otherName: 'Direction B · White lines on a navy blueprint' },
  b: { name: 'Direction B · White lines on a navy blueprint', other: 'a', otherName: 'Direction A · Navy ink on light paper' },
};

/** Step 3 prototype: the home hero and one inner section (Red lines), in one direction. */
export function DirectionPage({ variant }: { variant: Variant }) {
  const meta = META[variant];
  return (
    <div className={styles.page} data-theme={variant === 'a' ? 'paper' : 'blueprint'} data-direction={variant}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Hero variant={variant} />
        <RedLines variant={variant} />
      </main>
      <footer className={styles.foot}>
        <p className={styles.footName}>{meta.name}</p>
        <p className={styles.footNote}>Design prototype for review: the home hero and the Red lines section. Not for publication.</p>
        <p className={styles.footLinks}>
          <a href={`/directions/${meta.other}`}>See {meta.otherName} →</a>
          <a href="/directions">All directions</a>
        </p>
      </footer>
      <TitleBlock />
      <SmoothScroll />
    </div>
  );
}
