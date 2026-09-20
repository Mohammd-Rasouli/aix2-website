import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShieldCheck, Lock, FileCheck, Shield } from "lucide-react"
import { VideoEmbed } from "@/components/video-embed"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b bg-white">
        <div className="container flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/aix2-logo-official.png"
              alt="AIx2 Logo"
              width={180}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-[#004976] hover:text-[#003557] font-medium">
              Home
            </Link>
            <Link href="/use-cases" className="text-[#004976] hover:text-[#003557] font-medium">
              Use Cases
            </Link>
            <Link href="/media" className="text-[#004976] hover:text-[#003557] font-medium">
              Media and Conferences
            </Link>
            <Link href="/research" className="text-[#004976] hover:text-[#003557] font-medium">
              AI Research
            </Link>
            <Link href="/blog" className="text-[#004976] hover:text-[#003557] font-medium">
              Blog
            </Link>
            <Link href="/privacy" className="text-[#004976] hover:text-[#003557] font-medium">
              Privacy
            </Link>
            <Link href="/terms" className="text-[#004976] hover:text-[#003557] font-medium">
              Terms
            </Link>
          </nav>
          <a href="mailto:admin@aix2.ai">
            <Button className="bg-[#004976] hover:bg-[#003557] text-white rounded-full">Contact Us</Button>
          </a>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#004976] mb-6 leading-tight">
                AI transformation for your organization, connected to the capital market
              </h1>
              <p className="text-lg mb-8 text-gray-700">
                AIx2 helps organizations transform how they operate, make decisions, and create value — connecting people, intelligence, and strategy to the capital market.
              </p>
              <a href="mailto:admin@aix2.ai">
                <Button className="bg-[#004976] hover:bg-[#003557] text-white px-8 py-6 text-lg rounded-full">
                  CONTACT US
                </Button>
              </a>
            </div>

          </div>
        </section>

        <section className="py-12 bg-white border-y border-gray-200 overflow-hidden">
          <div className="container mx-auto mb-6">
            <h3 className="text-center text-lg font-semibold text-[#004976]">Trusted by Leading Funds</h3>
          </div>
          <div className="relative w-full">
            <div className="flex animate-scroll-seamless whitespace-nowrap">
              {/* First set of logos */}
              <div className="flex items-center shrink-0">
                <div className="flex items-center justify-center px-12">
                  <Image
                    src="/images/ahp.png"
                    alt="AHP"
                    width={140}
                    height={60}
                    className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center px-12">
                  <Image
                    src="/images/r136-20ventures.png"
                    alt="R136 Ventures"
                    width={140}
                    height={60}
                    className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center px-12">
                  <Image
                    src="/images/marvin-20ventures.jpeg"
                    alt="Marvin Ventures"
                    width={140}
                    height={60}
                    className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center px-12">
                  <Image
                    src="/images/prime-20unicorn-20index.jpeg"
                    alt="Prime Unicorn Index"
                    width={140}
                    height={60}
                    className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center px-12">
                  <Image
                    src="/images/cancer-20focus-20fund.png"
                    alt="Cancer Focus Fund"
                    width={140}
                    height={60}
                    className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center px-12">
                  <Image
                    src="/images/inception-20studio.png"
                    alt="Inception Studio"
                    width={140}
                    height={60}
                    className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center px-12">
                  <Image
                    src="/images/zaka-logo.jpeg"
                    alt="Zaka VC"
                    width={140}
                    height={60}
                    className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center px-12">
                  <Image
                    src="/images/sinbad-logo.png"
                    alt="Sinbad Capital"
                    width={140}
                    height={60}
                    className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>                                 
                <div className="flex items-center justify-center px-12">
                  <Image
                    src="/images/tau-20ventures-201.png"
                    alt="Tau Ventures"
                    width={140}
                    height={60}
                    className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center px-12">
                  <Image
                    src="/images/nathan-20logo.png"
                    alt="Nathan"
                    width={140}
                    height={60}
                    className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center px-12">
                  <Image
                    src="/images/omvp.jpeg"
                    alt="Oscar Mike Venture Partners"
                    width={140}
                    height={60}
                    className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center px-12">
                  <Image
                    src="/images/zaka-logo.jpeg"
                    alt="Zaka VC"
                    width={140}
                    height={60}
                    className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center px-12">
                  <Image
                    src="/images/sinbad-logo.png"
                    alt="Sinbad Capital"
                    width={140}
                    height={60}
                    className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex items-center shrink-0">
                <div className="flex items-center justify-center px-12">
                  <Image
                    src="/images/ahp.png"
                    alt="AHP"
                    width={140}
                    height={60}
                    className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center px-12">
                  <Image
                    src="/images/r136-20ventures.png"
                    alt="R136 Ventures"
                    width={140}
                    height={60}
                    className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center px-12">
                  <Image
                    src="/images/marvin-20ventures.jpeg"
                    alt="Marvin Ventures"
                    width={140}
                    height={60}
                    className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center px-12">
                  <Image
                    src="/images/prime-20unicorn-20index.jpeg"
                    alt="Prime Unicorn Index"
                    width={140}
                    height={60}
                    className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center px-12">
                  <Image
                    src="/images/cancer-20focus-20fund.png"
                    alt="Cancer Focus Fund"
                    width={140}
                    height={60}
                    className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center px-12">
                  <Image
                    src="/images/inception-20studio.png"
                    alt="Inception Studio"
                    width={140}
                    height={60}
                    className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center px-12">
                  <Image
                    src="/images/tau-20ventures-201.png"
                    alt="Tau Ventures"
                    width={140}
                    height={60}
                    className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center px-12">
                  <Image
                    src="/images/nathan-20logo.png"
                    alt="Nathan"
                    width={140}
                    height={60}
                    className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center px-12">
                  <Image
                    src="/images/omvp.jpeg"
                    alt="Oscar Mike Venture Partners"
                    width={140}
                    height={60}
                    className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center px-12">
                  <Image
                    src="/images/zaka-logo.jpeg"
                    alt="Zaka VC"
                    width={140}
                    height={60}
                    className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center px-12">
                  <Image
                    src="/images/sinbad-logo.png"
                    alt="Sinbad Capital"
                    width={140}
                    height={60}
                    className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
              {/* Third set for extra smoothness on larger screens */}
              <div className="flex items-center shrink-0">
                <div className="flex items-center justify-center px-12">
                  <Image
                    src="/images/ahp.png"
                    alt="AHP"
                    width={140}
                    height={60}
                    className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center px-12">
                  <Image
                    src="/images/r136-20ventures.png"
                    alt="R136 Ventures"
                    width={140}
                    height={60}
                    className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center px-12">
                  <Image
                    src="/images/marvin-20ventures.jpeg"
                    alt="Marvin Ventures"
                    width={140}
                    height={60}
                    className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center px-12">
                  <Image
                    src="/images/prime-20unicorn-20index.jpeg"
                    alt="Prime Unicorn Index"
                    width={140}
                    height={60}
                    className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center px-12">
                  <Image
                    src="/images/cancer-20focus-20fund.png"
                    alt="Cancer Focus Fund"
                    width={140}
                    height={60}
                    className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center px-12">
                  <Image
                    src="/images/inception-20studio.png"
                    alt="Inception Studio"
                    width={140}
                    height={60}
                    className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center px-12">
                  <Image
                    src="/images/tau-20ventures-201.png"
                    alt="Tau Ventures"
                    width={140}
                    height={60}
                    className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center px-12">
                  <Image
                    src="/images/nathan-20logo.png"
                    alt="Nathan"
                    width={140}
                    height={60}
                    className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center px-12">
                  <Image
                    src="/images/omvp.jpeg"
                    alt="Oscar Mike Venture Partners"
                    width={140}
                    height={60}
                    className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center px-12">
                  <Image
                    src="/images/zaka-logo.jpeg"
                    alt="Zaka VC"
                    width={140}
                    height={60}
                    className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center px-12">
                  <Image
                    src="/images/sinbad-logo.png"
                    alt="Sinbad Capital"
                    width={140}
                    height={60}
                    className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#004976] text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Sample Client Success Stories</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">3x Faster Fundraising</h3>
                <div className="mb-4 text-left">
                  <p className="italic mb-2">
                    "Within a week we had initial LP screening tailored to us that allows us to source the right LPs,
                    run far more engaged meetings, and move 3x faster with successful fundraising."
                  </p>
                  <p className="text-sm text-white/80">— Ross Barrett, Managing Partner, Cancer Focus Fund</p>
                </div>
                <VideoEmbed
                  src="https://drive.google.com/file/d/1jJoCxvUaYsdf0rftppcAfxBEMJywTTxa/preview"
                  title="3x Faster Fundraising Success Story"
                />
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">5x Faster Screening and Diligence</h3>
                <div className="mb-4 text-left">
                  <p className="italic mb-2">
                    "AIx2 partnered with us in a critical time to achieve 80% time savings with sharper insights for
                    deals initial screening and due diligence in less than 1 week."
                  </p>
                  <p className="text-sm text-white/80">— Victor Orlovski, Founding Partner, R136</p>
                </div>
                <VideoEmbed
                  src="https://drive.google.com/file/d/1hvRC55jZ8nDTLJxIJKLihPAkLdsUGvBM/preview"
                  title="Venture Capital Success Story"
                />
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">10x Faster Sourcing and Scoring</h3>
                <div className="mb-4 text-left">
                  <p className="italic mb-2">
                    "In under a week, AIx2 built the backbone for our sourcing and scoring — something other major AI
                    providers had failed to deliver."
                  </p>
                  <p className="text-sm text-white/80">— Will Ballard, Chief Data Officer, Prime Unicorn Index</p>
                </div>
                <VideoEmbed
                  src="https://drive.google.com/file/d/1nA4L5mwtZEE0cyyq6WJh1dFuFXdvFPrM/preview"
                  title="Private Equity Success Story"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="hidden">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#004976] mb-4">
                Unified Platform of Three End-to-End Workflows
              </h2>
              <p className="text-lg text-gray-700">
                End-to-end workflows for LP sourcing, screening, outreach, and due diligence — raise capital 3x faster.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-[#004976] via-[#0066a1] to-[#003557] p-8 rounded-xl shadow-lg group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-gray-100 transition-colors">
                    Fundraising Workflow
                  </h4>
                  <p className="text-gray-200 leading-relaxed">
                    End-to-end workflow for LP sourcing, screening, outreach, and due diligence — raise capital 3x
                    faster.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/20">
                  <div className="flex items-center text-white/80 text-sm">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    3x faster fundraising
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#004976] via-[#0066a1] to-[#003557] p-8 rounded-xl shadow-lg group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-gray-100 transition-colors">
                    Investment Workflow
                  </h4>
                  <p className="text-gray-200 leading-relaxed">
                    End-to-end workflow for thematic deal sourcing, screening, outreach, and due diligence — never miss
                    a top deal.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/20">
                  <div className="flex items-center text-white/80 text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    2x more top deals
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#004976] via-[#0066a1] to-[#003557] p-8 rounded-xl shadow-lg group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-gray-100 transition-colors">
                    Deal Exit Workflow
                  </h4>
                  <p className="text-gray-200 leading-relaxed">
                    End-to-end workflow for GP sourcing, screening, outreach, and vendor due diligence — achieve exits
                    4x faster.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/20">
                  <div className="flex items-center text-white/80 text-sm">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                    4x faster exits
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Link href="/use-cases">
                <Button className="bg-[#004976] hover:bg-[#003557] text-white px-8 py-3 text-lg font-medium rounded-full">
                  See Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="hidden">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#004976] mb-4">
                Five Core Modules Hyper-Tailored to Your Fund Thesis
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Each of the three workflows is powered by our five specialized AI modules tailored to your fund unique
                thesis, working in sequence to deliver comprehensive results
              </p>
            </div>

            {/* Module Flow Visualization */}
            <div className="relative max-w-6xl mx-auto">
              {/* Connection Lines */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#004976] via-[#0066a1] to-[#004976] transform -translate-y-1/2 z-0"></div>

              {/* Modules */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
                {/* Module 1 - Sourcing */}
                <div className="bg-gradient-to-br from-[#004976] to-[#0066a1] p-6 rounded-xl shadow-lg text-white text-center group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    1
                  </div>
                  <h3 className="text-lg font-bold mb-3">Thematic Sourcing</h3>
                  <ul className="text-sm text-gray-200 space-y-1">
                    <li>• Deal discovery</li>
                    <li>• LP identification</li>
                    <li>• Buyer sourcing</li>
                  </ul>
                </div>

                {/* Module 2 - Screening */}
                <div className="bg-gradient-to-br from-[#0066a1] to-[#0088cc] p-6 rounded-xl shadow-lg text-white text-center group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    2
                  </div>
                  <h3 className="text-lg font-bold mb-3">Thematic Screening</h3>
                  <ul className="text-sm text-gray-200 space-y-1">
                    <li>• Deal scoring</li>
                    <li>• LP fit analysis</li>
                    <li>• Buyer assessment</li>
                  </ul>
                </div>

                {/* Module 3 - Contact Finder */}
                <div className="bg-gradient-to-br from-[#0088cc] to-[#00aaff] p-6 rounded-xl shadow-lg text-white text-center group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    3
                  </div>
                  <h3 className="text-lg font-bold mb-3">Contact Finder</h3>
                  <ul className="text-sm text-gray-200 space-y-1">
                    <li>• Decision makers</li>
                    <li>• LP contacts</li>
                    <li>• Buyer executives</li>
                    <li>• Maximum relevancy contact</li>
                  </ul>
                </div>

                {/* Module 4 - Outreach */}
                <div className="bg-gradient-to-br from-[#00aaff] to-[#0088cc] p-6 rounded-xl shadow-lg text-white text-center group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    4
                  </div>
                  <h3 className="text-lg font-bold mb-3">Outreach</h3>
                  <ul className="text-sm text-gray-200 space-y-1">
                    <li>• Outreach strategy</li>
                    <li>• Tailored message</li>
                    <li>• Maximize relevancy</li>
                  </ul>
                </div>

                {/* Module 5 - Due Diligence */}
                <div className="bg-gradient-to-br from-[#0066a1] to-[#004976] p-6 rounded-xl shadow-lg text-white text-center group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    5
                  </div>
                  <h3 className="text-lg font-bold mb-3">Due Diligence</h3>
                  <ul className="text-sm text-gray-200 space-y-1">
                    <li>• Investment DD</li>
                    <li>• LP query responses</li>
                    <li>• Vendor DD</li>
                    <li>• Risk assessment</li>
                  </ul>
                </div>
              </div>

              {/* Flow Arrows for Mobile */}
              <div className="md:hidden flex justify-center mt-8">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-0.5 h-8 bg-[#004976]"></div>
                  <svg className="w-6 h-6 text-[#004976]" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto"></p>
              <Link href="https://meetings.hubspot.com/aix2/aix2-team" target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#004976] hover:bg-[#003557] text-white px-8 py-3 text-lg font-medium rounded-full">
                  See How It Works
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#f0f5fa]">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#004976] mb-4">Security and Compliance</h2>
              <p className="text-lg text-gray-700">
                Don't risk your proprietary data being trained on public AI models or exposed during audits. Choose a
                platform that's built compliant and secure.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg border border-[#d0e0f0] shadow-sm flex items-start gap-4">
                <div className="text-[#004976] mt-1 flex-shrink-0">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#004976] mb-2">Data Privacy Guaranteed</h3>
                  <p className="text-gray-700">
                    Your fund data is never trained on public LLMs. Proprietary information remains fully private and
                    secure.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-[#d0e0f0] shadow-sm flex items-start gap-4">
                <div className="text-[#004976] mt-1 flex-shrink-0">
                  <FileCheck size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#004976] mb-2">SEC Compliant</h3>
                  <p className="text-gray-700">
                    17a-4 archival to meet SEC compliance and regulations, ensuring your fund meets all regulatory
                    requirements.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-[#d0e0f0] shadow-sm flex items-start gap-4">
                <div className="text-[#004976] mt-1 flex-shrink-0">
                  <Lock size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#004976] mb-2">Access Control</h3>
                  <p className="text-gray-700">
                    Granular access controls prevent internal and external breaches, giving you full control over your
                    data.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-[#d0e0f0] shadow-sm flex items-start gap-4">
                <div className="text-[#004976] mt-1 flex-shrink-0">
                  <Shield size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#004976] mb-2">Enterprise-Grade Security</h3>
                  <p className="text-gray-700">
                    Enterprise-grade safeguards protect your data from hacks and breaches at all times.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link href="https://meetings.hubspot.com/aix2/aix2-team" target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#004976] hover:bg-[#003557] text-white px-8 py-3 text-lg font-medium rounded-full">
                  Book Security Demo
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#003557] text-white py-12">
        <div className="container">
          <div className="border-t border-white/20 mt-8 pt-8 text-sm text-gray-300 text-center">
            <p>© 2025 AIx2. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
