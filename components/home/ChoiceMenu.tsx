'use client';

import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react';
import styles from './ChoiceMenu.module.css';

interface Props {
  id: string;
  /** What the choice is, e.g. "Role"; read by screen readers and shown atop the menu. */
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
}

/**
 * A blank in a sentence that opens a styled menu (WAI-ARIA select-only combobox). Keyboard: Enter,
 * Space or the arrows open it; arrows, Home and End move; Enter or Space chooses; Escape or Tab
 * closes; typing a letter jumps to the next option that starts with it. Spans only: the menu sits
 * inside the sentence's paragraph, where lists are not allowed.
 */
export function ChoiceMenu({ id, label, value, options, onChange }: Props) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(Math.max(0, options.indexOf(value)));
  const root = useRef<HTMLSpanElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const listId = useId();
  const optId = (i: number) => `${listId}-o${i}`;

  // Close on a click or tap outside.
  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('pointerdown', onDown);
    return () => document.removeEventListener('pointerdown', onDown);
  }, [open]);

  // Keep the active option in view.
  useEffect(() => {
    if (open) document.getElementById(`${listId}-o${active}`)?.scrollIntoView({ block: 'nearest' });
  }, [open, active, listId]);

  const show = () => {
    setActive(Math.max(0, options.indexOf(value)));
    setOpen(true);
  };
  const choose = (i: number) => {
    onChange(options[i]!);
    setOpen(false);
    button.current?.focus();
  };

  const onKey = (e: KeyboardEvent) => {
    const last = options.length - 1;
    if (!open) {
      if (['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(e.key)) {
        e.preventDefault();
        show();
      }
      return;
    }
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setActive((a) => Math.min(last, a + 1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setActive((a) => Math.max(0, a - 1));
        break;
      case 'Home':
        e.preventDefault();
        setActive(0);
        break;
      case 'End':
        e.preventDefault();
        setActive(last);
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        choose(active);
        break;
      case 'Escape':
        e.preventDefault();
        setOpen(false);
        break;
      case 'Tab':
        setOpen(false);
        break;
      default:
        if (e.key.length === 1) {
          const k = e.key.toLowerCase();
          const order = [...options.keys()].map((n) => (active + 1 + n) % options.length);
          const hit = order.find((n) => options[n]!.toLowerCase().startsWith(k));
          if (hit !== undefined) setActive(hit);
        }
    }
  };

  return (
    <span ref={root} className={styles.blank} data-open={open ? 'true' : undefined}>
      <button
        ref={button}
        id={id}
        type="button"
        role="combobox"
        className={styles.button}
        aria-label={`${label}: ${value}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-activedescendant={open ? optId(active) : undefined}
        onClick={() => (open ? setOpen(false) : show())}
        onKeyDown={onKey}
      >
        {value}
        <svg className={styles.caret} viewBox="0 0 10 6" aria-hidden="true" focusable="false">
          <path d="M1 1l4 4 4-4" />
        </svg>
      </button>
      <span className={styles.pop} hidden={!open}>
        <span className={styles.popLabel} aria-hidden="true">
          {label}
        </span>
        <span id={listId} role="listbox" aria-label={label} className={styles.list}>
          {options.map((o, i) => (
            <span
              key={o}
              id={optId(i)}
              role="option"
              aria-selected={o === value}
              data-active={i === active ? 'true' : undefined}
              className={styles.option}
              onPointerEnter={() => setActive(i)}
              onClick={() => choose(i)}
            >
              <span>{o}</span>
              <svg className={styles.check} viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                <path d="M3.5 8.5l3 3 6-7" />
              </svg>
            </span>
          ))}
        </span>
      </span>
    </span>
  );
}
