'use client';

import { useId, useRef, useState, type FormEvent } from 'react';
import { contactForm as c } from '@/content/home';
import { track } from '@/lib/track';
import styles from './ContactForm.module.css';

type Errors = Record<string, string>;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * The contact form (LC fields). Errors are stated in words next to each field and the first
 * one takes focus. The endpoint is a placeholder until OQ-33: nothing is stored or forwarded.
 */
/** `columns`: 3 across a full section (home), 2 beside other content (Contact). */
export function ContactForm({ location = 'home', columns = 3 }: { location?: string; columns?: 2 | 3 }) {
  const uid = useId().replace(/:/g, '');
  const form = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'failed'>('idle');

  const validate = (data: FormData): Errors => {
    const e: Errors = {};
    for (const f of c.fields) {
      const v = String(data.get(f.name) ?? '').trim();
      if (f.required && !v) e[f.name] = c.errors.required;
      else if (f.type === 'email' && v && !EMAIL.test(v)) e[f.name] = c.errors.email;
    }
    return e;
  };

  const submit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const data = new FormData(ev.currentTarget);
    const e = validate(data);
    setErrors(e);
    const first = Object.keys(e)[0];
    if (first) {
      form.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setState('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      });
      if (!res.ok) throw new Error(String(res.status));
      setState('sent');
      track({ name: 'form_submit', form: `contact_${location}` });
    } catch {
      setState('failed');
    }
  };

  if (state === 'sent') {
    return (
      <div className={styles.sent} role="status">
        <span className={styles.sentMark} aria-hidden="true">
          <svg viewBox="0 0 16 16" focusable="false">
            <path d="M3.5 8.5l3 3 6-7" />
          </svg>
        </span>
        <p className={styles.sentText}>{c.confirmation}</p>
        <p className={styles.pending}>Reply time to confirm · {c.confirmationDependsOn}</p>
      </div>
    );
  }

  return (
    <form ref={form} className={styles.form} onSubmit={submit} noValidate aria-labelledby={`${uid}-t`}>
      <h3 id={`${uid}-t`} className={styles.title}>
        {c.title}
      </h3>
      <div className={styles.fields} data-cols={columns}>
        {c.fields.map((f) => {
          const id = `${uid}-${f.name}`;
          const err = errors[f.name];
          const common = {
            id,
            name: f.name,
            'aria-invalid': err ? true : undefined,
            'aria-describedby': err ? `${id}-err` : undefined,
            required: f.required,
            className: styles.control,
          };
          return (
            <div key={f.name} className={styles.field} data-wide={f.type === 'textarea' ? 'true' : undefined} data-error={err ? 'true' : undefined}>
              <label htmlFor={id} className={styles.label}>
                {f.label}
                {!f.required && f.type !== 'select' && <span className={styles.optional}> ({c.optional})</span>}
              </label>
              {f.type === 'select' ? (
                <div className={styles.selectWrap}>
                  <select {...common} defaultValue={f.options![0]}>
                    {f.options!.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                  <svg viewBox="0 0 10 6" aria-hidden="true" focusable="false">
                    <path d="M1 1l4 4 4-4" />
                  </svg>
                </div>
              ) : f.type === 'textarea' ? (
                <textarea {...common} rows={4} />
              ) : (
                <input {...common} type={f.type} autoComplete={f.autoComplete} />
              )}
              {err && (
                <p id={`${id}-err`} className={styles.error}>
                  <span aria-hidden="true">! </span>
                  {err}
                </p>
              )}
            </div>
          );
        })}
        {/* For bots only: people never see or fill this field. */}
        <div className={styles.trap} aria-hidden="true">
          <label htmlFor={`${uid}-website`}>Website</label>
          <input id={`${uid}-website`} name="website" tabIndex={-1} autoComplete="off" />
        </div>
      </div>
      <div className={styles.actions}>
        <button type="submit" className={styles.submit} disabled={state === 'sending'}>
          {c.submit}
          <svg viewBox="0 0 20 12" aria-hidden="true" focusable="false">
            <path d="M0 6h18M13 1l5 5-5 5" />
          </svg>
        </button>
        {state === 'failed' && (
          <p className={styles.error} role="alert">
            {c.errors.failed}
          </p>
        )}
      </div>
    </form>
  );
}
