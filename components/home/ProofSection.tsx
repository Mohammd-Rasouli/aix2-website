import { cases, framing, proofHead } from '@/content/home';
import { CaseCard } from '@/components/ds/CaseCard';
import { SectionHead } from '@/components/ds/SectionHead';
import shell from './Section.module.css';
import styles from './ProofSection.module.css';

/** Proof (LC section 7): four cases and the library. */
export function ProofSection({ mark = '07' }: { mark?: string }) {
  const f = framing.proof!;
  return (
    <section id="proof" data-sheet="7" className={shell.section} aria-labelledby="proof-title">
      <SectionHead id="proof-title" mark={mark} name={proofHead.eyebrow} what={f.what} title={proofHead.headline} body={proofHead.subhead} />
      <ul className={styles.grid}>
        {cases.map((c) => (
          <li key={c.id}>
            <CaseCard item={c} />
          </li>
        ))}
        {/* The library tile fills what is left of the last row of three. */}
        <li className={styles.allCell} style={{ ['--span' as string]: 3 - (cases.length % 3 || 3) || 3 }}>
          <nav className={styles.all} aria-label={proofHead.endLink.label}>
            <a className={styles.allHead} href={proofHead.endLink.href}>
              <span className={styles.allLabel}>{proofHead.endLink.label}</span>
              <span className={styles.allArrow} aria-hidden="true">
                <svg viewBox="0 0 20 12" focusable="false">
                  <path d="M0 6h18M13 1l5 5-5 5" />
                </svg>
              </span>
            </a>
            <ul className={styles.allList}>
              {cases.map((c) => (
                <li key={c.id}>
                  <a href={c.href}>{c.client.split(' · ').slice(0, 2).join(' · ')}</a>
                </li>
              ))}
            </ul>
          </nav>
        </li>
      </ul>
    </section>
  );
}
