"use client"

import { Label } from "@/registry/new-york/ui/label"
import { Separator } from "@/registry/new-york/ui/separator"

export default function SeparatorDemo() {
  return (
    <div className="w-full max-w-sm">
      <div className="flex flex-col gap-1">
        <p className="text-sm font-medium">Registry</p>
        <p className="text-sm text-muted-foreground">
          Serving 67 items at /r/&lt;name&gt;.json.
        </p>
      </div>
      <Separator className="my-4" />
      <Label className="font-normal leading-relaxed text-muted-foreground">
        Separators can be horizontal or vertical, and they follow the border
        token of the theme.
      </Label>
    </div>
  )
}
