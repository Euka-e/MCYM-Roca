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
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Sermons & Messages
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Listen to inspiring messages, download sermon notes, and grow in
              your faith through biblical teaching.
            </p>
          </div>

          <Card className="border-warm-200 bg-warm-50/30 text-center mb-8">
            <CardHeader>
              <BookOpen className="h-12 w-12 mx-auto text-primary mb-4" />
              <CardTitle>Sermon Library Coming Soon</CardTitle>
              <CardDescription>
                We're building a comprehensive sermon archive with audio/video
                streaming, downloadable notes, and study guides.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="bg-primary hover:bg-primary/90">
                Get Notified When Ready
              </Button>
            </CardContent>
          </Card>

          {/* Sample Sermon */}
          <Card className="border-warm-200">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <Badge className="mb-2 bg-church-100 text-church-800">
                    Latest Sermon
                  </Badge>
                  <CardTitle>Walking in Faith: Trusting God's Plan</CardTitle>
                  <CardDescription>
                    Pastor David Johnson • March 17, 2024
                  </CardDescription>
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
                  Watch
                </Button>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Download Notes
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
