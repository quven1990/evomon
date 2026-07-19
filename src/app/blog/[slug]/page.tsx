import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";
import { StructuredData } from "@/components/StructuredData";
import { PageBack, pageLeadClass, pageTitleClass } from "@/components/PageShell";
import { blogPosts, getBlogPost } from "@/data/blog-posts";
import { renderBlogParagraph, stripBlogMarkdown } from "@/lib/blog-render";
import { guideArticleSchema } from "@/lib/guide-trust";
import { blogPostMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Post Not Found" };
  return blogPostMetadata(post);
}

const calloutStyles = {
  tip: "border-emerald-500/30 bg-emerald-500/10 text-emerald-100",
  warn: "border-amber-500/30 bg-amber-500/10 text-amber-100",
  note: "border-white/15 bg-white/[0.04] text-zinc-200",
} as const;

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const article = guideArticleSchema({
    path: `/blog/${post.slug}`,
    headline: post.title,
    description: post.description,
    dateModified: post.published,
  });

  return (
    <>
      <StructuredData
        data={[
          article,
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: post.faqs.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: stripBlogMarkdown(item.a) },
            })),
          },
        ]}
      />

      <main className="mx-auto max-w-4xl px-4 py-8 pb-24 sm:py-10 lg:pb-10">
        <PageBack href="/blog" label="Blog" />
        <time
          dateTime={post.published}
          className="mt-4 block text-xs font-medium uppercase tracking-wide text-zinc-500"
        >
          {new Date(post.published).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </time>
        <h1 className={pageTitleClass()}>{post.title}</h1>
        <p className={pageLeadClass()}>{post.description}</p>

        <div className="mt-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5 sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
            Quick answer
          </p>
          <p className="mt-2 text-sm leading-7 text-zinc-200 sm:text-base">
            {renderBlogParagraph(post.quickAnswer)}
          </p>
        </div>

        {post.relatedGuides.length > 0 && (
          <nav
            aria-label="Related guides"
            className="mt-6 rounded-xl border border-white/10 bg-[#0b1512] p-4 sm:p-5"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Full guides
            </p>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {post.relatedGuides.map((href) => (
                <li key={href}>
                  <Link href={href} className="text-emerald-300 hover:underline">
                    {href.replace("/guides/", "").replace(/\//g, " › ")}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {post.sections.map((section) => (
          <section key={section.heading ?? section.paragraphs?.[0]?.slice(0, 24)} className="mt-10">
            {section.heading && (
              <h2 className="text-xl font-bold text-white sm:text-2xl">{section.heading}</h2>
            )}
            {section.paragraphs?.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="mt-3 text-sm leading-7 text-zinc-300 sm:text-base"
              >
                {renderBlogParagraph(paragraph)}
              </p>
            ))}
            {section.bullets && (
              <ul className="mt-4 space-y-2">
                {section.bullets.map((bullet) => (
                  <li
                    key={bullet.slice(0, 48)}
                    className="flex gap-3 rounded-xl border border-white/10 bg-[#0b1512] px-4 py-3 text-sm leading-6 text-zinc-300"
                  >
                    <span className="text-emerald-400" aria-hidden>
                      •
                    </span>
                    <span>{renderBlogParagraph(bullet)}</span>
                  </li>
                ))}
              </ul>
            )}
            {section.callout && (
              <div
                className={`mt-4 rounded-xl border p-4 sm:p-5 ${calloutStyles[section.callout.variant]}`}
              >
                <p className="font-semibold">{section.callout.title}</p>
                <p className="mt-2 text-sm leading-7 text-zinc-300">
                  {renderBlogParagraph(section.callout.body)}
                </p>
              </div>
            )}
          </section>
        ))}

        <section className="mt-12">
          <h2 className="text-xl font-bold text-white sm:text-2xl">FAQ</h2>
          <dl className="mt-4 space-y-4">
            {post.faqs.map((item) => (
              <div key={item.q} className="rounded-xl border border-white/10 bg-[#0b1512] p-4">
                <dt className="font-semibold text-white">{item.q}</dt>
                <dd className="mt-2 text-sm leading-6 text-zinc-400">
                  {renderBlogParagraph(item.a)}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-12 rounded-2xl border border-white/10 bg-[#0b1512] p-5 sm:p-6">
          <h2 className="text-lg font-bold text-white">Sources</h2>
          <p className="mt-2 text-sm leading-7 text-zinc-400">
            Community video guides cross-checked with Evomon Wiki mutations data (July 2026). Not
            official Roblox/Evomon developer documentation.
          </p>
          <ul className="mt-4 space-y-3">
            {post.sources.map((source) => (
              <li key={source.url}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-emerald-300 hover:underline"
                >
                  {source.label}
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                </a>
                {source.channel && (
                  <span className="ml-2 text-xs text-zinc-500">({source.channel})</span>
                )}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs leading-6 text-zinc-500">
            See also:{" "}
            <Link href="/about" className="text-emerald-300/80 hover:underline">
              About & Trust
            </Link>
          </p>
        </section>
      </main>
    </>
  );
}
