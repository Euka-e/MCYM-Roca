import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Users, Calendar, Clock, MapPin, Upload } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Activities = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Actividades y programas de la iglesia
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Descubrí todas las formas de conectar, crecer y servir en nuestra iglesia familiar. Desde reuniones de adoración hasta acción social, hay algo para todos.
            </p>
          </div>

          {/* Upload Section - This will be implemented later */}
          <Card className="mb-12 border-church-200 bg-church-50/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Compartí fotos de actividades
              </CardTitle>
              <CardDescription>
                ¿Tenés fotos de actividades recientes? Subilas acá para compartir con la familia MCYM.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="bg-primary hover:bg-primary/90">
                Subir fotos
              </Button>
              <p className="text-sm text-muted-foreground mt-2">
                Próximamente — Subí y organizá fotos de las actividades de la iglesia
              </p>
            </CardContent>
          </Card>

          {/* Activities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* This will be expanded with full activity management */}
            <Card className="border-warm-200">
              <CardHeader>
                <Badge className="w-fit bg-church-100 text-church-800">
                  Semanal
                </Badge>
                <CardTitle>Reunión Dominical</CardTitle>
                <CardDescription>
                  Te esperamos cada domingo para adorar, recibir enseñanza bíblica y compartir en familia.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  Todos los domingos
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-2" />
                  10:00 - 11:30 hs
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2" />
                  Auditorio principal
                </div>
                <div className="flex items-center text-sm text-primary font-medium">
                  <Users className="h-4 w-4 mr-2" />
                  200+ asistentes habituales
                </div>
                <Button className="w-full mt-4">Ver detalles</Button>
              </CardContent>
            </Card>

            {/* Additional activity cards would go here */}
            <Card className="border-warm-200 bg-warm-50/30">
              <CardHeader className="text-center">
                <CardTitle className="text-lg">Más actividades pronto</CardTitle>
                <CardDescription>
                  Estamos construyendo un sistema completo para gestionar actividades con fotos, registro e información detallada de cada programa.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button variant="outline">Próximamente</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Activities;
