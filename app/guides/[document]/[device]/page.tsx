import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { documentTypes, getDocumentBySlug, getSiblingDocuments } from "@/data/document-types"
import { devices, getDeviceBySlug, getSiblingDevices } from "@/data/devices"
import { pickVariant } from "@/lib/pseo/variety"
import { buildSoftwareAppSchema } from "@/lib/pseo/schema"
import { BreadcrumbNav } from "@/components/pseo/BreadcrumbNav"
import { StepByStep } from "@/components/pseo/StepByStep"
import { FAQSection } from "@/components/pseo/FAQSection"
import { CTABanner } from "@/components/pseo/CTABanner"
import { RelatedPages } from "@/components/pseo/RelatedPages"
import { CheckCircle, AlertTriangle, Shield, Lightbulb, Scan } from "lucide-react"

const BASE_URL = "https://www.tigerfax.com"

interface Props {
  params: Promise<{ document: string; device: string }>
}

// ─── Static params: all docs × all devices ────────────────────────────────────
export async function generateStaticParams() {
  const pairs: { document: string; device: string }[] = []
  for (const doc of documentTypes) {
    for (const device of devices) {
      pairs.push({
        document: `fax-${doc.slug}`,
        device: `from-${device.slug}`,
      })
    }
  }
  return pairs
}

// ─── Metadata ─────────────────────────────────────────────────────────────────
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { document: docParam, device: deviceParam } = await params
  const docSlug = docParam.replace("fax-", "")
  const deviceSlug = deviceParam.replace("from-", "")
  const doc = getDocumentBySlug(docSlug)
  const device = getDeviceBySlug(deviceSlug)
  if (!doc || !device) return {}

  const title = `How to Fax a ${doc.name} from ${device.name} (${new Date().getFullYear()} Guide)`
  const description = `Step-by-step guide to faxing a ${doc.name} from your ${device.name}. ${device.hasLiDAR ? "LiDAR-assisted scanning. " : ""}${doc.isSensitive ? "Secure, encrypted transmission. " : ""}Free to start with TigerFax.`

  return {
    title,
    description,
    keywords: [
      `fax ${doc.name.toLowerCase()} from ${device.name}`,
      `${device.name} fax ${doc.name.toLowerCase()}`,
      doc.primary_keyword,
      device.primary_keyword,
      ...doc.secondary_keywords.slice(0, 2),
    ].join(", "),
    openGraph: {
      title,
      description,
      type: "article",
      url: `${BASE_URL}/guides/${docParam}/from-${deviceSlug}`,
    },
    twitter: { card: "summary_large_image", title, description },
    alternates: { canonical: `${BASE_URL}/guides/${docParam}/from-${deviceSlug}` },
  }
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default async function DocDevicePage({ params }: Props) {
  const { document: docParam, device: deviceParam } = await params
  const docSlug = docParam.replace("fax-", "")
  const deviceSlug = deviceParam.replace("from-", "")
  const doc = getDocumentBySlug(docSlug)
  const device = getDeviceBySlug(deviceSlug)
  if (!doc || !device) notFound()

  const seed = `${docSlug}-${deviceSlug}`
  const docIntro = pickVariant(doc.intro_variants, seed)
  const ctaVariant = pickVariant(doc.cta_variants, seed + "-cta")

  const siblingDocs = getSiblingDocuments(doc, 2)
  const siblingDevices = getSiblingDevices(device, 2)

  const steps = [
    {
      name: "Download TigerFax",
      text: `Install TigerFax from the App Store on your ${device.name}. It's free to start — no credit card required.`,
      tip: `TigerFax is optimized for ${device.osVersion} and works on all ${device.type === "tablet" ? "iPads" : "iPhones"} running iOS 15 or later.`,
    },
    ...(device.hasCamera
      ? [
          {
            name: `Scan your ${doc.name} with ${device.name}`,
            text: device.hasLiDAR
              ? `Open TigerFax and tap the camera icon. The ${device.name}'s LiDAR scanner automatically detects the document edges and straightens the scan. ${device.camera_tips}`
              : `Open TigerFax and tap the camera icon. Position your ${device.name} about 12 inches above the ${doc.name} and let the auto-capture detect the edges. ${device.camera_tips}`,
            tip: doc.isMultiPage
              ? `Your ${doc.name} may have multiple pages — TigerFax lets you scan each page in sequence before sending.`
              : undefined,
          },
        ]
      : []),
    {
      name: `Upload your ${doc.name} from ${device.name}`,
      text: `Alternatively, tap the upload icon to import your ${doc.name} from Files, iCloud Drive, or any connected cloud storage. ${device.file_picker_notes}`,
      tip: `PDF format preserves ${doc.name} formatting best. If you have a digital copy, upload it instead of scanning for the clearest result.`,
    },
    ...(doc.isSensitive
      ? [
          {
            name: "Add a confidentiality cover page",
            text: `Since ${doc.name}s contain sensitive information${doc.compliance && doc.compliance.length > 0 ? ` protected under ${doc.compliance.join(" and ")}` : ""}, add a cover page with a confidentiality notice. TigerFax includes built-in cover page templates.`,
            tip: doc.warnings && doc.warnings.length > 0 ? doc.warnings[0] : undefined,
          },
        ]
      : []),
    {
      name: "Enter the recipient's fax number",
      text: `Type the recipient's fax number in the To field. For international numbers, include the country code. TigerFax automatically formats the number.`,
    },
    {
      name: "Review and send",
      text: `Preview your ${doc.name} to verify all pages are included and legible${device.type === "tablet" ? ` — the ${device.name}'s large display makes this easy` : ""}. Tap Send. You'll receive a delivery confirmation when the fax is received.`,
    },
  ]

  const faqs = [
    {
      question: `Can I fax a ${doc.name} from my ${device.name}?`,
      answer: `Yes. TigerFax works on ${device.name} running ${device.osVersion} and supports faxing ${doc.name}s. You can scan a physical copy with the ${device.name}'s camera or upload a PDF directly from the Files app.`,
    },
    {
      question: `Is it safe to fax a ${doc.name} from ${device.name}?`,
      answer: `TigerFax transmits all faxes over encrypted connections${doc.compliance?.includes("HIPAA") ? " and supports HIPAA-compliant faxing with confidentiality cover pages" : ""}. Your ${doc.name} is never stored on third-party servers after transmission.`,
    },
    {
      question: `Does the ${device.name} camera produce clear enough scans for a ${doc.name}?`,
      answer: device.hasLiDAR
        ? `The ${device.name}'s LiDAR scanner combined with its camera produces exceptionally clear document scans. Text on ${doc.name}s is captured with enough resolution to be clearly legible when received by the fax machine.`
        : `The ${device.name}'s ${device.releaseYear >= 2023 ? "48MP" : "12MP"} camera produces clear document scans suitable for faxing ${doc.name}s. Ensure good lighting and hold the device steady for best results.`,
    },
    {
      question: `How long does it take to fax a ${doc.name} from ${device.name}?`,
      answer: `With TigerFax on ${device.name}, you can scan and send a ${doc.name} in under two minutes. Delivery typically takes 1–3 minutes depending on the recipient's fax machine. You'll receive a confirmation when it's delivered.`,
    },
  ]

  const relatedPages = [
    {
      href: `/guides/${docParam}`,
      title: `How to Fax a ${doc.name}`,
      description: `Complete guide for faxing ${doc.name}s from any iPhone`,
    },
    {
      href: `/how-to/fax-from-${device.slug}`,
      title: `How to Fax from ${device.name}`,
      description: `Complete faxing guide for ${device.name}`,
    },
    ...siblingDocs.map((d) => ({
      href: `/guides/fax-${d.slug}/from-${deviceSlug}`,
      title: `Fax a ${d.name} from ${device.name}`,
      description: `How to fax ${d.name}s from your ${device.name}`,
    })),
    ...siblingDevices.map((d) => ({
      href: `/guides/${docParam}/from-${d.slug}`,
      title: `Fax ${doc.name} from ${d.name}`,
      description: `How to fax ${doc.name}s from ${d.name}`,
    })),
  ].slice(0, 5)

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
            { name: "Fax Guides", href: "/guides" },
            { name: `Fax a ${doc.name}`, href: `/guides/${docParam}` },
            { name: device.name, href: `/guides/${docParam}/from-${deviceSlug}` },
          ]}
        />

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="inline-flex items-center rounded-full bg-orange-100 dark:bg-orange-950/40 px-3 py-1 text-xs font-medium text-orange-700 dark:text-orange-300 capitalize">
            {doc.category.replace("-", " ")} document
          </span>
          <span className="inline-flex items-center rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-xs font-medium text-slate-700 dark:text-slate-300">
            {device.name} · {device.osVersion}
          </span>
          {device.hasLiDAR && (
            <span className="inline-flex items-center gap-1 rounded-full bg-purple-100 dark:bg-purple-950/40 px-3 py-1 text-xs font-medium text-purple-700 dark:text-purple-300">
              <Scan className="h-3 w-3" /> LiDAR scanning
            </span>
          )}
          {doc.compliance && doc.compliance.map((c) => (
            <span key={c} className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-950/40 px-3 py-1 text-xs font-medium text-blue-700 dark:text-blue-300">
              {c} compliant
            </span>
          ))}
        </div>

        <header className="mt-4">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How to Fax a {doc.name} from {device.name}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{docIntro}</p>
        </header>

        {doc.warnings && doc.warnings.length > 0 && (
          <div className="mt-6 space-y-3">
            {doc.warnings.map((warning, i) => (
              <div key={i} className="flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/30 p-4">
                <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <p className="text-sm text-amber-700 dark:text-amber-300">{warning}</p>
              </div>
            ))}
          </div>
        )}

        {device.hasLiDAR && (
          <div className="mt-6 flex items-start gap-3 rounded-lg border border-purple-200 bg-purple-50 dark:border-purple-800 dark:bg-purple-950/30 p-4">
            <Scan className="h-5 w-5 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-purple-700 dark:text-purple-300 text-sm mb-1">
                LiDAR Scanning on {device.name}
              </p>
              <p className="text-sm text-purple-700 dark:text-purple-300">
                {device.camera_tips}
              </p>
            </div>
          </div>
        )}

        {device.type === "tablet" && (
          <div className="mt-6 flex items-start gap-3 rounded-lg border bg-muted/30 p-4">
            <Lightbulb className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-sm mb-1">{device.name} Tip</p>
              <p className="text-sm text-muted-foreground">{device.file_picker_notes}</p>
            </div>
          </div>
        )}

        <section className="mt-8">
          <h2 className="text-xl font-bold mb-3">What you&apos;ll need</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
              {device.name} running {device.osVersion}
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
              TigerFax app (free on the App Store)
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
              Your {doc.name} (physical copy to scan, or a PDF/image file)
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
              The recipient&apos;s fax number
            </li>
            {doc.isSensitive && (
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                A cover page with confidentiality notice (recommended)
              </li>
            )}
          </ul>
        </section>

        <StepByStep
          title={`How to Fax a ${doc.name} from ${device.name}: Step-by-Step`}
          steps={steps}
        />

        {doc.tips && doc.tips.length > 0 && (
          <section className="mt-10">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="h-5 w-5 text-orange-500" />
              <h2 className="text-xl font-bold">Tips for Faxing {doc.name}s from {device.name}</h2>
            </div>
            <ul className="space-y-3">
              {doc.tips.map((tip, i) => (
                <li key={i} className="flex items-start gap-3 rounded-lg bg-muted/50 px-4 py-3 text-sm text-muted-foreground">
                  <span className="font-bold text-orange-500 shrink-0">{i + 1}.</span>
                  {tip}
                </li>
              ))}
            </ul>
          </section>
        )}

        {device.hasCamera && !device.hasLiDAR && (
          <div className="mt-6 flex items-start gap-3 rounded-lg border bg-muted/30 p-4">
            <Lightbulb className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-sm mb-1">Scanning tip for {device.name}</p>
              <p className="text-sm text-muted-foreground">{device.camera_tips}</p>
            </div>
          </div>
        )}

        <div className="mt-8 flex items-start gap-3 rounded-lg border p-4 text-sm text-muted-foreground">
          <Shield className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-foreground mb-1">Secure transmission</p>
            <p>
              TigerFax transmits all faxes over encrypted connections.
              {doc.compliance?.includes("HIPAA") && " TigerFax supports HIPAA-compliant faxing with confidentiality cover pages."}
              {" "}Your documents are never stored on third-party servers after transmission.
            </p>
          </div>
        </div>

        <FAQSection
          faqs={faqs}
          title={`FAQ: Faxing ${doc.name}s from ${device.name}`}
        />

        <RelatedPages
          pages={relatedPages}
          title="Related guides"
        />

        <CTABanner variant={ctaVariant} subtext={`Works on ${device.name} · Free to start · No fax machine needed`} />
      </div>
    </div>
  )
}
