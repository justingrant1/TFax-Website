import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-4xl items-center gap-4 px-4 py-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            <Image
              src="/images/gemini-generated-image-ieqesaieqesaieqe.png"
              alt="TigerFax mascot"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="font-bold text-foreground">TigerFax</span>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
        <h1 className="mb-8 text-3xl font-bold text-foreground md:text-4xl">Terms of Service</h1>
        
        <div className="prose prose-neutral max-w-none space-y-8 text-muted-foreground">
          <p className="text-lg">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">1. Acceptance of Terms</h2>
            <p>
              By accessing and using TigerFax ("the App"), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these Terms of Service, please do not use the App.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">2. Description of Service</h2>
            <p>
              TigerFax provides a mobile application that allows users to send and receive fax documents electronically. The service includes document scanning, fax transmission, and related features as described in the App.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">3. User Accounts</h2>
            <p>To use TigerFax, you must:</p>
            <ul className="ml-6 list-disc space-y-2">
              <li>Be at least 13 years of age</li>
              <li>Provide accurate and complete registration information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
              <li>Be responsible for all activities that occur under your account</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">4. Acceptable Use</h2>
            <p>You agree not to use TigerFax to:</p>
            <ul className="ml-6 list-disc space-y-2">
              <li>Send unsolicited commercial faxes (spam) or violate any anti-spam laws</li>
              <li>Transmit any unlawful, threatening, abusive, defamatory, or obscene content</li>
              <li>Infringe upon intellectual property rights of others</li>
              <li>Transmit viruses, malware, or other harmful code</li>
              <li>Attempt to gain unauthorized access to our systems or other users' accounts</li>
              <li>Use the service for any illegal purpose or in violation of any local, state, national, or international law</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">5. Fees and Payment</h2>
            <p>
              TigerFax offers both free and paid services. Paid features may include:
            </p>
            <ul className="ml-6 list-disc space-y-2">
              <li>Per-page fax charges</li>
              <li>Subscription plans for unlimited or bulk faxing</li>
              <li>Premium features and additional storage</li>
            </ul>
            <p>
              All fees are non-refundable unless otherwise stated. We reserve the right to change our pricing at any time, with notice provided to existing subscribers before changes take effect.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">6. Intellectual Property</h2>
            <p>
              The App and its original content, features, and functionality are owned by TigerFax and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws. You retain ownership of documents you transmit through the service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">7. Service Availability</h2>
            <p>
              While we strive to provide reliable service, we do not guarantee that:
            </p>
            <ul className="ml-6 list-disc space-y-2">
              <li>The App will be available at all times or without interruption</li>
              <li>All faxes will be successfully delivered</li>
              <li>The service will be error-free or secure</li>
            </ul>
            <p>
              We reserve the right to modify, suspend, or discontinue the service at any time without notice.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, TigerFax shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
            </p>
            <ul className="ml-6 list-disc space-y-2">
              <li>Your use or inability to use the service</li>
              <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
              <li>Any interruption or cessation of transmission to or from the service</li>
              <li>Any bugs, viruses, or other harmful code that may be transmitted through the service</li>
              <li>Failed, delayed, or misdirected fax transmissions</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">9. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless TigerFax and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses, including reasonable attorney's fees, arising out of or in any way connected with your access to or use of the service or your violation of these Terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">10. Termination</h2>
            <p>
              We may terminate or suspend your account and access to the service immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use the service will immediately cease.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">11. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which TigerFax operates, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">12. Changes to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">13. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="font-medium text-foreground">
              support@tigerfax.com
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">14. Severability</h2>
            <p>
              If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law, and the remaining provisions will continue in full force and effect.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">15. Entire Agreement</h2>
            <p>
              These Terms constitute the entire agreement between you and TigerFax regarding the use of the service and supersede all prior agreements and understandings, whether written or oral.
            </p>
          </section>
        </div>
      </main>

      <footer className="border-t border-border bg-background py-8">
        <div className="mx-auto max-w-4xl px-4 text-center text-sm text-muted-foreground md:px-6">
          © {new Date().getFullYear()} TigerFax. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
