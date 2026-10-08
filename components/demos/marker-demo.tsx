"use client"

import { CalendarIcon, TagIcon } from "lucide-react"

import { Label } from "@/registry/new-york/ui/label"
import { Marker, MarkerContent, MarkerIcon } from "@/registry/new-york/ui/marker"

export default function MarkerDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-5 text-sm">
      <Marker>
        <MarkerIcon>
          <CalendarIcon />
        </MarkerIcon>
        <MarkerContent>Due Friday</MarkerContent>
      </Marker>
      <Marker>
        <MarkerIcon>
          <TagIcon />
        </MarkerIcon>
        <MarkerContent>v0.4 — registry build</MarkerContent>
      </Marker>
      <Marker variant="border">
        <MarkerContent>Release notes</MarkerContent>
      </Marker>
      <Marker variant="separator" />
      <Label className="text-muted-foreground">Markers work in lists</Label>
    </div>
  )
}
