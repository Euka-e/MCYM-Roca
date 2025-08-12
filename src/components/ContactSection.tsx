import { Mail, Phone, MapPin, Clock } from "lucide-react";
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

const ContactSection = () => {
  return (
    <section className="py-16 bg-warm-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Contactanos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ¡Nos encantaría escucharte! Si tenés preguntas o querés sumarte, no dudes en escribirnos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Información de contacto
              </h3>
              <div className="space-y-6">
                <Card className="border-warm-200">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">Dirección</h4>
                        <p className="text-muted-foreground">
                          Cipolletti 860
                          <br />
                          General Roca, Rio Negro, Argentina
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-warm-200">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">Teléfono</h4>
                        <p className="text-muted-foreground">
                          (+54) 298 420-4886
                          <br />
                          (+54) 298 473-1622
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          {/*           <div>
            <Card className="border-warm-200">
              <CardHeader>
                <CardTitle className="text-2xl">Escribinos un mensaje</CardTitle>
                <CardDescription>
                  Completá el formulario y te responderemos a la brevedad.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Nombre</Label>
                    <Input id="firstName" placeholder="Juan" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Apellido</Label>
                    <Input id="lastName" placeholder="Pérez" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="juan.perez@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono (opcional)</Label>
                  <Input id="phone" type="tel" placeholder="(299) 123-4567" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Asunto</Label>
                  <Input id="subject" placeholder="¿Cómo podemos ayudarte?" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea
                    id="message"
                    placeholder="Contanos lo que necesites..."
                    rows={5}
                  />
                </div>

                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  Enviar mensaje
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  Respondemos generalmente dentro de 24 horas.
                </p>
              </CardContent>
            </Card>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
