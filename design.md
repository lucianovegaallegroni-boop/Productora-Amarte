# Productora Amarte — Sistema de Diseño

> Basado en el **Manual de Marca Productora Amarte 2026**

---

## Identidad de Marca

**Nombre:** Productora Amarte  
**Tipo:** Productora audiovisual / cinematográfica independiente  
**Estética:** Minimalista, limpia, alto contraste con acentos rojos  
**Tono:** Profesional, artístico, moderno  

---

## Logo

**Archivo:** `6.png`  
**Descripción:** Monograma "PA" en negro bold con un punto/círculo rojo en la esquina superior derecha de la "A", acompañado del texto "PRODUCTORA AMARTE" debajo en tipografía sans-serif condensada.

### Variantes del Logo
| Variante | Fondo | Colores del Logo |
|---|---|---|
| Principal | Claro (gris/blanco) | Negro + punto rojo |
| Invertido | Oscuro (negro) | Blanco + punto rojo |
| Invertido alternativo | Oscuro (negro) | Blanco + punto negro |

### Uso del Logo
- Mantener siempre el área de respeto alrededor del logo
- No distorsionar, rotar ni alterar los colores fuera de las variantes definidas
- El punto rojo es un elemento distintivo de la marca y debe conservarse en la variante principal

---

## Paleta de Colores

### Colores de Marca
| Color | Hex | Nombre | Uso |
|---|---|---|---|
| ⚪ Blanco | `#ffffff` | Blanco | Fondos claros, texto sobre fondos oscuros, logo invertido |
| ⚫ Negro | `#000000` | Negro | Texto principal, fondos oscuros, logo principal |
| 🔴 Rojo | `#ff0000` | Rojo marca | Acento de marca, punto del logo, CTAs, elementos destacados |

### Colores Extendidos (derivados del manual)
| Token | Hex | Uso |
|---|---|---|
| `background-light` | `#c8c8c8` | Fondo gris claro (como en el manual de marca) |
| `background-dark` | `#000000` | Fondo oscuro |
| `background-white` | `#ffffff` | Fondo blanco |
| `text-primary` | `#000000` | Texto principal sobre fondos claros |
| `text-inverse` | `#ffffff` | Texto sobre fondos oscuros |
| `accent` | `#ff0000` | Acentos, botones, links activos, hover states |
| `accent-hover` | `#cc0000` | Hover sobre elementos rojos |
| `surface-gray` | `#c8c8c8` | Superficies neutras |
| `border` | `#333333` | Bordes y separadores |
| `border-light` | `#e0e0e0` | Bordes sutiles sobre fondos claros |

---

## Tipografía

### Familias Tipográficas
| Rol | Fuente | Uso |
|---|---|---|
| Principal / Títulos / UI | **Roboto Condensed** | Títulos, subtítulos, navegación, botones, textos de cuerpo |
| Secundaria / Display | **Playfair Display** | Headlines hero, citas destacadas, elementos editoriales |

### Escala Tipográfica
| Token | Tamaño | Line Height | Weight | Fuente |
|---|---|---|---|---|
| `display-hero` | 72px | 80px | 900 | Roboto Condensed |
| `display-hero-mobile` | 40px | 44px | 900 | Roboto Condensed |
| `headline-lg` | 48px | 56px | 700 | Roboto Condensed |
| `headline-lg-mobile` | 32px | 38px | 700 | Roboto Condensed |
| `headline-md` | 32px | 40px | 700 | Roboto Condensed |
| `headline-md-mobile` | 24px | 30px | 700 | Roboto Condensed |
| `headline-sm` | 20px | 28px | 600 | Roboto Condensed |
| `headline-editorial` | 56px | 64px | 400 | Playfair Display |
| `headline-editorial-mobile` | 36px | 42px | 400 | Playfair Display |
| `body-lg` | 18px | 28px | 400 | Roboto Condensed |
| `body-md` | 15px | 24px | 400 | Roboto Condensed |
| `body-sm` | 13px | 20px | 400 | Roboto Condensed |
| `label-btn` | 14px | 18px | 700 | Roboto Condensed |
| `label-meta` | 12px | 16px | 400 | Roboto Condensed |

---

## Espaciado

| Token | Valor | Uso |
|---|---|---|
| `space-2xs` | 0.25rem (4px) | Micro espaciado |
| `space-xs` | 0.5rem (8px) | Espaciado extra pequeño |
| `space-sm` | 0.75rem (12px) | Espaciado pequeño |
| `space-md` | 1rem (16px) | Espaciado medio |
| `space-lg` | 1.5rem (24px) | Espaciado grande |
| `space-xl` | 2rem (32px) | Espaciado extra grande |
| `space-2xl` | 3rem (48px) | Secciones |
| `space-3xl` | 4.5rem (72px) | Secciones grandes |
| `space-4xl` | 6rem (96px) | Secciones extra grandes |
| `space-section` | 8rem (128px) | Separación de secciones |
| `margin-mobile` | 1.25rem (20px) | Margen lateral móvil |
| `margin-desktop` | 4rem (64px) | Margen lateral desktop |
| `gutter` | 1.5rem (24px) | Gutter de grid |

---

## Border Radius

| Token | Valor |
|---|---|
| `DEFAULT` | 0.125rem (2px) |
| `lg` | 0.25rem (4px) |
| `xl` | 0.5rem (8px) |
| `full` | 9999px |

---

## Elementos Gráficos de Marca

### Círculos Decorativos
El manual de marca establece el uso de **círculos decorativos** como elementos gráficos recurrentes:
- **Círculo rojo** (`#ff0000`): Posicionado parcialmente visible en los bordes de las composiciones
- **Círculo negro** (`#000000`): Complementario, usado como contrapeso visual
- Fondo general gris claro (`#c8c8c8`) para las composiciones de marca

Estos elementos deben usarse de forma sutil en el diseño web como decoración de secciones.

---

## Estructura de Páginas

### 1. `index.html` — Inicio
- Hero con showreel cinematográfico
- Métricas de impacto editorial
- Portafolio audiovisual con filtros (Ficción, Spots, Videoclips, Documentales, Fashion)
- Clientes y marcas
- CTA / Manifiesto editorial

### 2. `mision-y-vision.html` — Misión y Visión
- Filosofía del estudio
- Valores y principios creativos
- Equipo directivo / creativos clave

### 3. `servicios.html` — Servicios
- Catálogo de servicios de producción
- Preproducción, producción, postproducción
- Equipamiento técnico y formatos

### 4. `contacto.html` — Contáctanos
- Formulario de contacto
- Información de ubicación
- Redes sociales y canales

---

## Elementos de UI Recurrentes

### Header (Fijo)
- Logo (`6.png`) + nombre de marca
- Navegación desktop con active state (rojo)
- Botón CTA "Iniciar Proyecto" (fondo rojo `#ff0000`, texto blanco)
- Backdrop blur con sombra sutil

### Footer
- Logo y descripción
- Links a redes sociales
- Indicador de REC en vivo (punto rojo pulsante — coherente con la marca)
- Copyright

### Botones
| Tipo | Fondo | Texto | Borde |
|---|---|---|---|
| Primario | `#ff0000` | `#ffffff` | ninguno |
| Primario Hover | `#cc0000` | `#ffffff` | ninguno |
| Secundario | transparente | `#000000` | `#000000` 1px |
| Secundario Hover | `#000000` | `#ffffff` | `#000000` 1px |
| Ghost | transparente | `#ff0000` | ninguno |

### Efectos
- Hover: scale, color transitions, shadow
- Backdrop blur en overlays
- Transiciones suaves (200ms-400ms)
- Círculos decorativos rojo/negro en secciones clave

---

## Fuentes Externas

```html
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..700;1,400..700&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>

<!-- Google Material Symbols -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>

<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com"></script>
```
