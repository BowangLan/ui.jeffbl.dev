import { CloudUploadIcon } from "lucide-react"

import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/new-york/ui/empty"
import { Button } from "@/registry/new-york/ui/button"

export default function EmptyDemo() {
  return (
    <Empty className="w-full max-w-sm rounded-xl border border-dashed">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <CloudUploadIcon />
        </EmptyMedia>
        <EmptyTitle>No files uploaded</EmptyTitle>
        <EmptyDescription>
          Drag and drop files here, or browse from your device.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button size="sm" variant="outline">
          Browse files
        </Button>
      </EmptyContent>
    </Empty>
  )
}
