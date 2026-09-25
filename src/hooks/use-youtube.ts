import { useEffect, useState } from "react";

type YouTubeState = {
  isLive: boolean;
  url: string | null;
  title: string | null;
  loading: boolean;
  error?: string;
  thumbnail: string | null;
};

const LAST_KNOWN_VIDEO_ID = "-E1NQJnKtzI";
export const FALLBACK_VIDEO_URL = `https://www.youtube.com/watch?v=${LAST_KNOWN_VIDEO_ID}`;

const videoState = (videoId: string, title: string): YouTubeState => ({
  isLive: false,
  url: `https://www.youtube.com/watch?v=${videoId}`,
  title,
  loading: false,
  thumbnail: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
});

async function fetchLatestFromFeed(): Promise<YouTubeState> {
  const response = await fetch("/api/youtube-feed", { cache: "no-store" });
  if (!response.ok) throw new Error("No se pudo cargar la transmisión");

  const document = new DOMParser().parseFromString(
    await response.text(),
    "application/xml",
  );
  const entry = document.getElementsByTagName("entry")[0];
  const videoId = entry
    ?.getElementsByTagNameNS(
      "http://www.youtube.com/xml/schemas/2015",
      "videoId",
    )[0]
    ?.textContent?.trim();
  const title = entry?.getElementsByTagName("title")[0]?.textContent?.trim();
  if (!videoId || !/^[\w-]{11}$/.test(videoId))
    throw new Error("La transmisión no tiene un ID válido");

  return videoState(videoId, title || "Última transmisión");
}

export function useYouTubeLatestVideo(
  channelId?: string,
  apiKey?: string,
): YouTubeState {
  const [state, setState] = useState<YouTubeState>({
    isLive: false,
    url: null,
    title: null,
    loading: true,
    thumbnail: null,
  });

  useEffect(() => {
    let cancelled = false;
    const update = (next: YouTubeState) => {
      if (!cancelled) setState(next);
    };
    const loadFeed = async () => {
      try {
        update(await fetchLatestFromFeed());
      } catch (error) {
        update({
          ...videoState(LAST_KNOWN_VIDEO_ID, "Última transmisión"),
          error:
            error instanceof Error
              ? error.message
              : "Error al cargar datos de YouTube",
        });
      }
    };

    if (!channelId || !apiKey) {
      void loadFeed();
      return () => {
        cancelled = true;
      };
    }

    const API = "https://www.googleapis.com/youtube/v3";

    async function load() {
      try {
        const pickThumb = (snippet?: any, videoId?: string) => {
          const t = snippet?.thumbnails;
          return (
            t?.maxres?.url ||
            t?.standard?.url ||
            t?.high?.url ||
            t?.medium?.url ||
            (videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : null)
          );
        };

        const liveRes = await fetch(
          `${API}/search?part=snippet&channelId=${channelId}&eventType=live&type=video&order=date&maxResults=1&key=${apiKey}`,
        );
        if (!liveRes.ok) throw new Error("No se pudo consultar YouTube");
        const liveData = await liveRes.json();

        if (liveData?.items?.length) {
          const live = liveData.items[0];
          const videoId = live.id?.videoId;
          update({
            isLive: true,
            url: videoId
              ? `https://www.youtube.com/watch?v=${videoId}`
              : FALLBACK_VIDEO_URL,
            title: live.snippet?.title ?? "Transmisión en vivo",
            loading: false,
            thumbnail: pickThumb(live.snippet, videoId),
          });
          return;
        }
        const completedRes = await fetch(
          `${API}/search?part=snippet&channelId=${channelId}&eventType=completed&type=video&order=date&maxResults=1&key=${apiKey}`,
        );
        if (!completedRes.ok) throw new Error("No se pudo consultar YouTube");
        const completedData = await completedRes.json();

        if (completedData?.items?.length) {
          const lastLive = completedData.items[0];
          const videoId = lastLive.id?.videoId;
          update({
            isLive: false,
            url: videoId
              ? `https://www.youtube.com/watch?v=${videoId}`
              : FALLBACK_VIDEO_URL,
            title: lastLive.snippet?.title ?? "Última transmisión",
            loading: false,
            thumbnail: pickThumb(lastLive.snippet, videoId),
          });
          return;
        }
        const latestRes = await fetch(
          `${API}/search?part=snippet&channelId=${channelId}&type=video&order=date&maxResults=1&key=${apiKey}`,
        );
        if (!latestRes.ok) throw new Error("No se pudo consultar YouTube");
        const latestData = await latestRes.json();

        if (latestData?.items?.length) {
          const last = latestData.items[0];
          const videoId = last.id?.videoId;
          update({
            isLive: false,
            url: videoId
              ? `https://www.youtube.com/watch?v=${videoId}`
              : FALLBACK_VIDEO_URL,
            title: last.snippet?.title ?? "Último video",
            loading: false,
            thumbnail: pickThumb(last.snippet, videoId),
          });
          return;
        }

        await loadFeed();
      } catch {
        await loadFeed();
      }
    }

    void load();
    return () => {
      cancelled = true;
    };
  }, [channelId, apiKey]);

  return state;
}
