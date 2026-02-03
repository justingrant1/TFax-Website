import { Camera, FileText, Send, Shield, Zap, Globe } from "lucide-react"

const features = [
  {
    icon: Camera,
    title: "Scan Documents",
    description: "Use your iPhone camera to capture high-quality document scans with automatic edge detection and enhancement.",
  },
  {
    icon: FileText,
    title: "Professional Cover Pages",
    description: "Add customizable cover pages with your message, subject line, and recipient details.",
  },
  {
    icon: Send,
    title: "Real Fax Transmission",
    description: "Send actual faxes to any fax machine worldwide. Not just email-to-fax - real, reliable fax delivery.",
  },
  {
    icon: Globe,
    title: "Send Anywhere",
    description: "Fax to any country with international support. Formatted phone numbers handled automatically.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Your faxes are transmitted quickly with real-time status updates and delivery confirmations.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your documents are encrypted in transit and never stored longer than necessary for transmission.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="bg-secondary/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Everything you need to send faxes
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground md:text-lg">
            TigerFax combines the reliability of traditional fax with the convenience of your smartphone.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-card-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
