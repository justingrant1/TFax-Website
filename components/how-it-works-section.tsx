import Image from "next/image"

const steps = [
  {
    number: "01",
    title: "Scan or Import",
    description: "Use your camera to scan documents or import PDFs and images from your photo library.",
  },
  {
    number: "02",
    title: "Enhance & Edit",
    description: "Apply filters to make your documents clearer. Add a professional cover page with your message.",
  },
  {
    number: "03",
    title: "Enter Recipient",
    description: "Type the fax number or select from your contacts. We handle international formatting for you.",
  },
  {
    number: "04",
    title: "Send & Track",
    description: "Hit send and track your fax in real-time. Get notified when it's successfully delivered.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Sending a fax has never been easier
            </h2>
            <p className="mb-10 text-pretty text-muted-foreground md:text-lg">
              Four simple steps to send professional faxes from anywhere.
            </p>

            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Image
              src="/images/gemini-generated-image-67ssa767ssa767ss.png"
              alt="TigerFax mascot sending a fax"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
