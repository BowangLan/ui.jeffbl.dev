"use client"

import { SettingsIcon } from "lucide-react"

import { Button } from "@/registry/new-york/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/new-york/ui/popover"
import { Label } from "@/registry/new-york/ui/label"
import { Switch } from "@/registry/new-york/ui/switch"

export default function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Display settings">
          <SettingsIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-medium">Display</p>
          <div className="flex items-center justify-between gap-2">
            <Label htmlFor="sticky">Sticky header</Label>
            <Switch id="sticky" defaultChecked />
          </div>
          <div className="flex items-center justify-between gap-2">
            <Label htmlFor="compact">Compact mode</Label>
            <Switch id="compact" />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
