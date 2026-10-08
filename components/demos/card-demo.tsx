import { BellIcon, CheckIcon } from "lucide-react"

import { Button } from "@/registry/new-york/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/new-york/ui/card"

export default function CardDemo() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <div className="flex items-center gap-3 rounded-lg border p-3">
          <BellIcon className="size-4 text-muted-foreground" />
          <p className="text-sm">New comment on your pull request</p>
        </div>
        <div className="flex items-center gap-3 rounded-lg border p-3">
          <CheckIcon className="size-4 text-muted-foreground" />
          <p className="text-sm">Deploy finished successfully</p>
        </div>
      </CardContent>
      <CardFooter className="justify-end gap-2">
        <Button variant="ghost" size="sm">
          Dismiss
        </Button>
        <Button size="sm">Mark all read</Button>
      </CardFooter>
    </Card>
  )
}
