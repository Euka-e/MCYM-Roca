import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-warm-50 via-white to-church-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(251,232,187,0.1)_25%,rgba(251,232,187,0.1)_50%,transparent_50%,transparent_75%,rgba(251,232,187,0.1)_75%)] bg-[length:40px_40px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Welcome to{" "}
                <span className="text-primary bg-gradient-to-r from-primary to-church-600 bg-clip-text text-transparent">
                  Grace Community
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                A place where faith grows, community thrives, and everyone
                belongs. Join us as we discover God's love together and serve
                our community with compassion.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground group"
              >
                Plan Your Visit
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="group">
                <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Watch Online
              </Button>
            </div>

            {/* Service Times */}
            <div className="bg-white/60 backdrop-blur-sm border border-warm-200 rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-4">
                Join Us This Sunday
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Sunday Service
                  </p>
                  <p className="font-medium text-foreground">10:00 AM</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Bible Study</p>
                  <p className="font-medium text-foreground">
                    Wednesday 7:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-church-100 to-warm-200 flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="w-20 h-20 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Play className="h-8 w-8 text-primary ml-1" />
                  </div>
                  <p className="text-primary font-medium">
                    Watch Our Latest Service
                  </p>
                </div>
              </div>
            </div>

            {/* Floating cards */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 border border-warm-200">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">Live Now</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 border border-warm-200">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">500+</p>
                <p className="text-xs text-muted-foreground">
                  Community Members
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
