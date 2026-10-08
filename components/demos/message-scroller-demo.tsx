"use client"

import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/registry/new-york/ui/message-scroller"

const MESSAGES = [
  "Starting the deploy…",
  "Build completed in 18s.",
  "Running database migrations.",
  "All checks passed.",
  "Deployment is live.",
  "Cache warmed for 12 routes.",
]

export default function MessageScrollerDemo() {
  return (
    <div className="w-full max-w-sm">
      <MessageScrollerProvider>
        <MessageScroller className="h-64 rounded-xl border">
          <MessageScrollerViewport>
            <MessageScrollerContent>
              {MESSAGES.map((message) => (
                <MessageScrollerItem key={message} className="rounded-lg border p-3 text-sm">
                  {message}
                </MessageScrollerItem>
              ))}
            </MessageScrollerContent>
          </MessageScrollerViewport>
          <MessageScrollerButton className="absolute right-3 bottom-3" />
        </MessageScroller>
      </MessageScrollerProvider>
    </div>
  )
}
