import Link from "next/link"
import { ArrowRightIcon, MoonStarIcon, PaintbrushIcon, TerminalIcon } from "lucide-react"

import { Button } from "@/registry/new-york/ui/button"
import { CopyButton } from "@/components/copy-button"
import { DemoByName } from "@/components/demo-registry"
import { getAllComponents } from "@/lib/components"

const HERO_COMMAND =
  'npx shadcn@latest add "https://ui.jeffbl.dev/r/button.json"'

const FEATURES = [
  {
    icon: TerminalIcon,
    title: "CLI-native",
    description:
      "Install any component straight from the registry with the shadcn CLI. No package to subscribe to.",
  },
  {
    icon: PaintbrushIcon,
    title: "Built on Tailwind v4",
    description:
      "Every component targets Tailwind CSS v4 with CSS variables, so theming is one file away.",
  },
  {
    icon: MoonStarIcon,
    title: "Dark mode included",
    description:
      "Components ship with light and dark styles that follow the system or a manual toggle.",
  },
  {
    icon: ArrowRightIcon,
    title: "Open in v0",
    description:
      "Send any component to v0 and iterate on it with AI before copying it back into your project.",
  },
]

const SHOWCASE = [
  { name: "chart", label: "Chart", span: true },
  { name: "calendar", label: "Calendar" },
  { name: "button", label: "Button" },
  { name: "badge", label: "Badge" },
  { name: "sonner", label: "Toast" },
  { name: "bubble", label: "Chat", span: true },
  { name: "slider", label: "Slider" },
]

export default function Home() {
  const components = getAllComponents()

  return (
    <div className="flex flex-col">
      <section className="mx-auto flex w-full max-w-[1400px] flex-col items-center gap-5 px-4 pt-20 pb-16 text-center md:px-6 md:pt-28">
        <Button variant="outline" size="sm" asChild className="rounded-full text-muted-foreground">
          <Link href="/components">
            Open registry · {components.length} components
            <ArrowRightIcon className="size-3.5" />
          </Link>
        </Button>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tighter text-balance md:text-6xl">
          Copy, paste, ship components.
        </h1>
        <p className="max-w-[42ch] text-pretty text-base text-muted-foreground md:text-lg">
          An open shadcn registry for Tailwind v4. Install with the CLI and own
          the code forever.
        </p>
        <div className="mt-2 flex flex-col items-center gap-3 sm:flex-row">
          <Button size="lg" asChild>
            <Link href="/components">Browse components</Link>
          </Button>
          <div className="flex h-10 items-center gap-1.5 rounded-lg border bg-muted/40 pr-1.5 pl-3 font-mono text-[13px] text-muted-foreground">
            <span className="max-w-[19rem] truncate sm:max-w-none">
              npx shadcn@latest add https://ui.jeffbl.dev/r/...
            </span>
            <CopyButton value={HERO_COMMAND} />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1400px] px-4 pb-24 md:px-6">
        <div className="grid gap-4 md:grid-cols-3">
          {SHOWCASE.map((cell) => (
            <Link
              key={cell.name}
              href={`/components/${cell.name}`}
              className={
                cell.span
                  ? "group flex flex-col gap-3 rounded-xl border bg-card p-5 transition-colors hover:bg-accent/30 md:col-span-2"
                  : "group flex flex-col gap-3 rounded-xl border bg-card p-5 transition-colors hover:bg-accent/30"
              }
            >
              <span className="flex items-center justify-between text-sm font-medium">
                {cell.label}
                <ArrowRightIcon className="size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </span>
              <span className="flex min-h-[220px] flex-1 items-center justify-center">
                <DemoByName name={cell.name} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t">
        <div className="mx-auto grid w-full max-w-[1400px] gap-x-10 gap-y-8 px-4 py-16 sm:grid-cols-2 md:px-6">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="flex gap-3">
              <feature.icon className="mt-0.5 size-5 shrink-0 text-muted-foreground" />
              <div className="flex flex-col gap-1">
                <p className="font-medium">{feature.title}</p>
                <p className="max-w-[55ch] text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
