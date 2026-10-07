import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Heart, MessageCircle } from "lucide-react";

const PRAYER_WHATSAPP_URL =
  "https://wa.me/542984204886?text=Hola%2C%20quisiera%20compartir%20un%20pedido%20de%20oraci%C3%B3n.";
const TEAM_WHATSAPP_URL =
  "https://wa.me/542984204886?text=Hola%2C%20me%20gustar%C3%ADa%20sumarme%20al%20equipo%20de%20oraci%C3%B3n.";

const Prayer = () => {
  return (
    <div className="min-h-screen bg-surface">
      <Navigation />
      <main>
        <section className="bg-warm-50 px-5 py-14 text-center">
          <Heart className="mx-auto h-10 w-10 text-brand" aria-hidden="true" />
          <h1 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">
            Pedidos de oración
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Creemos en el poder de la oración. Compartí tu pedido y vamos a
            acompañarte con respeto y confidencialidad.
          </p>
        </section>

        <section className="mx-auto grid max-w-4xl gap-5 px-5 py-10 md:grid-cols-2">
          <a
            href={PRAYER_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl2 border border-brand bg-surface-card p-7 text-center shadow-hair transition-colors hover:bg-warm-50"
          >
            <MessageCircle className="mx-auto h-8 w-8 text-brand" aria-hidden="true" />
            <h2 className="mt-4 text-2xl font-semibold text-ink">Enviar pedido de oración</h2>
            <p className="mt-3 text-muted-foreground">
              Tocá acá para abrir WhatsApp con un mensaje listo para enviar.
            </p>
          </a>
          <a
            href={TEAM_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl2 border border-line bg-surface-card p-7 text-center transition-colors hover:border-brand"
          >
            <Heart className="mx-auto h-8 w-8 text-brand" aria-hidden="true" />
            <h2 className="mt-4 text-2xl font-semibold text-ink">Sumate al equipo</h2>
            <p className="mt-3 text-muted-foreground">
              Escribinos si querés servir orando por otras personas.
            </p>
          </a>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Prayer;
