type SourceItem = {
  title: string;
  url: string;
  text: string;
  score: number;
};

export function SourceList({ sources }: { sources: SourceItem[] }) {
  return (
    <div className="mt-4 space-y-3 border-t pt-4">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        Sources
      </p>

      <div className="grid gap-3">
        {sources.map((source, index) => (
          <a
            key={`${source.url}-${index}`}
            href={source.url}
            target="_blank"
            rel="noreferrer"
            className="block rounded-xl border bg-muted/20 p-3 hover:bg-muted/40"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="line-clamp-1 text-sm font-semibold">
                {source.title}
              </h3>
              <span className="shrink-0 text-xs text-muted-foreground">
                {source.score.toFixed(3)}
              </span>
            </div>
            <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
              {source.text}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}