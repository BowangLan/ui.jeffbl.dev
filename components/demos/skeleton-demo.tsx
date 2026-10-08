import { Skeleton } from "@/registry/new-york/ui/skeleton"

export default function SkeletonDemo() {
  return (
    <div className="flex w-full max-w-sm items-start gap-4">
      <Skeleton className="size-12 shrink-0 rounded-full" />
      <div className="flex w-full flex-col gap-2.5">
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
    </div>
  )
}
