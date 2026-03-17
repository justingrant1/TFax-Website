import type { Device } from "@/data/devices"
import type { DocumentType } from "@/data/document-types"

export interface FAQ {
  question: string
  answer: string
}

export interface Step {
  name: string
  text: string
  tip?: string
}

export interface Breadcrumb {
  name: string
  href: string
}

// ─── FAQ Schema ───────────────────────────────────────────────────────────────
export function buildFAQSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

// ─── HowTo Schema ─────────────────────────────────────────────────────────────
export function buildHowToSchema(name: string, description: string, steps: Step[]) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.name,
      text: step.text,
    })),
  }
}

// ─── Breadcrumb Schema ────────────────────────────────────────────────────────
export function buildBreadcrumbSchema(crumbs: Breadcrumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: `https://www.tigerfax.com${crumb.href}`,
    })),
  }
}

// ─── Article Schema ───────────────────────────────────────────────────────────
export function buildArticleSchema({
  title,
  description,
  url,
  publishDate,
  modifiedDate,
}: {
  title: string
  description: string
  url: string
  publishDate: string
  modifiedDate: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `https://www.tigerfax.com${url}`,
    datePublished: publishDate,
    dateModified: modifiedDate,
    author: {
      "@type": "Organization",
      name: "TigerFax",
      url: "https://www.tigerfax.com",
    },
    publisher: {
      "@type": "Organization",
      name: "TigerFax",
      url: "https://www.tigerfax.com",
    },
  }
}

// ─── Software App Schema (for pSEO pages) ────────────────────────────────────
export function buildSoftwareAppSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "TigerFax",
    operatingSystem: "iOS",
    applicationCategory: "BusinessApplication",
    offers: [
      { "@type": "Offer", price: "0", priceCurrency: "USD", description: "Free — 3 pages included" },
      { "@type": "Offer", price: "4.99", priceCurrency: "USD", description: "Pro — unlimited + dedicated fax number" },
    ],
    url: "https://www.tigerfax.com",
    downloadUrl: "https://apps.apple.com/us/app/tigerfax/id6758597882",
  }
}

// ─── Device page FAQs ─────────────────────────────────────────────────────────
export function buildDeviceFAQs(device: Device): FAQ[] {
  const isTablet = device.type === "tablet"
  return [
    {
      question: `Is TigerFax free on ${device.name}?`,
      answer: `Yes — TigerFax is free to download on ${device.name} and includes 3 free fax pages to get started. After that, you can buy page credits ($0.99/page) or upgrade to Pro for unlimited sending and a dedicated fax number.`,
    },
    {
      question: `Can I scan documents with my ${device.name} camera in TigerFax?`,
      answer: `Absolutely. TigerFax has a built-in document scanner that uses your ${device.name}'s camera${device.hasLiDAR ? ", enhanced by LiDAR for instant edge detection" : ""}. Just open the app, tap the camera icon, and point it at your document.`,
    },
    {
      question: `What file types can I fax from my ${device.name}?`,
      answer: `TigerFax on ${device.name} supports PDF, JPG, PNG, HEIC, and DOCX files. You can import from the Files app, Photos, iCloud Drive, Dropbox, Google Drive, or scan directly with the camera.`,
    },
    {
      question: isTablet
        ? `Does TigerFax have an optimized layout for ${device.name}?`
        : `Does TigerFax work on all iPhone models?`,
      answer: isTablet
        ? `Yes — TigerFax is fully optimized for ${device.name} with a tablet-specific layout that takes advantage of the larger screen. You can use Split View to review documents alongside TigerFax.`
        : `TigerFax supports all iPhones running iOS 15 or later, including ${device.name}. The app automatically adapts to your screen size.`,
    },
  ]
}

// ─── Document page FAQs ───────────────────────────────────────────────────────
export function buildDocumentFAQs(doc: DocumentType): FAQ[] {
  return [
    {
      question: `Is it safe to fax a ${doc.name} from my iPhone?`,
      answer: `Yes. TigerFax transmits your ${doc.name} over encrypted channels${doc.compliance?.includes("HIPAA") ? " and is HIPAA-compliant" : ""}. Your document is never stored on third-party servers after transmission.`,
    },
    {
      question: `How long does it take to fax a ${doc.name}?`,
      answer: `Most faxes are delivered within 1–3 minutes. ${doc.isMultiPage ? "Multi-page documents may take slightly longer depending on the number of pages and the recipient's fax machine speed." : "Single-page documents typically arrive in under a minute."}`,
    },
    {
      question: `Do I need a cover page when faxing a ${doc.name}?`,
      answer: doc.isSensitive
        ? `Yes — for ${doc.name}s, a cover page with a confidentiality notice is strongly recommended${doc.compliance?.includes("HIPAA") ? " and may be required under HIPAA" : ""}. TigerFax includes a built-in cover page feature.`
        : `A cover page is optional but recommended for professional faxes. TigerFax lets you add a custom cover page with To, From, Subject, and Message fields before sending.`,
    },
    {
      question: `Can I fax a ${doc.name} to any fax number?`,
      answer: `Yes — TigerFax can send your ${doc.name} to any fax machine or online fax service worldwide. Just enter the recipient's fax number (including area code for US numbers, or country code for international).`,
    },
  ]
}
