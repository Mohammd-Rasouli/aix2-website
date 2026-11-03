import type { PageContent } from './types';

/**
 * Stanford AI & Investment Series. Sources: SS Insights, LC Why capital listens and Insights, facts
 * S-01 to S-08, and the staged INS-30 onward (docs/facts-staging-insights.md). No university logos and
 * no implied endorsement. Guest ROLES and organisation TYPES only: guest names and guest
 * organisation names stay behind OQ-04. The series name and numbering stay behind OQ-03.
 * Sessions 1 to 8 use aix2.ai's numbering; the Fall 2026 season uses lpseminar.stanford.edu's.
 */
export const series: PageContent = {
  route: '/insights/stanford-ai-investment-series',
  seo: {
    title: 'AIx2 · Stanford AI & Investment Series',
    description:
      'Eight sessions with chief investment officers, founders and fund managers, and the Fall 2026 LP Seminar with eleven sessions: dates, guest roles, allocator types and recordings.',
  },
  hero: {
    name: 'Stanford AI & Investment Series',
    what: 'Sessions, co-organizers and recordings',
    title: 'Stanford AI & Investment Series',
    subhead: 'Sessions with chief investment officers, founders and fund managers, and what they asked.',
  },
  blocks: [
    {
      type: 'prose',
      id: 'what-it-is',
      name: 'What it is',
      what: 'Who hosts the series and who joins',
      title: 'Every session: the guests, a short clip, and what allocators asked.',
      dependsOn: 'OQ-03',
      facts: ['S-01', 'S-02', 'S-03'],
      paragraphs: [
        'Co-hosted and moderated by Mohammad Rasouli, co-organized with Stanford student VC and private equity clubs, with chief investment officers, founders and fund managers as guests.',
        'The series runs at Stanford. Each session brings several guests together for a moderated conversation. Recordings are on YouTube.',
      ],
    },
    {
      type: 'stats',
      id: 'in-numbers',
      name: 'In numbers',
      what: 'Sessions, guests and recordings, counted',
      title: 'The series, counted.',
      facts: ['INS-30', 'S-06', 'S-07', 'INS-38'],
      items: [
        { figure: '8', text: 'sessions with chief investment officers, founders and fund managers', source: 'aix2.ai/media, counted 2026-10-30', facts: ['INS-30'] },
        { figure: '11', text: 'sessions in the Fall 2026 LP Seminar, September 10 to November 9', source: 'lpseminar.stanford.edu', href: 'https://lpseminar.stanford.edu', facts: ['S-06'] },
        { figure: '64', text: 'allocators across the eleven Fall 2026 sessions', source: 'lpseminar.stanford.edu, counted 2026-10-29', href: 'https://lpseminar.stanford.edu', facts: ['S-07'] },
        { figure: '12', text: 'full-length session videos on the YouTube channel', source: 'YouTube channel, counted 2026-10-30', href: 'https://www.youtube.com/@DrMohammadRasouli', facts: ['INS-38'] },
      ],
    },
    {
      type: 'prose',
      id: 'fall-2026',
      name: 'Fall 2026 LP Seminar',
      what: 'The autumn 2026 season at Stanford',
      title: 'Stanford LP Seminar Series, Fall 2026',
      dependsOn: 'OQ-03',
      facts: ['S-06', 'INS-37'],
      paragraphs: [
        'Stanford LP Seminar Series: eleven sessions in the Fall 2026 season, September 10 to November 9, 2026, on the Stanford campus, under the Chatham House Rule.',
        'Each session is a curated conversation on how leading LPs and allocators evaluate managers, build portfolios and make investment decisions. Six allocators speak at most sessions; two sessions have five.',
      ],
    },
    {
      type: 'timeline',
      id: 'fall-programme',
      name: 'Programme',
      what: 'Date and allocator types for each Fall session',
      title: 'Eleven sessions, September to November 2026',
      facts: ['INS-35', 'INS-36'],
      items: [
        { when: 'Thu 10 Sep', title: 'Session 01 · 5 family offices, 1 public pension' },
        { when: 'Wed 16 Sep', title: 'Session 02 · OCIO, impact manager, fund of funds, pension fund, 2 family offices' },
        { when: 'Wed 23 Sep', title: 'Session 03 · university foundation, public pension, foundation, 3 family offices' },
        { when: 'Thu 1 Oct', title: 'Session 04 · university endowment, fund of funds, foundation, donor-advised fund, 2 family offices' },
        { when: 'Thu 8 Oct', title: 'Session 05 · university endowment, public pension, 4 family offices' },
        { when: 'Mon 12 Oct', title: 'Session 06 · OCIO, fund of funds, investment manager, 3 family offices' },
        { when: 'Thu 15 Oct', title: 'Session 07 · university foundation, public pension, wealth manager, 3 family offices' },
        { when: 'Tue 20 Oct', title: 'Session 08 · foundation, public pension, sovereign-linked investor, 2 family offices' },
        { when: 'Thu 29 Oct', title: 'Session 09 · education finance organization, 3 foundations, sovereign-linked investor, multi-family office' },
        { when: 'Mon 2 Nov', title: 'Session 10 · 3 foundations, development finance institution, 2 family offices' },
        { when: 'Mon 9 Nov', title: 'Session 11 · development finance institution, multilateral institution, pension fund, 2 family offices' },
      ],
    },
    {
      type: 'stats',
      id: 'allocator-mix',
      name: 'Who is in the room',
      what: 'The allocator types across the Fall season',
      title: 'Who the 64 allocators are.',
      facts: ['S-07'],
      items: [
        { figure: '29', text: 'family offices', source: 'lpseminar.stanford.edu, counted 2026-10-29', facts: ['S-07'] },
        { figure: '9', text: 'foundations', source: 'lpseminar.stanford.edu, counted 2026-10-29', facts: ['S-07'] },
        { figure: '7', text: 'pension funds', source: 'lpseminar.stanford.edu, counted 2026-10-29', facts: ['S-07'] },
        { figure: '4', text: 'university endowments and foundations', source: 'lpseminar.stanford.edu, counted 2026-10-29', facts: ['S-07'] },
      ],
    },
    {
      type: 'list',
      id: 'clips',
      name: 'Short clips',
      what: 'Short cuts from the full sessions, by theme',
      title: 'Short clips on the channel',
      body: 'Eighteen clips of 45 seconds to 4 minutes, each cut from a full session and tagged Insights from the Stanford LP Seminar. The themes:',
      facts: ['INS-38', 'INS-39'],
      style: 'bullet',
      items: [
        'When allocators use an outsourced chief investment officer',
        'Family offices: trends, and the capital needed to start one',
        'AI in the LP workflow, in client service and in investing, and where intuition goes beyond AI',
        'How a pension fund CIO and a foundation CIO set asset allocation',
      ],
    },
    {
      type: 'cta',
      id: 'recordings',
      name: 'Recordings',
      what: 'Where the session videos are kept',
      title: 'Recordings on YouTube',
      body: 'Full-length sessions and the short clips are on the YouTube channel of Mohammad Rasouli.',
      facts: ['S-08'],
      actions: [{ label: 'Watch the sessions', href: 'https://www.youtube.com/@DrMohammadRasouli', variant: 'primary' }],
    },
  ],
};
