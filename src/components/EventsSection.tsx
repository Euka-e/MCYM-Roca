import { Calendar, Clock, MapPin, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const EventsSection = () => {
  const upcomingEvents = [
    {
      title: "Easter Celebration Service",
      description:
        "Join us for a special Easter service celebrating the resurrection of Jesus Christ with music, testimonies, and communion.",
      date: "April 9, 2024",
      time: "10:00 AM",
      location: "Main Sanctuary",
      type: "Special Service",
      attendees: "Expected 400+",
      image: "bg-gradient-to-br from-yellow-100 to-orange-200",
    },
    {
      title: "Community Food Drive",
      description:
        "Help us serve our community by donating non-perishable food items for local families in need.",
      date: "March 25, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Church Parking Lot",
      type: "Community Service",
      attendees: "50 volunteers needed",
      image: "bg-gradient-to-br from-green-100 to-emerald-200",
    },
    {
      title: "Youth Spring Retreat",
      description:
        "A weekend getaway for our youth to connect with God and each other through activities, worship, and fellowship.",
      date: "April 15-17, 2024",
      time: "Friday 6:PM - Sunday 2:PM",
      location: "Mountain View Camp",
      type: "Youth Event",
      attendees: "45 youth signed up",
      image: "bg-gradient-to-br from-blue-100 to-cyan-200",
    },
  ];

  const pastEvents = [
    {
      title: "Christmas Concert 2023",
      description:
        "A beautiful evening of Christmas carols and seasonal music performed by our choir and guest musicians.",
      date: "December 20, 2023",
      attendees: "350 attended",
    },
    {
      title: "Thanksgiving Dinner",
      description:
        "Community gathering with traditional Thanksgiving meal and gratitude sharing.",
      date: "November 23, 2023",
      attendees: "200 attended",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Upcoming Events */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join us for these special gatherings and community events. Mark
              your calendar and be part of something meaningful.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-warm-200 overflow-hidden"
              >
                <div
                  className={`h-48 ${event.image} flex items-center justify-center`}
                >
                  <Calendar className="h-12 w-12 text-white/80" />
                </div>

                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <Badge
                      variant="secondary"
                      className="bg-primary/10 text-primary"
                    >
                      {event.type}
                    </Badge>
                  </div>
                  <div>
                    <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {event.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground mt-2 line-clamp-3">
                      {event.description}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-primary font-medium">
                      <Users className="h-4 w-4 mr-2" />
                      {event.attendees}
                    </div>
                  </div>

                  <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Recent Events
            </h3>
            <p className="text-muted-foreground">
              See what we've been up to in our community
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {pastEvents.map((event, index) => (
              <Card key={index} className="border-warm-200 bg-warm-50/30">
                <CardHeader>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{event.date}</span>
                    <span className="text-primary font-medium">
                      {event.attendees}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="mr-4">
            View All Events
          </Button>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Submit Event Idea
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
