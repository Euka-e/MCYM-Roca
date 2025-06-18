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
              Church Activities & Programs
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover all the ways you can connect, grow, and serve in our
              vibrant church community. From worship services to community
              outreach, there's something for everyone.
            </p>
          </div>

          {/* Upload Section - This will be implemented later */}
          <Card className="mb-12 border-church-200 bg-church-50/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Share Activity Photos
              </CardTitle>
              <CardDescription>
                Have photos from recent activities? Upload them here to share
                with the community!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="bg-primary hover:bg-primary/90">
                Upload Photos
              </Button>
              <p className="text-sm text-muted-foreground mt-2">
                Feature coming soon - Upload and organize photos from church
                activities
              </p>
            </CardContent>
          </Card>

          {/* Activities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* This will be expanded with full activity management */}
            <Card className="border-warm-200">
              <CardHeader>
                <Badge className="w-fit bg-church-100 text-church-800">
                  Weekly
                </Badge>
                <CardTitle>Sunday Worship Service</CardTitle>
                <CardDescription>
                  Join us every Sunday for inspiring worship, biblical teaching,
                  and community fellowship.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  Every Sunday
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-2" />
                  10:00 AM - 11:30 AM
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2" />
                  Main Sanctuary
                </div>
                <div className="flex items-center text-sm text-primary font-medium">
                  <Users className="h-4 w-4 mr-2" />
                  200+ regular attendees
                </div>
                <Button className="w-full mt-4">View Details</Button>
              </CardContent>
            </Card>

            {/* Additional activity cards would go here */}
            <Card className="border-warm-200 bg-warm-50/30">
              <CardHeader className="text-center">
                <CardTitle className="text-lg">
                  More Activities Coming
                </CardTitle>
                <CardDescription>
                  We're building a comprehensive activities management system
                  with photo uploads, registration, and detailed information for
                  each program.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button variant="outline">Stay Tuned</Button>
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
