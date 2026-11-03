/**
 * The frame every case page shares: section names from SS's case template, plain "what"
 * lines, and the report request. Strings marked NEW are logged in docs/copy-changes.md (CC-15).
 */
export const caseFrame = {
  heroName: 'Customers',
  keyStatsLabel: 'Key results', // NEW
  parts: {
    profile: { name: 'The client', what: 'Who they are, where they stood, what we did', title: 'The engagement at a glance' }, // NEW (CC-48)
    summary: { name: 'Summary', what: 'The problem, what we did, what changed', title: 'Client issue · Solution · Impact' },
    table: { name: 'From → To', what: 'Each result, before and after', title: 'From → To' },
    measured: { name: 'Results, measured', what: 'How each number was defined and counted', title: 'Results, measured' },
    verified: { name: 'Verification', what: 'Who checked the numbers, and how', title: 'How the results were verified' },
    financial: { name: 'Financial case', what: 'The money, modelled from measured results', title: 'Financial case' },
    story: { name: 'The full story', what: 'The engagement, chapter by chapter, from the client story', title: 'The full story' }, // NEW (CC-40)
    ran: { name: 'How the work ran', what: 'The work, and how the data was protected', title: 'How the work ran and how data was protected' },
    required: { name: 'What it required', what: 'What it took, by category', title: 'What the work required' },
    forYou: { name: 'For you', what: 'What carries over to your company', title: 'What this means for you' },
    timeline: { name: 'Timeline', what: 'When it happened, who owned it, why it worked', title: 'Timeline, owners and what made it work' },
    oneYear: { name: 'One year later', what: 'Whether the change held', title: 'One year later' },
  },
  // NEW (CC-48): the standard client profile.
  profileLabels: {
    description: 'Who the client is',
    situation: 'Where they stood',
    whatWeDid: 'What we did',
    duration: 'How long it took',
    team: 'Who we worked with',
    scope: 'In scope',
  },
  summaryLabels: { issue: 'Client issue', solution: 'Solution', impact: 'Impact' },
  measuredColumns: ['Result', 'Definition', 'Before', 'After', 'Sample', 'Source'],
  ranLabels: { work: 'The work', data: 'How data was protected' }, // NEW
  timelineLabels: { owners: 'Owners', madeItWork: 'What made it work' },
  oneYearPending: 'The one-year update follows twelve months after the engagement: whether the change held, with the new numbers.', // NEW (SS: One year later)
  report: {
    label: 'Request the full engagement report',
    href: '/contact?topic=report',
    line: 'The full engagement report, with the maps, findings and owners, is available on request.', // NEW
  },
  all: { label: 'See all customers', href: '/proof' },
};

