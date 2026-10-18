import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Check, Database, GitBranch, Landmark, Network, ScanSearch, Waypoints } from "lucide-react"
import { Button } from "@/components/ui/button"

const clientLogos = [
  ["/images/ahp.png", "AHP"],
  ["/images/r136-20ventures.png", "R136 Ventures"],
  ["/images/marvin-20ventures.jpeg", "Marvin Ventures"],
  ["/images/prime-20unicorn-20index.jpeg", "Prime Unicorn Index"],
  ["/images/cancer-20focus-20fund.png", "Cancer Focus Fund"],
  ["/images/inception-20studio.png", "Inception Studio"],
  ["/images/nathan-20logo.png", "Nathan"],
  ["/images/zaka-logo.jpeg", "Zaka VC"],
  ["/images/sinbad-logo.png", "Sinbad Capital"],
] as const

function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 border-b border-white/10 bg-[#071b2b]/90 text-white backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link href="/" className="flex items-center gap-3" aria-label="AIx2 home">
          <Image src="/images/aix2-logo-official.png" alt="AIx2" width={180} height={40} className="h-9 w-auto brightness-0 invert" />
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-white/75 lg:flex">
          <Link href="/" className="text-white">Home</Link>
          <Link href="/media" className="transition hover:text-white">Media and Conferences</Link>
          <Link href="/research" className="transition hover:text-white">AI Research</Link>
          <Link href="/blog" className="transition hover:text-white">Blog</Link>
        </nav>
        <a href="https://calendar.app.google/JSZzuAFvkoSdeeUw6">
          <Button className="rounded-full bg-[#d7e8ee] px-5 text-[#071b2b] hover:bg-white">Contact us <ArrowUpRight data-icon="inline-end" /></Button>
        </a>
      </div>
    </header>
  )
}

const steps = [
  { number: "01", icon: ScanSearch, title: "Map Business Processes", description: "Use existing enterprise data and AI to understand how work actually happens, including workflows, handoffs, dependencies, and bottlenecks.", output: "Evidence-based process maps and improvement opportunities." },
  { number: "02", icon: Database, title: "Map Data Governance", description: "Establish how important data is owned, defined, governed, accessed, transformed, and maintained.", output: "Ownership, lineage, quality, access, and control findings." },
  { number: "03", icon: Network, title: "Map AI Infrastructure and GPU Consumption", description: "Analyze available AI workload, infrastructure, and GPU usage data to understand utilization, efficiency, and potential cost opportunities.", output: "GPU consumption analysis and infrastructure recommendations." },
  { number: "04", icon: Waypoints, title: "Conduct Focused Due Diligence and Design Best Practices", description: "Use the three maps to assess relevant risks, prioritize opportunities, and design future-state processes and AI solutions.", output: "Focused findings, solution concepts, and implementation roadmaps." },
  { number: "05", icon: Check, title: "Implement the Change", description: "Turn agreed recommendations into practical process improvements, governance controls, AI agents, and automation.", output: "Implemented improvements and continuous improvement priorities." },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f6f2] text-[#102433]">
      <Header />
      <main>
        <section className="relative overflow-hidden bg-[#071b2b] pt-36 text-white lg:pt-44">
          <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(159,205,218,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(159,205,218,.18)_1px,transparent_1px)] [background-size:72px_72px]" />
          <div className="absolute -right-40 top-20 size-[520px] rounded-full bg-[#1a7180]/25 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-6 pb-24 lg:px-10 lg:pb-32">
            <p className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#a8d7dc]"><span className="h-px w-10 bg-[#a8d7dc]" /> Enterprise intelligence · AI transformation · capital markets</p>
            <h1 className="max-w-5xl text-5xl font-medium leading-[1.02] tracking-[-0.04em] md:text-7xl lg:text-[6.4rem]">Due Diligence and Transformation Connected to Capital Markets</h1>
            <div className="mt-12 grid max-w-5xl gap-8 border-t border-white/20 pt-8 md:grid-cols-[1fr_280px]">
              <p className="max-w-3xl text-xl leading-relaxed text-white/75 md:text-2xl">AIx2 helps investors assess businesses and enterprise leaders transform them through AI-powered analysis of actual enterprise data—mapping business processes, data governance, and AI infrastructure to identify risks, opportunities, and actionable improvements.</p>
              <div className="flex items-end"><a href="#methodology"><Button className="rounded-full bg-[#d7e8ee] px-7 py-6 text-base text-[#071b2b] hover:bg-white">Explore how it works <ArrowUpRight data-icon="inline-end" /></Button></a></div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-white py-14"><div className="mx-auto max-w-7xl px-6 lg:px-10"><p className="mb-8 text-xs font-semibold uppercase tracking-[0.25em] text-[#52717b]">Trusted by leaders building what comes next</p></div><div className="flex w-max animate-scroll-seamless">{[...clientLogos, ...clientLogos, ...clientLogos].map(([src, alt], index) => <div key={`${src}-${index}`} className="flex h-20 w-52 items-center justify-center px-8"><Image src={src} alt={alt} width={140} height={60} className="h-12 w-auto object-contain grayscale opacity-65" /></div>)}</div></section>

        <section className="border-b border-[#102433]/10 bg-[#f5f6f2] py-20 lg:py-28"><div className="mx-auto max-w-7xl px-6 lg:px-10"><div className="mb-12 max-w-3xl"><p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#52717b]">Two audiences · one methodology</p><h2 className="text-4xl font-medium leading-tight tracking-[-0.04em] md:text-6xl">One Methodology. Two Audiences. Connected to Capital Markets.</h2></div><div className="grid gap-px overflow-hidden border border-[#102433]/15 bg-[#102433]/15 md:grid-cols-2"><article className="bg-[#f5f6f2] p-8 lg:p-12"><Landmark className="text-[#1b7180]" /><h3 className="mt-12 text-3xl font-medium tracking-[-0.03em]">For Investors</h3><p className="mt-4 text-lg leading-relaxed text-[#52717b]">Focused Due Diligence. Clearer Investment Insight.</p><p className="mt-6 leading-relaxed text-[#52717b]">Assess relevant operational processes, data governance, and AI infrastructure to identify risks and potential value-creation opportunities.</p><ul className="mt-8 flex flex-col gap-3 text-sm text-[#102433]"><li>Evidence-based process mapping.</li><li>Data governance assessment.</li><li>AI infrastructure and GPU efficiency analysis.</li><li>Findings that inform investment decisions and post-investment priorities.</li></ul></article><article className="bg-[#f5f6f2] p-8 lg:p-12"><GitBranch className="text-[#1b7180]" /><h3 className="mt-12 text-3xl font-medium tracking-[-0.03em]">For Enterprise Leadership</h3><p className="mt-4 text-lg leading-relaxed text-[#52717b]">Enterprise Intelligence. Practical Transformation.</p><p className="mt-6 leading-relaxed text-[#52717b]">Understand current-state operations and prioritize improvements across processes, data governance, and AI infrastructure.</p><ul className="mt-8 flex flex-col gap-3 text-sm text-[#102433]"><li>Map how processes actually operate.</li><li>Identify governance gaps and control improvements.</li><li>Analyze GPU consumption and AI infrastructure efficiency.</li><li>Design and implement targeted improvements and AI solutions.</li></ul></article></div></div></section>

        <section id="methodology" className="bg-[#f5f6f2] py-20 lg:py-28"><div className="mx-auto max-w-7xl px-6 lg:px-10"><div className="mb-12 flex items-end justify-between border-b border-[#102433]/15 pb-5"><div><p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#52717b]">The AIx2 methodology</p><h2 className="text-4xl font-medium tracking-[-0.04em] md:text-6xl">From Enterprise Data to Due Diligence and Transformation</h2><p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#52717b]">AIx2 uses AI and existing enterprise data to map the current state, identify opportunities, design improvements, and implement change.</p></div></div><div className="grid gap-px overflow-hidden border border-[#102433]/15 bg-[#102433]/15 md:grid-cols-2 xl:grid-cols-5">{steps.map(({ number, icon: Icon, title, description, output }) => <article key={number} className="bg-[#f5f6f2] p-7 lg:p-8"><div className="flex items-start justify-between"><Icon className="text-[#1b7180]" /><span className="text-xs text-[#52717b]">{number}</span></div><h3 className="mt-12 text-xl font-medium leading-tight tracking-[-0.03em]">{title}</h3><p className="mt-4 text-sm leading-relaxed text-[#52717b]">{description}</p><p className="mt-6 border-t border-[#102433]/15 pt-4 text-xs font-semibold uppercase leading-relaxed tracking-[0.08em] text-[#1b7180]">Output: {output}</p></article>)}</div><p className="mt-10 text-xl font-medium tracking-[-0.02em]">Map the current state. Assess the opportunity. Design the future. Implement the change.</p></div></section>

        <section className="bg-white py-20 lg:py-28"><div className="mx-auto max-w-7xl px-6 lg:px-10"><div className="mb-12 max-w-3xl"><p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#52717b]">AI-powered, as-built enterprise analysis</p><h2 className="text-4xl font-medium tracking-[-0.04em] md:text-6xl">Three Areas of Enterprise Intelligence</h2><p className="mt-6 text-lg leading-relaxed text-[#52717b]">AI-powered analysis of actual enterprise data, with minimal human intervention.</p><p className="mt-3 max-w-2xl leading-relaxed text-[#52717b]">AIx2 uses available operational data, metadata, and infrastructure usage data to map current-state processes, data governance, and GPU consumption. Human expertise validates material findings, resolves ambiguity, and guides decisions.</p></div><div className="grid gap-px border border-[#102433]/15 bg-[#102433]/15 md:grid-cols-3"><article className="bg-white p-8 lg:p-10"><ScanSearch className="text-[#1b7180]" /><h3 className="mt-12 text-2xl font-medium">Business Process Mapping</h3><p className="mt-4 leading-relaxed text-[#52717b]">Use actual enterprise data and AI to understand workflows, dependencies, bottlenecks, and opportunities to improve how work gets done.</p></article><article className="bg-white p-8 lg:p-10"><Database className="text-[#1b7180]" /><h3 className="mt-12 text-2xl font-medium">Data Governance Mapping</h3><p className="mt-4 leading-relaxed text-[#52717b]">Establish visibility into data ownership, quality, lineage, access, controls, and governance gaps.</p></article><article className="bg-white p-8 lg:p-10"><Network className="text-[#1b7180]" /><h3 className="mt-12 text-2xl font-medium">AI Infrastructure and GPU Mapping</h3><p className="mt-4 leading-relaxed text-[#52717b]">Analyze available AI workload and GPU consumption data to identify utilization, efficiency, and cost optimization opportunities.</p></article></div><p className="mt-10 text-center text-sm font-medium text-[#52717b]">Existing Enterprise Data <span className="mx-2 text-[#1b7180]">→</span> AI-Powered Mapping <span className="mx-2 text-[#1b7180]">→</span> Evidence-Based Findings <span className="mx-2 text-[#1b7180]">→</span> Best Practices and AI Solutions <span className="mx-2 text-[#1b7180]">→</span> Implementation</p></div></section>

        <section className="bg-[#071b2b] py-20 text-white lg:py-28"><div className="mx-auto max-w-7xl px-6 lg:px-10"><p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#a8d7dc]">The capital-markets connection</p><h2 className="max-w-4xl text-4xl font-medium tracking-[-0.04em] md:text-6xl">Enterprise Intelligence. Investment Decisions. Capital Formation.</h2><p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/70">AIx2 connects evidence-based enterprise assessment and transformation with capital-market needs—helping investors evaluate operational opportunities and enterprise leaders prioritize improvements and communicate investment priorities.</p><div className="mt-12 grid gap-px bg-white/20 md:grid-cols-2"><div className="bg-[#071b2b] p-8 lg:p-10"><h3 className="text-2xl font-medium">For Investors</h3><p className="mt-4 leading-relaxed text-white/70">Focused operational and technology insights to inform due diligence, investment decisions, and potential portfolio value creation.</p></div><div className="bg-[#071b2b] p-8 lg:p-10"><h3 className="text-2xl font-medium">For Enterprise Leadership</h3><p className="mt-4 leading-relaxed text-white/70">Evidence-based transformation priorities, business cases, and measurable improvement plans that can support capital allocation and capital formation discussions.</p></div></div><p className="mt-10 text-center text-sm font-medium text-[#a8d7dc]">Enterprise Data <span className="mx-2">→</span> Evidence-Based Assessment <span className="mx-2">→</span> Transformation Opportunities <span className="mx-2">→</span> Investment and Capital Decisions</p></div></section>

        <section className="bg-[#d7e8ee] py-20 lg:py-28"><div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_1.3fr] lg:px-10"><p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#52717b]">The next chapter</p><div><h2 className="max-w-4xl text-4xl font-medium leading-tight tracking-[-0.04em] md:text-6xl">Turn Enterprise Data into Actionable Insight</h2><p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#52717b]">Whether you are assessing an investment or leading enterprise transformation, AIx2 helps turn actual enterprise data into focused findings, practical recommendations, and measurable change.</p><div className="mt-10 flex flex-wrap gap-4"><a href="https://calendar.app.google/JSZzuAFvkoSdeeUw6"><Button className="rounded-full bg-[#071b2b] px-7 py-6 text-white hover:bg-[#12334a]">Discuss your needs <ArrowUpRight data-icon="inline-end" /></Button></a><a href="#methodology"><Button variant="outline" className="rounded-full border-[#071b2b]/30 px-7 py-6 text-[#071b2b] hover:bg-white">Explore how it works</Button></a></div></div></div></section>
      </main>
      <footer className="bg-[#071b2b] py-10 text-white"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-6 text-sm text-white/60 md:flex-row lg:px-10"><p>© {new Date().getFullYear()} AIx2. Intelligence for what comes next.</p><div className="flex gap-6"><Link href="/privacy" className="hover:text-white">Privacy</Link><Link href="/terms" className="hover:text-white">Terms</Link></div></div></footer>
    </div>
  )
}
