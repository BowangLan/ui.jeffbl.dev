"use client"

import { MonitorIcon, SmartphoneIcon } from "lucide-react"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/new-york/ui/tabs"
import { Button } from "@/registry/new-york/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/registry/new-york/ui/card"

export default function TabsDemo() {
  return (
    <Tabs defaultValue="desktop" className="w-full max-w-sm">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="desktop">
          <MonitorIcon className="size-4" />
          Desktop
        </TabsTrigger>
        <TabsTrigger value="mobile">
          <SmartphoneIcon className="size-4" />
          Mobile
        </TabsTrigger>
      </TabsList>
      <TabsContent value="desktop">
        <Card>
          <CardHeader>
            <CardTitle>Desktop</CardTitle>
            <CardDescription>
              Optimized for pointer and keyboard input.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button size="sm" variant="outline">
              Download for macOS
            </Button>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="mobile">
        <Card>
          <CardHeader>
            <CardTitle>Mobile</CardTitle>
            <CardDescription>
              Touch-first layout with bottom navigation.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button size="sm" variant="outline">
              Get on the App Store
            </Button>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
