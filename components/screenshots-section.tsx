import { PhoneMockup } from "@/components/phone-mockup"

const screenshots = [
  {
    src: "/images/main_screen.PNG",
    alt: "TigerFax send fax screen",
    title: "Send in Seconds",
    description:
      "Scan or import documents, enter a fax number, and send with one tap. The cost is shown upfront on the button — no surprises.",
  },
  {
    src: "/images/fax_inbox.PNG",
    alt: "TigerFax fax inbox",
    title: "Your Fax Inbox",
    description:
      "Pro users get a dedicated US fax number. Incoming faxes land in your inbox with push notifications and unread badge counts.",
  },
  {
    src: "/images/fax_usage.PNG",
    alt: "TigerFax usage stats",
    title: "Track Everything",
    description:
      "Monthly breakdowns, success rates, and running cost summaries. Your complete fax history synced across all your devices.",
  },
]

export function ScreenshotsSection() {
  return (
    <section id="screenshots" className="bg-secondary/30 py-20 md:py-28" aria-labelledby="screenshots-heading">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-12 text-center md:mb-16">
          <h2 id="screenshots-heading" className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            See TigerFax in action
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground md:text-lg">
            A clean, intuitive interface designed for speed and simplicity.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-3">
          {screenshots.map((shot) => (
            <div key={shot.title} className="flex flex-col items-center gap-6">
              <div className="relative">
                <div className="pointer-events-none absolute inset-0 scale-90 rounded-full bg-primary/10 blur-2xl" />
                <PhoneMockup
                  src={shot.src}
                  alt={shot.alt}
                  width={220}
                  height={440}
                />
              </div>
              <div className="text-center">
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {shot.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {shot.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
