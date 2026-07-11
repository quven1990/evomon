import Link from "next/link";
import type { ReactNode } from "react";

const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;

/** Render paragraph text with [label](/path) markdown links. External http links open in new tab. */
export function renderBlogParagraph(text: string) {
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = linkPattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    const label = match[1];
    const href = match[2];
    const external = href.startsWith("http");

    parts.push(
      external ? (
        <a
          key={key++}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-300 hover:underline"
        >
          {label}
        </a>
      ) : (
        <Link key={key++} href={href} className="text-emerald-300 hover:underline">
          {label}
        </Link>
      ),
    );

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}

/** Strip markdown link syntax for plain-text FAQ schema. */
export function stripBlogMarkdown(text: string): string {
  return text.replace(linkPattern, "$1");
}
