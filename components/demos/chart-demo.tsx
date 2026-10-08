"use client"

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/new-york/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/registry/new-york/ui/chart"

const chartData = [
  { month: "January", visitors: 720 },
  { month: "February", visitors: 940 },
  { month: "March", visitors: 810 },
  { month: "April", visitors: 1160 },
  { month: "May", visitors: 990 },
  { month: "June", visitors: 1340 },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
    color: "var(--primary)",
  },
} satisfies ChartConfig

export default function ChartDemo() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Site visitors</CardTitle>
        <CardDescription>January — June 2026</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[200px] w-full">
          <AreaChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Area
              dataKey="visitors"
              type="natural"
              fill="var(--color-visitors)"
              fillOpacity={0.2}
              stroke="var(--color-visitors)"
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
