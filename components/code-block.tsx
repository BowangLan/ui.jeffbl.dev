import { CopyButton } from "@/components/copy-button"
import { cn } from "@/lib/utils"

export function CodeBlock({
  html,
  code,
  className,
}: {
  html: string
  code: string
  className?: string
}) {
  return (
    <figure className={cn("group/code relative", className)}>
      <CopyButton value={code} className="absolute top-2.5 right-2.5 z-10" />
      <div
        className="[&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:border [&_pre]:bg-muted/40 [&_pre]:px-4 [&_pre]:py-3.5 [&_pre]:font-mono [&_pre]:text-[13px] [&_pre]:leading-relaxed"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </figure>
  )
}
