"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { GAME } from "@/lib/game";
import { trackPlayClick } from "@/lib/analytics";

type Props = Omit<ComponentPropsWithoutRef<"a">, "href" | "target" | "rel"> & {
  placement: string;
  children: ReactNode;
};

export function PlayLink({ placement, children, onClick, ...rest }: Props) {
  return (
    <a
      href={GAME.robloxUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        trackPlayClick(placement);
        onClick?.(e);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
