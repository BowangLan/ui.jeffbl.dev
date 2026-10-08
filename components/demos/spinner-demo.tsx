import { Spinner } from "@/registry/new-york/ui/spinner"

export default function SpinnerDemo() {
  return (
    <div className="flex flex-col items-center gap-5">
      <Spinner className="size-6" />
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Spinner className="size-4" />
        Fetching registry index...
      </div>
    </div>
  )
}
