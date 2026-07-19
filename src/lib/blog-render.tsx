import Link from "next/link";
import type { ReactNode } from "react";

const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/;
const boldPattern = /\*\*([^*]+)\*\*/;

type InlineMatch = {
  index: number;
  length: number;
  node: ReactNode;
};

function nextInlineMatch(text: string, keyBase: number): InlineMatch | null {
  const link = linkPattern.exec(text);
  const bold = boldPattern.exec(text);

  const candidates: { index: number; length: number; kind: "link" | "bold"; match: RegExpExecArray }[] =
    [];
  if (link) {
    candidates.push({ index: link.index, length: link[0].length, kind: "link", match: link });
  }
  if (bold) {
    candidates.push({ index: bold.index, length: bold[0].length, kind: "bold", match: bold });
  }
  if (candidates.length === 0) return null;

  candidates.sort((a, b) => a.index - b.index || a.length - b.length);
  const best = candidates[0];

  if (best.kind === "link") {
    const label = best.match[1];
    const href = best.match[2];
    const external = href.startsWith("http");
    return {
      index: best.index,
      length: best.length,
      node: external ? (
        <a
          key={keyBase}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-300 hover:underline"
        >
          {label}
        </a>
      ) : (
        <Link key={keyBase} href={href} className="text-emerald-300 hover:underline">
          {label}
        </Link>
      ),
    };
  }

  return {
    index: best.index,
    length: best.length,
    node: (
      <strong key={keyBase} className="font-semibold text-white">
        {best.match[1]}
      </strong>
    ),
  };
}

/** Render paragraph text with **bold** and [label](/path) links. */
export function renderBlogParagraph(text: string): ReactNode {
  const parts: ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    const hit = nextInlineMatch(remaining, key++);
    if (!hit) {
      parts.push(remaining);
      break;
    }

    if (hit.index > 0) {
      parts.push(remaining.slice(0, hit.index));
    }
    parts.push(hit.node);
    remaining = remaining.slice(hit.index + hit.length);
  }

  return parts.length > 0 ? parts : text;
}

/** Strip inline markdown for plain-text FAQ / schema. */
export function stripBlogMarkdown(text: string): string {
  return text.replace(linkPattern, "$1").replace(boldPattern, "$1");
}
