import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Play, Download, BookOpen } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Sermons = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Sermones y mensajes</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Escuchá mensajes que inspiran, descargá notas y crecé en la fe a través de la enseñanza bíblica.
            </p>
          </div>

          <Card className="border-warm-200 bg-warm-50/30 text-center mb-8">
            <CardHeader>
              <BookOpen className="h-12 w-12 mx-auto text-primary mb-4" />
              <CardTitle>Biblioteca de sermones próximamente</CardTitle>
              <CardDescription>
                Estamos construyendo un archivo completo con audio/video, notas descargables y guías de estudio.
              </CardDescription>
            </CardHeader>
            <CardContent>
                <Button className="bg-primary hover:bg-primary/90">Avisarme cuando esté listo</Button>
            </CardContent>
          </Card>

          {/* Sample Sermon */}
          <Card className="border-warm-200">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <Badge className="mb-2 bg-church-100 text-church-800">Último sermón</Badge>
                  <CardTitle>Caminando en fe: Confiando en el plan de Dios</CardTitle>
                  <CardDescription>Pastor/a • 17 de marzo, 2024</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-gradient-to-br from-church-100 to-warm-200 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <Play className="h-12 w-12 mx-auto text-primary mb-2" />
                  <p className="text-primary font-medium">Video Player</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline">
                  <Play className="h-4 w-4 mr-2" />
                  Ver
                </Button>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Descargar notas
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Sermons;
