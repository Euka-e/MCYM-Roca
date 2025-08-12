import { useEffect, useState } from "react";

type YouTubeState = {
  isLive: boolean;
  url: string | null;
  title: string | null;
  loading: boolean;
  error?: string;
  thumbnail: string | null;
};

const DEFAULT_CHANNEL_URL = "https://www.youtube.com/@iglesiamcymroca7312";

export function useYouTubeLatestVideo(channelId?: string, apiKey?: string): YouTubeState {
  const [state, setState] = useState<YouTubeState>({
    isLive: false,
    url: null,
    title: null,
    loading: true,
    thumbnail: null,
  });

  useEffect(() => {
    if (!channelId || !apiKey) {
      setState((s) => ({
        ...s,
        loading: false,
        url: DEFAULT_CHANNEL_URL + "/live",
        error: "Falta configuración de YouTube",
      }));
      return;
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
        const liveData = await liveRes.json();

        if (liveData?.items?.length) {
          const live = liveData.items[0];
          const videoId = live.id?.videoId;
          setState({
            isLive: true,
            url: videoId ? `https://www.youtube.com/watch?v=${videoId}` : DEFAULT_CHANNEL_URL + "/live",
            title: live.snippet?.title ?? "Transmisión en vivo",
            loading: false,
            thumbnail: pickThumb(live.snippet, videoId),
          });
          return;
        }
        const completedRes = await fetch(
          `${API}/search?part=snippet&channelId=${channelId}&eventType=completed&type=video&order=date&maxResults=1&key=${apiKey}`,
        );
        const completedData = await completedRes.json();

        if (completedData?.items?.length) {
          const lastLive = completedData.items[0];
          const videoId = lastLive.id?.videoId;
          setState({
            isLive: false,
            url: videoId ? `https://www.youtube.com/watch?v=${videoId}` : DEFAULT_CHANNEL_URL,
            title: lastLive.snippet?.title ?? "Última transmisión",
            loading: false,
            thumbnail: pickThumb(lastLive.snippet, videoId),
          });
          return;
        }
        const latestRes = await fetch(
          `${API}/search?part=snippet&channelId=${channelId}&type=video&order=date&maxResults=1&key=${apiKey}`,
        );
        const latestData = await latestRes.json();

        if (latestData?.items?.length) {
          const last = latestData.items[0];
          const videoId = last.id?.videoId;
          setState({
            isLive: false,
            url: videoId ? `https://www.youtube.com/watch?v=${videoId}` : DEFAULT_CHANNEL_URL,
            title: last.snippet?.title ?? "Último video",
            loading: false,
            thumbnail: pickThumb(last.snippet, videoId),
          });
          return;
        }

        setState({
          isLive: false,
          url: DEFAULT_CHANNEL_URL,
          title: "MCYM General Roca",
          loading: false,
          thumbnail: null,
        });
      } catch (e) {
        setState({
          isLive: false,
          url: DEFAULT_CHANNEL_URL,
          title: "MCYM General Roca",
          loading: false,
          error: e instanceof Error ? e.message : "Error al cargar datos de YouTube",
          thumbnail: null,
        });
      }
    }

    load();
  }, [channelId, apiKey]);

  return state;
}