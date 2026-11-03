/**
 * For investors: one page per deal stage and per investor type (user, 2026-11-02; CC-64).
 * Source: Plug and Play Summit deck, investor edition, slides 6–12
 * (inputs/company/Plug and Play/investors/AIx2_PlugAndPlay_Summit_vShare_Investors.pdf).
 * Every case is the deck's ILLUSTRATIVE case and is labelled so on the page, with its arithmetic.
 * Benchmarks carry the deck's own source line; facts INV-01 to INV-70 in docs/facts.md.
 */

export interface InvestorStat {
  figure: string;
  unit: string;
  text: string;
  source: string;
}

export interface InvestorTopic {
  slug: string;
  group: 'stage' | 'investor';
  route: string;
  seo: { title: string; description: string };
  label: string;
  title: [string, string];
  subhead: string;
  problem: { title: string; body: string[] };
  benchmarks: InvestorStat[];
  helps: { title: string; text: string }[];
  steps: { when: string; title: string; text: string }[];
  kase: {
    tag: string;
    who: string;
    figure: string;
    figureLine: string;
    figureSub: string;
    situation: string;
    did: string[];
    rows: { label: string; from: string; to: string }[];
    math: string;
  };
  receive: string[];
}

const S = (figure: string, unit: string, text: string, source: string): InvestorStat => ({ figure, unit, text, source });

export const investorTopics: InvestorTopic[] = [
  {
    slug: 'due-diligence',
    group: 'stage',
    route: '/investors/due-diligence',
    seo: {
      title: 'AIx2 · Due diligence: see how the target really runs, before you sign',
      description: 'Earnings rebuilt from the target’s own transactions, hidden manual work found, synergies tested and a value plan ready at signing.',
    },
    label: 'Due diligence',
    title: ['See how the target really runs,', 'before you sign.'],
    subhead:
      'Management presentations tell one story; the systems tell another. We rebuild earnings, processes and synergies from the target’s own data, read-only, so the price and the plan rest on what was built.',
    problem: {
      title: 'Diligence still samples what the target chooses to show.',
      body: [
        'Advisers read management slides, interview a few people and test samples. Whatever runs outside the systems, in spreadsheets, e-mail and chat, stays invisible, and so does the cost of keeping it running.',
        'That is where one-off earnings, propped-up margins and optimistic synergies hide, and where the first year of ownership is lost to surprises.',
      ],
    },
    benchmarks: [
      S('~60%', 'of deal executives', 'blame failed deals on diligence that missed critical issues', 'Bain & Company, Global M&A Report 2020'),
      S('2 in 3', 'M&A managers', 'say their approach routinely overestimates synergies', 'Bain & Company, “Over due”, survey of 250 senior managers with M&A responsibilities, 2006'),
      S('1 day', 'instead of a week', 'expected time to summarize diligence data with AI', 'Bain & Company, M&A Report 2025 (early adopters)'),
      S('30–50%', 'faster deal cycles', 'reported by 40% of respondents in a survey of 200 M&A participants', 'McKinsey, “Gen AI in M&A: From theory to practice to high performance”, 2026'),
    ],
    helps: [
      { title: 'Earnings from real data', text: 'EBITDA rebuilt from ERP transactions, not management slides.' },
      { title: 'Hidden work exposed', text: 'Manual workarounds in Excel, e-mail and chat brought to light.' },
      { title: 'Synergies tested', text: 'Each synergy traced to a real process, cost line and owner.' },
      { title: 'Plan ready at signing', text: 'A 100-day plan built on how the company really runs.' },
    ],
    steps: [
      { when: 'Week 1', title: 'Read-only access', text: 'The target’s ERP, finance and operating systems connected read-only under NDA, with the data-room files.' },
      { when: 'Weeks 1–3', title: 'Earnings and processes rebuilt', text: 'Every transaction mapped to the process that produced it; recurring and one-off earnings separated.' },
      { when: 'Weeks 3–5', title: 'Red flags and synergies tested', text: 'Findings ranked by value at risk; each synergy checked against a real process, cost line and owner.' },
      { when: 'Week 6', title: 'Investment committee pack', text: 'Adjusted EBITDA bridge, findings register and a 100-day plan, ready at signing.' },
    ],
    kase: {
      tag: 'Illustrative case · 6 weeks to signing',
      who: 'PE fund buying a $600M-revenue industrial company',
      figure: '$40M',
      figureLine: 'overpayment avoided',
      figureSub: 'plus a value plan ready at signing',
      situation:
        'The target reported $50M of EBITDA. The fund had six weeks to signing and a management case built on that number.',
      did: [
        'Rebuilt EBITDA from the target’s ERP transactions instead of the management slides.',
        'Found $4M of reported EBITDA that was one-off or propped up by manual work outside the systems.',
        'Tested every transaction, not samples, and turned the findings into a value-creation plan.',
      ],
      rows: [
        { label: 'Recurring EBITDA', from: '$50M reported', to: '$46M' },
        { label: 'Transactions tested', from: 'samples', to: '100%' },
        { label: 'Value-creation plan', from: 'after close', to: 'at signing' },
      ],
      math: 'Illustrative. $4M of reported EBITDA found to be one-off or propped up by manual work; at an assumed 10× multiple, $4M × 10 = $40M less paid.',
    },
    receive: ['Adjusted EBITDA bridge from transactions', 'Findings register with value at risk and owner', 'Synergy test, line by line', '100-day plan on the company as built'],
  },
  {
    slug: 'm-and-a',
    group: 'stage',
    route: '/investors/m-and-a',
    seo: {
      title: 'AIx2 · M&A and integration: capture the synergies you paid for',
      description: 'Buyer and target mapped side by side, every synergy tied to a process, a KPI and an owner, and capture tracked weekly against the deal model.',
    },
    label: 'M&A and integration',
    title: ['Capture the synergies you paid for,', 'from the first day after closing.'],
    subhead:
      'Most of a deal’s value is decided in the integration. We map both companies from their own data and track every synergy to an owner, so the deal model becomes the operating plan.',
    problem: {
      title: 'Synergies are priced in the model and lost in the integration.',
      body: [
        'Integration plans are written from interviews and slides. Overlaps between the two companies are estimated, not mapped, and synergy tracking arrives as a monthly deck long after the decisions were made.',
        'By the time a gap shows, the window to close it has passed.',
      ],
    },
    benchmarks: [
      S('~70%', 'of mergers', 'miss the revenue synergies they expected', 'McKinsey, “Where mergers go wrong”, McKinsey Quarterly, 2004'),
      S('1 in 4', 'deals', 'overestimate cost synergies by 25% or more', 'McKinsey, “Where mergers go wrong”, McKinsey Quarterly, 2004'),
      S('<20%', 'of today’s time', 'expected time to draft integration plans and TSAs with AI', 'Bain & Company, M&A Report 2025 (early adopters)'),
      S('~20%', 'lower M&A costs', 'average reduction reported by respondents using gen AI in M&A', 'McKinsey, “Gen AI in M&A: From theory to practice to high performance”, 2026'),
    ],
    helps: [
      { title: 'Both sides mapped', text: 'Buyer and target processes, systems and data side by side.' },
      { title: 'Synergies with owners', text: 'Every synergy tied to a process, a KPI and an owner.' },
      { title: 'Day-one ready', text: 'Integration plan and TSAs drafted from real data.' },
      { title: 'Live capture tracking', text: 'Synergies checked weekly against the deal model.' },
    ],
    steps: [
      { when: 'Before close', title: 'Both companies connected', text: 'Read-only access to buyer and target systems; overlapping processes identified from data.' },
      { when: 'Weeks 1–3', title: 'Overlaps mapped', text: 'Every overlapping process mapped end to end, with the cost and revenue lines it touches.' },
      { when: 'Weeks 3–6', title: 'Synergies owned', text: 'Each synergy in the deal model tied to a process, a KPI and a named owner; TSAs drafted.' },
      { when: 'Weeks 6–10', title: 'Capture tracked live', text: 'Weekly checks against the deal model; slippage flagged to the owner the same week.' },
    ],
    kase: {
      tag: 'Illustrative case · first 10 weeks after close',
      who: 'Merger of two industrial distributors, $2.5B combined revenue',
      figure: '$14M',
      figureLine: 'more revenue synergies a year',
      figureSub: 'on track by week 10',
      situation:
        'The deal model carried a $120M revenue-synergy target. On the usual track record, about a quarter of it would never arrive.',
      did: [
        'Mapped the overlapping processes of both distributors from their own systems, not samples.',
        'Tied every synergy in the model to a process, a KPI and an owner.',
        'Replaced the monthly synergy deck with weekly, live tracking against the model.',
      ],
      rows: [
        { label: 'Revenue synergies captured', from: '77%', to: '89%' },
        { label: 'Synergy tracking', from: 'monthly decks', to: 'live' },
        { label: 'Overlapping processes mapped', from: 'samples', to: '100%' },
      ],
      math: 'Illustrative $120M revenue-synergy target. Companies capture about 77% of revenue-synergy targets on average (McKinsey survey of 200 M&A executives). Assumes half the 23% gap closed: 11.5% × $120M ≈ $14M.',
    },
    receive: ['Side-by-side process map of both companies', 'Synergy register with owners and KPIs', 'Day-one integration plan and TSA drafts', 'Weekly synergy capture report'],
  },
  {
    slug: 'value-creation',
    group: 'stage',
    route: '/investors/value-creation',
    seo: {
      title: 'AIx2 · Value creation: turn the plan into EBITDA, not slides',
      description: 'A margin bridge from ERP, payroll and spend data, levers ranked in dollars, every initiative tied to an owner, and progress checked weekly.',
    },
    label: 'Value creation',
    title: ['Turn the value-creation plan', 'into EBITDA, not slides.'],
    subhead:
      'Multiple expansion no longer carries returns; margins have to. We build the baseline from the company’s own data, rank the levers in dollars and check every initiative weekly, so slippage shows while it can still be fixed.',
    problem: {
      title: 'Plans are reviewed quarterly; margins move daily.',
      body: [
        'Value-creation plans are often a list of initiatives on slides, reviewed at board meetings. The baseline comes from management reporting, the levers are sized by benchmark, and nobody sees the slippage until the quarter is gone.',
        'With longer holds and higher rates, every quarter of drift costs exit value.',
      ],
    },
    benchmarks: [
      S('10–12%', 'yearly EBITDA growth', 'now needed for 2.5× in five years, vs 5% in the 2010s', 'Bain & Company, Global Private Equity Report 2026'),
      S('71%', 'of buyouts', 'missed their projected margins, by 330 bps on average', 'Bain & Company, analysis of 65 mature buyouts against deal projections, 2019'),
      S('+2–3 pts', 'higher IRR, up to', 'for funds that prioritize operational value creation', 'McKinsey, “Bridging private equity’s value creation gap”, 2024 (analysis of 100+ funds, post-2020 vintages)'),
    ],
    helps: [
      { title: 'Baseline from data', text: 'Margin bridge built from ERP, payroll and spend data.' },
      { title: 'Levers ranked by value', text: 'Pricing, procurement and process levers sized in dollars.' },
      { title: 'Owners and KPIs', text: 'Each initiative tied to a process, a KPI and an owner.' },
      { title: 'Live QA', text: 'Progress checked weekly, slippage flagged early.' },
    ],
    steps: [
      { when: 'Weeks 1–2', title: 'Baseline from data', text: 'ERP, payroll and spend connected read-only; the margin bridge rebuilt from transactions.' },
      { when: 'Weeks 2–5', title: 'Levers sized', text: 'Pricing, procurement and process levers found in the data and sized in dollars.' },
      { when: 'Weeks 5–8', title: 'Initiatives owned', text: 'Each initiative tied to a process, a KPI and an owner, approved by the board.' },
      { when: 'Weeks 8–10 and on', title: 'Weekly checks', text: 'Progress checked every week against the plan; slippage flagged while it can still be fixed.' },
    ],
    kase: {
      tag: 'Illustrative case · one portfolio company, 10 weeks',
      who: '$500M-revenue portfolio company in year two of the hold',
      figure: '+$10M',
      figureLine: 'EBITDA a year',
      figureSub: '≈ $100M more exit value at 10×',
      situation: 'Two years into the hold, the margin was 12% and the plan was behind. Initiatives were tracked quarterly, from management reporting.',
      did: [
        'Rebuilt the margin bridge from ERP, payroll and spend data, every transaction rather than samples.',
        'Ranked pricing, procurement and process levers by their value in dollars.',
        'Moved initiative tracking from quarterly to weekly, each with an owner and a KPI.',
      ],
      rows: [
        { label: 'EBITDA margin', from: '12%', to: '14%' },
        { label: 'Initiative tracking', from: 'quarterly', to: 'weekly' },
        { label: 'Spend and processes analysed', from: 'samples', to: '100%' },
      ],
      math: 'Illustrative. +2 points of margin on $500M revenue = +$10M EBITDA a year; at an assumed 10× exit multiple ≈ $100M.',
    },
    receive: ['Margin bridge from transactions', 'Lever list sized in dollars', 'Initiative register with owners and KPIs', 'Weekly progress and slippage report'],
  },
  {
    slug: 'private-equity',
    group: 'investor',
    route: '/investors/private-equity',
    seo: {
      title: 'AIx2 · Private equity and growth funds: create value and prove it to your LPs',
      description: 'Sharper diligence, one portfolio playbook, LP-ready proof from live data and an exit data room that is always ready.',
    },
    label: 'Private equity and growth funds',
    title: ['Create value across the portfolio,', 'and prove it to your LPs.'],
    subhead:
      'Holds are longer and LPs want distributions they can see. We give the fund one live, auditable view of how each company runs, from diligence to exit.',
    problem: {
      title: 'Returns now come from operations, and LPs want the evidence.',
      body: [
        'Each portfolio company reports in its own way, weeks late. What works in one company stays there, and the exit data room is built in a rush at the end of the hold.',
        'LPs increasingly ask for proof of value creation, not a narrative.',
      ],
    },
    benchmarks: [
      S('~7 yrs', 'average hold at exit', 'up from 5–6 years; IRR tends to stall around year seven', 'Bain & Company, Global Private Equity Report 2026'),
      S('2.5×', 'as many LPs', 'now rank DPI a most critical metric vs three years ago', 'McKinsey, Global Private Markets Report 2025 (survey of LPs)'),
      S('~20%', 'of portfolio companies', 'have gen AI in use with concrete results so far', 'Bain & Company, Global Private Equity Report 2025 (survey of investors with $3.2T in assets)'),
    ],
    helps: [
      { title: 'Sharper diligence', text: 'Targets mapped from data before the investment committee.' },
      { title: 'One portfolio playbook', text: 'What works in one company rolled out to the next.' },
      { title: 'LP-ready proof', text: 'Value creation shown with live, auditable data.' },
      { title: 'Exit readiness', text: 'Clean data and a proven equity story at exit.' },
    ],
    steps: [
      { when: 'Weeks 1–2', title: 'Portfolio connected', text: 'The first portfolio companies connected read-only, one standard data model for all.' },
      { when: 'Weeks 2–6', title: 'Each company mapped', text: 'Processes, margins and red flags rebuilt from each company’s own data.' },
      { when: 'Weeks 6–10', title: 'Playbook rolled out', text: 'Levers proven in one company sized and assigned in the others; one live KPI view.' },
      { when: 'Ongoing', title: 'Proof for LPs and exit', text: 'Monthly KPI pack in days, an exit data room that stays ready.' },
    ],
    kase: {
      tag: 'Illustrative case · five portfolio companies, 10 weeks',
      who: '$3B buyout fund with 12 portfolio companies',
      figure: '+$30M',
      figureLine: 'EBITDA a year across five companies',
      figureSub: '≈ $300M more equity value at 10×',
      situation: 'The monthly portfolio KPI pack took three weeks to assemble, no two companies reported alike, and the exit data room was built only at exit.',
      did: [
        'Connected five portfolio companies to one standard, live view.',
        'Found the margin levers in each company’s own data and rolled what worked from one company out to the next.',
        'Kept the exit data room current from the same data, every month.',
      ],
      rows: [
        { label: 'Monthly portfolio KPI pack', from: '3 weeks', to: '2 days' },
        { label: 'Exit data room', from: 'built at exit', to: 'always ready' },
        { label: 'Companies on one live view', from: '0', to: '5' },
      ],
      math: 'Illustrative. +2 points of margin in five companies averaging $300M revenue = +$30M EBITDA a year; at an assumed 10× ≈ $300M.',
    },
    receive: ['One live KPI view across the portfolio', 'Lever playbook shared between companies', 'LP reporting from auditable data', 'An exit data room that stays ready'],
  },
  {
    slug: 'family-offices',
    group: 'investor',
    route: '/investors/family-offices',
    seo: {
      title: 'AIx2 · Holdings and family offices: one clear, live view of the group',
      description: 'Every company’s KPIs in one standard view, capital requests checked against real returns, best practice shared, without a big head office.',
    },
    label: 'Holdings and family offices',
    title: ['Run a diverse group of companies', 'with one clear, live view.'],
    subhead:
      'A holding sees each company through its own reports, late and in its own format. We give the family or the board one standard, live view of the whole group, and check every capital request against what each company really returns.',
    problem: {
      title: 'A diverse group is hard to compare, and capital follows the loudest request.',
      body: [
        'Each operating company keeps its own systems and reports in its own way. Group reporting arrives weeks late, capital requests are judged on the business case presented, and what works in one company rarely reaches the others.',
        'Building a large head office to fix this costs what it was meant to save.',
      ],
    },
    benchmarks: [
      S('10–15%', 'conglomerate discount', 'linked to inefficient capital allocation, US listed groups', 'BCG and HHL Leipzig Graduate School of Management, study of diversified companies, 2014'),
      S('30%', 'higher annual shareholder returns', 'for companies in the top third by capital reallocated across business units, vs the bottom third', 'McKinsey, “How to put your money where your strategy is”, 2012'),
      S('21%', 'of family office assets', 'are in private equity, about half of it direct', 'UBS, Global Family Office Report 2025 (317 family offices)'),
      S('37%', 'of family offices', 'expect to raise direct private equity over five years', 'UBS, Global Family Office Report 2025 (317 family offices)'),
    ],
    helps: [
      { title: 'One view of the group', text: 'Every company’s KPIs in one standard, live view.' },
      { title: 'Capital where it pays', text: 'Requests checked against each company’s real returns.' },
      { title: 'Best practice shared', text: 'What works in one company rolled out across the group.' },
      { title: 'Lean and discreet', text: 'No big head office. Runs on-prem with open-source models.' },
    ],
    steps: [
      { when: 'Weeks 1–2', title: 'First companies connected', text: 'Read-only access, on the group’s own servers; one standard KPI model.' },
      { when: 'Weeks 2–6', title: 'Each company mapped', text: 'Processes, margins and returns rebuilt from each company’s data.' },
      { when: 'Weeks 6–10', title: 'Capital and practice', text: 'Capital requests checked against real returns; proven practices sized for the other companies.' },
      { when: 'Ongoing', title: 'Group view, live', text: 'Group reporting in days; new companies added to the same view.' },
    ],
    kase: {
      tag: 'Illustrative case · group of eight companies, 10 weeks',
      who: 'Family holding with eight operating companies, $2B revenue',
      figure: '+$24M',
      figureLine: 'EBITDA a year across the group',
      figureSub: 'from the first three companies',
      situation: 'Group reporting arrived four weeks late, only some capital requests were checked against results, and no two of the eight companies reported alike.',
      did: [
        'Put all eight companies on one standard view, on the group’s own servers.',
        'Checked every capital request against the company’s real returns.',
        'Found the margin levers in the first three companies and assigned owners.',
      ],
      rows: [
        { label: 'Group reporting', from: '4 weeks late', to: '2 days' },
        { label: 'Capital requests checked', from: 'some', to: '100%' },
        { label: 'Companies on one standard view', from: '0 of 8', to: '8 of 8' },
      ],
      math: 'Illustrative. +2 points of margin in three of the eight companies, with $1.2B combined revenue = +$24M EBITDA a year.',
    },
    receive: ['One standard, live view of the group', 'Capital requests checked against real returns', 'Practice playbook across companies', 'On-prem deployment, data stays home'],
  },
  {
    slug: 'lps-and-endowments',
    group: 'investor',
    route: '/investors/lps-and-endowments',
    seo: {
      title: 'AIx2 · LPs and endowments: see through every fund to the companies underneath',
      description: 'GP reports read and mapped to every underlying company, fees tested against each LPA, re-ups backed by data and cash flows forecast fund by fund.',
    },
    label: 'LPs and endowments',
    title: ['See through every fund', 'to the companies underneath.'],
    subhead:
      'An endowment can hold more than a thousand companies through its funds and still see them only as quarterly PDFs. We read every GP report and capital account, map them to the companies underneath and check fees against each LPA.',
    problem: {
      title: 'Allocations to private markets have grown; visibility has not.',
      body: [
        'Look-through is assembled by hand each quarter and is weeks old when it arrives. Fees and expenses are checked on samples, re-up decisions lean on the GP’s own story, and liquidity is forecast once a year.',
        'With distributions at record lows, every unseen fee and late capital call matters.',
      ],
    },
    benchmarks: [
      S('14%', 'distributions as a share of NAV', 'below 15% for a record fourth year in a row', 'Bain & Company, Global Private Equity Report 2026'),
      S('62.5%', 'in alternatives', 'average allocation of endowments above $5B', 'NACUBO-Commonfund Study of Endowments, fiscal 2025'),
      S('50%+', 'of PE advisers examined', 'had fee or expense violations or control weaknesses', 'US SEC, “Spreading Sunshine in Private Equity”, A. Bowden, 2014'),
    ],
    helps: [
      { title: 'Look-through, automated', text: 'GP reports read and mapped to every underlying company.' },
      { title: 'Fees checked', text: 'Fees and expenses tested against each LPA, every quarter.' },
      { title: 'Better re-ups', text: 'Manager decisions backed by company-level data.' },
      { title: 'Liquidity in view', text: 'Capital calls and distributions forecast fund by fund.' },
    ],
    steps: [
      { when: 'Weeks 1–2', title: 'Documents connected', text: 'GP quarterly reports, capital accounts and LPAs read automatically.' },
      { when: 'Weeks 2–5', title: 'Look-through built', text: 'Every underlying company mapped across funds, with exposures by sector and region.' },
      { when: 'Weeks 5–8', title: 'Fees tested', text: 'Each fee and expense checked against its LPA; exceptions listed by manager.' },
      { when: 'Weeks 8–10', title: 'Cash flows forecast', text: 'Capital calls and distributions forecast monthly, fund by fund.' },
    ],
    kase: {
      tag: 'Illustrative case · one private markets program, 10 weeks',
      who: '$8B endowment with 120 private fund commitments',
      figure: '1,400',
      figureLine: 'portfolio companies seen through',
      figureSub: 'every quarter, in 3 days',
      situation: 'Quarterly look-through took six weeks of manual work, fees were checked on samples and the cash-flow forecast was refreshed once a year.',
      did: [
        'Read every quarterly GP report and capital account automatically.',
        'Mapped them to the roughly 1,400 companies underneath the 120 commitments.',
        'Tested every fee and expense against its LPA and moved the cash-flow forecast to monthly.',
      ],
      rows: [
        { label: 'Quarterly look-through', from: '6 weeks', to: '3 days' },
        { label: 'Fees and expenses checked vs LPA', from: 'samples', to: '100%' },
        { label: 'Cash-flow forecast', from: 'annual', to: 'monthly' },
      ],
      math: 'Illustrative. Assumes about 12 companies per fund across 120 commitments; quarterly reports and capital accounts read automatically.',
    },
    receive: ['Company-level look-through across all funds', 'Fee and expense exceptions by manager', 'Re-up file with company-level data', 'Monthly cash-flow forecast, fund by fund'],
  },
  {
    slug: 'sovereign',
    group: 'investor',
    route: '/investors/sovereign',
    seo: {
      title: 'AIx2 · Sovereign and state portfolios: lift the performance of state-owned companies',
      description: 'One standard, live view across state-owned companies, payments and procurement checked continuously, direct deals diligenced from data, sovereign by design.',
    },
    label: 'Sovereign and state portfolios',
    title: ['Lift the performance of state-owned companies,', 'with transparency the public can trust.'],
    subhead:
      'State holdings own large, varied companies and answer to the public for them. We give the owner one standard, live view of every company and check payments, procurement and approvals continuously, on infrastructure that stays in the country.',
    problem: {
      title: 'State-owned companies trail their private peers, and the owner sees them late.',
      body: [
        'Board reporting is quarterly, payments and procurement are audited on samples after the fact, and direct deals are judged on the counterparty’s deck.',
        'Governance reforms work, but only when the owner can see what is happening inside each company.',
      ],
    },
    benchmarks: [
      S('33%', 'lower productivity', 'in state-owned firms than private peers, on average', 'IMF, Fiscal Monitor April 2020, “State-Owned Enterprises: The Other Government”'),
      S('3×+', 'higher productivity', 'in SOEs of low-corruption vs high-corruption countries', 'IMF, Fiscal Monitor April 2020'),
      S('~5 pts', 'lower employee costs', 'as a share of revenue if the weakest-governance countries reached medium control of corruption (IMF estimate)', 'IMF Working Paper 19/253, “Governance and State-Owned Enterprises: How Costly is Corruption?”'),
      S('50–60%', 'of sovereign private deals', 'now direct or co-investments, up from ~40% in 2023', 'Bain & Company, “The future of sovereign wealth funds: four imperatives for the next decade”'),
    ],
    helps: [
      { title: 'Every company measured', text: 'One standard, live view of performance across the portfolio.' },
      { title: 'Governance built in', text: 'Payments, procurement and approvals checked continuously.' },
      { title: 'Direct deals diligenced', text: 'Targets and co-investments mapped from data, not decks.' },
      { title: 'Sovereign by design', text: 'Runs on-prem with open-source models. Data stays at home.' },
    ],
    steps: [
      { when: 'Weeks 1–2', title: 'First companies connected', text: 'Read-only access on in-country infrastructure; one standard model for all companies.' },
      { when: 'Weeks 2–6', title: 'Costs and controls mapped', text: 'Processes, costs, payments and procurement rebuilt from each company’s own data.' },
      { when: 'Weeks 6–10', title: 'Savings and controls', text: 'Cost levers sized and owned; payments and procurement checked in full, not samples.' },
      { when: 'Ongoing', title: 'Monthly board view', text: 'All companies on one view; direct deals diligenced the same way.' },
    ],
    kase: {
      tag: 'Illustrative case · three state companies, 10 weeks',
      who: 'State holding with 20 companies; first three with $4B of costs',
      figure: '$60M',
      figureLine: 'lower costs a year',
      figureSub: 'from the first three companies',
      situation: 'Board reporting for the 20 companies was quarterly, and payments and procurement were audited on samples.',
      did: [
        'Connected the first three companies, on in-country infrastructure, to one standard view.',
        'Checked every payment and procurement record, not samples, and sized the cost levers.',
        'Moved board reporting for all 20 companies from quarterly to monthly.',
      ],
      rows: [
        { label: 'Operating costs', from: '$4.0B', to: '$3.94B' },
        { label: 'Board reporting, 20 companies', from: 'quarterly', to: 'monthly' },
        { label: 'Payments and procurement checked', from: 'samples', to: '100%' },
      ],
      math: 'Illustrative. Assumes 1.5% lower operating costs in three companies with $4B combined costs: $4B × 1.5% = $60M a year.',
    },
    receive: ['One standard, live view of every company', 'Continuous checks on payments, procurement and approvals', 'Direct-deal diligence from data', 'In-country, on-prem deployment'],
  },
];

export const investorTopicLabels = {
  stage: 'By deal stage',
  investor: 'By investor',
  problem: { name: 'The problem', what: 'What goes wrong today' },
  benchmarks: { name: 'What the benchmarks say', what: 'Published research, with its source' },
  helps: { name: 'How AIx2 helps', what: 'What changes with the company as built' },
  steps: { name: 'How the work runs', what: 'The Five Step Method, in this setting' },
  kase: { name: 'Illustrative case', what: 'A worked example, with its arithmetic' },
  receive: { name: 'What you receive', what: 'The deliverables' },
  more: { name: 'More for investors', what: 'The other deal stages and investor types' },
  illustrative: 'Illustrative case: a worked example, not a client result. The arithmetic is shown below it.',
  before: 'Before',
  after: 'With AIx2',
  sources: 'Sources',
};
