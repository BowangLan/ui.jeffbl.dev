import { CommandIcon } from "lucide-react"

import { Kbd, KbdGroup } from "@/registry/new-york/ui/kbd"

export default function KbdDemo() {
  return (
    <div className="flex flex-col items-center gap-3">
      <KbdGroup>
        <Kbd>
          <CommandIcon />
        </Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <Kbd>Shift</Kbd>
        <Kbd>P</Kbd>
      </KbdGroup>
    </div>
  )
}
