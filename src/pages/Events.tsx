import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, Plus, Filter } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Events = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Eventos y Servicios Especiales
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Mantenete al día con nuestros eventos y encuentros. Creá publicaciones para eventos actuales y planificá celebraciones futuras.
            </p>
          </div>

          {/* Action Bar */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex-1">
              <Input placeholder="Buscar eventos..." className="max-w-md" />
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="h-4 w-4 mr-2" />
              Crear publicación de evento
            </Button>
          </div>

          {/* Events Management Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-church-200 bg-church-50/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Eventos actuales
                </CardTitle>
                <CardDescription>
                  Gestioná y creá publicaciones de eventos y actividades en curso
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="bg-primary hover:bg-primary/90 mb-4">
                  Crear publicación de evento actual
                </Button>
                <p className="text-sm text-muted-foreground">
                  Próximamente — Crear y gestionar publicaciones de eventos especiales con fotos e información detallada
                </p>
              </CardContent>
            </Card>

            <Card className="border-warm-200 bg-warm-50/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Eventos futuros
                </CardTitle>
                <CardDescription>
                  Planificá y anunciá próximos eventos y servicios especiales
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="bg-primary hover:bg-primary/90 mb-4">
                  Planificar evento futuro
                </Button>
                <p className="text-sm text-muted-foreground">
                  Próximamente — Agenda de eventos con recordatorios automáticos y registro
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Sample Event Display */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">Publicaciones recientes</h2>
            <Card className="border-warm-200">
              <CardHeader>
                <CardTitle>Celebración de Pascua 2024</CardTitle>
                <CardDescription>Te invitamos a un servicio especial de Pascua</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gradient-to-br from-yellow-100 to-orange-200 rounded-lg flex items-center justify-center mb-4">
                  <p className="text-lg font-medium text-orange-800">
                    Foto de evento (placeholder)
                  </p>
                </div>
                <p className="text-muted-foreground mb-4">
                  Este es un ejemplo de cómo se verán las publicaciones. El sistema completo incluirá carga de fotos, descripciones detalladas, enlaces de registro y más.
                </p>
                <Button variant="outline">Ver más</Button>
              </CardContent>
            </Card>

            <Card className="border-warm-200 bg-warm-50/20">
              <CardContent className="py-12 text-center">
                <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">
                  Sistema de eventos completo próximamente
                </h3>
                <p className="text-muted-foreground mb-4">
                  Estamos construyendo un sistema integral para gestionar eventos con publicaciones, carga de imágenes, registro y notificaciones automáticas.
                </p>
                <Button variant="outline">Quiero estar al tanto</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
