import type { Metadata } from 'next';
import styles from './index.module.css';

export const metadata: Metadata = {
  title: 'Design directions · AIx2 prototype',
};

/** Step 3 review index. Internal, not linked from the site. */
export default function Directions() {
  return (
    <main className={styles.page} data-theme="paper">
      <p className={styles.kicker}>AIx2 · Step 3 · Two design directions</p>
      <h1 className={styles.title}>Blueprint and red ink, two ways.</h1>
      <p className={styles.lede}>
        Both directions use the same content, the same 3D drawing and the same components. They differ in ground,
        composition and pace. Each covers the home hero and the Red lines section. Scroll slowly through the hero: the
        drawing is scrubbed by scroll.
      </p>
      <ul className={styles.list}>
        <li className={styles.wide}>
          <a href="/directions/c" className={styles.card} data-theme="night">
            <span className={styles.letter}>C</span>
            <span className={styles.name}>The as-built scan · recommended</span>
            <span className={styles.desc}>The company as a point-cloud scan, compared with its official drawing. Data streams into the scan, the pointer moves through it, deviations heat to vermilion, and the scan re-forms into the Δ as Red lines arrives.</span>
          </a>
        </li>
        <li>
          <a href="/directions/a" className={styles.card} data-theme="paper">
            <span className={styles.letter}>A</span>
            <span className={styles.name}>Navy ink on light paper</span>
            <span className={styles.desc}>The marked-up sheet. Editorial, daylight, print-like. The drawing sits beside the copy; the proof sits along the foot of the first screen.</span>
          </a>
        </li>
        <li>
          <a href="/directions/b" className={styles.card} data-theme="blueprint">
            <span className={styles.letter}>B</span>
            <span className={styles.name}>White lines on a navy blueprint</span>
            <span className={styles.desc}>The blueprint wall. Immersive and cinematic. The drawing fills the screen; the copy sits in a title block along the bottom.</span>
          </a>
        </li>
      </ul>
    </main>
  );
}
