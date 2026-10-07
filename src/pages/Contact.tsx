import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Heart, MapPin, MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/542984204886?text=Hola%2C%20quisiera%20hacer%20una%20consulta.";
const PRAYER_WHATSAPP_URL =
  "https://wa.me/542984204886?text=Hola%2C%20quisiera%20compartir%20un%20pedido%20de%20oraci%C3%B3n.";

const Contact = () => {
  return (
    <div className="min-h-screen bg-surface">
      <Navigation />
      <main>
        <section className="bg-warm-50 px-5 py-14 text-center">
          <h1 className="font-display text-4xl font-semibold text-ink sm:text-5xl">
            Contacto
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Estamos para acompañarte. Escribinos por WhatsApp o acercate a
            conocernos.
          </p>
        </section>

        <section className="mx-auto grid max-w-5xl gap-5 px-5 py-10 md:grid-cols-3">
          <a
            href={PRAYER_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl2 border border-line bg-surface-card p-6 text-center transition-colors hover:border-brand"
          >
            <Heart className="mx-auto h-7 w-7 text-brand" aria-hidden="true" />
            <h2 className="mt-4 text-xl font-semibold text-ink">Pedido de oración</h2>
            <p className="mt-2 text-muted-foreground">
              Enviá tu pedido por WhatsApp y nuestro equipo va a acompañarte.
            </p>
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl2 border border-line bg-surface-card p-6 text-center transition-colors hover:border-brand"
          >
            <MessageCircle className="mx-auto h-7 w-7 text-brand" aria-hidden="true" />
            <h2 className="mt-4 text-xl font-semibold text-ink">Consultas generales</h2>
            <p className="mt-2 text-muted-foreground">
              Escribinos para recibir información o conocer la iglesia.
            </p>
          </a>
          <a
            href="https://maps.google.com/?q=Cipolletti+860,+General+Roca,+Rio+Negro"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl2 border border-line bg-surface-card p-6 text-center transition-colors hover:border-brand"
          >
            <MapPin className="mx-auto h-7 w-7 text-brand" aria-hidden="true" />
            <h2 className="mt-4 text-xl font-semibold text-ink">Visitanos</h2>
            <p className="mt-2 text-muted-foreground">
              Encontrá cómo llegar a Cipolletti 860, General Roca.
            </p>
          </a>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
