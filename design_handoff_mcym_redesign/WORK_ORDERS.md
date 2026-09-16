# Work Orders — Rediseño MCYM General Roca

Repo: `Euka-e/MCYM-Roca` · branch base: `main` · stack: Vite + React 18 + TS + Tailwind 3 + shadcn/ui + lucide-react.
Referencia visual: `MCYM Rediseño.dc.html` y `screenshots/`. Todos los valores exactos están en `README.md`.

Reglas generales para todas las órdenes:
- **No cambiar ningún texto visible** salvo donde la orden lo indique explícitamente.
- Mobile-first: escribir las clases base para móvil; usar breakpoints solo si la orden lo pide.
- No agregar dependencias. No crear un sistema de diseño nuevo: extender `tailwind.config.ts`.
- Áreas táctiles ≥48px. Focus visible en todo elemento interactivo.
- **Alcance de archivos**: tocar únicamente los archivos listados en "Archivos" de cada orden. Si al implementar una orden parece necesario tocar un archivo no listado, detenerse y no aplicar ese cambio ahí — probablemente ya está cubierto por otra WO (ver ejecución sugerida) o hay que reportarlo en el PR en vez de improvisar.
- **Una rama y un PR por WO**, desde `main` (`wo-0X-slug`). No mezclar cambios de otras WOs en el mismo PR. No pushear directo a `main`.
- **Gates al terminar cada orden**:
  - Automáticos (bloqueantes): `npm run typecheck` y `npm run build` sin errores.
  - Manuales (dejar constancia en la descripción del PR, no asumir que el build los cubre): revisión visual a 375px, 414px y 1280px; y **cero imports/variables sin uso** — `tsconfig.json` tiene `noUnusedLocals`/`noUnusedParameters` en `false`, así que `tsc`/`vite build` **no** fallan por imports muertos. Verificar a mano (o con `npm run format.fix` + lectura del diff) cada import listado para eliminar en la orden.
- Ninguna orden requiere decisiones nuevas del cliente a mitad de ejecución: lo que no está resuelto en el texto queda en "Fuera de alcance" al final de este documento y no se toca.

Orden de ejecución sugerido: **WO-01 → WO-02 → WO-03 → WO-04 → WO-05 → WO-06 → WO-07 → WO-08 → WO-09**.

---

## WO-01 — Tokens de diseño y tipografía
**Archivos**: `tailwind.config.ts`, `src/index.css`, `index.html`

1. Agregar las fuentes: en `index.html`, dentro de `<head>`:
   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600&family=Source+Sans+3:wght@400;500;600;700&display=swap" rel="stylesheet">
   ```
2. En `tailwind.config.ts` → `theme.extend`:
   ```ts
   fontFamily: {
     sans: ['"Source Sans 3"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
     display: ['Newsreader', 'Georgia', 'serif'],
   },
   colors: {
     surface: { DEFAULT: '#fffdf7', card: '#ffffff', soft: '#fffaf0', warm: '#fff6e4', warm2: '#fff4e0', media: '#fff3de' },
     line: { DEFAULT: '#ecdcbe', soft: '#f1e4cd', section: '#f4e9d5', hair: '#f6ecd8' },
     ink: { DEFAULT: 'hsl(24 32% 18%)', body: 'hsl(24 18% 32%)', muted: 'hsl(24 18% 38%)', soft: 'hsl(24 18% 46%)' },
     brand: { DEFAULT: 'hsl(22 78% 38%)', strong: 'hsl(22 82% 42%)', hover: 'hsl(22 82% 36%)' },
   },
   borderRadius: { xl2: '16px', xl3: '18px' },
   boxShadow: { play: '0 10px 24px rgba(88,45,10,.32)', hair: '0 0 0 1px #f6ecd8' },
   ```
   Conservar los tokens `church` y `warm` existentes (no borrar nada).
3. En `src/index.css`, `@layer base`: `body { @apply font-sans antialiased; }` y anillo de foco global:
   ```css
   :focus-visible { outline: 2px solid hsl(22 82% 42%); outline-offset: 2px; }
   ```
4. Cambiar `--ring` a `22 82% 42%` en `:root` para que shadcn use el acento correcto.

**DoD**: las fuentes cargan (verificar en DevTools → Network/Computed), `font-display` disponible como clase, sin regresiones visuales inesperadas.

---

## WO-02 — Shell de página en la home
**Archivos**: `src/pages/Index.tsx`

1. Envolver el contenido en el contenedor mobile-first:
   ```tsx
   <div className="min-h-screen bg-[#fefdf9]">
     <div className="mx-auto min-h-screen max-w-[720px] bg-surface shadow-hair">
       <Navigation />
       <main>
         <Hero />
         <LatestStream />      {/* nuevo, WO-04 */}
         <ActivitiesSection />
         <EventsSection />
         <ContactSection />
       </main>
       <Footer />
     </div>
   </div>
   ```
El padding `px-5` (20px) y la eliminación de `max-w-7xl mx-auto` / `sm:px-6 lg:px-8` en Navigation, Hero, ActivitiesSection, EventsSection, ContactSection y Footer **no se hacen aquí**: cada una de esas secciones ya trae su propio markup con `px-5` en WO-03/05/06/07/08. Esta orden solo cambia el shell de `Index.tsx`; no editar los componentes de sección.

**DoD**: a 1280px la página se ve centrada, 720px de ancho, sin scroll horizontal; a 320px no hay overflow. (El resto de las secciones seguirá con su padding viejo hasta ejecutar sus propias WOs — esperado, no es una regresión de esta orden.)

---

## WO-03 — Header simplificado
**Archivos**: `src/components/Navigation.tsx`

1. Eliminar el estado `isOpen`, el array vacío `navigation`, `useLocation`, `isActive`, el bloque `hidden md:flex`, y los imports sin uso (`Church`, `Calendar`, `Users`, `Mail`, `Heart`, `BookOpen`, `Button`, `cn`).
2. Nuevo markup:
   ```tsx
   <header className="sticky top-0 z-20 flex items-center gap-3 border-b border-line-soft bg-[rgba(255,253,247,.94)] px-5 py-3.5 backdrop-blur-md">
     <Link to="/" className="flex items-center gap-3 min-w-0">
       <img src="/logo.png" alt="MCYM General Roca" className="h-10 w-10 shrink-0" />
       <span className="flex min-w-0 flex-col">
         <span className="truncate font-display text-xl font-semibold tracking-[-0.01em] text-[hsl(24_40%_20%)]">MCYM General Roca</span>
         <span className="text-[13px] uppercase tracking-[0.14em] text-ink-soft">Iglesia</span>
       </span>
     </Link>
   </header>
   ```
3. Quitar `shadow-lg`.

**DoD**: header sticky sin sombra, logo 40px, nombre en una línea con ellipsis a 320px.

---

## WO-04 — Rehacer el bloque de transmisión (fix del doble play y la miniatura) ⚠️ prioridad
**Archivos**: nuevo `src/components/LatestStream.tsx`, `src/components/Hero.tsx`, `src/pages/Index.tsx`

Problemas actuales a corregir (`Hero.tsx`):
- Se renderizan **dos** botones de play: el del bloque `else` (sin miniatura) y el overlay `pointer-events-none` que se dibuja siempre.
- La píldora de estado está `absolute -top-4 -right-4` y se recorta/solapa en móvil.
- El overlay `bg-black/10` y el degradado `from-church-100 to-warm-200` ensucian la miniatura.

Implementación nueva (`LatestStream.tsx`):
```tsx
const { isLive, url, loading, thumbnail, title } = useYouTubeLatestVideo(
  import.meta.env.VITE_YT_CHANNEL_ID, import.meta.env.VITE_YT_API_KEY);
const [thumbFailed, setThumbFailed] = useState(false);
const showThumb = !!thumbnail && !thumbFailed;
const href = url ?? "https://www.youtube.com/@iglesiamcymroca7312/live";
```
- Sección `px-5 py-9` (36px).
- Fila de encabezado: `<h2 className="font-display text-[26px] font-semibold text-ink">{isLive ? "Estamos en vivo" : "Última reunión"}</h2>` + píldora de estado en flujo (colores en README §Design Tokens; label `loading ? "Cargando..." : isLive ? "En vivo" : "Fuera de línea"`).
- Tarjeta: **un único `<a>`** con `block overflow-hidden rounded-[18px] border border-line bg-surface-card`.
  - Media `relative aspect-video bg-surface-media`:
    - `showThumb` → `<img src={thumbnail} alt={title ?? "Última reunión"} loading="lazy" referrerPolicy="no-referrer" onError={() => setThumbFailed(true)} className="absolute inset-0 h-full w-full object-cover" />`
    - si no → fondo plano `bg-surface-media` (sin texto, sin degradado).
    - **exactamente un** botón de play: `absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-[74px] w-[74px] items-center justify-center rounded-full bg-brand-strong shadow-play transition-transform duration-200 group-hover:scale-105` con `<Play className="ml-1 h-7 w-7 text-white" fill="currentColor" />`. Ocultarlo mientras `loading`.
  - Barra de acción: `flex min-h-[60px] items-center justify-between gap-4 border-t border-line-soft px-5 py-4`, label 18px/600 `{isLive ? "Ver en vivo" : "Ver última reunión"}` + `→` color `brand`.
- Nota: `<p className="mt-3 px-0.5 text-[15px] text-ink-soft">Se abre en YouTube · @iglesiamcymroca7312</p>`.
- En `Hero.tsx`: eliminar toda la columna derecha (thumbnail + píldora) y el `Button` "Ver última reunión". Quitar imports que queden sin uso.
- Montar `<LatestStream />` entre `<Hero />` y `<ActivitiesSection />`.

**DoD**: en los 4 estados (con miniatura / sin miniatura / miniatura con 404 / loading) se ve **un solo** botón de play y ninguna caja vacía; la píldora nunca se corta; un solo `Tab` stop por tarjeta; click abre YouTube en pestaña nueva.

**Test manual del 404**: forzar `thumbnail = "https://i.ytimg.com/vi/xxxxxxx/hqdefault.jpg"` y confirmar el fallback plano con el play.

---

## WO-05 — Hero mobile-first
**Archivos**: `src/components/Hero.tsx`

1. Sección: `relative px-5 pb-9 pt-10 border-b border-line-section bg-[linear-gradient(180deg,#fff8ea_0%,#fffdf7_100%)]`. **Eliminar** el div de rayas de 40px.
2. Eyebrow: `<p className="mb-3.5 text-sm uppercase tracking-[0.16em] text-[hsl(24_60%_40%)]">General Roca · Río Negro</p>`.
3. H1 sin degradado de texto:
   ```tsx
   <h1 className="font-display text-[clamp(34px,8.5vw,46px)] font-medium leading-[1.1] tracking-[-0.02em] text-ink [text-wrap:pretty]">
     Bienvenido a
     <span className="block text-brand">MCYM General Roca</span>
   </h1>
   ```
4. Párrafo: `mt-5 text-[19px] leading-[1.65] text-ink-body [text-wrap:pretty]` — texto sin cambios.
5. Tarjeta de domingo (reemplaza la caja `bg-white/60`): dos columnas internas según README §2 (badge `Domingo / 10:00` + `Acompañanos este domingo` / `Reunión general · 10:00 hs`). No usar `backdrop-blur`.

**DoD**: H1 legible sin degradado; a 320px el título no desborda; la tarjeta de domingo no rompe en dos líneas raras.

---

## WO-06 — Actividades como lista con badge de día
**Archivos**: `src/components/ActivitiesSection.tsx`

1. Sección `px-5 py-10 border-b border-line-section bg-surface-soft`; lista `flex flex-col gap-3.5` (sin `grid md:grid-cols-2 lg:grid-cols-3`).
2. En el array de datos: quitar `icon` y `color`, agregar `badge`: `"MAR"`, `"VIE\nDOM"`, `"SÁB"`, `"SÁB"` (en ese orden). No tocar `title`, `description` ni `times`.
3. Card según README §4 (badge 64px `whitespace-pre-line`, título Newsreader 22px, descripción 17px, chips de horario 15px).
4. Reemplazar `Card`/`CardHeader`/`CardContent` de shadcn por un `<article>` simple si el padding de shadcn (24px) estorba; si se usan, sobreescribir a `p-5`.
5. Hover solo de borde: `hover:border-[#e3cba0] transition-colors duration-200`.
6. Eliminar imports sin uso: `Users`, `Music`, `Baby`, `Church` (ya no se usan como iconos de actividad). Si se optó por `<article>` en el punto 4, eliminar también los imports de `Card`, `CardHeader`, `CardContent`, `CardDescription`, `CardTitle` que queden sin uso.

**DoD**: 4 tarjetas en columna, badges alineados, chips con todos los horarios actuales, sin iconos huérfanos, sin imports sin uso.

---

## WO-07 — Contacto accionable
**Archivos**: `src/components/ContactSection.tsx`

1. Sección `px-5 py-10 border-b border-line-section`; una columna `flex flex-col gap-3.5`. Eliminar `grid lg:grid-cols-2`, el `<h3>Información de contacto</h3>` y el formulario comentado (borrar el bloque muerto).
2. Card Dirección + link "Ver en el mapa →" (`https://maps.google.com/?q=Cipolletti+860,+General+Roca,+Rio+Negro`, `target="_blank" rel="noopener noreferrer"`, `min-h-[48px]`). Texto nuevo permitido: solo el label del link.
3. Card Teléfono con los dos números como `<a href="tel:...">` de `min-h-[52px]` (ver README §5).
4. Iconos `MapPin`/`Phone` opcionales a 18px junto a la etiqueta; eliminar imports sin uso (`Mail`, `Clock`, `Input`, `Textarea`, `Label`, `Button`, `CardHeader`, `CardTitle`, `CardDescription` — estos tres últimos solo se usaban dentro del formulario comentado que se borra en el punto 1).

**DoD**: tocar un número abre el marcador en móvil; tocar la dirección abre Maps; sin inputs sin funcionalidad.

---

## WO-08 — Footer de una columna
**Archivos**: `src/components/Footer.tsx`

1. `footer` → `bg-[hsl(24_26%_14%)] px-5 pb-7 pt-9 text-[#fffdf5]`; contenido en una columna (eliminar `grid lg:grid-cols-4 md:grid-cols-2` y `md:ml-20`).
2. Marca con `<img src="/logo.png" className="h-9 w-9" />` en vez del icono `Church` sobre cuadro naranja.
3. Botonera social con **texto + icono**: `grid grid-cols-[repeat(auto-fit,minmax(96px,1fr))] gap-2.5`, cada item `min-h-[52px] rounded-xl border border-[rgba(255,253,245,.28)] text-base font-semibold hover:bg-[rgba(255,253,245,.08)]`. Mantener URLs y `aria-label` actuales.
4. Año dinámico: `© {new Date().getFullYear()} MCYM General Roca. Todos los derechos reservados.`
5. Eliminar imports sin uso (`Input`, `Mail`, `Church`) y el bloque de links legales comentado.

**DoD**: footer sin columnas vacías, botones sociales con etiqueta legible, año correcto.

---

## WO-09 — Accesibilidad, rendimiento y limpieza
**Archivos**: varios

1. Contraste: verificar ≥4.5:1 en todo texto (cuerpo `ink-body`/`ink-muted` sobre crema, footer sobre `hsl(24 26% 14%)`).
2. Un solo `<h1>` (hero); jerarquía `h2` por sección.
3. `alt` correcto en el logo del header; `alt=""` en el del footer (decorativo).
4. Respetar `prefers-reduced-motion`: desactivar la escala del play.
5. Borrar código muerto: `EventsSection` puede quedar, pero eliminar los imports y bloques comentados de formularios/rutas legales; correr `npm run format.fix`.
6. **No tocar `App.tsx`**: las rutas `/activities`, `/events`, `/sermons`, `/prayer`, `/contact` quedan como están (ver "Fuera de alcance").
7. Sugerencia de rendimiento, no bloqueante: el `<img>` de miniatura puede pasar a `loading="eager"` + `fetchpriority="high"` si entra en el primer viewport, para ayudar al LCP. Medir Lighthouse móvil queda fuera del alcance de esta orden (requiere el sitio desplegado y una revisión manual del cliente/QA, no algo que el agente pueda verificar en el sandbox).

**DoD**: sin warnings de consola, sin imports sin uso, contraste verificado, build limpio.

---

## Fuera de alcance (no tocar en este rediseño)
- **Rutas `/activities`, `/events`, `/sermons`, `/prayer`, `/contact` en `App.tsx`**: hoy no son alcanzables desde la UI (sin links de navegación). Quedan como están — no eliminarlas ni agregarles navegación. Es una decisión pendiente con el cliente sobre el destino de esas páginas, ajena a este rediseño de la home; se resuelve en un trabajo aparte, no dentro de estas WOs.
- Foto real de la congregación para el fallback del área de video.
- Mover la llamada a la API de YouTube a un backend/serverless para no exponer `VITE_YT_API_KEY` en el bundle.
- Sección de Eventos (hoy vacía) — el componente puede quedar en el árbol tal cual, no se rediseña.
- Medición de Lighthouse / Core Web Vitals en producción — requiere el sitio desplegado y queda para QA manual del cliente, no para el agente que ejecuta las WOs.
