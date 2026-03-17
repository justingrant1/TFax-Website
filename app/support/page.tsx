import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Mail, MessageCircle, FileText, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Support & FAQ",
  description:
    "Get help with TigerFax. Find answers to common questions about sending faxes, pricing, file formats, delivery confirmations, and managing your subscription.",
  alternates: {
    canonical: "https://www.tigerfax.com/support",
  },
  openGraph: {
    title: "Support & FAQ | TigerFax",
    description:
      "Get help with TigerFax. Find answers to common questions about sending faxes, pricing, and managing your subscription.",
    url: "https://www.tigerfax.com/support",
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.tigerfax.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Support",
      item: "https://www.tigerfax.com/support",
    },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I send a fax with TigerFax?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Open TigerFax, tap the + button, scan or upload your document, enter the recipient's fax number with country code, and tap Send. Your fax will be delivered within minutes.",
      },
    },
    {
      "@type": "Question",
      name: "What file formats does TigerFax support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TigerFax supports PDF, JPG, PNG, and HEIC files. You can also scan physical documents directly using your iPhone or iPad camera.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost to send a fax with TigerFax?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pricing varies by destination. Domestic faxes start at $0.99 per page. TigerFax Pro subscribers get discounted rates and included pages each month.",
      },
    },
    {
      "@type": "Question",
      name: "How do I know my fax was delivered?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You'll receive a delivery confirmation notification and email once your fax is successfully received. You can also check delivery status in your fax history.",
      },
    },
    {
      "@type": "Question",
      name: "Can I cancel my TigerFax Pro subscription?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, you can cancel anytime through your Apple ID subscription settings. You'll continue to have access to Pro features until the end of your billing period.",
      },
    },
    {
      "@type": "Question",
      name: "Is my data secure with TigerFax?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. All fax transmissions are encrypted, and your documents are automatically deleted from our servers within 24 hours of delivery.",
      },
    },
  ],
}

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <header className="border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-4xl items-center gap-4 px-4 py-4 md:px-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Back to TigerFax home"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <Image
              src="/images/gemini-generated-image-ieqesaieqesaieqe.png"
              alt="TigerFax app icon"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="font-bold text-foreground">TigerFax</span>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-foreground font-medium" aria-current="page">
              Support
            </li>
          </ol>
        </nav>

        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            How can we help?
          </h1>
          <p className="text-lg text-muted-foreground">
            We&apos;re here to help you get the most out of TigerFax
          </p>
        </div>

        <div className="mb-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Mail className="h-6 w-6 text-primary" aria-hidden="true" />
            </div>
            <h2 className="mb-2 text-xl font-semibold text-foreground">
              Email Support
            </h2>
            <p className="mb-4 text-muted-foreground">
              Send us an email and we&apos;ll get back to you within 24 hours.
            </p>
            <Button asChild variant="outline" className="w-full bg-transparent">
              <a href="mailto:support@tigerfax.com">support@tigerfax.com</a>
            </Button>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <MessageCircle className="h-6 w-6 text-primary" aria-hidden="true" />
            </div>
            <h2 className="mb-2 text-xl font-semibold text-foreground">
              In-App Support
            </h2>
            <p className="mb-4 text-muted-foreground">
              Access help directly from the TigerFax app via Settings &gt; Help.
            </p>
            <Button asChild variant="outline" className="w-full bg-transparent">
              <Link href="/#download">Open TigerFax</Link>
            </Button>
          </div>
        </div>

        <section className="mb-16" aria-labelledby="faq-heading">
          <h2
            id="faq-heading"
            className="mb-8 text-center text-2xl font-bold text-foreground"
          >
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <HelpCircle className="h-4 w-4 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">
                    How do I send a fax?
                  </h3>
                  <p className="text-muted-foreground">
                    Open TigerFax, tap the + button, scan or upload your
                    document, enter the recipient&apos;s fax number with country
                    code, and tap Send. Your fax will be delivered within
                    minutes.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <HelpCircle className="h-4 w-4 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">
                    What file formats are supported?
                  </h3>
                  <p className="text-muted-foreground">
                    TigerFax supports PDF, JPG, PNG, and HEIC files. You can
                    also scan physical documents directly using your camera.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <HelpCircle className="h-4 w-4 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">
                    How much does it cost to send a fax?
                  </h3>
                  <p className="text-muted-foreground">
                    Pricing varies by destination. Domestic faxes start at
                    $0.99 per page. TigerFax Pro subscribers get discounted
                    rates and included pages each month.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <HelpCircle className="h-4 w-4 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">
                    How do I know my fax was delivered?
                  </h3>
                  <p className="text-muted-foreground">
                    You&apos;ll receive a delivery confirmation notification and
                    email once your fax is successfully received. You can also
                    check delivery status in your fax history.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <HelpCircle className="h-4 w-4 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">
                    Can I cancel my TigerFax Pro subscription?
                  </h3>
                  <p className="text-muted-foreground">
                    Yes, you can cancel anytime through your Apple ID
                    subscription settings. You&apos;ll continue to have access
                    to Pro features until the end of your billing period.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <FileText className="h-4 w-4 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">
                    Is my data secure?
                  </h3>
                  <p className="text-muted-foreground">
                    Absolutely. All fax transmissions are encrypted, and your
                    documents are automatically deleted from our servers within
                    24 hours of delivery. Read our{" "}
                    <Link
                      href="/privacy"
                      className="text-primary underline hover:no-underline"
                    >
                      Privacy Policy
                    </Link>{" "}
                    for more details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="rounded-2xl bg-secondary p-8 text-center"
          aria-labelledby="contact-heading"
        >
          <h2
            id="contact-heading"
            className="mb-2 text-xl font-semibold text-foreground"
          >
            Still need help?
          </h2>
          <p className="mb-6 text-muted-foreground">
            Our support team is ready to assist you with any questions.
          </p>
          <Button asChild size="lg">
            <a href="mailto:support@tigerfax.com">Contact Support</a>
          </Button>
        </section>

        {/* Cross-links */}
        <nav
          aria-label="Related pages"
          className="mt-12 flex flex-wrap gap-4 border-t border-border pt-8 text-sm"
        >
          <Link href="/privacy" className="text-primary hover:underline">
            Privacy Policy →
          </Link>
          <Link href="/terms" className="text-primary hover:underline">
            Terms of Service →
          </Link>
          <Link href="/" className="text-muted-foreground hover:text-foreground">
            ← Back to Home
          </Link>
        </nav>
      </main>

      <footer className="border-t border-border bg-background py-8">
        <div className="mx-auto max-w-4xl px-4 text-center text-sm text-muted-foreground md:px-6">
          &copy; 2026 TigerFax. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
