import { ThumbsUpIcon } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/registry/new-york/ui/avatar"
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageGroup,
  MessageHeader,
} from "@/registry/new-york/ui/message"

export default function MessageDemo() {
  return (
    <MessageGroup className="w-full max-w-sm">
      <Message align="start">
        <MessageAvatar>
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
            <AvatarFallback>V</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <MessageHeader>vercel · 10:42 AM</MessageHeader>
          <p>
            Your deployment is live at <span className="underline">ui.jeffbl.dev</span>.
          </p>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageAvatar>
          <Avatar>
            <AvatarFallback>JB</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <p>Perfect, thanks!</p>
          <MessageFooter>
            <span className="inline-flex items-center gap-1 text-muted-foreground">
              <ThumbsUpIcon className="size-3" /> 1
            </span>
          </MessageFooter>
        </MessageContent>
      </Message>
    </MessageGroup>
  )
}
