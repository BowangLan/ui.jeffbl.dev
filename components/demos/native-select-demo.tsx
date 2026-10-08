"use client"

import { Label } from "@/registry/new-york/ui/label"
import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "@/registry/new-york/ui/native-select"

export default function NativeSelectDemo() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <Label htmlFor="framework">Framework</Label>
      <NativeSelect id="framework">
        <NativeSelectOption value="">Select a framework</NativeSelectOption>
        <NativeSelectOptGroup label="Meta-frameworks">
          <NativeSelectOption value="next">Next.js</NativeSelectOption>
          <NativeSelectOption value="remix">Remix</NativeSelectOption>
        </NativeSelectOptGroup>
        <NativeSelectOptGroup label="SPA frameworks">
          <NativeSelectOption value="vite">Vite + React</NativeSelectOption>
          <NativeSelectOption value="svelte">Svelte</NativeSelectOption>
        </NativeSelectOptGroup>
      </NativeSelect>
    </div>
  )
}
