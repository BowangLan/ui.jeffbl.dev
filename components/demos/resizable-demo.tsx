"use client"

import { GripVerticalIcon } from "lucide-react"

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/registry/new-york/ui/resizable"

export default function ResizableDemo() {
  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="h-56 w-full max-w-md rounded-lg border"
    >
      <ResizablePanel defaultSize={40} className="flex items-center justify-center">
        <span className="font-mono text-sm text-muted-foreground">sidebar</span>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={60} className="flex items-center justify-center">
        <div className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
          <GripVerticalIcon className="size-4" />
          drag the handle
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
