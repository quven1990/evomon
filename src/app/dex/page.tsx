import { Suspense } from "react";
import { DexGallery } from "@/components/DexGallery";

export default function DexPage() {
  return (
    <Suspense
      fallback={
        <main className="mx-auto max-w-7xl px-4 py-8 sm:py-10">
          <p className="text-zinc-500">Loading dex…</p>
        </main>
      }
    >
      <DexGallery />
    </Suspense>
  );
}
