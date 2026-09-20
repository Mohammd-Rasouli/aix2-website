import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, ChevronRight, Network, ScanSearch, Waypoints } from "lucide-react"
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
        <a href="mailto:admin@aix2.ai">
          <Button className="rounded-full bg-[#d7e8ee] px-5 text-[#071b2b] hover:bg-white">Contact us <ArrowUpRight data-icon="inline-end" /></Button>
        </a>
      </div>
    </header>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f6f2] text-[#102433]">
      <Header />
      <main>
        <section className="relative overflow-hidden bg-[#071b2b] pt-36 text-white lg:pt-44">
          <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(159,205,218,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(159,205,218,.18)_1px,transparent_1px)] [background-size:72px_72px]" />
          <div className="absolute -right-40 top-20 size-[520px] rounded-full bg-[#1a7180]/25 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-6 pb-24 lg:px-10 lg:pb-32">
            <div className="max-w-5xl">
              <p className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#a8d7dc]"><span className="h-px w-10 bg-[#a8d7dc]" /> AI transformation / capital markets</p>
              <h1 className="max-w-4xl text-5xl font-medium leading-[1.02] tracking-[-0.04em] md:text-7xl lg:text-[6.7rem]">Transform the organization.<br /><span className="text-[#a8d7dc]">Connect to capital.</span></h1>
              <div className="mt-12 grid max-w-4xl gap-8 border-t border-white/20 pt-8 md:grid-cols-[1fr_280px]">
                <p className="max-w-2xl text-xl leading-relaxed text-white/75 md:text-2xl">AIx2 works with leadership teams to turn artificial intelligence into operating advantage, stronger decisions, and measurable enterprise value — connected to the capital market.</p>
                <div className="flex items-end"><a href="mailto:admin@aix2.ai"><Button className="rounded-full bg-[#d7e8ee] px-7 py-6 text-base text-[#071b2b] hover:bg-white">Start a conversation <ArrowUpRight data-icon="inline-end" /></Button></a></div>
              </div>
            </div>
            <div className="mt-20 grid max-w-5xl grid-cols-2 border-y border-white/20 md:grid-cols-4">
              {[['01', 'Strategic clarity'], ['02', 'AI-native operations'], ['03', 'Engineering execution'], ['04', 'Capital-market signal']].map(([number, label]) => <div key={number} className="border-r border-white/20 px-4 py-5 first:pl-0 last:border-r-0"><p className="text-xs text-[#a8d7dc]">{number}</p><p className="mt-2 text-sm font-medium text-white/80">{label}</p></div>)}
            </div>
          </div>
        </section>

        <section className="border-b border-[#102433]/10 bg-[#f5f6f2] py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-end"><p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#52717b]">A different kind of partner</p><p className="max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">We bring the rigor of a consultancy, the depth of an engineering team, and the perspective of the capital markets.</p></div>
          </div>
        </section>

        <section className="bg-[#f5f6f2] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-12 flex items-end justify-between border-b border-[#102433]/15 pb-5"><div><p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#52717b]">How we create advantage</p><h2 className="text-4xl font-medium tracking-[-0.04em] md:text-6xl">From ambition to infrastructure.</h2></div><span className="hidden text-sm text-[#52717b] md:block">AIx2 / 2026</span></div>
            <div className="grid gap-px overflow-hidden border border-[#102433]/15 bg-[#102433]/15 md:grid-cols-3">
              {[{icon: ScanSearch, title: 'See the signal', text: 'Map the forces shaping your business, customers, competitors, and sources of capital.'}, {icon: Network, title: 'Build the system', text: 'Design the data, intelligence, and operating architecture that makes better decisions repeatable.'}, {icon: Waypoints, title: 'Move with confidence', text: 'Put AI into the hands of teams and leaders with the governance to scale it responsibly.'}].map(({ icon: Icon, title, text }, index) => <article key={title} className="group bg-[#f5f6f2] p-8 transition hover:bg-[#e5eef0] lg:p-10"><div className="flex items-start justify-between"><Icon className="text-[#1b7180]" /><span className="text-xs text-[#52717b]">0{index + 1}</span></div><h3 className="mt-20 text-2xl font-medium tracking-[-0.03em]">{title}</h3><p className="mt-4 leading-relaxed text-[#52717b]">{text}</p><ChevronRight className="mt-8 text-[#1b7180] transition group-hover:translate-x-1" /></article>)}
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-white py-14"><div className="mx-auto max-w-7xl px-6 lg:px-10"><p className="mb-8 text-xs font-semibold uppercase tracking-[0.25em] text-[#52717b]">Trusted by leaders building what comes next</p></div><div className="flex w-max animate-scroll-seamless">{[...clientLogos, ...clientLogos, ...clientLogos].map(([src, alt], index) => <div key={`${src}-${index}`} className="flex h-20 w-52 items-center justify-center px-8"><Image src={src} alt={alt} width={140} height={60} className="h-12 w-auto object-contain grayscale opacity-65" /></div>)}</div></section>

        <section className="bg-[#d7e8ee] py-20 lg:py-28"><div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_1.3fr] lg:px-10"><p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#52717b]">The next chapter</p><div><h2 className="max-w-4xl text-4xl font-medium leading-tight tracking-[-0.04em] md:text-6xl">The organizations that lead with AI will shape the markets around them.</h2><div className="mt-10 flex flex-wrap gap-4"><a href="mailto:admin@aix2.ai"><Button className="rounded-full bg-[#071b2b] px-7 py-6 text-white hover:bg-[#12334a]">Contact us <ArrowUpRight data-icon="inline-end" /></Button></a><Link href="/research"><Button variant="outline" className="rounded-full border-[#071b2b]/30 px-7 py-6 text-[#071b2b] hover:bg-white">Explore our research</Button></Link></div></div></div></section>
      </main>
      <footer className="bg-[#071b2b] py-10 text-white"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-6 text-sm text-white/60 md:flex-row lg:px-10"><p>© {new Date().getFullYear()} AIx2. Intelligence for what comes next.</p><div className="flex gap-6"><Link href="/privacy" className="hover:text-white">Privacy</Link><Link href="/terms" className="hover:text-white">Terms</Link></div></div></footer>
    </div>
  )
}

