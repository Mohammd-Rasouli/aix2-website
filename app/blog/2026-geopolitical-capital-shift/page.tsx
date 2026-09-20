import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Globe, TrendingUp, PieChart, Target, CheckCircle2, AlertTriangle, DollarSign, Building2, Shield, Briefcase, Users, Clock, FileText, ChevronRight, MapPin, Landmark, Factory, Wallet } from "lucide-react"

// 2026 Geopolitical Capital Shift Article
export default function GeopoliticalCapitalShift() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b bg-white sticky top-0 z-50">
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
            <Link href="/" className="text-[#004976] hover:text-[#003557] font-medium">Home</Link>
            <Link href="/use-cases" className="text-[#004976] hover:text-[#003557] font-medium">Use Cases</Link>
            <Link href="/media" className="text-[#004976] hover:text-[#003557] font-medium">Media and Conferences</Link>
            <Link href="/research" className="text-[#004976] hover:text-[#003557] font-medium">AI Research</Link>
            <Link href="/blog" className="text-[#004976] hover:text-[#003557] font-medium font-bold underline">Blog</Link>
            <Link href="/privacy" className="text-[#004976] hover:text-[#003557] font-medium">Privacy</Link>
            <Link href="/terms" className="text-[#004976] hover:text-[#003557] font-medium">Terms</Link>
          </nav>
          <Link href="https://meetings.hubspot.com/aix2/aix2-team" target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#004976] hover:bg-[#003557] text-white rounded-full">Book Demo</Button>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <article className="py-12 md:py-16">
          <div className="container max-w-6xl mx-auto px-4">
            
            <Link href="/blog" className="inline-flex items-center text-[#004976] hover:text-[#003557] mb-8 font-medium">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>

            <div className="mb-12">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <Clock className="h-4 w-4" />
                <span>25 min read</span>
                <span className="mx-2">|</span>
                <span>April 2026</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#004976] mb-4 leading-tight">
                2026 Geopolitical Capital Shift, Action Plan for GPs and LPs
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-6">
                What the Iran-US War Means for Private Market GPs and LPs
              </p>
              <p className="text-gray-600 border-l-4 border-[#004976] pl-4 italic">
                For C-Suite of General Partners, Fund Managers, and Limited Partners
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              
              {/* Table of Contents - Sticky Sidebar */}
              <aside className="lg:w-72 flex-shrink-0">
                <div className="lg:sticky lg:top-24 bg-gray-50 rounded-xl p-6 border">
                  <h3 className="font-bold text-[#004976] mb-4 flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Table of Contents
                  </h3>
                  <nav className="space-y-2 text-sm">
                    <a href="#executive-summary" className="flex items-center gap-2 text-gray-700 hover:text-[#004976] py-1">
                      <ChevronRight className="h-3 w-3" />
                      Executive Summary
                    </a>
                    <a href="#mega-trends" className="flex items-center gap-2 text-gray-700 hover:text-[#004976] py-1">
                      <ChevronRight className="h-3 w-3" />
                      The Four Mega Trends
                    </a>
                    <a href="#section-01" className="flex items-center gap-2 text-gray-700 hover:text-[#004976] py-1">
                      <ChevronRight className="h-3 w-3" />
                      01 Geopolitical Capital Flight
                    </a>
                    <a href="#section-02" className="flex items-center gap-2 text-gray-700 hover:text-[#004976] py-1">
                      <ChevronRight className="h-3 w-3" />
                      02 Fundraising Environment
                    </a>
                    <a href="#section-03" className="flex items-center gap-2 text-gray-700 hover:text-[#004976] py-1">
                      <ChevronRight className="h-3 w-3" />
                      03 Allocation Shifts
                    </a>
                    <a href="#section-04" className="flex items-center gap-2 text-gray-700 hover:text-[#004976] py-1">
                      <ChevronRight className="h-3 w-3" />
                      04 Intelligent Infrastructure
                    </a>
                    <a href="#action-framework" className="flex items-center gap-2 text-gray-700 hover:text-[#004976] py-1">
                      <ChevronRight className="h-3 w-3" />
                      05 Action Framework
                    </a>
                    <a href="#sources" className="flex items-center gap-2 text-gray-700 hover:text-[#004976] py-1">
                      <ChevronRight className="h-3 w-3" />
                      Sources
                    </a>
                  </nav>
                </div>
              </aside>

              {/* Main Content */}
              <div className="flex-1 min-w-0">
                
                {/* How to Read */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
                  <h3 className="font-bold text-[#004976] mb-3 flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    How to Read This Report
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Each section follows four blocks: <strong>(1) TREND</strong> - what is shifting in private markets; 
                    <strong> (2) EVIDENCE</strong> - named facts, data, and documented flows; 
                    <strong> (3) GP / VC / PC TAKEAWAY</strong> - what fund managers must do; 
                    <strong> (4) LP TAKEAWAY</strong> - what allocators must do.
                  </p>
                </div>

                {/* The Four Mega Trends */}
                <section id="mega-trends" className="mb-12">
                  <h2 className="text-2xl font-bold text-[#004976] mb-6 flex items-center gap-3">
                    <TrendingUp className="h-7 w-7" />
                    THE FOUR MEGA TRENDS
                  </h2>

                  <div className="grid gap-4">
                    <div className="bg-gradient-to-r from-[#004976] to-[#006ba8] text-white rounded-xl p-5">
                      <div className="flex items-start gap-4">
                        <span className="bg-white/20 rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">M1</span>
                        <div>
                          <p className="font-semibold mb-2">Geopolitical capital flight is moving fast</p>
                          <p className="text-white/90 text-sm">To new geographies and new asset classes. Post-war reconstruction, energy, defense, and infrastructure are growing sectors.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-[#004976] to-[#006ba8] text-white rounded-xl p-5">
                      <div className="flex items-start gap-4">
                        <span className="bg-white/20 rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">M2</span>
                        <div>
                          <p className="font-semibold mb-2">Successful fundraising requires sitting in the flow of capital</p>
                          <p className="text-white/90 text-sm">Not waiting for it to arrive. Geographic and structural positioning is the edge.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-[#004976] to-[#006ba8] text-white rounded-xl p-5">
                      <div className="flex items-start gap-4">
                        <span className="bg-white/20 rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">M3</span>
                        <div>
                          <p className="font-semibold mb-2">Successful allocation means finding managers built for the new reality</p>
                          <p className="text-white/90 text-sm">Then concentrating behind them. Diversification is under stress.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-[#004976] to-[#006ba8] text-white rounded-xl p-5">
                      <div className="flex items-start gap-4">
                        <span className="bg-white/20 rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">M4</span>
                        <div>
                          <p className="font-semibold mb-2">Mass outreach does not work. Precision does.</p>
                          <p className="text-white/90 text-sm">The GPs closing funds know exactly which LP is currently relocating capital.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Executive Summary */}
                <section id="executive-summary" className="mb-12">
                  <h2 className="text-2xl font-bold text-[#004976] mb-6 flex items-center gap-3">
                    <Target className="h-7 w-7" />
                    00 EXECUTIVE SUMMARY
                  </h2>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    The Iran-US war that began <strong>February 28, 2026</strong> is not primarily a public markets event. Its consequences for private capital - fund closes, LP commitments, portfolio valuations, liquidity structures, and sectoral capital flows - are the decisions that matter for GPs and LPs right now.
                  </p>

                  <h3 className="font-bold text-[#004976] mb-4 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-amber-500" />
                    What Is Moving Right Now
                  </h3>

                  <div className="grid gap-4 mb-8">
                    <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                      <p className="text-gray-700">
                        <strong className="text-amber-700">Family office deal-making:</strong> down <strong className="text-2xl">25%</strong> month-over-month in March. 
                        <strong> 6-7 of 20</strong> Dubai-based family office clients have initiated relocation; 3 executing immediately.
                      </p>
                    </div>

                    <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                      <p className="text-gray-700">
                        <strong className="text-amber-700">UAE private wealth:</strong> <strong className="text-2xl">40%</strong> increase in funds moving to Swiss banks documented since war began.
                      </p>
                    </div>

                    <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                      <p className="text-gray-700">
                        <strong className="text-amber-700">Gulf SWFs:</strong> <strong>3 Gulf states</strong> in confirmed internal review of <strong className="text-2xl">~$5tn</strong> in global deployments (Reuters). 
                        Pledge reversals, divestments, and sponsorship re-evaluations all in scope.
                      </p>
                    </div>

                    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                      <p className="text-gray-700">
                        <strong className="text-red-700">Private credit gates triggered:</strong>
                      </p>
                      <ul className="mt-2 space-y-1 text-sm text-gray-600">
                        <li>Blackstone BCRED: <strong>7.9%</strong> quarterly requests (~$3.8bn on $82bn vehicle)</li>
                        <li>Blue Owl: regular liquidity restricted</li>
                        <li>BlackRock HLEND: 5% cap enforced ($620m of $1.2bn paid)</li>
                        <li>Morgan Stanley and Cliffwater: also gated</li>
                      </ul>
                    </div>

                    <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                      <p className="text-gray-700">
                        <strong className="text-amber-700">Corporates:</strong> <strong>40+</strong> Asia and Gulf firms in active relocation discussions with Istanbul IFC. 
                        Turkey expanding incentives: <strong>75%</strong> corporate tax deduction, staff income-tax relief up to <strong>80%</strong>.
                      </p>
                    </div>
                  </div>

                  <h3 className="font-bold text-[#004976] mb-4 flex items-center gap-2">
                    <PieChart className="h-5 w-5" />
                    The Structural Signal - 60/40 Has Failed Again
                  </h3>

                  <div className="bg-gray-50 rounded-xl p-6 mb-8">
                    <p className="text-gray-700 mb-4">
                      Stocks, bonds, and gold fell simultaneously in peak war weeks. Goldman Sachs <strong>$300T</strong> global portfolio proxy down <strong>~5%</strong> with losses distributed across both equities and bonds.
                    </p>
                    <div className="bg-white rounded-lg p-4 border">
                      <p className="font-semibold text-[#004976] mb-2">Goldman&apos;s reallocation framework now:</p>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="bg-blue-50 rounded-lg p-3">
                          <p className="text-2xl font-bold text-[#004976]">1/3</p>
                          <p className="text-xs text-gray-600">Innovation (tech/AI/equities)</p>
                        </div>
                        <div className="bg-green-50 rounded-lg p-3">
                          <p className="text-2xl font-bold text-green-700">1/3</p>
                          <p className="text-xs text-gray-600">Inflation protection (real assets)</p>
                        </div>
                        <div className="bg-amber-50 rounded-lg p-3">
                          <p className="text-2xl font-bold text-amber-700">1/3</p>
                          <p className="text-xs text-gray-600">Risk mitigation (hedging, cash)</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 mt-4">
                      <strong>72%</strong> of family offices held zero gold pre-war (JP Morgan). <strong>64%</strong> had cited geopolitics as top risk. Both are now live exposures, not theoretical ones.
                    </p>
                  </div>

                  {/* 30-Second Takeaway */}
                  <h3 className="font-bold text-[#004976] mb-4">30-Second Takeaway by Audience</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <Briefcase className="h-5 w-5 text-emerald-700" />
                        <h4 className="font-bold text-emerald-800">GPs / VCs / PC</h4>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span>Map Gulf LP exposure by called / committed-uncalled / pledged</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span>Call Gulf LPs proactively, review MAC clauses</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span>Extend close timelines 6-9 months</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span>Diversify LP base toward Asia Pacific</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span>Position fund structure inside the flow of capital</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <Wallet className="h-5 w-5 text-amber-700" />
                        <h4 className="font-bold text-amber-800">LPs</h4>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                          <span>Stress-test private credit with layered scenarios</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                          <span>Do not add Gulf RE near-term</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                          <span>Probe GPs on Gulf LP concentration</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                          <span>Rebalance toward real assets - structurally, not tactically</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                          <span>If Gulf-based, engage GPs openly on review timeline</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Section 01 */}
                <section id="section-01" className="mb-12">
                  <h2 className="text-2xl font-bold text-[#004976] mb-2 flex items-center gap-3">
                    <Globe className="h-7 w-7" />
                    01 GEOPOLITICAL CAPITAL FLIGHT
                  </h2>
                  <p className="text-gray-600 mb-6">Where Gulf private and institutional capital is going - and why it matters for fund managers.</p>

                  <div className="bg-[#004976] text-white rounded-xl p-5 mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-white/20 rounded px-2 py-1 text-sm font-bold">M1</span>
                      <span className="font-semibold">MEGA TREND</span>
                    </div>
                    <p>Geopolitical capital is moving fast to new geographical destinations and new asset classes</p>
                  </div>

                  <h3 className="font-bold text-[#004976] mb-4 border-b pb-2">TREND: What this means for private markets</h3>
                  
                  <div className="space-y-4 mb-8 text-gray-700">
                    <p>
                      Gulf capital is not waiting for a ceasefire to move. HNWIs, family offices, and sovereign funds are simultaneously re-domiciling private wealth, pausing new commitments, and executing divestments - at different speeds but in the same direction.
                    </p>
                    <p>
                      <strong>The destinations are not random.</strong> Singapore, Turkey (Istanbul IFC), Oman, and the US are attracting capital because of specific policy, proximity, and structural advantages.
                    </p>
                    <p>
                      <strong>Asset classes are shifting too:</strong> away from Gulf real estate and long-duration Gulf PE, toward US real assets, Shariah-compliant US land and logistics funds, and short-cycle energy.
                    </p>
                    <p className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                      <strong>This is not a temporary risk-off.</strong> The Qatar-funded Middle East Council on Global Affairs has described the conflict as having &apos;irreversibly shaken&apos; the Gulf&apos;s image as a safe destination.
                    </p>
                  </div>

                  <h3 className="font-bold text-[#004976] mb-4 border-b pb-2 flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    EVIDENCE: Facts, data, and named sources
                  </h3>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                      <DollarSign className="h-5 w-5 text-[#004976] mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">
                        <strong className="text-2xl text-[#004976]">40%</strong> increase in UAE-linked funds documented moving to Swiss banks since war began.
                      </p>
                    </div>

                    <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                      <MapPin className="h-5 w-5 text-[#004976] mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">
                        <strong>Singapore:</strong> 6-7 of 20 Dubai-based Asian/Indian family office clients (~$50m avg AUM) at one advisory firm have initiated relocation; 3 executing immediate transfers. Multiple Singapore firms confirm &apos;tons&apos; of portfolio shifts underway.
                      </p>
                    </div>

                    <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                      <Landmark className="h-5 w-5 text-[#004976] mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">
                        <strong>Gulf SWFs:</strong> 3 states in confirmed internal review of <strong className="text-xl">~$5tn</strong> in global deployments - pledge reversals, divestments, sponsorship re-evaluations in scope (Reuters). S&amp;P estimates <strong>$307bn</strong> potential Gulf bank deposit flight risk.
                      </p>
                    </div>

                    <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                      <Building2 className="h-5 w-5 text-[#004976] mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">
                        <strong>Gulf RE pause:</strong> GCC inward capital flows hit <strong>9.6% of collective GDP</strong> pre-war - a record (BNP Paribas). Now paused. Dubai DFM Index down <strong className="text-red-600">-16%</strong> in first month.
                      </p>
                    </div>

                    <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                      <Globe className="h-5 w-5 text-[#004976] mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">
                        <strong>Turkey IFC:</strong> 40+ Asia and Gulf firms in active relocation discussions. IFC on track to double to <strong>40,000 workers</strong> by year-end. Incentives: 75% corporate tax deduction, staff income-tax relief up to 80%.
                      </p>
                    </div>

                    <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                      <Users className="h-5 w-5 text-[#004976] mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">
                        <strong>Family office deal-making:</strong> Down <strong className="text-2xl text-red-600">25%</strong> month-over-month in March 2026. JP Morgan: 64% cited geopolitics as top risk pre-war; 72% held zero gold.
                      </p>
                    </div>
                  </div>

                  {/* GP Takeaway */}
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Briefcase className="h-6 w-6 text-emerald-700" />
                      <h4 className="font-bold text-emerald-800 text-lg">GP / VC / PC: What fund managers must do</h4>
                    </div>
                    <ul className="space-y-4 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                        <div>
                          <p><strong>Map your Gulf LP base: called / committed-uncalled / pledged.</strong></p>
                          <p className="text-sm text-gray-600 mt-1">Committed-uncalled is your risk. Do this before any other action.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                        <div>
                          <p><strong>Call Gulf LPs in the next 30 days - before they call you.</strong></p>
                          <p className="text-sm text-gray-600 mt-1">Ask: &apos;What is your review timeline? Where can we be flexible?&apos; GPs who call first retain more commitments.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                        <div>
                          <p><strong>Reposition your fund structure inside the flow of capital.</strong></p>
                          <p className="text-sm text-gray-600 mt-1">Singapore-domiciled vehicles, Shariah-compliant structures, IFC-registered management entities are all attracting capital right now.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                        <div>
                          <p><strong>Turkey IFC is a real option for GPs needing a Gulf-adjacent hub.</strong></p>
                          <p className="text-sm text-gray-600 mt-1">10-year corporate tax exemption, Muslim-majority regulatory culture, NATO security, government actively co-structuring.</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* LP Takeaway */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Wallet className="h-6 w-6 text-amber-700" />
                      <h4 className="font-bold text-amber-800 text-lg">LP: What allocators must do</h4>
                    </div>
                    <ul className="space-y-4 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                        <div>
                          <p><strong>If Gulf-based: engage your GPs openly on your internal review timeline.</strong></p>
                          <p className="text-sm text-gray-600 mt-1">GPs are extending close schedules for LPs who are transparent. The ones enforcing capital calls are reacting to silence.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                        <div>
                          <p><strong>If non-Gulf LP: probe GP Gulf LP concentration explicitly.</strong></p>
                          <p className="text-sm text-gray-600 mt-1">Ask: &apos;What is your LP geographic concentration? What is your committed-vs-pledged capital position today?&apos;</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                        <div>
                          <p><strong>Evaluate Singapore, Turkey, and Oman as structural components of your strategy.</strong></p>
                          <p className="text-sm text-gray-600 mt-1">These are the new architecture for Gulf-connected private capital, not temporary safe havens.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Section 02 */}
                <section id="section-02" className="mb-12">
                  <h2 className="text-2xl font-bold text-[#004976] mb-2 flex items-center gap-3">
                    <TrendingUp className="h-7 w-7" />
                    02 FUNDRAISING IN A DISPLACED CAPITAL ENVIRONMENT
                  </h2>
                  <p className="text-gray-600 mb-6">Why mass LP outreach has stopped working - and what precision fundraising looks like right now.</p>

                  <div className="bg-[#004976] text-white rounded-xl p-5 mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-white/20 rounded px-2 py-1 text-sm font-bold">M2</span>
                      <span className="font-semibold">MEGA TREND</span>
                    </div>
                    <p>Successful fundraising requires sitting in the flow of capital - addressing geographic requirements, liquidity needs, and hyper-focused positioning</p>
                  </div>

                  <h3 className="font-bold text-[#004976] mb-4 border-b pb-2">TREND: What this means for private markets</h3>

                  <div className="space-y-4 mb-8 text-gray-700">
                    <p>
                      <strong>Flight-to-quality is compressing capital to the top.</strong> The top 6 Asia-Pacific funds targeting closes above $1bn have secured <strong className="text-xl">~$25bn</strong> in commitments. The remaining 54 are competing for what is left.
                    </p>
                    <p>
                      LPs are not pausing because they have no capital. They are pausing because the traditional fundraising conversation - returns, team, thesis - is <strong>insufficient</strong> in a world where LP mandates are being rewritten in real time.
                    </p>
                    <p className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                      <strong>Capital call risk is now a primary LP concern.</strong> After watching Blackstone, Blue Owl, and BlackRock all gate or restrict redemptions within weeks of each other, LPs are explicitly building liquidity buffers before committing.
                    </p>
                  </div>

                  <h3 className="font-bold text-[#004976] mb-4 border-b pb-2 flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    EVIDENCE: Facts, data, and named sources
                  </h3>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                      <TrendingUp className="h-5 w-5 text-[#004976] mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">
                        <strong>Asia PE fundraising:</strong> ~60 funds targeting closes above $1bn; top 6 have secured ~$25bn. 2025 was the <strong>worst Asia PE fundraising year in a decade</strong> (Bain, PitchBook).
                      </p>
                    </div>

                    <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                      <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">
                        <strong>Gulf LP pledges at risk:</strong> Saudi Arabia, UAE, and Qatar had collectively pledged hundreds of billions in new US investments post Trump&apos;s 2025 visit. Those pledges are <strong>formally under review</strong> (FT, Reuters).
                      </p>
                    </div>

                    <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                      <DollarSign className="h-5 w-5 text-[#004976] mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">
                        <strong>Deloitte:</strong> Asia PE dry powder at <strong className="text-xl">~$240bn</strong> - capital committed but not deployed.
                      </p>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="text-gray-700 italic">
                        <strong>KPMG Asia PE head:</strong> Iran war is &apos;not unlike the tariff situation early last year - causing people to pause, slow down, and just wait.&apos;
                      </p>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="text-gray-700 italic">
                        <strong>PitchBook:</strong> &apos;Smaller or less differentiated private equity fund managers face longer timelines and more difficult conditions.&apos; Capital is concentrated at the top.
                      </p>
                    </div>
                  </div>

                  {/* GP Takeaway */}
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Briefcase className="h-6 w-6 text-emerald-700" />
                      <h4 className="font-bold text-emerald-800 text-lg">GP / VC / PC: What fund managers must do</h4>
                    </div>
                    <ul className="space-y-4 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                        <div>
                          <p><strong>Mass LP outreach is the wrong tool.</strong></p>
                          <p className="text-sm text-gray-600 mt-1">Precision targeting of 20 LPs who match the current moment outperforms broad outreach to 200 every time.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                        <div>
                          <p><strong>Restructure your LP offer for the current liquidity reality.</strong></p>
                          <p className="text-sm text-gray-600 mt-1">Address liquidity directly: co-invest rights, shorter fund duration, smaller initial close with re-up, or explicit secondary market facilitation.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                        <div>
                          <p><strong>If mid-market Asia GP: differentiate on structure, not track record.</strong></p>
                          <p className="text-sm text-gray-600 mt-1">You need a specific answer to: &apos;Why you?&apos; - geography specificity, sector concentration, fee structure, or co-invest economics.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                        <div>
                          <p><strong>For AI infrastructure GPs: model Gulf LP gap explicitly.</strong></p>
                          <p className="text-sm text-gray-600 mt-1">Show fund viability at 100%, 70%, and 50% Gulf LP participation. This demonstrates institutional-grade risk management.</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* LP Takeaway */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Wallet className="h-6 w-6 text-amber-700" />
                      <h4 className="font-bold text-amber-800 text-lg">LP: What allocators must do</h4>
                    </div>
                    <ul className="space-y-4 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                        <div>
                          <p><strong>Concentrate behind fewer, higher-conviction managers - not diversify across more.</strong></p>
                          <p className="text-sm text-gray-600 mt-1">The instinct to diversify broadly in an uncertain environment is the opposite of what the data supports.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                        <div>
                          <p><strong>Ask every GP: what is your Gulf LP concentration?</strong></p>
                          <p className="text-sm text-gray-600 mt-1">If a GP cannot answer this, the deployment risk is undisclosed. You are entitled to this information.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                        <div>
                          <p><strong>For family office LPs: establish a formal 90-day GP communication calendar.</strong></p>
                          <p className="text-sm text-gray-600 mt-1">A 5-10 year PE commitment does not change because of a 6-month geopolitical event. Stay informed; do not exit sound positions into noise.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Section 03 */}
                <section id="section-03" className="mb-12">
                  <h2 className="text-2xl font-bold text-[#004976] mb-2 flex items-center gap-3">
                    <PieChart className="h-7 w-7" />
                    03 PRIVATE MARKET ALLOCATION SHIFTS
                  </h2>
                  <p className="text-gray-600 mb-6">Which sectors are receiving capital, which are losing it, and what it means for portfolio strategy.</p>

                  <div className="bg-[#004976] text-white rounded-xl p-5 mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-white/20 rounded px-2 py-1 text-sm font-bold">M3</span>
                      <span className="font-semibold">MEGA TREND</span>
                    </div>
                    <p>Successful allocation means finding managers built for the new reality - and concentrating behind them</p>
                  </div>

                  <h3 className="font-bold text-[#004976] mb-4 border-b pb-2">TREND: What this means for private markets</h3>

                  <div className="space-y-4 mb-8 text-gray-700">
                    <p>
                      <strong>The war has created a K-shaped private market:</strong> sectors aligned with the conflict&apos;s consequences (defense, energy, infrastructure) are attracting structural capital inflows. Sectors exposed to the conflict&apos;s costs (Gulf RE, energy-intensive European industrials) are experiencing capital exits.
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2">
                          <TrendingUp className="h-4 w-4" />
                          Sectors with Tailwinds
                        </h4>
                        <ul className="text-sm space-y-1 text-green-900">
                          <li>Defense and NATO supply chain</li>
                          <li>US energy and LNG</li>
                          <li>Infrastructure</li>
                          <li>Energy transition</li>
                          <li>Post-war reconstruction</li>
                        </ul>
                      </div>
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4" />
                          Sectors with Headwinds
                        </h4>
                        <ul className="text-sm space-y-1 text-red-900">
                          <li>Gulf real estate</li>
                          <li>Energy-intensive European industrials</li>
                          <li>Consumer-facing leveraged businesses</li>
                          <li>Long-duration Gulf PE</li>
                        </ul>
                      </div>
                    </div>

                    <p className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                      <strong>Private credit stress is not cyclical - it is structural.</strong> The redemption gate cascade across Blackstone, Blue Owl, BlackRock, Morgan Stanley, and Cliffwater in Q1 2026 is not a coincidence.
                    </p>
                  </div>

                  <h3 className="font-bold text-[#004976] mb-4 border-b pb-2 flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    EVIDENCE: Private Credit Gate Cascade
                  </h3>

                  <div className="overflow-x-auto mb-8">
                    <table className="w-full text-sm border rounded-lg overflow-hidden">
                      <thead className="bg-[#004976] text-white">
                        <tr>
                          <th className="text-left p-3">Platform</th>
                          <th className="text-left p-3">Vehicle Size</th>
                          <th className="text-left p-3">Redemption Requests</th>
                          <th className="text-left p-3">Action Taken</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        <tr className="bg-white">
                          <td className="p-3 font-medium">Blackstone BCRED</td>
                          <td className="p-3">$82bn</td>
                          <td className="p-3"><strong className="text-red-600">7.9%</strong> (~$3.8bn)</td>
                          <td className="p-3">Met 100% via tender + firm capital</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="p-3 font-medium">Blue Owl</td>
                          <td className="p-3">-</td>
                          <td className="p-3">41% and 22% on BDCs</td>
                          <td className="p-3">Honored at 5% quarterly cap</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="p-3 font-medium">BlackRock HLEND</td>
                          <td className="p-3">$26bn</td>
                          <td className="p-3">$1.2bn requested</td>
                          <td className="p-3">5% cap enforced ($620m paid)</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="p-3 font-medium">Morgan Stanley</td>
                          <td className="p-3">-</td>
                          <td className="p-3">5-14% caps hit</td>
                          <td className="p-3">Gates enforced</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="p-3 font-medium">Cliffwater</td>
                          <td className="p-3">-</td>
                          <td className="p-3">5-14% caps hit</td>
                          <td className="p-3">Gates enforced</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
                    <p className="text-gray-700 italic">
                      <strong>Bank of England FPC (March 2026):</strong> War &apos;will interact with vulnerabilities previously identified in sovereign debt markets, risky asset valuations, and risky credit markets, notably in private credit.&apos;
                    </p>
                  </div>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                      <Shield className="h-5 w-5 text-[#004976] mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">
                        <strong>PitchBook (defense):</strong> PE opportunity in missile component manufacturers and supply chains. Gulf states reassessing own defense needs.
                      </p>
                    </div>

                    <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                      <Building2 className="h-5 w-5 text-[#004976] mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">
                        <strong>Houlihan Lokey:</strong> &apos;Construction companies will print money once combat ends&apos; - post-war reconstruction in Gulf, Europe, and US infrastructure.
                      </p>
                    </div>

                    <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                      <Factory className="h-5 w-5 text-[#004976] mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">
                        <strong>EU energy-intensive industrials:</strong> <strong className="text-xl text-red-600">30%+</strong> energy surcharges documented across chemicals, steel, and logistics.
                      </p>
                    </div>
                  </div>

                  {/* GP Takeaway */}
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Briefcase className="h-6 w-6 text-emerald-700" />
                      <h4 className="font-bold text-emerald-800 text-lg">GP / VC / PC: What fund managers must do</h4>
                    </div>
                    <ul className="space-y-4 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                        <div>
                          <p><strong>Be explicit about which portfolio sectors are tailwinds vs. headwinds.</strong></p>
                          <p className="text-sm text-gray-600 mt-1">GPs who acknowledge the K-shaped dynamic directly build more LP trust than those presenting uniform optimism.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                        <div>
                          <p><strong>For private credit GPs: written communication on gate mechanics before next quarterly window.</strong></p>
                          <p className="text-sm text-gray-600 mt-1">Proactive communication is defensible. A surprise gate is a legal and reputational event.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                        <div>
                          <p><strong>For European PE: updated energy cost model at board level now.</strong></p>
                          <p className="text-sm text-gray-600 mt-1">Model $80, $100, and $120 Brent against EBITDA. 30%+ energy surcharges are current reality.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                        <div>
                          <p><strong>For defense and US energy: accelerate follow-on capital and build-out plans.</strong></p>
                          <p className="text-sm text-gray-600 mt-1">NATO spend is contractual. Plans that would be 24 months should be evaluated on 12 months.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">5</span>
                        <div>
                          <p><strong>Identify post-war reconstruction as a positioning play - now, not after ceasefire.</strong></p>
                          <p className="text-sm text-gray-600 mt-1">Managers positioned before the conflict ends will set the terms. Those who arrive after will pay a premium.</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* LP Takeaway */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Wallet className="h-6 w-6 text-amber-700" />
                      <h4 className="font-bold text-amber-800 text-lg">LP: What allocators must do</h4>
                    </div>
                    <ul className="space-y-4 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                        <div>
                          <p><strong>Audit real assets, infrastructure, and energy allocation against your policy target.</strong></p>
                          <p className="text-sm text-gray-600 mt-1">If your policy calls for 10-15% inflation protection and you are below that, this is the moment that confirms the exposure.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                        <div>
                          <p><strong>Stress-test private credit with layered scenarios before next quarterly window.</strong></p>
                          <p className="text-sm text-gray-600 mt-1">Ask your GP: gate mechanics, trigger conditions, and whether you have liquidity needs from this vehicle in the next 12 months.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                        <div>
                          <p><strong>Evaluate defense, US energy, and African LNG as deliberate additions.</strong></p>
                          <p className="text-sm text-gray-600 mt-1">NATO defense spend is contractual. US LNG filling structural gap. African LNG is a 10-year buildout.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                        <div>
                          <p><strong>Do not exit sound long-duration positions into geopolitical noise.</strong></p>
                          <p className="text-sm text-gray-600 mt-1">A 5-10 year PE commitment that was well-underwritten before the war remains well-underwritten.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Section 04 */}
                <section id="section-04" className="mb-12">
                  <h2 className="text-2xl font-bold text-[#004976] mb-2 flex items-center gap-3">
                    <Target className="h-7 w-7" />
                    04 THE INFRASTRUCTURE FOR INTELLIGENT FUNDRAISING
                  </h2>
                  <p className="text-gray-600 mb-6">Why the old tools do not work - and what precision looks like in a world of geopolitical capital displacement.</p>

                  <div className="bg-[#004976] text-white rounded-xl p-5 mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-white/20 rounded px-2 py-1 text-sm font-bold">M4</span>
                      <span className="font-semibold">MEGA TREND</span>
                    </div>
                    <p>Mass outreach does not work. Precision does. AIx2 is the infrastructure for intelligent fundraising and allocation in a world that has shifted.</p>
                  </div>

                  <h3 className="font-bold text-[#004976] mb-4 border-b pb-2">TREND: What this means for private markets</h3>

                  <div className="space-y-4 mb-8 text-gray-700">
                    <p>
                      <strong>The fundraising environment rewards precision over volume.</strong> The GPs closing funds are not the ones with the broadest LP lists - they are the ones who know exactly which LP is currently in motion.
                    </p>
                    <p>
                      The data exists. What is missing is the <strong>intelligence layer</strong>: the ability to match GPs and LPs not on static criteria (AUM, vintage, sector) but on live, dynamic criteria - LP mandate shifts, SWF review timelines, family office domicile changes.
                    </p>
                    <p className="bg-blue-50 border-l-4 border-[#004976] p-4 rounded-r-lg">
                      <strong>The competitive advantage in private capital markets has shifted from relationship breadth to intelligence precision.</strong>
                    </p>
                  </div>

                  <h3 className="font-bold text-[#004976] mb-4 border-b pb-2 flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    EVIDENCE: The Intelligence Gap
                  </h3>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                      <MapPin className="h-5 w-5 text-[#004976] mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">
                        Capital is moving to <strong>specific destinations</strong>: Singapore, Turkey, Oman, US. Not broadly. GPs who knew this ahead of the move were positioned to capture it.
                      </p>
                    </div>

                    <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                      <TrendingUp className="h-5 w-5 text-[#004976] mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">
                        Top 6 Asia PE funds secured <strong>~$25bn</strong> while remaining 54 compete for what is left. The difference is <strong>not returns</strong> - it is brand, structure, and LP relationship precision.
                      </p>
                    </div>

                    <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                      <Users className="h-5 w-5 text-[#004976] mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">
                        <strong>72%</strong> of family offices held zero gold. <strong>64%</strong> cited geopolitics as top risk - yet most had no portfolio structure to address it. <strong>The data existed. The intelligence layer to act on it did not.</strong>
                      </p>
                    </div>

                    <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                      <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">
                        Private credit gate cascade: 5 major platforms gated within weeks. LPs who had mapped their exposure across managers before the event managed the window. Those who had not were reactive.
                      </p>
                    </div>
                  </div>

                  {/* GP Takeaway */}
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Briefcase className="h-6 w-6 text-emerald-700" />
                      <h4 className="font-bold text-emerald-800 text-lg">GP / VC / PC: What fund managers must do</h4>
                    </div>
                    <ul className="space-y-4 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                        <div>
                          <p><strong>The edge is knowing which LPs are in motion before they announce it.</strong></p>
                          <p className="text-sm text-gray-600 mt-1">A family office that has initiated domicile transfer is, within 90 days, an LP actively evaluating new fund commitments.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                        <div>
                          <p><strong>Build your intelligence layer for LP mapping - not your contact list.</strong></p>
                          <p className="text-sm text-gray-600 mt-1">The question is not &apos;who is an LP?&apos; It is &apos;which LP&apos;s mandate has just changed?&apos; AIx2 answers these questions at scale.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                        <div>
                          <p><strong>Position AIx2 as infrastructure, not outreach.</strong></p>
                          <p className="text-sm text-gray-600 mt-1">Send the right 20 emails, to the right 20 LPs, at the moment when those LPs are in motion.</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* LP Takeaway */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Wallet className="h-6 w-6 text-amber-700" />
                      <h4 className="font-bold text-amber-800 text-lg">LP: What allocators must do</h4>
                    </div>
                    <ul className="space-y-4 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                        <div>
                          <p><strong>The allocation edge belongs to LPs who can identify war-adapted managers before consensus.</strong></p>
                          <p className="text-sm text-gray-600 mt-1">Managers with Shariah-compliant structures, Singapore or Turkey domiciles, defense and energy expertise are the right managers for this moment.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                        <div>
                          <p><strong>Static manager databases are insufficient.</strong></p>
                          <p className="text-sm text-gray-600 mt-1">Manager selection requires dynamic criteria - mandate alignment to the current environment, not historical returns.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                        <div>
                          <p><strong>AIx2 enables LPs to match manager mandates to live LP requirements.</strong></p>
                          <p className="text-sm text-gray-600 mt-1">As mandates shift toward inflation protection and Shariah compliance, the managers purpose-built for that are identifiable in advance.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Action Framework */}
                <section id="action-framework" className="mb-12">
                  <h2 className="text-2xl font-bold text-[#004976] mb-6 flex items-center gap-3">
                    <CheckCircle2 className="h-7 w-7" />
                    05 CONSOLIDATED ACTION FRAMEWORK
                  </h2>
                  <p className="text-gray-600 mb-8">Specific to private markets. Anchored to documented evidence above. Numbered for tracking.</p>

                  {/* GP Actions */}
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-8">
                    <h3 className="font-bold text-emerald-800 text-xl mb-6 flex items-center gap-2">
                      <Briefcase className="h-6 w-6" />
                      FOR GENERAL PARTNERS / VCs / PRIVATE CREDIT MANAGERS
                    </h3>

                    <h4 className="font-bold text-emerald-700 mb-4 border-b border-emerald-300 pb-2">Immediate - Gulf LP and Fund Structure</h4>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start gap-3">
                        <span className="bg-emerald-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                        <div>
                          <p className="font-semibold">Map Gulf LP exposure: called / committed-uncalled / pledged</p>
                          <p className="text-sm text-gray-600 mt-1">Committed-uncalled is your risk. Pledged-but-unsigned is the highest risk. Do this before any other action.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="bg-emerald-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                        <div>
                          <p className="font-semibold">Call Gulf LPs within 30 days</p>
                          <p className="text-sm text-gray-600 mt-1">Ask: &apos;What is your review timeline? Where can we be flexible?&apos; Offer accommodations: extended call schedules, smaller initial closes, co-invest rights.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="bg-emerald-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                        <div>
                          <p className="font-semibold">Have fund counsel review MAC clauses against documented Gulf LP pressures now</p>
                          <p className="text-sm text-gray-600 mt-1">Qatar&apos;s Ras Laffan force majeure is documented. Saudi refinery strikes are documented. Know whether a Gulf LP could invoke a MAC clause before they do.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="bg-emerald-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                        <div>
                          <p className="font-semibold">Extend fund close timelines 6-9 months</p>
                          <p className="text-sm text-gray-600 mt-1">Pre-negotiate with anchor LPs before being asked. A managed extension is a delay. Being surprised into one is a structural problem.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="bg-emerald-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">5</span>
                        <div>
                          <p className="font-semibold">Evaluate Singapore, Turkey IFC, or Oman as fund domicile or management hub</p>
                          <p className="text-sm text-gray-600 mt-1">Turkey IFC: 10-year corporate tax exemption, expanding to 75% national deduction. Singapore: proven Islamic finance infrastructure.</p>
                        </div>
                      </div>
                    </div>

                    <h4 className="font-bold text-emerald-700 mb-4 border-b border-emerald-300 pb-2">Fundraising Precision</h4>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start gap-3">
                        <span className="bg-emerald-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">6</span>
                        <div>
                          <p className="font-semibold">Diversify LP base toward Asia Pacific actively</p>
                          <p className="text-sm text-gray-600 mt-1">Japan, Singapore, South Korea, Taiwan LPs are in motion. Asia PE dry powder ~$240bn. Need a specific answer to &apos;Why you?&apos;</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="bg-emerald-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">7</span>
                        <div>
                          <p className="font-semibold">For mid-market Asia GPs: differentiate on structure, not track record</p>
                          <p className="text-sm text-gray-600 mt-1">Top 6 secured ~$25bn. Remaining 54 compete for what is left. Offer co-investment rights, above-market GP commitment, fee structures with deferred economics.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="bg-emerald-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">8</span>
                        <div>
                          <p className="font-semibold">For AI infrastructure GPs: model Gulf LP gap explicitly in LP materials</p>
                          <p className="text-sm text-gray-600 mt-1">Show fund viability at 100%, 70%, and 50% of projected Gulf LP participation.</p>
                        </div>
                      </div>
                    </div>

                    <h4 className="font-bold text-emerald-700 mb-4 border-b border-emerald-300 pb-2">Portfolio Management</h4>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <span className="bg-emerald-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">9</span>
                        <div>
                          <p className="font-semibold">For every European energy-intensive portfolio company: updated energy cost model at board level now</p>
                          <p className="text-sm text-gray-600 mt-1">30%+ energy surcharges are current reality in chemicals, steel, logistics. Model $80, $100, $120 Brent against EBITDA.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="bg-emerald-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">10</span>
                        <div>
                          <p className="font-semibold">Extend exit timelines for European energy-intensive holdings by 12-18 months</p>
                          <p className="text-sm text-gray-600 mt-1">Buyers stress-testing energy costs will compress multiples. Extend, operate through the shock, relaunch when margins stabilize.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="bg-emerald-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">11</span>
                        <div>
                          <p className="font-semibold">For defense and US energy portfolio companies: accelerate follow-on capital</p>
                          <p className="text-sm text-gray-600 mt-1">NATO spend is contractual. US LNG filling structural supply gap. 24-month plans should be evaluated on 12-month timelines.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="bg-emerald-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">12</span>
                        <div>
                          <p className="font-semibold">For private credit GPs: proactive written communication on gate mechanics</p>
                          <p className="text-sm text-gray-600 mt-1">Blackstone, Blue Owl, BlackRock, Morgan Stanley, Cliffwater are all documented precedents. Proactive communication is defensible.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* LP Actions */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                    <h3 className="font-bold text-amber-800 text-xl mb-6 flex items-center gap-2">
                      <Wallet className="h-6 w-6" />
                      FOR LIMITED PARTNERS - FAMILY OFFICES, PENSIONS, ENDOWMENTS
                    </h3>

                    <h4 className="font-bold text-amber-700 mb-4 border-b border-amber-300 pb-2">Portfolio Construction</h4>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start gap-3">
                        <span className="bg-amber-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                        <div>
                          <p className="font-semibold">Audit real assets, infrastructure, and energy allocation against stated policy target - today</p>
                          <p className="text-sm text-gray-600 mt-1">Stocks, bonds, and gold fell simultaneously in peak war weeks. Goldman $300T proxy down ~5%. If below 10-15% inflation protection, you are structurally undefended.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="bg-amber-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                        <div>
                          <p className="font-semibold">Apply Goldman&apos;s thirds framework as a diagnostic - do not sell, recalibrate sizing</p>
                          <p className="text-sm text-gray-600 mt-1">60%+ in innovation-thematic assets and under 10% in inflation protection is a structural imbalance confirmed by this crisis.</p>
                        </div>
                      </div>
                    </div>

                    <h4 className="font-bold text-amber-700 mb-4 border-b border-amber-300 pb-2">Private Market Allocations</h4>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start gap-3">
                        <span className="bg-amber-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                        <div>
                          <p className="font-semibold">Stress-test private credit with layered geopolitical and energy-cost scenarios</p>
                          <p className="text-sm text-gray-600 mt-1">Ask your GP: gate mechanics, trigger conditions, and whether you have liquidity needs expected from this vehicle in the next 12 months.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="bg-amber-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                        <div>
                          <p className="font-semibold">Do not add Gulf real estate near-term. Define re-entry criteria in writing now.</p>
                          <p className="text-sm text-gray-600 mt-1">9.6% of GCC GDP was flowing into Gulf RE annually - now paused. Dubai DFM -16%. Document re-entry criteria while calm.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="bg-amber-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">5</span>
                        <div>
                          <p className="font-semibold">Evaluate defense, US energy, and African LNG as deliberate mandate additions</p>
                          <p className="text-sm text-gray-600 mt-1">NATO defense spend contractual. US LNG filling structural gap. African LNG (Mozambique, Senegal, Tanzania) is a 10-year buildout.</p>
                        </div>
                      </div>
                    </div>

                    <h4 className="font-bold text-amber-700 mb-4 border-b border-amber-300 pb-2">GP Relationship and Due Diligence</h4>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <span className="bg-amber-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">6</span>
                        <div>
                          <p className="font-semibold">Ask every GP: what is your Gulf LP geographic concentration and committed vs. pledged capital position?</p>
                          <p className="text-sm text-gray-600 mt-1">If a GP has 30-40% Gulf LP base and cannot answer precisely, there is an undisclosed deployment risk.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="bg-amber-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">7</span>
                        <div>
                          <p className="font-semibold">If Gulf-based: engage your GPs openly on review timeline before force majeure becomes the conversation</p>
                          <p className="text-sm text-gray-600 mt-1">GPs are extending timelines and restructuring call schedules for LPs who are transparent.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="bg-amber-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">8</span>
                        <div>
                          <p className="font-semibold">For family office LPs: set a formal 90-day communication calendar with your top 3 GPs</p>
                          <p className="text-sm text-gray-600 mt-1">Family office deal-making down 25% in March. Risk: making reactive decisions on sound long-duration PE commitments.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="bg-amber-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">9</span>
                        <div>
                          <p className="font-semibold">Evaluate whether your GP relationships are built for the new geography</p>
                          <p className="text-sm text-gray-600 mt-1">A GP whose LP base is Gulf-concentrated, fund domiciled in a jurisdiction losing capital, and sector focus misaligned is not the right manager for the next 5 years.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Sources */}
                <section id="sources" className="mb-8">
                  <h2 className="text-xl font-bold text-[#004976] mb-4 flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Sources
                  </h2>
                  <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-600">
                    <p>
                      Reuters, FT, PitchBook, Goldman Sachs Research, Bank of England FPC, Atlantic Council, Bruegel, Harvard (Furman), KPMG, Deloitte, Bain, Houlihan Lokey, Pinebridge Investments, Wells Fargo Investment Institute, JP Morgan Family Office Survey, Walton Global, DropSite News, CNBC, The National, Middle East Eye, HBS Harbus, S&amp;P, BNP Paribas, AFIRE, Charles Schwab. April 2026.
                    </p>
                  </div>
                </section>

                {/* CTA */}
                <div className="bg-gradient-to-r from-[#004976] to-[#006ba8] rounded-xl p-8 text-white text-center">
                  <h3 className="text-2xl font-bold mb-4">Ready to Navigate the New Capital Landscape?</h3>
                  <p className="mb-6 text-white/90">
                    AIx2 provides the intelligence infrastructure for precision fundraising and allocation in a world of geopolitical capital displacement.
                  </p>
                  <Link href="https://meetings.hubspot.com/aix2/aix2-team" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-white text-[#004976] hover:bg-gray-100 rounded-full px-8 py-3 font-semibold">
                      Book a Demo
                    </Button>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </article>
      </main>

      <footer className="bg-[#004976] text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <Image
                src="/images/aix2-logo-white.png"
                alt="AIx2 Logo"
                width={120}
                height={30}
                className="h-8 w-auto mb-4"
              />
              <p className="text-white/70 text-sm">Tailored Signal in Private Markets</p>
            </div>
            <div className="flex gap-8 text-sm">
              <Link href="/privacy" className="text-white/70 hover:text-white">Privacy Policy</Link>
              <Link href="/terms" className="text-white/70 hover:text-white">Terms of Service</Link>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/50 text-sm">
            &copy; {new Date().getFullYear()} AIx2. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
