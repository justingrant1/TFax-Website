import { PhoneMockup } from "@/components/phone-mockup"

const steps = [
  {
    number: "01",
    title: "Scan or Import",
    description:
      "Use your camera to scan documents with real-time edge detection, or import PDFs and images from Files, Photos, or iCloud.",
  },
  {
    number: "02",
    title: "Add a Cover Page",
    description:
      "Optionally add a professional cover page with To, From, Subject, and a custom message — all in seconds.",
  },
  {
    number: "03",
    title: "Enter Recipient",
    description:
      "Type the fax number or pick from your contacts. International formatting is handled automatically.",
  },
  {
    number: "04",
    title: "Review, Pay & Send",
    description:
      "See the cost upfront, tap send, and track delivery in real-time. Get notified the moment it's received.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Steps */}
          <div>
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Sending a fax has never been easier
            </h2>
            <p className="mb-10 text-pretty text-muted-foreground md:text-lg">
              Four simple steps to send professional faxes from anywhere in the
              world.
            </p>

            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Phone mockup */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="pointer-events-none absolute inset-0 scale-90 rounded-full bg-primary/15 blur-3xl" />
              <PhoneMockup
                src="/images/main_screen.PNG"
                alt="TigerFax send fax screen"
                width={260}
                height={520}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
