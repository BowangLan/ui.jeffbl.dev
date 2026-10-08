"use client"

import { EyeOffIcon, SearchIcon } from "lucide-react"

import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupText } from "@/registry/new-york/ui/input-group"
import { Kbd } from "@/registry/new-york/ui/kbd"

export default function InputGroupDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <InputGroup>
        <InputGroupInput placeholder="Search the docs..." />
        <InputGroupAddon>
          <SearchIcon className="size-4 text-muted-foreground" />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <Kbd>⌘K</Kbd>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="you@example.com" type="email" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>@</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="hidden@example.com" type="email" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton aria-label="Hide">
            <EyeOffIcon className="size-4" />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
