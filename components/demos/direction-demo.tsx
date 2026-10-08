"use client"

import { Button } from "@/registry/new-york/ui/button"
import { DirectionProvider } from "@/registry/new-york/ui/direction"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/registry/new-york/ui/dropdown-menu"

export default function DirectionDemo() {
  return (
    <DirectionProvider dir="rtl">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">افتح القائمة (RTL)</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuLabel>القائمة</DropdownMenuLabel>
          <DropdownMenuItem>الملف الشخصي</DropdownMenuItem>
          <DropdownMenuItem>الإعدادات</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </DirectionProvider>
  )
}
