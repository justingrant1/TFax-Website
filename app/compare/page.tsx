import type { Metadata } from "next"
import Link from "next/link"
import { competitors } from "@/data/competitors"
import { BreadcrumbNav } from "@/components/pseo/BreadcrumbNav"
import { CTABanner } from "@/components/pseo/CTABanner"
import { CheckCircle, XCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "TigerFax vs Other Fax Apps — Comparisons & Reviews | TigerFax",
  description:
    "Compare TigerFax to eFax, Fax.Plus, iFax, FaxBurner, and more. Side-by-side feature comparisons, pricing breakdowns, and honest reviews to help you choose the best fax app for iPhone.",
  alternates: { canonical: "https://www.tigerfax.com/compare" },
  openGraph: {
    title: "TigerFax vs Other Fax Apps | TigerFax",
    description: "Compare TigerFax to every major fax app. Feature tables, pricing, and honest reviews.",
    url: "https://www.tigerfax.com/compare",
  },
}

const PAGE_TYPES = [
  { suffix: (slug: string) => `tigerfax-vs-${slug}`, label: "vs TigerFax", description: "Side-by-side comparison" },
  { suffix: (slug: string) => `${slug}-alternative`, label: "Alternative", description: "Best alternative guide" },
  { suffix: (slug: string) => `${slug}-review`, label: "Review", description: "Honest 2026 review" },
  { suffix: (slug: string) => `${slug}-pricing`, label: "Pricing", description: "Full pricing breakdown" },
]

export default function CompareHubPage() {
  const enterprise = competitors.filter((c) => c.type === "enterprise")
  const consumer = competitors.filter((c) => c.type === "consumer")
  const mobile = competitors.filter((c) => c.type === "mobile-first")

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <BreadcrumbNav
          crumbs={[
            { name: "Home", href: "/" },
            { name: "Compare", href: "/compare" },
          ]}
        />

        <header className="mt-6 mb-10">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            TigerFax vs Other Fax Apps
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Honest comparisons, pricing breakdowns, and reviews of every major fax app — so you can make the right choice for your iPhone.
          </p>
        </header>

        {/* TigerFax quick summary */}
        <div className="mb-10 rounded-lg border border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950/30 p-5">
          <p className="font-bold text-orange-700 dark:text-orange-300 mb-3">Why TigerFax wins for iPhone users</p>
          <div className="grid gap-2 sm:grid-cols-2">
            {[
              "Free to start — no credit card required",
              "$4.99/month Pro (vs $10–$30/month competitors)",
              "Built exclusively for iPhone & iPad",
              "HIPAA-compliant faxing",
              "Camera scanning with LiDAR support",
              "Dedicated US fax number on Pro",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-orange-700 dark:text-orange-300">
                <CheckCircle className="h-4 w-4 shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile-first competitors */}
        {mobile.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-1">Mobile-First Fax Apps</h2>
            <p className="text-sm text-muted-foreground mb-5">Apps built for smartphones — TigerFax's closest competitors</p>
            <CompetitorGrid competitors={mobile} />
          </section>
        )}

        {/* Consumer competitors */}
        {consumer.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-1">Consumer Fax Services</h2>
            <p className="text-sm text-muted-foreground mb-5">Web-based fax services with mobile apps</p>
            <CompetitorGrid competitors={consumer} />
          </section>
        )}

        {/* Enterprise competitors */}
        {enterprise.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-1">Enterprise Fax Services</h2>
            <p className="text-sm text-muted-foreground mb-5">Business-grade fax platforms — usually overkill for individual iPhone users</p>
            <CompetitorGrid competitors={enterprise} />
          </section>
        )}

        <CTABanner variant="Try TigerFax Free" subtext="No credit card required · iOS only · Free to start" />
      </div>
    </div>
  )
}

function CompetitorGrid({ competitors: comps }: { competitors: typeof competitors }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {comps.map((c) => (
        <div key={c.slug} className="rounded-lg border p-5">
          <div className="flex items-start justify-between mb-2">
            <div>
              <p className="font-bold">{c.name}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{c.tagline}</p>
            </div>
            <span className="text-xs font-medium text-muted-foreground bg-muted rounded px-2 py-0.5">
              {c.pricing.free ? "Free tier" : `$${c.pricing.startingPrice}/mo`}
            </span>
          </div>
          <p className="text-xs text-muted-foreground mb-4 leading-relaxed line-clamp-2">{c.verdict}</p>
          <div className="grid grid-cols-2 gap-2">
            <Link
              href={`/compare/tigerfax-vs-${c.slug}`}
              className="text-center text-xs font-medium rounded-md border px-3 py-2 hover:border-orange-300 hover:bg-orange-50/50 dark:hover:bg-orange-950/20 transition-colors"
            >
              TigerFax vs {c.name}
            </Link>
            <Link
              href={`/compare/${c.slug}-alternative`}
              className="text-center text-xs font-medium rounded-md border px-3 py-2 hover:border-orange-300 hover:bg-orange-50/50 dark:hover:bg-orange-950/20 transition-colors"
            >
              {c.name} Alternative
            </Link>
            <Link
              href={`/compare/${c.slug}-review`}
              className="text-center text-xs font-medium rounded-md border px-3 py-2 hover:border-orange-300 hover:bg-orange-50/50 dark:hover:bg-orange-950/20 transition-colors"
            >
              {c.name} Review
            </Link>
            <Link
              href={`/compare/${c.slug}-pricing`}
              className="text-center text-xs font-medium rounded-md border px-3 py-2 hover:border-orange-300 hover:bg-orange-50/50 dark:hover:bg-orange-950/20 transition-colors"
            >
              {c.name} Pricing
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}
