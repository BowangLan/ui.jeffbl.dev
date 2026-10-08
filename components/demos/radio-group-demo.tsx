"use client"

import { RadioGroup, RadioGroupItem } from "@/registry/new-york/ui/radio-group"
import { Label } from "@/registry/new-york/ui/label"

const PLANS = [
  { id: "free", label: "Free", description: "For personal projects" },
  { id: "pro", label: "Pro", description: "For teams and client work" },
]

export default function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="pro" className="w-full max-w-sm gap-3">
      {PLANS.map((plan) => (
        <div
          key={plan.id}
          className="flex items-center gap-3 rounded-lg border p-3 has-data-[state=checked]:border-foreground"
        >
          <RadioGroupItem value={plan.id} id={plan.id} />
          <Label htmlFor={plan.id} className="flex flex-col gap-0.5 font-normal">
            <span className="font-medium">{plan.label}</span>
            <span className="text-muted-foreground">{plan.description}</span>
          </Label>
        </div>
      ))}
    </RadioGroup>
  )
}
