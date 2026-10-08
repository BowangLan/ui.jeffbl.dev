"use client"

import { CardContent } from "@/registry/new-york/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/registry/new-york/ui/carousel"

const SLIDES = ["one", "two", "three", "four", "five"]

export default function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {SLIDES.map((slide) => (
          <CarouselItem key={slide}>
            <CardContent className="flex aspect-square items-center justify-center rounded-lg border bg-muted/30 p-6">
              <span className="font-mono text-4xl font-semibold">{slide}</span>
            </CardContent>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
