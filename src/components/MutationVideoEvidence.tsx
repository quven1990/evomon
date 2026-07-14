type VideoEvidence = {
  label: string;
  title: string;
  url: string;
  embedUrl: string;
  thumbnailUrl: string;
  note: string;
};

export function MutationVideoEvidence({ videos }: { videos: VideoEvidence[] }) {
  return (
    <div className="mt-3 grid gap-4 sm:grid-cols-2">
      {videos.map((source) => (
        <article
          key={source.url}
          className="overflow-hidden rounded-xl border border-violet-300/20 bg-black/20"
        >
          <div className="aspect-video bg-black">
            <iframe
              src={source.embedUrl}
              title={source.title}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
          <div className="p-4">
            <p className="text-sm font-medium text-violet-100">{source.label}</p>
            <p className="mt-2 text-sm leading-6 text-zinc-400">{source.note}</p>
            <a
              href={source.url}
              target="_blank"
              rel="nofollow ugc noreferrer"
              className="mt-3 inline-flex text-sm font-medium text-violet-100 hover:underline"
            >
              Watch on YouTube -&gt;
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
