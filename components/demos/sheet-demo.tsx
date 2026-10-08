"use client"

import { CalendarIcon, HomeIcon, InboxIcon, SearchIcon, SettingsIcon } from "lucide-react"

import { Button } from "@/registry/new-york/ui/button"
import { Separator } from "@/registry/new-york/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/new-york/ui/sheet"

const NAV = [
  { icon: HomeIcon, label: "Home" },
  { icon: InboxIcon, label: "Inbox" },
  { icon: CalendarIcon, label: "Calendar" },
  { icon: SearchIcon, label: "Search" },
  { icon: SettingsIcon, label: "Settings" },
]

export default function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open sheet</Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64">
        <SheetHeader className="p-0 pb-2">
          <SheetTitle className="text-left">Acme Inc</SheetTitle>
          <SheetDescription className="text-left">
            Navigation inside a sheet.
          </SheetDescription>
        </SheetHeader>
        <Separator className="mb-2" />
        <nav className="flex flex-col gap-1">
          {NAV.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              size="sm"
              className="justify-start font-normal text-muted-foreground"
            >
              <item.icon className="size-4" />
              {item.label}
            </Button>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
