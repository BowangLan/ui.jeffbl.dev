import { SiteSidebar } from "@/components/site-sidebar";
import { getNavGroups } from "@/lib/components";

export default function DocsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const groups = getNavGroups();

  return (
    <div className="mx-auto flex w-full max-w-[1400px]">
      <SiteSidebar groups={groups} />
      <main className="min-w-0 flex-1 px-4 py-8 md:px-10">{children}</main>
    </div>
  );
}
