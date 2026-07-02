import { Suspense } from "react";
import { DexGallery } from "@/components/DexGallery";

type Props = {
  searchParams: Promise<{ q?: string }>;
};

export default async function DexPage({ searchParams }: Props) {
  const { q } = await searchParams;

  return (
    <Suspense
      fallback={
        <main className="mx-auto max-w-7xl px-4 py-8 sm:py-10">
          <p className="text-zinc-500">Loading dex…</p>
        </main>
      }
    >
      <DexGallery initialQuery={q?.trim() ?? ""} />
    </Suspense>
  );
}
