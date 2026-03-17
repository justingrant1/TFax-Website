"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { buildFAQSchema, type FAQ } from "@/lib/pseo/schema"
import { cn } from "@/lib/utils"

interface FAQSectionProps {
  faqs: FAQ[]
  title?: string
}

export function FAQSection({ faqs, title = "Frequently Asked Questions" }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const schema = buildFAQSchema(faqs)

  return (
    <section className="mt-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="divide-y divide-border rounded-lg border">
        {faqs.map((faq, i) => (
          <div key={i}>
            <button
              className="flex w-full items-center justify-between px-5 py-4 text-left font-medium hover:bg-muted/50 transition-colors"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              aria-expanded={openIndex === i}
            >
              <span>{faq.question}</span>
              <ChevronDown
                className={cn("h-4 w-4 shrink-0 text-muted-foreground transition-transform", openIndex === i && "rotate-180")}
              />
            </button>
            {openIndex === i && (
              <div className="px-5 pb-4 text-muted-foreground leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
