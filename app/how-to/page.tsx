import type { Metadata } from "next"
import Link from "next/link"
import { devices } from "@/data/devices"
import { BreadcrumbNav } from "@/components/pseo/BreadcrumbNav"
import { CTABanner } from "@/components/pseo/CTABanner"
import { Smartphone, Tablet } from "lucide-react"

export const metadata: Metadata = {
  title: "How to Fax from iPhone & iPad — Device Guides | TigerFax",
  description:
    "Step-by-step guides for faxing from every iPhone and iPad model. Scan documents with your camera and send to any fax machine worldwide — free with TigerFax.",
  alternates: { canonical: "https://www.tigerfax.com/how-to" },
  openGraph: {
    title: "How to Fax from iPhone & iPad — Device Guides | TigerFax",
    description: "Step-by-step faxing guides for every iPhone and iPad model.",
    url: "https://www.tigerfax.com/how-to",
  },
}

const phones = devices.filter((d) => d.type === "phone")
const tablets = devices.filter((d) => d.type === "tablet")

export default function HowToHubPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <BreadcrumbNav
          crumbs={[
            { name: "Home", href: "/" },
            { name: "How-To Guides", href: "/how-to" },
          ]}
        />

        <header className="mt-6 mb-10">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How to Fax from iPhone & iPad
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Select your device for a step-by-step guide to sending faxes with TigerFax — no fax machine required.
          </p>
        </header>

        {/* iPhone section */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-5">
            <Smartphone className="h-5 w-5 text-orange-500" />
            <h2 className="text-xl font-bold">iPhone Guides</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {phones.map((device) => (
              <Link
                key={device.slug}
                href={`/how-to/fax-from-${device.slug}`}
                className="group flex flex-col gap-1 rounded-lg border p-4 hover:border-orange-300 hover:bg-orange-50/50 dark:hover:bg-orange-950/20 transition-colors"
              >
                <span className="font-semibold text-sm group-hover:text-orange-600 transition-colors">
                  Fax from {device.name}
                </span>
                <span className="text-xs text-muted-foreground">
                  {device.osVersion}
                  {device.hasLiDAR ? " · LiDAR" : ""}
                  {device.screenSize ? ` · ${device.screenSize}` : ""}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* iPad section */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-5">
            <Tablet className="h-5 w-5 text-orange-500" />
            <h2 className="text-xl font-bold">iPad Guides</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {tablets.map((device) => (
              <Link
                key={device.slug}
                href={`/how-to/fax-from-${device.slug}`}
                className="group flex flex-col gap-1 rounded-lg border p-4 hover:border-orange-300 hover:bg-orange-50/50 dark:hover:bg-orange-950/20 transition-colors"
              >
                <span className="font-semibold text-sm group-hover:text-orange-600 transition-colors">
                  Fax from {device.name}
                </span>
                <span className="text-xs text-muted-foreground">
                  {device.osVersion}
                  {device.hasLiDAR ? " · LiDAR" : ""}
                  {device.screenSize ? ` · ${device.screenSize}` : ""}
                </span>
              </Link>
            ))}
          </div>
        </section>

        <CTABanner variant="Download TigerFax Free" subtext="Works on every iPhone and iPad · Free to start" />
      </div>
    </div>
  )
}
