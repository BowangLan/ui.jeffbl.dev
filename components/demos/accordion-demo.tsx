import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/new-york/ui/accordion"

const ITEMS = [
  { value: "item-1", title: "Is it accessible?", content: "Yes. It uses Radix UI primitives with full keyboard and screen reader support." },
  { value: "item-2", title: "Is it unstyled?", content: "No, it ships with sensible defaults you can override with Tailwind classes." },
  { value: "item-3", title: "Can I animate it?", content: "Yes. Height animations work out of the box with tw-animate-css." },
]

export default function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full max-w-sm">
      {ITEMS.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
