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
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Prayer Requests
            </h1>
            <p className="text-xl text-muted-foreground">
              We believe in the power of prayer. Share your requests with our
              prayer team and community.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="border-church-200 bg-church-50/30">
              <CardHeader className="text-center">
                <Heart className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle>Submit a Prayer Request</CardTitle>
                <CardDescription>
                  Share your prayer needs with our caring community
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name (Optional)</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email (Optional)</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="request">Prayer Request</Label>
                  <Textarea
                    id="request"
                    placeholder="How can we pray for you?"
                    rows={4}
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  <Send className="h-4 w-4 mr-2" />
                  Submit Prayer Request
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  Your request will be shared with our prayer team. All requests
                  are kept confidential.
                </p>
              </CardContent>
            </Card>

            <Card className="border-warm-200 bg-warm-50/30">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle>Prayer Team</CardTitle>
                <CardDescription>
                  Join our dedicated prayer warriors
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Our prayer team meets weekly to pray for submitted requests
                  and the needs of our community. We also have a 24/7 prayer
                  hotline for urgent needs.
                </p>
                <div className="space-y-2">
                  <h4 className="font-medium">Prayer Hotline</h4>
                  <p className="text-primary font-semibold">
                    (555) 123-PRAY (7729)
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Prayer Team Meetings</h4>
                  <p className="text-muted-foreground">
                    Thursdays at 7:00 PM in the Prayer Room
                  </p>
                </div>
                <Button variant="outline" className="w-full">
                  Join Prayer Team
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Praise Reports Section */}
          <Card className="border-green-200 bg-green-50/30">
            <CardHeader className="text-center">
              <CardTitle>Praise Reports & Answered Prayers</CardTitle>
              <CardDescription>
                Celebrate how God is working in our community
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-4">
                <p className="text-muted-foreground">
                  Share your testimony of answered prayers and God's
                  faithfulness to encourage others in the community.
                </p>
                <Button variant="outline">Share Your Praise Report</Button>
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
