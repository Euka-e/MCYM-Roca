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
              Church Events & Special Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay up to date with all our special events, services, and
              community gatherings. Create posts for current events and plan
              future celebrations.
            </p>
          </div>

          {/* Action Bar */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex-1">
              <Input
                placeholder="Search events..."
                className="max-w-md"
                icon={<Filter className="h-4 w-4" />}
              />
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="h-4 w-4 mr-2" />
              Create Event Post
            </Button>
          </div>

          {/* Events Management Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-church-200 bg-church-50/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Current Events
                </CardTitle>
                <CardDescription>
                  Manage and create posts for ongoing events and activities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="bg-primary hover:bg-primary/90 mb-4">
                  Create Current Event Post
                </Button>
                <p className="text-sm text-muted-foreground">
                  Feature coming soon - Create and manage posts for current
                  special events with photo uploads and detailed information
                </p>
              </CardContent>
            </Card>

            <Card className="border-warm-200 bg-warm-50/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Future Events
                </CardTitle>
                <CardDescription>
                  Plan and announce upcoming special events and services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="bg-primary hover:bg-primary/90 mb-4">
                  Plan Future Event
                </Button>
                <p className="text-sm text-muted-foreground">
                  Feature coming soon - Schedule future events with automatic
                  reminders and registration capabilities
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Sample Event Display */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">
              Recent Event Posts
            </h2>
            <Card className="border-warm-200">
              <CardHeader>
                <CardTitle>Easter Celebration 2024</CardTitle>
                <CardDescription>
                  Join us for a special Easter service celebrating the
                  resurrection of Jesus Christ
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gradient-to-br from-yellow-100 to-orange-200 rounded-lg flex items-center justify-center mb-4">
                  <p className="text-lg font-medium text-orange-800">
                    Event Photo Placeholder
                  </p>
                </div>
                <p className="text-muted-foreground mb-4">
                  This is a sample of how event posts will look. The full system
                  will include photo uploads, detailed descriptions,
                  registration links, and more.
                </p>
                <Button variant="outline">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="border-warm-200 bg-warm-50/20">
              <CardContent className="py-12 text-center">
                <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">
                  Full Events System Coming Soon
                </h3>
                <p className="text-muted-foreground mb-4">
                  We're building a comprehensive events management system with
                  posting capabilities, image uploads, registration, and
                  automated notifications.
                </p>
                <Button variant="outline">Stay Updated</Button>
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
