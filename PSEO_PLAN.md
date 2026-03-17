# 🐯 TigerFax Programmatic SEO (pSEO) Master Plan

> **Version:** 3.1 (Phase 2 In Progress)  
> **Target:** 8,255 base pages → 10,000+ with expansion gates  
> **Stack:** Next.js 15 App Router, TypeScript, Vercel  
> **Last Updated:** March 2026

---

## ✅ Implementation Log

### Phase 1 — COMPLETE (March 2026)

| File | Status | Notes |
|------|--------|-------|
| `data/devices.ts` | ✅ Done | 20 devices (iPhone 12–16 Pro Max, SE, all iPads + generic parents) |
| `data/document-types.ts` | ✅ Done | 20 document types across 8 categories |
| `lib/pseo/variety.ts` | ✅ Done | Deterministic variant picker (hash-based, build-stable) |
| `lib/pseo/schema.ts` | ✅ Done | FAQPage, HowTo, BreadcrumbList, Article, MobileApplication JSON-LD builders |
| `components/pseo/BreadcrumbNav.tsx` | ✅ Done | Renders breadcrumbs + injects BreadcrumbList JSON-LD |
| `components/pseo/FAQSection.tsx` | ✅ Done | Accordion FAQ + FAQPage JSON-LD |
| `components/pseo/StepByStep.tsx` | ✅ Done | Numbered steps + HowTo JSON-LD |
| `components/pseo/CTABanner.tsx` | ✅ Done | Orange gradient CTA + GA4 click tracking |
| `components/pseo/RelatedPages.tsx` | ✅ Done | Internal link grid for cross-linking |
| `app/how-to/page.tsx` | ✅ Done | Hub listing all device guides |
| `app/how-to/[slug]/page.tsx` | ✅ Done | 20 static device pages with LiDAR/camera/iPad conditional blocks |
| `app/guides/page.tsx` | ✅ Done | Hub listing all document guides by category |
| `app/guides/[document]/page.tsx` | ✅ Done | 20 static document pages with HIPAA/compliance/multi-page blocks |
| `app/sitemap.ts` | ✅ Done | Auto-generates all 40 pSEO pages + 2 hubs |

**Phase 1 page count delivered: 487 pages**
- 20 device how-to pages
- 20 document guide pages
- 2 hub pages (how-to, guides)
- 400 document × device matrix pages (`/guides/fax-[doc]/from-[device]`)
- 44 cover sheet template pages (`/templates/[slug]`)
- 1 templates hub page

---

### Phase 2 — COMPLETE (March 2026)

| File | Status | Notes |
|------|--------|-------|
| `data/competitors.ts` | ✅ Done | 8 competitors (eFax, Fax.Plus, iFax, FaxBurner, MyFax, RingCentral, CocoFax, FaxZero) with 4 intro variant sets each |
| `components/pseo/ComparisonTable.tsx` | ✅ Done | Side-by-side feature table with ✅/❌ cells + pricing row |
| `app/compare/[slug]/page.tsx` | ✅ Done | 4 page types (vs, alternative, review, pricing) — 32 static pages total |
| `app/compare/page.tsx` | ✅ Done | Hub grouped by competitor type (mobile-first, consumer, enterprise) |
| `app/sitemap.ts` | ✅ Updated | Phase 2 compare pages added with priority 0.80 (vs/alternative) / 0.70 (review/pricing) |

**Phase 2 page count delivered: 33 pages** (32 compare + 1 hub)  
**Running total: 75 pages** (Phase 1: 42 + Phase 2: 33)

---

### Phase 3 — COMPLETE (March 2026)

**Goal:** International / Country pages — send + receive + fax-number hub pages  
**Tier 1 launch:** 32 countries (highest volume), expand to 150 in Phase 3 continuation

| File | Status | Notes |
|------|--------|-------|
| `data/countries.ts` | ✅ Done | 32 Tier 1 countries — all continents, unique local_stat per country, 3 intro variants each |
| `components/pseo/DialingFormatSection.tsx` | ✅ Done | Dialing format card + special format warning + timezone + language callouts |
| `app/send-fax/to-[country]/page.tsx` | ✅ Done | 32 static pages — dialing format, steps, use cases, FAQs, related links |
| `app/receive-fax/from-[country]/page.tsx` | ✅ Done | 32 static pages — Pro callout, receive use cases, steps, FAQs |
| `app/fax-number/[country]/page.tsx` | ✅ Done | 32 static pages — dialing details, Pro features, use cases, steps, FAQs |
| `app/send-fax/page.tsx` | ✅ Done | Hub — countries grouped by continent with flag + dialing format |
| `app/receive-fax/page.tsx` | ✅ Done | Hub — countries grouped by continent with timezone |
| `app/fax-number/page.tsx` | ✅ Done | Hub — countries grouped by continent with country code |
| `app/sitemap.ts` | ✅ Updated | Phase 3 country pages added (priority 0.78 send / 0.75 receive+number) |

**Phase 3 page count delivered: 99 pages** (32 send + 32 receive + 32 fax-number + 3 hubs)  
**Running total: 174 pages** (Phase 1: 42 + Phase 2: 33 + Phase 3: 99)

---

### Phase 4 — NEXT UP (after indexation gate)

**Goal:** US Geographic Pages — area codes (350), states (50), cities (500)  
**Gate:** Indexation > 80% from Phases 1–3 before proceeding  
**Requires:** `data/area-codes.ts`, `data/us-states.ts`, `data/us-cities.ts`, page templates, hub pages



---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Current State Audit](#current-state-audit)
3. [Architecture Overview](#architecture-overview)
4. [Data Layer Specification](#data-layer-specification)
5. [Phase 1 — High-Intent Guides & Templates](#phase-1--high-intent-guides--templates-weeks-14)
6. [Phase 2 — Competitor Pages](#phase-2--competitor-pages-weeks-56)
7. [Phase 3 — International / Country Pages](#phase-3--international--country-pages-weeks-710)
8. [Phase 4 — US Geographic Pages](#phase-4--us-geographic-pages-weeks-1114)
9. [Phase 5 — Industry Pages](#phase-5--industry-pages-weeks-1519)
10. [Phase 6 — Content Hub & Authority](#phase-6--content-hub--authority-weeks-2024)
11. [Phase 7 — Expansion to 10K+](#phase-7--expansion-to-10k-weeks-25)
12. [Technical Architecture](#technical-architecture)
13. [Internal Linking Strategy (Silo Structure)](#internal-linking-strategy-silo-structure)
14. [Dynamic Image Generation](#dynamic-image-generation)
15. [Crawl Budget Protection](#crawl-budget-protection)
16. [Content Quality Standards](#content-quality-standards)
17. [Indexation Gates & Quality Control](#indexation-gates--quality-control)
18. [Tracking & KPIs](#tracking--kpis)
19. [Projected Impact](#projected-impact)
20. [Anti-Thin-Content Checklist](#anti-thin-content-checklist)

---

## Executive Summary

TigerFax currently has **5 pages**. This plan scales the website to **8,255+ pages** using programmatic templates powered by structured data files, conditional content blocks, and a hierarchical silo linking structure.

**Core principle:** Every page must be genuinely useful. No string interpolation. No thin content. Each page assembles from 10–15 conditional content modules that change based on the data combination — creating meaningfully different pages, not just swapped city/device names.

**Phase order is intentional** — highest conversion-intent pages ship first:
1. How-to guides (someone searching "how to fax from iPhone" is 1 step from downloading)
2. Competitor comparisons (commercial intent)
3. International pages (unique per country — safe matrix)
4. US geographic pages (gated on indexation)
5. Industry pages (gated on indexation)
6. Content hub (authority building)
7. Expansion (gated on all prior phases)

---

## Current State Audit

| Metric | TigerFax (Current) | eFax (Competitor) |
|--------|-------------------|-------------------|
| Total Pages | 5 | 100+ |
| Internal Links | ~10 | 76+ |
| Industry Landing Pages | 0 | 5+ |
| How-To Content | 0 | FAQ section only |
| Schema Markup | ✅ 3 schemas (Org, MobileApp, WebSite) | ❌ No micromarkup |
| Sitemap | ✅ Static (4 URLs) | Unknown |
| On-Page Score | N/A | 90/100 |
| Structured Data | Good foundation | Limited |

**Existing pages:**
- `/` — Home
- `/support` — Support/FAQ
- `/privacy` — Privacy Policy
- `/terms` — Terms of Service
- `/get-app` — App download redirect

**Existing SEO strengths to preserve:**
- `generateMetadata()` pattern already in use
- JSON-LD schemas: Organization, MobileApplication, WebSite
- Canonical URLs set
- OG/Twitter cards configured
- Google Analytics (G-T882GYJW25) installed
- Vercel Analytics installed

---

## Architecture Overview

```
app/
├── how-to/
│   └── [slug]/
│       ├── page.tsx                    ← Device how-to pages (20)
│       └── opengraph-image.tsx         ← Dynamic OG per page
├── guides/
│   └── [document]/
│       ├── page.tsx                    ← Document type guides (40)
│       ├── opengraph-image.tsx
│       └── from-[device]/
│           └── page.tsx                ← Doc × Device matrix (600)
├── templates/
│   └── [slug]/
│       └── page.tsx                    ← Cover sheet templates (60)
├── compare/
│   └── [slug]/
│       └── page.tsx                    ← Competitor pages (80)
├── send-fax/
│   └── to-[country]/
│       ├── page.tsx                    ← Country send pages (150)
│       └── from-[device]/
│           └── page.tsx                ← Country × Device (1,500)
├── receive-fax/
│   └── from-[country]/
│       └── page.tsx                    ← Country receive pages (150)
├── fax-number/
│   ├── [country]/
│   │   └── page.tsx                    ← Country fax number (100)
│   └── area-code/
│       └── [code]/
│           └── page.tsx                ← US area codes (350)
├── fax-services/
│   └── [state]/
│       ├── page.tsx                    ← State pages (50)
│       └── [city]/
│           └── page.tsx                ← City fax services (250)
├── get-fax-number/
│   └── [state]/
│       └── [city]/
│           └── page.tsx                ← City fax number (250)
├── industries/
│   └── [industry]/
│       ├── page.tsx                    ← Industry core (30)
│       ├── [country]/
│       │   └── page.tsx                ← Industry × Country (1,250)
│       └── [state]/
│           ├── page.tsx                ← Industry × State (1,500)
│           └── [city]/
│               └── page.tsx            ← Industry × City (750)
├── blog/
│   └── [slug]/
│       └── page.tsx                    ← Blog articles (100)
├── glossary/
│   └── [term]/
│       └── page.tsx                    ← Glossary terms (75)
└── faq/
    └── [slug]/
        └── page.tsx                    ← FAQ clusters (50)

data/
├── devices.ts
├── document-types.ts
├── cover-sheets.ts
├── competitors.ts
├── countries.ts
├── area-codes.ts
├── us-states.ts
├── us-cities.ts
├── industries.ts
├── blog-posts.ts
├── glossary-terms.ts
└── faq-clusters.ts

components/pseo/
├── BreadcrumbNav.tsx
├── RelatedPages.tsx
├── CTABanner.tsx
├── FAQSection.tsx
├── StepByStep.tsx
├── ComparisonTable.tsx
├── DialingFormatSection.tsx
├── SecurityCallout.tsx
├── ComplianceSection.tsx
├── LocalIndustryData.tsx
├── CoverSheetPreview.tsx
└── InternalLinkSilo.tsx

lib/pseo/
├── metadata.ts          ← generateMetadata() helpers
├── schema.ts            ← JSON-LD schema builders
├── variety.ts           ← Deterministic variant picker
├── linking.ts           ← Silo link resolver
└── sitemap-helpers.ts   ← Sitemap generation utilities
```

---

## Data Layer Specification

All data files live in `/data/`. Each entry includes **variety/seed fields** to prevent template sameness.

### `data/devices.ts`

```typescript
export interface Device {
  name: string                    // "iPhone 16"
  slug: string                    // "iphone-16"
  brand: "Apple"
  type: "phone" | "tablet"
  releaseYear: number
  osVersion: string               // "iOS 18"
  hasCamera: boolean
  hasLiDAR: boolean
  screenSize?: string             // "6.1 inch"
  primary_keyword: string         // "fax from iPhone 16"
  secondary_keywords: string[]    // ["send fax iPhone 16", "mobile fax iOS 18"]
  intro_variants: string[]        // 3+ unique opening sentences
  cta_variants: string[]          // ["Start Free", "Send Your First Fax"]
  unique_features: string[]       // ["48MP camera", "LiDAR edge detection"]
  camera_tips: string             // Device-specific scanning advice
  file_picker_notes: string       // How file picker works on this device
  ios_version_notes?: string      // Any iOS-version-specific behavior
}
```

**Devices to include (20):**
- iPhone 16, iPhone 16 Pro, iPhone 16 Plus, iPhone 16 Pro Max
- iPhone 15, iPhone 15 Pro
- iPhone 14, iPhone 14 Pro
- iPhone 13, iPhone 12
- iPhone SE (3rd gen)
- iPad Pro (M4), iPad Air (M2), iPad mini (7th gen)
- iPad (10th gen)
- iPhone (generic — for "how to fax from iPhone" parent page)
- iPad (generic — parent page)
- Phone (generic — "send fax from phone")

---

### `data/document-types.ts`

```typescript
export interface DocumentType {
  name: string                    // "W-9 Form"
  slug: string                    // "w9"
  category: "tax" | "medical" | "legal" | "business" | "government" | "real-estate" | "hr"
  isSensitive: boolean            // triggers security callout
  isMultiPage: boolean            // triggers batch scanning tips
  compliance?: string[]           // ["HIPAA", "IRS"]
  commonIndustries: string[]      // ["accounting", "hr", "small-business"]
  primary_keyword: string         // "how to fax a W-9"
  secondary_keywords: string[]
  intro_variants: string[]
  steps: string[]                 // Document-specific fax steps
  tips: string[]                  // Document-specific tips
  warnings?: string[]             // e.g., "Never fax SSN without cover page"
  cta_variants: string[]
}
```

**Document types to include (40):**
- Tax: W-9, W-2, 1099, tax return, IRS form
- Medical: medical records, prescription, lab results, referral, insurance claim, HIPAA authorization
- Legal: contract, NDA, power of attorney, court document, affidavit, lease agreement
- Business: invoice, purchase order, quote, proposal, application
- Government: immigration form, passport application, government form, permit application
- Real Estate: offer letter, deed, mortgage document, inspection report
- HR: employment verification, background check authorization, offer letter, I-9
- General: PDF, photo, multi-page document, scanned document

---

### `data/cover-sheets.ts`

```typescript
export interface CoverSheet {
  name: string                    // "Medical Fax Cover Sheet"
  slug: string                    // "medical-fax-cover-sheet"
  type: "industry" | "style" | "compliance"
  industry?: string               // "healthcare"
  style?: "professional" | "simple" | "formal" | "minimal"
  compliance?: string             // "HIPAA"
  description: string
  fields: string[]                // ["To", "From", "Date", "Re:", "Pages", "Confidentiality Notice"]
  previewImageAlt: string
  primary_keyword: string
  secondary_keywords: string[]
  intro_variants: string[]
  use_cases: string[]
  cta_variants: string[]
}
```

**Cover sheet types to include (60):**
- By industry (30): medical/HIPAA, legal, real estate, insurance, banking, HR, accounting, government, education, construction, dental, pharmacy, mental health, veterinary, chiropractic, physical therapy, law enforcement, social services, non-profit, hospitality, manufacturing, retail, tech, consulting, marketing, architecture, engineering, transportation, utilities, media
- By style (20): professional, simple, formal, minimal, modern, classic, confidential, urgent, personal, business, corporate, standard, basic, clean, elegant, bold, color, black-and-white, letterhead, branded
- By compliance (10): HIPAA, SOC 2, FERPA, GLBA, PCI DSS, GDPR, CCPA, FINRA, SEC, DOD

---

### `data/competitors.ts`

```typescript
export interface Competitor {
  name: string                    // "eFax"
  slug: string                    // "efax"
  website: string
  appStoreUrl?: string
  type: "enterprise" | "consumer" | "mobile-first"
  pricing: {
    free: boolean
    startingPrice: number         // per month
    pricePerPage?: number
    hasDedicatedNumber: boolean
  }
  features: {
    sendFax: boolean
    receiveFax: boolean
    dedicatedNumber: boolean
    hipaaCompliant: boolean
    mobileApp: boolean
    emailToFax: boolean
    cloudIntegrations: boolean
    coverPage: boolean
    batchFax: boolean
  }
  pros: string[]
  cons: string[]
  targetAudience: string
  primary_keyword: string         // "TigerFax vs eFax"
  secondary_keywords: string[]
  verdict: string                 // 1-2 sentence summary
  intro_variants: string[]
}
```

**Competitors to include (20):**
eFax, Fax.Plus, iFax, FaxBurner, Genius Fax, MyFax, RingCentral Fax, Nextiva Fax, Sfax, CocoFax, FaxZero, HelloFax (now HelloSign), Fax.xyz, Popfax, Metrofax, TrustFax, Biscom, OpenText Fax, Concord Fax, Mightyfax

---

### `data/countries.ts`

```typescript
export interface Country {
  name: string                    // "Japan"
  slug: string                    // "japan"
  code: string                    // "JP"
  dialPrefix: string              // "+81"
  faxFormat: string               // "0X-XXXX-XXXX"
  continent: "Asia" | "Europe" | "North America" | "South America" | "Africa" | "Oceania" | "Middle East"
  timezone: string                // "JST (UTC+9)"
  hasSpecialFormat: boolean
  requiresCountryCode: boolean
  businessLanguage: string        // "Japanese"
  commonUseCases: string[]
  local_stat: string              // Unique data point about fax in this country
  primary_keyword: string
  secondary_keywords: string[]
  intro_variants: string[]
  cta_variants: string[]
  // Receive-specific fields
  receive_intro_variants: string[]
  receive_use_cases: string[]
  // Fax number fields
  number_intro_variants: string[]
  number_use_cases: string[]
}
```

**Countries to include (150):** All countries where Sinch Fax API supports sending/receiving, prioritized by:
- Tier 1 (high volume): US, Canada, UK, Germany, France, Japan, Australia, Mexico, Brazil, India, Spain, Italy, Netherlands, Sweden, Switzerland, Belgium, Austria, Denmark, Norway, Finland, Portugal, Ireland, New Zealand, Singapore, Hong Kong, South Korea, Taiwan, China, UAE, Saudi Arabia, Israel, South Africa
- Tier 2 (medium volume): ~70 additional countries
- Tier 3 (long tail): ~50 remaining supported countries

---

### `data/area-codes.ts`

```typescript
export interface AreaCode {
  code: string                    // "212"
  city: string                    // "New York City"
  state: string                   // "New York"
  stateSlug: string               // "new-york"
  region: string                  // "Manhattan"
  population?: number
  businessCount?: number
  dominantIndustries: string[]
  local_stat: string
  primary_keyword: string         // "212 fax number"
  secondary_keywords: string[]
  intro_variants: string[]
}
```

**Area codes to include (350):** All active US area codes

---

### `data/us-states.ts`

```typescript
export interface USState {
  name: string                    // "Texas"
  slug: string                    // "texas"
  abbreviation: string            // "TX"
  capital: string
  majorCities: string[]           // Top 5 cities
  population: number
  gdp: number                     // In billions
  dominantIndustries: string[]
  businessCount: number
  local_stat: string
  primary_keyword: string         // "fax services Texas"
  secondary_keywords: string[]
  intro_variants: string[]
}
```

---

### `data/us-cities.ts`

```typescript
export interface USCity {
  name: string                    // "Houston"
  slug: string                    // "houston"
  state: string                   // "Texas"
  stateSlug: string               // "texas"
  stateAbbr: string               // "TX"
  areaCodes: string[]             // ["713", "281", "832"]
  population: number
  businessCount: number
  dominantIndustries: string[]    // Must match industry slugs
  local_stat: string              // Unique, real data point
  primary_keyword: string         // "fax services Houston TX"
  secondary_keywords: string[]
  intro_variants: string[]
  // Conditional content triggers
  isMajorMedicalHub: boolean
  isMajorLegalHub: boolean
  isMajorFinanceHub: boolean
  isTechHub: boolean
  isGovernmentSeat: boolean
}
```

**Cities to include (250):** Top 250 US cities by population/business density

---

### `data/industries.ts`

```typescript
export interface Industry {
  name: string                    // "Healthcare"
  slug: string                    // "healthcare"
  icon: string                    // "🏥"
  description: string
  painPoints: string[]            // 3-5 industry-specific fax pain points
  compliance: string[]            // ["HIPAA", "HITECH"]
  commonDocuments: string[]       // ["medical records", "prescriptions", "referrals"]
  keywords: string[]
  primary_keyword: string         // "fax app for healthcare"
  secondary_keywords: string[]
  intro_variants: string[]
  compliance_callout: string      // Unique compliance paragraph
  workflow_description: string    // How fax fits into this industry's workflow
  cta_variants: string[]
  // For location combinations
  state_intro_template: string    // "{industry} fax services in {state}"
  city_intro_template: string     // "{industry} fax in {city}, {state}"
  country_intro_template: string  // "Fax for {industry} in {country}"
}
```

**Industries to include (30):**
Healthcare, Legal, Real Estate, Government, Insurance, Banking/Finance, Education, Human Resources, Accounting, Construction, Dental, Pharmacy, Mental Health, Veterinary, Physical Therapy, Law Enforcement, Social Services, Non-Profit, Hospitality, Manufacturing, Retail, Technology, Consulting, Marketing/Advertising, Architecture, Engineering, Transportation/Logistics, Utilities, Media/Publishing, Small Business

---

### `data/blog-posts.ts`

```typescript
export interface BlogPost {
  title: string
  slug: string
  category: "how-to" | "industry" | "comparison" | "thought-leadership" | "product" | "technical"
  description: string
  publishDate: string
  lastModified: string
  readingTime: number             // minutes
  keywords: string[]
  relatedPages: string[]          // Internal links to pSEO pages
  content: string                 // MDX or markdown content
}
```

---

### `data/glossary-terms.ts`

```typescript
export interface GlossaryTerm {
  term: string                    // "T.38"
  slug: string                    // "t38"
  definition: string
  longDescription: string
  relatedTerms: string[]          // Other glossary slugs
  relatedPages: string[]          // pSEO page slugs
  primary_keyword: string         // "what is T.38"
  secondary_keywords: string[]
}
```

**Glossary terms to include (75):**
T.38, G3 fax, G4 fax, PSTN, VoIP fax, cloud fax, fax modem, fax header, cover page, fax number, DID number, toll-free fax, fax broadcast, fax blast, fax server, fax gateway, fax over IP (FoIP), HIPAA fax, secure fax, encrypted fax, fax confirmation, fax status, fax queue, fax resolution (standard/fine/superfine), fax compression, fax protocol, ITU-T, TIFF format, PDF fax, fax machine, multifunction printer (MFP), fax line, dedicated fax line, shared fax line, fax extension, fax forwarding, fax-to-email, email-to-fax, fax-to-PDF, OCR fax, fax archiving, fax audit trail, fax compliance, fax retention, fax signature, electronic signature vs fax, fax timestamp, fax sender ID, CSID (Called Subscriber Identification), TSID (Transmitting Subscriber Identification), fax busy signal, fax retry, fax failed, fax queued, fax delivered, fax pages, fax transmission speed, baud rate, fax bandwidth, fax latency, fax jitter, fax packet loss, fax quality, fax noise, fax error correction (ECM), fax polling, fax store-and-forward, fax on demand, fax broadcast list, fax cover sheet, fax confidentiality notice, fax disclaimer, fax number portability, local fax number, international fax number, toll-free fax number, vanity fax number

---

## Phase 1 — High-Intent Guides & Templates (Weeks 1–4)

**Total pages: 720**  
**Priority: HIGHEST** — These pages target users 1 step from downloading TigerFax.

### Step 1.1: Build Shared Infrastructure

Before any pages, build the reusable components and utilities:

**`lib/pseo/variety.ts`**
```typescript
// Deterministic variant picker — same output every build, different per page
export function pickVariant(variants: string[], seed: string): string {
  const hash = variants.reduce((acc, _, i) => acc + seed.charCodeAt(i % seed.length), 0)
  return variants[Math.abs(hash) % variants.length]
}
```

**`lib/pseo/schema.ts`**
```typescript
// JSON-LD builders for each page type
export function buildHowToSchema(steps: Step[], name: string): object
export function buildFAQSchema(faqs: FAQ[]): object
export function buildBreadcrumbSchema(crumbs: Breadcrumb[]): object
export function buildArticleSchema(post: BlogPost): object
export function buildLocalBusinessSchema(city: USCity): object
export function buildSoftwareAppSchema(): object  // Reuse from layout
```

**`lib/pseo/metadata.ts`**
```typescript
// generateMetadata() helpers per template type
export function devicePageMetadata(device: Device): Metadata
export function documentPageMetadata(doc: DocumentType): Metadata
export function docDevicePageMetadata(doc: DocumentType, device: Device): Metadata
export function coverSheetMetadata(sheet: CoverSheet): Metadata
export function competitorPageMetadata(competitor: Competitor, type: string): Metadata
export function countryPageMetadata(country: Country, type: string): Metadata
export function industryPageMetadata(industry: Industry, location?: string): Metadata
// etc.
```

**`components/pseo/BreadcrumbNav.tsx`**
- Renders breadcrumb trail from root to current page
- Includes BreadcrumbList JSON-LD schema
- Example: Home > How-To Guides > Fax from iPhone > Fax from iPhone 16

**`components/pseo/RelatedPages.tsx`**
- Accepts `links: { href: string; title: string; description: string }[]`
- Renders 3–5 related page cards
- Respects silo rules (see Internal Linking section)

**`components/pseo/CTABanner.tsx`**
- Accepts `variant: string` from data file
- Renders App Store download CTA
- Tracks click events to GA4

**`components/pseo/FAQSection.tsx`**
- Accepts `faqs: { question: string; answer: string }[]`
- Renders accordion UI
- Includes FAQPage JSON-LD schema

**`components/pseo/StepByStep.tsx`**
- Accepts `steps: { title: string; description: string; tip?: string }[]`
- Renders numbered steps with optional tips
- Includes HowTo JSON-LD schema

---

### Step 1.2: Device How-To Pages (20 pages)

**URL Pattern:** `/how-to/fax-from-[slug]`

**Pages:**
| URL | H1 | Primary Keyword |
|-----|-----|-----------------|
| `/how-to/fax-from-iphone` | How to Send a Fax from iPhone | how to fax from iphone |
| `/how-to/fax-from-iphone-16` | How to Send a Fax from iPhone 16 | how to fax from iphone 16 |
| `/how-to/fax-from-iphone-16-pro` | How to Send a Fax from iPhone 16 Pro | fax from iphone 16 pro |
| `/how-to/fax-from-iphone-15` | How to Send a Fax from iPhone 15 | how to fax from iphone 15 |
| `/how-to/fax-from-iphone-14` | How to Send a Fax from iPhone 14 | how to fax from iphone 14 |
| `/how-to/fax-from-iphone-13` | How to Send a Fax from iPhone 13 | fax from iphone 13 |
| `/how-to/fax-from-iphone-12` | How to Send a Fax from iPhone 12 | fax from iphone 12 |
| `/how-to/fax-from-iphone-se` | How to Send a Fax from iPhone SE | fax from iphone se |
| `/how-to/fax-from-ipad` | How to Send a Fax from iPad | how to fax from ipad |
| `/how-to/fax-from-ipad-pro` | How to Send a Fax from iPad Pro | fax from ipad pro |
| `/how-to/fax-from-ipad-air` | How to Send a Fax from iPad Air | fax from ipad air |
| `/how-to/fax-from-ipad-mini` | How to Send a Fax from iPad mini | fax from ipad mini |
| `/how-to/fax-from-phone` | How to Send a Fax from Your Phone | send fax from phone |
| `/how-to/fax-without-fax-machine` | How to Fax Without a Fax Machine | fax without fax machine |
| `/how-to/fax-from-camera` | How to Scan and Fax a Document | scan and fax document |
| `/how-to/send-fax-online` | How to Send a Fax Online | how to send fax online |
| `/how-to/receive-fax-on-iphone` | How to Receive a Fax on iPhone | receive fax on iphone |
| `/how-to/get-fax-number-on-iphone` | How to Get a Fax Number on iPhone | get fax number on iphone |
| `/how-to/fax-from-files-app` | How to Fax from the Files App on iPhone | fax from files app iphone |
| `/how-to/fax-from-photos-app` | How to Fax a Photo from iPhone | fax photo from iphone |

**Template structure:**
```
1. H1: "How to Send a Fax from {device.name} in 2026"
2. Intro paragraph (from device.intro_variants — deterministic pick)
3. [Conditional] Device-specific feature callout (LiDAR, camera specs, etc.)
4. Prerequisites section (TigerFax app, Apple ID, fax number)
5. StepByStep component (5 steps with device-specific tips)
   - Step 1: Download TigerFax
   - Step 2: Create account / sign in
   - Step 3: [Conditional] Scan document (if hasCamera) OR Upload file
   - Step 4: Enter recipient fax number
   - Step 5: Review and send
6. [Conditional] Camera scanning tips (if device.hasCamera)
7. [Conditional] LiDAR tips (if device.hasLiDAR)
8. [Conditional] iPad multi-window tips (if device.type === 'tablet')
9. Pricing section (Free tier, credits, Pro)
10. FAQSection (4 FAQs, device-specific)
11. RelatedPages (3 sibling device pages + 2 document guide pages)
12. CTABanner (from device.cta_variants)
13. BreadcrumbNav
```

**Silo links from device pages:**
- Up: `/how-to/` hub page
- Across: 2–3 sibling device pages (e.g., iPhone 16 → iPhone 15, iPhone 16 Pro)
- Cross-silo: 1 link to a relevant document guide (e.g., "Learn how to fax a PDF from iPhone")

---

### Step 1.3: Document Type Guide Pages (40 pages)

**URL Pattern:** `/guides/fax-[slug]`

**Pages (sample):**
| URL | H1 | Primary Keyword |
|-----|-----|-----------------|
| `/guides/fax-w9` | How to Fax a W-9 Form | how to fax a w9 |
| `/guides/fax-medical-records` | How to Fax Medical Records | how to fax medical records |
| `/guides/fax-prescription` | How to Fax a Prescription | how to fax a prescription |
| `/guides/fax-contract` | How to Fax a Contract | how to fax a contract |
| `/guides/fax-tax-documents` | How to Fax Tax Documents | how to fax tax documents |
| `/guides/fax-pdf` | How to Fax a PDF from iPhone | how to fax a pdf from iphone |
| `/guides/fax-photo` | How to Fax a Photo from iPhone | how to fax a photo from iphone |
| `/guides/fax-invoice` | How to Fax an Invoice | how to fax an invoice |
| `/guides/fax-nda` | How to Fax an NDA | how to fax an nda |
| `/guides/fax-lease-agreement` | How to Fax a Lease Agreement | how to fax a lease agreement |
| `/guides/fax-insurance-claim` | How to Fax an Insurance Claim | how to fax an insurance claim |
| `/guides/fax-court-documents` | How to Fax Court Documents | how to fax court documents |
| `/guides/fax-immigration-forms` | How to Fax Immigration Forms | how to fax immigration forms |
| `/guides/fax-1099` | How to Fax a 1099 Form | how to fax a 1099 |
| `/guides/fax-hipaa-form` | How to Fax a HIPAA Authorization Form | how to fax hipaa form |
| ... (40 total) | | |

**Template structure:**
```
1. H1: "How to Fax a {doc.name} from Your iPhone"
2. Intro (from doc.intro_variants)
3. [Conditional] Compliance callout (if doc.isSensitive — HIPAA, IRS, etc.)
4. [Conditional] Multi-page tips (if doc.isMultiPage)
5. What you'll need section
6. StepByStep (document-specific steps)
7. [Conditional] Security tips (if doc.isSensitive)
8. [Conditional] Cover page recommendation (if doc.isSensitive)
9. Common mistakes to avoid
10. FAQSection (4 FAQs, document-specific)
11. RelatedPages (3 sibling document pages + 2 device how-to pages)
12. CTABanner
13. BreadcrumbNav
```

---

### Step 1.4: Document × Device Matrix Pages (600 pages)

**URL Pattern:** `/guides/fax-[document]/from-[device]`

**Example pages:**
- `/guides/fax-w9/from-iphone-16`
- `/guides/fax-medical-records/from-ipad`
- `/guides/fax-contract/from-iphone-15`

**Anti-thin-content strategy — conditional blocks:**
```typescript
// Each page assembles from these conditional modules:

// Module 1: Document-specific intro (from doc.intro_variants)
// Module 2: Device-specific intro (from device.intro_variants)
// Module 3: Combined unique sentence (generated from both)

// Module 4: Conditional — Camera scan flow (if device.hasCamera)
//   → Includes device-specific camera tips
//   → Includes document-specific scan tips (e.g., "For W-9, ensure all fields are legible")

// Module 5: Conditional — File upload flow (if !device.hasCamera OR user has existing file)
//   → Device-specific file picker instructions (Files app, Photos app, iCloud)

// Module 6: Conditional — LiDAR tips (if device.hasLiDAR && doc.isMultiPage)
//   → "iPhone 16 Pro's LiDAR scanner automatically detects document edges..."

// Module 7: Conditional — Compliance callout (if doc.isSensitive)
//   → Document-specific compliance info

// Module 8: Conditional — Multi-page tips (if doc.isMultiPage)
//   → Device-specific multi-page scanning workflow

// Module 9: Conditional — iPad layout tips (if device.type === 'tablet')
//   → Split-screen workflow, Apple Pencil annotation

// Module 10: Step-by-step (combines device steps + document steps)

// Module 11: FAQs (2 device-specific + 2 document-specific = 4 unique FAQs)

// Module 12: Related pages (parent doc page + parent device page + 2 siblings)
```

**Minimum content requirement:** 600 unique words per page. Build-time validation rejects pages below this threshold.

---

### Step 1.5: Cover Sheet Template Pages (60 pages)

**URL Pattern:** `/templates/[slug]`

**Template structure:**
```
1. H1: "{sheet.name} — Free Download"
2. Intro (from sheet.intro_variants)
3. Preview image (dynamic OG-style image with cover sheet mockup)
4. Fields included section (list of form fields)
5. When to use this cover sheet
6. Download/print button (links to PDF or TigerFax in-app)
7. How to use with TigerFax (3 steps)
8. [Conditional] Compliance note (if sheet.compliance)
9. [Conditional] Industry context (if sheet.industry)
10. FAQSection (3 FAQs)
11. RelatedPages (3 other cover sheet types)
12. CTABanner: "Use TigerFax's built-in cover pages"
13. BreadcrumbNav
```

---

### Step 1.6: Hub Pages

Create hub/index pages for each category:
- `/how-to/` — Lists all 20 device how-to pages
- `/guides/` — Lists all 40 document guide pages
- `/templates/` — Lists all 60 cover sheet templates

Hub pages are **not** programmatic — they are hand-crafted, high-quality landing pages that serve as the top of each silo.

---

### Step 1.7: Update Sitemap

Add to `sitemap.ts`:
```typescript
// Dynamically generate from data files
const howToPages = devices.map(d => ({
  url: `${baseUrl}/how-to/fax-from-${d.slug}`,
  lastModified: new Date(),
  changeFrequency: 'monthly',
  priority: 0.8,
}))

const guidePages = documentTypes.map(d => ({
  url: `${baseUrl}/guides/fax-${d.slug}`,
  lastModified: new Date(),
  changeFrequency: 'monthly',
  priority: 0.8,
}))

// etc. for all categories
```

**Phase 1 sitemap submission:** Submit `sitemap-phase1.xml` to Google Search Console after launch.

---

## Phase 2 — Competitor Pages (Weeks 5–6)

**Total pages: 80**  
**Priority: HIGH** — Commercial intent, high conversion potential.

### Step 2.1: Competitor Page Types

| Type | URL Pattern | Count | Example |
|------|-------------|-------|---------|
| TigerFax vs Competitor | `/compare/tigerfax-vs-[slug]` | 20 | `/compare/tigerfax-vs-efax` |
| Competitor Alternative | `/compare/[slug]-alternative` | 20 | `/compare/efax-alternative` |
| Competitor Review | `/compare/[slug]-review` | 20 | `/compare/efax-review` |
| Competitor Pricing | `/compare/[slug]-pricing` | 20 | `/compare/efax-pricing` |

### Step 2.2: "TigerFax vs X" Template

```
1. H1: "TigerFax vs {competitor.name}: Which Fax App Is Better in 2026?"
2. Intro (from competitor.intro_variants)
3. Quick verdict box (TigerFax wins for: mobile users, price, simplicity)
4. Feature comparison table (side-by-side)
5. Pricing comparison section
6. TigerFax pros section
7. {Competitor} pros section
8. Who should use TigerFax
9. Who should use {Competitor}
10. Final verdict (from competitor.verdict)
11. FAQSection (4 FAQs)
12. RelatedPages (3 other comparison pages)
13. CTABanner: "Try TigerFax Free"
14. BreadcrumbNav
```

### Step 2.3: Hub Page

`/compare/` — Lists all comparison pages, organized by type.

---

## Phase 3 — International / Country Pages (Weeks 7–10)

**Total pages: 1,900**  
**Gate:** None — country pages are safe matrix (each country has genuinely different content).

### Step 3.1: Send Fax to [Country] (150 pages)

**URL Pattern:** `/send-fax/to-[country-slug]`

**Template structure:**
```
1. H1: "Send a Fax to {country.name} from Your iPhone"
2. Intro (from country.intro_variants — deterministic pick)
3. [Conditional] Special format warning (if country.hasSpecialFormat)
4. Dialing format section (country.dialPrefix, country.faxFormat)
5. [Conditional] Country code requirement note (if country.requiresCountryCode)
6. Step-by-step guide (5 steps, country-specific dialing in step 4)
7. Pricing info (TigerFax international rates)
8. Common use cases (from country.commonUseCases)
9. [Conditional] Timezone consideration (if country.continent === 'Asia' or 'Europe')
10. [Conditional] Business language note (if country.businessLanguage !== 'English')
11. local_stat callout box (unique data point about fax in this country)
12. FAQSection (4 FAQs, country-specific)
13. RelatedPages (3 nearby countries + 1 device how-to page)
14. CTABanner (from country.cta_variants)
15. BreadcrumbNav
```

### Step 3.2: Receive Fax from [Country] (150 pages)

**URL Pattern:** `/receive-fax/from-[country-slug]`

Similar template but focused on receiving, using `country.receive_intro_variants` and `country.receive_use_cases`.

### Step 3.3: Get Fax Number in [Country] (100 pages)

**URL Pattern:** `/fax-number/[country-slug]`

Focused on TigerFax Pro's dedicated number feature, using `country.number_intro_variants`.

### Step 3.4: Send Fax to [Country] from [Device] (1,500 pages)

**URL Pattern:** `/send-fax/to-[country]/from-[device]`

**Anti-thin-content:** Each page combines:
- Country-specific dialing format + device-specific scanning/upload flow
- Conditional blocks: camera tips (device) + timezone notes (country) + format warnings (country) + LiDAR tips (device)
- Unique FAQs: 2 country-specific + 2 device-specific

**Silo links:**
- Up: `/send-fax/to-[country]` (parent)
- Across: 2 sibling device pages for same country
- Cross-silo: 1 link to `/how-to/fax-from-[device]`

### Step 3.5: Hub Pages

- `/send-fax/` — Lists all country send pages, organized by continent
- `/receive-fax/` — Lists all country receive pages
- `/fax-number/` — Lists country fax number pages + US area code pages

---

## Phase 4 — US Geographic Pages (Weeks 11–14)

**Total pages: 900**  
**Gate: Indexation > 80% from Phases 1–3 before proceeding.**

### Step 4.1: Indexation Check

Before launching Phase 4:
1. Check Google Search Console → Coverage → Indexed pages
2. Calculate: (Indexed pages / Submitted pages) × 100
3. If < 80%: Pause, audit quality issues, fix before proceeding
4. If ≥ 80%: Proceed with Phase 4

### Step 4.2: US Area Code Pages (350 pages)

**URL Pattern:** `/fax-number/area-code/[code]`

**Template structure:**
```
1. H1: "Get a {code} Fax Number — {city}, {state}"
2. Intro (from areaCode.intro_variants)
3. What the {code} area code covers
4. local_stat callout
5. Why get a local fax number
6. How TigerFax Pro provides dedicated numbers
7. Step-by-step: Get your {code} fax number
8. Pricing (Pro plan)
9. FAQSection (3 FAQs)
10. RelatedPages (3 nearby area codes + state page)
11. CTABanner: "Get Your {code} Fax Number"
12. BreadcrumbNav
```

### Step 4.3: US State Pages (50 pages)

**URL Pattern:** `/fax-services/[state-slug]`

**Template structure:**
```
1. H1: "Fax Services in {state.name} — Mobile Fax App"
2. Intro (from state.intro_variants)
3. {state.name} business landscape overview
4. Dominant industries in {state.name}
5. local_stat callout
6. How TigerFax serves {state.name} businesses
7. Major cities section (links to city pages)
8. Area codes in {state.name} (links to area code pages)
9. FAQSection (3 FAQs)
10. RelatedPages (3 neighboring states)
11. CTABanner
12. BreadcrumbNav
```

### Step 4.4: City Fax Services Pages (250 pages)

**URL Pattern:** `/fax-services/[state]/[city]`

**Canary test:** Launch top 50 cities first. Wait 4 weeks. Check indexation. If > 80%, launch remaining 200.

**Template structure:**
```
1. H1: "Fax Services in {city.name}, {state.stateAbbr}"
2. Intro (from city.intro_variants — deterministic pick)
3. {city.name} business overview (city.businessCount, city.population)
4. local_stat callout (UNIQUE per city — real data)
5. [Conditional] Medical hub callout (if city.isMajorMedicalHub)
6. [Conditional] Legal hub callout (if city.isMajorLegalHub)
7. [Conditional] Finance hub callout (if city.isMajorFinanceHub)
8. [Conditional] Tech hub callout (if city.isTechHub)
9. [Conditional] Government callout (if city.isGovernmentSeat)
10. Dominant industries section (links to industry pages)
11. Area codes for {city.name}
12. How TigerFax serves {city.name} businesses
13. FAQSection (3 FAQs)
14. RelatedPages (3 nearby cities + state page)
15. CTABanner
16. BreadcrumbNav
```

**Hard rule:** If `city.local_stat` is empty or generic, the page is NOT generated. Every city page must have a real, unique data point.

### Step 4.5: City Fax Number Pages (250 pages)

**URL Pattern:** `/get-fax-number/[state]/[city]`

Focused on TigerFax Pro's dedicated number feature for local businesses.

---

## Phase 5 — Industry Pages (Weeks 15–19)

**Total pages: 2,280**  
**Gate: Indexation > 80% from Phase 4 before proceeding.**

### Step 5.1: Industry Core Pages (30 pages)

**URL Pattern:** `/industries/[industry-slug]`

**Template structure:**
```
1. H1: "Mobile Fax for {industry.name} — Send & Receive from iPhone"
2. Intro (from industry.intro_variants)
3. Why {industry.name} still relies on fax
4. Pain points section (from industry.painPoints)
5. [Conditional] Compliance section (if industry.compliance.length > 0)
6. Common documents section (from industry.commonDocuments — links to guide pages)
7. TigerFax features for {industry.name}
8. Workflow description (from industry.workflow_description)
9. Pricing section
10. FAQSection (4 FAQs, industry-specific)
11. RelatedPages (3 related industries + 2 document guides)
12. CTABanner (from industry.cta_variants)
13. BreadcrumbNav
```

### Step 5.2: Industry × State Pages (1,500 pages)

**URL Pattern:** `/industries/[industry]/[state]`

**Anti-thin-content strategy:**
- Combines `industry.state_intro_template` with real state data
- Conditional blocks: compliance (industry) + state business stats + dominant industries overlap check
- If `state.dominantIndustries.includes(industry.slug)` → show "major hub" callout
- Unique FAQs: 2 industry-specific + 2 state-specific
- Links to city pages within that state for that industry

**Minimum unique content:** 600 words. Build-time validation enforced.

### Step 5.3: Industry × Top 25 Metro Pages (750 pages)

**URL Pattern:** `/industries/[industry]/[state]/[city]`

**Only for top 25 metros:** New York, Los Angeles, Chicago, Houston, Phoenix, Philadelphia, San Antonio, San Diego, Dallas, San Jose, Austin, Jacksonville, Fort Worth, Columbus, Charlotte, Indianapolis, San Francisco, Seattle, Denver, Nashville, Oklahoma City, El Paso, Washington DC, Las Vegas, Louisville

**Anti-thin-content strategy:**
- Requires `city.dominantIndustries.includes(industry.slug)` OR city population > 500,000
- Uses `city.local_stat` + `industry.compliance_callout` + conditional blocks
- If city is NOT a hub for that industry → page is NOT generated (prevents "Healthcare fax in Las Vegas" thin content)
- Estimated actual pages generated: ~600–700 (not all 750 combinations will pass the quality gate)

---

## Phase 6 — Content Hub & Authority (Weeks 20–24)

**Total pages: 1,475**  
**Gate: Indexation > 80% from Phase 5 before proceeding.**

### Step 6.1: Industry × Country Pages (1,250 pages)

**URL Pattern:** `/industries/[industry]/[country]`

Only for top 25 industries × top 50 countries. Same quality gates as industry×city.

### Step 6.2: Blog Articles (100 articles)

**URL Pattern:** `/blog/[slug]`

**Content calendar (sample):**

| Title | Category | Target Keyword |
|-------|----------|----------------|
| Is Faxing Still Relevant in 2026? | Thought Leadership | is faxing still used |
| Fax vs Email: When You Still Need to Fax | Comparison | fax vs email |
| HIPAA Fax Compliance: Complete Guide | Industry | HIPAA fax compliance |
| How to Get a Fax Number on Your Phone | How-To | get fax number on phone |
| Can You Fax from iPhone Without an App? | FAQ | fax from iphone without app |
| 10 Industries That Still Rely on Fax | Industry | industries that use fax |
| What Is an Online Fax Service? | Educational | what is online fax |
| How Cloud Fax Works (VoIP/T.38 Explained) | Technical | how cloud fax works |
| TigerFax Security: How We Protect Your Faxes | Trust | secure fax app |
| How to Send International Fax from iPhone | How-To | international fax from iphone |
| The Complete Guide to Fax Cover Sheets | How-To | fax cover sheet guide |
| How to Fax During Tax Season | Seasonal | fax tax documents |
| Mobile Fax for Small Business: Complete Guide | Industry | mobile fax small business |
| How to Set Up a Dedicated Fax Number | How-To | dedicated fax number setup |
| Fax Number Formats by Country | Reference | international fax number format |
| ... (100 total) | | |

### Step 6.3: Glossary Pages (75 pages)

**URL Pattern:** `/glossary/[term-slug]`

**Template structure:**
```
1. H1: "What Is {term.term}? — Fax Glossary"
2. Short definition (1–2 sentences)
3. Long description (3–5 paragraphs)
4. Related terms (links to other glossary pages)
5. How it relates to TigerFax
6. FAQSection (2 FAQs)
7. RelatedPages (2 guide pages + 1 blog article)
8. CTABanner
9. BreadcrumbNav
```

### Step 6.4: FAQ Cluster Pages (50 pages)

**URL Pattern:** `/faq/[slug]`

Groups of 5–10 related questions per page. Each with FAQPage schema.

---

## Phase 7 — Expansion to 10K+ (Weeks 25+)

**Gate: Indexation > 80% across ALL phases.**

### Expansion Options (in priority order):

1. **More US cities** (250 → 500): Add next 250 cities if Phase 4 city pages index well
2. **Canadian cities** (~100): Toronto, Vancouver, Montreal, Calgary, Ottawa, Edmonton, etc.
3. **UK cities** (~100): London, Manchester, Birmingham, Leeds, Glasgow, etc.
4. **Australian cities** (~50): Sydney, Melbourne, Brisbane, Perth, Adelaide, etc.
5. **Feature × Industry matrix** (~900): 30 TigerFax features × 30 industries
6. **Seasonal content** (~50): Tax season, open enrollment, back-to-school, etc.
7. **Integration pages** (~30): Fax from Google Drive, Dropbox, iCloud, etc.
8. **Cross-competitor comparisons** (~100): Only if direct comparisons perform well

---

## Technical Architecture

### Next.js Configuration

```typescript
// next.config.mjs
const nextConfig = {
  // Enable static generation for all pSEO pages
  output: 'export', // OR use ISR per page
  
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 86400,
  },
  
  // Headers for crawl budget
  async headers() {
    return [
      {
        source: '/how-to/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' }],
      },
      // etc. for each pSEO category
    ]
  },
}
```

### Static Generation Pattern

```typescript
// app/how-to/[slug]/page.tsx
export async function generateStaticParams() {
  return devices.map(device => ({ slug: `fax-from-${device.slug}` }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const device = getDeviceBySlug(params.slug)
  return devicePageMetadata(device)
}

export default function DeviceHowToPage({ params }: Props) {
  const device = getDeviceBySlug(params.slug)
  const intro = pickVariant(device.intro_variants, params.slug)
  const cta = pickVariant(device.cta_variants, params.slug)
  // ... render template
}
```

### ISR for Stable Pages

```typescript
// For pages that rarely change (country pages, area code pages)
export const revalidate = 604800 // 7 days
```

---

## Internal Linking Strategy (Silo Structure)

### Silo Architecture

```
ROOT (/)
├── /how-to/                    ← Silo Hub
│   ├── /how-to/fax-from-iphone         ← Parent
│   │   ├── /how-to/fax-from-iphone-16  ← Child
│   │   └── /how-to/fax-from-iphone-15  ← Child
│   └── /how-to/fax-from-ipad           ← Parent
│       └── /how-to/fax-from-ipad-pro   ← Child
├── /guides/                    ← Silo Hub
│   ├── /guides/fax-w9                  ← Parent
│   │   ├── /guides/fax-w9/from-iphone  ← Child
│   │   └── /guides/fax-w9/from-ipad    ← Child
│   └── /guides/fax-medical-records     ← Parent
├── /industries/                ← Silo Hub
│   ├── /industries/healthcare          ← Parent
│   │   ├── /industries/healthcare/texas ← Child
│   │   │   └── /industries/healthcare/texas/houston ← Grandchild
│   │   └── /industries/healthcare/california
└── /send-fax/                  ← Silo Hub
    └── /send-fax/to-japan              ← Parent
        ├── /send-fax/to-japan/from-iphone ← Child
        └── /send-fax/to-japan/from-ipad   ← Child
```

### Link Rules Per Page

| Link Type | Count | Rule |
|-----------|-------|------|
| Up (to parent/hub) | 1 | Always present in breadcrumb + body |
| Across (siblings) | 2–3 | Same category, same level |
| Down (to children) | 1–2 | Only if children exist |
| Cross-silo | 1 | One link to a related page in a different silo |
| **Total body links** | **Max 7** | Breadcrumbs are separate |

### Cross-Silo Link Rules

| Page Type | Cross-Silo Link To |
|-----------|-------------------|
| Device how-to | 1 document guide (e.g., "fax a PDF from iPhone") |
| Document guide | 1 industry page (e.g., "fax medical records" → healthcare) |
| Country page | 1 device how-to (e.g., "send fax to Japan" → "from iPhone") |
| Industry page | 1 document guide (e.g., "healthcare" → "fax medical records") |
| City page | 1 industry page (e.g., "Houston" → "healthcare" if isMajorMedicalHub) |
| Cover sheet | 1 document guide (e.g., "medical cover sheet" → "fax medical records") |
| Competitor page | 1 how-to page (e.g., "TigerFax vs eFax" → "how to fax from iPhone") |

---

## Dynamic Image Generation

### OG Image Per Page (Satori)

```typescript
// app/how-to/[slug]/opengraph-image.tsx
import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }

export default async function OGImage({ params }: { params: { slug: string } }) {
  const device = getDeviceBySlug(params.slug)
  
  return new ImageResponse(
    <div style={{
      background: 'linear-gradient(135deg, #FF6B00 0%, #FF8C00 100%)',
      width: '100%', height: '100%',
      display: 'flex', flexDirection: 'column',
      alignItems: 'flex-start', justifyContent: 'center',
      padding: '60px',
    }}>
      <div style={{ fontSize: 24, color: 'rgba(255,255,255,0.8)', marginBottom: 16 }}>
        TigerFax Guide
      </div>
      <div style={{ fontSize: 56, fontWeight: 700, color: 'white', lineHeight: 1.2, maxWidth: 800 }}>
        How to Fax from {device.name}
      </div>
      <div style={{ fontSize: 28, color: 'rgba(255,255,255,0.9)', marginTop: 24 }}>
        Step-by-step guide • Free to start
      </div>
      <div style={{ position: 'absolute', bottom: 40, right: 60, fontSize: 20, color: 'rgba(255,255,255,0.7)' }}>
        tigerfax.app
      </div>
    </div>
  )
}
```

### Category-Specific OG Badges

| Category | Badge | Background |
|----------|-------|------------|
| Device how-to | 📱 Device name | Orange gradient |
| Document guide | 📄 Document type | Blue gradient |
| Country page | 🌍 Country flag emoji | Green gradient |
| Industry page | Industry icon | Purple gradient |
| City page | 📍 City, State | Teal gradient |
| Competitor | ⚔️ vs badge | Dark gradient |
| Cover sheet | 📋 Template badge | Gray gradient |

---

## Crawl Budget Protection

### Core Web Vitals Targets

| Metric | Target | Why |
|--------|--------|-----|
| LCP | < 1.5s | Static pages should easily hit this |
| CLS | < 0.05 | No layout shifts from dynamic content |
| INP | < 150ms | Minimal JS on pSEO pages |
| TTFB | < 200ms | Vercel Edge Network |

### Sitemap Strategy

Split into sub-sitemaps (max 5,000 URLs each):

```typescript
// app/sitemap.ts → returns sitemap index
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${baseUrl}/sitemap-core.xml` },
    { url: `${baseUrl}/sitemap-how-to.xml` },
    { url: `${baseUrl}/sitemap-guides.xml` },
    { url: `${baseUrl}/sitemap-templates.xml` },
    { url: `${baseUrl}/sitemap-compare.xml` },
    { url: `${baseUrl}/sitemap-countries.xml` },
    { url: `${baseUrl}/sitemap-area-codes.xml` },
    { url: `${baseUrl}/sitemap-states-cities.xml` },
    { url: `${baseUrl}/sitemap-industries.xml` },
    { url: `${baseUrl}/sitemap-blog.xml` },
    { url: `${baseUrl}/sitemap-glossary.xml` },
  ]
}
```

### Gradual Sitemap Submission

| Phase | Submit to GSC | Wait Before Next |
|-------|--------------|-----------------|
| Phase 1 | `sitemap-how-to.xml`, `sitemap-guides.xml`, `sitemap-templates.xml` | 3–4 weeks |
| Phase 2 | `sitemap-compare.xml` | 2 weeks |
| Phase 3 | `sitemap-countries.xml` | 4 weeks |
| Phase 4 | `sitemap-area-codes.xml`, `sitemap-states-cities.xml` | 4 weeks |
| Phase 5 | `sitemap-industries.xml` | 4 weeks |
| Phase 6 | `sitemap-blog.xml`, `sitemap-glossary.xml` | Ongoing |

### robots.txt Rules

```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
Disallow: /preview/

Sitemap: https://www.tigerfax.app/sitemap.xml
```

---

## Content Quality Standards

### Minimum Requirements Per Page

| Requirement | Standard |
|-------------|----------|
| Word count | ≥ 600 words (enforced at build time) |
| Unique intro | Must use variety system — no two sibling pages share same opening |
| H1 | Unique across all pages — validated at build time |
| Meta description | Unique, 150–160 chars, includes primary keyword |
| Meta title | Unique, 50–60 chars, includes primary keyword |
| Internal links | 4–7 per page (breadcrumbs excluded) |
| FAQs | Minimum 3 per page |
| Schema markup | At minimum: BreadcrumbList + FAQPage or HowTo |
| OG image | Dynamic, unique per page |
| CTA | At least 1 App Store CTA per page |

### Build-Time Validation

Create `scripts/validate-pseo.ts` that runs before every build:

```typescript
// Checks:
// 1. No duplicate H1s across all pages
// 2. No duplicate meta titles
// 3. No duplicate meta descriptions
// 4. All pages meet minimum word count
// 5. All internal links resolve to real pages
// 6. All data entries have required fields
// 7. No empty variety arrays
// 8. All slugs are URL-safe
```

### Conditional Content Block Rules

**NEVER do this (thin):**
```typescript
<p>Send a fax to {country.name} using TigerFax on your {device.name}.</p>
```

**ALWAYS do this (conditional blocks):**
```typescript
{country.hasSpecialFormat && (
  <DialingFormatSection 
    prefix={country.dialPrefix} 
    format={country.faxFormat}
    warning={`${country.name} uses a different fax number format than the US`}
  />
)}
{device.hasCamera && (
  <CameraScanSection 
    device={device}
    tips={device.camera_tips}
    lidarEnabled={device.hasLiDAR}
  />
)}
{document?.isSensitive && (
  <SecurityCallout 
    compliance={document.compliance}
    recommendation="Always use a cover page with a confidentiality notice"
  />
)}
```

---

## Indexation Gates & Quality Control

### Gate Thresholds

| After Phase | Check | Threshold | Action if Below |
|-------------|-------|-----------|-----------------|
| Phase 1 | GSC Coverage | > 80% indexed | Audit quality, fix issues |
| Phase 3 | GSC Coverage | > 80% indexed | Pause Phase 4 |
| Phase 4 | GSC Coverage | > 80% indexed | Pause Phase 5 |
| Phase 5 | GSC Coverage | > 80% indexed | Pause Phase 6 |
| Phase 6 | GSC Coverage | > 80% indexed | Pause Phase 7 |

### How to Check Indexation Rate

1. Google Search Console → Index → Pages
2. Filter by sitemap (e.g., `sitemap-how-to.xml`)
3. Count "Indexed" vs "Not indexed"
4. Calculate: Indexed / (Indexed + Not indexed) × 100

### Common Indexation Issues & Fixes

| Issue | Fix |
|-------|-----|
| "Discovered - currently not indexed" | Improve internal linking to these pages |
| "Crawled - currently not indexed" | Improve content quality, add more unique content |
| "Duplicate without canonical" | Ensure canonical tags are correct |
| "Soft 404" | Ensure all pages return real content |
| "Blocked by robots.txt" | Check robots.txt rules |

---

## Tracking & KPIs

### Primary KPIs (Revenue-Focused)

| KPI | Tool | Target |
|-----|------|--------|
| App Store clicks per page | GA4 + GSC | Track per template category |
| Revenue per organic visitor | GA4 + RevenueCat | > $0.10/visitor |
| Organic conversion rate | GA4 | > 2% (click to App Store) |
| Indexed pages | GSC | > 80% of submitted |

### Secondary KPIs (Traffic)

| KPI | Tool | Target |
|-----|------|--------|
| Organic impressions | GSC | Growing MoM |
| Organic clicks | GSC | Growing MoM |
| Average position | GSC | < 20 for target keywords |
| Pages with clicks | GSC | > 50% of indexed pages |

### Reporting Cadence

- **Weekly:** GSC impressions/clicks, new pages indexed
- **Monthly:** Revenue per visitor, conversion rate, top-performing pages
- **Per Phase:** Indexation rate check before proceeding to next phase

### GA4 Events to Track

```typescript
// Track on every pSEO page
gtag('event', 'pseo_page_view', {
  page_category: 'how-to' | 'guides' | 'compare' | 'country' | 'industry' | 'city',
  page_template: 'device' | 'document' | 'doc-device' | 'cover-sheet' | 'competitor' | etc,
  page_slug: params.slug,
})

// Track CTA clicks
gtag('event', 'app_store_click', {
  source_page: params.slug,
  source_category: category,
  cta_variant: ctaVariant,
})
```

---

## Projected Impact

| Timeframe | Indexed Pages | Est. Monthly Organic Traffic | Notes |
|-----------|--------------|------------------------------|-------|
| Month 1–2 | ~400 | 100–300 | Phase 1 pages indexing |
| Month 3–4 | ~1,500 | 800–2,000 | Phase 2–3 indexing |
| Month 5–6 | ~3,500 | 3,000–6,000 | Phase 4 indexing |
| Month 7–9 | ~5,500 | 5,000–10,000 | Phase 5 indexing |
| Month 12 | ~7,000+ | 8,000–15,000 | Optimized |

**Note:** Fax-related search volume is declining YoY. These projections are conservative (40–50% of theoretical maximum). Focus on **revenue per visitor** over raw traffic.

---

## Anti-Thin-Content Checklist

Before any page goes live, verify:

- [ ] Page has ≥ 600 unique words
- [ ] H1 is unique across all pages
- [ ] Intro paragraph is unique (uses variety system)
- [ ] At least 3 conditional content blocks are active (not just static text)
- [ ] FAQs are specific to this page's combination (not generic)
- [ ] Internal links follow silo rules (max 7, correct hierarchy)
- [ ] OG image is dynamically generated with page-specific text
- [ ] Schema markup is present and valid
- [ ] Meta title and description are unique and keyword-optimized
- [ ] CTA is present and tracked
- [ ] No "lorem ipsum" or placeholder content
- [ ] All data fields are populated (no empty strings)
- [ ] Page passes build-time validation script

---

## Quick Reference: Page Count Summary

| Phase | Category | Pages |
|-------|----------|-------|
| 1 | Device how-to guides | 20 |
| 1 | Document type guides | 40 |
| 1 | Document × Device matrix | 600 |
| 1 | Cover sheet templates | 60 |
| 2 | Competitor pages | 80 |
| 3 | Country send/receive/number | 400 |
| 3 | Country × Device | 1,500 |
| 4 | US area codes | 350 |
| 4 | US states | 50 |
| 4 | US cities (fax services + number) | 500 |
| 5 | Industry core | 30 |
| 5 | Industry × State | 1,500 |
| 5 | Industry × Top 25 metros | ~700 |
| 6 | Industry × Country | 1,250 |
| 6 | Blog articles | 100 |
| 6 | Glossary terms | 75 |
| 6 | FAQ clusters | 50 |
| **Total Base** | | **~7,305** |
| 7 | Expansion (gated) | +2,700 |
| **Total with Expansion** | | **~10,000+** |

---

*This document is the single source of truth for TigerFax pSEO implementation. Update it as phases are completed and new learnings emerge.*
