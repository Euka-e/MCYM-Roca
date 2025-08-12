import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { MapPin, Phone, Mail, Clock, Users, Heart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const staff = [
    {
      name: "Pastor/a",
      role: "Pastor/a principal",
      email: "pastor@mcymgeneralroca.org",
      phone: "(299) 000-0000",
      bio: "Acompañando a la iglesia con sabiduría y compasión.",
    },
    {
      name: "Líder de Alabanza",
      role: "Dirección de alabanza",
      email: "alabanza@mcymgeneralroca.org",
      phone: "(299) 000-0001",
      bio: "Apasionado/a por crear tiempos de adoración significativos para todas las edades.",
    },
    {
      name: "Pastor/a de Jóvenes",
      role: "Jóvenes",
      email: "jovenes@mcymgeneralroca.org",
      phone: "(299) 000-0002",
      bio: "Dedicado/a a ayudar a los jóvenes a crecer en su fe y propósito.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="py-16 bg-gradient-to-br from-warm-50 to-church-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Contacto</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              ¡Estamos para servirte! Si tenés preguntas sobre la fe o querés sumarte a la iglesia, nos encantaría conectarnos con vos.
            </p>
          </div>
        </section>

        {/* Tarjetas rápidas */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <Card className="border-church-200 bg-church-50/30 text-center">
                <CardHeader>
                  <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Oración</CardTitle>
                  <CardDescription>¿Necesitás oración? Nuestro equipo está para acompañarte.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="bg-primary hover:bg-primary/90">Enviar solicitud de oración</Button>
                </CardContent>
              </Card>

              <Card className="border-warm-200 bg-warm-50/30 text-center">
                <CardHeader>
                  <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>¿Sos nuevo/a?</CardTitle>
                  <CardDescription>Queremos darte la bienvenida y ayudarte a conectarte.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline">Planificá tu visita</Button>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-blue-50/30 text-center">
                <CardHeader>
                  <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Contacto de emergencia</CardTitle>
                  <CardDescription>Para atención pastoral urgente, llamá a nuestra línea directa.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline">(299) 000-0003</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Sección principal de contacto */}
        <ContactSection />

        {/* Staff */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Conocé a nuestro equipo</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Un equipo comprometido para servirte y acompañarte en tu caminar de fe.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {staff.map((member, index) => (
                <Card key={index} className="border-warm-200">
                  <CardHeader className="text-center">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-church-100 to-warm-200 rounded-full flex items-center justify-center mb-4">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>{member.name}</CardTitle>
                    <CardDescription className="font-medium text-primary">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center space-y-3">
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-center text-sm text-muted-foreground">
                        <Mail className="h-4 w-4 mr-2" />
                        {member.email}
                      </div>
                      <div className="flex items-center justify-center text-sm text-muted-foreground">
                        <Phone className="h-4 w-4 mr-2" />
                        {member.phone}
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="mt-4">Contactar</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Ubicación y horarios */}
        <section className="py-16 bg-warm-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Visitanos</h3>
                <div className="aspect-video bg-gradient-to-br from-church-100 to-warm-200 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 mx-auto text-primary mb-2" />
                    <p className="text-primary font-medium">Mapa interactivo próximamente</p>
                  </div>
                </div>
                <Card className="border-warm-200">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-medium text-foreground">Dirección</h4>
                        <p className="text-muted-foreground">
                          Cipolletti 860
                          <br />
                          General Roca, Río Negro
                        </p>
                        <Button variant="outline" size="sm" className="mt-3">Cómo llegar</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Horarios</h3>
                <div className="space-y-4">
                  <Card className="border-warm-200">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Clock className="h-5 w-5 text-primary mt-1" />
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-medium text-foreground">Reuniones Dominicales</h4>
                            <p className="text-muted-foreground">
                              Adoración: 10:00 - 11:30 hs
                              <br />
                              Escuela dominical: 9:00 - 9:45 hs
                            </p>
                          </div>
                          <div>
                            <h4 className="font-medium text-foreground">Programas semanales</h4>
                            <p className="text-muted-foreground">
                              Estudio bíblico (miércoles): 19:00 - 20:30 hs
                              <br />
                              Jóvenes (viernes): 19:00 - 21:00 hs
                            </p>
                          </div>
                          <div>
                            <h4 className="font-medium text-foreground">Horarios de oficina</h4>
                            <p className="text-muted-foreground">
                              Lunes a viernes: 9:00 - 17:00 hs
                              <br />
                              Sábado: 10:00 - 14:00 hs
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
