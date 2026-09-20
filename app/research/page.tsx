import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Research() {
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
            <Link href="/media" className="text-[#004976] hover:text-[#003557] font-medium">
              Media and Conferences
            </Link>
            <Link href="/research" className="text-[#004976] hover:text-[#003557] font-medium font-bold underline">
              AI Research
            </Link>
            <Link href="/blog" className="text-[#004976] hover:text-[#003557] font-medium">
              Blog
            </Link>
          </nav>
          <a href="https://calendar.app.google/JSZzuAFvkoSdeeUw6" target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#1a7180] hover:bg-[#0f5d66] text-white rounded-full">Contact us</Button>
          </a>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#004976] mb-6 text-center">
              AIx2 CereBrain: Vertical AI Agents Providing Operating System for Private Market Investors
            </h1>

            <h2 className="text-2xl md:text-3xl font-bold text-[#004976] mb-12 text-center">
              Backed by Advanced AI Research and Technology
            </h2>

            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-gray-700 mb-6">
                AIx2 is an advanced AI research and technology team from top academic and industry research labs. To
                build our efficient vertical AI agents for private market investors, AIx2 uses its own technology
                architecture built on on top of our team's years of research in AI.
              </p>

              <p className="text-gray-700 mb-6">
                We believe in <span className="font-semibold">open access research</span>, and that it will foster our
                growth as well as the industry growth. Using the{" "}
                <span className="font-semibold">research navigation map below</span>, see our research for different
                parts of the architecture in this page.
              </p>

              <p className="text-[#004976] font-medium">
                <Link
                  href="https://calendar.app.google/JSZzuAFvkoSdeeUw6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#004976] hover:text-[#003557] underline"
                >
                  Contact us if you are an AI researcher and would like to collaborate in this space.
                </Link>
              </p>
            </div>

            <div className="my-12 flex justify-center">
              <Image
                src="/images/aix2-cerebrain-architecture-detailed.png"
                alt="AIx2 CereBrain Architecture"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>

            <div className="mt-16 space-y-16">
              <div>
                <h3 className="text-2xl font-bold text-[#004976] mb-4">User Layer - AIx2 RLUI Feedback</h3>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-gray-700 mb-4">
                    The User Layer is the interface between the investor and our AI system. It includes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>AIx2 RLUI feedback mechanisms for continuous improvement</li>
                    <li>Intuitive interfaces designed specifically for private market investors</li>
                    <li>Personalized user experience based on investor preferences and history</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#004976] mb-4">Algorithms Layer - AIx2 CORTEX</h3>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-gray-700 mb-4">The Algorithms Layer, powered by AIx2 CORTEX, provides:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Curated Search and Reasoning capabilities</li>
                    <li>Agents for up-to-date mapping of entire private market</li>
                    <li>Advanced pattern recognition for investment opportunities</li>
                    <li>Proprietary algorithms designed specifically for private market analysis</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#004976] mb-4">Data Structure Layer - AIx2 MEMORA</h3>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-gray-700 mb-4">The Data Structure Layer, powered by AIx2 MEMORA, includes:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Agents for up-to-date user preference mapping</li>
                    <li>Efficient data organization and retrieval systems</li>
                    <li>Secure storage of proprietary investment data</li>
                    <li>Integration capabilities with existing investor data systems</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#004976] mb-4">Data Layer</h3>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-gray-700 mb-4">
                    The Data Layer forms the foundation of our AI architecture and includes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Unstructured industry public data and investor's proprietary data</li>
                    <li>Integration with private market data sources (Preqin, Bloomberg, CAPITAL IQ)</li>
                    <li>Fund's private data including date rooms, actions, and meetings</li>
                    <li>Secure handling of sensitive financial information with strict access controls</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Link href="https://calendar.app.google/JSZzuAFvkoSdeeUw6" target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#004976] hover:bg-[#003557] text-white px-8 py-3 text-lg font-medium rounded-full">
                  Book a Research Consultation
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
