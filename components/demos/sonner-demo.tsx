"use client"

import { toast } from "sonner"

import { Button } from "@/registry/new-york/ui/button"
import { Toaster } from "@/registry/new-york/ui/sonner"

export default function SonnerDemo() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Button
        variant="outline"
        onClick={() =>
          toast("Deployment finished", {
            description: "ui.jeffbl.dev is live in production.",
          })
        }
      >
        Show toast
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.error("Build failed", {
          description: "Type error in chart-demo.tsx.",
        })}
      >
        Show error toast
      </Button>
      <Toaster position="top-center" />
    </div>
  )
}
