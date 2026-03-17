import type { Metadata } from "next"
import Link from "next/link"
import { CONTINENTS, getCountriesByContinent } from "@/data/countries"
import { BreadcrumbNav } from "@/components/pseo/BreadcrumbNav"
import { CTABanner } from "@/components/pseo/CTABanner"

export const metadata: Metadata = {
  title: "Receive Faxes from Any Country on iPhone — TigerFax Pro",
  description:
    "Get a dedicated fax number to receive faxes from any country directly on your iPhone. No fax machine needed. TigerFax Pro — $4.99/month.",
  alternates: { canonical: "https://www.tigerfax.com/receive-fax" },
  openGraph: {
    title: "Receive International Faxes on iPhone | TigerFax",
    description: "Receive faxes from any country on your iPhone with TigerFax Pro. Dedicated number, instant notifications.",
    url: "https://www.tigerfax.com/receive-fax",
  },
}

export default function ReceiveFaxHubPage() {
  const continentsWithCountries = CONTINENTS.filter(
    (c) => getCountriesByContinent(c).length > 0
  )

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <BreadcrumbNav
          crumbs={[
            { name: "Home", href: "/" },
            { name: "Receive Fax", href: "/receive-fax" },
          ]}
        />

        <header className="mt-6 mb-10">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Receive Faxes from Any Country on Your iPhone
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            TigerFax Pro gives you a dedicated US fax number that accepts incoming faxes from anywhere in the world.
            Select your country below to learn how contacts in that country can fax you directly on your iPhone.
          </p>
        </header>

        {/* Pro callout */}
        <div className="mb-10 rounded-lg border border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950/30 p-5">
          <p className="font-bold text-orange-700 dark:text-orange-300 mb-1">TigerFax Pro — $4.99/month</p>
          <p className="text-sm text-orange-700 dark:text-orange-300">
            Includes a dedicated US fax number, unlimited incoming faxes (within monthly page limits), instant push
            notifications, and HIPAA-compliant storage. Cancel anytime.
          </p>
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
                    href={`/receive-fax/from-${country.slug}`}
                    className="flex items-center gap-3 rounded-lg border p-3 hover:border-orange-300 hover:bg-orange-50/50 dark:hover:bg-orange-950/20 transition-colors"
                  >
                    <span className="text-2xl">{country.flagEmoji}</span>
                    <div className="min-w-0">
                      <p className="font-medium text-sm truncate">Receive from {country.name}</p>
                      <p className="text-xs text-muted-foreground">{country.timezone}</p>
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
