import { ArrowRightIcon, Loader2Icon } from "lucide-react"

import { Button } from "@/registry/new-york/ui/button"

export default function ButtonDemo() {
  return (
    <div className="flex max-w-sm flex-col items-center gap-6">
      <div className="flex flex-wrap items-center justify-center gap-2.5">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="link">Link</Button>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2.5">
        <Button size="sm" variant="outline">
          Small
        </Button>
        <Button variant="outline">
          Icon
          <ArrowRightIcon />
        </Button>
        <Button size="lg">Large</Button>
        <Button disabled>
          <Loader2Icon className="animate-spin" />
          Loading
        </Button>
      </div>
    </div>
  )
}
