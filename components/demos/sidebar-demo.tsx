"use client"

import { CalendarIcon, ChevronRightIcon, HomeIcon, LibraryIcon, SearchIcon, SettingsIcon } from "lucide-react"

import { Button } from "@/registry/new-york/ui/button"
import { Input } from "@/registry/new-york/ui/input"
import { Separator } from "@/registry/new-york/ui/separator"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/registry/new-york/ui/sidebar"

const NAV = [
  { icon: HomeIcon, label: "Home", isActive: true },
  { icon: LibraryIcon, label: "Registry" },
  { icon: CalendarIcon, label: "Releases" },
  { icon: SearchIcon, label: "Search" },
]

export default function SidebarDemo() {
  return (
    <SidebarProvider className="min-h-[350px] w-full max-w-2xl rounded-xl border">
      <Sidebar collapsible="icon" className="rounded-xl">
        <SidebarHeader>
          <div className="flex items-center gap-2 px-2 py-1.5">
            <span className="flex size-6 items-center justify-center rounded-md bg-foreground font-bold text-[13px] text-background">
              J
            </span>
            <span className="text-sm font-semibold group-data-[collapsible=icon]:hidden">
              jeffbl
            </span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Platform</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {NAV.map((item) => (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton isActive={item.isActive}>
                      <item.icon />
                      <span>{item.label}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <Button variant="ghost" size="sm" className="justify-start">
            <SettingsIcon />
            <span className="group-data-[collapsible=icon]:hidden">Settings</span>
          </Button>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset className="min-h-[350px] rounded-r-xl bg-background">
        <header className="flex h-12 items-center gap-2 border-b px-3">
          <SidebarTrigger />
          <Separator orientation="vertical" className="h-4" />
          <span className="text-sm text-muted-foreground">Dashboard</span>
          <div className="ml-auto flex items-center gap-1 text-muted-foreground">
            <ChevronRightIcon className="size-3.5" />
            <span className="text-sm">Overview</span>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <Input placeholder="Search..." className="max-w-xs" />
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["Components", 61],
              ["Hooks", 1],
              ["Blocks", 4],
              ["Pages", 1],
            ].map(([label, count]) => (
              <div key={label} className="rounded-lg border p-4">
                <p className="text-sm font-medium">{label}</p>
                <p className="text-sm text-muted-foreground">{count} items</p>
              </div>
            ))}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
