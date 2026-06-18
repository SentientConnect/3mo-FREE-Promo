import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Sentient Connect™ | Human Operating Framework",
  description:
    "Sentient Connect connects AURA Genesis, SentientOS, DISC, business consulting, behavioral health workflows, home services automation, and MBS Triangulation.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-obsidian text-bone antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
