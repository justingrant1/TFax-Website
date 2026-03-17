import Link from "next/link"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const APP_STORE_LINK = "https://apps.apple.com/us/app/tigerfax/id6758597882"

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Try TigerFax with no commitment.",
    features: [
      "3 lifetime free pages",
      "Camera document scanning",
      "File upload (PDF, images)",
      "Optional cover page",
      "Fax history",
      "Apple & email sign-in",
    ],
    cta: "Download Free",
    highlighted: false,
    badge: null,
  },
  {
    name: "Pay Per Page",
    price: "$0.99",
    period: "per page",
    description: "Send faxes only when you need to.",
    features: [
      "Everything in Free",
      "Unlimited sending",
      "Multi-document faxes",
      "Batch faxing to multiple recipients",
      "Real-time delivery status",
      "Cloud-synced history",
    ],
    cta: "Get Started",
    highlighted: false,
    badge: null,
  },
  {
    name: "Pro",
    price: "Monthly",
    period: "or annual",
    description: "For power users who fax regularly.",
    features: [
      "Everything in Pay Per Page",
      "Unlimited fax sending",
      "Dedicated US fax number",
      "Fax inbox & PDF viewer",
      "Instant push notifications",
      "Usage analytics dashboard",
      "Priority support",
    ],
    cta: "Go Pro",
    highlighted: true,
    badge: "Most Popular",
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="bg-secondary/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground md:text-lg">
            Start free, pay only when you send, or go Pro for unlimited faxing
            and your own dedicated fax number.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-7 ${
                plan.highlighted
                  ? "bg-primary text-primary-foreground shadow-2xl shadow-primary/25 md:-mt-4 md:pb-11 md:pt-11"
                  : "bg-card border border-border shadow-sm"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-background px-3 py-1 text-xs font-bold text-foreground shadow-md">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <h3
                  className={`mb-1 text-lg font-bold ${
                    plan.highlighted ? "text-primary-foreground" : "text-foreground"
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="mb-2 flex items-baseline gap-1.5">
                  <span
                    className={`text-3xl font-bold ${
                      plan.highlighted ? "text-primary-foreground" : "text-foreground"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm ${
                      plan.highlighted
                        ? "text-primary-foreground/70"
                        : "text-muted-foreground"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>
                <p
                  className={`text-sm ${
                    plan.highlighted
                      ? "text-primary-foreground/80"
                      : "text-muted-foreground"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <ul className="mb-7 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        plan.highlighted ? "text-primary-foreground" : "text-primary"
                      }`}
                    />
                    <span
                      className={
                        plan.highlighted
                          ? "text-primary-foreground/90"
                          : "text-muted-foreground"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                asChild
                className={`w-full font-semibold ${
                  plan.highlighted
                    ? "bg-background text-foreground hover:bg-background/90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                <Link
                  href={APP_STORE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {plan.cta}
                </Link>
              </Button>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          All payments processed securely via Apple In-App Purchase.{" "}
          <span className="font-medium">Cancel Pro anytime</span> through your
          Apple ID settings.
        </p>
      </div>
    </section>
  )
}
