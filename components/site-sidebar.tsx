"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york/ui/button"
import type { NavGroup } from "@/lib/components"

export function SiteSidebar({ groups }: { groups: NavGroup[] }) {
  const pathname = usePathname()

  return (
    <aside className="sticky top-14 hidden h-[calc(100dvh-3.5rem)] w-56 shrink-0 overflow-y-auto border-r py-6 pr-4 pl-2 md:block lg:w-64">
      <nav className="flex flex-col gap-5">
        {groups.map((group) => (
          <div key={group.title} className="flex flex-col gap-1">
            <p className="mb-1 px-2 text-[13px] font-medium text-foreground">
              {group.title}
            </p>
            {group.links.map((link) => {
              const active = pathname === link.href
              return (
                <Button
                  key={link.href}
                  variant="ghost"
                  size="sm"
                  asChild
                  className={cn(
                    "justify-start font-normal text-muted-foreground",
                    active && "bg-muted font-medium text-foreground"
                  )}
                >
                  <Link href={link.href}>{link.title}</Link>
                </Button>
              )
            })}
          </div>
        ))}
      </nav>
    </aside>
  )
}
