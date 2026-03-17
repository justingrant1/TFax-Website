import { notFound } from "next/navigation"
import type { Metadata } from "next"
import {
  competitors,
  getCompetitorBySlug,
  getPageType,
  getSiblingCompetitors,
  getAllComparePageSlugs,
  type ComparePageType,
} from "@/data/competitors"
import { pickVariant } from "@/lib/pseo/variety"
import { buildSoftwareAppSchema } from "@/lib/pseo/schema"
import { BreadcrumbNav } from "@/components/pseo/BreadcrumbNav"
import { FAQSection } from "@/components/pseo/FAQSection"
import { CTABanner } from "@/components/pseo/CTABanner"
import { RelatedPages } from "@/components/pseo/RelatedPages"
import { ComparisonTable } from "@/components/pseo/ComparisonTable"
import { CheckCircle, XCircle, Trophy, DollarSign, Smartphone, Shield } from "lucide-react"

// ─── Static params ────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return getAllComparePageSlugs().map((slug) => ({ slug }))
}

// ─── Metadata ─────────────────────────────────────────────────────────────────
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const competitor = getCompetitorBySlug(slug)
  if (!competitor) return {}

  const type = getPageType(slug)

  const titles: Record<ComparePageType, string> = {
    vs: `TigerFax vs ${competitor.name}: Which Is Better in 2026?`,
    alternative: `Best ${competitor.name} Alternative for iPhone (2026)`,
    review: `${competitor.name} Review 2026: Honest Assessment`,
    pricing: `${competitor.name} Pricing 2026: Full Breakdown & Comparison`,
  }

  const descriptions: Record<ComparePageType, string> = {
    vs: `TigerFax vs ${competitor.name}: side-by-side feature comparison, pricing, and verdict. See why TigerFax is the better choice for iPhone users in 2026.`,
    alternative: `Looking for a ${competitor.name} alternative? TigerFax is free to start, built for iPhone, and costs $4.99/month for Pro. Full comparison inside.`,
    review: `${competitor.name} review 2026: features, pricing, pros and cons. Is it worth it? We compare it to TigerFax so you can decide.`,
    pricing: `${competitor.name} pricing breakdown 2026: every plan, hidden fees, and how it compares to TigerFax's $4.99/month Pro plan.`,
  }

  const title = titles[type]
  const description = descriptions[type]

  return {
    title,
    description,
    keywords: [competitor.primary_keyword, ...competitor.secondary_keywords].join(", "),
    openGraph: { title, description, type: "article", url: `https://www.tigerfax.app/compare/${slug}` },
    twitter: { card: "summary_large_image", title, description },
    alternates: { canonical: `https://www.tigerfax.app/compare/${slug}` },
  }
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default async function ComparePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const competitor = getCompetitorBySlug(slug)
  if (!competitor) notFound()

  const type = getPageType(slug)
  const siblings = getSiblingCompetitors(competitor, 3)

  // Pick intro variant based on page type
  const introVariants: Record<ComparePageType, string[]> = {
    vs: competitor.intro_variants,
    alternative: competitor.alternative_intro_variants,
    review: competitor.review_intro_variants,
    pricing: competitor.pricing_intro_variants,
  }
  const intro = pickVariant(introVariants[type], slug)

  // H1 per type
  const h1s: Record<ComparePageType, string> = {
    vs: `TigerFax vs ${competitor.name}: Which Fax App Is Better in 2026?`,
    alternative: `Best ${competitor.name} Alternative for iPhone (2026)`,
    review: `${competitor.name} Review 2026: Is It Worth It?`,
    pricing: `${competitor.name} Pricing 2026: Complete Breakdown`,
  }

  const relatedPages = [
    ...siblings.map((c) => ({
      href: `/compare/tigerfax-vs-${c.slug}`,
      title: `TigerFax vs ${c.name}`,
      description: `Side-by-side comparison of TigerFax and ${c.name}`,
    })),
    {
      href: "/how-to/fax-from-iphone",
      title: "How to Fax from iPhone",
      description: "Step-by-step guide to sending faxes from any iPhone",
    },
  ]

  // TigerFax wins count
  const tfFeatures = {
    sendFax: true, receiveFax: true, dedicatedNumber: true, hipaaCompliant: true,
    mobileApp: true, iosApp: true, androidApp: false, emailToFax: false,
    cloudIntegrations: true, coverPage: true, batchFax: false, ocrScanning: true,
    internationalFax: true, faxHistory: true, deliveryConfirmation: true,
  }
  const featureKeys = Object.keys(tfFeatures) as Array<keyof typeof tfFeatures>
  const tfWins = featureKeys.filter((k) => tfFeatures[k] && !competitor.features[k]).length
  const compWins = featureKeys.filter((k) => !tfFeatures[k] && competitor.features[k]).length

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSoftwareAppSchema()) }}
      />

      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <BreadcrumbNav
          crumbs={[
            { name: "Home", href: "/" },
            { name: "Compare", href: "/compare" },
            { name: h1s[type], href: `/compare/${slug}` },
          ]}
        />

        {/* Type badge */}
        <div className="mt-4">
          <span className="inline-flex items-center rounded-full bg-orange-100 dark:bg-orange-950/40 px-3 py-1 text-xs font-medium text-orange-700 dark:text-orange-300 capitalize">
            {type === "vs" ? "Comparison" : type === "alternative" ? "Alternative" : type === "review" ? "Review" : "Pricing"}
          </span>
          <span className="ml-2 inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
            {competitor.type === "enterprise" ? "Enterprise" : competitor.type === "mobile-first" ? "Mobile-First" : "Consumer"} app
          </span>
        </div>

        {/* Hero */}
        <header className="mt-4">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{h1s[type]}</h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{intro}</p>
        </header>

        {/* Quick verdict (vs + alternative pages) */}
        {(type === "vs" || type === "alternative") && (
          <div className="mt-8 rounded-lg border border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950/30 p-5">
            <div className="flex items-center gap-2 mb-3">
              <Trophy className="h-5 w-5 text-orange-500" />
              <p className="font-bold text-orange-700 dark:text-orange-300">Quick Verdict</p>
            </div>
            <p className="text-sm text-orange-700 dark:text-orange-300 leading-relaxed">{competitor.verdict}</p>
            <div className="mt-3 flex gap-4 text-xs text-orange-600 dark:text-orange-400">
              <span className="font-semibold">TigerFax wins: {tfWins} features</span>
              <span>{competitor.name} wins: {compWins} features</span>
            </div>
          </div>
        )}

        {/* Pricing comparison (pricing page) */}
        {type === "pricing" && (
          <section className="mt-8">
            <div className="flex items-center gap-2 mb-4">
              <DollarSign className="h-5 w-5 text-orange-500" />
              <h2 className="text-xl font-bold">{competitor.name} Pricing vs TigerFax</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border p-5">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">{competitor.name}</p>
                <p className="text-3xl font-bold">
                  {competitor.pricing.free ? "Free" : `$${competitor.pricing.startingPrice}`}
                  {!competitor.pricing.free && <span className="text-base font-normal text-muted-foreground">/mo</span>}
                </p>
                {competitor.pricing.free && (
                  <p className="text-sm text-muted-foreground mt-1">then ${competitor.pricing.startingPrice}/mo</p>
                )}
                {competitor.pricing.freePageLimit && (
                  <p className="text-xs text-amber-600 mt-2">⚠️ Free tier: {competitor.pricing.freePageLimit} pages only</p>
                )}
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {competitor.pros.slice(0, 3).map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />{p}
                    </li>
                  ))}
                  {competitor.cons.slice(0, 2).map((c) => (
                    <li key={c} className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />{c}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border border-orange-300 bg-orange-50 dark:bg-orange-950/20 p-5">
                <p className="text-xs font-semibold text-orange-600 uppercase tracking-wide mb-2">TigerFax</p>
                <p className="text-3xl font-bold text-orange-600">Free</p>
                <p className="text-sm text-muted-foreground mt-1">then $4.99/mo Pro</p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />Free to start — no credit card</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />$4.99/mo for unlimited sending</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />Dedicated US fax number included</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />HIPAA-compliant faxing</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />Built for iPhone — camera scanning</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* Feature comparison table */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold mb-4">
            {type === "pricing" ? "Feature Comparison" : `TigerFax vs ${competitor.name}: Feature Comparison`}
          </h2>
          <ComparisonTable competitor={competitor} />
        </section>

        {/* TigerFax advantage */}
        <section className="mt-10">
          <div className="flex items-center gap-2 mb-3">
            <Smartphone className="h-5 w-5 text-orange-500" />
            <h2 className="text-xl font-bold">Why iPhone Users Choose TigerFax</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">{competitor.tigerFaxAdvantage}</p>
        </section>

        {/* Pros/Cons (review page) */}
        {type === "review" && (
          <section className="mt-10">
            <h2 className="text-2xl font-bold mb-6">{competitor.name} Pros & Cons</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="font-bold text-green-700 dark:text-green-400 mb-3 flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" /> Pros
                </h3>
                <ul className="space-y-2">
                  {competitor.pros.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />{p}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-red-600 dark:text-red-400 mb-3 flex items-center gap-2">
                  <XCircle className="h-4 w-4" /> Cons
                </h3>
                <ul className="space-y-2">
                  {competitor.cons.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <XCircle className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />{c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* Who should use each (vs page) */}
        {type === "vs" && (
          <section className="mt-10">
            <h2 className="text-2xl font-bold mb-6">Who Should Use Each App?</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-orange-200 bg-orange-50/50 dark:bg-orange-950/20 p-5">
                <p className="font-bold text-orange-700 dark:text-orange-300 mb-3">Choose TigerFax if you…</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />Use an iPhone or iPad</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />Want to start for free</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />Need HIPAA-compliant faxing</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />Want camera scanning with LiDAR support</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />Need a simple, modern mobile experience</li>
                </ul>
              </div>
              <div className="rounded-lg border p-5">
                <p className="font-bold mb-3">Choose {competitor.name} if you…</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {competitor.pros.slice(0, 4).map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />{p}
                    </li>
                  ))}
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />{competitor.targetAudience}
                  </li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* HIPAA note */}
        <div className="mt-8 flex items-start gap-3 rounded-lg border p-4 text-sm text-muted-foreground">
          <Shield className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
          <p>
            TigerFax transmits all faxes over encrypted connections and supports HIPAA-compliant faxing with confidentiality cover pages.
            {!competitor.features.hipaaCompliant && ` ${competitor.name} does not advertise HIPAA compliance.`}
          </p>
        </div>

        {/* FAQ */}
        <FAQSection faqs={competitor.faqs} title={`FAQ: ${competitor.name} vs TigerFax`} />

        {/* Related */}
        <RelatedPages pages={relatedPages} title="More Comparisons" />

        {/* CTA */}
        <CTABanner
          variant={`Try TigerFax Free — No Credit Card Required`}
          subtext={`Switch from ${competitor.name} in minutes · iOS only`}
        />
      </div>
    </div>
  )
}
