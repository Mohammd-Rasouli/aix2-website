/**
 * Labels for the series showcase (/insights/stanford-ai-investment-series). NEW copy, logged as
 * CC-50. Hosts as listed on lpseminar.stanford.edu. Counts trace to facts S-07, S-09 to S-11.
 * No superlatives beyond what the names and titles show themselves.
 */
export const showcase = {
  seo: {
    title: 'AIx2 · Stanford AI & Investment Series and Stanford LP Seminar',
    description:
      'Sessions at Stanford with the people who allocate capital: chief investment officers of foundations, endowments, pensions and family offices, and the investors they back. Every guest, every session, with recordings.',
  },
  hero: {
    name: 'Stanford sessions',
    what: 'Conversations with the people who allocate capital',
    title: 'Sessions at Stanford with the people who allocate capital.',
    subhead:
      'Chief investment officers of foundations, endowments, pensions and family offices, and the investors they back, on how AI changes the way capital is allocated. Co-hosted and moderated by AIx2.',
    actions: [
      { label: 'Watch on YouTube', href: 'https://www.youtube.com/@DrMohammadRasouli', variant: 'primary' as const },
      { label: 'Stanford LP Seminar page', href: 'https://lpseminar.stanford.edu/', variant: 'secondary' as const },
    ],
  },
  hostsLabel: 'Co-hosted by',
  hosts: [
    { name: 'Mohammad Rasouli', title: 'CEO', org: 'AIx2' },
  ],
  stats: [
    { key: 'guests', label: 'guests on stage', facts: ['S-10'] },
    { key: 'organizations', label: 'organizations represented', facts: ['S-11'] },
    { key: 'lpAllocators', label: 'allocators in the Fall 2026 season', facts: ['S-07'] },
  ] as const,
  roomLabel: 'In the room',
  // CC-54 (user, 2026-11-01): the line in the user's words; only the best-known institutions, newest seasons first.
  roomLine: 'Chief Investment Officers from Top Allocators and Investment Funds Globally',
  room: [
    'Rockefeller Foundation',
    'William and Flora Hewlett Foundation',
    'The James Irvine Foundation',
    'Bush Foundation',
    'The California Endowment',
    'International Monetary Fund',
    'Abu Dhabi Investment Council',
    'Abu Dhabi Pension Fund',
    'Teacher Retirement System of Texas',
    'KfW Capital',
    'Omidyar Network',
    'BlackRock',
    'Khosla Ventures',
    'Greylock',
    'Insight Partners',
    'A16Z Family Office',
    'The Rockefeller University',
    'Texas A&M Foundation',
    'UBC Investment Management',
    'Kansas State University Foundation',
    'Santa Clara University endowment',
    'San Diego City Employees’ Retirement System',
    'Polish Development Fund (PFR)',
    'M.J. Murdock Charitable Trust',
    'Berggruen Holdings',
    'Jefferies Family Office',
  ],
  programme: {
    id: 'programme',
    name: 'The programme',
    what: 'Every session, newest first, with every guest',
    title: 'Every session, every guest.',
    guide: 'Newest first. Each lists its guests as published, with the recording where it is public.',
  },
  chapters: {
    ai: { name: 'Stanford AI & Investment Series', line: 'Founders, venture investors and allocators on AI and investment' },
    lp: { name: 'Stanford LP Seminar · Fall 2026', line: 'Curated conversations on the Stanford campus, under the Chatham House Rule' },
  },
  session: 'Session',
  lpSession: 'LP Seminar session',
  moderated: 'Moderated by Mohammad Rasouli, CEO, AIx2',
  spoke: 'With Mohammad Rasouli, CEO, AIx2',
  watch: 'Watch the session',
  luma: 'Session page',
  upcoming: 'Upcoming',
  noVideo: 'Recording not yet public',
};
