"use client"

import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/registry/new-york/ui/navigation-menu"

const COMPONENTS = [
  {
    title: "Alert Dialog",
    href: "/components/alert-dialog",
    description: "A modal dialog that expects a response.",
  },
  {
    title: "Command",
    href: "/components/command",
    description: "A command palette backed by cmdk.",
  },
  {
    title: "Sheet",
    href: "/components/sheet",
    description: "A panel that slides in from the edge.",
  },
]

export default function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-80 gap-2 p-3">
              {COMPONENTS.map((component) => (
                <li key={component.title}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={component.href}
                      className="flex flex-col gap-1 rounded-md p-3 transition-colors hover:bg-accent"
                    >
                      <span className="text-sm font-medium">{component.title}</span>
                      <span className="text-sm text-muted-foreground">
                        {component.description}
                      </span>
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/components">All components</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
