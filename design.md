# Productora Amarte — Sistema de Diseño

## Identidad de Marca

**Nombre:** Productora Amarte  
**Tipo:** Productora audiovisual / cinematográfica independiente  
**Estética:** Cine oscuro, lujo, tungsteno cálido, analógico premium  
**Tono:** Profesional, artístico, editorial cinematográfico  

---

## Paleta de Colores (Material Design 3 — Modo Oscuro)

### Primarios (Tungsteno/Ámbar)
| Token | Hex | Uso |
|---|---|---|
| `primary` | `#ffc664` | Acentos principales, botones, links activos |
| `primary-container` | `#e5a93b` | Botones hover, contenedores primarios |
| `on-primary` | `#432c00` | Texto sobre fondos primarios |
| `on-primary-container` | `#5e4000` | Texto sobre contenedores primarios |
| `primary-fixed` | `#ffdeac` | Variante fija clara |
| `primary-fixed-dim` | `#fabc4c` | Variante fija atenuada |
| `inverse-primary` | `#7e5700` | Primario invertido |

### Superficies (Oscuros)
| Token | Hex | Uso |
|---|---|---|
| `background` | `#131316` | Fondo principal de la app |
| `surface` | `#131316` | Superficies base |
| `surface-dim` | `#131316` | Superficies atenuadas |
| `surface-bright` | `#39393c` | Superficies brillantes |
| `surface-container-lowest` | `#0e0e11` | Contenedor más oscuro |
| `surface-container-low` | `#1b1b1e` | Contenedor oscuro |
| `surface-container` | `#1f1f22` | Contenedor base |
| `surface-container-high` | `#2a2a2d` | Contenedor alto |
| `surface-container-highest` | `#353438` | Contenedor más claro |
| `surface-variant` | `#353438` | Variante de superficie |
| `surface-tint` | `#fabc4c` | Tinte de superficie |

### Texto
| Token | Hex | Uso |
|---|---|---|
| `on-surface` | `#e5e1e6` | Texto principal sobre superficies |
| `on-surface-variant` | `#d4c4af` | Texto secundario (beige cálido) |
| `on-background` | `#e5e1e6` | Texto sobre fondo |

### Secundarios (Neutrales)
| Token | Hex | Uso |
|---|---|---|
| `secondary` | `#c6c6c8` | Elementos secundarios |
| `secondary-container` | `#454749` | Contenedores secundarios |
| `on-secondary` | `#2f3132` | Texto sobre secundario |

### Terciarios (Azul-gris)
| Token | Hex | Uso |
|---|---|---|
| `tertiary` | `#cccfdb` | Elementos terciarios |
| `tertiary-container` | `#b1b3bf` | Contenedores terciarios |
| `on-tertiary` | `#2d303a` | Texto sobre terciario |

### Error
| Token | Hex | Uso |
|---|---|---|
| `error` | `#ffb4ab` | Mensajes de error |
| `error-container` | `#93000a` | Contenedor de error |
| `on-error` | `#690005` | Texto sobre error |

### Outline
| Token | Hex | Uso |
|---|---|---|
| `outline` | `#9d8f7c` | Bordes y separadores |
| `outline-variant` | `#504535` | Bordes sutiles |

---

## Tipografía

### Familias Tipográficas
| Rol | Fuente | Uso |
|---|---|---|
| Display / Headlines | **Playfair Display** | Títulos hero, encabezados principales |
| Body / Labels | **Plus Jakarta Sans** | Textos de cuerpo, subtítulos, botones |
| Meta / Monospace | **Space Mono** | Timecodes, metadatos técnicos, etiquetas |

### Escala Tipográfica
| Token | Tamaño | Line Height | Letter Spacing | Weight | Fuente |
|---|---|---|---|---|---|
| `display-hero` | 84px | 92px | -0.03em | 600 | Playfair Display |
| `display-hero-mobile` | 44px | 48px | -0.02em | 600 | Playfair Display |
| `headline-lg` | 56px | 64px | -0.02em | 500 | Playfair Display |
| `headline-lg-mobile` | 32px | 38px | -0.01em | 500 | Playfair Display |
| `headline-md` | 36px | 44px | -0.01em | 400 | Playfair Display |
| `headline-md-mobile` | 26px | 32px | 0em | 400 | Playfair Display |
| `headline-sm` | 20px | 28px | -0.01em | 600 | Plus Jakarta Sans |
| `body-lg` | 18px | 28px | 0.01em | 300 | Plus Jakarta Sans |
| `body-md` | 15px | 24px | 0.01em | 400 | Plus Jakarta Sans |
| `body-sm` | 13px | 20px | 0.015em | 400 | Plus Jakarta Sans |
| `label-btn` | 13px | 16px | 0.06em | 600 | Plus Jakarta Sans |
| `label-meta` | 12px | 16px | 0.12em | 400 | Space Mono |
| `label-timecode` | 14px | 18px | 0.08em | 700 | Space Mono |

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
| `full` | 0.75rem (12px) |

---

## Estructura de Páginas

### 1. `index.html` — Inicio
- Hero con showreel cinematográfico (aspect ratio 2.39:1 CinemaScope)
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
- Logo + nombre de marca
- Navegación desktop con active state
- Botón CTA "Iniciar Proyecto"
- Avatar de usuario
- Backdrop blur con sombra sutil

### Footer
- Logo y descripción
- Links a redes sociales
- Indicador de REC en vivo (estético)
- Copyright

### Elementos Cinematográficos
- Timecodes (TC 01:14:22:08)
- Badges técnicos (ARRI 4K HDR, 2.39:1 SCOPE, DOLBY ATMOS)
- Indicadores de coordenadas (LAT/LON)
- Formato de película (35MM, LARGE FORMAT RAW)
- Claqueta de producción (SLATE, ROLL, TAKE)
- Punto pulsante de REC
- Barra de progreso simulada

### Efectos
- Hover: scale, color transitions, shadow glow
- Backdrop blur en overlays
- Gradientes de tungsteno/ámbar difusos
- Film grain implícito via imágenes
- Transiciones suaves (200ms-700ms)

---

## Fuentes Externas

```html
<!-- Google Material Symbols -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>

<!-- Google Fonts -->
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..700;1,400..700&family=Plus+Jakarta+Sans:ital,wght@0,300..700;1,300..700&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet"/>

<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com"></script>
```
