import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { coverSheets, getCoverSheetBySlug, getSiblingCoverSheets } from "@/data/cover-sheets"
import { pickVariant } from "@/lib/pseo/variety"
import { BreadcrumbNav } from "@/components/pseo/BreadcrumbNav"
import { CTABanner } from "@/components/pseo/CTABanner"
import { FAQSection } from "@/components/pseo/FAQSection"
import { RelatedPages } from "@/components/pseo/RelatedPages"
import { CheckCircle, Shield, Download, FileText } from "lucide-react"

const BASE_URL = "https://www.tigerfax.com"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return coverSheets.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const sheet = getCoverSheetBySlug(slug)
  if (!sheet) return {}
  const title = `${sheet.name} — Free Template | TigerFax`
  const description = `${sheet.description} Free to use with TigerFax — includes built-in cover page templates for every fax.`
  return {
    title,
    description,
    keywords: [sheet.primary_keyword, ...sheet.secondary_keywords].join(", "),
    openGraph: { title, description, url: `${BASE_URL}/templates/${slug}` },
    alternates: { canonical: `${BASE_URL}/templates/${slug}` },
  }
}

export default async function CoverSheetPage({ params }: Props) {
  const { slug } = await params
  const sheet = getCoverSheetBySlug(slug)
  if (!sheet) notFound()

  const intro = pickVariant(sheet.intro_variants, slug)
  const cta = pickVariant(sheet.cta_variants, slug + "-cta")
  const siblings = getSiblingCoverSheets(sheet, 3)

  const faqs = [
    {
      question: `What fields does the ${sheet.name} include?`,
      answer: `The ${sheet.name} includes the following fields: ${sheet.fields.join(", ")}. These cover the essential information needed for professional fax transmission.`,
    },
    {
      question: `Is the ${sheet.name} free?`,
      answer: `Yes. TigerFax includes built-in cover page templates at no extra cost. The ${sheet.name} is available to all TigerFax users — free tier and Pro alike.`,
    },
    {
      question: `Can I use the ${sheet.name} on my iPhone?`,
      answer: `Yes. TigerFax's built-in cover page feature lets you add a ${sheet.name} to any fax directly from your iPhone. Select the cover page template, fill in the fields, and it's automatically prepended to your fax.`,
    },
    {
      question: `Do I need to print the ${sheet.name}?`,
      answer: `No. TigerFax adds the cover page digitally — no printing required. The cover page is transmitted as the first page of your fax, just like a printed cover sheet would be.`,
    },
  ]

  const relatedPages = [
    ...siblings.map((s) => ({
      href: `/templates/${s.slug}`,
      title: s.name,
      description: s.description,
    })),
    {
      href: "/guides",
      title: "Fax Document Guides",
      description: "How to fax specific document types from iPhone",
    },
    {
      href: "/how-to/fax-from-iphone",
      title: "How to Fax from iPhone",
      description: "Complete iPhone faxing guide",
    },
  ].slice(0, 5)

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <BreadcrumbNav
          crumbs={[
            { name: "Home", href: "/" },
            { name: "Fax Cover Sheets", href: "/templates" },
            { name: sheet.name, href: `/templates/${slug}` },
          ]}
        />

        {/* Type badge */}
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="inline-flex items-center rounded-full bg-orange-100 dark:bg-orange-950/40 px-3 py-1 text-xs font-medium text-orange-700 dark:text-orange-300 capitalize">
            {sheet.type} cover sheet
          </span>
          {sheet.compliance && (
            <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-950/40 px-3 py-1 text-xs font-medium text-blue-700 dark:text-blue-300">
              {sheet.compliance} compliant
            </span>
          )}
          {sheet.industry && (
            <span className="inline-flex items-center rounded-full bg-green-100 dark:bg-green-950/40 px-3 py-1 text-xs font-medium text-green-700 dark:text-green-300 capitalize">
              {sheet.industry.replace("-", " ")}
            </span>
          )}
        </div>

        <header className="mt-4 mb-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {sheet.name}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{intro}</p>
        </header>

        {/* Cover sheet preview mockup */}
        <div className="mb-8 rounded-lg border-2 border-dashed border-muted-foreground/20 bg-muted/20 p-6">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="h-5 w-5 text-orange-500" />
            <p className="font-bold text-sm">Cover Sheet Preview</p>
            <span className="ml-auto text-xs text-muted-foreground">{sheet.previewImageAlt}</span>
          </div>
          {/* Field list as visual mockup */}
          <div className="space-y-2">
            {sheet.fields.map((field) => (
              <div key={field} className="flex items-center gap-3">
                <span className="text-xs font-semibold text-muted-foreground w-40 shrink-0">{field}</span>
                <div className="flex-1 h-5 rounded bg-muted/60 border border-muted-foreground/10" />
              </div>
            ))}
          </div>
        </div>

        {/* Fields included */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">Fields Included</h2>
          <div className="grid gap-2 sm:grid-cols-2">
            {sheet.fields.map((field) => (
              <div key={field} className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                <span>{field}</span>
              </div>
            ))}
          </div>
        </section>

        {/* When to use */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">When to Use This Cover Sheet</h2>
          <div className="grid gap-2 sm:grid-cols-2">
            {sheet.use_cases.map((useCase) => (
              <div key={useCase} className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-orange-500 shrink-0" />
                <span>{useCase}</span>
              </div>
            ))}
          </div>
        </section>

        {/* How to use with TigerFax */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">How to Use with TigerFax</h2>
          <ol className="space-y-4">
            {[
              {
                step: "Open TigerFax and compose a new fax",
                detail: "Scan or upload your document as usual.",
              },
              {
                step: "Tap 'Add Cover Page'",
                detail: `Select the ${sheet.name} from TigerFax's built-in template library. Fill in the required fields directly in the app.`,
              },
              {
                step: "Send your fax",
                detail: "The cover page is automatically prepended to your fax. The recipient receives it as the first page.",
              },
            ].map((item, i) => (
              <li key={i} className="flex gap-4">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white text-sm font-bold">
                  {i + 1}
                </div>
                <div>
                  <p className="font-semibold text-sm">{item.step}</p>
                  <p className="text-sm text-muted-foreground mt-0.5">{item.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Compliance note */}
        {(sheet.compliance || sheet.industry === "healthcare" || sheet.industry === "dental" || sheet.industry === "pharmacy" || sheet.industry === "mental-health" || sheet.industry === "physical-therapy") && (
          <div className="mb-8 flex items-start gap-3 rounded-lg border p-4 text-sm text-muted-foreground">
            <Shield className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-foreground mb-1">Compliance note</p>
              <p>
                {sheet.compliance === "HIPAA" || sheet.industry === "healthcare" || sheet.industry === "dental" || sheet.industry === "pharmacy" || sheet.industry === "mental-health" || sheet.industry === "physical-therapy"
                  ? "This cover sheet includes HIPAA-required confidentiality language. TigerFax transmits all faxes over encrypted connections to support HIPAA compliance."
                  : sheet.compliance === "FERPA"
                  ? "This cover sheet includes FERPA-required student privacy language for educational institutions."
                  : sheet.compliance === "GLBA"
                  ? "This cover sheet includes GLBA-required financial privacy language for financial institutions."
                  : "This cover sheet includes a comprehensive confidentiality notice for sensitive document transmittals."}
              </p>
            </div>
          </div>
        )}

        {/* Download CTA */}
        <div className="mb-8 rounded-lg border border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950/30 p-5">
          <div className="flex items-center gap-2 mb-2">
            <Download className="h-5 w-5 text-orange-500" />
            <p className="font-bold text-orange-700 dark:text-orange-300">Use TigerFax's Built-In Cover Pages</p>
          </div>
          <p className="text-sm text-orange-700 dark:text-orange-300 mb-3">
            Instead of printing and scanning a cover sheet, TigerFax adds it digitally — saving time and ensuring a clean, professional result every time.
          </p>
          <p className="text-xs text-orange-600 dark:text-orange-400">Free to start · iOS only · No fax machine needed</p>
        </div>

        <FAQSection faqs={faqs} title={`FAQ: ${sheet.name}`} />

        <RelatedPages pages={relatedPages} title="More cover sheet templates" />

        <CTABanner variant={cta} subtext="Built-in cover pages · Free to start · iOS only" />
      </div>
    </div>
  )
}
