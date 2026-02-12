import Link from "next/link"
import Image from "next/image"

const APP_STORE_LINK = "#" // Replace with actual App Store link

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/images/gemini-generated-image-ieqesaieqesaieqe.png"
              alt="TigerFax mascot"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="font-bold text-foreground">TigerFax</span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <Link href="#features" className="text-muted-foreground transition-colors hover:text-foreground">
              Features
            </Link>
            <Link href="#how-it-works" className="text-muted-foreground transition-colors hover:text-foreground">
              How It Works
            </Link>
            <Link href="/privacy" className="text-muted-foreground transition-colors hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted-foreground transition-colors hover:text-foreground">
              Terms of Service
            </Link>
            <Link href="/support" className="text-muted-foreground transition-colors hover:text-foreground">
              Support
            </Link>
            <Link href={APP_STORE_LINK} className="text-muted-foreground transition-colors hover:text-foreground">
              Download
            </Link>
          </nav>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TigerFax. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
