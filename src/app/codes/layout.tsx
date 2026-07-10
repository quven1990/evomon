import { GeistMono } from "geist/font/mono";

/** Load mono only on codes routes — keeps Geist Mono off the homepage critical path. */
export default function CodesLayout({ children }: { children: React.ReactNode }) {
  return <div className={GeistMono.variable}>{children}</div>;
}
