import registryJson from "@/registry.json"

export const SITE_NAME = "jeffbl"
export const SITE_URL = "https://ui.jeffbl.dev"

export type RegistryItem = {
  name: string
  type: string
  title?: string
  description?: string
  dependencies?: string[]
  registryDependencies?: string[]
  files: { path: string; type: string; target?: string }[]
}

export type ComponentInfo = RegistryItem & {
  title: string
  description: string
  category: string
}

const CATEGORIES: Record<string, string> = {
  accordion: "Layout & Structure",
  "aspect-ratio": "Layout & Structure",
  card: "Layout & Structure",
  carousel: "Layout & Structure",
  collapsible: "Layout & Structure",
  empty: "Layout & Structure",
  item: "Layout & Structure",
  resizable: "Layout & Structure",
  "scroll-area": "Layout & Structure",
  separator: "Layout & Structure",
  sidebar: "Layout & Structure",

  button: "Forms & Inputs",
  "button-group": "Forms & Inputs",
  calendar: "Forms & Inputs",
  checkbox: "Forms & Inputs",
  combobox: "Forms & Inputs",
  field: "Forms & Inputs",
  form: "Forms & Inputs",
  input: "Forms & Inputs",
  "input-group": "Forms & Inputs",
  "input-otp": "Forms & Inputs",
  label: "Forms & Inputs",
  "native-select": "Forms & Inputs",
  "radio-group": "Forms & Inputs",
  select: "Forms & Inputs",
  slider: "Forms & Inputs",
  switch: "Forms & Inputs",
  textarea: "Forms & Inputs",
  toggle: "Forms & Inputs",
  "toggle-group": "Forms & Inputs",

  breadcrumb: "Navigation",
  command: "Navigation",
  menubar: "Navigation",
  "navigation-menu": "Navigation",
  pagination: "Navigation",
  tabs: "Navigation",

  avatar: "Data Display",
  badge: "Data Display",
  chart: "Data Display",
  kbd: "Data Display",
  marker: "Data Display",
  table: "Data Display",

  alert: "Feedback",
  progress: "Feedback",
  skeleton: "Feedback",
  sonner: "Feedback",
  spinner: "Feedback",

  "alert-dialog": "Overlays",
  "context-menu": "Overlays",
  dialog: "Overlays",
  drawer: "Overlays",
  "dropdown-menu": "Overlays",
  "hover-card": "Overlays",
  popover: "Overlays",
  sheet: "Overlays",
  tooltip: "Overlays",

  attachment: "Chat",
  bubble: "Chat",
  message: "Chat",
  "message-scroller": "Chat",

  direction: "Utilities",
  "use-mobile": "Utilities",
  utils: "Utilities",
}

export const CATEGORY_ORDER = [
  "Layout & Structure",
  "Forms & Inputs",
  "Navigation",
  "Data Display",
  "Feedback",
  "Overlays",
  "Chat",
  "Utilities",
] as const

function isLibraryItem(item: RegistryItem): boolean {
  return ["registry:ui", "registry:hook", "registry:lib"].includes(item.type)
}

export function getAllComponents(): ComponentInfo[] {
  return (registryJson.items as RegistryItem[])
    .filter(isLibraryItem)
    .map((item) => ({
      ...item,
      title: item.title ?? item.name,
      description: item.description ?? "",
      category: CATEGORIES[item.name] ?? "Other",
    }))
    .sort((a, b) => a.name.localeCompare(b.name))
}

export function getComponent(name: string): ComponentInfo | undefined {
  return getAllComponents().find((c) => c.name === name)
}

export function getComponentsByCategory(): { category: string; components: ComponentInfo[] }[] {
  const all = getAllComponents()
  return CATEGORY_ORDER.map((category) => ({
    category,
    components: all.filter((c) => c.category === category),
  })).filter((group) => group.components.length > 0)
}

export function getAdjacentComponents(name: string): { prev?: ComponentInfo; next?: ComponentInfo } {
  const all = getAllComponents()
  const index = all.findIndex((c) => c.name === name)
  return {
    prev: index > 0 ? all[index - 1] : undefined,
    next: index >= 0 && index < all.length - 1 ? all[index + 1] : undefined,
  }
}

export function getInstallCommand(name: string): string {
  return `npx shadcn@latest add "${SITE_URL}/r/${name}.json"`
}

export type NavGroup = {
  title: string
  links: { name: string; title: string; href: string }[]
}

export function getNavGroups(): NavGroup[] {
  return [
    {
      title: "Getting Started",
      links: [
        { name: "introduction", title: "Introduction", href: "/" },
        { name: "components", title: "All Components", href: "/components" },
      ],
    },
    ...getComponentsByCategory().map(({ category, components }) => ({
      title: category,
      links: components.map((c) => ({
        name: c.name,
        title: c.title,
        href: `/components/${c.name}`,
      })),
    })),
  ]
}
