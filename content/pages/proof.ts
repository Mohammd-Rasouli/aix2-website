/**
 * Proof library (/proof). Source: SS "Proof", LC Proof and selector. The case cards themselves come
 * from content/home.ts `cases` and the case pages; this file holds the headline, subhead and filters.
 */
export const proofLibrary = {
  route: '/proof',
  seo: {
    title: 'AIx2 · Customers',
    description: 'Results that clients measured themselves, with the measurement window stated and modelled values labelled.',
  },
  hero: {
    name: 'Customers',
    what: 'Client cases, with filters',
    title: 'Results our clients measured themselves.',
    subhead: 'Every number comes from the client’s own systems, with the measurement window stated. Where a value is modelled, we say so.',
  },
  filters: {
    audience: ['Company', 'Investor'],
    // CC-41: filters follow the cases on the site and the menu's goal names (2026-10-30).
    industry: ['Industrial manufacturing', 'Technology distribution & export', 'Software & project delivery', 'IT & managed services', 'Education & consulting'],
    need: ['Diagnosis', 'Optimal design of processes and data governance', 'Connecting strategy to data and processes', 'Monitoring implementation'], // CC-45
    region: ['Turkey', 'Germany', 'Europe', 'Canada', 'United States', 'United Arab Emirates'],
    engagement: ['Due diligence', 'Managed service'],
  },
  /** NEW (CC-14): SS describes the update; this is the neutral line shown under each card. */
  oneYearLater: 'One year later: whether the change held, with a new figure.',
};
