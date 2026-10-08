import { AlertCircleIcon, CheckCircle2Icon } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/registry/new-york/ui/alert"

export default function AlertDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <Alert>
        <CheckCircle2Icon />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>Your changes have been saved.</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <AlertCircleIcon />
        <AlertTitle>Something went wrong</AlertTitle>
        <AlertDescription>We could not reach the server. Try again.</AlertDescription>
      </Alert>
    </div>
  )
}
