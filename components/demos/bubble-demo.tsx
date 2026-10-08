import { ThumbsUpIcon } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/registry/new-york/ui/avatar"
import { Bubble, BubbleContent, BubbleGroup, BubbleReactions } from "@/registry/new-york/ui/bubble"

export default function BubbleDemo() {
  return (
    <BubbleGroup className="w-full max-w-sm">
      <Bubble align="start" variant="muted">
        <BubbleContent>Hey! Is the registry live?</BubbleContent>
      </Bubble>
      <Bubble align="end">
        <BubbleContent>Yep — 63 components and counting.</BubbleContent>
        <BubbleReactions>
          <span className="inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs">
            <ThumbsUpIcon className="size-3" /> 2
          </span>
        </BubbleReactions>
      </Bubble>
      <Bubble align="start" variant="outline">
        <BubbleContent className="flex items-center gap-2">
          <Avatar className="size-6">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>S</AvatarFallback>
          </Avatar>
          Nice, pulling one in now.
        </BubbleContent>
      </Bubble>
    </BubbleGroup>
  )
}
