import {
  Camera,
  FileText,
  Users,
  Inbox,
  Bell,
  Eye,
  History,
  BarChart3,
  Shield,
} from "lucide-react"

const featureCategories = [
  {
    category: "Send Faxes",
    emoji: "📤",
    features: [
      {
        icon: Camera,
        title: "Camera Scanning",
        description:
          "Scan physical documents with real-time edge detection and automatic brightness, contrast, and sharpness enhancement.",
      },
      {
        icon: FileText,
        title: "Multi-Document & Cover Pages",
        description:
          "Attach multiple PDFs, images, or scans to a single fax. Add a professional cover page with To, From, Subject, and a custom message.",
      },
      {
        icon: Users,
        title: "Batch Faxing",
        description:
          "Send the same document set to multiple recipients in one action. Import contacts directly from your iPhone address book.",
      },
    ],
  },
  {
    category: "Receive Faxes",
    emoji: "📥",
    badge: "Pro",
    features: [
      {
        icon: Inbox,
        title: "Dedicated US Fax Number",
        description:
          "Get a real, dedicated US fax number provisioned just for you. Share it with anyone and receive faxes directly in the app.",
      },
      {
        icon: Bell,
        title: "Instant Push Notifications",
        description:
          "Get notified the moment a new fax arrives — even when the app is closed. Never miss an important document again.",
      },
      {
        icon: Eye,
        title: "Inline PDF Viewer",
        description:
          "View received fax PDFs directly in the app with full metadata: sender number, page count, timestamp, and delivery status.",
      },
    ],
  },
  {
    category: "Track & Manage",
    emoji: "📊",
    features: [
      {
        icon: History,
        title: "Complete Fax History",
        description:
          "A chronological log of every fax sent with real-time delivery status: queued → sending → delivered or failed.",
      },
      {
        icon: BarChart3,
        title: "Usage Analytics",
        description:
          "Monthly breakdowns, success rates, cost estimates, and lifetime totals — synced to the cloud across all your devices.",
      },
      {
        icon: Shield,
        title: "Secure & Private",
        description:
          "End-to-end encrypted transmissions. Documents are automatically deleted after delivery. Your data stays yours.",
      },
    ],
  },
]

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="bg-secondary/50 py-20 md:py-28"
      aria-labelledby="features-heading"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-12 text-center md:mb-16">
          <h2
            id="features-heading"
            className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl"
          >
            Everything you need to fax smarter
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground md:text-lg">
            TigerFax combines the reliability of traditional fax with the power
            of your iPhone — from sending to receiving to tracking.
          </p>
        </div>

        <div className="space-y-12">
          {featureCategories.map((cat) => (
            <div key={cat.category}>
              {/* Category header */}
              <div className="mb-5 flex items-center gap-3">
                <span className="text-2xl" aria-hidden="true">{cat.emoji}</span>
                <h3 className="text-xl font-bold text-foreground">{cat.category}</h3>
                {cat.badge && (
                  <span className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                    {cat.badge}
                  </span>
                )}
              </div>

              {/* Feature cards */}
              <div className="grid gap-4 sm:grid-cols-3">
                {cat.features.map((feature) => (
                  <div
                    key={feature.title}
                    className="rounded-xl bg-card p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                      <feature.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    </div>
                    <h4 className="mb-2 font-semibold text-card-foreground">
                      {feature.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
