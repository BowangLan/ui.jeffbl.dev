"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { SearchIcon } from "lucide-react"

import { Button } from "@/registry/new-york/ui/button"
import { Separator } from "@/registry/new-york/ui/separator"
import { ThemeToggle } from "@/components/theme-toggle"
import { openCommandMenu } from "@/components/command-menu"
import { MobileNav } from "@/components/mobile-nav"
import type { NavGroup } from "@/lib/components"

const NAV_LINKS = [{ href: "/components", label: "Components" }]

export function SiteHeader({ groups }: { groups: NavGroup[] }) {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-[1400px] items-center gap-2 px-4 md:px-6">
        <MobileNav groups={groups} />
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="flex size-6 items-center justify-center rounded-md bg-foreground font-bold text-[13px] text-background">
            J
          </span>
          <span className="text-[15px] tracking-tight">jeffbl</span>
        </Link>
        <nav className="hidden items-center gap-1 sm:flex">
          {NAV_LINKS.map((link) => (
            <Button
              key={link.href}
              variant="ghost"
              size="sm"
              asChild
              className="text-muted-foreground data-active:text-foreground"
            >
              <Link href={link.href} data-active={pathname.startsWith(link.href)}>
                {link.label}
              </Link>
            </Button>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="justify-start gap-2 pr-2 font-normal text-muted-foreground sm:w-56"
            onClick={openCommandMenu}
          >
            <SearchIcon className="size-3.5" />
            <span className="hidden sm:inline">Search components...</span>
            <kbd className="pointer-events-none ml-auto hidden items-center gap-0.5 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground select-none sm:flex">
              ⌘K
            </kbd>
          </Button>
          <Separator orientation="vertical" className="hidden h-4 sm:block" />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
