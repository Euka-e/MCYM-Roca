import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { MapPin, Phone, Mail, Clock, Users, Heart } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const staff = [
    {
      name: "Pastor David Johnson",
      role: "Senior Pastor",
      email: "pastor@gracecommunity.org",
      phone: "(555) 123-7701",
      bio: "Leading our congregation with wisdom and compassion for over 15 years.",
    },
    {
      name: "Sarah Mitchell",
      role: "Worship Director",
      email: "worship@gracecommunity.org",
      phone: "(555) 123-7702",
      bio: "Passionate about creating meaningful worship experiences for all ages.",
    },
    {
      name: "Michael Chen",
      role: "Youth Pastor",
      email: "youth@gracecommunity.org",
      phone: "(555) 123-7703",
      bio: "Dedicated to helping young people grow in their faith and purpose.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-warm-50 to-church-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're here for you! Whether you need prayer, have questions about
              faith, or want to get involved in our community, we'd love to
              connect with you.
            </p>
          </div>
        </section>

        {/* Quick Contact Cards */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <Card className="border-church-200 bg-church-50/30 text-center">
                <CardHeader>
                  <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Prayer Requests</CardTitle>
                  <CardDescription>
                    Need prayer? Our team is here to pray with and for you.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="bg-primary hover:bg-primary/90">
                    Submit Prayer Request
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-warm-200 bg-warm-50/30 text-center">
                <CardHeader>
                  <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>New to Grace?</CardTitle>
                  <CardDescription>
                    We'd love to welcome you and help you get connected.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline">Plan Your Visit</Button>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-blue-50/30 text-center">
                <CardHeader>
                  <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Emergency Contact</CardTitle>
                  <CardDescription>
                    For urgent pastoral care or emergencies, call our hotline.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline">(555) 123-HELP</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <ContactSection />

        {/* Staff Directory */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Meet Our Staff
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our dedicated team is here to serve you and help you grow in
                your faith journey.
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
                    <p className="text-muted-foreground text-sm">
                      {member.bio}
                    </p>
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
                    <Button variant="outline" size="sm" className="mt-4">
                      Contact {member.name.split(" ")[0]}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Location & Hours */}
        <section className="py-16 bg-warm-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Visit Us
                </h3>
                <div className="aspect-video bg-gradient-to-br from-church-100 to-warm-200 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 mx-auto text-primary mb-2" />
                    <p className="text-primary font-medium">
                      Interactive Map Coming Soon
                    </p>
                  </div>
                </div>
                <Card className="border-warm-200">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-medium text-foreground">
                          Our Address
                        </h4>
                        <p className="text-muted-foreground">
                          123 Faith Street
                          <br />
                          Grace Valley, CA 90210
                        </p>
                        <Button variant="outline" size="sm" className="mt-3">
                          Get Directions
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  When We're Here
                </h3>
                <div className="space-y-4">
                  <Card className="border-warm-200">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Clock className="h-5 w-5 text-primary mt-1" />
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-medium text-foreground">
                              Sunday Services
                            </h4>
                            <p className="text-muted-foreground">
                              Sunday Worship: 10:00 AM - 11:30 AM
                              <br />
                              Sunday School: 9:00 AM - 9:45 AM
                            </p>
                          </div>
                          <div>
                            <h4 className="font-medium text-foreground">
                              Weekly Programs
                            </h4>
                            <p className="text-muted-foreground">
                              Wednesday Bible Study: 7:00 PM - 8:30 PM
                              <br />
                              Friday Youth Group: 7:00 PM - 9:00 PM
                            </p>
                          </div>
                          <div>
                            <h4 className="font-medium text-foreground">
                              Office Hours
                            </h4>
                            <p className="text-muted-foreground">
                              Monday - Friday: 9:00 AM - 5:00 PM
                              <br />
                              Saturday: 10:00 AM - 2:00 PM
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
