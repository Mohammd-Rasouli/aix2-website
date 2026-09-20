import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Blog() {
  const articles = [
    {
      slug: "2026-geopolitical-capital-shift",
      title: "2026 Geopolitical Capital Shift, Action Plan for GPs and LPs",
      description:
        "CAPITAL IN MOTION: What the Iran-US War Means for Private Market GPs and LPs. A comprehensive action framework covering geopolitical capital flight, fundraising in a displaced capital environment, and private market allocation shifts.",
      date: "April 2026",
      readTime: "25 min read",
    },
    {
      slug: "fundraising-2025-survey-results",
      title: "Fundraising 2025: Survey Results",
      description:
        "Comprehensive benchmarks and insights from 124 GPs and 22 LPs on fundraising performance, pipeline conversion, and best practices.",
      date: "October 2025",
      readTime: "12 min read",
    },
    {
      slug: "chatgpt-vs-vertical-ai",
      title: "ChatGPT vs Vertical AI solutions: Why every fund should have subscription to GPT Enterprise?",
      description:
        "A strategic guide for private investment firms on adopting AI: starting with foundational tools and scaling to specialized solutions.",
      date: "2025",
      readTime: "8 min read",
    },
  ]

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
        <div className="container max-w-6xl">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#004976] mb-4">Blog</h1>
            <p className="text-xl text-gray-600">Insights and research from the AIx2 team</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {articles.map((article) => (
              <Link key={article.slug} href={`/blog/${article.slug}`}>
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 cursor-pointer border-2 hover:border-[#004976]">
                  <CardHeader>
                    <CardTitle className="text-2xl text-[#004976] mb-2 leading-tight">{article.title}</CardTitle>
                    <CardDescription className="text-sm text-gray-500">
                      {article.date} · {article.readTime}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">{article.description}</p>
                    <div className="mt-4">
                      <span className="text-[#004976] font-semibold hover:underline">Read article →</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
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
