import Link from "next/link"
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"

import { Button } from "@/registry/new-york/ui/button"
import type { ComponentInfo } from "@/lib/components"

export function Pager({
  prev,
  next,
}: {
  prev?: ComponentInfo
  next?: ComponentInfo
}) {
  return (
    <nav className="flex items-center justify-between gap-2 border-t pt-6">
      {prev ? (
        <Button variant="outline" size="sm" asChild className="gap-1">
          <Link href={`/components/${prev.name}`}>
            <ArrowLeftIcon className="size-4" />
            <span className="flex flex-col items-start leading-tight">
              <span className="text-xs text-muted-foreground">Previous</span>
              <span>{prev.title}</span>
            </span>
          </Link>
        </Button>
      ) : (
        <span />
      )}
      {next ? (
        <Button variant="outline" size="sm" asChild className="gap-1">
          <Link href={`/components/${next.name}`}>
            <span className="flex flex-col items-end leading-tight">
              <span className="text-xs text-muted-foreground">Next</span>
              <span>{next.title}</span>
            </span>
            <ArrowRightIcon className="size-4" />
          </Link>
        </Button>
      ) : (
        <span />
      )}
    </nav>
  )
}
