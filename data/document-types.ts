export interface DocumentType {
  name: string
  slug: string
  category: "tax" | "medical" | "legal" | "business" | "government" | "real-estate" | "hr" | "general"
  isSensitive: boolean
  isMultiPage: boolean
  compliance?: string[]
  commonIndustries: string[]
  primary_keyword: string
  secondary_keywords: string[]
  intro_variants: string[]
  steps: string[]
  tips: string[]
  warnings?: string[]
  cta_variants: string[]
}

export const documentTypes: DocumentType[] = [
  // ─── Tax Documents ────────────────────────────────────────────────────────
  {
    name: "W-9 Form",
    slug: "w9",
    category: "tax",
    isSensitive: true,
    isMultiPage: false,
    compliance: ["IRS"],
    commonIndustries: ["accounting", "hr", "small-business", "legal"],
    primary_keyword: "how to fax a w9",
    secondary_keywords: ["fax w9 form iphone", "send w9 by fax", "fax w-9 from phone"],
    intro_variants: [
      "The W-9 is one of the most commonly faxed tax forms in the US — and TigerFax makes sending it from your iPhone fast and secure.",
      "Need to send a W-9 to a client or employer? Faxing is still the preferred method for many businesses, and TigerFax handles it in minutes.",
      "W-9 forms contain sensitive tax information, so faxing them securely matters. Here's how to do it right from your iPhone.",
    ],
    steps: [
      "Open TigerFax and tap the compose button",
      "Scan your W-9 with the camera or upload the PDF from Files",
      "Add a cover page with a confidentiality notice (recommended for tax documents)",
      "Enter the recipient's fax number",
      "Review the document preview, then tap Send",
    ],
    tips: [
      "Ensure all fields on the W-9 are filled in before scanning — blank fields may cause the recipient to request a resend",
      "Use a cover page marked 'Confidential' since W-9s contain your SSN or EIN",
      "Keep the fax confirmation as proof of delivery for your records",
    ],
    warnings: ["Never fax a W-9 without a confidentiality cover page — it contains your Social Security Number or EIN"],
    cta_variants: ["Fax Your W-9 Free", "Send W-9 Securely", "Download TigerFax"],
  },
  {
    name: "W-2 Form",
    slug: "w2",
    category: "tax",
    isSensitive: true,
    isMultiPage: false,
    compliance: ["IRS"],
    commonIndustries: ["accounting", "hr", "banking"],
    primary_keyword: "how to fax a w2",
    secondary_keywords: ["fax w2 form iphone", "send w2 by fax", "fax w-2 tax form"],
    intro_variants: [
      "W-2 forms are frequently requested by lenders, accountants, and government agencies — and faxing is often the fastest way to send them.",
      "Need to fax your W-2 for a mortgage application or tax filing? TigerFax makes it simple from your iPhone.",
      "Faxing a W-2 securely is important since it contains your full income and tax withholding information.",
    ],
    steps: [
      "Open TigerFax and tap the compose button",
      "Scan your W-2 or upload the PDF",
      "Add a confidential cover page",
      "Enter the recipient's fax number",
      "Review and send",
    ],
    tips: [
      "Scan in high quality to ensure all numbers are legible — W-2 figures must be accurate",
      "If faxing to a lender, confirm their fax number before sending",
      "Save the delivery confirmation for your records",
    ],
    warnings: ["W-2 forms contain your full Social Security Number — always use a confidential cover page"],
    cta_variants: ["Fax Your W-2 Free", "Send W-2 Securely", "Download TigerFax"],
  },
  {
    name: "1099 Form",
    slug: "1099",
    category: "tax",
    isSensitive: true,
    isMultiPage: false,
    compliance: ["IRS"],
    commonIndustries: ["accounting", "hr", "small-business"],
    primary_keyword: "how to fax a 1099",
    secondary_keywords: ["fax 1099 form", "send 1099 by fax", "fax 1099 from iphone"],
    intro_variants: [
      "1099 forms are commonly faxed to contractors, accountants, and the IRS — TigerFax makes it quick and secure.",
      "Need to send a 1099 to a contractor or financial institution? Faxing is still widely accepted and TigerFax handles it from your iPhone.",
      "Faxing a 1099 is straightforward with TigerFax — scan, enter the number, and send in under two minutes.",
    ],
    steps: [
      "Open TigerFax and tap compose",
      "Scan or upload your 1099 form",
      "Add a cover page",
      "Enter the recipient fax number",
      "Review and send",
    ],
    tips: [
      "Verify the recipient's fax number with them before sending — 1099s contain sensitive financial data",
      "Keep the fax confirmation as proof you sent the form on time",
    ],
    cta_variants: ["Fax Your 1099 Free", "Send 1099 Securely", "Download TigerFax"],
  },
  {
    name: "Tax Return",
    slug: "tax-return",
    category: "tax",
    isSensitive: true,
    isMultiPage: true,
    compliance: ["IRS"],
    commonIndustries: ["accounting", "legal", "banking"],
    primary_keyword: "how to fax tax documents",
    secondary_keywords: ["fax tax return iphone", "send tax documents by fax", "fax irs documents"],
    intro_variants: [
      "Tax returns are multi-page documents that require careful scanning — TigerFax's batch scan feature handles them perfectly.",
      "Need to fax your tax return to an accountant, lender, or government agency? TigerFax supports multi-page documents.",
      "Faxing tax returns is common for mortgage applications and IRS correspondence — here's how to do it from your iPhone.",
    ],
    steps: [
      "Open TigerFax and tap compose",
      "Scan each page of your tax return in order, or upload the PDF",
      "Review the page order in the document preview",
      "Add a confidential cover page",
      "Enter the recipient fax number and send",
    ],
    tips: [
      "Use the PDF upload option if you have a digital copy — it's faster and more accurate than scanning",
      "Verify page count in the preview before sending",
      "Tax returns can be 10+ pages — allow extra time for delivery",
    ],
    warnings: ["Tax returns contain your full SSN and financial history — always use a confidential cover page"],
    cta_variants: ["Fax Tax Documents Free", "Send Tax Return Securely", "Download TigerFax"],
  },

  // ─── Medical Documents ────────────────────────────────────────────────────
  {
    name: "Medical Records",
    slug: "medical-records",
    category: "medical",
    isSensitive: true,
    isMultiPage: true,
    compliance: ["HIPAA"],
    commonIndustries: ["healthcare", "insurance", "legal"],
    primary_keyword: "how to fax medical records",
    secondary_keywords: ["fax medical records iphone", "send medical records by fax", "hipaa fax medical records"],
    intro_variants: [
      "Medical records are among the most sensitive documents you'll ever fax — TigerFax transmits them over encrypted channels to protect your privacy.",
      "Faxing medical records is still the standard in healthcare. TigerFax makes it possible from your iPhone without compromising HIPAA compliance.",
      "Whether you're sending records to a specialist, insurer, or attorney, TigerFax handles medical record faxing securely from your iPhone.",
    ],
    steps: [
      "Open TigerFax and tap compose",
      "Scan each page of the medical records or upload the PDF",
      "Add a HIPAA-compliant cover page with a confidentiality notice",
      "Double-check the recipient's fax number — medical records sent to the wrong number is a HIPAA violation",
      "Review the document and send",
    ],
    tips: [
      "Always use a HIPAA cover page with a confidentiality notice when faxing medical records",
      "Verify the recipient's fax number before sending — misdirected medical faxes are a common HIPAA violation",
      "Keep the fax confirmation receipt as part of the patient's communication record",
      "For large record sets (50+ pages), consider splitting into multiple faxes",
    ],
    warnings: [
      "Medical records are protected under HIPAA — always use a confidentiality cover page",
      "Verify the recipient fax number carefully — sending to the wrong number is a reportable HIPAA breach",
    ],
    cta_variants: ["Fax Medical Records Securely", "Send Records with HIPAA Cover Page", "Download TigerFax"],
  },
  {
    name: "Prescription",
    slug: "prescription",
    category: "medical",
    isSensitive: true,
    isMultiPage: false,
    compliance: ["HIPAA", "DEA"],
    commonIndustries: ["healthcare", "pharmacy"],
    primary_keyword: "how to fax a prescription",
    secondary_keywords: ["fax prescription iphone", "send prescription by fax", "fax rx from phone"],
    intro_variants: [
      "Faxing prescriptions between doctors and pharmacies is standard practice — TigerFax makes it possible from your iPhone.",
      "Need to fax a prescription to a pharmacy or specialist? TigerFax handles it securely in under two minutes.",
      "Prescription faxing is one of the most common uses of fax in healthcare — and TigerFax makes it simple from any iPhone.",
    ],
    steps: [
      "Open TigerFax and tap compose",
      "Scan the prescription clearly — ensure the prescriber's signature and DEA number are legible",
      "Add a HIPAA cover page",
      "Enter the pharmacy or specialist's fax number",
      "Review and send",
    ],
    tips: [
      "Ensure the prescriber's signature, date, and DEA number are clearly visible in the scan",
      "Confirm the pharmacy's fax number before sending",
      "Some controlled substances have additional faxing restrictions — check with the prescriber",
    ],
    cta_variants: ["Fax Prescription Securely", "Send Rx by Fax", "Download TigerFax"],
  },
  {
    name: "Lab Results",
    slug: "lab-results",
    category: "medical",
    isSensitive: true,
    isMultiPage: true,
    compliance: ["HIPAA"],
    commonIndustries: ["healthcare", "insurance"],
    primary_keyword: "how to fax lab results",
    secondary_keywords: ["fax lab results iphone", "send lab results by fax"],
    intro_variants: [
      "Lab results are frequently faxed between healthcare providers — TigerFax makes it secure and simple from your iPhone.",
      "Need to send lab results to a specialist or insurer? Faxing is the standard in healthcare and TigerFax handles it from your phone.",
      "Faxing lab results requires HIPAA compliance — TigerFax provides the tools to do it right.",
    ],
    steps: [
      "Open TigerFax and tap compose",
      "Scan or upload the lab results PDF",
      "Add a HIPAA-compliant cover page",
      "Enter the recipient's fax number",
      "Review and send",
    ],
    tips: [
      "Ensure all values and reference ranges are legible in the scan",
      "Include patient name and date of birth on the cover page for easy identification",
    ],
    cta_variants: ["Fax Lab Results Securely", "Send Results by Fax", "Download TigerFax"],
  },
  {
    name: "Insurance Claim",
    slug: "insurance-claim",
    category: "medical",
    isSensitive: true,
    isMultiPage: true,
    compliance: ["HIPAA"],
    commonIndustries: ["insurance", "healthcare"],
    primary_keyword: "how to fax an insurance claim",
    secondary_keywords: ["fax insurance claim iphone", "send insurance claim by fax"],
    intro_variants: [
      "Insurance claims are time-sensitive — TigerFax lets you send them from your iPhone the moment they're ready.",
      "Faxing insurance claims is still required by many insurers. TigerFax makes it fast and trackable from your phone.",
      "Need to submit an insurance claim by fax? TigerFax handles multi-page claim forms with ease.",
    ],
    steps: [
      "Open TigerFax and tap compose",
      "Scan or upload all pages of the insurance claim",
      "Verify page order in the preview",
      "Add a cover page with claim reference number",
      "Enter the insurer's fax number and send",
    ],
    tips: [
      "Note the fax confirmation number — insurers may request proof of submission",
      "Include your policy number and claim reference on the cover page",
      "Check the insurer's fax number on their website before sending",
    ],
    cta_variants: ["Fax Insurance Claim Free", "Submit Claim by Fax", "Download TigerFax"],
  },

  // ─── Legal Documents ──────────────────────────────────────────────────────
  {
    name: "Contract",
    slug: "contract",
    category: "legal",
    isSensitive: true,
    isMultiPage: true,
    compliance: [],
    commonIndustries: ["legal", "real-estate", "business", "construction"],
    primary_keyword: "how to fax a contract",
    secondary_keywords: ["fax contract iphone", "send contract by fax", "fax signed contract"],
    intro_variants: [
      "Contracts are frequently exchanged by fax in legal and real estate transactions — TigerFax makes it fast from your iPhone.",
      "Need to fax a signed contract? TigerFax supports multi-page documents and delivers them to any fax machine worldwide.",
      "Faxing contracts is still standard practice in many industries. Here's how to do it from your iPhone in minutes.",
    ],
    steps: [
      "Open TigerFax and tap compose",
      "Scan each page of the contract in order, or upload the PDF",
      "Review the page order and ensure all signatures are visible",
      "Add a cover page with the contract reference",
      "Enter the recipient's fax number and send",
    ],
    tips: [
      "Scan in high quality to ensure signatures are clearly legible",
      "Verify page count before sending — missing pages in a contract can cause delays",
      "Keep the fax confirmation as proof of delivery",
    ],
    cta_variants: ["Fax Contract Free", "Send Contract by Fax", "Download TigerFax"],
  },
  {
    name: "NDA",
    slug: "nda",
    category: "legal",
    isSensitive: true,
    isMultiPage: false,
    compliance: [],
    commonIndustries: ["legal", "technology", "business"],
    primary_keyword: "how to fax an nda",
    secondary_keywords: ["fax nda iphone", "send nda by fax", "fax non-disclosure agreement"],
    intro_variants: [
      "NDAs are often exchanged quickly before business meetings — TigerFax lets you send one from your iPhone in under two minutes.",
      "Need to fax a signed NDA? TigerFax delivers it to any fax machine worldwide, fast.",
      "Non-disclosure agreements are frequently faxed in business and legal settings. Here's how to do it from your iPhone.",
    ],
    steps: [
      "Open TigerFax and tap compose",
      "Scan the signed NDA or upload the PDF",
      "Add a cover page marked Confidential",
      "Enter the recipient's fax number",
      "Review and send",
    ],
    tips: [
      "Ensure all signature lines are clearly visible in the scan",
      "Mark the cover page as Confidential",
    ],
    cta_variants: ["Fax NDA Free", "Send NDA Securely", "Download TigerFax"],
  },
  {
    name: "Power of Attorney",
    slug: "power-of-attorney",
    category: "legal",
    isSensitive: true,
    isMultiPage: true,
    compliance: [],
    commonIndustries: ["legal", "healthcare", "banking"],
    primary_keyword: "how to fax a power of attorney",
    secondary_keywords: ["fax power of attorney iphone", "send poa by fax"],
    intro_variants: [
      "Power of attorney documents are legally sensitive and often time-critical — TigerFax delivers them securely from your iPhone.",
      "Need to fax a power of attorney to a hospital, bank, or attorney? TigerFax handles multi-page legal documents with ease.",
      "Faxing a power of attorney is common in legal, medical, and financial situations. Here's how to do it from your iPhone.",
    ],
    steps: [
      "Open TigerFax and tap compose",
      "Scan all pages of the POA document in order",
      "Ensure notary stamps and signatures are clearly visible",
      "Add a confidential cover page",
      "Enter the recipient's fax number and send",
    ],
    tips: [
      "Notary stamps must be clearly legible — scan in high quality",
      "Confirm the recipient's fax number before sending legal documents",
    ],
    cta_variants: ["Fax POA Securely", "Send Power of Attorney by Fax", "Download TigerFax"],
  },
  {
    name: "Court Documents",
    slug: "court-documents",
    category: "legal",
    isSensitive: true,
    isMultiPage: true,
    compliance: [],
    commonIndustries: ["legal", "government"],
    primary_keyword: "how to fax court documents",
    secondary_keywords: ["fax court documents iphone", "send court filing by fax"],
    intro_variants: [
      "Court documents are often time-sensitive — TigerFax lets you send them from your iPhone the moment they're ready.",
      "Many courts still accept filings by fax. TigerFax makes it possible from your iPhone with delivery confirmation.",
      "Faxing court documents requires accuracy and speed — TigerFax delivers both.",
    ],
    steps: [
      "Open TigerFax and tap compose",
      "Scan or upload all pages of the court document",
      "Verify page order and case number visibility",
      "Add a cover page with case number and filing date",
      "Enter the court's fax number and send",
    ],
    tips: [
      "Confirm the court's fax number and filing hours before sending",
      "Keep the fax confirmation as proof of timely filing",
      "Some courts require a cover sheet with specific information — check their requirements",
    ],
    cta_variants: ["Fax Court Documents Free", "File by Fax", "Download TigerFax"],
  },
  {
    name: "Lease Agreement",
    slug: "lease-agreement",
    category: "legal",
    isSensitive: false,
    isMultiPage: true,
    compliance: [],
    commonIndustries: ["real-estate", "legal"],
    primary_keyword: "how to fax a lease agreement",
    secondary_keywords: ["fax lease agreement iphone", "send lease by fax"],
    intro_variants: [
      "Lease agreements are commonly faxed between landlords, tenants, and property managers — TigerFax handles multi-page documents easily.",
      "Need to fax a signed lease? TigerFax delivers it to any fax machine in minutes from your iPhone.",
      "Faxing lease agreements is standard in real estate. Here's how to do it quickly from your iPhone.",
    ],
    steps: [
      "Open TigerFax and tap compose",
      "Scan all pages of the lease in order, or upload the PDF",
      "Verify all signature pages are included",
      "Add a cover page",
      "Enter the recipient's fax number and send",
    ],
    tips: [
      "Verify all pages are included — lease agreements often have addenda",
      "Ensure all initials and signatures are clearly visible",
    ],
    cta_variants: ["Fax Lease Agreement Free", "Send Lease by Fax", "Download TigerFax"],
  },

  // ─── Business Documents ───────────────────────────────────────────────────
  {
    name: "Invoice",
    slug: "invoice",
    category: "business",
    isSensitive: false,
    isMultiPage: false,
    compliance: [],
    commonIndustries: ["accounting", "small-business", "construction", "consulting"],
    primary_keyword: "how to fax an invoice",
    secondary_keywords: ["fax invoice iphone", "send invoice by fax", "fax bill from phone"],
    intro_variants: [
      "Many businesses still request invoices by fax — TigerFax lets you send them from your iPhone in seconds.",
      "Need to fax an invoice to a client or vendor? TigerFax delivers it to any fax machine worldwide.",
      "Faxing invoices is still common in construction, manufacturing, and government contracting. Here's how to do it from your iPhone.",
    ],
    steps: [
      "Open TigerFax and tap compose",
      "Scan your invoice or upload the PDF",
      "Add a cover page with invoice number",
      "Enter the recipient's fax number",
      "Review and send",
    ],
    tips: [
      "Include your invoice number on the cover page for easy reference",
      "Keep the fax confirmation as proof of delivery for payment disputes",
    ],
    cta_variants: ["Fax Invoice Free", "Send Invoice by Fax", "Download TigerFax"],
  },
  {
    name: "Purchase Order",
    slug: "purchase-order",
    category: "business",
    isSensitive: false,
    isMultiPage: false,
    compliance: [],
    commonIndustries: ["manufacturing", "retail", "construction", "small-business"],
    primary_keyword: "how to fax a purchase order",
    secondary_keywords: ["fax purchase order iphone", "send po by fax"],
    intro_variants: [
      "Purchase orders are still commonly exchanged by fax in manufacturing and supply chain — TigerFax makes it fast from your iPhone.",
      "Need to fax a PO to a supplier? TigerFax delivers it to any fax machine in minutes.",
      "Faxing purchase orders is standard in many industries. Here's how to do it from your iPhone.",
    ],
    steps: [
      "Open TigerFax and tap compose",
      "Scan or upload your purchase order",
      "Add a cover page with PO number",
      "Enter the supplier's fax number",
      "Review and send",
    ],
    tips: [
      "Include the PO number prominently on the cover page",
      "Confirm the supplier's fax number before sending",
    ],
    cta_variants: ["Fax PO Free", "Send Purchase Order by Fax", "Download TigerFax"],
  },

  // ─── Government Documents ─────────────────────────────────────────────────
  {
    name: "Immigration Form",
    slug: "immigration-forms",
    category: "government",
    isSensitive: true,
    isMultiPage: true,
    compliance: ["USCIS"],
    commonIndustries: ["legal", "government"],
    primary_keyword: "how to fax immigration forms",
    secondary_keywords: ["fax immigration documents iphone", "send uscis forms by fax"],
    intro_variants: [
      "Immigration forms are often time-sensitive and require secure transmission — TigerFax handles them from your iPhone.",
      "Need to fax immigration documents to an attorney or government agency? TigerFax supports multi-page forms.",
      "Faxing immigration forms requires accuracy and security. Here's how to do it from your iPhone with TigerFax.",
    ],
    steps: [
      "Open TigerFax and tap compose",
      "Scan all pages of the immigration form in order",
      "Ensure all fields, signatures, and supporting documents are included",
      "Add a confidential cover page",
      "Enter the recipient's fax number and send",
    ],
    tips: [
      "Double-check that all required fields are completed before faxing",
      "Keep the fax confirmation as proof of submission",
      "Verify the recipient's fax number with your attorney or the agency",
    ],
    cta_variants: ["Fax Immigration Forms Securely", "Send Documents by Fax", "Download TigerFax"],
  },

  // ─── Real Estate Documents ────────────────────────────────────────────────
  {
    name: "Offer Letter",
    slug: "offer-letter",
    category: "real-estate",
    isSensitive: false,
    isMultiPage: true,
    compliance: [],
    commonIndustries: ["real-estate", "legal"],
    primary_keyword: "how to fax an offer letter",
    secondary_keywords: ["fax real estate offer iphone", "send offer letter by fax"],
    intro_variants: [
      "Real estate offers are time-sensitive — TigerFax lets you send them from your iPhone the moment they're signed.",
      "Need to fax a real estate offer letter? TigerFax delivers it to any agent or attorney in minutes.",
      "In real estate, speed matters. TigerFax lets you fax offer letters from your iPhone without delay.",
    ],
    steps: [
      "Open TigerFax and tap compose",
      "Scan all pages of the offer letter",
      "Verify all signatures and initials are visible",
      "Add a cover page with property address",
      "Enter the recipient's fax number and send",
    ],
    tips: [
      "In competitive markets, fax speed matters — TigerFax delivers in 1–3 minutes",
      "Include the property address on the cover page for easy identification",
    ],
    cta_variants: ["Fax Offer Letter Free", "Send Real Estate Offer by Fax", "Download TigerFax"],
  },

  // ─── HR Documents ─────────────────────────────────────────────────────────
  {
    name: "Employment Verification",
    slug: "employment-verification",
    category: "hr",
    isSensitive: true,
    isMultiPage: false,
    compliance: [],
    commonIndustries: ["hr", "banking", "real-estate"],
    primary_keyword: "how to fax employment verification",
    secondary_keywords: ["fax employment verification iphone", "send employment letter by fax"],
    intro_variants: [
      "Employment verification letters are commonly requested by lenders and landlords — TigerFax makes faxing them simple.",
      "Need to fax an employment verification letter? TigerFax delivers it to any fax machine in minutes from your iPhone.",
      "Faxing employment verification is standard for mortgage applications and rental approvals. Here's how to do it from your iPhone.",
    ],
    steps: [
      "Open TigerFax and tap compose",
      "Scan the employment verification letter or upload the PDF",
      "Add a cover page",
      "Enter the recipient's fax number",
      "Review and send",
    ],
    tips: [
      "Ensure the company letterhead and authorized signature are clearly visible",
      "Keep the fax confirmation for your records",
    ],
    cta_variants: ["Fax Verification Letter Free", "Send Employment Verification by Fax", "Download TigerFax"],
  },
  {
    name: "I-9 Form",
    slug: "i9-form",
    category: "hr",
    isSensitive: true,
    isMultiPage: false,
    compliance: ["USCIS"],
    commonIndustries: ["hr", "government"],
    primary_keyword: "how to fax an i-9 form",
    secondary_keywords: ["fax i9 form iphone", "send i-9 by fax"],
    intro_variants: [
      "I-9 forms contain sensitive identity information — TigerFax transmits them securely from your iPhone.",
      "Need to fax an I-9 to an employer or HR department? TigerFax makes it fast and secure.",
      "Faxing I-9 forms is common in HR workflows. Here's how to do it securely from your iPhone.",
    ],
    steps: [
      "Open TigerFax and tap compose",
      "Scan the completed I-9 form",
      "Add a confidential cover page",
      "Enter the recipient's fax number",
      "Review and send",
    ],
    tips: [
      "Ensure all three sections of the I-9 are completed before faxing",
      "Use a confidential cover page — I-9s contain identity document information",
    ],
    cta_variants: ["Fax I-9 Securely", "Send I-9 by Fax", "Download TigerFax"],
  },

  // ─── General ──────────────────────────────────────────────────────────────
  {
    name: "PDF",
    slug: "pdf",
    category: "general",
    isSensitive: false,
    isMultiPage: true,
    compliance: [],
    commonIndustries: ["small-business", "legal", "healthcare", "education"],
    primary_keyword: "how to fax a pdf from iphone",
    secondary_keywords: ["fax pdf iphone", "send pdf by fax", "fax pdf from phone", "fax pdf file"],
    intro_variants: [
      "PDFs are the most common file format for faxing — and TigerFax makes sending them from your iPhone effortless.",
      "Have a PDF you need to fax? TigerFax imports it directly from your Files app, iCloud, or any cloud storage.",
      "Faxing a PDF from your iPhone takes less than two minutes with TigerFax — no printing, no fax machine required.",
    ],
    steps: [
      "Open TigerFax and tap the upload icon",
      "Select your PDF from Files, iCloud Drive, Dropbox, or Google Drive",
      "Preview the document to verify all pages are correct",
      "Add a cover page if needed",
      "Enter the recipient's fax number and send",
    ],
    tips: [
      "PDFs preserve formatting better than scanned images — use a PDF when available",
      "TigerFax supports PDFs up to 50 pages",
      "If your PDF is password-protected, remove the password before importing",
    ],
    cta_variants: ["Fax PDF Free", "Send PDF by Fax", "Download TigerFax"],
  },
  {
    name: "Photo",
    slug: "photo",
    category: "general",
    isSensitive: false,
    isMultiPage: false,
    compliance: [],
    commonIndustries: ["real-estate", "insurance", "construction"],
    primary_keyword: "how to fax a photo from iphone",
    secondary_keywords: ["fax photo iphone", "send photo by fax", "fax image from phone", "fax picture from iphone"],
    intro_variants: [
      "Need to fax a photo from your iPhone? TigerFax converts your images to fax-compatible format automatically.",
      "Faxing photos is common in insurance claims, real estate, and construction — TigerFax handles it from your iPhone.",
      "Your iPhone's Photos app integrates directly with TigerFax, making it easy to fax any image in your library.",
    ],
    steps: [
      "Open TigerFax and tap the upload icon",
      "Select your photo from the Photos app",
      "TigerFax automatically converts it to fax format",
      "Add a cover page if needed",
      "Enter the recipient's fax number and send",
    ],
    tips: [
      "For best fax quality, use photos taken in good lighting with the document flat",
      "TigerFax supports JPG, PNG, and HEIC formats",
      "If faxing multiple photos, add them all before sending to keep them in one fax",
    ],
    cta_variants: ["Fax Photo Free", "Send Photo by Fax", "Download TigerFax"],
  },
]

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function getDocumentBySlug(slug: string): DocumentType | undefined {
  return documentTypes.find((d) => d.slug === slug)
}

export function getDocumentsByCategory(category: DocumentType["category"]): DocumentType[] {
  return documentTypes.filter((d) => d.category === category)
}

export function getSiblingDocuments(doc: DocumentType, count = 3): DocumentType[] {
  return documentTypes
    .filter((d) => d.slug !== doc.slug && d.category === doc.category)
    .slice(0, count)
}
