import type { Metadata } from "next";
import Link from "next/link";
import { Newspaper } from "lucide-react";
import { PageBack, pageLeadClass, pageTitleClass } from "@/components/PageShell";
import { getAllBlogPosts } from "@/data/blog-posts";
import { PAGE_SEO } from "@/lib/seo";

export const metadata: Metadata = PAGE_SEO.blogIndex();

const posts = getAllBlogPosts();

export default function BlogIndexPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 pb-24 sm:py-10 lg:pb-10">
      <PageBack href="/" label="Evomon Wiki" />
      <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-300">
        <Newspaper className="h-3.5 w-3.5" />
        Blog
      </div>
      <h1 className={`${pageTitleClass()} mt-4`}>Evomon Blog</h1>
      <p className={pageLeadClass()}>
        Short answer posts for high-intent Google queries — community-sourced, cross-checked against
        our guides. Full references live on the{" "}
        <Link href="/guides/mutations" className="text-emerald-300 hover:underline">
          mutations
        </Link>{" "}
        and{" "}
        <Link href="/guides/beginner" className="text-emerald-300 hover:underline">
          beginner
        </Link>{" "}
        hubs.
      </p>

      <ol className="mt-10 space-y-5">
        {posts.map((post) => (
          <li
            key={post.slug}
            className="rounded-2xl border border-white/10 bg-[#0b1512] p-5 sm:p-6"
          >
            <time
              dateTime={post.published}
              className="text-xs font-medium uppercase tracking-wide text-zinc-500"
            >
              {new Date(post.published).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            <h2 className="mt-2 text-lg font-bold text-white sm:text-xl">
              <Link href={`/blog/${post.slug}`} className="hover:text-emerald-300">
                {post.title}
              </Link>
            </h2>
            <p className="mt-2 text-sm leading-7 text-zinc-400">{post.description}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-4 inline-flex text-sm font-medium text-emerald-300 hover:underline"
            >
              Read post →
            </Link>
          </li>
        ))}
      </ol>
    </main>
  );
}
