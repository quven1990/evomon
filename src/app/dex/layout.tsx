import type { Metadata } from "next";
import { PAGE_SEO } from "@/lib/seo";

export const metadata: Metadata = PAGE_SEO.dex();

export default function DexLayout({ children }: { children: React.ReactNode }) {
  return children;
}
