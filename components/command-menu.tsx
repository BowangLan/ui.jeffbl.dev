"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { FileTextIcon } from "lucide-react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/registry/new-york/ui/command"

export type CommandMenuGroup = {
  category: string
  components: { name: string; title: string }[]
}

const OPEN_EVENT = "jeffbl:open-command-menu"

export function openCommandMenu() {
  window.dispatchEvent(new Event(OPEN_EVENT))
}

export function CommandMenu({ groups }: { groups: CommandMenuGroup[] }) {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const onOpen = () => setOpen(true)
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
    }
    window.addEventListener(OPEN_EVENT, onOpen)
    document.addEventListener("keydown", onKeyDown)
    return () => {
      window.removeEventListener(OPEN_EVENT, onOpen)
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [])

  const go = (href: string) => {
    setOpen(false)
    router.push(href)
  }

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Search components..." />
      <CommandList>
        <CommandEmpty>No components found.</CommandEmpty>
        <CommandGroup heading="Links">
          <CommandItem value="introduction" onSelect={() => go("/")}>
            <FileTextIcon />
            Introduction
          </CommandItem>
          <CommandItem value="components" onSelect={() => go("/components")}>
            <FileTextIcon />
            All Components
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        {groups.map((group) => (
          <CommandGroup key={group.category} heading={group.category}>
            {group.components.map((component) => (
              <CommandItem
                key={component.name}
                value={`${component.title} ${component.name}`}
                onSelect={() => go(`/components/${component.name}`)}
              >
                {component.title}
              </CommandItem>
            ))}
          </CommandGroup>
        ))}
      </CommandList>
    </CommandDialog>
  )
}
