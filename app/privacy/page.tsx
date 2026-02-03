import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPage() {
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
        <h1 className="mb-8 text-3xl font-bold text-foreground md:text-4xl">Privacy Policy</h1>
        
        <div className="prose prose-neutral max-w-none space-y-8 text-muted-foreground">
          <p className="text-lg">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">1. Introduction</h2>
            <p>
              TigerFax ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">2. Information We Collect</h2>
            <p>We may collect information about you in various ways, including:</p>
            <ul className="ml-6 list-disc space-y-2">
              <li><strong className="text-foreground">Personal Data:</strong> Name, email address, phone number, and billing information when you create an account or make purchases.</li>
              <li><strong className="text-foreground">Document Data:</strong> Documents you scan or upload for faxing. These are processed securely and deleted after transmission.</li>
              <li><strong className="text-foreground">Usage Data:</strong> Information about how you use the app, including fax history and feature usage.</li>
              <li><strong className="text-foreground">Device Data:</strong> Device type, operating system, and unique device identifiers.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="ml-6 list-disc space-y-2">
              <li>Process and deliver your fax transmissions</li>
              <li>Manage your account and provide customer support</li>
              <li>Process payments and send transaction notifications</li>
              <li>Improve our app and develop new features</li>
              <li>Send you updates and marketing communications (with your consent)</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">4. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your data. All fax transmissions are encrypted, and documents are automatically deleted from our servers after successful delivery. We use secure, encrypted connections for all data transfers.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">5. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to provide our services and fulfill the purposes outlined in this policy. Fax documents are deleted within 24 hours of successful transmission.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">6. Third-Party Services</h2>
            <p>
              We may share your information with third-party service providers who assist us in operating our app, processing payments, and delivering faxes. These providers are bound by contractual obligations to protect your data.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="ml-6 list-disc space-y-2">
              <li>Access and receive a copy of your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt out of marketing communications</li>
              <li>Request data portability</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">8. Children's Privacy</h2>
            <p>
              TigerFax is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">10. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <p className="font-medium text-foreground">
              support@tigerfax.com
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
