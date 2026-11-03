/**
 * Themes come in two families, each with a dark and a light mode:
 *   brand: the AIx2 palette (Black, Deep Blue #004D80, Grey #D5D5D5, Gold (satin #D4AA4E)); default since 2026-10-30.
 *   warm:  charcoal, cream and gold (direction C), kept for later use at the user's request.
 * To switch the whole site back to warm, set FAMILY to 'warm'. The toggle only flips the mode.
 */
export type Family = 'brand' | 'warm';
export type Mode = 'dark' | 'light';
export type Theme = 'brand' | 'brand-light' | 'warm' | 'light';

export const FAMILY: Family = 'brand';
export const MODE_KEY = 'aix2-mode';

export const themeOf = (family: Family, mode: Mode): Theme =>
  family === 'brand' ? (mode === 'dark' ? 'brand' : 'brand-light') : mode === 'dark' ? 'warm' : 'light';

export const isLightTheme = (t: string | undefined) => t === 'light' || t === 'brand-light';

/** The mode a first visit sees: light (user, 2026-11-02). The header toggle still offers dark. */
export const DEFAULT_MODE: Mode = 'light';

/** The theme the server renders before any saved choice applies. */
export const DEFAULT_THEME: Theme = themeOf(FAMILY, DEFAULT_MODE);

/** Runs in <head> before paint, so a saved dark choice never flashes light first. */
export const themeScript = `try{var m=localStorage.getItem('${MODE_KEY}');if(m==='dark')document.documentElement.dataset.theme=${JSON.stringify(themeOf(FAMILY, 'dark'))}}catch(e){}`;
