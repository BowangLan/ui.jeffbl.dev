import { cn } from "cn"

export default function UtilsDemo() {
  const base = "px-4 py-2 rounded-md"
  const override = "py-4 bg-primary text-primary-foreground"

  return (
    <div className="flex max-w-sm flex-col items-center gap-4 text-center">
      <div className={cn(base, override)}>{cn(base, override)}</div>
      <p className="text-sm text-muted-foreground">
        <span className="font-mono">cn()</span> merges Tailwind classes and
        resolves conflicts — <span className="font-mono">py-2</span> is
        overridden by <span className="font-mono">py-4</span>.
      </p>
    </div>
  )
}
