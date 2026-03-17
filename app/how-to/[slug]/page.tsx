import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { devices, getDeviceBySlug, getSiblingDevices } from "@/data/devices"
import { documentTypes } from "@/data/document-types"
import { pickVariant } from "@/lib/pseo/variety"
import { buildDeviceFAQs, buildSoftwareAppSchema } from "@/lib/pseo/schema"
import { BreadcrumbNav } from "@/components/pseo/BreadcrumbNav"
import { StepByStep } from "@/components/pseo/StepByStep"
import { FAQSection } from "@/components/pseo/FAQSection"
import { CTABanner } from "@/components/pseo/CTABanner"
import { RelatedPages } from "@/components/pseo/RelatedPages"
import { CheckCircle, Camera, Upload, Shield, Tablet } from "lucide-react"

// ─── Static params ────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return devices.map((device) => ({ slug: `fax-from-${device.slug}` }))
}

// ─── Metadata ─────────────────────────────────────────────────────────────────
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const deviceSlug = slug.replace("fax-from-", "")
  const device = getDeviceBySlug(deviceSlug)
  if (!device) return {}

  const title = `How to Send a Fax from ${device.name} in 2026`
  const description = `Step-by-step guide to faxing from your ${device.name}. Scan documents with your camera or upload a PDF and send to any fax machine worldwide — free with TigerFax.`

  return {
    title,
    description,
    keywords: [device.primary_keyword, ...device.secondary_keywords].join(", "),
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://www.tigerfax.com/how-to/${slug}`,
    },
    twitter: { card: "summary_large_image", title, description },
    alternates: { canonical: `https://www.tigerfax.com/how-to/${slug}` },
  }
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default async function DeviceHowToPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const deviceSlug = slug.replace("fax-from-", "")
  const device = getDeviceBySlug(deviceSlug)
  if (!device) notFound()

  const intro = pickVariant(device.intro_variants, slug)
  const ctaVariant = pickVariant(device.cta_variants, slug)
  const faqs = buildDeviceFAQs(device)
  const siblings = getSiblingDevices(device, 3)

  // Build steps
  const steps = [
    {
      name: "Download TigerFax",
      text: `Search for "TigerFax" in the App Store on your ${device.name} and tap Get. The app is free to download and includes 3 free fax pages.`,
      tip: "TigerFax requires iOS 15 or later.",
    },
    {
      name: "Create your account",
      text: "Open TigerFax and sign in with your Apple ID or create a free account with your email. No credit card required.",
    },
    {
      name: device.hasCamera ? "Scan your document or upload a file" : "Upload your document",
      text: device.hasCamera
        ? `Tap the camera icon to scan your document directly with your ${device.name}'s camera, or tap the upload icon to import a PDF, JPG, or PNG from Files, Photos, or iCloud Drive.`
        : `Tap the upload icon to import your document from Files, iCloud Drive, Dropbox, or Google Drive. TigerFax supports PDF, JPG, PNG, and DOCX formats.`,
      tip: device.hasCamera ? device.camera_tips : device.file_picker_notes,
    },
    {
      name: "Add a cover page (optional)",
      text: "Tap 'Cover Page' to add a professional cover page with To, From, Subject, and Message fields. Recommended for sensitive documents.",
    },
    {
      name: "Enter the recipient's fax number and send",
      text: "Type the recipient's fax number — include the area code for US numbers (e.g., 555-123-4567) or the country code for international faxes (e.g., +44 20 1234 5678). Tap Send and TigerFax will deliver your fax within 1–3 minutes.",
      tip: "You'll receive a delivery confirmation when your fax is successfully received.",
    },
  ]

  // Related pages: siblings + 2 document guides
  const relatedPages = [
    ...siblings.map((d) => ({
      href: `/how-to/fax-from-${d.slug}`,
      title: `Fax from ${d.name}`,
      description: `Step-by-step guide for ${d.name} users`,
    })),
    {
      href: "/guides/fax-pdf",
      title: "How to Fax a PDF from iPhone",
      description: "Import any PDF and fax it in under 2 minutes",
    },
    {
      href: "/guides/fax-medical-records",
      title: "How to Fax Medical Records",
      description: "HIPAA-compliant faxing from your iPhone",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* JSON-LD: Software App */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSoftwareAppSchema()) }}
      />

      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <BreadcrumbNav
          crumbs={[
            { name: "Home", href: "/" },
            { name: "How-To Guides", href: "/how-to" },
            { name: `Fax from ${device.name}`, href: `/how-to/${slug}` },
          ]}
        />

        {/* Hero */}
        <header className="mt-6">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How to Send a Fax from {device.name} in 2026
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{intro}</p>
        </header>

        {/* Device feature callout */}
        {(device.hasLiDAR || device.unique_features.length > 0) && (
          <div className="mt-6 rounded-lg border border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950/30 p-4">
            <p className="text-sm font-semibold text-orange-700 dark:text-orange-300 mb-2">
              {device.name} advantages for faxing:
            </p>
            <ul className="space-y-1">
              {device.unique_features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-orange-700 dark:text-orange-300">
                  <CheckCircle className="h-4 w-4 mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Prerequisites */}
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
              The recipient&apos;s fax number
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
              Your document (physical to scan, or a PDF/image file)
            </li>
          </ul>
        </section>

        {/* Steps */}
        <StepByStep
          title={`How to Fax from ${device.name}: Step-by-Step`}
          description={`Complete guide to sending a fax from ${device.name} using TigerFax`}
          steps={steps}
        />

        {/* Camera tips (conditional) */}
        {device.hasCamera && (
          <section className="mt-10 rounded-lg border p-5">
            <div className="flex items-center gap-2 mb-3">
              <Camera className="h-5 w-5 text-orange-500" />
              <h2 className="font-bold">Camera Scanning Tips for {device.name}</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">{device.camera_tips}</p>
          </section>
        )}

        {/* LiDAR tips (conditional) */}
        {device.hasLiDAR && (
          <section className="mt-6 rounded-lg border border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/30 p-5">
            <h3 className="font-bold text-blue-700 dark:text-blue-300 mb-2">
              🔵 LiDAR Scanner Advantage
            </h3>
            <p className="text-sm text-blue-700 dark:text-blue-300 leading-relaxed">
              Your {device.name}&apos;s LiDAR scanner detects document edges instantly, even in low light.
              TigerFax uses this to automatically crop and straighten your scan — no manual adjustment needed.
              This is especially useful for multi-page documents and documents on patterned surfaces.
            </p>
          </section>
        )}

        {/* iPad tips (conditional) */}
        {device.type === "tablet" && (
          <section className="mt-6 rounded-lg border p-5">
            <div className="flex items-center gap-2 mb-3">
              <Tablet className="h-5 w-5 text-orange-500" />
              <h2 className="font-bold">iPad-Specific Tips</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">{device.file_picker_notes}</p>
            {device.ios_version_notes && (
              <p className="mt-3 text-sm text-muted-foreground">{device.ios_version_notes}</p>
            )}
          </section>
        )}

        {/* File picker notes (phones) */}
        {device.type === "phone" && (
          <section className="mt-6 rounded-lg border p-5">
            <div className="flex items-center gap-2 mb-3">
              <Upload className="h-5 w-5 text-orange-500" />
              <h2 className="font-bold">Uploading Files on {device.name}</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">{device.file_picker_notes}</p>
          </section>
        )}

        {/* Pricing */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold mb-4">TigerFax Pricing</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border p-5">
              <p className="font-bold text-lg">Free</p>
              <p className="text-3xl font-bold mt-1">$0</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> 3 free fax pages</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Send to any fax number</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Camera scanning</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Cover pages</li>
              </ul>
            </div>
            <div className="rounded-lg border border-orange-300 bg-orange-50 dark:bg-orange-950/20 p-5">
              <p className="font-bold text-lg">Pro</p>
              <p className="text-3xl font-bold mt-1">$4.99<span className="text-base font-normal text-muted-foreground">/mo</span></p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Unlimited fax pages</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Dedicated US fax number</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Receive faxes</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Fax history</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Security note */}
        <div className="mt-6 flex items-start gap-3 rounded-lg border p-4 text-sm text-muted-foreground">
          <Shield className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
          <p>
            TigerFax transmits all faxes over encrypted connections. Your documents are never stored on
            third-party servers after transmission. All faxes are sent via the Sinch carrier network.
          </p>
        </div>

        {/* FAQ */}
        <FAQSection faqs={faqs} />

        {/* Related pages */}
        <RelatedPages pages={relatedPages} title="More Faxing Guides" />

        {/* CTA */}
        <CTABanner variant={ctaVariant} />
      </div>
    </div>
  )
}
