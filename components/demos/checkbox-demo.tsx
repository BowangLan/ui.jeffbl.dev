"use client"

import { Checkbox } from "@/registry/new-york/ui/checkbox"
import { Label } from "@/registry/new-york/ui/label"

const ITEMS = [
  { id: "terms", label: "Accept terms and conditions" },
  { id: "newsletter", label: "Subscribe to the newsletter" },
  { id: "updates", label: "Send me product updates" },
]

export default function CheckboxDemo() {
  return (
    <div className="flex flex-col gap-3">
      {ITEMS.map((item) => (
        <div key={item.id} className="flex items-center gap-2.5">
          <Checkbox id={item.id} defaultChecked={item.id === "terms"} />
          <Label htmlFor={item.id} className="font-normal">
            {item.label}
          </Label>
        </div>
      ))}
    </div>
  )
}
