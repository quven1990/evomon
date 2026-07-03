"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { trackContactClick } from "@/lib/analytics";

type Props = Omit<ComponentPropsWithoutRef<"a">, "href"> & {
  channel: "contact" | "privacy";
  href: string;
  children: ReactNode;
};

export function ContactMailLink({ channel, href, children, onClick, ...rest }: Props) {
  return (
    <a
      href={href}
      onClick={(e) => {
        trackContactClick(channel);
        onClick?.(e);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
