import { framing, steps } from '@/content/home';
import { SectionHead } from '@/components/ds/SectionHead';
import { StepSequence } from '@/components/ds/StepSequence';
import shell from './Section.module.css';

/** How we get the as-built (LC section 4): five steps on a sticky rail. */
export function HowSection({ mark = '04' }: { mark?: string }) {
  const f = framing.how!;
  return (
    <section id="how" data-sheet="4" className={`${shell.section} ${shell.scene}`} aria-labelledby="how-title">
      <SectionHead id="how-title" mark={mark} name={steps.eyebrow} what={f.what} title={steps.headline} body={steps.subhead} />
      <StepSequence items={steps.items} line={steps.line} link={steps.link} />
    </section>
  );
}
