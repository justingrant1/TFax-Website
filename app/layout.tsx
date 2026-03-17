import React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TigerFax — Send & Receive Faxes from Your iPhone",
  description:
    "The modern fax app for iPhone and iPad. Scan documents, add cover pages, and send real faxes worldwide. Pro users get a dedicated US fax number and inbox. Start free — no credit card required.",
  keywords: [
    "fax app",
    "iPhone fax",
    "send fax from phone",
    "mobile fax",
    "fax from iPhone",
    "TigerFax",
    "iOS fax app",
    "receive fax",
    "fax number",
  ],
  openGraph: {
    title: "TigerFax — Send & Receive Faxes from Your iPhone",
    description:
      "Scan documents, add cover pages, and send real faxes worldwide. Pro users get a dedicated US fax number and inbox.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "TigerFax — Send & Receive Faxes from Your iPhone",
    description:
      "The modern fax app for iPhone. Start free with 3 pages — no credit card required.",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
