'use client';

import { useId, useState, type FormEvent } from 'react';
import { framing, selector as c } from '@/content/home';
import type { SelectorCard } from '@/content/types';
import { ButtonLink } from '@/components/ds/ButtonLink';
import { SectionHead } from '@/components/ds/SectionHead';
import { track } from '@/lib/track';
import { ChoiceMenu } from './ChoiceMenu';
import styles from './StartSelector.module.css';

interface Choice {
  role: string;
  industry: string;
  goal: string;
}

/** LC's rules: consultants get the partner card; some industries swap in their own proof line. */
function resolve({ role, industry, goal }: Choice): SelectorCard & { proofDependsOn?: string } {
  if (role === 'Consultant or outsourcing partner') return c.partner;
  const card = c.cards[goal] ?? c.cards[c.defaults.goal]!;
  const swap = c.industryProof.find((x) => x.industry === industry && (x.goal === goal || x.goal === '*'));
  return swap ? { ...card, proof: swap.proof, facts: swap.facts, proofDependsOn: (swap as { dependsOn?: string }).dependsOn } : card;
}

/** Start where you are: one sentence with three choices opens a result card (LC section 2). */
export function StartSelector() {
  const id = useId().replace(/:/g, '');
  const f = framing.start!;
  const [choice, setChoice] = useState<Choice>(c.defaults);
  const [shown, setShown] = useState<Choice | null>(null);

  const set = (k: keyof Choice) => (v: string) =>
    setChoice((prev) => {
      const next = { ...prev, [k]: v };
      // A role can open its own card by default (LC), until the visitor picks a goal themself.
      if (k === 'role' && c.roleGoal[v] && prev.goal === c.defaults.goal) next.goal = c.roleGoal[v]!;
      return next;
    });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setShown(choice);
    track({ name: 'selector_submit', role: choice.role, industry: choice.industry, goal: choice.goal });
  };

  // The card always answers the sentence as it stands; the button records the choice and brings the card into view.
  const live = shown ?? choice;
  const card = resolve(choice);

  return (
    <section id="start" data-sheet="2" className={styles.section} aria-labelledby={`${id}-h`}>
      <SectionHead id={`${id}-h`} mark="02" name={f.name} what={f.what} title={c.heading} layout="narrow" className={styles.head} />

      <form className={styles.form} onSubmit={submit}>
        <p className={styles.sentence}>
          <span>{c.sentence[0]}</span> <ChoiceMenu id={`${id}-role`} label="Role" value={choice.role} options={c.roles} onChange={set('role')} />{' '}
          <span>{c.sentence[1]}</span>{' '}
          <span className={styles.glue}>
            <ChoiceMenu id={`${id}-industry`} label="Industry" value={choice.industry} options={c.industries} onChange={set('industry')} />
            {c.sentence[2].slice(0, 1)}
          </span>
          <span>{c.sentence[2].slice(1)}</span>{' '}
          <span className={styles.glue}>
            <ChoiceMenu id={`${id}-goal`} label="Goal" value={choice.goal} options={c.goals} onChange={set('goal')} />
            {c.sentence[3]}
          </span>
        </p>
        <button type="submit" className={styles.submit}>
          {c.button}
          <svg viewBox="0 0 20 12" aria-hidden="true" focusable="false">
            <path d="M0 6h18M13 1l5 5-5 5" />
          </svg>
        </button>
      </form>

      <div className={styles.result} aria-live="polite">
        {card ? (
          <article key={`${live.role}-${choice.industry}-${choice.goal}`} className={styles.card}>
            <div className={styles.col}>
              <p className={styles.label}>
                <span className={styles.dot} aria-hidden="true" />
                {c.labels.finding}
              </p>
              <h3 className={styles.finding}>{card.headline}</h3>
            </div>
            <div className={styles.col}>
              <p className={styles.label}>{c.labels.start}</p>
              <p className={styles.text}>{card.start}</p>
            </div>
            {card.proof && (
              <div className={styles.col}>
                <p className={styles.label}>{c.labels.proof}</p>
                <p className={styles.proof}>{card.proof}</p>
                {(card.dependsOn || card.proofDependsOn) && <p className={styles.pending}>Placeholder until {card.proofDependsOn ?? card.dependsOn} is answered</p>}
              </div>
            )}
            <div className={styles.action}>
              <ButtonLink href={card.button.href} variant="primary" size="lg" cta={`selector_${choice.goal}`} location="start_selector" arrow>
                {card.button.label}
              </ButtonLink>
            </div>
          </article>
        ) : (
          <div id={`${id}-preview`} className={styles.preview}>
            {[c.labels.finding, c.labels.start, c.labels.proof].map((l) => (
              <div key={l} className={styles.ghost}>
                <p className={styles.label}>{l}</p>
                <span className={styles.ghostLine} />
                <span className={styles.ghostLine} data-short="true" />
              </div>
            ))}
            <p className={styles.previewText}>{c.preview}</p>
          </div>
        )}
      </div>
    </section>
  );
}
