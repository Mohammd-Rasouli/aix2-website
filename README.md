# AIx2 marketing site

## 1. What this is

The AIx2 marketing website, built from `BRIEF.md` and the content files in `inputs/content/`. The design direction is "the AIx2 lens": warm dark (charcoal, cream, gold), with red used only for findings. There is also a light theme, switched with the toggle in the header. A 3D scene (the company model under a gold lens) plays in the home hero on desktop. Stack: Next.js 16 App Router, React 19, TypeScript, three.js with @react-three/fiber, GSAP ScrollTrigger, Lenis.

## 2. Requirements

- Node.js 20.9 or newer (`engines` in `package.json`).
- npm.

## 3. Run locally

```
npm install
npm run dev -- --port 3000
```

Routes (from `app/sitemap.ts`): `/`, `/companies`, `/investors`, `/how-it-works`, `/atlas`, `/proof` and its four case pages (`/proof/industrial-manufacturer-istanbul`, `/proof/technology-reseller-frankfurt`, `/proof/software-provider-europe`, `/proof/it-network-canada`), `/insights`, `/insights/stanford-ai-investment-series`, `/company/team`, `/company/principles`, `/company/careers`, `/partners`, `/trust`, `/contact`, `/talks/plug-and-play-summit-2026`, and `/legal/privacy`, `/legal/terms`, `/legal/imprint`, `/legal/cookies`. Not in the sitemap: `/styleguide` (the component sheet) and `/directions`, `/directions/a|b|c` (design prototypes).

## 4. Build and check

```
npm run build           # production build
npm start               # serve the build (add -- -p 3100 to change the port)
npx tsc --noEmit -p .   # type-check
```

TypeScript is pinned to 6.0.3. TypeScript 7 has no compiler API, and Next.js needs one, so do not upgrade it until Next supports that. Other dependencies are pinned to exact versions too.

## 5. Editing content

All copy lives in typed files, so no component needs to change for a text edit:

- `content/home.ts`: the home page.
- `content/site.ts`: site name, URL, navigation, footer, global strings.
- `content/pages/*`: inner pages (one file per page, listed in `content/pages/index.ts`).
- `content/cases/*`: the four case pages, plus `content/caseFrame.ts` and `content/caseTags.ts`.

Rules (BRIEF §8):

- English copy is used verbatim from `inputs/content/` (LC = `AIx2_landing_content.md`, SS = `AIx2_site_structure.md`, BS = `AIx2_brand_strategy.md`). Any new or changed string gets a row in `docs/copy-changes.md` (a CC row, status Proposed).
- Never invent numbers, clients, quotes, people, logos, awards or certifications. Every number needs an ID in `docs/facts.md`, listed in the item's `facts` array. Facts marked ⛔ are never used; ⚠️ facts carry their open question.
- Clients are anonymous ("Industrial manufacturer, Istanbul"). No client or person names from the client stories.
- Anything "to confirm" gets `dependsOn: 'OQ-xx'` on the item. The site then shows a visible placeholder chip ("Placeholder until OQ-xx is answered"). Each OQ must have an entry in `docs/open-questions.md`.
- The avoid-words table at the end of `inputs/content/AIx2_landing_content.md` applies everywhere, including SEO text and alt text.
- No Persian on the site. Persian in the inputs is guidance, not copy.

**Add an inner page.** Create `content/pages/<name>.ts` exporting a `PageContent` (see `content/pages/types.ts`): metadata plus `blocks: Block[]`. A block is one of `cards`, `list`, `steps`, `timeline`, `flow`, `stats`, `compare`, `prose`, `cta`, or `{ type: 'home', ref }` to reuse a home section. Register it in `content/pages/index.ts`, add the route folder under `app/`, and add it to `app/sitemap.ts`.

**Add a case page.** Add `content/cases/<slug>.ts` following an existing case, register it in `content/cases/index.ts`, and add `/proof/<slug>` to `app/sitemap.ts`. Case numbers must trace to `docs/facts.md`.

**Themes.** Tokens are in `styles/tokens.css`: raw palette first, then semantic roles per theme. `[data-theme='warm']` is the default and `[data-theme='light']` is the alternative (stored in localStorage as `aix2-theme`). Components use semantic roles only, never raw colors. Rules per token: `docs/design-tokens.md`.

## 6. Accessibility and motion

- Target: WCAG 2.2 AA, with keyboard paths for every interaction. axe reported 0 violations on every route, desktop and phone, in both themes (see `docs/qa/`).
- `prefers-reduced-motion`: no 3D; stills are shown instead.
- The 3D scene runs only on desktop (viewport 1024 px or wider) without reduced motion. Phones and tablets get still images. The smooth-scroll layer (Lenis) and the pointer lens need a fine pointer.
- Pixel ratio is capped: `dpr={[1, 1.5]}` in `components/scan/LensCanvas.tsx`, so the canvas never renders above 1.5x.

## 7. Deploying to Vercel

1. Import the folder (or the repo, once it is in one) as a new Vercel project. The framework is detected as Next.js; `vercel.json` sets it explicitly and adds security and cache headers.
2. Environment variables: see `.env.example`. None are required today.
3. Set the production domain to match `site.url` in `content/site.ts` (currently `https://aix2.ai`). The sitemap, canonical URLs and Open Graph image use it.
4. Contact form: `/api/contact` (`app/api/contact/route.ts`) is a placeholder (OQ-33). It validates and answers, but stores and forwards nothing. Wire it to the chosen CRM or mail service before launch.
5. Otherwise the site is static. In the build output the pages (home, inner pages, case pages, legal, styleguide, sitemap, robots, icon, Open Graph image) are prerendered; only `/api/contact` runs on demand.

`vercel.json` sets no Content-Security-Policy (the site uses inline scripts) and no rewrites.

## 8. QA tools

The scripts live outside the project in `C:\Users\Yousef\code\aix2-tools` (Playwright driving the installed Chrome; a copy is in `docs/handoff/tools/`; run `npm i playwright-core` there if needed). Start a production server first (`npm run build`, then `npx next start -p 3100`).

- `axe.mjs [baseUrl] [outDir] [filter]`: axe-core on every route. `THEME=light` for the light theme.
- `qa-touch.mjs [targets|all]`: touch-target sizes (nothing under 24 px) and touch behavior.
- `pageshots.mjs`: full-page screenshots; `THEME=light` for the light theme.
- `lh.mjs [baseUrl] [outDir] [filter]`: Lighthouse, desktop and mobile; reports go to `docs/qa/lighthouse/`.
- `singlefile.mjs`: exports the landing as one offline HTML file (`deliver/AIx2-landing.html`). `SF_REUSE=1` reuses the cached crawl. `SF_PAGE=<route>` exports another page, and `SF_PAGES='<json map of route to file name>'` exports several linked pages. Keep `singlefile-shim.js` beside it; `singlefile-verify.mjs` checks the result offline.
- Others: `qa-reduced-motion.mjs`, `qa-kbd-tab.mjs`, `qa-widths.mjs`, `perf.mjs`, `contentaudit*.mjs` (avoid-words, numbers, links). Details in `docs/handoff/HANDOFF.md` §6.

Scratch output goes in `.work/`.

## 9. Where things are

```
app/          routes, api/contact, sitemap, robots, opengraph-image
components/   ds/ (design system), home/ (home sections), page/ (inner-page blocks),
              scan/ (3D scene), shell/ (header, footer, scroll)
content/      all copy (home, site, pages/, cases/, types)
styles/       tokens.css
public/       hero/ (scan stills), logos/ (home "Trusted by" wall)
inputs/       the brief's content files and company material
docs/         project documents (below)
deliver/      offline HTML exports
```

Docs index:

- `docs/facts.md`: every number and claim with its source and status.
- `docs/open-questions.md`: contradictions and "to confirm" items (OQ-xx).
- `docs/copy-changes.md`: proposed copy changes (CC rows).
- `docs/sitemap.md`: page map.
- `docs/components.md`: component list.
- `docs/design-tokens.md`: token rules.
- `docs/design-directions.md`, `docs/directions/`: the design directions and the approved one.
- `docs/current-site-inventory.md`, `docs/reference-teardown.md`, `docs/references/`: research on the current site and references.
- `docs/credits.md`: credits and licenses.
- `docs/qa/`: Lighthouse, axe, interaction, performance and content-audit reports.
- `docs/styleguide/`: styleguide captures.
- `docs/handoff/`: state, decisions and next steps (`HANDOFF.md`), chat logs, memory notes, originals, tool copies.

## 10. Before launch

Read `docs/placeholders.md` (every visible placeholder and what unlocks it) and `docs/open-questions.md` (unanswered questions, with severity). Resolve or accept each, then remove the matching `dependsOn` flags.
