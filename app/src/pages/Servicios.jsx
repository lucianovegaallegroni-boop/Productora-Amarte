import React from 'react';
import { Link } from 'react-router-dom';

export default function Servicios() {
  return (
    <main className="w-full pt-20 bg-background min-h-screen">
      <div className="flex flex-col w-full">

        {/* HERO */}
        <section className="relative w-full overflow-hidden pb-space-2xl md:pb-space-4xl">
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[340px] bg-primary/5 rounded-full blur-[140px] pointer-events-none -z-10"></div>
          <div className="absolute -left-20 bottom-1/4 w-40 h-40 rounded-full bg-primary/10 pointer-events-none" />
          <div className="absolute -right-16 top-0 w-48 h-48 rounded-full bg-black/5 pointer-events-none" />
          
          <div className="w-full px-margin-mobile md:px-margin-desktop pt-space-lg md:pt-space-2xl">
            <div className="flex flex-wrap items-center justify-between gap-space-sm pb-space-lg text-on-surface-variant">
              <div className="flex items-center gap-space-xs font-body text-xs uppercase tracking-widest text-primary">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
                <span>CATÁLOGO DE PRODUCCIÓN</span>
              </div>
              <div className="hidden sm:flex items-center gap-space-lg font-body text-sm font-bold text-on-surface-variant/80">
                <span>FULL SERVICE</span>
                <span className="text-surface-variant">|</span>
                <span>END-TO-END PRODUCTION</span>
              </div>
            </div>
            <div className="max-w-6xl space-y-space-md">
              <h1 className="font-display text-4xl font-black md:text-7xl text-on-surface leading-tight tracking-tight uppercase">
                Servicios de producción de <span className="italic font-normal text-primary">precisión</span> cinematográfica.
              </h1>
              <p className="font-body text-lg text-on-surface-variant max-w-3xl pt-space-xs">
                Ofrecemos un ecosistema completo de producción audiovisual: desde la primera idea hasta la entrega final en sala de cine o pantalla digital. Cada etapa está diseñada para garantizar excelencia sin compromisos.
              </p>
            </div>
          </div>
        </section>

        {/* SERVICIOS PRINCIPALES (3 Pilares) */}
        <section className="w-full bg-surface-low py-space-3xl md:py-space-section">
          <div className="w-full px-margin-mobile md:px-margin-desktop space-y-space-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg md:gap-space-xl">

              {/* Preproducción */}
              <div className="group bg-surface-mid rounded-xl p-space-xl border border-surface-variant/30 hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary/0 group-hover:bg-primary transition-colors duration-300"></div>
                <div className="flex items-center justify-between mb-space-lg">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-[28px]">edit_note</span>
                  </div>
                  <span className="font-body text-sm font-bold text-primary">FASE 01</span>
                </div>
                <h3 className="font-body text-2xl font-bold md:text-3xl text-on-surface mb-space-md">Preproducción</h3>
                <p className="font-body text-sm text-on-surface-variant mb-space-lg">La base de todo gran proyecto. Planificamos cada detalle con rigor militar y sensibilidad artística.</p>
                <ul className="space-y-space-sm">
                  <li className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span>
                    <span className="font-body text-sm text-on-surface">Desarrollo de guión</span>
                  </li>
                  <li className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span>
                    <span className="font-body text-sm text-on-surface">Storyboard y arte conceptual</span>
                  </li>
                  <li className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span>
                    <span className="font-body text-sm text-on-surface">Casting y dirección de talento</span>
                  </li>
                  <li className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span>
                    <span className="font-body text-sm text-on-surface">Scouting de locaciones</span>
                  </li>
                  <li className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span>
                    <span className="font-body text-sm text-on-surface">Planificación de rodaje</span>
                  </li>
                  <li className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span>
                    <span className="font-body text-sm text-on-surface">Presupuestación detallada</span>
                  </li>
                </ul>
              </div>

              {/* Producción */}
              <div className="group bg-surface-mid rounded-xl p-space-xl border border-primary/40 relative overflow-hidden shadow-lg">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
                <div className="flex items-center justify-between mb-space-lg">
                  <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-[28px]">videocam</span>
                  </div>
                  <span className="font-body text-sm font-bold text-primary">FASE 02</span>
                </div>
                <h3 className="font-body text-2xl font-bold md:text-3xl text-on-surface mb-space-md">Producción</h3>
                <p className="font-body text-sm text-on-surface-variant mb-space-lg">El corazón del proceso. Transformamos la planificación en fotogramas de impacto con equipo de élite.</p>
                <ul className="space-y-space-sm">
                  <li className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span>
                    <span className="font-body text-sm text-on-surface">Dirección cinematográfica</span>
                  </li>
                  <li className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span>
                    <span className="font-body text-sm text-on-surface">Fotografía y óptica de alta gama</span>
                  </li>
                  <li className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span>
                    <span className="font-body text-sm text-on-surface">Iluminación y grip profesional</span>
                  </li>
                  <li className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span>
                    <span className="font-body text-sm text-on-surface">Sonido directo y Foley</span>
                  </li>
                  <li className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span>
                    <span className="font-body text-sm text-on-surface">Dirección de arte en set</span>
                  </li>
                  <li className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span>
                    <span className="font-body text-sm text-on-surface">Rodaje con ARRI / RED / Sony</span>
                  </li>
                </ul>
              </div>

              {/* Postproducción */}
              <div className="group bg-surface-mid rounded-xl p-space-xl border border-surface-variant/30 hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary/0 group-hover:bg-primary transition-colors duration-300"></div>
                <div className="flex items-center justify-between mb-space-lg">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-[28px]">movie_edit</span>
                  </div>
                  <span className="font-body text-sm font-bold text-primary">FASE 03</span>
                </div>
                <h3 className="font-body text-2xl font-bold md:text-3xl text-on-surface mb-space-md">Postproducción</h3>
                <p className="font-body text-sm text-on-surface-variant mb-space-lg">Donde la magia se refina. Montaje, color, sonido y VFX al nivel de los mejores estudios del mundo.</p>
                <ul className="space-y-space-sm">
                  <li className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span>
                    <span className="font-body text-sm text-on-surface">Montaje y edición offline/online</span>
                  </li>
                  <li className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span>
                    <span className="font-body text-sm text-on-surface">Etalonaje y color grading</span>
                  </li>
                  <li className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span>
                    <span className="font-body text-sm text-on-surface">VFX y composición digital</span>
                  </li>
                  <li className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span>
                    <span className="font-body text-sm text-on-surface">Diseño sonoro y mezcla Dolby Atmos</span>
                  </li>
                  <li className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span>
                    <span className="font-body text-sm text-on-surface">Masterización DCP / HDR</span>
                  </li>
                  <li className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span>
                    <span className="font-body text-sm text-on-surface">Subtitulado y localización</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICIOS ESPECIALIZADOS */}
        <section className="w-full py-space-3xl md:py-space-section">
          <div className="w-full px-margin-mobile md:px-margin-desktop space-y-space-2xl">
            <div className="space-y-space-xs max-w-2xl">
              <div className="flex items-center gap-space-xs font-body text-xs text-primary uppercase tracking-widest">
                <span className="material-symbols-outlined text-[16px]">auto_awesome</span>
                <span>VERTICALES CREATIVAS // ESPECIALIZACIÓN</span>
              </div>
              <h2 className="font-body text-3xl font-bold md:text-5xl text-on-surface">Servicios Especializados</h2>
              <p className="font-body text-base text-on-surface-variant">Cada tipo de proyecto requiere un enfoque único. Estas son nuestras áreas de dominio.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-space-lg">
              <div className="group p-space-lg bg-surface-mid rounded-xl hover:-translate-y-1 transition-transform duration-300 border border-surface-variant/20 hover:border-primary/20">
                <span className="material-symbols-outlined text-primary text-[32px] mb-space-sm">tv</span>
                <h3 className="font-body text-xl font-semibold text-on-surface mb-space-2xs group-hover:text-primary transition-colors">Spots Publicitarios</h3>
                <p className="font-body text-sm text-on-surface-variant">Campañas audiovisuales para TV y plataformas digitales. Creatividad estratégica que convierte marcas en experiencias memorables.</p>
                <div className="mt-space-md font-body text-xs text-on-surface-variant">FORMATO: 15s / 30s / 60s / 90s</div>
              </div>
              <div className="group p-space-lg bg-surface-mid rounded-xl hover:-translate-y-1 transition-transform duration-300 border border-surface-variant/20 hover:border-primary/20">
                <span className="material-symbols-outlined text-primary text-[32px] mb-space-sm">music_note</span>
                <h3 className="font-body text-xl font-semibold text-on-surface mb-space-2xs group-hover:text-primary transition-colors">Videoclips Musicales</h3>
                <p className="font-body text-sm text-on-surface-variant">Narrativa visual al servicio de la música. Desde conceptos íntimos acústicos hasta producciones de escala épica con coreografía y VFX.</p>
                <div className="mt-space-md font-body text-xs text-on-surface-variant">FORMATO: 3-7 MIN / 4K-8K</div>
              </div>
              <div className="group p-space-lg bg-surface-mid rounded-xl hover:-translate-y-1 transition-transform duration-300 border border-surface-variant/20 hover:border-primary/20">
                <span className="material-symbols-outlined text-primary text-[32px] mb-space-sm">documentary_scanner</span>
                <h3 className="font-body text-xl font-semibold text-on-surface mb-space-2xs group-hover:text-primary transition-colors">Documentales</h3>
                <p className="font-body text-sm text-on-surface-variant">Historias reales contadas con mirada artística. Investigación profunda, cinematografía de campo y edición narrativa que revela verdades ocultas.</p>
                <div className="mt-space-md font-body text-xs text-on-surface-variant">FORMATO: 30-120 MIN</div>
              </div>
              <div className="group p-space-lg bg-surface-mid rounded-xl hover:-translate-y-1 transition-transform duration-300 border border-surface-variant/20 hover:border-primary/20">
                <span className="material-symbols-outlined text-primary text-[32px] mb-space-sm">checkroom</span>
                <h3 className="font-body text-xl font-semibold text-on-surface mb-space-2xs group-hover:text-primary transition-colors">Fashion Films</h3>
                <p className="font-body text-sm text-on-surface-variant">Cine de moda y editorial audiovisual. Fusión de alta costura, arquitectura y movimiento para las marcas más exigentes del sector.</p>
                <div className="mt-space-md font-body text-xs text-on-surface-variant">FORMATO: 1-5 MIN / EDITORIAL</div>
              </div>
              <div className="group p-space-lg bg-surface-mid rounded-xl hover:-translate-y-1 transition-transform duration-300 border border-surface-variant/20 hover:border-primary/20">
                <span className="material-symbols-outlined text-primary text-[32px] mb-space-sm">devices</span>
                <h3 className="font-body text-xl font-semibold text-on-surface mb-space-2xs group-hover:text-primary transition-colors">Contenido Digital</h3>
                <p className="font-body text-sm text-on-surface-variant">Series web, branded content y piezas para redes sociales. Producción premium adaptada a los formatos y ritmos de las plataformas digitales.</p>
                <div className="mt-space-md font-body text-xs text-on-surface-variant">FORMATO: MULTI-PLATAFORMA</div>
              </div>
              <div className="group p-space-lg bg-surface-mid rounded-xl hover:-translate-y-1 transition-transform duration-300 border border-surface-variant/20 hover:border-primary/20">
                <span className="material-symbols-outlined text-primary text-[32px] mb-space-sm">theaters</span>
                <h3 className="font-body text-xl font-semibold text-on-surface mb-space-2xs group-hover:text-primary transition-colors">Cine de Autor</h3>
                <p className="font-body text-sm text-on-surface-variant">Largometrajes y cortometrajes de ficción. Producción integral para proyectos cinematográficos destinados a festivales y distribución theatrical.</p>
                <div className="mt-space-md font-body text-xs text-on-surface-variant">FORMATO: CORTO / LARGO / DCP</div>
              </div>
            </div>
          </div>
        </section>

        {/* ARSENAL TÉCNICO */}
        <section className="w-full bg-surface-low py-space-3xl md:py-space-section">
          <div className="w-full px-margin-mobile md:px-margin-desktop space-y-space-2xl">
            <div className="space-y-space-xs max-w-2xl">
              <div className="flex items-center gap-space-xs font-body text-xs text-primary uppercase tracking-widest">
                <span className="material-symbols-outlined text-[16px]">build</span>
                <span>EQUIPAMIENTO // TECH SPECS</span>
              </div>
              <h2 className="font-body text-3xl font-bold md:text-5xl text-on-surface">Arsenal Técnico</h2>
              <p className="font-body text-base text-on-surface-variant">Infraestructura de nivel broadcast y theatrical. Equipamiento propio y partners técnicos de primer nivel.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg">
              {/* Cámaras */}
              <div className="space-y-space-md">
                <div className="flex items-center gap-space-xs mb-space-sm">
                  <span className="material-symbols-outlined text-primary text-[20px]">photo_camera</span>
                  <h3 className="font-body text-xl font-semibold text-on-surface">Cámaras</h3>
                </div>
                <ul className="space-y-space-xs">
                  <li className="font-body text-sm text-on-surface-variant flex items-center gap-space-2xs">
                    <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0"></span>ARRI ALEXA 65
                  </li>
                  <li className="font-body text-sm text-on-surface-variant flex items-center gap-space-2xs">
                    <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0"></span>ARRI ALEXA Mini LF
                  </li>
                  <li className="font-body text-sm text-on-surface-variant flex items-center gap-space-2xs">
                    <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0"></span>RED V-RAPTOR 8K
                  </li>
                  <li className="font-body text-sm text-on-surface-variant flex items-center gap-space-2xs">
                    <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0"></span>Sony VENICE 2
                  </li>
                  <li className="font-body text-sm text-on-surface-variant flex items-center gap-space-2xs">
                    <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0"></span>Phantom Flex4K
                  </li>
                </ul>
              </div>
              {/* Óptica */}
              <div className="space-y-space-md">
                <div className="flex items-center gap-space-xs mb-space-sm">
                  <span className="material-symbols-outlined text-primary text-[20px]">lens</span>
                  <h3 className="font-body text-xl font-semibold text-on-surface">Óptica</h3>
                </div>
                <ul className="space-y-space-xs">
                  <li className="font-body text-sm text-on-surface-variant flex items-center gap-space-2xs">
                    <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0"></span>Cooke S4/i
                  </li>
                  <li className="font-body text-sm text-on-surface-variant flex items-center gap-space-2xs">
                    <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0"></span>ARRI Signature Prime
                  </li>
                  <li className="font-body text-sm text-on-surface-variant flex items-center gap-space-2xs">
                    <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0"></span>Zeiss Supreme
                  </li>
                  <li className="font-body text-sm text-on-surface-variant flex items-center gap-space-2xs">
                    <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0"></span>ARRI Master Anamorphic
                  </li>
                  <li className="font-body text-sm text-on-surface-variant flex items-center gap-space-2xs">
                    <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0"></span>Leica Leitz Prime
                  </li>
                </ul>
              </div>
              {/* Iluminación */}
              <div className="space-y-space-md">
                <div className="flex items-center gap-space-xs mb-space-sm">
                  <span className="material-symbols-outlined text-primary text-[20px]">light_mode</span>
                  <h3 className="font-body text-xl font-semibold text-on-surface">Iluminación</h3>
                </div>
                <ul className="space-y-space-xs">
                  <li className="font-body text-sm text-on-surface-variant flex items-center gap-space-2xs">
                    <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0"></span>ARRI SkyPanel S360
                  </li>
                  <li className="font-body text-sm text-on-surface-variant flex items-center gap-space-2xs">
                    <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0"></span>Litepanels Gemini
                  </li>
                  <li className="font-body text-sm text-on-surface-variant flex items-center gap-space-2xs">
                    <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0"></span>Astera Titan Tube
                  </li>
                  <li className="font-body text-sm text-on-surface-variant flex items-center gap-space-2xs">
                    <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0"></span>Dedolight DLED
                  </li>
                  <li className="font-body text-sm text-on-surface-variant flex items-center gap-space-2xs">
                    <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0"></span>HMI M90
                  </li>
                </ul>
              </div>
              {/* Audio */}
              <div className="space-y-space-md">
                <div className="flex items-center gap-space-xs mb-space-sm">
                  <span className="material-symbols-outlined text-primary text-[20px]">headphones</span>
                  <h3 className="font-body text-xl font-semibold text-on-surface">Audio</h3>
                </div>
                <ul className="space-y-space-xs">
                  <li className="font-body text-sm text-on-surface-variant flex items-center gap-space-2xs">
                    <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0"></span>Sound Devices Scorpio
                  </li>
                  <li className="font-body text-sm text-on-surface-variant flex items-center gap-space-2xs">
                    <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0"></span>Sennheiser MKH 8060
                  </li>
                  <li className="font-body text-sm text-on-surface-variant flex items-center gap-space-2xs">
                    <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0"></span>DPA 4017C
                  </li>
                  <li className="font-body text-sm text-on-surface-variant flex items-center gap-space-2xs">
                    <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0"></span>Neumann U87
                  </li>
                  <li className="font-body text-sm text-on-surface-variant flex items-center gap-space-2xs">
                    <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0"></span>Dolby Atmos Suite
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESO */}
        <section className="w-full py-space-3xl md:py-space-section">
          <div className="w-full px-margin-mobile md:px-margin-desktop space-y-space-2xl">
            <div className="space-y-space-xs max-w-2xl">
              <div className="flex items-center gap-space-xs font-body text-xs text-primary uppercase tracking-widest">
                <span className="material-symbols-outlined text-[16px]">route</span>
                <span>WORKFLOW // PIPELINE</span>
              </div>
              <h2 className="font-body text-3xl font-bold md:text-5xl text-on-surface">Nuestro Proceso</h2>
              <p className="font-body text-base text-on-surface-variant">Un pipeline probado en más de 140 producciones. Cinco fases, un resultado: excelencia.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-space-lg">
              <div className="relative p-space-lg bg-surface-mid rounded-xl border border-primary/30">
                <div className="flex items-center gap-space-xs mb-space-md">
                  <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-body text-sm font-bold">01</div>
                  <div className="hidden md:block flex-1 h-px bg-primary/30 absolute top-12 left-[calc(100%+0.5rem)] w-space-lg"></div>
                </div>
                <h3 className="font-body text-xl font-semibold text-on-surface mb-space-2xs">Briefing & Concepto</h3>
                <p className="font-body text-sm text-on-surface-variant">Escuchamos tu visión, definimos objetivos y desarrollamos el concepto creativo fundacional.</p>
              </div>
              <div className="relative p-space-lg bg-surface-mid rounded-xl border border-surface-variant/30">
                <div className="flex items-center gap-space-xs mb-space-md">
                  <div className="w-10 h-10 rounded-full bg-surface-high text-on-surface flex items-center justify-center font-body text-sm font-bold">02</div>
                </div>
                <h3 className="font-body text-xl font-semibold text-on-surface mb-space-2xs">Preproducción</h3>
                <p className="font-body text-sm text-on-surface-variant">Guión, storyboard, casting, locaciones, presupuesto y cronograma de rodaje.</p>
              </div>
              <div className="relative p-space-lg bg-surface-mid rounded-xl border border-surface-variant/30">
                <div className="flex items-center gap-space-xs mb-space-md">
                  <div className="w-10 h-10 rounded-full bg-surface-high text-on-surface flex items-center justify-center font-body text-sm font-bold">03</div>
                </div>
                <h3 className="font-body text-xl font-semibold text-on-surface mb-space-2xs">Rodaje</h3>
                <p className="font-body text-sm text-on-surface-variant">Ejecución en set con crew especializado, equipo premium y dirección creativa en tiempo real.</p>
              </div>
              <div className="relative p-space-lg bg-surface-mid rounded-xl border border-surface-variant/30">
                <div className="flex items-center gap-space-xs mb-space-md">
                  <div className="w-10 h-10 rounded-full bg-surface-high text-on-surface flex items-center justify-center font-body text-sm font-bold">04</div>
                </div>
                <h3 className="font-body text-xl font-semibold text-on-surface mb-space-2xs">Postproducción</h3>
                <p className="font-body text-sm text-on-surface-variant">Edición, color, VFX, sonido y masterización para el formato de entrega final.</p>
              </div>
              <div className="relative p-space-lg bg-surface-mid rounded-xl border border-surface-variant/30">
                <div className="flex items-center gap-space-xs mb-space-md">
                  <div className="w-10 h-10 rounded-full bg-surface-high text-on-surface flex items-center justify-center font-body text-sm font-bold">05</div>
                </div>
                <h3 className="font-body text-xl font-semibold text-on-surface mb-space-2xs">Distribución</h3>
                <p className="font-body text-sm text-on-surface-variant">Estrategia de estreno, envío a festivales, distribución digital y entrega a plataformas.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative w-full py-space-3xl md:py-space-section overflow-hidden">
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[160px] pointer-events-none -z-10"></div>
          <div className="w-full px-margin-mobile md:px-margin-desktop">
            <div className="p-space-xl md:p-space-3xl bg-surface-low rounded-2xl relative overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between font-body text-sm font-bold text-primary pb-space-lg">
                <span>SLATE [QUOTE_REQ // 2025]</span>
                <span className="text-on-surface-variant font-body text-xs">ROLL C // TAKE 01</span>
              </div>
              <div className="max-w-4xl space-y-space-lg">
                <h2 className="font-body text-3xl font-bold md:text-5xl text-on-surface leading-tight">
                  Lleva tu proyecto al siguiente nivel.
                </h2>
                <p className="font-body text-lg text-on-surface-variant max-w-2xl">
                  Cuéntanos tu idea. Nuestro equipo de producción evaluará tu proyecto y te proporcionará un plan de acción personalizado con presupuesto detallado.
                </p>
                <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                  <Link className="inline-flex items-center justify-center px-space-xl py-space-sm rounded-lg bg-primary text-on-primary font-body text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:bg-primary-hover hover:shadow-lg" to="/contacto">
                    <span className="material-symbols-outlined text-[20px] mr-space-2xs">request_quote</span>
                    Solicitar Presupuesto
                  </Link>
                  <Link className="inline-flex items-center justify-center px-space-lg py-space-sm rounded-lg bg-surface-high text-on-surface hover:text-primary font-body text-sm font-bold uppercase tracking-widest transition-all duration-200" to="/#portafolio">
                    Ver Portafolio
                    <span className="material-symbols-outlined text-[18px] ml-space-2xs">arrow_forward</span>
                  </Link>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 opacity-5 font-display text-[180px] pointer-events-none select-none text-on-surface">SCOPE</div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
