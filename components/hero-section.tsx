import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PhoneMockup } from "@/components/phone-mockup"
import { SmartAppLink } from "@/components/smart-app-link"

const trustSignals = [
  "3 free pages to start",
  "iPhone & iPad",
  "Secure & private",
  "No credit card required",
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-primary/8 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-accent/5 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* ── Left: Text content ── */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              <span>🐯</span>
              <span>Now on the App Store</span>
            </div>

            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Send &amp; receive faxes from your{" "}
              <span className="text-primary">iPhone</span>
            </h1>

            <p className="max-w-lg text-pretty text-lg text-muted-foreground md:text-xl">
              Scan documents with your camera, add professional cover pages, and
              send real faxes worldwide. Pro users get a dedicated fax number
              and inbox — all from your pocket.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 text-base"
              >
                <SmartAppLink className="flex items-center gap-2">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  Download on App Store
                </SmartAppLink>
              </Button>
            </div>

            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
              {trustSignals.map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <svg
                    className="h-3.5 w-3.5 shrink-0 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Phone mockups ── */}
          {/* Mobile: single centered phone */}
          <div className="flex justify-center lg:hidden">
            <div className="relative">
              <div className="pointer-events-none absolute inset-0 scale-75 rounded-full bg-primary/15 blur-3xl" />
              <PhoneMockup
                src="/images/main_screen.PNG"
                alt="TigerFax send screen"
                width={230}
                height={460}
              />
            </div>
          </div>

          {/* Desktop: 3 staggered phones */}
          <div
            className="relative hidden items-center justify-center lg:flex"
            style={{ height: "520px" }}
          >
            {/* Glow */}
            <div className="pointer-events-none absolute inset-0 scale-75 rounded-full bg-primary/12 blur-3xl" />

            {/* Left phone — fax inbox */}
            <div
              className="absolute z-10"
              style={{
                transform: "translateX(-148px) translateY(32px) rotate(-5deg) scale(0.84)",
                opacity: 0.82,
              }}
            >
              <PhoneMockup
                src="/images/fax_inbox.PNG"
                alt="TigerFax fax inbox"
                width={200}
                height={400}
              />
            </div>

            {/* Center phone — main screen */}
            <div className="absolute z-20">
              <PhoneMockup
                src="/images/main_screen.PNG"
                alt="TigerFax main screen"
                width={218}
                height={436}
              />
            </div>

            {/* Right phone — usage stats */}
            <div
              className="absolute z-10"
              style={{
                transform: "translateX(148px) translateY(32px) rotate(5deg) scale(0.84)",
                opacity: 0.82,
              }}
            >
              <PhoneMockup
                src="/images/fax_usage.PNG"
                alt="TigerFax usage stats"
                width={200}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
