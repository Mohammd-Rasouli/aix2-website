/**
 * Content shape for the inner pages (step 5). Each page is a hero plus a list of blocks; each
 * block opens like a home section: SS's section name, a plain "what" line (CC-14), the SS headline.
 * Copy is verbatim from SS (inputs/content/AIx2_site_structure.md) or LC; numbers trace to docs/facts.md.
 */
import type { LinkItem } from '../types';

export interface BlockHead {
  /** Anchor, as in docs/sitemap.md (e.g. "five-steps", "three-references"). */
  id: string;
  /** The section's name, from SS's section column (e.g. "Five steps"). */
  name: string;
  /** What the section is, in plain words, at most about eight words. NEW copy, logged as CC-14. */
  what: string;
  /** SS's headline, verbatim. */
  title: string;
  /** SS's content when it is one or two sentences, verbatim. */
  body?: string;
  facts?: string[];
  /** An open question that must be answered before this block publishes; shows a visible flag. */
  dependsOn?: string;
}

/** The goal-page diagrams (components/goal/Diagram.tsx). */
export type DiagramKind = 'layers' | 'hidden' | 'supplyLoop' | 'designFunnel' | 'bestMatch' | 'hubVsChain' | 'connected' | 'scale' | 'liveLoop' | 'drift' | 'readiness';

export type ActionLink = LinkItem & { variant?: 'primary' | 'secondary' | 'text' };

export type Block =
  /** Two to four cards: title and a line each. */
  | (BlockHead & { type: 'cards'; columns?: 2 | 3 | 4; items: { title: string; copy?: string; tag?: string; href?: string; dependsOn?: string; /** Anchor for a nav link to this item. */ id?: string }[]; note?: string })
  /** A list: conditions, commitments, bullet points. */
  | (BlockHead & { type: 'list'; style?: 'check' | 'bullet'; items: string[]; closing?: string; action?: ActionLink })
  /** Numbered steps with an optional deliverable tag. */
  | (BlockHead & { type: 'steps'; items: { n: string; title: string; copy: string; tag?: string }[]; line?: string })
  /** A drawn timeline: weeks, stages. */
  | (BlockHead & { type: 'timeline'; items: { when: string; title: string; copy?: string }[] })
  /** A sequence drawn as a lane or cycle, e.g. Frame → Evidence → Practice, or the deal cycle. */
  | (BlockHead & { type: 'flow'; shape?: 'lane' | 'cycle'; items: { title: string; copy?: string; who?: string; id?: string }[] })
  /** Market or reference numbers, each with its source. */
  | (BlockHead & { type: 'stats'; items: { figure: string; text: string; source: string; href?: string; facts: string[] }[] })
  /** A comparison table by category. */
  | (BlockHead & { type: 'compare'; columns: string[]; rows: { label: string; cells: string[] }[]; footnote?: string })
  /** Client logos (company names allowed since 2026-10-30), each optionally linked to its case. */
  | (BlockHead & { type: 'logos'; items: { name: string; logo: string; w: number; h: number; href?: string }[] })
  /** Atlas's compare view: drag a divider across one picture to turn before into after. */
  | (BlockHead & { type: 'imageCompare'; before: { src: string; w: number; h: number; alt: string }; after: { src: string; w: number; h: number; alt: string } })
  /** Product screens (Atlas), each framed, with a plain caption. */
  | (BlockHead & { type: 'gallery'; items: { src: string; w: number; h: number; title: string; caption: string }[] })
  /** A drawn, animated diagram (goal pages), with a reading guide above it. */
  | (BlockHead & { type: 'diagram'; kind: DiagramKind; guide?: string })
  /** The Stanford sessions feature: counts, featured guests by name (USR-04), link to the programme. */
  | (BlockHead & { type: 'investorHub'; group: 'stage' | 'investor' })
  | (BlockHead & { type: 'oneWeekProof' })
  | (BlockHead & { type: 'seriesFeature'; featured: string[]; cta: { label: string; href: string } })
  /** Short paragraphs of running text. */
  | (BlockHead & { type: 'prose'; paragraphs: string[] })
  /** Closing call to action. */
  | (BlockHead & { type: 'cta'; subhead?: string; actions: ActionLink[] })
  /** A home section reused as is (it carries its own head). */
  | { type: 'home'; ref: 'red-lines' | 'how' | 'why' | 'lenses' | 'proof' | 'capital' | 'fit' | 'trust' | 'insights' | 'faq' | 'start' };

export interface PageContent {
  route: string;
  /** NEW (CC-08): drafted from the page's hero copy. */
  seo: { title: string; description: string };
  hero: {
    name: string;
    what: string;
    title: string;
    subhead: string;
    actions?: ActionLink[];
    dependsOn?: string;
  };
  blocks: Block[];
}

/** A case page, in the order of SS's case template (items 1–12). */
/** The standard profile shown at the top of every case page. */
export interface CaseProfile {
  /** Who the client is: sector, what it sells or runs, where, its size. Two or three sentences. */
  description: string;
  /** Where they stood before the work, and the question they brought. Two or three sentences. */
  situation: string;
  /** What AIx2 did, in the order it was done. Three to six short lines. */
  whatWeDid: string[];
  /** How long it took, e.g. "12 weeks to results; 12 months to full roll-out". */
  duration: string;
  /** Phases with their length, when the story gives them, e.g. { when: 'Weeks 0–2', what: 'Connect and map' }. */
  phases?: { when: string; what: string }[];
  /** Who we worked with, by role only (never names): C-level sponsor first, then owners. */
  team: string[];
  /** Systems and sources in scope, by category (never brand names), when the story lists them. */
  scope?: string[];
  facts: string[];
}

export interface CasePageContent {
  route: string;
  seo: { title: string; description: string };
  /** Anonymous description, e.g. "Industrial manufacturer · Istanbul · explosion-protected equipment · ~85 people". */
  client: string;
  /** Company name (allowed since 2026-10-30, user's decision; never people's names). */
  name?: string;
  /** The full client story, chapter by chapter, from the SH client-story file (user: "stories can come in full"). */
  story?: { heading: string; paragraphs: string[] }[];
  /**
   * The standard client profile, the same on every case page (user, 2026-10-31): who the client is,
   * where they stood, what we did, how long it took and who we worked with. From the client story.
   */
  profile?: CaseProfile;
  headline: string;
  /** 1. Three key numbers. */
  keyStats: { label: string; from: string; to: string; facts: string[] }[];
  /** 2. Client issue · Solution · Impact, a short paragraph each. */
  summary: { issue: string; solution: string; impact: string };
  /** 3. The From → To table. */
  table: { label: string; from: string; to: string; facts: string[] }[];
  /** 4. Results, measured: definition, before, after, sample and source for each number. */
  measured: { label: string; definition: string; before: string; after: string; sample: string; source: string; facts: string[] }[];
  /** 5. How the results were verified. */
  verification: string[];
  /** 6. Financial case, modelled from measured KPIs with an explicit attribution rule (OQ-12). */
  financial?: { paragraphs: string[]; dependsOn?: string };
  /** 7. How the work ran, and how data was protected. */
  howItRan: { work: string[]; data: string[] };
  /** 8. What the work required, by category (never by brand). */
  required: { category: string; detail: string }[];
  /** 9. What this means for you. */
  forYou: string[];
  /** 10. Timeline, owners and what made it work. */
  timeline: { when: string; what: string }[];
  owners: string[];
  madeItWork: string[];
  /** 11. One year later: left as a visible placeholder until the update exists. */
  oneYearLater?: string;
  /** The grey label: window and who measured (LC). */
  measurementLabel: string;
  facts: string[];
  dependsOn?: string;
}
