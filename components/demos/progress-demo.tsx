import { Progress } from "@/registry/new-york/ui/progress"

export default function ProgressDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Uploading assets</span>
          <span className="font-mono text-muted-foreground">64%</span>
        </div>
        <Progress value={64} />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Indexing registry</span>
          <span className="font-mono text-muted-foreground">100%</span>
        </div>
        <Progress value={100} />
      </div>
    </div>
  )
}
