import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const APP_STORE_LINK = "#" // Replace with actual App Store link

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit items-center rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-foreground">
              Now available on iOS
            </div>
            
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Send faxes from your iPhone
            </h1>
            
            <p className="max-w-lg text-pretty text-lg text-muted-foreground md:text-xl">
              The modern way to fax. Scan documents with your camera, add professional cover pages, and send real faxes anywhere in the world.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href={APP_STORE_LINK} className="flex items-center gap-2">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  Download on App Store
                </Link>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Free to try • 3 faxes per month free
            </p>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative">
              <Image
                src="/images/gemini-generated-image-c9zrh2c9zrh2c9zr.png"
                alt="TigerFax mascot with tablet"
                width={450}
                height={450}
                className="relative z-10"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
