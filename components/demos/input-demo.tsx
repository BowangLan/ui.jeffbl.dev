"use client"

import { Input } from "@/registry/new-york/ui/input"
import { Label } from "@/registry/new-york/ui/label"

export default function InputDemo() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="you@example.com" />
      </div>
      <div className="flex flex-col gap-2" data-invalid>
        <Label htmlFor="url" className="text-destructive">
          Website
        </Label>
        <Input id="url" defaultValue="http://" aria-invalid />
        <p className="text-xs text-destructive">Enter a valid URL.</p>
      </div>
    </div>
  )
}
