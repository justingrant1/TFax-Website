import type { MetadataRoute } from "next"
import { devices } from "@/data/devices"
import { documentTypes } from "@/data/document-types"
import { getAllComparePageSlugs } from "@/data/competitors"
import { countries } from "@/data/countries"
import { coverSheets } from "@/data/cover-sheets"

const BASE_URL = "https://www.tigerfax.app"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString()

  // ─── Static / core pages ───────────────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/get-app`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/support`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ]

  // ─── Phase 1: Hub pages ────────────────────────────────────────────────────
  const hubPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/how-to`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/guides`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/templates`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
  ]

  // ─── Phase 1: Device how-to pages (/how-to/fax-from-[slug]) ───────────────
  const devicePages: MetadataRoute.Sitemap = devices.map((device) => ({
    url: `${BASE_URL}/how-to/fax-from-${device.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: device.slug === "iphone" || device.slug === "ipad" ? 0.85 : 0.75,
  }))

  // ─── Phase 1: Document guide pages (/guides/fax-[slug]) ───────────────────
  const documentPages: MetadataRoute.Sitemap = documentTypes.map((doc) => ({
    url: `${BASE_URL}/guides/fax-${doc.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }))

  // ─── Phase 1b: Document × Device matrix pages (20 docs × 20 devices = 400) ─
  const docDevicePages: MetadataRoute.Sitemap = documentTypes.flatMap((doc) =>
    devices.map((device) => ({
      url: `${BASE_URL}/guides/fax-${doc.slug}/from-${device.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.65,
    }))
  )

  // ─── Phase 1c: Cover sheet template pages ─────────────────────────────────
  const coverSheetPages: MetadataRoute.Sitemap = coverSheets.map((sheet) => ({
    url: `${BASE_URL}/templates/${sheet.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.72,
  }))

  // ─── Phase 2: Compare hub + competitor pages ───────────────────────────────
  const compareHub: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/compare`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
  ]

  const comparePages: MetadataRoute.Sitemap = getAllComparePageSlugs().map((slug) => ({
    url: `${BASE_URL}/compare/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: slug.startsWith("tigerfax-vs-") || slug.endsWith("-alternative") ? 0.80 : 0.70,
  }))

  // ─── Phase 3: Country hub pages ───────────────────────────────────────────
  const countryHubs: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/send-fax`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE_URL}/receive-fax`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE_URL}/fax-number`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
  ]

  // ─── Phase 3: Send fax to [country] (32 pages) ────────────────────────────
  const sendFaxPages: MetadataRoute.Sitemap = countries.map((c) => ({
    url: `${BASE_URL}/send-fax/to-${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.78,
  }))

  // ─── Phase 3: Receive fax from [country] (32 pages) ───────────────────────
  const receiveFaxPages: MetadataRoute.Sitemap = countries.map((c) => ({
    url: `${BASE_URL}/receive-fax/from-${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }))

  // ─── Phase 3: Fax number [country] (32 pages) ─────────────────────────────
  const faxNumberPages: MetadataRoute.Sitemap = countries.map((c) => ({
    url: `${BASE_URL}/fax-number/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }))

  return [
    ...staticPages,
    ...hubPages,
    ...devicePages,
    ...documentPages,
    ...docDevicePages,
    ...coverSheetPages,
    ...compareHub,
    ...comparePages,
    ...countryHubs,
    ...sendFaxPages,
    ...receiveFaxPages,
    ...faxNumberPages,
  ]
}
