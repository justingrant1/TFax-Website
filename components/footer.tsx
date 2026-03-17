import Link from "next/link"
import Image from "next/image"

const APP_STORE_LINK = "https://apps.apple.com/us/app/tigerfax/id6758597882"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/gemini-generated-image-ieqesaieqesaieqe.png"
                alt="TigerFax logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="font-bold text-foreground">TigerFax</span>
            </Link>
            <p className="max-w-xs text-sm text-muted-foreground">
              The modern way to send and receive faxes — right from your iPhone.
            </p>
            {/* App Store badge */}
            <Link
              href={APP_STORE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-80"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download on App Store
            </Link>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Product</h3>
            <nav className="flex flex-col gap-3 text-sm">
              <Link
                href="#features"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                How It Works
              </Link>
              <Link
                href="#pricing"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Pricing
              </Link>
              <Link
                href={APP_STORE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Download
              </Link>
            </nav>
          </div>

          {/* Legal & Support */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              Legal &amp; Support
            </h3>
            <nav className="flex flex-col gap-3 text-sm">
              <Link
                href="/privacy"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Terms of Service
              </Link>
              <Link
                href="/support"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Support
              </Link>
              <a
                href="mailto:support@tigerfax.com"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Contact Us
              </a>
            </nav>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} TigerFax. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
