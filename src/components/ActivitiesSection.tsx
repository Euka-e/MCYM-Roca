import { Users, Heart, BookOpen, Music, Baby, Coffee } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ActivitiesSection = () => {
  const activities = [
    {
      title: "Sunday Service",
      description:
        "Join us for worship, fellowship, and inspiring messages every Sunday morning.",
      time: "Every Sunday, 10:00 AM",
      category: "Worship",
      icon: Music,
      attendees: "200+",
      color: "bg-church-100 text-church-800",
    },
    {
      title: "Youth Group",
      description:
        "Engaging activities and discussions for teens to grow in faith and friendship.",
      time: "Fridays, 7:00 PM",
      category: "Youth",
      icon: Users,
      attendees: "45",
      color: "bg-warm-100 text-warm-800",
    },
    {
      title: "Bible Study",
      description:
        "Deep dive into Scripture with small group discussions and prayer.",
      time: "Wednesdays, 7:00 PM",
      category: "Study",
      icon: BookOpen,
      attendees: "85",
      color: "bg-blue-100 text-blue-800",
    },
    {
      title: "Children's Ministry",
      description:
        "Fun, age-appropriate activities that help children learn about God's love.",
      time: "Sundays, 10:00 AM",
      category: "Children",
      icon: Baby,
      attendees: "60",
      color: "bg-green-100 text-green-800",
    },
    {
      title: "Community Outreach",
      description:
        "Serving our local community through various volunteer opportunities.",
      time: "Saturdays, 9:00 AM",
      category: "Service",
      icon: Heart,
      attendees: "30",
      color: "bg-red-100 text-red-800",
    },
    {
      title: "Coffee Fellowship",
      description:
        "Casual gathering for conversation and community building over coffee.",
      time: "Sundays after service",
      category: "Fellowship",
      icon: Coffee,
      attendees: "150",
      color: "bg-amber-100 text-amber-800",
    },
  ];

  return (
    <section className="py-16 bg-warm-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Church Activities & Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover meaningful ways to connect, grow, and serve in our vibrant
            community. There's a place for everyone at Grace Community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-warm-200 bg-white/80 backdrop-blur-sm"
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className={activity.color}>
                      {activity.category}
                    </Badge>
                  </div>
                  <div>
                    <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {activity.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground mt-2">
                      {activity.description}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      {activity.time}
                    </span>
                    <span className="text-primary font-medium">
                      {activity.attendees} members
                    </span>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            View All Activities
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
