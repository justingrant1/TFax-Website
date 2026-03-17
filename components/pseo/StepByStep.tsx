import { buildHowToSchema, type Step } from "@/lib/pseo/schema"

interface StepByStepProps {
  steps: Step[]
  title: string
  description?: string
}

export function StepByStep({ steps, title, description = "" }: StepByStepProps) {
  const schema = buildHowToSchema(title, description, steps)

  return (
    <section className="mt-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <ol className="space-y-6">
        {steps.map((step, i) => (
          <li key={i} className="flex gap-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white text-sm font-bold">
              {i + 1}
            </div>
            <div className="pt-0.5">
              <p className="font-semibold text-foreground">{step.name}</p>
              <p className="mt-1 text-muted-foreground leading-relaxed">{step.text}</p>
              {step.tip && (
                <p className="mt-2 text-sm text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/30 rounded px-3 py-2">
                  💡 <strong>Tip:</strong> {step.tip}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
