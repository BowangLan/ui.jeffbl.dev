import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { readFile } from "fs/promises"
import path from "path"

import { Badge } from "@/registry/new-york/ui/badge"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/new-york/ui/collapsible"
import { ChevronDownIcon, PackageIcon } from "lucide-react"

import { CodeBlock } from "@/components/code-block"
import { ComponentPreview } from "@/components/component-preview"
import { OpenInV0Button } from "@/components/open-in-v0-button"
import { Pager } from "@/components/pager"
import { highlight } from "@/lib/highlight"
import {
  getAdjacentComponents,
  getAllComponents,
  getComponent,
  getInstallCommand,
} from "@/lib/components"

export const dynamicParams = false

export function generateStaticParams() {
  return getAllComponents().map((component) => ({ name: component.name }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ name: string }>
}): Promise<Metadata> {
  const { name } = await params
  const component = getComponent(name)
  if (!component) return {}
  return {
    title: component.title,
    description: component.description,
  }
}

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ name: string }>
}) {
  const { name } = await params
  const component = getComponent(name)
  if (!component) notFound()

  const { prev, next } = getAdjacentComponents(name)
  const installCommand = getInstallCommand(name)

  const [demoSource, itemSource] = await Promise.all([
    readFile(
      path.join(process.cwd(), "components/demos", `${name}-demo.tsx`),
      "utf-8"
    ).catch(() => null),
    readFile(
      path.join(process.cwd(), component.files[0].path),
      "utf-8"
    ).catch(() => null),
  ])

  const [installHtml, demoHtml, sourceHtml] = await Promise.all([
    highlight(installCommand, "bash"),
    demoSource ? highlight(demoSource, "tsx") : Promise.resolve(null),
    itemSource ? highlight(itemSource, "tsx") : Promise.resolve(null),
  ])

  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-2">
        <div className="flex items-start justify-between gap-4">
          <h1 className="text-2xl font-semibold tracking-tight">
            {component.title}
          </h1>
          <OpenInV0Button name={name} className="hidden sm:inline-flex" />
        </div>
        <p className="max-w-[65ch] text-sm text-muted-foreground">
          {component.description}
        </p>
        {component.registryDependencies?.length ? (
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            <span className="text-xs text-muted-foreground">
              Registry dependencies:
            </span>
            {component.registryDependencies.map((dep) => (
              <Badge key={dep} variant="secondary" asChild>
                <a href={`/components/${dep}`}>{dep}</a>
              </Badge>
            ))}
          </div>
        ) : null}
        {component.dependencies?.length ? (
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs text-muted-foreground">
              npm dependencies:
            </span>
            {component.dependencies.map((dep) => (
              <Badge key={dep} variant="outline" className="font-mono text-xs">
                {dep}
              </Badge>
            ))}
          </div>
        ) : null}
      </header>

      <section className="flex flex-col gap-3">
        <h2 className="flex items-center gap-2 text-sm font-medium">
          <PackageIcon className="size-4 text-muted-foreground" />
          Install from the registry
        </h2>
        <CodeBlock html={installHtml} code={installCommand} />
      </section>

      {demoSource && demoHtml ? (
        <ComponentPreview
          name={name}
          codeNode={<CodeBlock html={demoHtml} code={demoSource} />}
        />
      ) : null}

      {itemSource && sourceHtml ? (
        <Collapsible className="flex flex-col gap-3">
          <CollapsibleTrigger className="group flex w-fit items-center gap-2 text-sm font-medium">
            Component source
            <ChevronDownIcon className="size-4 text-muted-foreground transition-transform group-data-[state=open]:rotate-180" />
          </CollapsibleTrigger>
          <CollapsibleContent className="overflow-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
            <CodeBlock html={sourceHtml} code={itemSource} />
          </CollapsibleContent>
        </Collapsible>
      ) : null}

      <Pager prev={prev} next={next} />
    </div>
  )
}
