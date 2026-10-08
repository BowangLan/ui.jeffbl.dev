"use client"

import dynamic from "next/dynamic"

const loader = (name: string) =>
  dynamic(() => import(`@/components/demos/${name}-demo`), {
    loading: () => <div className="h-24 w-full animate-pulse rounded-lg bg-muted/50" />,
  })

const DEMOS = [
  "accordion",
  "alert",
  "alert-dialog",
  "aspect-ratio",
  "attachment",
  "avatar",
  "badge",
  "breadcrumb",
  "bubble",
  "button",
  "button-group",
  "calendar",
  "card",
  "carousel",
  "chart",
  "checkbox",
  "collapsible",
  "combobox",
  "command",
  "context-menu",
  "dialog",
  "direction",
  "drawer",
  "dropdown-menu",
  "empty",
  "field",
  "form",
  "hover-card",
  "input",
  "input-group",
  "input-otp",
  "item",
  "kbd",
  "label",
  "marker",
  "menubar",
  "message",
  "message-scroller",
  "native-select",
  "navigation-menu",
  "pagination",
  "popover",
  "progress",
  "radio-group",
  "resizable",
  "scroll-area",
  "select",
  "separator",
  "sheet",
  "sidebar",
  "skeleton",
  "slider",
  "sonner",
  "spinner",
  "switch",
  "table",
  "tabs",
  "textarea",
  "toggle",
  "toggle-group",
  "tooltip",
  "use-mobile",
  "utils",
] as const

export type DemoName = (typeof DEMOS)[number]

const REGISTRY = Object.fromEntries(
  DEMOS.map((name) => [name, loader(name)])
) as Record<DemoName, React.ComponentType>

export function DemoByName({ name }: { name: string }) {
  const Demo = REGISTRY[name as DemoName]
  if (!Demo) return null
  return <Demo />
}
