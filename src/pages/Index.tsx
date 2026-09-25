import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import LatestStream from "@/components/LatestStream";
import ActivitiesSection from "@/components/ActivitiesSection";
import EventsSection from "@/components/EventsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#fefdf9]">
      <div className="mx-auto min-h-screen max-w-[720px] bg-surface shadow-hair">
        <Navigation />
        <main>
          <Hero />
          <LatestStream />
          <ActivitiesSection />
          <EventsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
