"use client"

import { useIsMobile } from "@/registry/new-york/hooks/use-mobile"
import { Badge } from "@/registry/new-york/ui/badge"

export default function UseMobileDemo() {
  const isMobile = useIsMobile()

  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <Badge variant={isMobile ? "default" : "secondary"}>
        {isMobile ? "Mobile viewport" : "Desktop viewport"}
      </Badge>
      <p className="max-w-[32ch] text-sm text-muted-foreground">
        Resizes with the window. The breakpoint is 768px.
      </p>
    </div>
  )
}
