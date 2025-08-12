import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useYouTubeLatestVideo } from "@/hooks/use-youtube";

const Hero = () => {
  const { isLive, url, loading, thumbnail, title } = useYouTubeLatestVideo(
    import.meta.env.VITE_YT_CHANNEL_ID,
    import.meta.env.VITE_YT_API_KEY,
  );

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-warm-50 via-white to-church-50">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(251,232,187,0.1)_25%,rgba(251,232,187,0.1)_50%,transparent_50%,transparent_75%,rgba(251,232,187,0.1)_75%)] bg-[length:40px_40px]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Bienvenido a{" "}
                <span className="bg-gradient-to-r from-primary to-church-600 bg-clip-text text-transparent">
                  MCYM General Roca
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Una iglesia familiar donde crece la fe, nos acompañamos como familia y todos son bienvenidos. Descubramos juntos el amor de Dios y sirvamos a nuestra ciudad con compasión.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="outline" className="group" asChild>
                <a
                  href={url ?? "https://www.youtube.com/@iglesiamcymroca7312/live"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  {isLive ? "Ver en vivo" : "Ver última reunión"}
                </a>
              </Button>
            </div>

            <div className="bg-white/60 backdrop-blur-sm border border-warm-200 rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-4">
                Acompañanos este domingo
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Reunión general</p>
                  <p className="font-medium text-foreground">10:00 hs</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <a
                href={url ?? "https://www.youtube.com/@iglesiamcymroca7312/live"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="aspect-video relative bg-gradient-to-br from-church-100 to-warm-200">
                  {thumbnail ? (
                    <>
                      <img
                        src={thumbnail}
                        alt={title ?? "Última reunión"}
                        className="absolute inset-0 h-full w-full object-cover"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/10" />
                    </>
                  ) : (
                    <div className="h-full w-full flex items-center justify-center">
                      <div className="text-center space-y-4 p-8">
                        <div className="w-20 h-20 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <Play className="h-8 w-8 text-primary ml-1" />
                        </div>
                        <p className="text-primary font-medium">
                          {isLive ? "Ver en vivo" : "Ver última reunión"}
                        </p>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-20 h-20 mx-auto bg-white/80 rounded-full flex items-center justify-center shadow">
                      <Play className="h-8 w-8 text-primary ml-1" />
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 border border-warm-200">
              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${isLive ? "bg-green-500" : "bg-gray-400"}`} />
                <span className="text-sm font-medium">
                  {loading ? "Cargando..." : isLive ? "En vivo" : "Fuera de linea"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
