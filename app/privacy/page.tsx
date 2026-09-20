import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicy() {
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
            <Link href="/privacy" className="text-[#004976] hover:text-[#003557] font-medium font-bold underline">
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
          <div className="container max-w-4xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#004976] mb-12 text-center">
              Privacy Policy
            </h1>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-[#004976] mb-4">1. Introduction</h2>
              <p className="text-gray-700 mb-6">
                Welcome to AIx2 ("we," "our," or "us"). We provide advanced Artificial Intelligence (AI) services and are committed to protecting the privacy, security, and integrity of your data. This Privacy Policy explains how we collect, use, protect, and disclose your information when you access or use our platform, website, and associated AI services (collectively, the "Services").
              </p>

              <h2 className="text-2xl font-bold text-[#004976] mb-4">2. Information We Collect</h2>
              <p className="text-gray-700 mb-4">
                To provide our Services effectively, we may collect the following types of information:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li><strong>Account Information:</strong> Name, email address, and billing details required for account creation and administration.</li>
                <li><strong>Authentication Data:</strong> Encrypted passwords and third-party authentication tokens (e.g., Gmail API tokens) required for service integration.</li>
                <li><strong>Usage Data:</strong> Interactions with our AI services, log files, IP addresses, and device information to monitor performance and improve the user experience.</li>
                <li><strong>User Content:</strong> Prompts, inputs, and files you directly submit to our AI models during standard use.</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#004976] mb-4">3. Data Security and Encryption</h2>
              <p className="text-gray-700 mb-4">
                Safeguarding your data is our primary operational directive. We implement industry-standard security measures to prevent unauthorized access, disclosure, or modification of your information.
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li><strong>End-to-End Encryption:</strong> All highly sensitive data, specifically including user passwords and third-party integration tokens (such as Gmail tokens), are strictly encrypted at rest and in transit. Our internal architecture ensures that no unauthorized parties—including our own personnel—can access your plaintext credentials.</li>
                <li><strong>Data Isolation:</strong> We employ robust logical separation and tenant isolation protocols. Your user data is entirely isolated within our databases, ensuring that no user can query, access, or inadvertently view the data or AI interactions of any other user on the platform.</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#004976] mb-4">4. User Responsibilities and Account Security</h2>
              <p className="text-gray-700 mb-4">
                While we provide highly secure infrastructure, maintaining account security is a shared responsibility.
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li><strong>Credential Confidentiality:</strong> You are solely responsible for maintaining the strict confidentiality of your account credentials, login information, and any associated authentication tokens.</li>
                <li><strong>Waiver of Liability for Shared Credentials:</strong> We explicitly disclaim any responsibility or liability for data breaches, unauthorized access, or malicious activity that results from a user voluntarily or inadvertently sharing their account credentials or access tokens with third parties.</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#004976] mb-4">5. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">
                We use the data we collect exclusively for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>To operate, maintain, and deliver our AI Services to you.</li>
                <li>To process transactions and send related administrative or billing communications.</li>
                <li>To troubleshoot bugs, monitor system health, and secure the platform against fraud or abuse.</li>
                <li>To comply with applicable legal obligations and enforce our Terms of Service.</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#004976] mb-4">6. Data Sharing and Disclosure</h2>
              <p className="text-gray-700 mb-4">
                We do not sell, rent, or trade your personal information. We only share data under the following limited circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li><strong>Service Providers:</strong> We may share necessary data with trusted third-party vendors (such as cloud hosting providers or payment processors) strictly for the purpose of operating our Services. These providers are bound by strict confidentiality agreements.</li>
                <li><strong>Legal Compliance:</strong> We may disclose your information if required to do so by law, subpoena, or other legal processes, or to protect the rights, property, and safety of our company, our users, or the public.</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#004976] mb-4">7. Data Retention</h2>
              <p className="text-gray-700 mb-6">
                We retain your personal information only for as long as is necessary to fulfill the purposes outlined in this Privacy Policy. If you choose to terminate your account, your data—including isolated user content and encrypted tokens—will be permanently deleted from our active servers in accordance with our deletion cycle, barring any legal requirements to retain certain records.
              </p>

              <h2 className="text-2xl font-bold text-[#004976] mb-4">8. Your Privacy Rights</h2>
              <p className="text-gray-700 mb-4">
                Depending on your jurisdiction, you may have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Access the personal data we hold about you.</li>
                <li>Request the correction of inaccurate or incomplete data.</li>
                <li>Request the deletion of your personal data ("Right to be Forgotten").</li>
                <li>Opt-out of certain data collection practices.</li>
              </ul>
              <p className="text-gray-700 mb-6">
                To exercise any of these rights, please contact us using the information provided below.
              </p>

              <h2 className="text-2xl font-bold text-[#004976] mb-4">9. Changes to This Policy</h2>
              <p className="text-gray-700 mb-6">
                We reserve the right to modify this Privacy Policy at any time. If we make material changes to how we handle your data, we will notify you by updating the "Effective Date" at the top of this document and, where appropriate, by sending an email notification to the address associated with your account.
              </p>

              <h2 className="text-2xl font-bold text-[#004976] mb-4">10. Contact Information</h2>
              <p className="text-gray-700 mb-6">
                If you have any questions about these Terms, please contact us at:<br />
                <strong>Email:</strong> <a href="mailto:admin@aix2.ai" className="text-[#004976] hover:underline">admin@aix2.ai</a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#004976] text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="flex flex-col gap-4">
              <Image
                src="/images/aix2-logo-official.png"
                alt="AIx2 Logo"
                width={150}
                height={40}
                className="h-10 w-auto brightness-0 invert"
              />
              <p className="text-white/80 text-sm max-w-xs">
                AI-powered solutions for private market investors, transforming how funds operate with tailored
                intelligence.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
              <Link href="/" className="text-white/80 hover:text-white text-sm">
                Home
              </Link>
              <Link href="/use-cases" className="text-white/80 hover:text-white text-sm">
                Use Cases
              </Link>
              <Link href="/media" className="text-white/80 hover:text-white text-sm">
                Media and Conferences
              </Link>
              <Link href="/research" className="text-white/80 hover:text-white text-sm">
                AI Research
              </Link>
              <Link href="/blog" className="text-white/80 hover:text-white text-sm">
                Blog
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-lg mb-2">Legal</h3>
              <Link href="/privacy" className="text-white/80 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/80 hover:text-white text-sm">
                Terms of Service
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-lg mb-2">Contact</h3>
              <a href="mailto:admin@aix2.ai" className="text-white/80 hover:text-white text-sm">
                admin@aix2.ai
              </a>
              <Link
                href="https://meetings.hubspot.com/aix2/aix2-team"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white text-sm"
              >
                Book a Demo
              </Link>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60 text-sm">
            © {new Date().getFullYear()} AIx2. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
