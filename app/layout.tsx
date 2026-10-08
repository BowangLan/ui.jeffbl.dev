import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { getNavGroups, SITE_URL } from "@/lib/components";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "jeffbl — UI components",
    template: "%s — jeffbl",
  },
  description:
    "An open shadcn registry serving copy-paste components built with Tailwind CSS v4.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const groups = getNavGroups();

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <SiteHeader groups={groups} />
          {children}
          <footer className="border-t">
            <div className="mx-auto flex w-full max-w-[1400px] flex-col items-start justify-between gap-2 px-4 py-6 text-sm text-muted-foreground sm:flex-row md:px-6">
              <p>jeffbl — a personal shadcn component registry.</p>
              <p>
                Built with{" "}
                <a
                  href="https://ui.shadcn.com/docs/registry"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4 hover:text-foreground"
                >
                  shadcn
                </a>
                .
              </p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
