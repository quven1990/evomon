import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DexSourceBadge } from "@/components/Badges";
import { DexPetDetailSections } from "@/components/DexPetDetailSections";
import { pageTitleClass } from "@/components/PageShell";
import { PetAvatar } from "@/components/PetAvatar";
import { StructuredData } from "@/components/StructuredData";
import { dexEntries } from "@/data/dex";
import { elementStyles } from "@/data/type-chart";
import { buildPetFaqs, getEvolutionLine, getPetLeadCopy } from "@/lib/dex-pet";
import { dexPetMetadata } from "@/lib/seo";
import { canonical } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return dexEntries
    .filter((e) => e.name)
    .map((e) => ({ slug: e.name!.toLowerCase() }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = dexEntries.find((e) => e.name?.toLowerCase() === slug);
  if (!entry?.name) return { title: "Evomon Not Found" };
  return dexPetMetadata({
    name: entry.name,
    number: entry.number,
    element: entry.element,
    tier: entry.tier,
  });
}

export default async function DexDetailPage({ params }: Props) {
  const { slug } = await params;
  const entry = dexEntries.find((e) => e.name?.toLowerCase() === slug);
  if (!entry?.name) notFound();

  const pet = { ...entry, name: entry.name };

  const styles = elementStyles[pet.element];
  const line = getEvolutionLine(pet);
  const lead = getPetLeadCopy(pet);
  const pageUrl = canonical(`/dex/${slug}`);
  const faqs = buildPetFaqs(pet);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Evomon Wiki", item: canonical("/") },
      { "@type": "ListItem", position: 2, name: "Dex", item: canonical("/dex") },
      { "@type": "ListItem", position: 3, name: pet.name, item: pageUrl },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <StructuredData data={[breadcrumbSchema, faqSchema]} />
      <main className="mx-auto max-w-5xl px-4 py-8 sm:py-10">
        <nav aria-label="Breadcrumb" className="hidden text-sm text-zinc-500 sm:block">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-emerald-300">
                Evomon Wiki
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/dex" className="hover:text-emerald-300">
                Dex
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-zinc-300">{pet.name}</li>
          </ol>
        </nav>

        <div className="mt-6 flex flex-col items-center gap-5 text-center sm:flex-row sm:items-start sm:text-left">
          <PetAvatar entry={pet} size="2xl" priority />
          <div className="min-w-0">
            <p className="text-sm font-bold uppercase tracking-widest text-zinc-500">
              #{String(pet.number).padStart(3, "0")}
              {line.length > 1 ? ` · ${pet.element} line` : ` · ${pet.element}`}
            </p>
            <h1 className={pageTitleClass()}>{pet.name}</h1>
            <p className="mt-2 text-sm text-zinc-400">{lead.roleLine}</p>
            <div className="mt-3 flex flex-wrap justify-center gap-2 sm:justify-start">
              <span className={`rounded-full px-3 py-1 text-sm ${styles.bg} ${styles.text}`}>
                {pet.element}
              </span>
              {line.length > 1 && (
                <span className="rounded-full bg-white/10 px-3 py-1 text-sm text-zinc-200">
                  {line.length}-stage line
                </span>
              )}
              {pet.tier && (
                <span className="rounded-full bg-amber-500/15 px-3 py-1 text-sm font-bold text-amber-300">
                  {pet.tier} Tier
                </span>
              )}
              <DexSourceBadge source={pet.source} />
            </div>
          </div>
        </div>

        <DexPetDetailSections entry={pet} slug={slug} />
      </main>
    </>
  );
}
