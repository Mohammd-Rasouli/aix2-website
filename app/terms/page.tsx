import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TermsOfService() {
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
            <Link href="/terms" className="text-[#004976] hover:text-[#003557] font-medium font-bold underline">
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
              Terms of Service
            </h1>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-[#004976] mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-6">
                By creating an account, accessing, or using the services provided by AIx2 ("we," "our," or "us"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to all of these Terms, you may not access or use our platform, website, or associated Artificial Intelligence (AI) services (collectively, the "Services").
              </p>

              <h2 className="text-2xl font-bold text-[#004976] mb-4">2. Description of Services</h2>
              <p className="text-gray-700 mb-6">
                We provide an AI platform that allows users to interact with advanced machine learning models. Due to the rapidly evolving nature of AI technology, we reserve the right to modify, suspend, or discontinue any part of the Services at our sole discretion, with or without notice.
              </p>

              <h2 className="text-2xl font-bold text-[#004976] mb-4">3. Account Registration and Security</h2>
              <p className="text-gray-700 mb-4">
                To access certain features, you must register for an account. You agree to provide accurate, current, and complete information during registration.
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li><strong>Account Security:</strong> You are entirely responsible for maintaining the confidentiality of your account credentials, passwords, and any integrated third-party tokens (such as Gmail API tokens).</li>
                <li><strong>Waiver of Liability for Shared Credentials:</strong> We expressly disclaim all liability for any loss, damage, data breach, or unauthorized access resulting from your decision—whether intentional or inadvertent—to share your login credentials, API keys, or access tokens with any third party.</li>
                <li><strong>Notification of Breach:</strong> You agree to notify us immediately of any unauthorized use of your account or any other breach of security.</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#004976] mb-4">4. User Conduct and Acceptable Use</h2>
              <p className="text-gray-700 mb-4">
                You agree to use our Services only for lawful purposes. You shall not use the Services to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Generate, distribute, or promote illegal, harmful, threatening, abusive, defamatory, or highly objectionable content.</li>
                <li>Reverse engineer, decompile, or attempt to extract the source code or underlying models of our AI Services.</li>
                <li>Attempt to bypass our security protocols, data isolation measures, or rate limits.</li>
                <li>Introduce viruses, malware, or any other destructive code into the platform.</li>
                <li>Infringe upon the intellectual property, privacy, or other rights of third parties.</li>
              </ul>
              <p className="text-gray-700 mb-6">
                We reserve the right to suspend or terminate your account immediately, without notice, if we determine you have violated these rules.
              </p>

              <h2 className="text-2xl font-bold text-[#004976] mb-4">5. User Content and Intellectual Property</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li><strong>Your Inputs:</strong> You retain all ownership rights to the prompts, text, files, and other materials you input into the Services ("User Content"). By submitting User Content, you grant us a limited, worldwide, non-exclusive license to process that data solely for the purpose of generating your requested outputs and maintaining the Services.</li>
                <li><strong>Our Technology:</strong> We retain all rights, title, and interest in and to the Services, including our proprietary algorithms, models, software, and branding.</li>
                <li><strong>Generated Outputs:</strong> Subject to your compliance with these Terms, you may use the outputs generated by the AI for your personal or commercial purposes. However, due to the nature of machine learning, outputs may not be unique, and other users may generate similar or identical results.</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#004976] mb-4">6. Disclaimer of Warranties</h2>
              <p className="text-gray-700 mb-4">
                Our Services are provided on an "AS IS" and "AS AVAILABLE" basis. We make no representations or warranties of any kind, express or implied.
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li><strong>AI Limitations:</strong> You acknowledge that AI technology is inherently probabilistic. We do not guarantee the accuracy, reliability, or factual correctness of any AI-generated output. You should independently verify any outputs before relying on them for critical decisions.</li>
                <li><strong>No Guarantee of Uninterrupted Service:</strong> We do not warrant that the Services will be uninterrupted, error-free, or entirely secure at all times.</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#004976] mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-700 mb-6">
                To the maximum extent permitted by applicable law, in no event shall AIx2, its officers, directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, use, or goodwill, arising out of or related to your use of the Services.
              </p>

              <h2 className="text-2xl font-bold text-[#004976] mb-4">8. Indemnification</h2>
              <p className="text-gray-700 mb-6">
                You agree to indemnify, defend, and hold harmless AIx2 from and against any claims, liabilities, damages, losses, and expenses (including legal fees) arising out of or in any way connected with your access to or use of the Services, your violation of these Terms, or your generation of any unlawful or infringing content.
              </p>

              <h2 className="text-2xl font-bold text-[#004976] mb-4">9. Termination</h2>
              <p className="text-gray-700 mb-6">
                We reserve the right to terminate or suspend your access to the Services at any time, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Services will immediately cease, and your data will be handled in accordance with our Privacy Policy.
              </p>

              <h2 className="text-2xl font-bold text-[#004976] mb-4">10. Governing Law and Dispute Resolution</h2>
              <p className="text-gray-700 mb-6">
                These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Any dispute arising from these Terms or the Services shall be resolved exclusively in the courts located in San Francisco County, California.
              </p>

              <h2 className="text-2xl font-bold text-[#004976] mb-4">11. Changes to Terms</h2>
              <p className="text-gray-700 mb-6">
                We reserve the right to update or modify these Terms at any time. We will provide notice of significant changes by updating the "Effective Date" at the top of this document or by sending a notification through the Services. Your continued use of the Services following any changes constitutes your acceptance of the revised Terms.
              </p>

              <h2 className="text-2xl font-bold text-[#004976] mb-4">12. Contact Information</h2>
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
