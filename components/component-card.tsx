import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import type { ComponentInfo } from "@/lib/components"

export function ComponentCard({ component }: { component: ComponentInfo }) {
  return (
    <Link
      href={`/components/${component.name}`}
      className="group relative flex flex-col gap-1 rounded-xl border bg-card p-4 transition-colors hover:bg-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <span className="flex items-center justify-between font-medium text-[15px]">
        {component.title}
        <ArrowRightIcon className="size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
      </span>
      <span className="line-clamp-2 text-sm text-muted-foreground">
        {component.description}
      </span>
    </Link>
  )
}
