import type { Metadata } from "next"
import Link from "next/link"
import { coverSheets, getCoverSheetsByType } from "@/data/cover-sheets"
import { BreadcrumbNav } from "@/components/pseo/BreadcrumbNav"
import { CTABanner } from "@/components/pseo/CTABanner"
import { FileText, Shield, Building2, Palette } from "lucide-react"

export const metadata: Metadata = {
  title: "Free Fax Cover Sheet Templates — TigerFax",
  description: `Browse ${coverSheets.length} free fax cover sheet templates — medical, legal, HIPAA, real estate, HR, and more. Use TigerFax's built-in cover pages on your iPhone.`,
  openGraph: {
    title: "Free Fax Cover Sheet Templates — TigerFax",
    description: "Free fax cover sheet templates for every industry and use case.",
    url: "https://www.tigerfax.com/templates",
  },
  alternates: { canonical: "https://www.tigerfax.com/templates" },
}

const industrySheets = getCoverSheetsByType("industry")
const styleSheets = getCoverSheetsByType("style")
const complianceSheets = getCoverSheetsByType("compliance")

export default function TemplatesHubPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <BreadcrumbNav
          crumbs={[
            { name: "Home", href: "/" },
            { name: "Fax Cover Sheets", href: "/templates" },
          ]}
        />

        <header className="mt-4 mb-10">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Free Fax Cover Sheet Templates
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {coverSheets.length} free fax cover sheet templates for every industry and use case. Use TigerFax&apos;s built-in cover pages on your iPhone — no printing required.
          </p>
        </header>

        {/* Industry cover sheets */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Building2 className="h-5 w-5 text-orange-500" />
            <h2 className="text-2xl font-bold">Industry Cover Sheets</h2>
          </div>
          <p className="text-muted-foreground mb-6">
            Specialized cover sheets with industry-specific fields for healthcare, legal, real estate, and more.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {industrySheets.map((sheet) => (
              <Link
                key={sheet.slug}
                href={`/templates/${sheet.slug}`}
                className="group flex flex-col gap-1 rounded-lg border p-4 hover:border-orange-300 hover:bg-orange-50/50 dark:hover:bg-orange-950/20 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-orange-500 shrink-0" />
                  <span className="font-medium text-sm group-hover:text-orange-600 transition-colors leading-tight">
                    {sheet.name}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2 mt-1">{sheet.description}</p>
                {sheet.industry && (
                  <span className="mt-1 self-start text-xs text-green-600 dark:text-green-400 capitalize">
                    {sheet.industry.replace("-", " ")}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </section>

        {/* Compliance cover sheets */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="h-5 w-5 text-blue-500" />
            <h2 className="text-2xl font-bold">Compliance Cover Sheets</h2>
          </div>
          <p className="text-muted-foreground mb-6">
            Cover sheets with required legal language for HIPAA, FERPA, GLBA, and other regulatory frameworks.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {complianceSheets.map((sheet) => (
              <Link
                key={sheet.slug}
                href={`/templates/${sheet.slug}`}
                className="group flex flex-col gap-1 rounded-lg border p-4 hover:border-blue-300 hover:bg-blue-50/50 dark:hover:bg-blue-950/20 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-blue-500 shrink-0" />
                  <span className="font-medium text-sm group-hover:text-blue-600 transition-colors leading-tight">
                    {sheet.name}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2 mt-1">{sheet.description}</p>
                {sheet.compliance && (
                  <span className="mt-1 self-start text-xs text-blue-600 dark:text-blue-400">
                    {sheet.compliance} compliant
                  </span>
                )}
              </Link>
            ))}
          </div>
        </section>

        {/* Style cover sheets */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Palette className="h-5 w-5 text-purple-500" />
            <h2 className="text-2xl font-bold">General Cover Sheets</h2>
          </div>
          <p className="text-muted-foreground mb-6">
            Professional, simple, confidential, and urgent cover sheets for any type of fax.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {styleSheets.map((sheet) => (
              <Link
                key={sheet.slug}
                href={`/templates/${sheet.slug}`}
                className="group flex flex-col gap-1 rounded-lg border p-4 hover:border-purple-300 hover:bg-purple-50/50 dark:hover:bg-purple-950/20 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-purple-500 shrink-0" />
                  <span className="font-medium text-sm group-hover:text-purple-600 transition-colors leading-tight">
                    {sheet.name}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2 mt-1">{sheet.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <CTABanner
          variant="Use TigerFax's Built-In Cover Pages"
          subtext="All cover sheet templates are built into TigerFax — add them to any fax in seconds, no printing required."
        />
      </div>
    </div>
  )
}
