import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Media() {
  // Podcast and interview data
  const podcastsAndInterviews = [
    // First row
    [
      {
        name: "SuperReturn International",
        logo: "/images/superreturn-podcast.jpeg",
        url: "https://www.youtube.com/watch?v=BiCRtP8yuC0",
        alt: "Mohammad Rasouli - AI for investment at SuperReturn International",
      },
      {
        name: "Private Market Talks",
        logo: "/images/private-market-talks-logo.png",
        url: "https://privatemarkettalks.proskauerpodcasts.com/e/generative-ai-from-theory-to-practice-with-aix2s-mohammad-rasouli/",
        alt: "Generative AI: From Theory to Practice with AIx2's Mohammad Rasouli - Private Market Talks",
      },
      {
        name: "The Private Equity Funcast",
        logo: "/images/private-equity-funcast-logo.png",
        url: "https://www.parkergale.com/blog/pef-rasouli",
        alt: "AI for Investment: A Platform Disruption - The Private Equity Funcast with Mohammad Rasouli",
      },
      {
        name: "Absolute Return Podcast",
        logo: "/images/absolute-return-podcast-logo.png",
        url: "https://accelerateshares.com/podcasts/absolute-return-podcast-248-ai-in-investing-with-stanford-ai-researcher-dr-mohammad-rasouli/",
        alt: "Absolute Return Podcast #248: AI In Investing With Stanford AI Researcher Dr. Mohammad Rasouli",
      },
      {
        name: "AIMA: The Long Short",
        logo: "/images/aima-logo.png",
        url: "https://www.aima.org/article/ep-101-the-long-short-beyond-chatgpt-the-real-world-impact-of-ai-in-asset-management.html",
        alt: "EP 101: The Long Short - Beyond ChatGPT: The Real-World Impact of AI in Asset Management - AIMA",
      },
    ],
    // Second row
    [
      {
        name: "The Derivative",
        logo: "/images/rcm-derivative-logo.jpeg",
        url: "https://www.rcmalternatives.com/2025/01/the-state-of-ai-and-ai-in-alternative-investments-with-mohammad-rasouli-of-aix2/",
        alt: "The State of AI, and AI in Alternative Investments with Mohammad Rasouli of AIx2 - The Derivative Podcast",
      },
      {
        name: "R136 Ventures",
        logo: "/images/r136-ventures-logo.png",
        url: "https://x.com/R136Ventures/status/1840809800395079915",
        alt: "R136 Ventures Twitter/X post featuring Mohammad Rasouli discussing AI in venture capital",
      },
      {
        name: "15 for 15 Podcast",
        logo: "/images/dealflow-network-logo.png",
        url: "https://www.linkedin.com/events/7105613532343193600/comments/",
        alt: "15 for 15 Podcast - Mohammad Rasouli - Implementing AI in Private Equity - Dealflow Network",
      },
      {
        name: "Private Equity Value Creation",
        logo: "/images/pe-value-creation-podcast-logo.jpeg",
        url: "https://podcasts.apple.com/us/podcast/ep-43-mohammad-rasouli-and-philipp-reineke-aix2/id1693271242?i=1000668968222",
        alt: "EP 43: Mohammad Rasouli and Philipp Reineke (AIx2) - Private Equity Value Creation Podcast",
      },
      {
        name: "Markets Group",
        logo: "/images/markets-group-logo.png",
        url: "https://www.marketsgroup.org/news/could-ai-offer-investors-a-steady-hand-amid-times-of-uncertainty",
        alt: "Could AI offer investors a steady hand amid times of uncertainty? - Markets Group article featuring AIx2",
      },
    ],
  ]

  // Conference keynotes data
  const conferenceKeynotes: any[] = []

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
            <Link href="/media" className="text-[#004976] hover:text-[#003557] font-medium font-bold underline">
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
          <div className="container max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#004976] mb-12 text-center">
              Work with the Thought Leaders in AI for Funds
            </h1>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-700 mb-6">
                As pioneer in private market AI, AIx2 advance the industry through research (e.g. Stanford AI and
                Investment Series), global keynotes (e.g. SuperReturn), and strategic partnerships (e.g. AIMA).
              </p>

              <p className="text-[#004976] font-medium">
                <Link
                  href="https://meetings.hubspot.com/aix2/aix2-team"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#004976] hover:text-[#003557] underline"
                >
                  Contact us for speaker line up for Stanford AI and Investment Series, or other collaborations.
                </Link>
              </p>
            </div>

            <div className="mt-20">
              <h2 className="text-2xl md:text-3xl font-bold text-[#004976] mb-10 text-center">Industry Journals</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
                <Link
                  href="https://www.forbes.com/sites/josipamajic/2024/01/16/venture-capitals-new-era-ais-journey-from-enhancing-operational-efficiency-to-alpha-generation/?ctpv=searchpage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-full h-24"
                >
                  <Image
                    src="/images/forbes-logo-new.jpeg"
                    alt="Forbes"
                    width={200}
                    height={100}
                    className="max-h-16 w-auto object-contain"
                  />
                </Link>

                <Link
                  href="https://www.ai-cio.com/news/will-ai-compromise-security-for-institutional-investors/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-full h-24"
                >
                  <Image
                    src="/images/cio-logo-new.png"
                    alt="Chief Investment Officer"
                    width={200}
                    height={100}
                    className="max-h-16 w-auto object-contain"
                  />
                </Link>

                <Link
                  href="https://middlemarketgrowth.org/ai-platform-alternative-investment/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-full h-24"
                >
                  <Image
                    src="/images/mmg-logo-new.png"
                    alt="Middle Market Growth"
                    width={200}
                    height={100}
                    className="max-h-16 w-auto object-contain"
                  />
                </Link>
              </div>
            </div>

            <div className="mt-20">
              <h2 className="text-2xl md:text-3xl font-bold text-[#004976] mb-10 text-center">Academic Lectures</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
                <Link
                  href="https://www.linkedin.com/posts/mohammadrasouli_mba-wharton-vc-activity-7269645758608388097-d5ue/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA-ZUh4ByP2DyYm8HjP050oXjx0yybmGnaU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-full h-24"
                >
                  <Image
                    src="/images/columbia-bs-logo-stacked.png"
                    alt="Columbia Business School"
                    width={200}
                    height={100}
                    className="max-h-20 w-auto object-contain"
                  />
                </Link>

                <Link
                  href="https://www.linkedin.com/posts/mohammadrasouli_mba-wharton-vc-activity-7269645758608388097-d5ue/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA-ZUh4ByP2DyYm8HjP050oXjx0yybmGnaU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-full h-24"
                >
                  <Image
                    src="/images/wharton-logo-new.jpeg"
                    alt="Wharton School, University of Pennsylvania"
                    width={200}
                    height={100}
                    className="max-h-20 w-auto object-contain"
                  />
                </Link>

                <Link
                  href="https://www.linkedin.com/posts/mohammadrasouli_mba-wharton-vc-activity-7269645758608388097-d5ue/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA-ZUh4ByP2DyYm8HjP050oXjx0yybmGnaU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-full h-24"
                >
                  <Image
                    src="/images/nyu-stern-logo-new.jpeg"
                    alt="NYU Stern School of Business"
                    width={200}
                    height={100}
                    className="max-h-20 w-auto object-contain"
                  />
                </Link>
              </div>
            </div>

            <div className="mt-20">
              <h2 className="text-2xl md:text-3xl font-bold text-[#004976] mb-10 text-center">
                Podcasts and Interviews
              </h2>

              {/* First Row */}
              <div className="grid grid-cols-5 gap-6 items-center justify-items-center mb-8">
                {podcastsAndInterviews[0].map((item, index) => (
                  <Link
                    key={`row1-${index}`}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-full h-28"
                  >
                    <Image
                      src={item.logo || "/placeholder.svg"}
                      alt={item.alt}
                      width={200}
                      height={100}
                      className="max-h-20 w-auto object-contain"
                    />
                  </Link>
                ))}
              </div>

              {/* Second Row */}
              <div className="grid grid-cols-5 gap-6 items-center justify-items-center">
                {podcastsAndInterviews[1].map((item, index) => (
                  <Link
                    key={`row2-${index}`}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-full h-28"
                  >
                    <Image
                      src={item.logo || "/placeholder.svg"}
                      alt={item.alt}
                      width={200}
                      height={100}
                      className="max-h-20 w-auto object-contain"
                    />
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-20">
              <h2 className="text-2xl md:text-3xl font-bold text-[#004976] mb-10 text-center">
                Conference Keynotes and Speakerships
              </h2>

              {/* Row 1 - 5 links */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center justify-items-center mb-8">
                <Link
                  href="https://www.linkedin.com/posts/mohammadrasouli_superreturn-international-2024-activity-7197342707042701313-w5KN/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-full h-24"
                >
                  <Image
                    src="/images/superreturn-international-logo-new.jpeg"
                    alt="SuperReturn International"
                    width={200}
                    height={100}
                    className="max-h-16 w-auto object-contain"
                  />
                </Link>

                <Link
                  href="https://www.linkedin.com/posts/mohammadrasouli_superreturn-middle-east-2023-activity-7123095119397863424-Ko95/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-full h-24"
                >
                  <Image
                    src="/images/superreturn-middle-east-logo.png"
                    alt="SuperReturn Middle East"
                    width={200}
                    height={100}
                    className="max-h-16 w-auto object-contain"
                  />
                </Link>

                <Link
                  href="https://www.flickr.com/photos/icbi-events/albums/72177720313234811/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-full h-24"
                >
                  <Image
                    src="/images/superreturn-africa-logo-new.png"
                    alt="SuperReturn Africa"
                    width={200}
                    height={100}
                    className="max-h-16 w-auto object-contain"
                  />
                </Link>

                <Link
                  href="https://www.linkedin.com/posts/mohammadrasouli_superreturn-us-west-2024-activity-7177349363529039872-60i5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-full h-24"
                >
                  <Image
                    src="/images/superreturn-us-west-logo.png"
                    alt="SuperReturn US West"
                    width={200}
                    height={100}
                    className="max-h-16 w-auto object-contain"
                  />
                </Link>

                <Link
                  href="https://informaconnect.com/riskmindsamericas/speakers/mohammad-rasouli/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-full h-24"
                >
                  <Image
                    src="/images/riskminds-americas-logo.png"
                    alt="RiskMinds Americas"
                    width={200}
                    height={100}
                    className="max-h-16 w-auto object-contain"
                  />
                </Link>
              </div>

              {/* Row 2 - 5 links */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center justify-items-center mb-8">
                <Link
                  href="https://app.qwoted.com/opportunities/event-gaim-ops-west-2023"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-full h-24"
                >
                  <Image
                    src="/images/gaim-ops-west-logo.png"
                    alt="GAIM Ops West"
                    width={200}
                    height={100}
                    className="max-h-16 w-auto object-contain"
                  />
                </Link>

                <Link
                  href="https://www.linkedin.com/posts/mohammadrasouli_generativeai-finance-finovatefall-activity-7238668183392407552-peQE/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-full h-24"
                >
                  <Image
                    src="/images/finovate-fall-logo.jpeg"
                    alt="Finovate Fall"
                    width={200}
                    height={100}
                    className="max-h-16 w-auto object-contain"
                  />
                </Link>

                <Link
                  href="https://www.peievents.com/en/event/pere-america-forum-2024/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-full h-24"
                >
                  <Image
                    src="/images/pere-america-forum-logo.jpeg"
                    alt="PERE America Forum"
                    width={200}
                    height={100}
                    className="max-h-16 w-auto object-contain"
                  />
                </Link>

                <Link
                  href="https://www.privateequityinternational.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-full h-24"
                >
                  <Image
                    src="/images/pei-responsible-investment-forum-logo.png"
                    alt="Private Equity International Responsible Investment Forum"
                    width={200}
                    height={100}
                    className="max-h-16 w-auto object-contain"
                  />
                </Link>

                <Link
                  href="https://www.peievents.com/en/wp-content/uploads/2023/02/PERE-Asia-2024-agenda-12.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-full h-24"
                >
                  <Image
                    src="/images/pere-asia-summit-logo.jpeg"
                    alt="PERE Asia Summit"
                    width={200}
                    height={100}
                    className="max-h-16 w-auto object-contain"
                  />
                </Link>
              </div>

              {/* Row 3 - 5 links */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center justify-items-center mb-8">
                <Link
                  href="https://www.peievents.com/en/event/responsible-investment-forum-west/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-full h-24"
                >
                  <Image
                    src="/images/pei-responsible-investment-forum-west-logo.jpeg"
                    alt="Private Equity International Responsible Investment Forum: West"
                    width={200}
                    height={100}
                    className="max-h-16 w-auto object-contain"
                  />
                </Link>

                <Link
                  href="https://www.linkedin.com/posts/mohammadrasouli_im-speaking-at-rif-new-york-2024-join-me-activity-7161041054895349762-VUBW/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-full h-24"
                >
                  <Image
                    src="/images/responsible-investment-forum-ny-logo.png"
                    alt="Responsible Investment Forum New York 2024"
                    width={200}
                    height={100}
                    className="max-h-16 w-auto object-contain"
                  />
                </Link>

                <Link
                  href="https://static1.squarespace.com/static/6392336fedab3f514d290603/t/66da0f819de8ad6fadd9731c/1725566850033/AI%26Blockchain_2024_Final+Agenda.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-full h-24"
                >
                  <Image
                    src="/images/carmo-companies-ai-blockchain-logo.png"
                    alt="Carmo Companies AI & Blockchain Investment Conference"
                    width={200}
                    height={100}
                    className="max-h-16 w-auto object-contain"
                  />
                </Link>

                <Link
                  href="https://www.professionalpensions.com/news/4165067/pp-conference-key-themes-2024"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-full h-24"
                >
                  <Image
                    src="/images/professional-pensions-logo.png"
                    alt="Professional Pensions Conference"
                    width={200}
                    height={100}
                    className="max-h-16 w-auto object-contain"
                  />
                </Link>

                <Link
                  href="https://www.linkedin.com/posts/mohammadrasouli_ai-alternative-investment-activity-7234456437899370496-yLRd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-full h-24"
                >
                  <Image
                    src="/images/altssv-2024-logo.jpeg"
                    alt="ALTSSV 2024 - Alternative Investments Conference San Francisco"
                    width={200}
                    height={100}
                    className="max-h-16 w-auto object-contain"
                  />
                </Link>
              </div>

              {/* Row 4 - 4 links */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Link
                  href="https://www.linkedin.com/posts/mohammadrasouli_ai-investment-activity-7126249775468859392-2W3H/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-full h-24"
                >
                  <Image
                    src="/images/with-intelligence-coo-summit-logo.png"
                    alt="with. Intelligence Private Markets US COO Summit 2023"
                    width={200}
                    height={100}
                    className="max-h-16 w-auto object-contain"
                  />
                </Link>

                <Link
                  href="https://www.proskauer.com/events/funds-in-focus-2024"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-full h-24"
                >
                  <Image
                    src="/images/proskauer-logo.jpeg"
                    alt="Proskauer Rose LLP"
                    width={200}
                    height={100}
                    className="max-h-16 w-auto object-contain"
                  />
                </Link>

                <Link
                  href="https://lu.ma/sbgs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-full h-24"
                >
                  <Image
                    src="/images/stanford-blockchain-governance-summit-logo.png"
                    alt="Stanford Blockchain Governance Summit"
                    width={200}
                    height={100}
                    className="max-h-16 w-auto object-contain"
                  />
                </Link>

                <Link
                  href="https://www.wfoi.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-full h-24"
                >
                  <Image
                    src="/images/wfoi-logo.jpeg"
                    alt="World Family Office Institute (WFOI)"
                    width={200}
                    height={100}
                    className="max-h-16 w-auto object-contain"
                  />
                </Link>
              </div>
            </div>

            {/* Stanford AI and Investment Series section with four sessions */}
            <div className="mt-20">
              <h2 className="text-2xl md:text-3xl font-bold text-[#004976] mb-10 text-center">
                Stanford AI and Investment Series
              </h2>

              <p className="text-gray-700 mb-8 text-center max-w-3xl mx-auto">
                AIx2 hosts Stanford AI and Investment Series with industry thought leaders.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Session 1 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative w-full aspect-[16/9] bg-gray-100">
                    <Image
                      src="/images/b9f0b1c8-0371-41a9-ace8-349d942ff255.avif"
                      alt="Session 1: Praveen Akkiraju, Amit Garg, Mohammad Rasouli"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-[#004976] mb-3">Session 1</h3>
                    <p className="text-gray-700 text-sm mb-2">
                      <strong>Speakers:</strong> Praveen Akkiraju (Insight Partners, Managing Director), Amit Garg (Tau
                      Ventures, Managing Partner), Mohammad Rasouli (AIx2, CEO)
                    </p>
                    <p className="text-gray-500 text-sm italic">Video coming soon</p>
                  </div>
                </div>

                {/* Session 2 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <Link
                    href="https://www.youtube.com/watch?v=ymd4sDXFXWc&feature=youtu.be"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="relative w-full aspect-[16/9] bg-gray-100">
                      <Image
                        src="/images/screenshot-202025-11-17-20at-2010.png"
                        alt="Session 2: Vinod Khosla and Mohammad Rasouli"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-[#004976] mb-3">Session 2: AI and The New Investor</h3>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Speaker:</strong> Vinod Khosla (Khosla Ventures, Founder and Managing Director)
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Moderator:</strong> Mohammad Rasouli (AIx2 CEO)
                      </p>
                      <p className="text-[#004976] text-sm font-medium hover:underline">Watch Video →</p>
                    </div>
                  </Link>
                </div>

                {/* Session 3 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <Link href="https://www.youtube.com/watch?v=Bu0kzgMDW0o" target="_blank" rel="noopener noreferrer">
                    <div className="relative w-full aspect-[16/9] bg-gray-100">
                      <Image
                        src="/images/screenshot-202025-11-30-20at-2010.png"
                        alt="Session 3: David Hefter, Sobhan Khani, Homan Yuen and Mohammad Rasouli"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-[#004976] mb-3">Session 3</h3>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Speakers:</strong> David Hefter (BlackRock), Sobhan Khani (Plug and Play), Homan Yuen
                        (Keymaker VC)
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Moderator:</strong> Mohammad Rasouli (AIx2 CEO)
                      </p>
                      <p className="text-[#004976] text-sm font-medium hover:underline">Watch Video →</p>
                    </div>
                  </Link>
                </div>

                {/* Session 4 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <Link
                    href="https://www.youtube.com/watch?v=wCex47BVv_s&feature=youtu.be"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="relative w-full aspect-[16/9] bg-gray-100">
                      <Image
                        src="/images/screenshot-202025-11-17-20at-2010-session4.png"
                        alt="Session 4: Salil Deshpande, Saam Moatamedi, John Whaley, Will Ballard and Mohammad Rasouli"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-[#004976] mb-3">Session 4</h3>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Speakers:</strong> Salil Deshpande (Uncorrelated), Saam Moatamedi (Greylock), John
                        Whaley (Inception Studio), Will Ballard (Cancer Focus Fund)
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Moderator:</strong> Mohammad Rasouli (AIx2 CEO)
                      </p>
                      <p className="text-[#004976] text-sm font-medium hover:underline">Watch Video →</p>
                    </div>
                  </Link>
                </div>

                {/* Session 5 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative w-full aspect-[16/9] bg-gray-100">
                    <Image
                      src="/images/stanford-ai-and-investment-series-session-5.png"
                      alt="Session 5: Brett Horton, Heidie George, Aditi Maliwal and Mohammad Rasouli"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-[#004976] mb-3">Session 5</h3>
                    <p className="text-gray-700 text-sm mb-2">
                      <strong>Speakers:</strong> Brett Horton (Paris-Roubaix Family Office CIO), Heidie George (Utah
                      Retirement System CCO) and Aditi Maliwal (Upfront VC Partner)
                    </p>
                    <p className="text-gray-700 text-sm mb-2">
                      <strong>Moderator:</strong> Mohammad Rasouli (AIx2 CEO)
                    </p>
                    <p className="text-gray-500 text-sm italic">Video coming soon</p>
                  </div>
                </div>

                {/* Session 6 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <Link href="https://youtu.be/8fQ_SXuEg84" target="_blank" rel="noopener noreferrer">
                    <div className="relative w-full aspect-[16/9] bg-gray-100">
                      <Image
                        src="/images/stanford-ai-and-investment-series-session-6.png"
                        alt="Session 6: Brett Horton, Anurag Chandra, Christine Tsai, Kayvan Baroumand and Mohammad Rasouli"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-[#004976] mb-3">Session 6</h3>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Speakers:</strong> Brett Horton (CIO, Paris-Roubaix Family Office), Anurag Chandra
                        (Investment Committee Chair, San Jose Retirement System), Christine Tsai (CEO and Founding
                        Partner, 500 Global), Kayvan Baroumand (President, SignalRank)
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Moderator:</strong> Mohammad Rasouli (AIx2 CEO)
                      </p>
                      <p className="text-[#004976] text-sm font-medium hover:underline">Watch Video →</p>
                    </div>
                  </Link>
                </div>

                {/* Session 7 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <Link href="https://www.youtube.com/watch?v=-RXXb_UxF34" target="_blank" rel="noopener noreferrer">
                    <div className="relative w-full aspect-[16/9] bg-gray-100">
                      <Image
                        src="/images/stanford-ai-and-investment-series-session-7.png"
                        alt="Session 7: Ralph Goldsticker, Frank Tessier, Kamran Elahian, Kamal Solaiman and Mohammad Rasouli"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-[#004976] mb-3">Session 7</h3>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Speakers:</strong> Ralph Goldsticker (CIO, Allen Biller and Associates), Frank Tessier
                        (CIO, Santa Clara Endowment), Kamran Elahian (3x Unicorn Exit, VC, SWF Advisor), Kamal Solaiman
                        (Sinbad Capital, CEO)
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Moderator:</strong> Mohammad Rasouli (AIx2 CEO)
                      </p>
                      <p className="text-[#004976] text-sm font-medium hover:underline">Watch Video →</p>
                    </div>
                  </Link>
                </div>

                {/* Session 8 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <Link
                    href="https://www.youtube.com/watch?v=X53iozJwAoY"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="relative w-full aspect-[16/9] bg-gray-100">
                      <Image
                        src="/images/stanford-ai-and-investment-series-session-8.png"
                        alt="Session 8: Michel Del Buono, Davis Auksmuksts, Andrea Lo, Sebastian Zhou and Mohammad Rasouli"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-[#004976] mb-3">Session 8</h3>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Speakers:</strong> Michel Del Buono (CIO, A16Z Family Office; Jordan Park Founder; Makena
                        OCIO), Davis Auksmuksts (Partner, Plug and Play), Andrea Lo (Founder, Main Character Capital GP
                        Seeding Fund), Sebastian Zhou (Investor, Alpha Square Group Family Office)
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Moderator:</strong> Mohammad Rasouli (AIx2 CEO)
                      </p>
                      <p className="text-[#004976] text-sm font-medium hover:underline">Watch Video →</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Link href="https://meetings.hubspot.com/aix2/aix2-team" target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#004976] hover:bg-[#003557] text-white px-8 py-3 text-lg font-medium rounded-full">
                  Book a Consultation
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
