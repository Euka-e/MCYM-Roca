const ContactSection = () => {
  return (
    <section className="border-b border-line-section bg-surface px-5 py-10">
      <h2 className="font-display text-[clamp(26px,6.5vw,32px)] font-medium text-ink">
        Contactanos
      </h2>
      <p className="mb-[26px] mt-3.5 text-lg leading-[1.6] text-[hsl(24_18%_36%)]">
        ¡Nos encantaría escucharte! Si tenés preguntas o querés sumarte, no
        dudes en escribirnos.
      </p>
      <div className="flex flex-col gap-3.5">
        <div className="rounded-xl2 border border-line bg-surface-card p-5">
          <h3 className="text-sm uppercase tracking-[0.14em] text-[hsl(24_40%_42%)]">
            Dirección
          </h3>
          <p className="mt-2 text-[19px] leading-[1.5] text-ink">
            Cipolletti 860
            <br />
            General Roca, Rio Negro, Argentina
          </p>
          <a
            href="https://maps.google.com/?q=Cipolletti+860,+General+Roca,+Rio+Negro"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex min-h-[48px] items-center text-[17px] font-semibold text-brand hover:underline"
          >
            Ver en el mapa →
          </a>
        </div>
        <div className="rounded-xl2 border border-line bg-surface-card p-5">
          <h3 className="mb-3 text-sm uppercase tracking-[0.14em] text-[hsl(24_40%_42%)]">
            Teléfono
          </h3>
          <div className="flex flex-col gap-2">
            <a
              href="tel:+542984204886"
              className="flex min-h-[52px] items-center rounded-xl border border-line-soft bg-[#fff9ee] px-4 text-[19px] font-semibold text-ink hover:border-line"
            >
              (+54) 298 420-4886
            </a>
            <a
              href="tel:+542984731622"
              className="flex min-h-[52px] items-center rounded-xl border border-line-soft bg-[#fff9ee] px-4 text-[19px] font-semibold text-ink hover:border-line"
            >
              (+54) 298 473-1622
            </a>
          </div>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            <a
              href="https://wa.me/542984204886?text=Hola%2C%20quisiera%20hacer%20una%20consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[48px] items-center justify-center rounded-xl border border-brand px-4 text-center font-semibold text-brand hover:bg-warm-50"
            >
              WhatsApp: 420-4886
            </a>
            <a
              href="https://wa.me/542984731622?text=Hola%2C%20quisiera%20hacer%20una%20consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[48px] items-center justify-center rounded-xl border border-brand px-4 text-center font-semibold text-brand hover:bg-warm-50"
            >
              WhatsApp: 473-1622
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
