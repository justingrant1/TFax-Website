import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { countries, getCountryBySlug, getSiblingCountries } from "@/data/countries"
import { pickVariant } from "@/lib/pseo/variety"
import { BreadcrumbNav } from "@/components/pseo/BreadcrumbNav"
import { CTABanner } from "@/components/pseo/CTABanner"
import { FAQSection } from "@/components/pseo/FAQSection"
import { StepByStep } from "@/components/pseo/StepByStep"
import { RelatedPages } from "@/components/pseo/RelatedPages"
import { CheckCircle, Inbox } from "lucide-react"

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
  const title = `Receive Faxes from ${country.name} on iPhone — TigerFax`
  const description = `Get a dedicated fax number to receive faxes from ${country.name} directly on your iPhone. No fax machine needed. TigerFax Pro — $14.99/month.`
  return {
    title,
    description,
    alternates: { canonical: `${BASE_URL}/receive-fax/from-${country.slug}` },
    openGraph: { title, description, url: `${BASE_URL}/receive-fax/from-${country.slug}` },
  }
}

export default async function ReceiveFaxFromCountryPage({ params }: Props) {
  const { country: countrySlug } = await params
  const country = getCountryBySlug(countrySlug)
  if (!country) notFound()

  const intro = pickVariant(country.receive_intro_variants, country.slug + "-receive")
  const siblings = getSiblingCountries(country, 3)

  const steps = [
    {
      name: "Upgrade to TigerFax Pro",
      text: "Subscribe to TigerFax Pro ($14.99/month) to get a dedicated US fax number that accepts incoming faxes from anywhere in the world, including " + country.name + ".",
    },
    {
      name: "Share your fax number",
      text: "Give your dedicated TigerFax number to your " + country.name + " contacts. They can fax you from any fax machine or online fax service.",
      tip: "Your TigerFax number is a standard US number — " + country.name + " senders dial it as an international call to the US.",
    },
    {
      name: "Receive faxes instantly",
      text: "When a fax arrives from " + country.name + ", you get an instant push notification on your iPhone. Open TigerFax to view, download, or forward the fax.",
    },
    {
      name: "View and manage your faxes",
      text: "All received faxes are stored in your TigerFax inbox as PDFs. You can view, share, print, or archive them directly from your iPhone.",
    },
  ]

  const faqs = [
    {
      question: `Can I receive faxes from ${country.name} on my iPhone?`,
      answer: `Yes. TigerFax Pro gives you a dedicated US fax number that accepts incoming faxes from ${country.name} and anywhere else in the world. Faxes arrive as PDFs in your TigerFax inbox with an instant push notification.`,
    },
    {
      question: `How do ${country.name} contacts fax me using TigerFax?`,
      answer: `Your TigerFax Pro number is a standard US fax number. ${country.name} contacts dial it as an international call to the US (${country.dialPrefix} is their outgoing country code, then they dial the US number). TigerFax receives it and delivers it to your iPhone.`,
    },
    {
      question: `Is there a limit on how many faxes I can receive from ${country.name}?`,
      answer: `TigerFax Pro includes a generous monthly allowance of incoming fax pages. Most users never hit the limit. If you receive high volumes, additional pages are available at a low per-page rate.`,
    },
    {
      question: `Can I receive faxes from ${country.name} 24/7?`,
      answer: `Yes. Your TigerFax Pro number is always active — you can receive faxes from ${country.name} at any time, even when your iPhone is off or in airplane mode. Faxes are stored in your inbox and delivered when you reconnect.`,
    },
  ]

  const relatedPages = [
    ...siblings.map((s) => ({
      href: `/receive-fax/from-${s.slug}`,
      title: `Receive Fax from ${s.name}`,
      description: `Get a number to receive ${s.name} faxes`,
    })),
    {
      href: `/send-fax/to-${country.slug}`,
      title: `Send Fax to ${country.name}`,
      description: `How to fax to ${country.name} from iPhone`,
    },
    {
      href: `/fax-number/${country.slug}`,
      title: `Get a ${country.name} Fax Number`,
      description: `Dedicated fax number for ${country.name}`,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <BreadcrumbNav
          crumbs={[
            { name: "Home", href: "/" },
            { name: "Receive Fax", href: "/receive-fax" },
            { name: country.name, href: `/receive-fax/from-${country.slug}` },
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
            Receive Faxes from {country.name} on Your iPhone
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{intro}</p>
        </header>

        {/* Pro feature callout */}
        <div className="mb-8 rounded-lg border border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950/30 p-5">
          <div className="flex items-center gap-2 mb-3">
            <Inbox className="h-5 w-5 text-orange-500" />
            <p className="font-bold text-orange-700 dark:text-orange-300">TigerFax Pro — Receive Faxes</p>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            {[
              "Dedicated US fax number",
              "Receive from any country",
              "Instant push notifications",
              "PDFs stored in your inbox",
              "HIPAA-compliant",
              "$14.99/month — cancel anytime",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-orange-700 dark:text-orange-300">
                <CheckCircle className="h-4 w-4 shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Local stat */}
        <div className="mb-8 rounded-lg border-l-4 border-blue-400 bg-blue-50 dark:bg-blue-950/20 pl-4 pr-5 py-4">
          <p className="text-sm font-semibold text-blue-700 dark:text-blue-300 mb-1">
            Fax in {country.name}
          </p>
          <p className="text-sm text-blue-700 dark:text-blue-300">{country.local_stat}</p>
        </div>

        {/* Common receive use cases */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">
            What {country.name} Contacts Typically Fax You
          </h2>
          <div className="grid gap-2 sm:grid-cols-2">
            {country.receive_use_cases.map((useCase) => (
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
            title={`How to Receive Faxes from ${country.name} — Step by Step`}
            steps={steps}
          />
        </section>

        <CTABanner variant="Get Your Dedicated Fax Number" subtext="TigerFax Pro · $14.99/month · Cancel anytime" />

        <section className="mt-8 mb-8">
          <FAQSection faqs={faqs} />
        </section>

        <RelatedPages pages={relatedPages} />
      </div>
    </div>
  )
}
