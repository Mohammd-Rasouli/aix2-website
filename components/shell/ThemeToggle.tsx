'use client';

import { useEffect, useState } from 'react';
import { DEFAULT_THEME, FAMILY, MODE_KEY, isLightTheme, themeOf, type Theme } from './theme';
import styles from './ThemeToggle.module.css';

/** The current theme on <html>, kept in step with the toggle. For the 3D scene and anything drawn in script. */
export function useTheme(): Theme {
  const [theme, setTheme] = useState<Theme>(DEFAULT_THEME);
  useEffect(() => {
    const el = document.documentElement;
    const read = () => setTheme((el.dataset.theme as Theme) || DEFAULT_THEME);
    read();
    const mo = new MutationObserver(read);
    mo.observe(el, { attributes: true, attributeFilter: ['data-theme'] });
    return () => mo.disconnect();
  }, []);
  return theme;
}

/** Switches between the dark and light mode of the active family, and remembers the choice. */
export function ThemeToggle({ className }: { className?: string }) {
  const theme = useTheme();
  const light = isLightTheme(theme);
  const flip = () => {
    const mode = light ? 'dark' : 'light';
    document.documentElement.dataset.theme = themeOf(FAMILY, mode);
    try {
      localStorage.setItem(MODE_KEY, mode);
    } catch {}
  };
  return (
    <button type="button" className={`${styles.toggle} ${className ?? ''}`} aria-pressed={light} onClick={flip} title={light ? 'Dark theme' : 'Light theme'}>
      <span className="visually-hidden">Light theme</span>
      <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
        {light ? (
          <path d="M15.5 12.6A6.5 6.5 0 0 1 7.4 4.5a6.5 6.5 0 1 0 8.1 8.1Z" />
        ) : (
          <>
            <circle cx="10" cy="10" r="3.4" />
            <path d="M10 2.5v1.8M10 15.7v1.8M2.5 10h1.8M15.7 10h1.8M4.7 4.7l1.3 1.3M14 14l1.3 1.3M4.7 15.3 6 14M14 6l1.3-1.3" />
          </>
        )}
      </svg>
    </button>
  );
}
