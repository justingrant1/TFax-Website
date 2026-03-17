import type { Metadata } from "next"
import Link from "next/link"
import { documentTypes } from "@/data/document-types"
import { BreadcrumbNav } from "@/components/pseo/BreadcrumbNav"
import { CTABanner } from "@/components/pseo/CTABanner"
import { FileText, Shield, Briefcase, Building2, Heart, Scale, Home, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Fax Document Guides — How to Fax Any Document from iPhone | TigerFax",
  description:
    "Step-by-step guides for faxing every type of document from your iPhone. W-9s, medical records, contracts, tax forms, and more — free with TigerFax.",
  alternates: { canonical: "https://www.tigerfax.app/guides" },
  openGraph: {
    title: "Fax Document Guides | TigerFax",
    description: "How to fax any document from your iPhone — step-by-step guides for every document type.",
    url: "https://www.tigerfax.app/guides",
  },
}

const categoryConfig: Record<string, { label: string; icon: React.ElementType; description: string }> = {
  tax: { label: "Tax Documents", icon: Building2, description: "W-9, W-2, 1099, tax returns" },
  medical: { label: "Medical Documents", icon: Heart, description: "Medical records, prescriptions, lab results" },
  legal: { label: "Legal Documents", icon: Scale, description: "Contracts, NDAs, court documents, POA" },
  business: { label: "Business Documents", icon: Briefcase, description: "Invoices, purchase orders" },
  government: { label: "Government Forms", icon: Building2, description: "Immigration forms, government filings" },
  "real-estate": { label: "Real Estate", icon: Home, description: "Offer letters, lease agreements" },
  hr: { label: "HR Documents", icon: Users, description: "Employment verification, I-9 forms" },
  general: { label: "General Files", icon: FileText, description: "PDFs, photos, and other files" },
}

const categories = Object.keys(categoryConfig) as Array<keyof typeof categoryConfig>

export default function GuidesHubPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <BreadcrumbNav
          crumbs={[
            { name: "Home", href: "/" },
            { name: "Fax Guides", href: "/guides" },
          ]}
        />

        <header className="mt-6 mb-10">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How to Fax Any Document from iPhone
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Step-by-step guides for faxing every type of document — from W-9s and medical records to contracts and invoices.
          </p>
        </header>

        {/* Security callout */}
        <div className="mb-10 flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/30 p-4">
          <Shield className="h-5 w-5 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
          <p className="text-sm text-green-700 dark:text-green-300">
            All faxes sent with TigerFax are transmitted over encrypted connections. Sensitive documents like medical records and tax forms are never stored on third-party servers after transmission.
          </p>
        </div>

        {/* Category sections */}
        {categories.map((cat) => {
          const docs = documentTypes.filter((d) => d.category === cat)
          if (docs.length === 0) return null
          const config = categoryConfig[cat]
          const Icon = config.icon

          return (
            <section key={cat} className="mb-10">
              <div className="flex items-center gap-2 mb-1">
                <Icon className="h-5 w-5 text-orange-500" />
                <h2 className="text-xl font-bold">{config.label}</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{config.description}</p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {docs.map((doc) => (
                  <Link
                    key={doc.slug}
                    href={`/guides/fax-${doc.slug}`}
                    className="group flex flex-col gap-1 rounded-lg border p-4 hover:border-orange-300 hover:bg-orange-50/50 dark:hover:bg-orange-950/20 transition-colors"
                  >
                    <span className="font-semibold text-sm group-hover:text-orange-600 transition-colors">
                      How to Fax a {doc.name}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {doc.isSensitive ? "🔒 Sensitive · " : ""}
                      {doc.isMultiPage ? "Multi-page" : "Single page"}
                      {doc.compliance && doc.compliance.length > 0 ? ` · ${doc.compliance.join(", ")}` : ""}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )
        })}

        <CTABanner variant="Fax Any Document Free" subtext="Free to start · No credit card required · iOS only" />
      </div>
    </div>
  )
}
