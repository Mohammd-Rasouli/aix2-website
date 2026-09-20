import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function Fundraising2025Survey() {
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
            <Link href="/blog" className="text-[#004976] hover:text-[#003557] font-medium font-bold underline">
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

      <main className="flex-1 py-12 md:py-20 bg-gray-50">
        <div className="container">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#004976] hover:text-[#003557] mb-8 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <article className="max-w-5xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-lg">
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-[#004976] mb-4 leading-tight">
                AIx2 GP Fundraising Survey — Infographic Pack
              </h1>
              <p className="text-lg text-gray-600">Revised Benchmarks, October 2025</p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600">
                <span>
                  <strong>Audience:</strong> LPs & GPs in our network
                </span>
                <span>
                  <strong>Survey Size:</strong> 124 GPs, 22 LPs, 4 Placement Agents
                </span>
                <span>
                  <strong>Regions:</strong> North America & Europe
                </span>
              </div>
              <div className="mt-6 bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
                <p className="text-sm text-amber-900 font-medium">
                  <strong>Disclaimer:</strong> Values shown per GP outreach cohort. A full fund typically combines
                  several cohorts to achieve its final close.
                </p>
              </div>
            </div>

            <div className="space-y-12 text-gray-800">
              {/* Headline KPIs */}
              <section className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border-2 border-[#004976]">
                <h2 className="text-2xl font-bold text-[#003557] mb-6">1. Headline KPIs (Hero Panel)</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow">
                    <div className="text-4xl font-bold text-[#004976] mb-2">~850</div>
                    <div className="text-sm text-gray-600">Total LPs identified (median per GP)</div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow">
                    <div className="text-4xl font-bold text-[#004976] mb-2">~654</div>
                    <div className="text-sm text-gray-600">Contacted</div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow">
                    <div className="text-4xl font-bold text-[#004976] mb-2">~99</div>
                    <div className="text-sm text-gray-600">Opened email (≈15% open rate)</div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow">
                    <div className="text-4xl font-bold text-[#004976] mb-2">~12</div>
                    <div className="text-sm text-gray-600">First meetings (≈1.8% of contacted)</div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow">
                    <div className="text-4xl font-bold text-[#004976] mb-2">~3</div>
                    <div className="text-sm text-gray-600">Committed LPs</div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow">
                    <div className="text-4xl font-bold text-[#004976] mb-2">0.35%</div>
                    <div className="text-sm text-gray-600">Overall conversion (identified → committed)</div>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded">
                    <strong className="text-yellow-800">Avoidable outreach with better pre-DD:</strong> ~40–65% (median
                    ≈ 45%)
                  </div>
                  <div className="bg-blue-100 border-l-4 border-blue-500 p-4 rounded">
                    <strong className="text-blue-800">
                      Maximizing relevancy of strategic and human fit (Email → Meeting):
                    </strong>{" "}
                    4-8x relative
                  </div>
                  <div className="bg-green-100 border-l-4 border-green-500 p-4 rounded">
                    <strong className="text-green-800">A/B testing lift (Email → Meeting):</strong> up to 3× relative
                    (median ≈ 2×)
                  </div>
                </div>
              </section>

              {/* Pipeline Funnel */}
              <section>
                <h2 className="text-2xl font-bold text-[#003557] mb-6 border-l-4 border-[#004976] pl-4">
                  2. Pipeline Funnel (Where it breaks)
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-32 font-semibold text-gray-700">Identified</div>
                    <div className="flex-1 bg-[#004976] h-12 rounded flex items-center justify-between px-4 text-white font-bold">
                      <span>850</span>
                      <span className="text-sm">100%</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-32 font-semibold text-gray-700">Contacted</div>
                    <div
                      className="flex-1 bg-[#0066a1] h-12 rounded flex items-center justify-between px-4 text-white font-bold"
                      style={{ width: "77%" }}
                    >
                      <span>654</span>
                      <span className="text-sm">77%</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-32 font-semibold text-gray-700">Opened Email</div>
                    <div
                      className="flex-1 bg-[#3399cc] h-12 rounded flex items-center justify-between px-4 text-white font-bold"
                      style={{ width: "11.6%" }}
                    >
                      <span>99</span>
                      <span className="text-sm">15%</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-32 font-semibold text-gray-700">First Meetings</div>
                    <div
                      className="flex-1 bg-[#66b3d9] h-12 rounded flex items-center justify-between px-4 text-white font-bold"
                      style={{ width: "1.8%" }}
                    >
                      <span>12</span>
                      <span className="text-sm">12%</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-32 font-semibold text-gray-700">Committed</div>
                    <div
                      className="flex-1 bg-[#99cce6] h-12 rounded flex items-center justify-between px-4 text-gray-800 font-bold"
                      style={{ width: "0.35%" }}
                    >
                      <span>3</span>
                      <span className="text-sm">25%</span>
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-gray-700 bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <strong className="text-[#004976]">Insight:</strong> The sharpest drop occurs at{" "}
                  <em>email engagement</em> (contacted → opened). Personalization and LP mandate relevance remain the
                  primary differentiators.
                </p>
              </section>

              {/* Sourcing Mix */}
              <section>
                <h2 className="text-2xl font-bold text-[#003557] mb-6 border-l-4 border-[#004976] pl-4">
                  3. Sourcing Mix (Share of Committed LPs by Channel)
                </h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <div className="w-64 font-medium text-gray-700">Existing LP relationships</div>
                    <div className="flex-1 bg-[#004976] h-10 rounded flex items-center justify-between px-4 text-white font-semibold">
                      <span>52%</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-64 font-medium text-gray-700">Referrals & placement agents</div>
                    <div
                      className="flex-1 bg-[#0066a1] h-10 rounded flex items-center justify-between px-4 text-white font-semibold"
                      style={{ width: "35%" }}
                    >
                      <span>18%</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-64 font-medium text-gray-700">Conferences & events</div>
                    <div
                      className="flex-1 bg-[#3399cc] h-10 rounded flex items-center justify-between px-4 text-white font-semibold"
                      style={{ width: "27%" }}
                    >
                      <span>14%</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-64 font-medium text-gray-700">Cold outreach (email/LI/calls)</div>
                    <div
                      className="flex-1 bg-[#66b3d9] h-10 rounded flex items-center justify-between px-4 text-white font-semibold"
                      style={{ width: "21%" }}
                    >
                      <span>11%</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-64 font-medium text-gray-700">Other</div>
                    <div
                      className="flex-1 bg-[#99cce6] h-10 rounded flex items-center justify-between px-4 text-gray-800 font-semibold"
                      style={{ width: "10%" }}
                    >
                      <span>5%</span>
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-gray-700 bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <strong className="text-[#004976]">Insight:</strong> Cold outreach remains weak but still contributes
                  ~1/10th of commitments; pre-screened conferences outperform generic ones by <strong>2.3×</strong>.
                </p>
              </section>

              {/* Avoidable Outreach */}
              <section>
                <h2 className="text-2xl font-bold text-[#003557] mb-6 border-l-4 border-[#004976] pl-4">
                  4. Avoidable Outreach via Better Pre-DD
                </h2>
                <div className="bg-red-50 p-6 rounded-lg border-2 border-red-300 mb-6">
                  <div className="text-5xl font-bold text-red-700 mb-2">~40–65%</div>
                  <div className="text-lg text-gray-700 mb-1">(median ≈ 45%)</div>
                  <div className="text-lg text-gray-700">Share of outreach deemed avoidable post-hoc</div>
                </div>
                <div>
                  <h3 className="font-bold text-[#003557] mb-4">Top pre-DD steps reducing waste:</h3>
                  <ol className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-[#004976] text-white rounded-full flex items-center justify-center font-bold">
                        1
                      </span>
                      <div className="text-gray-700">
                        LP <strong>ticket sizing</strong> & pacing history
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-[#004976] text-white rounded-full flex items-center justify-center font-bold">
                        2
                      </span>
                      <div className="text-gray-700">
                        <strong>Mandate tagging</strong> (ESG, geography, ownership)
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-[#004976] text-white rounded-full flex items-center justify-center font-bold">
                        3
                      </span>
                      <div className="text-gray-700">
                        <strong>Re-up and check size patterns</strong>
                      </div>
                    </li>
                  </ol>
                </div>
              </section>

              {/* Cold Email Benchmarks */}
              <section>
                <h2 className="text-2xl font-bold text-[#003557] mb-6 border-l-4 border-[#004976] pl-4">
                  5. Cold Email Benchmarks & A/B Testing
                </h2>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200">
                    <div className="text-3xl font-bold text-[#004976] mb-2">30%</div>
                    <div className="text-sm text-gray-600">Open rate (median)</div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200">
                    <div className="text-3xl font-bold text-[#004976] mb-2">2.5%</div>
                    <div className="text-sm text-gray-600">Reply rate (median)</div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200">
                    <div className="text-3xl font-bold text-[#004976] mb-2">0.6%</div>
                    <div className="text-sm text-gray-600">Meeting set (median, for purely cold outreach)</div>
                  </div>
                </div>
                <div className="bg-green-50 p-6 rounded-lg border-2 border-green-300 mb-6">
                  <h3 className="font-bold text-green-800 mb-4">
                    With disciplined A/B testing (subject + first line + CTA):
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-green-700">+15%</div>
                      <div className="text-sm text-gray-700">Open rate lift</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-700">+25%</div>
                      <div className="text-sm text-gray-700">Reply rate lift</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-700">Up to +200%</div>
                      <div className="text-sm text-gray-700">Meeting set lift (3x relative)</div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-[#003557] mb-4">
                    Top 5 levers that move replies (average lift vs control):
                  </h3>
                  <ol className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-[#004976] text-white rounded-full flex items-center justify-center font-bold">
                        1
                      </span>
                      <div>
                        <strong>Mandate-fit mention</strong> → <span className="text-green-600 font-bold">1.8×</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-[#004976] text-white rounded-full flex items-center justify-center font-bold">
                        2
                      </span>
                      <div>
                        <strong>Named mutual</strong> → <span className="text-green-600 font-bold">1.6×</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-[#004976] text-white rounded-full flex items-center justify-center font-bold">
                        3
                      </span>
                      <div>
                        <strong>Peer-category social proof</strong> →{" "}
                        <span className="text-green-600 font-bold">1.4×</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-[#004976] text-white rounded-full flex items-center justify-center font-bold">
                        4
                      </span>
                      <div>
                        <strong>Evidence link (board or IPS reference)</strong> →{" "}
                        <span className="text-green-600 font-bold">1.3×</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-[#004976] text-white rounded-full flex items-center justify-center font-bold">
                        5
                      </span>
                      <div>
                        <strong>Concise subject (Fund × LP Theme)</strong> →{" "}
                        <span className="text-green-600 font-bold">1.2×</span>
                      </div>
                    </li>
                  </ol>
                </div>
              </section>

              {/* Warm Intros */}
              <section>
                <h2 className="text-2xl font-bold text-[#003557] mb-6 border-l-4 border-[#004976] pl-4">
                  6. Warm Intros: What Works & Why It Fails
                </h2>
                <div className="space-y-4 mb-6">
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                    <strong className="text-green-800">Warm intro (worked-with-both-sides introducer):</strong>{" "}
                    <span className="text-2xl font-bold text-green-700">2.2×</span> meeting rate
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                    <strong className="text-yellow-800">Warm intro (loose acquaintance):</strong>{" "}
                    <span className="text-2xl font-bold text-yellow-700">1.0×</span>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                    <strong className="text-red-800">Two-hop intros without context:</strong>{" "}
                    <span className="text-2xl font-bold text-red-700">0.5×</span> (worse than tailored cold email)
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-300">
                  <h3 className="font-bold text-[#003557] mb-4">Failure modes:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Generic intros with no LP mandate reference</li>
                    <li>Timing mismatch (outside LP pacing window)</li>
                    <li>Weak CTA (no time or context)</li>
                  </ul>
                  <h3 className="font-bold text-[#003557] mt-6 mb-4">Example of strong warm intro:</h3>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>
                      <strong>Why now:</strong> "Board minutes (Q2) show increased co-invest allocation."
                    </li>
                    <li>
                      <strong>Why fit:</strong> "Your mid-market buyout + AI-ops angle mirrors our realized exits."
                    </li>
                    <li>
                      <strong>Ask:</strong> "20-min next Wed/Thu; attaching 1-pager linked to your IPS."
                    </li>
                  </ol>
                </div>
              </section>

              {/* LP Relevancy */}
              <section>
                <h2 className="text-2xl font-bold text-[#003557] mb-6 border-l-4 border-[#004976] pl-4">
                  7. LP 'Relevancy' Determines Throughput
                </h2>
                <p className="mb-4 text-gray-700">
                  <strong>How we identify relevancy:</strong> Relevancy has two parts:
                </p>
                <ul className="mb-4 space-y-2 text-gray-700 list-disc list-inside">
                  <li>
                    <strong>Strategic fit</strong> — how well the LP's mandate aligns with the GP's strategy.
                  </li>
                  <li>
                    <strong>Human fit</strong> — how credible or connected the sender is to the receiver.
                  </li>
                </ul>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-48 font-semibold text-gray-700">Score ≥ 80/100</div>
                    <div className="flex-1 bg-green-500 h-12 rounded flex items-center justify-between px-4 text-white font-bold">
                      <span>8% meeting rate</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-48 font-semibold text-gray-700">Score 60-79</div>
                    <div
                      className="flex-1 bg-yellow-500 h-12 rounded flex items-center justify-between px-4 text-white font-bold"
                      style={{ width: "44%" }}
                    >
                      <span>3.5% meeting rate</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-48 font-semibold text-gray-700">Score &lt;60</div>
                    <div
                      className="flex-1 bg-red-500 h-12 rounded flex items-center justify-between px-4 text-white font-bold"
                      style={{ width: "12.5%" }}
                    >
                      <span>1% meeting rate</span>
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-gray-700 bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <strong className="text-[#004976]">Observation:</strong> Over-contacting (&gt;600 LPs) correlates with{" "}
                  <em>lower</em> conversion due to poor targeting and list fatigue.
                </p>
              </section>

              {/* Tailored Attributes */}
              <section>
                <h2 className="text-2xl font-bold text-[#003557] mb-6 border-l-4 border-[#004976] pl-4">
                  8. Tailored Attributes — What GPs Prioritize
                </h2>
                <p className="mb-4 text-gray-700">
                  % of respondents marking each as <strong>Priority</strong>:
                </p>
                <div className="space-y-3">
                  {[
                    { label: "Sector/strategy alignment", value: 72 },
                    { label: "Ticket size match", value: 67 },
                    { label: "Capital patience / lockup tolerance", value: 53 },
                    { label: "Appetite for emerging managers", value: 47 },
                    { label: "Speed of decision-making", value: 39 },
                    { label: "Co-investment appetite", value: 34 },
                    { label: "Brand/reputational value", value: 29 },
                    { label: "LP diversification needs", value: 25 },
                    { label: "Geographic mandate", value: 21 },
                    { label: "Other", value: 7 },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="w-64 font-medium text-gray-700">{item.label}</div>
                      <div className="flex-1 bg-gray-200 h-8 rounded overflow-hidden">
                        <div
                          className="bg-[#004976] h-full flex items-center justify-end px-3 text-white font-semibold text-sm"
                          style={{ width: `${item.value}%` }}
                        >
                          {item.value}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-gray-700 bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <strong className="text-[#004976]">Insight:</strong> "Emerging-manager appetite" continues to
                  outperform brand value in predicting meeting likelihood.
                </p>
              </section>

              {/* Micro-Benchmarks */}
              <section>
                <h2 className="text-2xl font-bold text-[#003557] mb-6 border-l-4 border-[#004976] pl-4">
                  9. Micro-Benchmarks by Strategy
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
                    <h3 className="font-bold text-purple-800 mb-3">VC</h3>
                    <p className="text-gray-700">
                      Larger S1 lists, <em>lowest</em> close rate
                    </p>
                    <div className="text-3xl font-bold text-purple-700 mt-2">0.3–0.5%</div>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-300">
                    <h3 className="font-bold text-blue-800 mb-3">PE Buyout</h3>
                    <p className="text-gray-700">
                      Moderate S1, <em>higher</em> meeting rate
                    </p>
                    <div className="text-3xl font-bold text-blue-700 mt-2">7–9%</div>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg border-2 border-green-300">
                    <h3 className="font-bold text-green-800 mb-3">Private Credit</h3>
                    <p className="text-gray-700">Best cold reply when collateralization is explicit</p>
                    <div className="text-3xl font-bold text-green-700 mt-2">3–4%</div>
                  </div>
                </div>
              </section>

              {/* Timing & Cadence */}
              <section>
                <h2 className="text-2xl font-bold text-[#003557] mb-6 border-l-4 border-[#004976] pl-4">
                  10. Timing, Cadence, and Human Signals
                </h2>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <strong className="text-blue-800">Best first-send window:</strong> Tue–Thu,{" "}
                    <strong>08:00–10:00</strong> LP local
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <strong className="text-blue-800">Best follow-up delay:</strong> <strong>7–9</strong> business days
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <strong className="text-blue-800">Human relevance:</strong> LP-specific references (mandates, pacing
                    windows) improve replies by <strong className="text-green-600">+1.2×</strong>
                  </div>
                </div>
              </section>

              {/* Operating Targets */}
              <section>
                <h2 className="text-2xl font-bold text-[#003557] mb-6 border-l-4 border-[#004976] pl-4">
                  11. What Good Looks Like (Operating Targets)
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#004976] text-xl">✓</span>
                    <div className="text-gray-700">
                      Maintain <strong>300–400</strong> high-fit LPs in S1
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004976] text-xl">✓</span>
                    <div className="text-gray-700">
                      Require <strong>Relevancy ≥80</strong> before contacting
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004976] text-xl">✓</span>
                    <div className="text-gray-700">
                      A/B test every <strong>2 weeks</strong>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004976] text-xl">✓</span>
                    <div className="text-gray-700">
                      Use warm intros only with <strong>direct credibility</strong>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004976] text-xl">✓</span>
                    <div className="text-gray-700">Build LP dossiers (ticket, pacing, mandate, re-ups)</div>
                  </li>
                </ul>
              </section>

              {/* Data Sources */}
              <section className="bg-gray-100 p-6 rounded-lg border-2 border-gray-300">
                <h2 className="text-xl font-bold text-[#003557] mb-4">Data Sources & Methodology</h2>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>
                    <strong>Sample:</strong> 124 GPs and 22 LPs surveyed between July–September 2025
                  </p>
                  <p>
                    <strong>GP AUM range:</strong> $150M–$2B
                  </p>
                  <p>
                    <strong>LP AUM range:</strong> $1B–$50B
                  </p>
                  <p>
                    <strong>Regions:</strong> 67% North America, 25% Europe, 8% RoW
                  </p>
                  <p>
                    <strong>Fund Types:</strong> 46% PE Buyout, 31% VC, 23% Private Credit
                  </p>
                  <p>
                    <strong>Validation:</strong> Self-reported + AIx2 CRM anonymized pipeline analytics
                  </p>
                  <p>
                    <strong>Statistical Adjustment:</strong> Outlier-weighted averages (excluding top/bottom 10%)
                  </p>
                  <p className="mt-4 italic">
                    <strong>Note:</strong> Statistics reflect 2025 market realities—tight liquidity, longer diligence
                    cycles, and reduced cold outreach performance.
                  </p>
                </div>
              </section>
            </div>

            <div className="mt-12 text-center">
              <Link href="https://meetings.hubspot.com/aix2/aix2-team" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-[#004976] hover:bg-[#003557] text-white rounded-full px-8 py-4 text-lg font-semibold"
                >
                  Book Demo
                </Button>
              </Link>
            </div>
          </article>
        </div>
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
