'use client';

import { useEffect, useMemo, useState } from 'react';
import type { CaseContent } from '@/content/types';
import { caseTags, type CaseTags } from '@/content/caseTags';
import { CaseCard } from '@/components/ds/CaseCard';
import { ButtonLink } from '@/components/ds/ButtonLink';
import styles from './ProofLibrary.module.css';

type Group = 'audience' | 'industry' | 'need' | 'region' | 'engagement';

interface Props {
  cases: CaseContent[];
  filters: Record<Group, string[]>;
  /** `count` is a template: "{n}" is replaced by the number of cases shown. */
  labels: { groups: Record<Group, string>; all: string; count: string; countOne: string; empty: string; emptyAction: { label: string; href: string } };
}

const GROUPS: Group[] = ['audience', 'industry', 'need', 'region', 'engagement'];

const norm = (s: string) => s.toLowerCase().trim();

const matches = (t: CaseTags | undefined, g: Group, v: string) => {
  if (!t) return false;
  if (g === 'audience') return t.audience.includes(norm(v).includes('invest') ? 'investor' : 'company');
  const val = t[g];
  return Array.isArray(val) ? val.some((x) => norm(x) === norm(v)) : norm(val) === norm(v);
};

/** The Proof library: filter chips that write to the URL, a count that is announced, and the cases. */
export function ProofLibrary({ cases, filters, labels }: Props) {
  const [sel, setSel] = useState<Partial<Record<Group, string>>>({});

  // Read the filters from the URL once, and keep them there as they change.
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const init: Partial<Record<Group, string>> = {};
    for (const g of GROUPS) {
      const v = q.get(g);
      if (v && filters[g].includes(v)) init[g] = v;
    }
    setSel(init);
  }, [filters]);

  const choose = (g: Group, v?: string) => {
    setSel((prev) => {
      const next = { ...prev };
      if (!v || prev[g] === v) delete next[g];
      else next[g] = v;
      const q = new URLSearchParams();
      for (const k of GROUPS) if (next[k]) q.set(k, next[k]!);
      const qs = q.toString();
      window.history.replaceState(null, '', qs ? `?${qs}` : window.location.pathname);
      return next;
    });
  };

  const shown = useMemo(() => cases.filter((c) => GROUPS.every((g) => !sel[g] || matches(caseTags[c.id], g, sel[g]!))), [cases, sel]);
  const anySel = GROUPS.some((g) => sel[g]);

  return (
    <div className={styles.library}>
      <div className={styles.filters}>
        {GROUPS.map((g) => (
          <fieldset key={g} className={styles.group}>
            <legend className={styles.legend}>{labels.groups[g]}</legend>
            <div className={styles.chips}>
              <button type="button" className={styles.chip} aria-pressed={!sel[g]} onClick={() => choose(g)}>
                {labels.all}
              </button>
              {filters[g].map((v) => (
                <button key={v} type="button" className={styles.chip} aria-pressed={sel[g] === v} onClick={() => choose(g, v)}>
                  {v}
                </button>
              ))}
            </div>
          </fieldset>
        ))}
      </div>

      <p className={styles.count} role="status" aria-live="polite">
        {(shown.length === 1 ? labels.countOne : labels.count).replace('{n}', String(shown.length))}
      </p>

      {shown.length === 0 && (
        <div className={styles.empty}>
          <p>{labels.empty}</p>
          <ButtonLink href={labels.emptyAction.href} variant="secondary" size="md" arrow>
            {labels.emptyAction.label}
          </ButtonLink>
        </div>
      )}

      <ul className={styles.grid}>
        {shown.map((c) => (
          <li key={c.id}>
            <CaseCard item={c} />
          </li>
        ))}
      </ul>
    </div>
  );
}
