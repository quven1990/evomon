import Link from "next/link";
import { dexEntries } from "@/data/dex";

const featuredSlugs = ["bubble", "blazpup", "leafbun", "pebble", "lavite", "astraknight"];

type Props = {
  /** Desktop hero keeps eager; mobile uses lazy to avoid competing with LCP. */
  imageLoading?: "eager" | "lazy";
};

export function FeaturedPets({ imageLoading = "eager" }: Props) {
  const pets = featuredSlugs
    .map((slug) => dexEntries.find((e) => e.name?.toLowerCase() === slug))
    .filter(Boolean);

  return (
    <div className="flex flex-wrap items-end justify-center gap-2 sm:gap-4">
      {pets.map((pet) => (
        <Link
          key={pet!.number}
          href={`/dex/${pet!.name!.toLowerCase()}`}
          className="group flex flex-col items-center"
        >
          <div className="relative transition group-hover:-translate-y-2 group-hover:scale-105">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/pets/${pet!.name!.toLowerCase()}.png`}
              alt=""
              width={120}
              height={120}
              loading={imageLoading}
              decoding="async"
              className="h-24 w-24 object-contain drop-shadow-[0_8px_24px_rgba(16,185,129,0.35)] sm:h-32 sm:w-32"
            />
          </div>
          <span className="mt-2 text-xs font-medium text-zinc-500 group-hover:text-emerald-300">
            {pet!.name}
          </span>
        </Link>
      ))}
    </div>
  );
}
