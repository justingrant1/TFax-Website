"use client"
import { CheckCircle, XCircle, Minus } from "lucide-react"
import type { Competitor } from "@/data/competitors"

interface ComparisonTableProps {
  competitor: Competitor
}

const TIGERFAX_FEATURES = {
  sendFax: true,
  receiveFax: true,
  dedicatedNumber: true,
  hipaaCompliant: true,
  mobileApp: true,
  iosApp: true,
  androidApp: false,
  emailToFax: false,
  cloudIntegrations: true,
  coverPage: true,
  batchFax: false,
  ocrScanning: true,
  internationalFax: true,
  faxHistory: true,
  deliveryConfirmation: true,
}

const FEATURE_LABELS: Record<keyof typeof TIGERFAX_FEATURES, string> = {
  sendFax: "Send Fax",
  receiveFax: "Receive Fax",
  dedicatedNumber: "Dedicated Fax Number",
  hipaaCompliant: "HIPAA Compliant",
  mobileApp: "Mobile App",
  iosApp: "iPhone / iPad App",
  androidApp: "Android App",
  emailToFax: "Email-to-Fax",
  cloudIntegrations: "Cloud Storage (iCloud, Dropbox)",
  coverPage: "Cover Pages",
  batchFax: "Batch Faxing",
  ocrScanning: "Camera Scanning (OCR)",
  internationalFax: "International Faxing",
  faxHistory: "Fax History",
  deliveryConfirmation: "Delivery Confirmation",
}

function Cell({ value }: { value: boolean }) {
  if (value) return <CheckCircle className="h-5 w-5 text-green-500 mx-auto" aria-label="Yes" />
  return <XCircle className="h-5 w-5 text-red-400 mx-auto" aria-label="No" />
}

export function ComparisonTable({ competitor }: ComparisonTableProps) {
  const features = Object.keys(TIGERFAX_FEATURES) as Array<keyof typeof TIGERFAX_FEATURES>

  return (
    <div className="overflow-x-auto rounded-lg border">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b bg-muted/50">
            <th className="px-4 py-3 text-left font-semibold text-muted-foreground w-1/2">Feature</th>
            <th className="px-4 py-3 text-center font-semibold text-orange-600 w-1/4">
              TigerFax
              <div className="text-xs font-normal text-muted-foreground mt-0.5">Free · $4.99/mo Pro</div>
            </th>
            <th className="px-4 py-3 text-center font-semibold w-1/4">
              {competitor.name}
              <div className="text-xs font-normal text-muted-foreground mt-0.5">
                {competitor.pricing.free ? "Free tier · " : ""}${competitor.pricing.startingPrice}/mo
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {features.map((key, i) => (
            <tr key={key} className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
              <td className="px-4 py-3 text-muted-foreground">{FEATURE_LABELS[key]}</td>
              <td className="px-4 py-3 text-center">
                <Cell value={TIGERFAX_FEATURES[key]} />
              </td>
              <td className="px-4 py-3 text-center">
                <Cell value={competitor.features[key]} />
              </td>
            </tr>
          ))}
          {/* Pricing row */}
          <tr className="border-t bg-orange-50/50 dark:bg-orange-950/20">
            <td className="px-4 py-3 font-semibold">Starting Price</td>
            <td className="px-4 py-3 text-center font-bold text-orange-600">
              Free<br /><span className="text-xs font-normal">$4.99/mo Pro</span>
            </td>
            <td className="px-4 py-3 text-center font-bold">
              {competitor.pricing.free ? "Free tier" : `$${competitor.pricing.startingPrice}/mo`}
              {competitor.pricing.free && (
                <><br /><span className="text-xs font-normal">${competitor.pricing.startingPrice}/mo paid</span></>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
