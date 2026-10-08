"use client"

import { Button } from "@/registry/new-york/ui/button"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/registry/new-york/ui/field"
import { Input } from "@/registry/new-york/ui/input"
import { Textarea } from "@/registry/new-york/ui/textarea"

export default function FieldDemo() {
  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend className="text-base">Project details</FieldLegend>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="project">Project name</FieldLabel>
          <Input id="project" placeholder="My side project" />
          <FieldDescription>Visible to your team only.</FieldDescription>
        </Field>
        <Field data-invalid>
          <FieldLabel htmlFor="brief">Brief</FieldLabel>
          <Textarea id="brief" placeholder="What are you building?" />
          <FieldError>Keep the brief under 500 characters.</FieldError>
        </Field>
        <Field orientation="horizontal">
          <Button size="sm">Create project</Button>
          <Button size="sm" variant="ghost">
            Cancel
          </Button>
        </Field>
      </FieldGroup>
    </FieldSet>
  )
}
