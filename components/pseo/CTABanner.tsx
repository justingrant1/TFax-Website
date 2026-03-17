"use client"

import Link from "next/link"
import { Download } from "lucide-react"

interface CTABannerProps {
  variant?: string
  subtext?: string
}

const APP_STORE_URL = "https://apps.apple.com/us/app/tigerfax/id6758597882"

export function CTABanner({
  variant = "Download TigerFax Free",
  subtext = "Free to start · No credit card required · iOS only",
}: CTABannerProps) {
  return (
    <section className="mt-12 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 p-8 text-white text-center">
      <div className="mx-auto max-w-xl">
        <p className="text-sm font-medium uppercase tracking-wider opacity-80 mb-2">TigerFax</p>
        <h2 className="text-2xl font-bold mb-3">{variant}</h2>
        <p className="text-orange-100 mb-6">{subtext}</p>
        <Link
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-white text-orange-600 font-semibold px-6 py-3 hover:bg-orange-50 transition-colors"
          onClick={() => {
            if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
              ;(window as any).gtag("event", "app_store_click", {
                source_component: "cta_banner",
                cta_variant: variant,
              })
            }
          }}
        >
          <Download className="h-4 w-4" />
          Download on the App Store
        </Link>
      </div>
    </section>
  )
}
