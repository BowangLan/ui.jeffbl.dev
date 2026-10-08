"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MenuIcon } from "lucide-react"

import { Button } from "@/registry/new-york/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/new-york/ui/sheet"
import type { NavGroup } from "@/lib/components"

export function MobileNav({ groups }: { groups: NavGroup[] }) {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open navigation">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72 overflow-y-auto px-3">
        <SheetHeader className="p-0 pb-2">
          <SheetTitle className="text-left text-[15px]">Navigation</SheetTitle>
          <SheetDescription className="sr-only">Browse components</SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col gap-5 pb-6">
          <Button variant="ghost" size="sm" asChild className="justify-start font-normal text-muted-foreground">
            <Link href="/">Introduction</Link>
          </Button>
          {groups.map((group) => (
            <div key={group.title} className="flex flex-col gap-1">
              <p className="mb-1 px-2 text-[13px] font-medium">{group.title}</p>
              {group.links.map((link) => (
                <Button
                  key={link.href}
                  variant="ghost"
                  size="sm"
                  asChild
                  className="justify-start font-normal text-muted-foreground"
                >
                  <Link href={link.href}>{link.title}</Link>
                </Button>
              ))}
            </div>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
