"use client"

import { ChevronDownIcon } from "lucide-react"

import { Button } from "@/registry/new-york/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/new-york/ui/collapsible"

export default function CollapsibleDemo() {
  return (
    <Collapsible className="w-full max-w-sm">
      <CollapsibleTrigger asChild>
        <Button variant="outline" size="sm" className="w-full justify-between">
          View deployment steps
          <ChevronDownIcon className="size-4 transition-transform group-data-[state=open]:rotate-180 [[data-state=open]>&]:rotate-180" />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-2 flex flex-col gap-2 rounded-lg border p-3 font-mono text-sm text-muted-foreground">
        <span>git push origin main</span>
        <span>railway up --service web</span>
        <span>✓ Deployed in 42s</span>
      </CollapsibleContent>
    </Collapsible>
  )
}
