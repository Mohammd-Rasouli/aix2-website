import type { CasePageContent } from '../pages/types';

/**
 * Case page: dental education and advanced-therapeutics consulting, Texas (Edu Journey). Source:
 * 7_Edu_Journey.html (Client Story folder). AIx2's first client: one due diligence and report. The story
 * measures findings and sets targets; it claims no outcome after the report. The fee is not shown (OQ-12).
 * Faculty names, the seat's street address and contact details, and a sample testimonial author in the
 * story are left out (no people's names).
 */
export const dentalEducationConsultingTexas: CasePageContent = {
  route: '/proof/dental-education-consulting-texas',
  // NEW (CC-15): title and description drafted from the case headline.
  seo: {
    title: 'AIx2 · Case: Dental education and consulting, Texas',
    description: 'A twenty-person education and consulting company saw both businesses mapped end to end for the first time, with 18 findings ranked by risk.',
  },
  client: 'Dental education and advanced-therapeutics consulting · Texas · ~20 people',
  name: 'Edu Journey',
  story: [
    {
      heading: 'The engagement in brief',
      paragraphs: [
        'Edu Journey LLC · education and consulting in dentistry and advanced therapeutics · Frisco, Texas',
        'A twenty-person company with many processes, mapped end to end for the first time',
        'Edu Journey aimed to see, with evidence, how its two businesses, professional dental education and consulting in advanced therapeutics, actually ran across courses, events, faculty and consulting, and which gaps put its credibility and growth at risk.',
        'Client issue: Edu Journey, about 20 people, runs online and hands-on courses in cosmetic dentistry, dental laser, implants, orthodontics and endodontics, live events in Texas, Dubai and Istanbul with partners such as Bonn University and IAAD, a global faculty network of 23 experts, and consulting on drug and gene delivery, cell processing and GMP and GLP quality. Course, faculty, event, payment and certificate data sat in separate tools; only 3 of 23 faculty profiles were linked to a course or event; and none of the four published home-page figures, nor the testimonials, could be traced to learning records.',
        'Solution: Over ten weeks AIx2 mapped the workflow and the data flow of both divisions in parallel across 8 sources: the learning platform, the shop, event records, forms, e-mail metadata, partner documents, policies and the public website. They were fused into one organization model and checked against Edu Journey’s own mission, terms and privacy policy, ISO 21001 and ISO 29993, the FTC Endorsement Guides and the FTC rule on consumer reviews and testimonials, and, for the Quality Unit, 21 CFR 210, 211 and 58, ICH Q10 and EU GMP.',
        'Impact: The report gave the founders one evidenced view of a business that had grown faster than its systems: 10 pain points and 8 Δ findings, each with evidence, an owner and a priority, and a 90-day plan that put the two critical consumer-protection risks first. As AIx2’s first engagement, it also produced the method every later due diligence has used: process and data mapped together, public evidence read in week 1, and a count and an owner for every finding.',
      ],
    },
    {
      heading: 'Results: what the due diligence measured',
      paragraphs: [
        'Eighteen findings, each with evidence, an owner and a target',
        'Found: measured in the due diligence, October – December 2025, and still visible on the public site in October 2026. Target: set in the report. Delivery of the targets is owned by Edu Journey.',
        'Faculty profiles linked to a course or event (of 23): found 3; target set in the report 23',
        'Published home-page figures traced to records (of 4): found 0; target 4',
        'Testimonials traced to verified learners (of 4): found 0; target 4',
        'Divisions on one operating model (of 2): found 0; target 2',
        'Ten pain points and eight Δ findings; the two rated critical were public trust signals and faculty data.',
      ],
    },
    {
      heading: 'How the results were verified',
      paragraphs: [
        'Every count taken from Edu Journey’s systems or its public pages, with the source recorded',
        'Findings reviewed with the founders before the report was issued',
        'No outcome after the report is claimed; implementation was Edu Journey’s',
      ],
    },
    {
      heading: 'Why it mattered for a small company',
      paragraphs: [
        'With about 20 people, each process sat with one person. The map showed which person every course, event and consulting project depended on.',
      ],
    },
    {
      heading: 'Financial case',
      paragraphs: [
        'A ranked view of risk, not a savings claim',
        'Edu Journey’s revenue and cost figures are not public, so no return is stated. The value was the ranked risk list and the plan.',
        'Process and data maps: both divisions: learner, faculty, event and consulting flows',
        '18 findings: 10 pain points and 8 Δ findings, with evidence, owner and priority',
        'Regulatory exposure ranked: FTC rules on reviews and endorsements, learner privacy, GMP consulting',
        'Control specifications: trust-signal gate, faculty data model, credential register, consent record',
        'A 90-day plan: order of work by risk and effort',
        'Not priced: civil penalties under the FTC rule on consumer reviews and testimonials can exceed USD 50,000 per violation.',
        'Conclusion: For a 20-person company, the engagement bought a complete, evidenced picture of how both businesses really ran and which risks to fix first. We do not claim a financial return. For AIx2 it was the first engagement, and its method became our standard.',
      ],
    },
    {
      heading: 'How the work ran',
      paragraphs: [
        'Ten weeks with the founders, each phase signed off by them',
        'Weeks 0–3 · Connect and map: 8 sources read: learning platform, shop, events, forms, e-mail metadata, partner documents, policies, website; workflows and data mapped in parallel.',
        'Weeks 3–8 · Check: Compared with Edu Journey’s own promises, learning-service standards and U.S. consumer-protection, privacy and GMP requirements.',
        'Weeks 8–10 · Report: 18 findings with owners, control specifications and a 90-day plan.',
        'Human sign-off at every step: the founders approved every finding and the final report before release.',
      ],
    },
    {
      heading: 'Data stayed protected',
      paragraphs: [
        'Read-only access to every tool',
        'Learner personal data masked',
        'No copy of learner data kept after the report',
      ],
    },
    {
      heading: 'How AIx2 accessed it',
      paragraphs: [
        'Accounts provided by Edu Journey',
        'All access removed at the end of week 10',
      ],
    },
    {
      heading: 'What we learned about small companies',
      paragraphs: [
        'What we learned',
        'A small company still needs an owner per process',
        'Public pages are evidence too',
        'Map ownership before process',
      ],
    },
    {
      heading: 'What the work required',
      paragraphs: [
        'Four capabilities the work depended on',
        'Small companies rarely have clean event logs; the right-hand column shows what worked here.',
        'Join process and data in one model — Process-analytics tool: Process only; Data platform: Data only; AIx2 Atlas: Yes, the FUSE stage; Evidence at Edu Journey: faculty, courses, events and enrolments linked',
        'Read public pages as evidence — Process-analytics tool: No; Data platform: No; AIx2 Atlas: Yes; Evidence at Edu Journey: home-page figures and reviews compared with records',
        'Check against learning-service standards — Process-analytics tool: No; Data platform: No; AIx2 Atlas: Yes; Evidence at Edu Journey: ISO 21001 and ISO 29993 gaps',
        'Check consulting against pharmaceutical quality systems — Process-analytics tool: No; Data platform: No; AIx2 Atlas: Yes; Evidence at Edu Journey: ICH Q10 and 21 CFR 211 method gaps',
      ],
    },
    {
      heading: 'What we learned: our first client set the rules',
      paragraphs: [
        'Our first client set the rules for how we run a due diligence',
        'Lessons applied to every engagement since.',
        'Map process and data together: FUSE stage in every engagement',
        'Every finding needs a count, evidence and an owner: findings register',
        'Public evidence counts: website, filings and partner pages read in week 1',
        'Small firms need ownership first: role map before process map',
        'Recommend controls the client can run: control specifications, not only findings',
      ],
    },
    {
      heading: 'What Edu Journey gained',
      paragraphs: [
        'A business that had grown fast could see itself whole for the first time, with the critical risks named.',
      ],
    },
    {
      heading: 'What AIx2 gained',
      paragraphs: [
        'The method used in all later engagements.',
      ],
    },
    {
      heading: 'Timeline',
      paragraphs: [
        'One due diligence in ten weeks, then implementation by Edu Journey',
        'Connect & map · Oct 2025; Check · Nov 2025; Report · Dec 2025; Edu Journey · since 2026',
      ],
    },
    {
      heading: 'Status',
      paragraphs: [
        'Report delivered and approved, December 2025',
        'Implementation owned by Edu Journey',
        'Public trust-signal items still open in October 2026',
      ],
    },
    {
      heading: 'What made it work',
      paragraphs: [
        'Founders available every week',
        'Every finding tied to a source',
        'Public pages read as evidence',
      ],
    },
    {
      heading: 'Who owned what',
      paragraphs: [
        'Founders: scope, priorities, sign-off',
        'Department leads: dental education, therapeutics, Quality Unit',
        'AIx2: mapping, checks, report',
      ],
    },
    {
      heading: 'Appendix: the engagement report',
      paragraphs: [
        'APPENDIX · ENGAGEMENT REPORT',
        'AIx2 Atlas at Edu Journey',
        'The detail behind the deck: scope, how the due diligence ran, findings and the value of the report. Company facts from edujrn.com.',
      ],
    },
    {
      heading: 'Executive summary',
      paragraphs: [
        'Engagement: October – December 2025 · one due diligence and report · AIx2’s first client',
        'Edu Journey is a U.S.-registered LLC that runs two very different businesses on one small platform: professional education in dentistry (cosmetic, laser, implants, orthodontics, endodontics) and an Advanced Therapeutic and Translational Science Department that trains and consults in AI-driven drug discovery, drug and gene delivery, genetic engineering, cell processing and pharmaceutical quality (GMP, GLP, regulatory affairs). Courses, live events in the United States, Dubai and Istanbul, a global faculty network and consulting projects were managed through separate tools, and the public trust signals on the website did not match the underlying records.',
        'AIx2 mapped the workflow and the data flow of both businesses in parallel, fused them into one organization model, and checked them against Edu Journey’s own stated mission and policies (Δ1), education and consulting best practice (Δ2) and U.S. consumer-protection, privacy and pharmaceutical-quality requirements (Δ3). With about 20 employees and many processes, the company had grown faster than its systems. The due diligence ended with a report: every finding with its evidence, an owner and a priority, and a 90-day plan. Implementation was Edu Journey’s own.',
      ],
    },
    {
      heading: 'Client profile',
      paragraphs: [
        'Company facts from edujrn.com (pages visited 17 October 2026); size and engagement terms from Edu Journey.',
        'Size and engagement: about 20 employees; AIx2’s first client; one due diligence and report, October – December 2025',
        'Legal form and seat: U.S.-registered Limited Liability Company focused on education, based in Frisco, Texas (About Us, Contact)',
        'Positioning: “A multidisciplinary platform dedicated to advancing knowledge and practice in dentistry and advanced therapeutic sciences”, with expert-led courses, hands-on workshops and consulting services for professionals, startups and institutions (Home)',
        'Mission: “Empower healthcare professionals, researchers, and innovators through high-quality education, consulting and implementation services in dentistry and advanced therapeutic sciences” (Home)',
        'Vision: “To become a leading hub in the Middle East and beyond” for professional education, innovation and translational solutions in dentistry, regenerative medicine and advanced therapeutic technologies (Home)',
        'Dental department: categories: Cosmetic, Dental Laser, Implants; popular subjects: Orthodontics, Implants, Endodontics, Dental Laser (menu, footer)',
        'Advanced Therapeutic and Translational Science Department: AI-driven Drug Discovery and Design · Drug & Gene Delivery · Genetic Engineering · Cell Processing and Functional Testing · Quality Unit (QU) covering PQS, cGMP, QA and QC under FDA and ICH guidance (department pages)',
        'Learning formats: Short courses · ExpertTracks · Microcredentials; e-learning platform and a mobile app (Home)',
        'Course catalogue: 4 published courses: Zirconia Bonding (free, live class), Immediate Implant Surgery (free, 5 lessons), Diploma in Advanced Oral Laser Application – Bonn University ($120, 15 lessons, 10 students), Laser Safety Officer Certificate – Bonn University ($49, 8 lessons, 13 students) (Courses)',
        'Events: A new look at fully custom fixed orthodontics; Challenges around implants in the esthetic zone; Cell-based assays for drug screening and regenerative medicine; Digitalized All-on-X & Sinus Mastery at Crowne Plaza Jumeirah, Dubai; Aesthetics Festival hands-on course at KOÇ University, Istanbul, 16–17 Aug 2025; partner offer for the IAAD 2025 meeting in Seattle, 11–12 Jul 2025, with 12 hours of AGD PACE CE credits (Home)',
        'Faculty: 23 instructors listed; a Global Faculty Network open to university faculty, industry professionals, clinicians and independent trainers (About Us, Global Faculty Network)',
        'Public metrics on the site: 4.8 average rating from 64 learner reviews; “150 students enrolled, 1 class completed, 90% satisfaction, 1 top instructor”; “more than 1,000 students trust and study at Edu Journey”; “learn with 7+ world-class institutions and educators” (Home, About Us)',
        'Commerce: prices in USD, shopping cart, account log-in (site header)',
      ],
    },
    {
      heading: 'Operating model and processes mapped',
      paragraphs: [
        'Faculty sourcing → Course & event design → Publication → Marketing & partner offers → Registration & payment → Delivery (online, live, hands-on) → Assessment & certificate → Reviews & follow-up',
        'Faculty network — What it covers: application form, introductory call, assignment to courses, consulting or advisory roles; Where the traces live: web form, e-mail, call notes',
        'Course lifecycle — What it covers: design, lessons, pricing, publication, enrolment, completion; Where the traces live: learning platform, cart',
        'Live and hands-on events — What it covers: venue (Dubai, Istanbul), partner institutions (Bonn University, KOÇ University), registration, attendance; Where the traces live: event pages, e-mail, venue contracts',
        'Credentials — What it covers: certificates, diplomas, microcredentials, CE information; Where the traces live: learning platform, partner records',
        'Consulting (Quality Unit and R&D) — What it covers: scoping, assessment of a client’s quality system or R&D workflow, report, implementation support; Where the traces live: documents, meetings',
        'Marketing and trust — What it covers: blog, newsletter, social channels, reviews and published statistics; Where the traces live: website, social platforms',
      ],
    },
    {
      heading: 'Pain points diagnosed',
      paragraphs: [
        'Each pain point rests on something visible on the public site, then confirmed inside the company.',
        '1. Trust signals not traced to records (Critical) — Public evidence: testimonials refer to “Futurelearn” and to colour theory; About page still shows theme text (“Eduma is a unique place…”); 150 enrolled vs “more than 1,000 students”; Root cause: website statistics and reviews entered by hand, not generated from learning records; Business impact: credibility risk; exposure under the FTC rule on fake reviews and testimonials',
        '2. Faculty, courses and events not connected (Critical) — Public evidence: 23 instructors listed; most profiles show 0 courses and 0 students; 4 courses published while many more events are promoted; Root cause: faculty, course and event data kept in separate places; Business impact: the strength of the faculty network is invisible to buyers',
        '3. Two businesses, no shared operating model (Critical) — Public evidence: dental education and advanced therapeutics consulting presented side by side; Root cause: different workflows, customers and evidence needs managed ad hoc; Business impact: hard to scale either business; no view of margin by division',
        '4. Multi-country event operations (High) — Public evidence: events in Texas, Dubai, Istanbul and partner programmes with Bonn University and IAAD; Root cause: registrations, venues, partners and certificates handled per event; Business impact: late surprises in attendance, cost and certification',
        '5. Credential governance (High) — Public evidence: diplomas and certificates co-branded with Bonn University; microcredentials offered; CE credits mentioned for a partner meeting; Root cause: no single register of what each credential is, who issues it and what it is recognised for; Business impact: risk of unclear claims to learners',
        '6. Consulting delivered by interview (High) — Public evidence: Quality Unit and R&D services describe PQS, cGMP, QA and QC work; Root cause: client gap assessments built from interviews and document reading; Business impact: slow, hard to repeat, hard to prove',
        '7. Learner journey split (Medium) — Public evidence: website, cart, learning platform, mobile app, newsletter, social channels; Root cause: no shared learner ID across channels; Business impact: no view of conversion, completion or repeat purchase',
      ],
    },
    {
      heading: 'Scope and inputs',
      paragraphs: [
        'All connections read-only, each with a data contract and a named owner at Edu Journey.',
        'Website and learning platform — Data used: courses, lessons, enrolments, completions, instructor profiles, reviews, statistics; Method: database export; Privacy: learner IDs pseudonymised',
        'Cart and payments — Data used: orders, prices, refunds; Method: export; Privacy: aggregated',
        'Event records — Data used: event pages, registrations, attendance, venues, partner institutions; Method: export + document modules; Privacy: —',
        'Credentials — Data used: certificate and diploma templates, partner agreements, issued certificates; Method: document modules; Privacy: learner names → IDs',
        'Faculty network — Data used: applications, call notes, assignments; Method: form export + ASR of calls with consent; Privacy: transcript only',
        'Consulting files — Data used: proposals, client quality documents, reports; Method: document modules (per client, isolated); Privacy: client data never leaves its workspace',
        'Communication — Data used: e-mail and newsletter metadata, social channel analytics; Method: API; Privacy: metadata only',
        'Policies — Data used: terms of use, privacy policy, cookies policy, FAQ; Method: document modules; Privacy: —',
        'Canonical text records produced from the platform, a review and a consulting meeting:',
        '[2025-10-21 18:20] COURSE laser-diploma-bonn · ACT enrol · LEARNER L-0912 · PRICE 120 USD · SRC lms [2025-10-23 09:11] PAGE home · ACT publish-testimonial · AUTHOR "(testimonial author)" · LINKED-LEARNER none · SRC cms · RULE testimonial-must-trace-to-learner: FAIL [2025-11-12 15:02] CASE QU-ENG-04 · ACT decide · ROLE Client QA Head · "deviation CAPA closed without effectiveness check" · SRC meet.client-gap-review @00:22:10 · CONF 0.92',
      ],
    },
    {
      heading: 'The six steps of the due diligence',
      paragraphs: [
        '1 · Data hub — What we did: registered 8 sources; exported the learning platform, cart and event records; loaded policies and partner documents as modules; Toolboxes and pipeline: connectors, document modules, PII redactor; Output: one evidence hub for both divisions',
        '2 · AI mapping — What we did: built event logs for learner, faculty, event and consulting cases; discovered the real workflows of both divisions; Toolboxes and pipeline: event templater, case correlator, ASR, process mining; Output: as-built process map + data supply chain map per division',
        '3 · Δ1 own documents — What we did: checked operations against the stated mission, FAQ promises, terms, privacy and cookies policies; Toolboxes and pipeline: clause & obligation extractor, rule compiler; Output: gaps between what the site promises and what the records show',
        '4 · Δ2 best practice — What we did: ISO 21001 (educational organisations), ISO 29993 (learning services outside formal education), consulting delivery practice; Toolboxes and pipeline: control library with clause mapping; Output: distance to best practice per level',
        '5 · Δ3 regulation — What we did: FTC Endorsement Guides (16 CFR Part 255) and the FTC rule on consumer reviews and testimonials (16 CFR Part 465); applicable state and EU privacy law for learners; for consulting: 21 CFR Parts 210, 211 and 58, ICH Q10, EU GMP; Toolboxes and pipeline: clause & obligation extractor; Output: compliance matrix: Met · Partial · Not met · No evidence',
        '6 · Report and plan — What we did: findings ranked by risk, each with evidence and an owner; 90-day plan; specification of the controls Edu Journey would build; Toolboxes and pipeline: findings register, control specifications; Output: report approved by the founders, December 2025',
      ],
    },
    {
      heading: 'Workflow on four levels, data governance on five',
      paragraphs: [
        '01 · Strategy — What we mapped: vision as a hub in the Middle East and beyond; two departments; Finding: growth plan not split by division or region',
        '02 · Strategy execution — What we mapped: faculty network, partner institutions, event calendar; Finding: faculty assignment decided per event, not by demand',
        '03 · Detailed processes — What we mapped: course publication, registration, delivery, certification, consulting; Finding: event and consulting work largely outside any system',
        '04 · Outcomes — What we mapped: enrolments, completions, certificates, reviews, consulting reports; Finding: published outcome figures did not come from records',
        'L0 · Governance foundation — What we mapped: owners for learner, faculty, review and client data; policies; Finding: no owner for public statistics and testimonials',
        'L1 · Data inputs — What we mapped: platform, cart, events, forms, consulting files; Finding: instructor profiles incomplete at source',
        'L2 · Data processing — What we mapped: statistics, ratings, certificate issuance; Finding: statistics calculated by hand',
        'L3 · Data outputs — What we mapped: website figures, certificates, reports; Finding: outputs not traced back to records',
        'L4 · Operations-generated data — What we mapped: reviews, feedback, completion data; Finding: feedback not looped into course design',
      ],
    },
    {
      heading: 'FUSE and the organization model',
      paragraphs: [
        'publishing a testimonial — Linked data: learner record + course completion; Insight: only verified learners can be quoted',
        'updating home-page statistics — Linked data: enrolment and completion tables; Insight: figures generated automatically, never typed',
        'assigning faculty to an event — Linked data: faculty profile + topic demand + past ratings; Insight: right expert for each event',
        'issuing a certificate — Linked data: partner agreement + attendance + assessment; Insight: every credential states issuer and recognition',
        'delivering a client GMP assessment — Linked data: client SOPs + batch and deviation records + ICH Q10; Insight: gap assessment from evidence, not interviews',
        'Question the model answers — Linked data: Signals; Insight: Lead time',
        'Which event will miss its attendance target? — Linked data: registrations over time, topic, venue, faculty; Insight: 4–6 weeks earlier',
        'Which course should be built next? — Linked data: search, enquiries, event demand, faculty availability; Insight: next planning cycle',
        'Which learner will not complete? — Linked data: activity, lessons viewed, assessments; Insight: during the course',
        'Where is a consulting client most exposed? — Linked data: deviations, CAPA closure, training records against GMP; Insight: at assessment time',
      ],
    },
    {
      heading: 'Δ findings',
      paragraphs: [
        'Δ1 — Reference: site statistics; Finding: home-page figures (enrolled, completed, satisfaction) were not produced from platform records; Severity: Critical',
        'Δ1 — Reference: About Us text; Finding: template text from the website theme still published; Severity: Medium',
        'Δ1 — Reference: instructor profiles; Finding: most of the 23 faculty profiles linked to no course or event; Severity: High',
        'Δ2 — Reference: ISO 21001; Finding: no documented process for learner feedback to course improvement; Severity: High',
        'Δ2 — Reference: ISO 29993; Finding: learning-service information (objectives, assessment, credential) not consistent across course pages; Severity: Medium',
        'Δ3 — Reference: FTC 16 CFR Part 465; Finding: published testimonials could not be traced to real learners; Severity: Critical',
        'Δ3 — Reference: FTC 16 CFR Part 255; Finding: partner promotion code (IAAD) published without a clear statement of the relationship; Severity: Medium',
        'Δ3 — Reference: privacy; Finding: learner data collected through several channels without one consent record; Severity: High',
      ],
    },
    {
      heading: 'Deliverables handed over',
      paragraphs: [
        'Process and data maps — Content: both divisions: learner, faculty, event and consulting flows with owners; Status: delivered',
        'Findings register — Content: 10 pain points and 8 Δ findings, each with evidence, owner and priority; Status: delivered',
        'Trust-signal gate specification — Content: every statistic, rating and testimonial checked against records before publication; Status: specified; implementation by Edu Journey',
        'Faculty and catalogue data model — Content: each instructor linked to courses, events, ratings and expertise; Status: specified',
        'Credential register template — Content: issuer, partner, recognition and wording for every certificate and diploma; Status: specified',
        'Quality Unit assessment method — Content: evidence-based GMP / GLP gap assessment with Δ1, Δ2, Δ3; Status: described as an option',
        '90-day plan — Content: order of work by risk and effort; Status: delivered',
      ],
    },
    {
      heading: 'Benchmark: findings and targets',
      paragraphs: [
        'No internal baseline is invented: “found” values are what the due diligence measured and the public site still shows (observed 17 October 2026); “target” is what the report set. Delivery of the targets is owned by Edu Journey and is not claimed here.',
        'Published statistics generated from records — Found: 0 of 4 figures; Target set in the report: 4 of 4',
        'Testimonials traced to verified learners — Found: 0 of 4; Target set in the report: 100%; unverified ones removed',
        'Faculty profiles linked to a course or event — Found: 3 of 23; Target set in the report: 23 of 23',
        'Theme placeholder text on public pages — Found: present; Target set in the report: removed',
        'Credentials with stated issuer and recognition — Found: not registered; Target set in the report: 100% in the credential register',
        'Consent record per learner across channels — Found: none; Target set in the report: one record per learner',
        'Feedback-to-course-improvement loop — Found: not documented; Target set in the report: documented, reviewed monthly',
        'Consulting gap assessments delivered from evidence — Found: 0; Target set in the report: offered as a method',
        'Divisions on one organization model — Found: 0 of 2; Target set in the report: 2 of 2',
      ],
    },
    {
      heading: 'Value of the due diligence',
      paragraphs: [
        'For a single one-time fee, a 20-person company received a complete, evidenced picture of how its two businesses really ran, ranked by risk. The highest risks were public: home-page figures and testimonials that could not be traced to records, exposed under the FTC rule on consumer reviews and testimonials (16 CFR Part 465), where civil penalties can exceed USD 50,000 per violation. The report put these first, followed by one consent record per learner and one data model for faculty, courses and events.',
        'For AIx2, this first engagement produced the method used since: process and data mapped together, public evidence read in week 1, and every finding with a count, evidence and an owner.',
        'No financial return is claimed: Edu Journey’s revenue and cost figures are not public, and implementation after the report was its own.',
      ],
    },
    {
      heading: 'Delivery timeline and governance',
      paragraphs: [
        'Oct 2025 · weeks 0–3 — Phase: Inputs and mapping; Work done: 8 sources registered with data contracts and owners; process and data maps for both divisions; first FUSE',
        'Nov 2025 · weeks 3–8 — Phase: Δ1 Δ2 Δ3; Work done: findings with evidence, owners and severity',
        'Dec 2025 · weeks 8–10 — Phase: Report and plan; Work done: findings register, control specifications, 90-day plan; approved by the founders',
        'Since Jan 2026 — Phase: Implementation by Edu Journey; Work done: no AIx2 involvement',
      ],
    },
    {
      heading: 'Sources',
      paragraphs: [
        'edujrn.com: Home, About Us, Contact, Courses, Global Faculty Network, AI-driven Drug Discovery and Design, Quality Unit (QU) — visited 17 October 2026.',
        'Regulatory references: FTC Endorsement Guides, 16 CFR Part 255; FTC Trade Regulation Rule on the Use of Consumer Reviews and Testimonials, 16 CFR Part 465; 21 CFR Parts 58, 210 and 211; ICH Q10; ISO 21001; ISO 29993.',
      ],
    },
    {
      heading: 'How each result happened',
      paragraphs: [
        'HOW EACH RESULT HAPPENED',
        'How each finding was made',
        'For each finding: what Atlas saw when Edu Journey’s tools were joined, what it compared it with, and what the report recommended. Implementation was Edu Journey’s own.',
      ],
    },
    {
      heading: 'The first engagement',
      paragraphs: [
        'This was AIx2’s first client. The method we use today, mapping process and data together, reading public evidence in week 1, and tying every finding to a count and an owner, was formed here.',
      ],
    },
    {
      heading: 'The loop every finding followed',
      paragraphs: [
        'Understand → identify → trace data and dependencies → compare with the target → recommend → client executes → client verifies.',
      ],
    },
    {
      heading: 'How each result happened: Trust',
      paragraphs: [
        'Public pages were read as evidence and compared with the learning records.',
        'Published home-page figures · 0 of 4 traced · Website × learning-platform reconciliation',
        'The home page shows four figures: enrolled, classes completed, satisfaction and top instructors, next to a claim of more than 1,000 students. None could be produced from the platform’s records.',
        'Atlas showed: four published figures with no query or record behind them. We found: figures typed by hand when the theme was set up. Recommended: generate every published figure from records; a gate before publication. Why it matters: a visitor’s first numbers are the company’s credibility.',
        'Testimonials · 0 of 4 traced · Review × enrolment reconciliation',
        'The four testimonials mention another platform and a subject Edu Journey does not teach, and match no enrolment.',
        'Atlas showed: no learner record behind any testimonial. We found: theme placeholder content still published, with theme text on the About page. Recommended: publish only reviews linked to a verified enrolment. Why it matters: exposure under the FTC rule on consumer reviews and testimonials (16 CFR Part 465)',
      ],
    },
    {
      heading: 'How each result happened: Courses & faculty',
      paragraphs: [
        'Faculty linked to courses · 3 of 23 · Faculty × catalogue × events graph',
        'Joining the faculty list with the catalogue and event records showed only three of 23 experts linked to a course or event.',
        'Atlas showed: 20 faculty profiles with no course, event or students. We found: faculty, catalogue and events kept in separate tools with no shared ID. Recommended: one data model; no profile live without a course or event. Why it matters: the network’s expertise was invisible to buyers.',
        'Credentials · not registered · Partner documents × certificate wording',
        'Diplomas co-branded with Bonn University, microcredentials and CE mentions for partner meetings had no single register.',
        'Atlas showed: credential wording differing between pages. We found: no record of issuer, partner and recognition per credential. Recommended: a credential register with issuer, recognition and wording. Why it matters: learners must know exactly what a credential is worth.',
      ],
    },
    {
      heading: 'How each result happened: Consulting & data',
      paragraphs: [
        'Consulting delivery · by interview · Service pages × ICH Q10 control library',
        'The Quality Unit and R&D services had no shared delivery method or evidence standard.',
        'Atlas showed: each engagement scoped and run differently. We found: assessments built from interviews, not records. Recommended: an evidence-based GMP / GLP assessment method using Δ1, Δ2, Δ3. Why it matters: consulting clients buy proof, not opinions.',
        'Learner consent · no single record · Channel × consent reconciliation',
        'Learner data arrived through the shop, forms, events and newsletters, each with its own consent.',
        'Atlas showed: several consent sources, none linked. We found: no single view of what each learner agreed to. Recommended: one consent record per learner across channels. Why it matters: privacy obligations for U.S. and EU learners.',
      ],
    },
  ],
  profile: {
    description: 'Edu Journey is an education and consulting company in Frisco, Texas, with about 20 people and two businesses. One runs online and hands-on dental courses and live events in Texas, Dubai and Istanbul, with a global faculty network of 23 experts. The other consults in advanced therapeutics: drug and gene delivery, cell processing, and GMP and GLP quality.',
    situation: 'Course, faculty, event, payment and certificate data sat in separate tools. Only 3 of 23 faculty profiles were linked to a course or event, and none of the four published home-page figures, nor the testimonials, could be traced to learning records. Edu Journey wanted to see, with evidence, how its two businesses really ran, and which gaps put its credibility and growth at risk.',
    whatWeDid: [
      'Started with a one-week proof of concept on one process; the full engagement followed once it proved useful',
      'Read-only connections to 8 sources, each with a data contract and a named owner',
      'Read the public website as evidence, and mapped the workflow and data flow of both businesses in parallel',
      'Fused them into one organization model',
      'Checked it against Edu Journey’s own mission, terms and privacy policy; ISO 21001 and ISO 29993; the FTC rules on endorsements and on consumer reviews and testimonials; and, for the Quality Unit, 21 CFR 210, 211 and 58, ICH Q10 and EU GMP',
      'Delivered 10 pain points and 8 findings, each with evidence, an owner and a priority',
      'Handed over a 90-day plan that put the two critical consumer-protection risks first; the changes afterwards were Edu Journey’s own',
    ],
    duration: 'One due diligence of 10 weeks, October to December 2025; AIx2’s first engagement',
    phases: [
      { when: 'Week 0', what: 'One-week proof of concept on one process' },
      { when: 'Weeks 0–3', what: 'Inputs and mapping' },
      { when: 'Weeks 3–8', what: 'Checks against own documents, best practice and regulation' },
      { when: 'Weeks 8–10', what: 'Report and plan' },
      { when: 'Since Jan 2026', what: 'Implementation by Edu Journey, without AIx2' },
    ],
    team: [
      'C-level executive sponsor',
      'Founders',
    ],
    scope: [
      'Website and learning platform',
      'Shop and payments',
      'Event records',
      'Forms and credentials',
      'E-mail and newsletter metadata',
      'Partner documents',
      'Policies',
    ],
    facts: ['EDU-01', 'EDU-02', 'EDU-05', 'EDU-06', 'EDU-07', 'USR-01', 'USR-10'],
  },
  headline: 'A twenty-person company with many processes, mapped end to end for the first time',
  keyStats: [
    { label: 'Faculty profiles linked to a course or event', from: '3 of 23 found', to: 'Target: 23 of 23', facts: ['EDU-01'] },
    { label: 'Published home-page figures traced to records', from: '0 of 4 found', to: 'Target: 4 of 4', facts: ['EDU-02'] },
    { label: 'Risks', from: 'Unranked', to: '18 findings ranked, with owners', facts: ['EDU-05'] },
  ],
  summary: {
    issue:
      'The company, about 20 people, runs online and hands-on courses in cosmetic dentistry, dental laser, implants, orthodontics and endodontics, live events in Texas, Dubai and Istanbul, a global faculty network of 23 experts, and consulting on drug and gene delivery, cell processing and GMP and GLP quality. Course, faculty, event, payment and certificate data sat in separate tools; only 3 of 23 faculty profiles were linked to a course or event; and none of the four published home-page figures, nor the testimonials, could be traced to learning records.',
    solution:
      'Over ten weeks AIx2 mapped the workflow and the data flow of both divisions in parallel across 8 sources: the learning platform, the shop, event records, forms, email metadata, partner documents, policies and the public website. They were fused into one organization model and checked against the company’s own mission, terms and privacy policy, ISO 21001 and ISO 29993, the FTC Endorsement Guides and the FTC rule on consumer reviews and testimonials, and, for the Quality Unit, 21 CFR 210, 211 and 58, ICH Q10 and EU GMP.',
    impact:
      'The report gave the founders one evidenced view of a business that had grown faster than its systems: 10 pain points and 8 findings against its own documents, best practice and regulation, each with evidence, an owner and a priority, and a 90-day plan that put the two critical consumer-protection risks first. As AIx2’s first engagement, it also produced the method every later due diligence has used: process and data mapped together, public evidence read in week 1, and a count and an owner for every finding. Implementation after the report was the company’s own and is not claimed here.',
  },
  table: [
    { label: 'Business units', from: '2 run ad hoc', to: '2 on one organization model', facts: ['EDU-04'] },
    { label: 'Faculty linked to courses', from: '3 of 23', to: 'Data model for all 23 specified', facts: ['EDU-01'] },
    { label: 'Published figures and reviews', from: '0 traced to records', to: 'Trust-signal gate specified', facts: ['EDU-02', 'EDU-03'] },
    { label: 'Learner consent', from: 'Several channels, no single record', to: 'One record per learner specified', facts: ['EDU-09'] },
    { label: 'Risks', from: 'Unranked', to: '18 findings ranked, with owners', facts: ['EDU-05'] },
  ],
  measured: [
    {
      label: 'Faculty profiles linked to a course or event',
      definition: 'Profiles linked, of 23 listed',
      before: 'Found: 3',
      after: 'Target set in the report: 23',
      sample: '23 faculty profiles',
      source: 'The company’s systems and public pages, October – December 2025; still visible on the public site in October 2026',
      facts: ['EDU-01'],
    },
    {
      label: 'Published home-page figures traced to records',
      definition: 'Figures that can be produced from platform records, of 4 published',
      before: 'Found: 0',
      after: 'Target set in the report: 4',
      sample: '4 figures',
      source: 'Public pages and learning-platform records',
      facts: ['EDU-02'],
    },
    {
      label: 'Testimonials traced to verified learners',
      definition: 'Testimonials linked to a verified enrolment, of 4 published',
      before: 'Found: 0',
      after: 'Target set in the report: 4 (100%; unverified ones removed)',
      sample: '4 testimonials',
      source: 'Public pages and enrolment records',
      facts: ['EDU-03'],
    },
    {
      label: 'Divisions on one operating model',
      definition: 'Divisions run on one organization model, of 2',
      before: 'Found: 0',
      after: 'Target set in the report: 2',
      sample: '2 divisions',
      source: 'Process and data maps of both divisions',
      facts: ['EDU-04'],
    },
    {
      label: 'Consent record per learner across channels',
      definition: 'Learner data collected through several channels with one consent record',
      before: 'Found: none',
      after: 'Target set in the report: one record per learner',
      sample: 'All channels',
      source: 'Channel and consent reconciliation',
      facts: ['EDU-09'],
    },
  ],
  verification: [
    'Every count taken from the company’s systems or its public pages, with the source recorded',
    'Findings reviewed with the founders before the report was issued',
    'No outcome after the report is claimed; implementation was the company’s own',
    'Public trust-signal items were still open on the public site in October 2026',
  ],
  financial: {
    paragraphs: [
      'No return is stated: the company’s revenue and cost figures are not public. The value was a ranked risk list and a plan, not a savings claim.',
      'What the engagement delivered: process and data maps of both divisions; 18 findings, each with evidence, an owner and a priority; regulatory exposure ranked (FTC rules on reviews and endorsements, learner privacy, GMP consulting); control specifications (trust-signal gate, faculty data model, credential register, consent record); and a 90-day plan, ordered by risk and effort.',
      'Not priced: civil penalties under the FTC rule on consumer reviews and testimonials can exceed USD 50,000 per violation.',
    ],
  },
  howItRan: {
    work: [
      'Weeks 0–3 · Connect and map: 8 sources read (learning platform, shop, events, forms, email metadata, partner documents, policies, website); workflows and data mapped in parallel.',
      'Weeks 3–8 · Check: compared with the company’s own promises, learning-service standards and U.S. consumer-protection, privacy and GMP requirements.',
      'Weeks 8–10 · Report: 18 findings with owners, control specifications and a 90-day plan.',
      'Human sign-off at every step: the founders approved every finding and the final report before release.',
    ],
    data: [
      'Read-only access to every tool',
      'Learner personal data masked',
      'No copy of learner data kept after the report',
      'Accounts provided by the company; all access removed at the end of week 10',
    ],
  },
  required: [
    {
      category: 'Join process and data in one model',
      detail: 'Process-analytics tools: process only. Data platforms: data only. Atlas: yes. At the company: faculty, courses, events and enrolments linked.',
    },
    {
      category: 'Read public pages as evidence',
      detail: 'Process-analytics tools: no. Data platforms: no. Atlas: yes. At the company: home-page figures and reviews compared with records.',
    },
    {
      category: 'Check against learning-service standards',
      detail: 'Process-analytics tools: no. Data platforms: no. Atlas: yes. At the company: ISO 21001 and ISO 29993 gaps.',
    },
    {
      category: 'Check consulting against pharmaceutical quality systems',
      detail: 'Process-analytics tools: no. Data platforms: no. Atlas: yes. At the company: ICH Q10 and 21 CFR 211 method gaps.',
    },
  ],
  forYou: [
    'Map process and data together: one model across tools, as in every engagement since',
    'Every finding needs a count, evidence and an owner',
    'Public evidence counts: website, filings and partner pages are read in week 1',
    'Small firms need ownership first: a role map comes before the process map',
    'Recommend controls the client can run: control specifications, not only findings',
    'A small company still needs an owner per process. With about 20 people, each process sat with one person; the map showed which person every course, event and consulting project depended on.',
  ],
  timeline: [
    { when: 'Oct 2025 · weeks 0–3', what: 'Inputs and mapping: 8 sources registered with data contracts and owners; process and data maps for both divisions.' },
    { when: 'Nov 2025 · weeks 3–8', what: 'Checks against the company’s own documents, best practice and regulation: findings with evidence, owners and severity.' },
    { when: 'Dec 2025 · weeks 8–10', what: 'Report and plan: findings register, control specifications and a 90-day plan, approved by the founders.' },
    { when: 'Since Jan 2026', what: 'Implementation by the company, with no AIx2 involvement.' },
  ],
  owners: [
    'Founders: scope, priorities, sign-off',
    'Department leads: dental education, therapeutics, Quality Unit',
    'AIx2: mapping, checks, report',
  ],
  madeItWork: [
    'Founders available every week.',
    'Every finding tied to a source.',
    'Public pages read as evidence.',
  ],
  oneYearLater: undefined,
  measurementLabel:
    'Found: measured in the due diligence, October – December 2025, and still visible on the public site in October 2026. Targets set in the report; delivery is the company’s and is not claimed.',
  facts: ['EDU-01', 'EDU-02', 'EDU-03', 'EDU-04', 'EDU-05', 'EDU-06', 'EDU-07', 'EDU-08', 'EDU-09', 'EDU-S01', 'EDU-S02', 'EDU-S03', 'EDU-S04', 'EDU-S05', 'EDU-S06', 'EDU-S07', 'EDU-S08', 'EDU-S09', 'EDU-S10', 'EDU-S11', 'EDU-S12', 'EDU-S13', 'EDU-S14', 'EDU-S15', 'EDU-S16', 'EDU-S17', 'EDU-S18', 'EDU-S19', 'EDU-S20', 'EDU-S21', 'EDU-S22', 'EDU-S23', 'EDU-S24', 'EDU-S25', 'EDU-S26', 'EDU-S27', 'EDU-S28', 'EDU-S29'],
};
