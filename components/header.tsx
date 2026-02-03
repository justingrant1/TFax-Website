"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const APP_STORE_LINK = "#" // Replace with actual App Store link

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/gemini-generated-image-ieqesaieqesaieqe.png"
            alt="TigerFax mascot"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <span className="text-xl font-bold text-foreground">TigerFax</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link href="#features" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            How It Works
          </Link>
        </nav>

        <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Link href={APP_STORE_LINK}>
            Download App
          </Link>
        </Button>
      </div>
    </header>
  )
}
