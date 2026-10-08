"use client"

import { Slider } from "@/registry/new-york/ui/slider"

export default function SliderDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Volume</span>
          <span className="font-mono text-muted-foreground">70%</span>
        </div>
        <Slider defaultValue={[70]} max={100} step={1} />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Price range</span>
          <span className="font-mono text-muted-foreground">$20 – $80</span>
        </div>
        <Slider defaultValue={[20, 80]} max={100} step={1} />
      </div>
    </div>
  )
}
