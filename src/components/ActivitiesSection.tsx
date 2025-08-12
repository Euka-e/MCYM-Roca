import { Users, Music, Baby, Church } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ActivitiesSection = () => {
  const activities = [
    {
      title: "Reunión General",
      description:
        "Acompañanos en adoración, comunión y un mensaje que edifica cada domingo por la mañana.",
      times: ["Viernes, 19:30 hs", "Domingos, 10:00 hs"],
      icon: Music,
      color: "bg-church-100 text-church-800",
    },
    {
      title: "Reunión de Jóvenes",
      description:
        "Actividades y charlas para que los jóvenes crezcan en la fe y la amistad.",
      times: ["Sábado, 18:00 hs"],
      icon: Users,
      color: "bg-warm-100 text-warm-800",
    },
    {
      title: "Escuelita Biblica",
      description:
        "Actividades divertidas y apropiadas para que los niños conozcan el amor de Dios.",
      times: ["Sábados, 15:00 hs"],
      icon: Baby,
      color: "bg-green-100 text-green-800",
    },
    {
      title: "Reunión de Oración",
      description: "Un tiempo especial para buscar a Dios en oración y comunión con los hermanos.",
      times: ["Martes, 19:00 hs"],
      icon: Church,
      color: "bg-red-100 text-red-800",
    }
  ];

  return (
    <section className="py-16 bg-warm-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Actividades y programas de la iglesia
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubrí maneras significativas de conectar, crecer y servir. En nuestra familia MCYM hay un lugar para todos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-warm-200 bg-white/80 backdrop-blur-sm"
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {activity.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground mt-2">
                      {activity.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-sm space-y-1">
                    {activity.times.map((time, idx) => (
                      <span key={idx} className="block text-muted-foreground font-bold">
                        {time}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
