"use client"

import { CodeIcon, EyeIcon } from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/new-york/ui/tabs"
import { DemoByName } from "@/components/demo-registry"

export function ComponentPreview({
  name,
  codeNode,
}: {
  name: string
  codeNode: React.ReactNode
}) {
  return (
    <Tabs defaultValue="preview" className="gap-3">
      <TabsList>
        <TabsTrigger value="preview">
          <EyeIcon className="size-4" />
          Preview
        </TabsTrigger>
        <TabsTrigger value="code">
          <CodeIcon className="size-4" />
          Code
        </TabsTrigger>
      </TabsList>
      <TabsContent
        value="preview"
        className="flex min-h-[350px] items-center justify-center rounded-xl border bg-background p-6 md:p-10 [&>*]:max-w-full"
      >
        <DemoByName name={name} />
      </TabsContent>
      <TabsContent value="code">{codeNode}</TabsContent>
    </Tabs>
  )
}
