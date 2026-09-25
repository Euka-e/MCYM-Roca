const ActivitiesSection = () => {
  const activities = [
    {
      title: "Reunión de Oración",
      description:
        "Un tiempo especial para buscar a Dios en oración y comunión con los hermanos.",
      times: ["Martes, 19:00 hs"],
      badge: "MAR",
    },
    {
      title: "Reuniónes Generales",
      description:
        "Acompañanos en adoración, comunión y un mensaje que edifica los viernes y domingos.",
      times: ["Viernes, 19:30 hs", "Domingos, 10:00 hs"],
      badge: "VIE\nDOM",
    },
    {
      title: "Escuelita Biblica",
      description:
        "Actividades divertidas y apropiadas para que los niños conozcan el amor de Dios.",
      times: ["Sábados, 15:00 hs"],
      badge: "SÁB",
    },
    {
      title: "Reunión de Jóvenes",
      description:
        "Actividades y charlas para que los jóvenes crezcan en la fe y la amistad.",
      times: ["Sábado, 15:00 hs"],
      badge: "SÁB",
    },
  ];

  return (
    <section className="border-b border-line-section bg-surface-soft px-5 py-10">
      <h2 className="font-display text-[clamp(26px,6.5vw,32px)] font-medium leading-[1.2] text-ink [text-wrap:pretty]">
        Actividades y programas de la iglesia
      </h2>
      <p className="mb-[26px] mt-3.5 text-lg leading-[1.6] text-[hsl(24_18%_36%)]">
        Descubrí maneras significativas de conectar, crecer y servir. En nuestra
        familia MCYM hay un lugar para todos.
      </p>
      <div className="flex flex-col gap-3.5">
        {activities.map((activity) => (
          <article
            key={activity.title}
            className="flex gap-4 rounded-xl2 border border-line bg-surface-card p-5 transition-colors duration-200 hover:border-[#e3cba0]"
          >
            <span className="flex w-16 shrink-0 items-center justify-center whitespace-pre-line rounded-xl bg-surface-warm2 px-1 py-2 text-center text-[13px] font-bold tracking-[0.08em] text-[hsl(22_70%_36%)]">
              {activity.badge}
            </span>
            <div className="min-w-0 flex-1">
              <h3 className="font-display text-[22px] font-semibold text-ink">
                {activity.title}
              </h3>
              <p className="mb-3 mt-1.5 text-[17px] leading-[1.55] text-ink-muted [text-wrap:pretty]">
                {activity.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {activity.times.map((time) => (
                  <span
                    key={time}
                    className="rounded-full bg-warm-200 px-3 py-1.5 text-[15px] font-semibold text-[hsl(24_40%_28%)]"
                  >
                    {time}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ActivitiesSection;
