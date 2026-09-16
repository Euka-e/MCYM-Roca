# Handoff: Rediseño sitio informativo MCYM General Roca

## Overview
Rediseño mobile-first de la home informativa de la iglesia MCYM General Roca
(https://mcymroca.vercel.app, repo `Euka-e/MCYM-Roca`, Vite + React + TS + Tailwind + shadcn/ui).

Objetivos del rediseño:
1. **Mobile-first**: la mayoría del tráfico es móvil; el layout es una sola columna, sin grid de 2 columnas.
2. **Legibilidad para público adulto/mayor**: cuerpo de texto 17–19px, line-height 1.55–1.65, contraste alto, áreas táctiles ≥48px.
3. **Calidez y familia, sin sobrecarga**: paleta warm/church existente, tipografía serif cálida, tarjetas crema, cero degradados de texto y cero patrón de rayas de fondo.
4. **Arreglar el bloque de "última transmisión"**: hoy se renderizan **dos** botones de play superpuestos y cuando la miniatura no carga queda un placeholder confuso; además la píldora de estado flota fuera de la tarjeta (`-top-4 -right-4`) y se corta en móvil.
5. **Mantener todos los textos actuales** (copy idéntico al del repo, sin agregados salvo microtexto funcional indicado más abajo).

## About the Design Files
Los archivos `.dc.html` de este bundle son **referencias de diseño hechas en HTML**: prototipos que muestran
el look & feel y el comportamiento buscado, **no código de producción para copiar tal cual**.
Usan estilos inline y un pequeño runtime propio del entorno de diseño.

La tarea es **recrear estos diseños dentro del codebase existente** (React 18 + Vite + TypeScript +
TailwindCSS 3 + shadcn/ui + lucide-react + react-router-dom), usando sus patrones:
componentes en `src/components/`, tokens en `src/index.css` / `tailwind.config.ts`,
`Card`/`Button` de `src/components/ui/`, iconos de `lucide-react`.
No introducir librerías nuevas.

## Fidelity
**High-fidelity (hifi).** Colores, tipografías, tamaños, espaciados y radios son finales y están
listados con valores exactos. Recrear pixel-perfect con las utilidades de Tailwind del proyecto
(agregando los tokens nuevos indicados en *Design Tokens*).

---

## Screens / Views

### Pantalla única: Home (`/`, `src/pages/Index.tsx`)
Secciones en orden: **Header → Hero → Última reunión → Actividades → Contacto → Footer**.
(La sección de Eventos sigue existiendo en código pero `events = []` ⇒ no renderiza; no se rediseña.)

Contenedor de página:
- `max-width: 720px; margin: 0 auto;` fondo `#fffdf7`, `min-height:100vh`.
  En Tailwind: `mx-auto max-w-[720px] bg-[#fffdf7] min-h-screen`.
- Padding horizontal de todas las secciones: **20px** (`px-5`).
- Separador entre secciones: `border-bottom: 1px solid #f4e9d5`.

---

#### 1. Header (`src/components/Navigation.tsx`)
- **Purpose**: identidad + volver al inicio.
- **Layout**: `sticky top-0 z-20`, `display:flex; align-items:center; gap:12px; padding:14px 20px`.
- Fondo `rgba(255,253,247,.94)` + `backdrop-filter: blur(8px)`; borde inferior `1px solid #f1e4cd`.
  **Sin `shadow-lg`** (el actual tiene sombra fuerte; quitarla).
- **Logo**: `public/logo.png`, 40×40px, `display:block`, sin el `p-2` wrapper actual.
- **Nombre**: "MCYM General Roca" — Newsreader 600, 20px, `letter-spacing:-.01em`, color `hsl(24 40% 20%)`,
  una línea con `white-space:nowrap; overflow:hidden; text-overflow:ellipsis`.
- **Bajada**: "Iglesia" — Source Sans 3 400, 13px, `letter-spacing:.14em`, `text-transform:uppercase`, color `hsl(24 18% 46%)`.
- Sin menú de navegación (el array `navigation` está vacío hoy; eliminar el bloque muerto `hidden md:flex`).

#### 2. Hero (`src/components/Hero.tsx`)
- **Layout**: una columna. `padding: 40px 20px 36px`.
  Fondo `linear-gradient(180deg,#fff8ea 0%,#fffdf7 100%)`. **Eliminar** el `bg-[linear-gradient(45deg,...)]` de rayas.
- **Eyebrow** (microtexto nuevo, opcional): "General Roca · Río Negro" — 14px, `letter-spacing:.16em`, uppercase, `hsl(24 60% 40%)`, `margin-bottom:14px`.
- **H1**: Newsreader 500, `font-size: clamp(34px, 8.5vw, 46px)`, `line-height:1.1`, `letter-spacing:-.02em`,
  color `hsl(24 32% 18%)`, `text-wrap: pretty`.
  Texto: `Bienvenido a` + `<span style="display:block;color:hsl(22 78% 38%)">MCYM General Roca</span>`.
  **Sin `bg-clip-text`/degradado de texto** (era el mayor "olor a IA" y baja legibilidad).
- **Párrafo**: 19px / `line-height:1.65`, color `hsl(24 18% 32%)`, `margin-top:20px`, `text-wrap:pretty`.
  Texto idéntico al actual ("Una iglesia familiar donde crece la fe, …compasión.").
- **Tarjeta "Acompañanos este domingo"** (`margin-top:28px`):
  - Contenedor: `display:flex; align-items:stretch; border:1px solid #ecdcbe; border-radius:16px; background:#fff; overflow:hidden`.
  - Columna izquierda (badge de horario): `min-width:104px; padding:18px 20px; background:#fff6e4; border-right:1px solid #f1e4cd`,
    contenido centrado en columna:
    - "Domingo" — 13px, `letter-spacing:.14em`, uppercase, `hsl(24 40% 40%)`.
    - "10:00" — Newsreader 600, 30px, `line-height:1.1`, `hsl(22 78% 38%)`.
  - Columna derecha: `flex:1; padding:18px 20px; gap:4px`:
    - "Acompañanos este domingo" — Newsreader 400, 20px, `hsl(24 32% 18%)`.
    - "Reunión general · 10:00 hs" — 17px, `hsl(24 18% 40%)`.
- **El botón outline "Ver última reunión" del hero se elimina**: su función la cumple la tarjeta de la sección siguiente (evita CTA duplicado).

#### 3. Última reunión / En vivo (bloque nuevo, reemplaza la columna derecha del Hero actual)
- **Purpose**: ir al último culto o a la transmisión en vivo en YouTube.
- **Layout**: sección `padding:36px 20px`.
- **Fila de encabezado**: `flex; align-items:center; justify-content:space-between; gap:12px; margin-bottom:16px`.
  - **H2**: Newsreader 600, 26px, `hsl(24 32% 18%)`. Texto: `isLive ? "Estamos en vivo" : "Última reunión"`.
  - **Píldora de estado** (en flujo, ya NO `absolute`): `padding:7px 14px; border-radius:999px; font-size:14px; font-weight:600; white-space:nowrap`,
    con punto de 9px a la izquierda (`gap:8px`).
    - Offline: bg `#fdf2d9`, borde `#ecdcbe`, texto `hsl(24 26% 34%)`, punto `hsl(24 12% 62%)`, label `Fuera de línea`.
    - En vivo: bg `#eaf7ec`, borde `#bfe3c6`, texto `#166534`, punto `#16a34a`, label `En vivo`.
    - Cargando: mismos colores que offline, label `Cargando...`.
- **Tarjeta clickeable** (`<a target="_blank" rel="noopener noreferrer">` que envuelve todo):
  `display:block; border:1px solid #ecdcbe; border-radius:18px; overflow:hidden; background:#fff; text-decoration:none`.
  - **Media**: `position:relative; aspect-ratio:16/9; background:#fff3de`.
    - Si hay miniatura: `<img>` `position:absolute; inset:0; width:100%; height:100%; object-fit:cover`,
      `loading="lazy"`, `referrerPolicy="no-referrer"`, y **`onError` que marca la miniatura como fallida**.
    - Si no hay miniatura o falló: fondo `repeating-linear-gradient(135deg,#fff3de 0 14px,#ffeccd 14px 28px)`
      (en producción: imagen propia de la iglesia o color plano `#fff3de`; **no** texto de placeholder).
    - **Un solo botón de play**, centrado con `left:50%; top:50%; transform:translate(-50%,-50%)`:
      círculo 74×74px, `background:hsl(22 82% 42%)`, `box-shadow:0 10px 24px rgba(88,45,10,.32)`,
      triángulo blanco (o `<Play className="h-7 w-7 text-white ml-1" fill="currentColor" />`).
      Estado hover: `background:hsl(22 82% 36%)`, `transform: translate(-50%,-50%) scale(1.04)`, `transition: 200ms ease`.
    - Quitar el overlay `bg-black/10` y el bloque duplicado `pointer-events-none`.
  - **Barra de acción** (dentro de la misma tarjeta, `border-top:1px solid #f1e4cd`):
    `min-height:60px; padding:16px 20px; flex; align-items:center; justify-content:space-between`.
    - Label 18px / 600 / `hsl(24 32% 18%)`: `isLive ? "Ver en vivo" : "Ver última reunión"`.
    - Flecha `→` 18px, `hsl(22 78% 38%)`.
- **Nota al pie**: "Se abre en YouTube · @iglesiamcymroca7312" — 15px, `hsl(24 18% 46%)`, `margin:12px 2px 0`.
- **Estado loading**: la media muestra el fondo rayado/plano sin play y la píldora dice "Cargando...".

#### 4. Actividades (`src/components/ActivitiesSection.tsx`)
- **Layout**: sección `padding:40px 20px`, fondo `#fffaf0`. Lista vertical (`flex-col`, `gap:14px`) — **no grid de 3 columnas**.
- **H2**: Newsreader 500, `clamp(26px,6.5vw,32px)`, `line-height:1.2`, `hsl(24 32% 18%)`, `text-wrap:pretty`.
  Texto: "Actividades y programas de la iglesia".
- **Intro**: 18px / 1.6 / `hsl(24 18% 36%)`, `margin:14px 0 26px`.
  Texto: "Descubrí maneras significativas de conectar, crecer y servir. En nuestra familia MCYM hay un lugar para todos."
- **Card de actividad** (`<article>`): `display:flex; gap:16px; padding:20px; background:#fff; border:1px solid #ecdcbe; border-radius:16px`.
  - **Badge de día** (izquierda): `width:64px; padding:8px 0; background:#fff4e0; border-radius:12px`, centrado;
    texto 13px / 700 / `letter-spacing:.08em` / `hsl(22 70% 36%)` / `white-space:pre-line`.
    Valores: `MAR`, `VIE\nDOM`, `SÁB`, `SÁB`.
  - **Título**: Newsreader 600, 22px, `hsl(24 32% 18%)`.
  - **Descripción**: 17px / 1.55 / `hsl(24 18% 38%)`, `margin:6px 0 12px`, `text-wrap:pretty`.
  - **Chips de horario**: `flex-wrap; gap:8px`; cada chip `padding:6px 12px; border-radius:999px; background:#fdf2d9; font-size:15px; font-weight:600; color:hsl(24 40% 28%)`.
  - Hover (desktop): `border-color:#e3cba0`; sin cambio de sombra fuerte.
- **Contenido exacto (4 items, copy actual sin cambios)**:
  1. `Reunión de Oración` — badge `MAR` — "Un tiempo especial para buscar a Dios en oración y comunión con los hermanos." — `Martes, 19:00 hs`
  2. `Reuniónes Generales` — badge `VIE\nDOM` — "Acompañanos en adoración, comunión y un mensaje que edifica los viernes y domingos." — `Viernes, 19:30 hs`, `Domingos, 10:00 hs`
  3. `Escuelita Biblica` — badge `SÁB` — "Actividades divertidas y apropiadas para que los niños conozcan el amor de Dios." — `Sábados, 15:00 hs`
  4. `Reunión de Jóvenes` — badge `SÁB` — "Actividades y charlas para que los jóvenes crezcan en la fe y la amistad." — `Sábado, 18:00 hs`
- Los iconos lucide por actividad (`Church`, `Music`, `Baby`, `Users`) y el campo `color` dejan de usarse; el badge de día los reemplaza. Si se prefiere conservarlos, ubicarlos 20×20px junto al título, nunca en caja de 48px.

#### 5. Contacto (`src/components/ContactSection.tsx`)
- **Layout**: sección `padding:40px 20px`. Una columna, `gap:14px`. Se elimina el `grid lg:grid-cols-2` y el subtítulo "Información de contacto" (redundante con el H2).
- **H2** "Contactanos": Newsreader 500, `clamp(26px,6.5vw,32px)`, `hsl(24 32% 18%)`.
- **Intro**: 18px / 1.6 / `hsl(24 18% 36%)`, `margin:14px 0 26px`.
  Texto: "¡Nos encantaría escucharte! Si tenés preguntas o querés sumarte, no dudes en escribirnos."
- **Card Dirección**: `padding:20px; background:#fff; border:1px solid #ecdcbe; border-radius:16px`.
  - Etiqueta "Dirección": 14px, `letter-spacing:.14em`, uppercase, `hsl(24 40% 42%)`.
  - Texto: 19px / 1.5 / `hsl(24 32% 18%)` — `Cipolletti 860` + `<br>` + `General Roca, Rio Negro, Argentina`.
  - Link "Ver en el mapa →": 17px / 600, `min-height:48px`, `margin-top:8px`,
    href `https://maps.google.com/?q=Cipolletti+860,+General+Roca,+Rio+Negro`, `target="_blank"`.
- **Card Teléfono**: misma caja; etiqueta "Teléfono"; dos enlaces `tel:` como filas táctiles:
  `min-height:52px; padding:0 16px; border:1px solid #f1e4cd; border-radius:12px; background:#fff9ee; font-size:19px; font-weight:600`.
  - `(+54) 298 420-4886` → `tel:+542984204886`
  - `(+54) 298 473-1622` → `tel:+542984731622`

#### 6. Footer (`src/components/Footer.tsx`)
- `padding:36px 20px 28px`, fondo `hsl(24 26% 14%)`, texto `#fffdf5`. Una columna (se elimina el grid de 4 y el `md:ml-20`).
- Marca: `public/logo.png` 36×36 (reemplaza el icono `Church` sobre cuadro naranja) + "MCYM General Roca" (Newsreader 600, 20px) + "Iglesia" (13px, uppercase, `letter-spacing:.14em`, `rgba(255,253,245,.72)`).
- Párrafo 17px / 1.6 / `rgba(255,253,245,.86)`, `margin-top:20px`:
  "Una iglesia familiar donde crece la fe y todos son bienvenidos. Nos comprometemos a amar a Dios y servir a nuestro prójimo."
- Datos (17px, `rgba(255,253,245,.86)`, `gap:6px`, `margin-top:20px`):
  `Cipolletti 860, General Roca, Río Negro` / `(+54) 298 420-4886`.
- "Seguinos": Newsreader 600, 20px, `margin:28px 0 12px`.
- Botonera social: `grid-template-columns: repeat(auto-fit, minmax(96px,1fr)); gap:10px`;
  cada item `min-height:52px; border:1px solid rgba(255,253,245,.28); border-radius:12px; font-size:16px; font-weight:600; color:#fffdf5`,
  con **texto** (Facebook / Instagram / YouTube) más icono lucide opcional a la izquierda (no solo icono: mejora accesibilidad para adultos mayores).
  Hover: `background: rgba(255,253,245,.08)`.
  URLs: las mismas del código actual.
- Legal: `margin-top:28px; padding-top:20px; border-top:1px solid rgba(255,253,245,.2); font-size:15px; color:rgba(255,253,245,.66)`.
  Texto: "© 2026 MCYM General Roca. Todos los derechos reservados." (**actualizar el año actual dinámicamente**: `new Date().getFullYear()`).

---

## Interactions & Behavior
- **Tarjeta de transmisión**: toda la tarjeta es un solo enlace a `url ?? "https://www.youtube.com/@iglesiamcymroca7312/live"`, `target="_blank" rel="noopener noreferrer"`. Un único elemento focusable (no anidar links/botones).
- **Hover** (solo punteros finos, `@media (hover:hover)`): play +4% escala y oscurece; cards de actividad oscurecen el borde. Transiciones 200ms `ease-out`. Nada de `hover:shadow-xl`.
- **Focus visible**: `outline: 2px solid hsl(22 82% 42%); outline-offset: 2px` en todos los links/botones.
- **Miniatura**: `onError` → estado `thumbFailed` → fallback plano. Nunca dejar dos capas de play simultáneas.
- **Loading**: píldora "Cargando..."; media sin botón de play hasta resolver.
- **Sin API key** (`VITE_YT_CHANNEL_ID` / `VITE_YT_API_KEY` ausentes, caso real en producción hoy): la tarjeta debe mostrar fondo plano `#fff3de`, play y CTA "Ver última reunión" apuntando al canal `/live`. No mostrar error al usuario.
- **Responsive**: diseño fluido de 320px a 720px; ≥720px la página queda centrada a 720px con fondo de la página `#fefdf9`. No se requiere layout de escritorio a 2 columnas.
- **Áreas táctiles**: mínimo 48px de alto (52px en filas de teléfono y social).

## State Management
Reutilizar `useYouTubeLatestVideo(channelId, apiKey)` (`src/hooks/use-youtube.ts`) tal como está:
devuelve `{ isLive, url, title, loading, thumbnail, error }`.
Estado local nuevo en el componente de transmisión: `const [thumbFailed, setThumbFailed] = useState(false)`,
seteado en `onError` de la `<img>`; `showThumb = !!thumbnail && !thumbFailed`.
Sugerencia opcional (no bloqueante): mover la llamada al canal a un endpoint propio para no exponer la API key en el bundle.

## Design Tokens

Colores (todos derivados de la paleta `church`/`warm` ya existente en `tailwind.config.ts`):

| Token | Valor | Uso |
| --- | --- | --- |
| `page-bg` | `#fefdf9` (warm-50) | fondo fuera del contenedor |
| `surface` | `#fffdf7` | fondo del contenedor de página |
| `surface-card` | `#ffffff` | tarjetas |
| `surface-soft` | `#fffaf0` | sección Actividades |
| `surface-warm` | `#fff6e4` | badge de horario del hero |
| `surface-warm-2` | `#fff4e0` | badge de día de actividades |
| `surface-media` | `#fff3de` | fondo del área de video |
| `chip-bg` | `#fdf2d9` (warm-200) | chips de horario / píldora offline |
| `hero-top` | `#fff8ea` | inicio del degradado del hero |
| `border` | `#ecdcbe` | bordes de tarjeta |
| `border-soft` | `#f1e4cd` | divisores internos / header |
| `border-section` | `#f4e9d5` | separadores de sección |
| `ink` | `hsl(24 32% 18%)` | títulos y texto principal |
| `ink-body` | `hsl(24 18% 32%)` | párrafo del hero |
| `ink-muted` | `hsl(24 18% 38%)` – `hsl(24 18% 46%)` | descripciones y notas |
| `brand` | `hsl(22 78% 38%)` | acento de texto y flechas |
| `brand-strong` | `hsl(22 82% 42%)` | botón de play, focus ring |
| `brand-strong-hover` | `hsl(22 82% 36%)` | hover del play |
| `footer-bg` | `hsl(24 26% 14%)` | fondo del footer |
| `footer-ink` | `#fffdf5` | texto del footer |
| `live-*` | bg `#eaf7ec`, borde `#bfe3c6`, texto `#166534`, punto `#16a34a` | estado en vivo |
| `offline-dot` | `hsl(24 12% 62%)` | punto offline |

Tipografía (Google Fonts):
- **Newsreader** (serif) 400/500/600 → títulos, nombre de marca, horarios destacados.
- **Source Sans 3** 400/500/600/700 → cuerpo, etiquetas, chips, botones.
- Escala: 46/32/26/22/20/19/18/17/15/14/13px. `line-height`: títulos 1.1–1.2, cuerpo 1.5–1.65.
- Etiquetas uppercase: `letter-spacing:.14em` (o `.16em` en el eyebrow). Títulos: `-.01em` a `-.02em`.
- Base del `body`: Source Sans 3, `-webkit-font-smoothing: antialiased`.

Spacing: 4 / 6 / 8 / 10 / 12 / 14 / 16 / 20 / 26 / 28 / 36 / 40px. Padding horizontal global: 20px.

Radios: `12px` (badges, filas táctiles), `16px` (tarjetas), `18px` (tarjeta de transmisión), `999px` (chips y píldoras).

Sombras: solo una — `0 10px 24px rgba(88,45,10,.32)` en el botón de play. Nada de `shadow-2xl`/`shadow-lg`.
El contenedor de página usa `box-shadow: 0 0 0 1px #f6ecd8` (hairline, no sombra difusa).

## Assets
- `public/logo.png` — logo existente del repo (19KB). Se usa en header (40px) y footer (36px).
- `public/aniversary.jpg` — imagen de evento existente; **no se usa** en este rediseño (la sección Eventos está vacía).
- Iconos: `lucide-react`, ya en dependencias (`Play`, `MapPin`, `Phone`, `Facebook`, `Instagram`, `Youtube`).
- Falta y se recomienda pedir: 1 foto real de la congregación (horizontal, ≥1600px) para el fondo del área de video cuando no hay miniatura.
- Fuentes: agregar `<link>` de Google Fonts a `index.html` (o self-host en `public/fonts`).

## Files
- `MCYM Rediseño.dc.html` — prototipo del rediseño (referencia visual principal).
- `MCYM Actual (recreación).dc.html` — recreación fiel de la home actual, para comparar antes/después.
- `WORK_ORDERS.md` — tareas listas para ejecutar (una por PR).
- `screenshots/01..05-pantalla.png` — capturas del rediseño de arriba hacia abajo.
- `public/logo.png` — asset usado en el diseño.
