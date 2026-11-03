import type { StatNumber } from '@/content/types';

/** US number formatting for stats (locale-ready: pass a locale later for de/tr/fr/ar). */
export function formatStat(n: StatNumber, v: number, locale = 'en-US'): string {
  return `${n.prefix ?? ''}${v.toLocaleString(locale, {
    minimumFractionDigits: n.decimals ?? 0,
    maximumFractionDigits: n.decimals ?? 0,
  })}${n.suffix ?? ''}`;
}
