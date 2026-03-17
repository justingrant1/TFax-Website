import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SmartAppLink } from "@/components/smart-app-link"

const perks = [
  "Free to download",
  "3 free pages to start",
  "iPhone & iPad",
  "No ads",
]

export function CtaSection() {
  return (
    <section className="bg-primary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-center gap-8 text-center">
          <Image
            src="/images/gemini-generated-image-ieqesaieqesaieqe.png"
            alt="TigerFax mascot"
            width={100}
            height={100}
            className="rounded-2xl shadow-xl"
          />

          <h2 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl lg:text-5xl">
            Ready to send your first fax?
          </h2>

          <p className="max-w-xl text-pretty text-lg text-primary-foreground/80">
            Download TigerFax and get 3 free pages to start. No credit card
            required — just download and go.
          </p>

          <Button
            asChild
            size="lg"
            className="bg-background text-foreground shadow-xl hover:bg-background/90 text-base"
          >
            <SmartAppLink className="flex items-center gap-2">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download on App Store
            </SmartAppLink>
          </Button>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-primary-foreground/70">
            {perks.map((perk) => (
              <div key={perk} className="flex items-center gap-2">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {perk}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
