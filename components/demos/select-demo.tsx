"use client"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/registry/new-york/ui/select"

export default function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-56">
        <SelectValue placeholder="Select a role" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Team</SelectLabel>
          <SelectItem value="owner">Owner</SelectItem>
          <SelectItem value="maintainer">Maintainer</SelectItem>
          <SelectItem value="contributor">Contributor</SelectItem>
          <SelectItem value="viewer" disabled>
            Viewer
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
