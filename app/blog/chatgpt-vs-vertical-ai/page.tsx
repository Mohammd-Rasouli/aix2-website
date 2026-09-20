import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function ChatGPTvsVerticalAI() {
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

          <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-lg">
            <h1 className="text-3xl md:text-4xl font-bold text-[#004976] mb-8 leading-tight">
              ChatGPT vs Vertical AI solutions: Why every fund should have subscription to GPT Enterprise?
            </h1>

            <div className="space-y-10 text-lg text-gray-800 prose prose-lg max-w-none">
              <section>
                <h2 className="text-2xl font-semibold text-[#003557] mb-4 border-l-4 border-[#004976] pl-4">
                  Step one: Experience ChatGPT Enterprise Solution
                </h2>
                <p>
                  The first, immediate step for every firm is to get foundational AI tools into the hands of your team.
                  We recommend subscribing to ChatGPT Enterprise and Microsoft 365 Copilot for Finance.
                </p>
                <p>
                  These platforms are inexpensive, secure, and integrate seamlessly with the tools you already use, like
                  SharePoint, Outlook, and your cloud servers. The goal here isn't to revolutionize your due diligence
                  process overnight. It's to build an AI-ready culture and harness first order use cases at low cost and
                  also explore their limits toward your need for vertical AI solutions.
                </p>
                <p>Encourage your team to experiment. Here are some guideline and examples we see in other funds:</p>
                <p>
                  Choose use cases that are simple yet frequent at your firm, especially those which are limited to
                  writing in plain language.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
                  <h3 className="text-xl font-semibold text-[#004976] mb-3">Example Use cases are :</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Drafting emails and investor communications.</li>
                    <li>Preparing for meetings by summarizing previous notes and call transcripts.</li>
                    <li>Generating initial ideas for thematic write-ups.</li>
                    <li>Cleaning up and formatting basic data sets.</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#003557] mb-4 border-l-4 border-[#004976] pl-4">
                  Step 2: Understand the Limits & Deploy Specialized Solutions
                </h2>
                <p>
                  As your team uses these tools, they'll notice their boundaries. General-purpose AI has clear limits
                  for the complex work of private investment:
                </p>
                <div className="space-y-4 mt-4">
                  <p>
                    <strong className="text-[#004976]">Quality & Nuance:</strong> The output for large, complex reports
                    like a full due diligence analysis often lacks the required depth and accuracy. These tools are not
                    for accurate calculations, industry specific logics and reasoning, and complicated reporting.
                  </p>
                  <p>
                    <strong className="text-[#004976]">Lack of Integration:</strong> They don't connect to specialized
                    private market CRMs or other bespoke software central to your workflow, or data bases used for this
                    industry such as PitchBook, Capital IQ, Dakota, Crunchbase, etc.
                  </p>
                  <p>
                    <strong className="text-[#004976]">No Workflow Optimization:</strong> You can't define reusable
                    templates or sophisticated, multi-step processes for tasks like deal screening or portfolio
                    analysis.
                  </p>
                </div>
                <p className="mt-6">
                  This is where specialized AI solutions come into the picture. For your most critical and
                  value-additive workflows, you need AI agents trained specifically on your firm's data, methodologies,
                  and objectives. These custom-trained systems can tackle the complex tasks where general AI falls
                  short.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#003557] mb-4 border-l-4 border-[#004976] pl-4">
                  Step 3: Where Specialized AI Delivers Real Value
                </h2>
                <p>
                  Specialized AI can automate and enhance the core functions of a private investment firm with a high
                  degree of accuracy and impact. Below are some of the most powerful vertical AI use cases.
                </p>
                <div className="space-y-4 mt-4">
                  <p>
                    <strong className="text-[#004976]">Legal Document Review:</strong> Instantly analyze NDAs, credit
                    agreements, and purchase agreements. The AI can extract key clauses, flag risks, and compare terms
                    against your firm's precedent positions.
                  </p>
                  <p>
                    <strong className="text-[#004976]">Modeling & Financial Analysis:</strong> Generate complex LBO
                    models from simple prompts. AI agents can automate sensitivity analysis, run multiple scenarios in
                    seconds, and audit formulas for errors.
                  </p>
                  <p>
                    <strong className="text-[#004976]">Deal Screening:</strong> Automate the top of your funnel. AI can
                    review CIMs, summarize them into a standardized one-pager format, and create scorecards based on
                    your IC criteria in a consistent way with business logics and integrate into your CRM and workflow.
                  </p>
                  <p>
                    <strong className="text-[#004976]">Deal Sourcing & Execution:</strong> Specialized AI streamlines
                    the entire deal execution process, from automatically screening CIMs to analyzing datarooms and
                    building financial models, while integrating into your CRM and workflows. This allows your team to
                    evaluate opportunities faster, reduce diligence risk, and make investment decisions with greater
                    conviction.
                  </p>
                  <p>
                    <strong className="text-[#004976]">Portfolio Management & Operations:</strong> AI automates
                    performance monitoring, unlocks insights from your firm's internal knowledge base, and accelerates
                    the creation of reports and board materials. This frees up your team from manual work, enabling them
                    to focus on strategic initiatives and drive value across your investments.
                  </p>
                </div>
                <p className="mt-6">
                  See our{" "}
                  <Link href="/use-cases" className="text-blue-600 hover:underline font-semibold">
                    use cases page
                  </Link>{" "}
                  on AIx2 website for more real world examples. If you want to learn more, feel free to book a time with
                  us.
                </p>
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
