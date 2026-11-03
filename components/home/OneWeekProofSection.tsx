import { oneWeekProof as P } from '@/content/home';
import { SectionHead } from '@/components/ds/SectionHead';
import { OneWeekProofBody } from './OneWeekProof';
import shell from './Section.module.css';

/** Home: the One-Week Proof, right after the problem (CC-66). */
export function OneWeekProofSection({ mark = '03' }: { mark?: string }) {
  return (
    <section id="one-week-proof" className={shell.section} aria-labelledby="one-week-proof-title">
      <SectionHead id="one-week-proof-title" mark={mark} name={P.name} what={P.what} title={P.title} />
      <OneWeekProofBody />
    </section>
  );
}
