"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { buildBreadcrumbSchema, type Breadcrumb } from "@/lib/pseo/schema"

interface BreadcrumbNavProps {
  crumbs: Breadcrumb[]
}

export function BreadcrumbNav({ crumbs }: BreadcrumbNavProps) {
  const schema = buildBreadcrumbSchema(crumbs)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm text-muted-foreground flex-wrap">
        {crumbs.map((crumb, i) => (
          <span key={crumb.href} className="flex items-center gap-1">
            {i > 0 && <ChevronRight className="h-3 w-3 shrink-0" />}
            {i === crumbs.length - 1 ? (
              <span className="text-foreground font-medium" aria-current="page">
                {crumb.name}
              </span>
            ) : (
              <Link href={crumb.href} className="hover:text-foreground transition-colors">
                {crumb.name}
              </Link>
            )}
          </span>
        ))}
      </nav>
    </>
  )
}
