"use client"

import { BellIcon, PlusIcon } from "lucide-react"

import { Button } from "@/registry/new-york/ui/button"
import { Input } from "@/registry/new-york/ui/input"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/registry/new-york/ui/item"
import { Switch } from "@/registry/new-york/ui/switch"

export default function ItemDemo() {
  return (
    <ItemGroup className="w-full max-w-sm">
      <Item>
        <ItemMedia variant="icon">
          <BellIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Notifications</ItemTitle>
          <ItemDescription>Get updates about new components.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Switch defaultChecked aria-label="Toggle notifications" />
        </ItemActions>
      </Item>
      <ItemSeparator />
      <Item>
        <ItemContent>
          <ItemTitle>Invite teammates</ItemTitle>
          <ItemDescription>Add someone by email.</ItemDescription>
          <ItemActions className="mt-2 flex-row gap-2">
            <Input placeholder="you@example.com" className="h-8 flex-1" />
            <Button size="sm" variant="outline" aria-label="Add member">
              <PlusIcon />
            </Button>
          </ItemActions>
        </ItemContent>
      </Item>
    </ItemGroup>
  )
}
