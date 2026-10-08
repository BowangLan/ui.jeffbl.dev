import type { Metadata } from "next";

import { ComponentCard } from "@/components/component-card";
import { getComponentsByCategory } from "@/lib/components";

export const metadata: Metadata = {
  title: "Components",
  description:
    "Browse all components available in the jeffbl registry, grouped by category.",
};

export default function ComponentsPage() {
  const groups = getComponentsByCategory();
  const total = groups.reduce((acc, g) => acc + g.components.length, 0);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold tracking-tight">Components</h1>
        <p className="max-w-[65ch] text-sm text-muted-foreground">
          {total} accessible, themeable components built with React and Tailwind
          CSS. Copy the source, install with the CLI, and make them your own.
        </p>
      </div>
      {groups.map((group) => (
        <section key={group.category} className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold tracking-tight">
            {group.category}
            <span className="ml-2 text-sm font-normal text-muted-foreground">
              {group.components.length}
            </span>
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {group.components.map((component) => (
              <ComponentCard key={component.name} component={component} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
