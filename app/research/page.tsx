import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const layers = [
  { number: "01", title: "User layer", name: "RLUI feedback", text: "Interfaces that turn expert judgment into a continuous learning loop, shaped around how investment teams actually work." },
  { number: "02", title: "Algorithms layer", name: "CORTEX", text: "Curated search, reasoning, and agentic systems that map the private market and surface the signals that matter." },
  { number: "03", title: "Data structure layer", name: "MEMORA", text: "A durable intelligence layer for preferences, context, and institutional knowledge—organized for retrieval and action." },
  { number: "04", title: "Data layer", name: "Connected intelligence", text: "Public and proprietary data brought together with disciplined access controls, integrations, and traceable sources." },
]

export default function Research() {
  return (
    <div className="min-h-screen bg-[#f7f8f6] text-[#102b3f]">
      <header className="border-b border-[#102b3f]/10 bg-[#f7f8f6]/95 backdrop-blur">
        <div className="container flex items-center justify-between py-5">
          <Link href="/" aria-label="AIx2 home"><Image src="/images/aix2-logo-official.png" alt="AIx2" width={180} height={40} className="h-9 w-auto" /></Link>
          <nav className="hidden items-center gap-8 md:flex">
            <Link href="/" className="text-sm font-medium hover:text-[#0d7a83]">Home</Link>
            <Link href="/media" className="text-sm font-medium hover:text-[#0d7a83]">Media and Conferences</Link>
            <Link href="/research" className="border-b-2 border-[#0d7a83] pb-1 text-sm font-semibold">AI Research</Link>
            <Link href="/blog" className="text-sm font-medium hover:text-[#0d7a83]">Blog</Link>
          </nav>
          <Link href="https://calendar.app.google/JSZzuAFvkoSdeeUw6" target="_blank" rel="noreferrer"><Button className="rounded-full bg-[#0d7a83] px-5 text-white hover:bg-[#095e66]">Contact us</Button></Link>
        </div>
      </header>

      <main>
        <section className="border-b border-[#102b3f]/10 bg-[#102b3f] text-white">
          <div className="container grid gap-12 py-20 md:grid-cols-[1.25fr_.75fr] md:py-28">
            <div>
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-[#77c9c3]">AI research & engineering</p>
              <h1 className="max-w-4xl text-4xl font-semibold leading-[1.04] tracking-[-0.04em] md:text-6xl">Building the intelligence architecture for the private market.</h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">AIx2 combines original research, rigorous engineering, and domain expertise to create systems that make complex organizations more intelligent.</p>
              <Link href="https://calendar.app.google/JSZzuAFvkoSdeeUw6" target="_blank" rel="noreferrer" className="mt-9 inline-flex"><Button className="rounded-full bg-[#77c9c3] px-6 text-[#102b3f] hover:bg-[#9adbd5]">Start a conversation</Button></Link>
            </div>
            <div className="flex items-end border-l border-white/20 pl-8"><p className="max-w-xs text-sm leading-7 text-white/60">An open research program for the next generation of decision systems—grounded in real operating environments.</p></div>
          </div>
        </section>

        <section className="container py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-[.7fr_1.3fr]">
            <div><p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0d7a83]">Our point of view</p><h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-4xl">Research should move from paper to practice.</h2></div>
            <div className="max-w-2xl text-lg leading-8 text-[#526575]"><p>Our work explores how AI can reason over fragmented information, learn from experts, and operate with the precision that capital markets demand.</p><p className="mt-6">We publish openly, collaborate with leading researchers, and translate foundational ideas into dependable systems for organizations navigating change.</p></div>
          </div>
          <div className="mt-16 overflow-hidden border border-[#102b3f]/15 bg-white"><Image src="/images/aix2-cerebrain-architecture-detailed.png" alt="AIx2 CereBrain architecture" width={1200} height={760} className="h-auto w-full object-cover" /></div>
        </section>

        <section className="border-y border-[#102b3f]/10 bg-white"><div className="container py-20 md:py-24"><div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0d7a83]">The architecture</p><h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">From raw signal to institutional intelligence.</h2></div><p className="max-w-sm text-sm leading-6 text-[#526575]">A layered approach designed for context, control, and measurable progress.</p></div><div className="grid gap-px overflow-hidden border border-[#102b3f]/15 bg-[#102b3f]/15 md:grid-cols-2">{layers.map((layer) => <article key={layer.number} className="bg-white p-8 md:p-10"><div className="flex items-start justify-between"><span className="text-sm font-semibold text-[#0d7a83]">{layer.number}</span><span className="text-xs uppercase tracking-[0.18em] text-[#526575]">{layer.title}</span></div><h3 className="mt-14 text-2xl font-semibold">{layer.name}</h3><p className="mt-4 max-w-md leading-7 text-[#526575]">{layer.text}</p></article>)}</div></div></section>

        <section className="container py-20 text-center md:py-24"><p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0d7a83]">Collaborate with AIx2</p><h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.03em] md:text-4xl">Have a research question worth pursuing?</h2><p className="mx-auto mt-5 max-w-xl leading-7 text-[#526575]">We work with researchers, operators, and investors at the frontier of AI transformation.</p><Link href="https://calendar.app.google/JSZzuAFvkoSdeeUw6" target="_blank" rel="noreferrer" className="mt-8 inline-flex"><Button className="rounded-full bg-[#102b3f] px-7 text-white hover:bg-[#0d7a83]">Book a research conversation</Button></Link></section>
      </main>
      <footer className="bg-[#102b3f] py-8 text-center text-sm text-white/60">© 2025 AIx2. All rights reserved.</footer>
    </div>
  )
}
