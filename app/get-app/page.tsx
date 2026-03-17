import type { Metadata } from "next"
import { GetAppClient } from "./get-app-client"

export const metadata: Metadata = {
  title: "Get TigerFax on Your iPhone",
  description:
    "Scan the QR code with your iPhone camera, or send yourself a link — you'll be in the App Store in seconds.",
  robots: { index: false, follow: false },
}

export default function GetAppPage() {
  return <GetAppClient />
}
