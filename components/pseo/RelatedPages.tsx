import Link from "next/link"
import { ArrowRight } from "lucide-react"

export interface RelatedPage {
  href: string
  title: string
  description: string
}

interface RelatedPagesProps {
  pages: RelatedPage[]
  title?: string
}

export function RelatedPages({ pages, title = "Related Guides" }: RelatedPagesProps) {
  if (!pages || pages.length === 0) return null

  return (
    <section className="mt-12">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {pages.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            className="group flex flex-col gap-1 rounded-lg border p-4 hover:border-orange-300 hover:bg-orange-50/50 dark:hover:bg-orange-950/20 transition-colors"
          >
            <span className="font-medium text-sm group-hover:text-orange-600 transition-colors flex items-center gap-1">
              {page.title}
              <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </span>
            <span className="text-xs text-muted-foreground leading-relaxed">{page.description}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
