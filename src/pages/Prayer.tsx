import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart, Send, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Prayer = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Solicitudes de oración</h1>
              <p className="text-xl text-muted-foreground">Creemos en el poder de la oración. Compartí tu pedido con nuestro equipo.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="border-church-200 bg-church-50/30">
              <CardHeader className="text-center">
                <Heart className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle>Enviar un pedido de oración</CardTitle>
                <CardDescription>Compartí tu necesidad de oración y te acompañamos</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Tu nombre (opcional)</Label>
                  <Input id="name" placeholder="Ingresá tu nombre" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email (opcional)</Label>
                  <Input id="email" type="email" placeholder="tu@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="request">Pedido de oración</Label>
                  <Textarea id="request" placeholder="¿Cómo podemos orar por vos?" rows={4} />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  <Send className="h-4 w-4 mr-2" />
                  Enviar pedido de oración
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  Tu pedido será compartido con nuestro equipo de oración. Mantenemos la confidencialidad.
                </p>
              </CardContent>
            </Card>

            <Card className="border-warm-200 bg-warm-50/30">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle>Equipo de oración</CardTitle>
                <CardDescription>Sumate a nuestro equipo</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Nuestro equipo se reúne semanalmente para orar por los pedidos y las necesidades de la iglesia. También contamos con una línea de oración para urgencias.
                </p>
                <div className="space-y-2">
                  <h4 className="font-medium">Línea de oración</h4>
                  <a
                    href="tel:+542991234567"
                    className="font-semibold text-primary hover:underline"
                  >
                    (299) 123-4567
                  </a>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Reuniones del equipo</h4>
                  <p className="text-muted-foreground">Jueves 19:00 hs - Sala de oración</p>
                </div>
                <Button variant="outline" className="w-full">Quiero sumarme</Button>
              </CardContent>
            </Card>
          </div>

          {/* Testimonios */}
          <Card className="border-green-200 bg-green-50/30">
            <CardHeader className="text-center">
              <CardTitle>Testimonios y respuestas</CardTitle>
              <CardDescription>Celebramos lo que Dios está haciendo</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-4">
                <p className="text-muted-foreground">Compartí tu testimonio de respuestas de oración para animar a otros.</p>
                <Button variant="outline">Compartir testimonio</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Prayer;
