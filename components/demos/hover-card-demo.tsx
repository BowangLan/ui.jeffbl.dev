"use client"

import { InfoIcon } from "lucide-react"

import { Button } from "@/registry/new-york/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/registry/new-york/ui/hover-card"

export default function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link" className="px-0 text-base">
          @jeffbl
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-72">
        <div className="flex gap-3">
          <InfoIcon className="mt-0.5 size-5 shrink-0 text-muted-foreground" />
          <div className="flex flex-col gap-1">
            <p className="text-sm font-semibold">jeffbl registry</p>
            <p className="text-sm text-muted-foreground">
              Serves registry items compatible with the shadcn CLI at
              /r/&lt;name&gt;.json.
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
