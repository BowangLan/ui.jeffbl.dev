"use client"

import * as React from "react"

import { Button } from "@/registry/new-york/ui/button"
import {
  Combobox,
  ComboboxContent,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
} from "@/registry/new-york/ui/combobox"

const FRAMEWORKS = [
  "Next.js",
  "SvelteKit",
  "Astro",
  "Remix",
  "Solid Start",
]

export default function ComboboxDemo() {
  const [value, setValue] = React.useState<string | null>(null)

  return (
    <Combobox items={FRAMEWORKS} value={value} onValueChange={setValue}>
      <ComboboxTrigger
        render={
          <Button variant="outline" className="w-56 justify-between font-normal" />
        }
      >
        {value ?? "Select framework..."}
      </ComboboxTrigger>
      <ComboboxContent className="w-56">
        <ComboboxInput placeholder="Search frameworks..." />
        <ComboboxList>
          {FRAMEWORKS.map((framework) => (
            <ComboboxItem key={framework} value={framework}>
              {framework}
            </ComboboxItem>
          ))}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}
