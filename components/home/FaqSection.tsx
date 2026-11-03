import { PlanBackdrop, planSection } from '@/components/ds/PlanBackdrop';
import { faq, framing } from '@/content/home';
import { SectionHead } from '@/components/ds/SectionHead';
import shell from './Section.module.css';
import styles from './FaqSection.module.css';

/** Questions (LC section 12): every answer is in the page; each question opens with a click or a key. */
export function FaqSection({ mark = '12' }: { mark?: string }) {
  const f = framing.faq!;
  return (
    <section id="faq" data-sheet="12" className={`${shell.section} ${planSection}`} aria-labelledby="faq-title">
      <PlanBackdrop at="left" />
      <div className={styles.layout}>
        <SectionHead id="faq-title" mark={mark} name={faq.eyebrow} what={f.what} title={faq.headline} className={styles.head} />
        <div className={styles.list}>
          {faq.items.map((it, i) => (
            <details key={it.q} className={styles.item} name="faq" open={i === 0}>
              <summary className={styles.q}>
                <span>{it.q}</span>
                <span className={styles.sign} aria-hidden="true" />
              </summary>
              <p className={styles.a}>{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
