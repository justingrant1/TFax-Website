import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { documentTypes, getDocumentBySlug, getSiblingDocuments } from "@/data/document-types"
import { devices } from "@/data/devices"
import { pickVariant } from "@/lib/pseo/variety"
import { buildDocumentFAQs, buildSoftwareAppSchema } from "@/lib/pseo/schema"
import { BreadcrumbNav } from "@/components/pseo/BreadcrumbNav"
import { StepByStep } from "@/components/pseo/StepByStep"
import { FAQSection } from "@/components/pseo/FAQSection"
import { CTABanner } from "@/components/pseo/CTABanner"
import { RelatedPages } from "@/components/pseo/RelatedPages"
import { CheckCircle, AlertTriangle, Shield, Lightbulb } from "lucide-react"

// ─── Static params ────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return documentTypes.map((doc) => ({ document: `fax-${doc.slug}` }))
}

// ─── Metadata ─────────────────────────────────────────────────────────────────
export async function generateMetadata({ params }: { params: Promise<{ document: string }> }): Promise<Metadata> {
  const { document: docParam } = await params
  const docSlug = docParam.replace("fax-", "")
  const doc = getDocumentBySlug(docSlug)
  if (!doc) return {}

  const title = `How to Fax a ${doc.name} from iPhone (2026 Guide)`
  const description = `Learn how to fax a ${doc.name} from your iPhone in minutes. Scan or upload, add a cover page, and send to any fax machine worldwide — free with TigerFax.`

  return {
    title,
    description,
    keywords: [doc.primary_keyword, ...doc.secondary_keywords].join(", "),
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://www.tigerfax.app/guides/${docParam}`,
    },
    twitter: { card: "summary_large_image", title, description },
    alternates: { canonical: `https://www.tigerfax.app/guides/${docParam}` },
  }
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default async function DocumentGuidePage({ params }: { params: Promise<{ document: string }> }) {
  const { document: docParam } = await params
  const docSlug = docParam.replace("fax-", "")
  const doc = getDocumentBySlug(docSlug)
  if (!doc) notFound()

  const intro = pickVariant(doc.intro_variants, docParam)
  const ctaVariant = pickVariant(doc.cta_variants, docParam)
  const faqs = buildDocumentFAQs(doc)
  const siblings = getSiblingDocuments(doc, 3)

  // Build steps from doc data
  const steps = doc.steps.map((stepText, i) => {
    const stepNames = [
      "Open TigerFax",
      "Scan or upload your document",
      "Add a cover page",
      "Enter the fax number",
      "Review and send",
    ]
    return {
      name: stepNames[i] ?? `Step ${i + 1}`,
      text: stepText,
    }
  })

  // Related pages: sibling docs + 2 device guides
  const relatedPages = [
    ...siblings.map((d) => ({
      href: `/guides/fax-${d.slug}`,
      title: `How to Fax a ${d.name}`,
      description: `Step-by-step guide for faxing ${d.name}s from iPhone`,
    })),
    {
      href: "/how-to/fax-from-iphone",
      title: "How to Fax from iPhone",
      description: "Complete guide for all iPhone models",
    },
    {
      href: "/how-to/fax-from-iphone-16",
      title: "Fax from iPhone 16",
      description: "Guide for iPhone 16 with 48MP camera tips",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSoftwareAppSchema()) }}
      />

      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <BreadcrumbNav
          crumbs={[
            { name: "Home", href: "/" },
            { name: "Fax Guides", href: "/guides" },
            { name: `How to Fax a ${doc.name}`, href: `/guides/${docParam}` },
          ]}
        />

        {/* Category badge */}
        <div className="mt-4">
          <span className="inline-flex items-center rounded-full bg-orange-100 dark:bg-orange-950/40 px-3 py-1 text-xs font-medium text-orange-700 dark:text-orange-300 capitalize">
            {doc.category.replace("-", " ")} document
          </span>
          {doc.compliance && doc.compliance.length > 0 && doc.compliance.map((c) => (
            <span key={c} className="ml-2 inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-950/40 px-3 py-1 text-xs font-medium text-blue-700 dark:text-blue-300">
              {c} compliant
            </span>
          ))}
        </div>

        {/* Hero */}
        <header className="mt-4">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How to Fax a {doc.name} from iPhone
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{intro}</p>
        </header>

        {/* Warnings */}
        {doc.warnings && doc.warnings.length > 0 && (
          <div className="mt-6 space-y-3">
            {doc.warnings.map((warning, i) => (
              <div key={i} className="flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/30 p-4">
                <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <p className="text-sm text-amber-700 dark:text-amber-300">{warning}</p>
              </div>
            ))}
          </div>
        )}

        {/* What you'll need */}
        <section className="mt-8">
          <h2 className="text-xl font-bold mb-3">What you&apos;ll need</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
              iPhone or iPad running iOS 15 or later
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
              TigerFax app (free on the App Store)
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
              Your {doc.name} (physical copy to scan, or a PDF/image file)
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
              The recipient&apos;s fax number
            </li>
            {doc.isSensitive && (
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                A cover page with confidentiality notice (recommended)
              </li>
            )}
          </ul>
        </section>

        {/* Steps */}
        <StepByStep
          title={`How to Fax a ${doc.name}: Step-by-Step`}
          description={`Complete guide to faxing a ${doc.name} from iPhone using TigerFax`}
          steps={steps}
        />

        {/* Tips */}
        {doc.tips && doc.tips.length > 0 && (
          <section className="mt-10">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="h-5 w-5 text-orange-500" />
              <h2 className="text-xl font-bold">Pro Tips for Faxing {doc.name}s</h2>
            </div>
            <ul className="space-y-3">
              {doc.tips.map((tip, i) => (
                <li key={i} className="flex items-start gap-3 rounded-lg bg-muted/50 px-4 py-3 text-sm text-muted-foreground">
                  <span className="font-bold text-orange-500 shrink-0">{i + 1}.</span>
                  {tip}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Security / compliance */}
        <div className="mt-8 flex items-start gap-3 rounded-lg border p-4 text-sm text-muted-foreground">
          <Shield className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-foreground mb-1">Secure transmission</p>
            <p>
              TigerFax transmits all faxes over encrypted connections.
              {doc.compliance?.includes("HIPAA") && " TigerFax supports HIPAA-compliant faxing with confidentiality cover pages."}
              {" "}Your documents are never stored on third-party servers after transmission.
            </p>
          </div>
        </div>

        {/* Which iPhone is best */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Which iPhone Works Best for Faxing {doc.name}s?</h2>
          <p className="text-muted-foreground mb-4">
            TigerFax works on all iPhones running iOS 15 or later. Here are the best options for faxing {doc.name}s:
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {devices.filter(d => d.type === "phone").slice(0, 4).map((device) => (
              <a
                key={device.slug}
                href={`/how-to/fax-from-${device.slug}`}
                className="group flex flex-col gap-1 rounded-lg border p-4 hover:border-orange-300 hover:bg-orange-50/50 dark:hover:bg-orange-950/20 transition-colors"
              >
                <span className="font-medium text-sm group-hover:text-orange-600 transition-colors">
                  {device.name}
                </span>
                <span className="text-xs text-muted-foreground">
                  {device.hasLiDAR ? "LiDAR scanning · " : ""}{device.osVersion}
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <FAQSection faqs={faqs} title={`FAQ: Faxing ${doc.name}s from iPhone`} />

        {/* Related */}
        <RelatedPages pages={relatedPages} title={`More ${doc.category.replace("-", " ")} faxing guides`} />

        {/* CTA */}
        <CTABanner variant={ctaVariant} />
      </div>
    </div>
  )
}
