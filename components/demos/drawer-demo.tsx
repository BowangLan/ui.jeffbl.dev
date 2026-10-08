"use client"

import { MinusIcon, PlusIcon } from "lucide-react"

import { Button } from "@/registry/new-york/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/registry/new-york/ui/drawer"

export default function DrawerDemo() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Adjust budget</DrawerTitle>
            <DrawerDescription>
              Set your monthly spending limit.
            </DrawerDescription>
          </DrawerHeader>
          <div className="flex items-center justify-center gap-4 p-4">
            <Button variant="outline" size="icon" aria-label="Decrease">
              <MinusIcon />
            </Button>
            <span className="font-mono text-2xl font-semibold">$250</span>
            <Button variant="outline" size="icon" aria-label="Increase">
              <PlusIcon />
            </Button>
          </div>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
