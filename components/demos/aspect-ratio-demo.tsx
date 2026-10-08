import Image from "next/image"

import { AspectRatio } from "@/registry/new-york/ui/aspect-ratio"

export default function AspectRatioDemo() {
  return (
    <div className="w-80 max-w-full overflow-hidden rounded-lg border">
      <AspectRatio ratio={16 / 9}>
        <Image
          src="https://picsum.photos/seed/aspect-ratio-demo/640/360"
          alt="Demo photo"
          fill
          sizes="320px"
          className="object-cover"
        />
      </AspectRatio>
    </div>
  )
}
