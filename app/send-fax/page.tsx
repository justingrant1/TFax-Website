import type { Metadata } from "next"
import Link from "next/link"
import { countries, CONTINENTS, getCountriesByContinent } from "@/data/countries"
import { BreadcrumbNav } from "@/components/pseo/BreadcrumbNav"
import { CTABanner } from "@/components/pseo/CTABanner"

export const metadata: Metadata = {
  title: "Send a Fax Internationally from iPhone — Country Guides | TigerFax",
  description:
    "Step-by-step guides for sending a fax to any country from your iPhone. Dialing formats, country codes, and tips for 32+ countries. Free to start with TigerFax.",
  alternates: { canonical: "https://www.tigerfax.com/send-fax" },
  openGraph: {
    title: "Send International Fax from iPhone | TigerFax",
    description: "Country-by-country guides for sending faxes from your iPhone. Dialing formats and tips for 32+ countries.",
    url: "https://www.tigerfax.com/send-fax",
  },
}

export default function SendFaxHubPage() {
  const continentsWithCountries = CONTINENTS.filter(
    (c) => getCountriesByContinent(c).length > 0
  )

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <BreadcrumbNav
          crumbs={[
            { name: "Home", href: "/" },
            { name: "Send Fax", href: "/send-fax" },
          ]}
        />

        <header className="mt-6 mb-10">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Send a Fax Internationally from Your iPhone
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Country-by-country guides for sending faxes from your iPhone. Each guide includes the correct dialing format,
            country code, timezone tips, and step-by-step instructions — so your fax reaches its destination every time.
          </p>
        </header>

        {/* Quick stats */}
        <div className="mb-10 grid gap-4 sm:grid-cols-3">
          {[
            { label: "Countries covered", value: `${countries.length}+` },
            { label: "Free to start", value: "No credit card" },
            { label: "Delivery time", value: "1–3 minutes" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-lg border bg-muted/30 p-4 text-center">
              <p className="text-2xl font-bold text-orange-600">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Countries by continent */}
        {continentsWithCountries.map((continent) => {
          const continentCountries = getCountriesByContinent(continent)
          return (
            <section key={continent} className="mb-10">
              <h2 className="text-xl font-bold mb-4 pb-2 border-b">{continent}</h2>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {continentCountries.map((country) => (
                  <Link
                    key={country.slug}
                    href={`/send-fax/to-${country.slug}`}
                    className="flex items-center gap-3 rounded-lg border p-3 hover:border-orange-300 hover:bg-orange-50/50 dark:hover:bg-orange-950/20 transition-colors"
                  >
                    <span className="text-2xl">{country.flagEmoji}</span>
                    <div className="min-w-0">
                      <p className="font-medium text-sm truncate">Send Fax to {country.name}</p>
                      <p className="text-xs text-muted-foreground font-mono">{country.dialPrefix} · {country.faxFormat}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )
        })}

        <CTABanner variant="Send Your First International Fax Free" subtext="No fax machine needed · iOS only · Free to start" />
      </div>
    </div>
  )
}
