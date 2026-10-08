"use client"

import { Label } from "@/registry/new-york/ui/label"
import { Switch } from "@/registry/new-york/ui/switch"

export default function SwitchDemo() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <div className="flex items-center justify-between gap-3 rounded-lg border p-3">
        <Label htmlFor="airplane" className="font-normal">
          Airplane mode
        </Label>
        <Switch id="airplane" />
      </div>
      <div className="flex items-center justify-between gap-3 rounded-lg border p-3">
        <Label htmlFor="sync" className="font-normal">
          Sync across devices
        </Label>
        <Switch id="sync" defaultChecked />
      </div>
    </div>
  )
}
