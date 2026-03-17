import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { countries, getCountryBySlug, getSiblingCountries } from "@/data/countries"
import { pickVariant } from "@/lib/pseo/variety"
import { BreadcrumbNav } from "@/components/pseo/BreadcrumbNav"
import { CTABanner } from "@/components/pseo/CTABanner"
import { FAQSection } from "@/components/pseo/FAQSection"
import { StepByStep } from "@/components/pseo/StepByStep"
import { RelatedPages } from "@/components/pseo/RelatedPages"
import { CheckCircle, Hash } from "lucide-react"

const BASE_URL = "https://www.tigerfax.com"

interface Props {
  params: Promise<{ country: string }>
}

export async function generateStaticParams() {
  return countries.map((c) => ({ country: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country: countrySlug } = await params
  const country = getCountryBySlug(countrySlug)
  if (!country) return {}
  const title = `Get a Fax Number for ${country.name} — TigerFax Pro`
  const description = `Get a dedicated US fax number to send and receive faxes with ${country.name} contacts. TigerFax Pro — $4.99/month. No fax machine, no hardware.`
  return {
    title,
    description,
    alternates: { canonical: `${BASE_URL}/fax-number/${country.slug}` },
    openGraph: { title, description, url: `${BASE_URL}/fax-number/${country.slug}` },
  }
}

export default async function FaxNumberCountryPage({ params }: Props) {
  const { country: countrySlug } = await params
  const country = getCountryBySlug(countrySlug)
  if (!country) notFound()

  const intro = pickVariant(country.number_intro_variants, country.slug + "-number")
  const siblings = getSiblingCountries(country, 3)

  const steps = [
    {
      name: "Download TigerFax",
      text: "Install TigerFax from the App Store — free to start, no credit card required for the free tier.",
    },
    {
      name: "Upgrade to TigerFax Pro",
      text: "Subscribe to TigerFax Pro ($4.99/month) to unlock your dedicated US fax number. Cancel anytime.",
      tip: "Your dedicated number is assigned instantly — no waiting, no paperwork.",
    },
    {
      name: "Share your number with " + country.name + " contacts",
      text: "Give your TigerFax number to your " + country.name + " contacts. They dial it as an international call to the US (" + country.dialPrefix + " → US number).",
    },
    {
      name: "Send faxes to " + country.name,
      text: "Use TigerFax to send faxes to " + country.name + " from your iPhone. Dial " + country.dialPrefix + " followed by the local number. Format: " + country.faxFormat + ".",
    },
    {
      name: "Receive faxes from " + country.name,
      text: "Incoming faxes from " + country.name + " arrive as PDFs in your TigerFax inbox with instant push notifications.",
    },
  ]

  const faqs = [
    {
      question: `Can I get a fax number that works with ${country.name}?`,
      answer: `Yes. TigerFax Pro provides a dedicated US fax number that works for both sending faxes to ${country.name} and receiving faxes from ${country.name} contacts. Your ${country.name} contacts dial your US number as an international call.`,
    },
    {
      question: `How much does a fax number for ${country.name} cost?`,
      answer: `TigerFax Pro is $4.99/month and includes a dedicated US fax number, unlimited incoming faxes (within monthly page limits), and a credit allowance for outgoing faxes to ${country.name}. Cancel anytime.`,
    },
    {
      question: `Do I need a ${country.name} fax number specifically?`,
      answer: `For most use cases, a US fax number works perfectly — ${country.name} contacts can fax you internationally just like calling a US phone number. If you specifically need a local ${country.name} number, contact TigerFax support to discuss options.`,
    },
    {
      question: `Can I keep my fax number if I cancel TigerFax Pro?`,
      answer: `Your dedicated fax number is active as long as your Pro subscription is active. If you cancel, the number is released. You can resubscribe at any time to get a new dedicated number.`,
    },
  ]

  const relatedPages = [
    ...siblings.map((s) => ({
      href: `/fax-number/${s.slug}`,
      title: `Fax Number for ${s.name}`,
      description: `Get a fax number for ${s.name} contacts`,
    })),
    {
      href: `/send-fax/to-${country.slug}`,
      title: `Send Fax to ${country.name}`,
      description: `How to fax to ${country.name} from iPhone`,
    },
    {
      href: `/receive-fax/from-${country.slug}`,
      title: `Receive Fax from ${country.name}`,
      description: `Receive ${country.name} faxes on iPhone`,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <BreadcrumbNav
          crumbs={[
            { name: "Home", href: "/" },
            { name: "Fax Numbers", href: "/fax-number" },
            { name: country.name, href: `/fax-number/${country.slug}` },
          ]}
        />

        <header className="mt-6 mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-4xl">{country.flagEmoji}</span>
            <span className="text-sm font-medium text-muted-foreground bg-muted rounded-full px-3 py-1">
              {country.continent}
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Get a Fax Number for {country.name} Contacts
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{intro}</p>
        </header>

        {/* Dialing info card */}
        <div className="mb-8 rounded-lg border bg-muted/30 p-5">
          <div className="flex items-center gap-2 mb-4">
            <Hash className="h-5 w-5 text-orange-500" />
            <h3 className="font-bold">{country.name} Fax Details</h3>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">Country Code</p>
              <p className="text-xl font-bold text-orange-600">{country.dialPrefix}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">Number Format</p>
              <p className="font-mono font-semibold">{country.faxFormat}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">Timezone</p>
              <p className="font-semibold text-sm">{country.timezone}</p>
            </div>
          </div>
        </div>

        {/* Pro features */}
        <div className="mb-8 rounded-lg border border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950/30 p-5">
          <p className="font-bold text-orange-700 dark:text-orange-300 mb-3">
            What you get with TigerFax Pro
          </p>
          <div className="grid gap-2 sm:grid-cols-2">
            {[
              "Dedicated US fax number",
              `Send faxes to ${country.name}`,
              `Receive faxes from ${country.name}`,
              "Instant push notifications",
              "HIPAA-compliant",
              "$4.99/month — cancel anytime",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-orange-700 dark:text-orange-300">
                <CheckCircle className="h-4 w-4 shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Local stat */}
        <div className="mb-8 rounded-lg border-l-4 border-orange-400 bg-orange-50 dark:bg-orange-950/20 pl-4 pr-5 py-4">
          <p className="text-sm font-semibold text-orange-700 dark:text-orange-300 mb-1">
            Fax in {country.name}
          </p>
          <p className="text-sm text-orange-700 dark:text-orange-300">{country.local_stat}</p>
        </div>

        {/* Use cases */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">
            Why You Need a Fax Number for {country.name}
          </h2>
          <div className="grid gap-2 sm:grid-cols-2">
            {country.number_use_cases.map((useCase) => (
              <div key={useCase} className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                <span className="capitalize">{useCase}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Steps */}
        <section className="mb-8">
          <StepByStep
            title={`How to Get a Fax Number for ${country.name} — Step by Step`}
            steps={steps}
          />
        </section>

        <CTABanner variant="Get Your Dedicated Fax Number" subtext="TigerFax Pro · $4.99/month · Cancel anytime" />

        <section className="mt-8 mb-8">
          <FAQSection faqs={faqs} />
        </section>

        <RelatedPages pages={relatedPages} />
      </div>
    </div>
  )
}
