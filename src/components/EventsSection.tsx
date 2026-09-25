import { useState } from "react";
import { Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const events: Array<{
  title: string;
  description: string;
  dates: string[];
  guests: string[];
  location: string;
  image: string;
}> = [];

const EventsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (events.length === 0) return null;

  const event = events[0];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {events.length > 0 && (
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Próximos eventos
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              No te pierdas nuestros próximos encuentros y actividades
              especiales.
            </p>
          </div>
        )}
        <Card className="group hover:shadow-xl transition-all duration-300 border-warm-200 sm:max-w-[95vh] md:max-w-[70vh] overflow-hidden">
          <div className="overflow-hidden">
            <img
              src={event.image}
              alt="Portada del evento"
              className="size-full object-cover"
            />
          </div>
          <CardContent className="space-y-4 mt-5">
            <div className="space-y-2">
              {event.dates.map((date, idx) => (
                <div
                  key={idx}
                  className="flex items-center text-sm text-muted-foreground"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  {date}
                </div>
              ))}
              <div className="flex items-center text-sm text-muted-foreground font-bold">
                <MapPin className="h-4 w-4 mr-2" />
                {event.location}
              </div>
            </div>
            <Button
              className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
              onClick={() => setIsModalOpen(true)}
            >
              Ver más
            </Button>
          </CardContent>
        </Card>
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-[95%] h-[95vh] overflow-auto rounded-md">
            <DialogHeader>
              <DialogTitle>{event.title}</DialogTitle>
            </DialogHeader>
            <div className="h-full flex flex-col">
              <div className="flex-1 overflow-y-auto">
                <div className="overflow-hidden mb-4">
                  <img
                    src={event.image}
                    alt="Portada del evento"
                    className="size-full max-h-[70vh] max-w-[70vh] mx-auto md:mx-0 object-contain"
                  />
                </div>
                <p className="mb-6 text-lg font-medium">{event.description}</p>
                <div className="space-y-2">
                  {event.dates.map((date, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-md font-semibold"
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      {date}
                    </div>
                  ))}
                  <div className="flex items-center text-lg font-semibold">
                    <MapPin className="size-4 mr-2" />
                    {event.location}
                  </div>
                </div>
                <div className="mt-8">
                  <h4 className="text-lg font-semibold">
                    Invitados especiales:
                  </h4>
                  <p>
                    {event.guests.map((guest) => (
                      <span key={guest} className="block">
                        {guest}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default EventsSection;
