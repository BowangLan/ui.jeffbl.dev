import { ScrollArea } from "@/registry/new-york/ui/scroll-area"
import { Separator } from "@/registry/new-york/ui/separator"

const TAGS = [
  "button", "card", "dialog", "dropdown-menu", "form", "input",
  "label", "popover", "select", "separator", "sheet", "table",
  "tabs", "textarea", "toggle", "tooltip",
]

export default function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-56 w-full max-w-xs rounded-lg border p-4">
      <p className="mb-4 text-sm font-medium">Registry items</p>
      {TAGS.map((tag) => (
        <div key={tag}>
          <p className="py-1.5 font-mono text-sm text-muted-foreground">{tag}</p>
          <Separator />
        </div>
      ))}
    </ScrollArea>
  )
}
