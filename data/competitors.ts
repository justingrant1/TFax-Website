export interface Competitor {
  name: string
  slug: string
  website: string
  appStoreUrl?: string
  type: "enterprise" | "consumer" | "mobile-first"
  tagline: string
  pricing: {
    free: boolean
    freePageLimit?: number
    startingPrice: number // per month
    pricePerPage?: number
    hasDedicatedNumber: boolean
    dedicatedNumberPrice?: number // per month add-on
  }
  features: {
    sendFax: boolean
    receiveFax: boolean
    dedicatedNumber: boolean
    hipaaCompliant: boolean
    mobileApp: boolean
    iosApp: boolean
    androidApp: boolean
    emailToFax: boolean
    cloudIntegrations: boolean
    coverPage: boolean
    batchFax: boolean
    ocrScanning: boolean
    internationalFax: boolean
    faxHistory: boolean
    deliveryConfirmation: boolean
  }
  pros: string[]
  cons: string[]
  targetAudience: string
  primary_keyword: string
  secondary_keywords: string[]
  verdict: string
  tigerFaxAdvantage: string
  intro_variants: string[]
  alternative_intro_variants: string[]
  review_intro_variants: string[]
  pricing_intro_variants: string[]
  faqs: Array<{ question: string; answer: string }>
}

export const competitors: Competitor[] = [
  {
    name: "eFax",
    slug: "efax",
    website: "https://www.efax.com",
    type: "enterprise",
    tagline: "The world's #1 online fax service",
    pricing: {
      free: false,
      startingPrice: 16.95,
      pricePerPage: 0.10,
      hasDedicatedNumber: true,
      dedicatedNumberPrice: 0,
    },
    features: {
      sendFax: true, receiveFax: true, dedicatedNumber: true, hipaaCompliant: true,
      mobileApp: true, iosApp: true, androidApp: true, emailToFax: true,
      cloudIntegrations: true, coverPage: true, batchFax: true, ocrScanning: false,
      internationalFax: true, faxHistory: true, deliveryConfirmation: true,
    },
    pros: [
      "Established brand with 25+ years in the industry",
      "HIPAA-compliant plans available",
      "Dedicated fax number included",
      "Email-to-fax integration",
      "International fax support in 50+ countries",
    ],
    cons: [
      "No free plan — starts at $16.95/month",
      "Overage fees can add up quickly",
      "Mobile app is clunky compared to modern alternatives",
      "Requires a monthly subscription even for occasional use",
      "Setup process is more complex than mobile-first apps",
    ],
    targetAudience: "Enterprise businesses and professionals who need a dedicated fax number and high-volume sending",
    primary_keyword: "tigerfax vs efax",
    secondary_keywords: ["efax alternative", "efax review", "efax pricing", "efax vs tigerfax", "efax free alternative"],
    verdict: "eFax is a solid enterprise choice but overkill for most iPhone users. TigerFax offers the same core functionality — send, receive, dedicated number — at a fraction of the cost with a far better mobile experience.",
    tigerFaxAdvantage: "TigerFax starts free (no credit card) and costs $4.99/month for Pro vs eFax's $16.95/month minimum. For mobile-first users who primarily need to send faxes occasionally, TigerFax is the clear winner on price and simplicity.",
    intro_variants: [
      "eFax has been around since 1996 — but does a 25-year-old fax service still make sense in 2026 when TigerFax offers the same features for a fraction of the price?",
      "Comparing TigerFax vs eFax comes down to one question: do you need enterprise features, or do you just need to send a fax from your iPhone quickly and cheaply?",
      "eFax is the most recognized name in online faxing, but recognition doesn't always mean best value. Here's how it stacks up against TigerFax in 2026.",
    ],
    alternative_intro_variants: [
      "Looking for an eFax alternative that's free to start and built for iPhone? TigerFax delivers everything eFax offers — without the $16.95/month price tag.",
      "eFax works, but at $16.95/month it's expensive for occasional faxing. TigerFax is the best eFax alternative for iPhone users who want to pay only when they fax.",
      "If you're canceling eFax or looking for a cheaper alternative, TigerFax is the mobile-first replacement that costs 70% less.",
    ],
    review_intro_variants: [
      "eFax is one of the oldest online fax services — but age doesn't always mean best. Here's an honest review of eFax in 2026.",
      "After testing eFax extensively, here's what we found: great for enterprises, expensive for everyone else.",
      "eFax review 2026: solid features, outdated mobile experience, and a price point that's hard to justify for casual users.",
    ],
    pricing_intro_variants: [
      "eFax pricing starts at $16.95/month — here's exactly what you get, what the hidden fees are, and how it compares to TigerFax.",
      "eFax's pricing structure is more complex than it appears. Here's a complete breakdown of eFax costs in 2026.",
      "Is eFax worth $16.95/month? We break down every eFax pricing tier and compare it to TigerFax's $4.99/month Pro plan.",
    ],
    faqs: [
      { question: "Is eFax free?", answer: "No — eFax does not offer a free plan. The cheapest eFax plan starts at $16.95/month. TigerFax offers a free tier with 3 pages included, and a Pro plan at $4.99/month." },
      { question: "Can I use eFax on iPhone?", answer: "Yes, eFax has an iOS app. However, many users find the eFax mobile app clunky compared to mobile-first alternatives like TigerFax, which was designed specifically for iPhone." },
      { question: "Does eFax include a dedicated fax number?", answer: "Yes, eFax includes a dedicated fax number on all paid plans. TigerFax Pro ($4.99/month) also includes a dedicated US fax number." },
      { question: "What's the best eFax alternative for iPhone?", answer: "TigerFax is the top eFax alternative for iPhone users. It's free to start, costs $4.99/month for unlimited sending, and was built specifically for iOS with a clean, modern interface." },
    ],
  },
  {
    name: "Fax.Plus",
    slug: "fax-plus",
    website: "https://www.fax.plus",
    type: "consumer",
    tagline: "Send and receive faxes online",
    pricing: {
      free: true,
      freePageLimit: 10,
      startingPrice: 6.99,
      hasDedicatedNumber: true,
      dedicatedNumberPrice: 4.99,
    },
    features: {
      sendFax: true, receiveFax: true, dedicatedNumber: true, hipaaCompliant: true,
      mobileApp: true, iosApp: true, androidApp: true, emailToFax: true,
      cloudIntegrations: true, coverPage: true, batchFax: true, ocrScanning: false,
      internationalFax: true, faxHistory: true, deliveryConfirmation: true,
    },
    pros: [
      "Free plan with 10 pages",
      "HIPAA-compliant",
      "Clean mobile app",
      "Competitive pricing",
      "Good international coverage",
    ],
    cons: [
      "Free plan is limited to 10 lifetime pages (not monthly)",
      "Dedicated number costs extra on lower tiers",
      "Less polished iOS experience than TigerFax",
      "Customer support can be slow",
    ],
    targetAudience: "Small businesses and individuals who need occasional faxing with some free pages",
    primary_keyword: "tigerfax vs fax plus",
    secondary_keywords: ["fax plus alternative", "fax plus review", "fax plus pricing", "fax.plus vs tigerfax"],
    verdict: "Fax.Plus is a solid competitor with a free tier, but the 10-page lifetime limit is misleading. TigerFax's free tier resets and the Pro plan is comparable in price with a better iOS experience.",
    tigerFaxAdvantage: "TigerFax was built exclusively for iOS, giving it a more polished iPhone experience than Fax.Plus's cross-platform app. Both offer free tiers, but TigerFax's camera scanning is superior.",
    intro_variants: [
      "Fax.Plus and TigerFax are both modern fax apps with free tiers — but there are key differences that matter for iPhone users.",
      "Comparing TigerFax vs Fax.Plus: both are solid choices, but which one is better for iPhone users in 2026?",
      "Fax.Plus is one of TigerFax's closest competitors. Here's a detailed comparison to help you choose.",
    ],
    alternative_intro_variants: [
      "Looking for a Fax.Plus alternative? TigerFax offers a comparable free tier with a better iOS camera scanning experience.",
      "If Fax.Plus isn't working for you, TigerFax is the best alternative — same price point, better iPhone integration.",
      "Fax.Plus alternative for iPhone users: TigerFax offers the same core features with a more polished iOS experience.",
    ],
    review_intro_variants: [
      "Fax.Plus review 2026: a solid fax app with a misleading free tier. Here's what you need to know.",
      "After testing Fax.Plus on iPhone, here's our honest review of its features, pricing, and how it compares to TigerFax.",
      "Is Fax.Plus worth it in 2026? We tested it thoroughly and compared it to TigerFax.",
    ],
    pricing_intro_variants: [
      "Fax.Plus pricing: the free tier sounds great until you realize it's 10 lifetime pages, not monthly. Here's the full breakdown.",
      "How much does Fax.Plus cost? We break down every pricing tier and compare it to TigerFax.",
      "Fax.Plus pricing guide 2026: free plan details, paid tiers, and how it compares to TigerFax Pro.",
    ],
    faqs: [
      { question: "Is Fax.Plus free?", answer: "Fax.Plus has a free plan, but it only includes 10 pages total (lifetime, not monthly). After that, you need a paid plan starting at $6.99/month. TigerFax also has a free tier with 3 pages to start." },
      { question: "Is Fax.Plus available on iPhone?", answer: "Yes, Fax.Plus has an iOS app. TigerFax is also available on iPhone and was built specifically for iOS, offering a more native experience." },
      { question: "Does Fax.Plus include a dedicated fax number?", answer: "Fax.Plus includes a dedicated number on higher-tier plans. On the basic paid plan, a dedicated number costs extra. TigerFax Pro ($4.99/month) includes a dedicated US fax number." },
      { question: "What's better: TigerFax or Fax.Plus?", answer: "For iPhone users, TigerFax offers a more polished iOS experience with better camera scanning. Fax.Plus is a good cross-platform option if you also need Android support." },
    ],
  },
  {
    name: "iFax",
    slug: "ifax",
    website: "https://www.ifax.com",
    appStoreUrl: "https://apps.apple.com/us/app/ifax-send-receive-fax/id1234567890",
    type: "mobile-first",
    tagline: "Send and receive fax from iPhone",
    pricing: {
      free: true,
      freePageLimit: 5,
      startingPrice: 8.33,
      hasDedicatedNumber: true,
    },
    features: {
      sendFax: true, receiveFax: true, dedicatedNumber: true, hipaaCompliant: true,
      mobileApp: true, iosApp: true, androidApp: true, emailToFax: false,
      cloudIntegrations: true, coverPage: true, batchFax: false, ocrScanning: false,
      internationalFax: true, faxHistory: true, deliveryConfirmation: true,
    },
    pros: [
      "Mobile-first design",
      "HIPAA-compliant",
      "Good iOS integration",
      "Clean interface",
    ],
    cons: [
      "More expensive than TigerFax at $8.33/month",
      "No email-to-fax",
      "Limited batch faxing",
      "Smaller feature set than enterprise alternatives",
    ],
    targetAudience: "iPhone users who need a mobile-first fax app with HIPAA compliance",
    primary_keyword: "tigerfax vs ifax",
    secondary_keywords: ["ifax alternative", "ifax review", "ifax pricing", "ifax vs tigerfax"],
    verdict: "iFax is a direct TigerFax competitor targeting the same iPhone-first audience. TigerFax wins on price ($4.99 vs $8.33/month) and camera scanning quality.",
    tigerFaxAdvantage: "TigerFax Pro costs $4.99/month vs iFax's $8.33/month — nearly 40% cheaper for the same core functionality. TigerFax also has better camera scanning with LiDAR support on Pro iPhones.",
    intro_variants: [
      "iFax and TigerFax are both iPhone-first fax apps — but TigerFax costs 40% less per month. Here's the full comparison.",
      "Comparing TigerFax vs iFax: two mobile-first fax apps targeting the same audience. Which one is worth your money?",
      "iFax is one of TigerFax's closest competitors in the mobile fax space. Here's how they compare in 2026.",
    ],
    alternative_intro_variants: [
      "Looking for an iFax alternative? TigerFax offers the same iPhone-first experience at $4.99/month vs iFax's $8.33/month.",
      "iFax alternative for iPhone: TigerFax delivers the same core features — send, receive, dedicated number — for less.",
      "If you're looking to switch from iFax, TigerFax is the best alternative with better pricing and camera scanning.",
    ],
    review_intro_variants: [
      "iFax review 2026: a solid iPhone fax app, but is it worth $8.33/month when TigerFax costs $4.99?",
      "We tested iFax on iPhone 16 Pro. Here's our honest review of its features, scanning quality, and value.",
      "iFax is a legitimate TigerFax competitor. Here's what it does well and where TigerFax pulls ahead.",
    ],
    pricing_intro_variants: [
      "iFax pricing starts at $8.33/month — here's what you get and how it compares to TigerFax's $4.99/month Pro plan.",
      "How much does iFax cost? Full pricing breakdown and comparison with TigerFax.",
      "iFax pricing guide 2026: is it worth $8.33/month? We compare every tier to TigerFax.",
    ],
    faqs: [
      { question: "Is iFax free?", answer: "iFax has a limited free tier. Paid plans start at $8.33/month. TigerFax also has a free tier and a Pro plan at $4.99/month — 40% cheaper than iFax." },
      { question: "Is iFax available on iPhone?", answer: "Yes, iFax is an iPhone-first app. TigerFax is also built specifically for iPhone and iPad." },
      { question: "What's the difference between TigerFax and iFax?", answer: "Both are iPhone-first fax apps with similar features. The main differences: TigerFax costs $4.99/month vs iFax's $8.33/month, and TigerFax has better camera scanning with LiDAR support." },
      { question: "Which is better for HIPAA compliance: TigerFax or iFax?", answer: "Both TigerFax and iFax support HIPAA-compliant faxing with confidentiality cover pages and encrypted transmission." },
    ],
  },
  {
    name: "FaxBurner",
    slug: "faxburner",
    website: "https://www.faxburner.com",
    type: "mobile-first",
    tagline: "Send and receive faxes on your phone",
    pricing: {
      free: true,
      freePageLimit: 5,
      startingPrice: 4.99,
      hasDedicatedNumber: true,
    },
    features: {
      sendFax: true, receiveFax: true, dedicatedNumber: true, hipaaCompliant: false,
      mobileApp: true, iosApp: true, androidApp: true, emailToFax: false,
      cloudIntegrations: false, coverPage: true, batchFax: false, ocrScanning: false,
      internationalFax: false, faxHistory: true, deliveryConfirmation: true,
    },
    pros: [
      "Free plan available",
      "Simple, easy-to-use interface",
      "Affordable paid plan",
      "Good for basic faxing needs",
    ],
    cons: [
      "No HIPAA compliance",
      "No international faxing",
      "No cloud storage integrations",
      "Limited features compared to TigerFax",
      "No email-to-fax",
    ],
    targetAudience: "Casual users who need basic faxing without compliance requirements",
    primary_keyword: "tigerfax vs faxburner",
    secondary_keywords: ["faxburner alternative", "faxburner review", "faxburner pricing"],
    verdict: "FaxBurner is a simple, affordable option for basic faxing. TigerFax matches it on price but adds HIPAA compliance, international faxing, and cloud integrations.",
    tigerFaxAdvantage: "TigerFax and FaxBurner are similarly priced, but TigerFax adds HIPAA compliance, international fax support, and cloud storage integrations that FaxBurner lacks.",
    intro_variants: [
      "FaxBurner and TigerFax are similarly priced, but TigerFax offers significantly more features. Here's the full comparison.",
      "Comparing TigerFax vs FaxBurner: same price, but very different feature sets. Which one is right for you?",
      "FaxBurner is a popular basic fax app. Here's how it stacks up against TigerFax in 2026.",
    ],
    alternative_intro_variants: [
      "Looking for a FaxBurner alternative with more features? TigerFax offers HIPAA compliance and international faxing at the same price.",
      "FaxBurner alternative: TigerFax matches FaxBurner's pricing but adds the features FaxBurner is missing.",
      "If FaxBurner's limitations are holding you back, TigerFax is the upgrade you need.",
    ],
    review_intro_variants: [
      "FaxBurner review 2026: simple and affordable, but missing key features that TigerFax includes.",
      "We tested FaxBurner on iPhone. Here's our honest review of what it does well and where it falls short.",
      "FaxBurner is a solid basic fax app — but is it enough for your needs? Here's our 2026 review.",
    ],
    pricing_intro_variants: [
      "FaxBurner pricing: free tier plus paid plans starting at $4.99/month. Here's how it compares to TigerFax.",
      "How much does FaxBurner cost? Full pricing breakdown and comparison with TigerFax.",
      "FaxBurner pricing guide 2026: is the free plan enough, or should you upgrade?",
    ],
    faqs: [
      { question: "Is FaxBurner free?", answer: "FaxBurner has a free plan with limited pages. Paid plans start at $4.99/month. TigerFax also has a free tier and a Pro plan at $4.99/month with more features." },
      { question: "Is FaxBurner HIPAA compliant?", answer: "No — FaxBurner does not offer HIPAA compliance. If you need to fax medical records or other HIPAA-protected documents, TigerFax is a better choice." },
      { question: "Can FaxBurner send international faxes?", answer: "No — FaxBurner only supports US and Canada faxing. TigerFax supports international faxing to 50+ countries." },
      { question: "What's better: TigerFax or FaxBurner?", answer: "TigerFax is the better choice for most users — same price, but with HIPAA compliance, international faxing, and cloud storage integrations that FaxBurner lacks." },
    ],
  },
  {
    name: "MyFax",
    slug: "myfax",
    website: "https://www.myfax.com",
    type: "consumer",
    tagline: "Send and receive faxes online",
    pricing: {
      free: false,
      startingPrice: 10.00,
      hasDedicatedNumber: true,
    },
    features: {
      sendFax: true, receiveFax: true, dedicatedNumber: true, hipaaCompliant: false,
      mobileApp: true, iosApp: true, androidApp: true, emailToFax: true,
      cloudIntegrations: false, coverPage: true, batchFax: true, ocrScanning: false,
      internationalFax: true, faxHistory: true, deliveryConfirmation: true,
    },
    pros: [
      "Email-to-fax included",
      "International faxing",
      "Dedicated fax number",
      "Batch faxing",
    ],
    cons: [
      "No free plan",
      "Starts at $10/month",
      "No HIPAA compliance",
      "Older interface",
      "No cloud storage integrations",
    ],
    targetAudience: "Small businesses that need email-to-fax and international sending",
    primary_keyword: "tigerfax vs myfax",
    secondary_keywords: ["myfax alternative", "myfax review", "myfax pricing"],
    verdict: "MyFax is a decent mid-tier option but lacks HIPAA compliance and starts at $10/month. TigerFax Pro at $4.99/month is a better value for most users.",
    tigerFaxAdvantage: "TigerFax Pro costs half of MyFax's starting price and adds HIPAA compliance. For iPhone users, TigerFax's camera scanning is also far superior to MyFax's mobile experience.",
    intro_variants: [
      "MyFax starts at $10/month with no free plan. TigerFax offers a free tier and Pro at $4.99/month. Here's the full comparison.",
      "Comparing TigerFax vs MyFax: TigerFax wins on price and mobile experience. Here's why.",
      "MyFax is a solid online fax service, but is it worth $10/month when TigerFax Pro costs $4.99? Let's compare.",
    ],
    alternative_intro_variants: [
      "Looking for a MyFax alternative? TigerFax offers the same core features at half the price.",
      "MyFax alternative for iPhone users: TigerFax delivers better mobile experience at $4.99/month vs MyFax's $10/month.",
      "If you're canceling MyFax, TigerFax is the best replacement — same features, better price, better iOS app.",
    ],
    review_intro_variants: [
      "MyFax review 2026: solid features but overpriced for most users. Here's our honest assessment.",
      "We tested MyFax on iPhone. Here's what we found about its features, pricing, and mobile experience.",
      "MyFax review: good for email-to-fax workflows, but TigerFax is better for mobile-first users.",
    ],
    pricing_intro_variants: [
      "MyFax pricing starts at $10/month with no free plan. Here's the full breakdown and comparison with TigerFax.",
      "How much does MyFax cost? Complete pricing guide and comparison with TigerFax Pro.",
      "MyFax pricing 2026: is $10/month worth it? We compare every tier to TigerFax.",
    ],
    faqs: [
      { question: "Is MyFax free?", answer: "No — MyFax does not offer a free plan. Plans start at $10/month. TigerFax has a free tier and a Pro plan at $4.99/month." },
      { question: "Is MyFax HIPAA compliant?", answer: "MyFax does not advertise HIPAA compliance. TigerFax supports HIPAA-compliant faxing with confidentiality cover pages and encrypted transmission." },
      { question: "Does MyFax have an iPhone app?", answer: "Yes, MyFax has an iOS app. TigerFax is also available on iPhone and was built specifically for iOS." },
      { question: "What's the best MyFax alternative?", answer: "TigerFax is the best MyFax alternative for iPhone users — same core features at half the price, with a better mobile experience." },
    ],
  },
  {
    name: "RingCentral Fax",
    slug: "ringcentral-fax",
    website: "https://www.ringcentral.com",
    type: "enterprise",
    tagline: "Cloud fax as part of your business communications",
    pricing: {
      free: false,
      startingPrice: 29.99,
      hasDedicatedNumber: true,
    },
    features: {
      sendFax: true, receiveFax: true, dedicatedNumber: true, hipaaCompliant: true,
      mobileApp: true, iosApp: true, androidApp: true, emailToFax: true,
      cloudIntegrations: true, coverPage: true, batchFax: true, ocrScanning: false,
      internationalFax: true, faxHistory: true, deliveryConfirmation: true,
    },
    pros: [
      "Enterprise-grade reliability",
      "HIPAA compliant",
      "Integrates with RingCentral phone system",
      "Advanced cloud integrations",
      "High-volume faxing",
    ],
    cons: [
      "Expensive — starts at $29.99/month",
      "Overkill for individual users",
      "Requires RingCentral subscription",
      "Complex setup",
      "Not designed for mobile-first use",
    ],
    targetAudience: "Enterprise businesses already using RingCentral for phone communications",
    primary_keyword: "tigerfax vs ringcentral fax",
    secondary_keywords: ["ringcentral fax alternative", "ringcentral fax review", "ringcentral fax pricing"],
    verdict: "RingCentral Fax is an enterprise solution for businesses already in the RingCentral ecosystem. For individual iPhone users, TigerFax is dramatically simpler and cheaper.",
    tigerFaxAdvantage: "TigerFax Pro at $4.99/month vs RingCentral's $29.99/month minimum. Unless you need RingCentral's full phone system, TigerFax is the obvious choice for mobile faxing.",
    intro_variants: [
      "RingCentral Fax starts at $29.99/month. TigerFax Pro is $4.99/month. Unless you need enterprise phone features, the choice is clear.",
      "Comparing TigerFax vs RingCentral Fax: one is built for enterprise phone systems, the other for iPhone users. Here's which one you need.",
      "RingCentral Fax is powerful — but it's designed for enterprises, not iPhone users. Here's how TigerFax compares.",
    ],
    alternative_intro_variants: [
      "Looking for a RingCentral Fax alternative that doesn't require an enterprise subscription? TigerFax is the answer.",
      "RingCentral Fax alternative for individuals: TigerFax offers the same core faxing at 83% less per month.",
      "If you don't need RingCentral's full phone system, TigerFax is the best alternative for mobile faxing.",
    ],
    review_intro_variants: [
      "RingCentral Fax review 2026: enterprise-grade but expensive. Here's who should (and shouldn't) use it.",
      "We tested RingCentral Fax. Here's our honest review of its features, pricing, and mobile experience.",
      "RingCentral Fax review: great for enterprises, overkill for everyone else.",
    ],
    pricing_intro_variants: [
      "RingCentral Fax pricing starts at $29.99/month. Here's the full breakdown and why TigerFax is a better value for most users.",
      "How much does RingCentral Fax cost? Complete pricing guide and comparison with TigerFax.",
      "RingCentral Fax pricing 2026: is enterprise pricing worth it for faxing alone?",
    ],
    faqs: [
      { question: "Is RingCentral Fax free?", answer: "No — RingCentral Fax starts at $29.99/month as part of a RingCentral plan. TigerFax has a free tier and Pro at $4.99/month." },
      { question: "Can I use RingCentral Fax without a RingCentral phone plan?", answer: "RingCentral Fax is typically bundled with RingCentral's phone system. For standalone faxing, TigerFax is a much simpler and cheaper option." },
      { question: "Is RingCentral Fax HIPAA compliant?", answer: "Yes, RingCentral offers HIPAA-compliant plans. TigerFax also supports HIPAA-compliant faxing with confidentiality cover pages." },
      { question: "What's the best RingCentral Fax alternative for iPhone?", answer: "TigerFax is the best RingCentral Fax alternative for iPhone users — purpose-built for mobile, free to start, and $4.99/month for Pro." },
    ],
  },
  {
    name: "CocoFax",
    slug: "cocofax",
    website: "https://www.cocofax.com",
    type: "consumer",
    tagline: "Online fax service for everyone",
    pricing: {
      free: true,
      freePageLimit: 10,
      startingPrice: 2.99,
      hasDedicatedNumber: true,
    },
    features: {
      sendFax: true, receiveFax: true, dedicatedNumber: true, hipaaCompliant: false,
      mobileApp: true, iosApp: true, androidApp: true, emailToFax: true,
      cloudIntegrations: true, coverPage: true, batchFax: false, ocrScanning: false,
      internationalFax: true, faxHistory: true, deliveryConfirmation: true,
    },
    pros: [
      "Very affordable starting price ($2.99/month)",
      "Free trial available",
      "Email-to-fax included",
      "International faxing",
    ],
    cons: [
      "No HIPAA compliance",
      "Limited free tier",
      "Less polished mobile experience",
      "Smaller company with less established support",
    ],
    targetAudience: "Budget-conscious users who need basic faxing with email integration",
    primary_keyword: "tigerfax vs cocofax",
    secondary_keywords: ["cocofax alternative", "cocofax review", "cocofax pricing"],
    verdict: "CocoFax is the cheapest paid option at $2.99/month, but lacks HIPAA compliance. TigerFax's free tier and $4.99 Pro plan offer better value with compliance features.",
    tigerFaxAdvantage: "While CocoFax is cheaper at $2.99/month, TigerFax adds HIPAA compliance and a superior iOS camera scanning experience. For sensitive documents, TigerFax is the safer choice.",
    intro_variants: [
      "CocoFax is one of the cheapest fax services at $2.99/month. But does cheap mean good? Here's how it compares to TigerFax.",
      "Comparing TigerFax vs CocoFax: price vs features. Which one gives you more for your money?",
      "CocoFax offers the lowest price in the market. Here's what you give up compared to TigerFax.",
    ],
    alternative_intro_variants: [
      "Looking for a CocoFax alternative with HIPAA compliance? TigerFax adds compliance features at $4.99/month.",
      "CocoFax alternative: TigerFax offers a better iOS experience and HIPAA compliance for just $2 more per month.",
      "If CocoFax's lack of HIPAA compliance is a concern, TigerFax is the best alternative.",
    ],
    review_intro_variants: [
      "CocoFax review 2026: the cheapest fax service, but is it reliable enough for professional use?",
      "We tested CocoFax on iPhone. Here's our honest review of its features, reliability, and value.",
      "CocoFax review: great price, but missing key features. Here's what you need to know.",
    ],
    pricing_intro_variants: [
      "CocoFax pricing starts at $2.99/month — the cheapest in the market. Here's what you get and what's missing.",
      "How much does CocoFax cost? Full pricing breakdown and comparison with TigerFax.",
      "CocoFax pricing guide 2026: is $2.99/month too good to be true?",
    ],
    faqs: [
      { question: "Is CocoFax free?", answer: "CocoFax has a free trial. Paid plans start at $2.99/month. TigerFax also has a free tier and Pro at $4.99/month with HIPAA compliance." },
      { question: "Is CocoFax HIPAA compliant?", answer: "CocoFax does not advertise HIPAA compliance. For medical documents, TigerFax is a better choice with HIPAA-compliant faxing." },
      { question: "Is CocoFax available on iPhone?", answer: "Yes, CocoFax has an iOS app. TigerFax is also available on iPhone and was built specifically for iOS." },
      { question: "What's better: TigerFax or CocoFax?", answer: "TigerFax is better for users who need HIPAA compliance or a superior iOS camera scanning experience. CocoFax is cheaper at $2.99/month for basic faxing needs." },
    ],
  },
  {
    name: "FaxZero",
    slug: "faxzero",
    website: "https://www.faxzero.com",
    type: "consumer",
    tagline: "Send faxes online for free",
    pricing: {
      free: true,
      freePageLimit: 5,
      startingPrice: 1.99,
      pricePerPage: 1.99,
      hasDedicatedNumber: false,
    },
    features: {
      sendFax: true, receiveFax: false, dedicatedNumber: false, hipaaCompliant: false,
      mobileApp: false, iosApp: false, androidApp: false, emailToFax: false,
      cloudIntegrations: false, coverPage: true, batchFax: false, ocrScanning: false,
      internationalFax: true, faxHistory: false, deliveryConfirmation: true,
    },
    pros: [
      "Completely free for basic use (5 pages/day)",
      "No account required for free faxes",
      "Simple web interface",
      "International faxing",
    ],
    cons: [
      "No mobile app",
      "No receive fax capability",
      "No dedicated fax number",
      "Ads on free faxes",
      "No fax history",
      "Not HIPAA compliant",
      "Web-only — no iPhone app",
    ],
    targetAudience: "One-time or very occasional fax senders who don't need to receive faxes",
    primary_keyword: "tigerfax vs faxzero",
    secondary_keywords: ["faxzero alternative", "faxzero review", "faxzero app"],
    verdict: "FaxZero is great for a completely free one-time fax, but it's web-only with no iPhone app, no receive capability, and ads on your faxes. TigerFax is the better choice for any regular use.",
    tigerFaxAdvantage: "FaxZero has no iPhone app and can't receive faxes. TigerFax is purpose-built for iPhone with camera scanning, receive capability, and a dedicated fax number on Pro.",
    intro_variants: [
      "FaxZero is free — but it's web-only with no iPhone app and no receive capability. Here's how it compares to TigerFax.",
      "Comparing TigerFax vs FaxZero: one is a full-featured iPhone app, the other is a basic web tool. Here's which one you need.",
      "FaxZero is the go-to for a completely free one-time fax. But for iPhone users, TigerFax is the better long-term choice.",
    ],
    alternative_intro_variants: [
      "Looking for a FaxZero alternative with an iPhone app? TigerFax is free to start and built specifically for iOS.",
      "FaxZero alternative for iPhone: TigerFax offers a native iOS app, camera scanning, and receive capability.",
      "If FaxZero's web-only interface isn't working for you, TigerFax is the best iPhone alternative.",
    ],
    review_intro_variants: [
      "FaxZero review 2026: completely free, but severely limited. Here's what you need to know.",
      "We tested FaxZero. Here's our honest review of its free fax service and why TigerFax is better for iPhone users.",
      "FaxZero review: great for a one-time free fax, but not a long-term solution.",
    ],
    pricing_intro_variants: [
      "FaxZero is free for 5 pages/day. Here's what the free plan includes and when you should upgrade to TigerFax.",
      "How much does FaxZero cost? Free plan details and comparison with TigerFax.",
      "FaxZero pricing guide 2026: is the free plan enough, or do you need TigerFax?",
    ],
    faqs: [
      { question: "Is FaxZero really free?", answer: "Yes — FaxZero lets you send up to 5 pages per day for free, with ads on your fax. TigerFax also has a free tier with 3 pages included." },
      { question: "Does FaxZero have an iPhone app?", answer: "No — FaxZero is web-only with no iPhone app. TigerFax is a native iPhone app with camera scanning and a polished iOS interface." },
      { question: "Can FaxZero receive faxes?", answer: "No — FaxZero can only send faxes, not receive them. TigerFax Pro includes a dedicated fax number for receiving faxes." },
      { question: "What's the best FaxZero alternative for iPhone?", answer: "TigerFax is the best FaxZero alternative for iPhone users — free to start, native iOS app, camera scanning, and receive capability on Pro." },
    ],
  },
]

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function getCompetitorBySlug(slug: string): Competitor | undefined {
  // Handles all 4 page types: tigerfax-vs-[slug], [slug]-alternative, [slug]-review, [slug]-pricing
  const cleanSlug = slug
    .replace("tigerfax-vs-", "")
    .replace("-alternative", "")
    .replace("-review", "")
    .replace("-pricing", "")
  return competitors.find((c) => c.slug === cleanSlug)
}

export type ComparePageType = "vs" | "alternative" | "review" | "pricing"

export function getPageType(slug: string): ComparePageType {
  if (slug.startsWith("tigerfax-vs-")) return "vs"
  if (slug.endsWith("-alternative")) return "alternative"
  if (slug.endsWith("-review")) return "review"
  if (slug.endsWith("-pricing")) return "pricing"
  return "vs"
}

export function getSiblingCompetitors(competitor: Competitor, count = 3): Competitor[] {
  return competitors
    .filter((c) => c.slug !== competitor.slug)
    .slice(0, count)
}

// Generate all 4 page slugs for a competitor
export function getCompetitorPageSlugs(competitor: Competitor): string[] {
  return [
    `tigerfax-vs-${competitor.slug}`,
    `${competitor.slug}-alternative`,
    `${competitor.slug}-review`,
    `${competitor.slug}-pricing`,
  ]
}

// Generate all slugs across all competitors
export function getAllComparePageSlugs(): string[] {
  return competitors.flatMap(getCompetitorPageSlugs)
}
