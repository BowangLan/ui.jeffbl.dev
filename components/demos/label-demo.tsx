import { Label } from "@/registry/new-york/ui/label"

export default function LabelDemo() {
  return (
    <div className="flex flex-col items-start gap-3">
      <div className="flex flex-col gap-2">
        <Label htmlFor="username">Username</Label>
        <p className="text-xs text-muted-foreground">
          Used in your profile URL.
        </p>
      </div>
      <Label>
        <span className="peer-checked:text-foreground">Compact density</span>
      </Label>
    </div>
  )
}
