import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Search, Users, TrendingUp, Handshake } from "lucide-react"

export default function UseCases() {
  return (
    <div className="flex flex-col min-h-screen" style={{ scrollBehavior: "smooth" }}>
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/aix2-logo-with-text.png"
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
            <Link href="/use-cases" className="text-[#004976] hover:text-[#003557] font-medium font-bold underline">
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
          <Link href="https://meetings.hubspot.com/aix2/aix2-team" target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#004976] hover:bg-[#003557] text-white rounded-full">Book Demo</Button>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#004976] mb-6 text-center">
              AIx2 Product Offerings and Use Cases
            </h1>
            <p className="text-lg mb-12 text-gray-700 text-center max-w-3xl mx-auto">
              Alpha Through AI: Discover how AIx2's AI-powered solutions are transforming private market intelligence
              across various applications.
            </p>

            {/* Product Offerings Overview */}
            <div className="bg-[#f0f7ff] p-8 rounded-lg shadow-sm mb-16 border border-[#e0eeff]">
              <h2 className="text-2xl font-bold text-[#004976] mb-6 text-center">
                AIx2 Solutions Across the Investment Process
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#004976] text-white p-3 rounded-full">
                      <Search size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-[#004976]">Investment Pipeline</h4>
                      <p className="text-gray-700 mb-3">
                        End to end solution for thematic deal sourcing, initial screening, outreach, and due diligence -
                        Never miss a top deal
                      </p>
                      <a
                        href="#case1"
                        className="inline-block bg-[#004976] hover:bg-[#003557] text-white text-sm px-4 py-1 rounded-full transition-colors"
                      >
                        View Case Study
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#004976] text-white p-3 rounded-full">
                      <Users size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-[#004976]">Fundraising Pipeline</h4>
                      <p className="text-gray-700 mb-3">
                        End to end solution for thematic LP sourcing, initial screening, outreach, and due diligence -
                        Improve fundraising by 3x
                      </p>
                      <a
                        href="#case2"
                        className="inline-block bg-[#004976] hover:bg-[#003557] text-white text-sm px-4 py-1 rounded-full transition-colors"
                      >
                        View Case Study
                      </a>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#004976] text-white p-3 rounded-full">
                      <TrendingUp size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-[#004976]">Deal Exit Pipeline</h4>
                      <p className="text-gray-700 mb-3">
                        End to end solution for GP sourcing, initial screening, outreach, and vendor due diligence -
                        Improve exit process 4x
                      </p>
                      <a
                        href="#case3"
                        className="inline-block bg-[#004976] hover:bg-[#003557] text-white text-sm px-4 py-1 rounded-full transition-colors"
                      >
                        View Case Study
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#004976] text-white p-3 rounded-full">
                      <Handshake size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-[#004976]">GP Sourcing</h4>
                      <p className="text-gray-700 mb-3">
                        Find and manage relationships with general partners for strategic partnerships
                      </p>
                      <a
                        href="#case4"
                        className="inline-block bg-[#004976] hover:bg-[#003557] text-white text-sm px-4 py-1 rounded-full transition-colors"
                      >
                        View Case Study
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Studies */}
            <h2 className="text-2xl md:text-3xl font-bold text-[#004976] mb-8 text-center">Client Success Stories</h2>

            {/* Case 1 - Investment Pipeline */}
            <div id="case1" className="bg-[#e0eeff] p-8 rounded-lg shadow-sm mb-8 border-l-4 border-[#0099dd]">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-[#004976] text-white p-3 rounded-full">
                  <Search size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#004976]">
                  Case Study 1: Lower-Middle Market Private Equity Empowered with AIx2 Investment Pipeline Solution
                </h3>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-[#004976] mb-3">Client</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>U.S.-based mid-market infrastructure private equity</li>
                    <li>Targeting infrastructure assets with $5M–$50M EBITDA, with 40,000+ potential investments</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#004976] mb-3">Challenge</h4>
                  <p className="text-gray-700 mb-2">Low quality and unscalable deal sourcing process due to:</p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Fragmented data tools (e.g., PitchBook, Crunchbase)</li>
                    <li>Large set of potential investments</li>
                    <li>Nuanced and detailed investment criteria</li>
                    <li>Manual outreach and screening processes</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#004976] mb-3">AIx2 Solution</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>AI-driven thematic deal sourcing platform tailored to the firm's strategic focus areas</li>
                    <li>Automated initial screening and scoring based on investment criteria</li>
                    <li>Intelligent outreach automation with personalized messaging</li>
                    <li>Comprehensive due diligence workflow integration</li>
                    <li>Scoring and reasoning engine for 40,000+ private assets in the infrastructure space</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-white p-4 rounded-lg border border-[#d0e0f0]">
                <h4 className="text-lg font-semibold text-[#004976] mb-2">Impact</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Achieved 25% higher ROI on deals through improved alignment with investment thesis</li>
                  <li>Discovered 3x more high-quality investment opportunities previously missed</li>
                  <li>Reduced asset discovery time from weeks to under 2 days across 40,000+ assets</li>
                  <li>Cut operational costs by 70% through automated screening and outreach processes</li>
                  <li>Never missed a top deal in their target sectors</li>
                </ul>
              </div>
            </div>

            {/* Case 2 - Fundraising Pipeline */}
            <div id="case2" className="bg-[#e6f2ff] p-8 rounded-lg shadow-sm mb-8 border-l-4 border-[#0088cc]">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-[#004976] text-white p-3 rounded-full">
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#004976]">
                  Case Study 2: Mid-Sized Alternative Investment Firm Empowered with AIx2 Fundraising Pipeline Solution
                </h3>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-[#004976] mb-3">Client</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Alternative investment firm with $3.5B+ in AUM</li>
                    <li>
                      Focused on minority investments in alternative asset managers (AAMs) across private equity,
                      credit, real estate, and infrastructure
                    </li>
                    <li>10,000+ global LPs (including IRAs)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#004976] mb-3">Challenge</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>
                      Lack of precision in matching LPs with niche offerings due to manual LP mapping using data from
                      CRM, web information, Dakota, Preqin, and PitchBook
                    </li>
                    <li>Inefficient outreach processes and low response rates</li>
                    <li>Time-intensive due diligence on potential LPs</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#004976] mb-3">AIx2 Solution</h4>
                  <p className="text-gray-700 mb-2">
                    End-to-end thematic LP sourcing, screening, outreach, and due diligence by:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>LP Scoring & Strategy Fit Analysis</li>
                    <li>Automated initial screening based on investment preferences</li>
                    <li>Personalized outreach campaigns with AI-generated messaging</li>
                    <li>Comprehensive LP due diligence workflows</li>
                    <li>Regional Targeting at Scale</li>
                    <li>Weekly Dynamic Refresh of LP database</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-white p-4 rounded-lg border border-[#d0e0f0]">
                <h4 className="text-lg font-semibold text-[#004976] mb-2">Impact</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Unlocked 40% more fundraising opportunities through precise LP-strategy matching</li>
                  <li>Accelerated fundraising round closure by 3x with targeted LP outreach</li>
                  <li>Reduced LP prioritization time from ~6 hours to under 30 minutes per segment</li>
                  <li>Decreased operational costs by 80% through automated LP screening and analysis</li>
                  <li>Improved fundraising success rate by 3x</li>
                </ul>
              </div>
            </div>

            {/* Case 3 - Deal Exit Pipeline */}
            <div id="case3" className="bg-[#f0f8ff] p-8 rounded-lg shadow-sm mb-8 border-l-4 border-[#0077cc]">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-[#004976] text-white p-3 rounded-full">
                  <TrendingUp size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#004976]">
                  Case Study 3: Growth Equity Firm Empowered with AIx2 Deal Exit Pipeline Solution
                </h3>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-[#004976] mb-3">Client</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Growth equity firm with $2B+ in AUM</li>
                    <li>Portfolio of 25+ companies across technology and healthcare sectors</li>
                    <li>Managing multiple exit processes simultaneously</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#004976] mb-3">Challenge</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Complex exit process coordination across multiple stakeholders</li>
                    <li>Difficulty identifying optimal exit timing and buyers</li>
                    <li>Manual vendor due diligence processes</li>
                    <li>Limited visibility into market conditions and buyer preferences</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#004976] mb-3">AIx2 Solution</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>AI-driven GP and strategic buyer identification and sourcing</li>
                    <li>Automated initial screening of potential acquirers</li>
                    <li>Intelligent outreach campaigns to qualified buyers</li>
                    <li>Comprehensive vendor due diligence automation</li>
                    <li>Market timing analysis and exit optimization</li>
                    <li>Deal process management and coordination tools</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-white p-4 rounded-lg border border-[#d0e0f0]">
                <h4 className="text-lg font-semibold text-[#004976] mb-2">Impact</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Improved exit process efficiency by 4x through automation</li>
                  <li>Achieved 35% higher exit valuations through better buyer matching</li>
                  <li>Reduced time to exit by 60% with streamlined processes</li>
                  <li>Cut vendor due diligence costs by 75% through automation</li>
                  <li>Increased successful exit rate by 40%</li>
                </ul>
              </div>
            </div>

            {/* Case 4 - GP Sourcing */}
            <div id="case4" className="bg-[#d2e7ff] p-8 rounded-lg shadow-sm mb-8 border-l-4 border-[#00bbff]">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-[#004976] text-white p-3 rounded-full">
                  <Handshake size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#004976]">
                  Case Study 4: Multi-Billion Family Office Empowered with AIx2 GP Sourcing Solution for Manager
                  Selection
                </h3>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-[#004976] mb-3">Client</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Multi-billion family office with $10B+ in alternative investments</li>
                    <li>
                      Portfolio spanning private equity, venture capital, real estate, and infrastructure across 50+ GP
                      relationships
                    </li>
                    <li>5,000+ potential GPs in their screening universe</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#004976] mb-3">Challenge</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Inefficient GP discovery and evaluation process across established and emerging managers</li>
                    <li>Limited ability to identify best-fit strategies aligned with LP investment criteria</li>
                    <li>Difficulty tracking and managing relationships with existing GP network</li>
                    <li>Time-intensive manual research across fragmented data sources</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#004976] mb-3">AIx2 Solution</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>AI-driven GP matching platform tailored to LP's strategic allocation requirements</li>
                    <li>Historical performance analysis and strategy fit modeling</li>
                    <li>Emerging manager identification and evaluation capabilities</li>
                    <li>Relationship management system for existing GP portfolio</li>
                    <li>Integration with industry databases and proprietary LP data</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-white p-4 rounded-lg border border-[#d0e0f0]">
                <h4 className="text-lg font-semibold text-[#004976] mb-2">Impact</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Achieved 30% higher ROI through improved GP-LP strategy alignment and manager quality</li>
                  <li>Accelerated fund allocation decisions by 60% with data-driven GP insights</li>
                  <li>Reduced GP discovery time from months to under 2 weeks across 5,000+ managers</li>
                  <li>Cut operational costs by 75% through automated GP evaluation and monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-b from-white to-[#f0f7ff]">
          <div className="container text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#004976] mb-6">
              Ready to transform your investment process?
            </h2>
            <p className="text-lg mb-8 text-gray-700 max-w-2xl mx-auto">
              Schedule a personalized demo to see how AIx2 can help you achieve 90% time savings while improving
              investment outcomes.
            </p>
            <Link href="https://meetings.hubspot.com/aix2/aix2-team" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#004976] hover:bg-[#003557] text-white px-8 py-6 text-lg rounded-full">
                BOOK DEMO
              </Button>
            </Link>
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
