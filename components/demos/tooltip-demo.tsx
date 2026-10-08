"use client"

import { InfoIcon } from "lucide-react"

import { Button } from "@/registry/new-york/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/new-york/ui/tooltip"

export default function TooltipDemo() {
  return (
    <TooltipProvider>
      <div className="flex items-center gap-2">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Registry info">
              <InfoIcon />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Served as JSON at /r/&lt;name&gt;.json</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Hover me</Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">Tooltips follow the focus ring tokens</TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  )
}
