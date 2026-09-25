import { useState } from "react";
import { Play } from "lucide-react";
import { FALLBACK_VIDEO_URL, useYouTubeLatestVideo } from "@/hooks/use-youtube";

const LatestStream = () => {
  const { isLive, url, loading, thumbnail, title } = useYouTubeLatestVideo(
    import.meta.env.VITE_YT_CHANNEL_ID,
    import.meta.env.VITE_YT_API_KEY,
  );
  const [thumbFailed, setThumbFailed] = useState(false);
  const showThumb = !!thumbnail && !thumbFailed;
  const href = url ?? FALLBACK_VIDEO_URL;

  return (
    <section className="border-b border-line-section px-5 py-9">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h2 className="font-display text-[26px] font-semibold text-ink">
          {isLive ? "Estamos en vivo" : "Última reunión"}
        </h2>
        <span
          className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full border px-3.5 py-[7px] text-sm font-semibold ${isLive && !loading ? "border-[#bfe3c6] bg-[#eaf7ec] text-[#166534]" : "border-line bg-warm-200 text-[hsl(24_26%_34%)]"}`}
        >
          <span
            className={`h-[9px] w-[9px] rounded-full ${isLive && !loading ? "bg-[#16a34a]" : "bg-[hsl(24_12%_62%)]"}`}
            aria-hidden="true"
          />
          {loading ? "Cargando..." : isLive ? "En vivo" : "Fuera de línea"}
        </span>
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block overflow-hidden rounded-xl3 border border-line bg-surface-card"
      >
        <div className="relative aspect-video bg-surface-media">
          {showThumb && (
            <img
              src={thumbnail}
              alt={title ?? "Última reunión"}
              loading="lazy"
              referrerPolicy="no-referrer"
              onError={() => setThumbFailed(true)}
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}
          {!loading && (
            <span
              className="absolute left-1/2 top-1/2 flex h-[74px] w-[74px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand-strong shadow-play motion-safe:transition-transform motion-safe:duration-200 motion-safe:group-hover:scale-105 group-hover:bg-brand-hover"
              aria-hidden="true"
            >
              <Play className="ml-1 h-7 w-7 text-white" fill="currentColor" />
            </span>
          )}
        </div>
        <div className="flex min-h-[60px] items-center justify-between gap-4 border-t border-line-soft px-5 py-4">
          <span className="text-lg font-semibold text-ink">
            {isLive ? "Ver en vivo" : "Ver última reunión"}
          </span>
          <span className="text-lg text-brand" aria-hidden="true">
            →
          </span>
        </div>
      </a>
    </section>
  );
};

export default LatestStream;
