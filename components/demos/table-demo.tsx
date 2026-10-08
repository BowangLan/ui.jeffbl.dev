import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/new-york/ui/table"

const ITEMS = [
  { name: "button", deps: 2, size: "2.1 kB" },
  { name: "dialog", deps: 2, size: "5.8 kB" },
  { name: "chart", deps: 2, size: "24.3 kB" },
]

export default function TableDemo() {
  return (
    <Table className="max-w-sm">
      <TableCaption>Registry item sizes from the latest build.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Component</TableHead>
          <TableHead className="text-right">Dependencies</TableHead>
          <TableHead className="text-right">Gzip size</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {ITEMS.map((item) => (
          <TableRow key={item.name}>
            <TableCell className="font-mono font-medium">{item.name}</TableCell>
            <TableCell className="text-right">{item.deps}</TableCell>
            <TableCell className="text-right">{item.size}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>Total</TableCell>
          <TableCell className="text-right">32.2 kB</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
