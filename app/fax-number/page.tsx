import type { Metadata } from "next"
import Link from "next/link"
import { CONTINENTS, getCountriesByContinent } from "@/data/countries"
import { BreadcrumbNav } from "@/components/pseo/BreadcrumbNav"
import { CTABanner } from "@/components/pseo/CTABanner"

export const metadata: Metadata = {
  title: "Get a Fax Number for Any Country — TigerFax Pro",
  description:
    "Get a dedicated US fax number to send and receive faxes with contacts in any country. TigerFax Pro — $4.99/month. No hardware, no fax machine.",
  alternates: { canonical: "https://www.tigerfax.com/fax-number" },
  openGraph: {
    title: "Get a Fax Number for Any Country | TigerFax",
    description: "Dedicated US fax number for international faxing. Works with contacts in 32+ countries. TigerFax Pro.",
    url: "https://www.tigerfax.com/fax-number",
  },
}

export default function FaxNumberHubPage() {
  const continentsWithCountries = CONTINENTS.filter(
    (c) => getCountriesByContinent(c).length > 0
  )

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <BreadcrumbNav
          crumbs={[
            { name: "Home", href: "/" },
            { name: "Fax Numbers", href: "/fax-number" },
          ]}
        />

        <header className="mt-6 mb-10">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Get a Fax Number for International Contacts
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            TigerFax Pro gives you a dedicated US fax number that works for both sending and receiving faxes with
            contacts in any country. Select your country below to see how it works.
          </p>
        </header>

        {/* Pro pricing callout */}
        <div className="mb-10 grid gap-4 sm:grid-cols-3">
          {[
            { label: "Monthly price", value: "$4.99" },
            { label: "Setup fee", value: "$0" },
            { label: "Countries supported", value: "32+" },
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
                    href={`/fax-number/${country.slug}`}
                    className="flex items-center gap-3 rounded-lg border p-3 hover:border-orange-300 hover:bg-orange-50/50 dark:hover:bg-orange-950/20 transition-colors"
                  >
                    <span className="text-2xl">{country.flagEmoji}</span>
                    <div className="min-w-0">
                      <p className="font-medium text-sm truncate">Fax Number for {country.name}</p>
                      <p className="text-xs text-muted-foreground font-mono">{country.dialPrefix}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )
        })}

        <CTABanner variant="Get Your Dedicated Fax Number" subtext="TigerFax Pro · $4.99/month · Cancel anytime" />
      </div>
    </div>
  )
}
