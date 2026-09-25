const Hero = () => {
  return (
    <section className="relative border-b border-line-section bg-[linear-gradient(180deg,#fff8ea_0%,#fffdf7_100%)] px-5 pb-9 pt-10">
      <p className="mb-3.5 text-sm uppercase tracking-[0.16em] text-[hsl(24_60%_40%)]">
        General Roca · Río Negro
      </p>
      <h1 className="font-display text-[clamp(34px,8.5vw,46px)] font-medium leading-[1.1] tracking-[-0.02em] text-ink [text-wrap:pretty]">
        Bienvenido a<span className="block text-brand">MCYM General Roca</span>
      </h1>
      <p className="mt-5 text-[19px] leading-[1.65] text-ink-body [text-wrap:pretty]">
        Una iglesia familiar donde crece la fe, nos acompañamos como familia y
        todos son bienvenidos. Descubramos juntos el amor de Dios y sirvamos a
        nuestra ciudad con compasión.
      </p>
      <div className="mt-7 flex overflow-hidden rounded-xl2 border border-line bg-surface-card">
        <div className="flex min-w-[104px] flex-col items-center justify-center border-r border-line-soft bg-surface-warm px-5 py-[18px] text-center">
          <span className="text-[13px] uppercase tracking-[0.14em] text-[hsl(24_40%_40%)]">
            Domingo
          </span>
          <span className="font-display text-[30px] font-semibold leading-[1.1] text-brand">
            10:00
          </span>
        </div>
        <div className="flex min-w-0 flex-1 flex-col justify-center gap-1 px-5 py-[18px]">
          <span className="font-display text-xl text-ink">
            Acompañanos este domingo
          </span>
          <span className="text-[17px] text-[hsl(24_18%_40%)]">
            Reunión general · 10:00 hs
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
