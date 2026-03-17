import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { countries, getCountryBySlug, getSiblingCountries } from "@/data/countries"
import { pickVariant } from "@/lib/pseo/variety"
import { BreadcrumbNav } from "@/components/pseo/BreadcrumbNav"
import { CTABanner } from "@/components/pseo/CTABanner"
import { FAQSection } from "@/components/pseo/FAQSection"
import { StepByStep } from "@/components/pseo/StepByStep"
import { RelatedPages } from "@/components/pseo/RelatedPages"
import { DialingFormatSection } from "@/components/pseo/DialingFormatSection"
import { CheckCircle } from "lucide-react"

const BASE_URL = "https://www.tigerfax.com"

interface Props {
  params: Promise<{ country: string }>
}

export async function generateStaticParams() {
  return countries.map((c) => ({ country: `to-${c.slug}` }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country: countryParam } = await params
  const countrySlug = countryParam.replace("to-", "")
  const country = getCountryBySlug(countrySlug)
  if (!country) return {}
  const title = `Send a Fax to ${country.name} from iPhone — TigerFax`
  const description = `How to send a fax to ${country.name} from your iPhone. Dial ${country.dialPrefix}, format: ${country.faxFormat}. Free to start — no fax machine needed.`
  return {
    title,
    description,
    alternates: { canonical: `${BASE_URL}/send-fax/to-${country.slug}` },
    openGraph: { title, description, url: `${BASE_URL}/send-fax/to-${country.slug}` },
  }
}

export default async function SendFaxToCountryPage({ params }: Props) {
  const { country: countryParam } = await params
  const countrySlug = countryParam.replace("to-", "")
  const country = getCountryBySlug(countrySlug)
  if (!country) notFound()

  const intro = pickVariant(country.intro_variants, country.slug)
  const cta = pickVariant(country.cta_variants, country.slug)
  const siblings = getSiblingCountries(country, 3)

  const steps = [
    {
      name: "Download TigerFax",
      text: "Install TigerFax from the App Store — free to start, no credit card required.",
      tip: "TigerFax is iOS-only and works on iPhone and iPad.",
    },
    {
      name: "Sign in or create an account",
      text: "Create a free account with your Apple ID or email address.",
    },
    {
      name: "Scan or upload your document",
      text: "Use your iPhone camera to scan a physical document, or upload a PDF, photo, or file from the Files app.",
      tip: "TigerFax supports PDF, JPG, PNG, and multi-page documents.",
    },
    {
      name: `Enter the ${country.name} fax number`,
      text: `Dial ${country.dialPrefix} followed by the local fax number. Format: ${country.faxFormat}. TigerFax automatically formats international numbers.`,
      tip: country.hasSpecialFormat
        ? `${country.name} uses a specific format — double-check the number before sending.`
        : undefined,
    },
    {
      name: "Review and send",
      text: "Preview your fax, optionally add a cover page, then tap Send. You'll receive a delivery confirmation.",
    },
  ]

  const faqs = [
    {
      question: `How do I dial a fax number in ${country.name}?`,
      answer: `To send a fax to ${country.name}, dial ${country.dialPrefix} followed by the local fax number. The format is: ${country.faxFormat}. TigerFax automatically handles the country code when you enter a ${country.name} number.`,
    },
    {
      question: `Can I send a fax to ${country.name} for free?`,
      answer: `TigerFax offers free fax credits to get started. International faxes to ${country.name} use credits from your account. Pro subscribers get a monthly credit allowance that covers most international faxing needs.`,
    },
    {
      question: `How long does it take to send a fax to ${country.name}?`,
      answer: `International faxes to ${country.name} typically deliver within 1–3 minutes, depending on the recipient's fax machine and network conditions. You'll receive a delivery confirmation in the app.`,
    },
    {
      question: `Do I need a fax machine to send a fax to ${country.name}?`,
      answer: `No fax machine needed. TigerFax sends your fax digitally from your iPhone to any fax machine or online fax service in ${country.name}. The recipient receives it just like a regular fax.`,
    },
  ]

  const relatedPages = [
    ...siblings.map((s) => ({
      href: `/send-fax/to-${s.slug}`,
      title: `Send Fax to ${s.name}`,
      description: `How to fax to ${s.name} from iPhone`,
    })),
    {
      href: `/receive-fax/from-${country.slug}`,
      title: `Receive Fax from ${country.name}`,
      description: `Get a number to receive ${country.name} faxes`,
    },
    {
      href: "/how-to/fax-from-iphone",
      title: "How to Fax from iPhone",
      description: "Complete iPhone faxing guide",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <BreadcrumbNav
          crumbs={[
            { name: "Home", href: "/" },
            { name: "Send Fax", href: "/send-fax" },
            { name: country.name, href: `/send-fax/to-${country.slug}` },
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
            Send a Fax to {country.name} from Your iPhone
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{intro}</p>
        </header>

        {/* Dialing format */}
        <section className="mb-8">
          <DialingFormatSection
            countryName={country.name}
            dialPrefix={country.dialPrefix}
            faxFormat={country.faxFormat}
            hasSpecialFormat={country.hasSpecialFormat}
            requiresCountryCode={country.requiresCountryCode}
            businessLanguage={country.businessLanguage}
            timezone={country.timezone}
            continent={country.continent}
          />
        </section>

        {/* Local stat */}
        <div className="mb-8 rounded-lg border-l-4 border-orange-400 bg-orange-50 dark:bg-orange-950/20 pl-4 pr-5 py-4">
          <p className="text-sm font-semibold text-orange-700 dark:text-orange-300 mb-1">
            Fax in {country.name}
          </p>
          <p className="text-sm text-orange-700 dark:text-orange-300">{country.local_stat}</p>
        </div>

        {/* Steps */}
        <section className="mb-8">
          <StepByStep
            title={`How to Send a Fax to ${country.name} — Step by Step`}
            steps={steps}
          />
        </section>

        {/* Common use cases */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">
            Common Reasons to Fax {country.name}
          </h2>
          <div className="grid gap-2 sm:grid-cols-2">
            {country.commonUseCases.map((useCase) => (
              <div key={useCase} className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                <span className="capitalize">{useCase}</span>
              </div>
            ))}
          </div>
        </section>

        <CTABanner variant={cta} subtext="No fax machine needed · iOS only · Free to start" />

        {/* FAQ */}
        <section className="mt-8 mb-8">
          <FAQSection faqs={faqs} />
        </section>

        <RelatedPages pages={relatedPages} />
      </div>
    </div>
  )
}
