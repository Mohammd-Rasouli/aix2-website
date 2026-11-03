/**
 * Vendor-neutral analytics helper (BRIEF §9). Components call track(); the analytics
 * vendor is wired here later (OQ-32). Until then events go to the dataLayer, if any,
 * and to the console in development.
 */

export type TrackEvent =
  | { name: 'door_click'; door: 'company' | 'investor'; location: string }
  | { name: 'cta_click'; cta: string; location: string }
  | { name: 'lens_toggle'; lens: 'operator' | 'investor' }
  | { name: 'form_submit'; form: string }
  | { name: 'selector_submit'; role: string; industry: string; goal: string };

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function track(event: TrackEvent): void {
  if (typeof window === 'undefined') return;
  const { name, ...props } = event;
  window.dataLayer?.push({ event: name, ...props });
  if (process.env.NODE_ENV === 'development') {
    console.info('[track]', name, props);
  }
}
