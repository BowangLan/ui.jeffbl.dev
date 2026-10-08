import { FileTextIcon, Trash2Icon } from "lucide-react"

import {
  Attachment,
  AttachmentActions,
  AttachmentAction,
  AttachmentContent,
  AttachmentDescription,
  AttachmentTitle,
} from "@/registry/new-york/ui/attachment"

export default function AttachmentDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Attachment>
        <AttachmentContent>
          <AttachmentTitle>quarterly-report.pdf</AttachmentTitle>
          <AttachmentDescription>2.4 MB</AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="Remove">
            <Trash2Icon />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>
      <Attachment state="uploading">
        <AttachmentContent>
          <AttachmentTitle>design-spec.fig</AttachmentTitle>
          <AttachmentDescription>Uploading… 64%</AttachmentDescription>
        </AttachmentContent>
      </Attachment>
      <Attachment size="sm">
        <AttachmentContent>
          <AttachmentTitle className="flex items-center gap-1.5">
            <FileTextIcon className="size-3.5" />
            notes.txt
          </AttachmentTitle>
        </AttachmentContent>
      </Attachment>
    </div>
  )
}
