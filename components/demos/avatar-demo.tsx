import { Avatar, AvatarFallback, AvatarImage } from "@/registry/new-york/ui/avatar"

export default function AvatarDemo() {
  return (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>JB</AvatarFallback>
      </Avatar>
      <div className="flex -space-x-2">
        <Avatar className="ring-2 ring-background">
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        <Avatar className="ring-2 ring-background">
          <AvatarFallback>B</AvatarFallback>
        </Avatar>
        <Avatar className="ring-2 ring-background">
          <AvatarFallback>C</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}
