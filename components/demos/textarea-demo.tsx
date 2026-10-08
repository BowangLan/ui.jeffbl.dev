"use client"

import { Textarea } from "@/registry/new-york/ui/textarea"

export default function TextareaDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <label
        htmlFor="message"
        className="text-sm font-medium leading-none"
      >
        Message
      </label>
      <Textarea
        id="message"
        placeholder="Leave a comment..."
        className="min-h-28"
      />
      <p className="text-xs text-muted-foreground">
        Markdown is supported.
      </p>
    </div>
  )
}
