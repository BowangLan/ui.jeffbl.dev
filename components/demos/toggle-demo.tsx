"use client"

import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react"

import { Label } from "@/registry/new-york/ui/label"
import { Toggle } from "@/registry/new-york/ui/toggle"

export default function ToggleDemo() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-2">
        <Toggle variant="outline" size="sm" aria-label="Bold">
          <BoldIcon />
        </Toggle>
        <Toggle variant="outline" size="sm" aria-label="Italic">
          <ItalicIcon />
        </Toggle>
        <Toggle variant="outline" size="sm" aria-label="Underline">
          <UnderlineIcon />
        </Toggle>
      </div>
      <div className="flex items-center gap-2">
        <Toggle aria-label="With text" defaultPressed>
          <UnderlineIcon />
          Underline
        </Toggle>
      </div>
      <Label className="font-normal text-muted-foreground">
        Pressed state uses accent tokens
      </Label>
    </div>
  )
}
