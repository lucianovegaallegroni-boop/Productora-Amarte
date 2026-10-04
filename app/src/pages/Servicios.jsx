import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { serviciosData } from '../data/servicesData';
import { portfolioCategories, portfolioItems } from '../data/portfolioData';

export default function Servicios() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeModalItem, setActiveModalItem] = useState(null);
  const [playingVideoId, setPlayingVideoId] = useState(null);
  const videoRefs = useRef({});

  const filteredPortfolio = portfolioItems.filter(
    (item) => activeCategory === 'all' || item.category === activeCategory
  );

  const getCategoryCount = (key) => {
    if (key === 'all') return portfolioItems.length;
    return portfolioItems.filter((i) => i.category === key).length;
  };

  const handleCardMouseEnter = (item) => {
    if (item.type === 'video' && videoRefs.current[item.id]) {
      const vid = videoRefs.current[item.id];
      vid.play().catch(() => {});
      setPlayingVideoId(item.id);
    }
  };

  const handleCardMouseLeave = (item) => {
    if (item.type === 'video' && videoRefs.current[item.id]) {
      const vid = videoRefs.current[item.id];
      vid.pause();
      vid.currentTime = 0;
      setPlayingVideoId(null);
    }
  };

  const modalidades = [
    {
      tipo: 'MODALIDAD 01',
      titulo: 'Paquetes Mensuales',
      badge: 'RETAINER MENSUAL',
      desc: 'Plan integral recurrente de creación de contenido audiovisual, diseño de grillas de marketing y community management continuo.',
      puntos: [
        'Producción continua de reels y fotografías mensuales',
        'Grilla estratégica de publicaciones para redes',
        'Gestión activa de comunidad y pautas publicitarias',
        'Reporte mensual de rendimiento y métricas de engagement',
      ],
      destacado: true,
    },
    {
      tipo: 'MODALIDAD 02',
      titulo: 'Por Proyecto',
      badge: 'ON DEMAND',
      desc: 'Producción audiovisual a la medida para campañas de lanzamiento, spots publicitarios, sesiones de fotos específicas o piezas únicas.',
      puntos: [
        'Desarrollo conceptual y guion de campaña',
        'Jornadas de rodaje en set o locación seleccionada',
        'Postproducción y entrega de masters en alta definición',
        'Paquetes de entregables multiformato (16:9 y 9:16)',
      ],
      destacado: false,
    },
    {
      tipo: 'MODALIDAD 03',
      titulo: 'Cobertura de Eventos',
      badge: 'TIEMPO REAL',
      desc: 'Despliegue in situ para capturar la energía de lanzamientos, conferencias, festivales y activaciones de marca con entrega inmediata.',
      puntos: [
        'Equipo audiovisual desplegado en el evento',
        'Contenido en tiempo real para historias y directos',
        'Galería fotográfica profesional editada en tiempo récord',
        'Reel resumen recap dinámico con gradación de color',
      ],
      destacado: false,
    },
  ];

  const pasos = [
    {
      num: '01',
      title: 'Briefing & Estrategia',
      desc: 'Analizamos tu marca, tu audiencia objetivo y tus metas comerciales para trazar la ruta creativa y el calendario editorial.',
    },
    {
      num: '02',
      title: 'Planificación & Guion',
      desc: 'Diseñamos la grilla mensual, elaboramos los guiones técnicos, definimos la dirección de arte y preparamos las jornadas de producción.',
    },
    {
      num: '03',
      title: 'Producción & Cobertura',
      desc: 'Ejecutamos el rodaje con equipamiento cinematográfico, iluminación profesional, dirección en set y captura de audio nítido.',
    },
    {
      num: '04',
      title: 'Edición & Publicación',
      desc: 'Montaje dinámico, color grading, subtítulos estilizados, programación de contenidos, gestión de pautas y medición de engagement.',
    },
  ];

  return (
    <div className="flex flex-col w-full">

      {/* HERO SECTION */}
      <section className="relative w-full overflow-hidden pb-16 md:pb-24 border-b border-surface-variant/20">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[340px] bg-primary/10 rounded-full blur-[140px] pointer-events-none -z-10" />
        <div className="absolute -left-20 bottom-1/4 w-40 h-40 rounded-full bg-primary/5 pointer-events-none" />
        <div className="absolute -right-16 top-0 w-48 h-48 rounded-full bg-black/5 pointer-events-none" />

        <div className="w-full px-margin-mobile md:px-margin-desktop pt-8 md:pt-16">
          {/* Metadata Strip */}
          <div className="flex flex-wrap items-center justify-between gap-sm pb-8 text-on-surface-variant">
            <div className="flex items-center gap-xs text-xs uppercase tracking-widest text-primary font-bold">
              <span className="inline-block w-2 h-2 rounded-full bg-primary animate-ping" />
              <span>CONSULTORA & PRODUCTORA AUDIOVISUAL // 2026</span>
            </div>
            <div className="hidden sm:flex items-center gap-lg text-xs font-mono text-on-surface-variant/80 tracking-wider">
              <span>SERVICIOS DE PRODUCCIÓN</span>
              <span className="text-surface-variant">|</span>
              <span>PORTAFOLIO OFICIAL</span>
              <span className="text-surface-variant">|</span>
              <span>MARKETING & REELS</span>
            </div>
          </div>

          {/* Título Hero & Descripción */}
          <div className="max-w-6xl space-y-6 md:space-y-8">
            <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-semibold text-on-surface uppercase tracking-tight leading-[1.05] max-w-5xl">
              <span className="block">SERVICIOS DE PRODUCCIÓN &</span>
              <span className="block">
                PORTAFOLIO <span className="font-editorial italic font-normal text-primary">CINEMATOGRÁFICO</span>.
              </span>
            </h1>

            <p className="font-body text-base sm:text-lg md:text-xl text-on-surface-variant max-w-3xl leading-relaxed">
              Descubre nuestras cuatro líneas de servicio integrales junto a la muestra completa de producciones audiovisuales: Reels promocionales, entrevistas, productos, cobertura de eventos en tiempo real y sesiones fotográficas.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#servicios"
                className="px-6 py-3 bg-surface hover:bg-surface-high text-on-surface text-xs font-bold uppercase tracking-wider rounded-lg transition-colors duration-200 border border-surface-variant/60"
              >
                Conocer Servicios
              </a>
              <a
                href="#portafolio"
                className="px-6 py-3 bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors duration-200 shadow-lg shadow-primary/20 flex items-center gap-2"
              >
                <span>Ver Portafolio de Reels & Fotos</span>
                <span className="material-symbols-outlined text-sm">arrow_downward</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* LOS 4 SERVICIOS PRINCIPALES (Extraídos de Canva) */}
      <section id="servicios" className="w-full bg-surface-low/50 py-16 md:py-24 border-b border-surface-variant/20 scroll-mt-20">
        <div className="w-full px-margin-mobile md:px-margin-desktop space-y-12">
          {/* Section Header */}
          <div className="max-w-3xl space-y-2">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-primary font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              <span>LÍNEAS DE SERVICIO // 01 — 04</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-semibold text-on-surface uppercase tracking-tight">
              Nuestros Servicios
            </h2>
            <p className="font-body text-base sm:text-lg text-on-surface-variant leading-relaxed">
              Soluciones estructuradas para marcas que desean transformar su presencia digital a través de contenido visual superior y estrategia probada.
            </p>
          </div>

          {/* Grid de 4 Servicios */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {serviciosData.map((s) => (
              <div
                key={s.id}
                className={`relative rounded-2xl flex flex-col justify-between transition-all duration-300 p-8 ${
                  s.featured
                    ? 'bg-surface-mid border-2 border-primary shadow-xl ring-1 ring-primary/20 hover:shadow-2xl hover:-translate-y-1'
                    : 'bg-surface-mid/80 border border-surface-variant/40 hover:border-primary/40 hover:bg-surface-mid hover:-translate-y-1'
                }`}
              >
                <div className="space-y-6">
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${s.featured ? 'bg-primary text-white' : 'bg-surface text-primary border border-surface-variant/40'}`}>
                        <span className="material-symbols-outlined text-2xl">{s.icon}</span>
                      </div>
                      <div>
                        <span className="text-xs font-mono font-bold tracking-widest text-primary block">
                          FASE [{s.fase}]
                        </span>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-on-surface-variant">
                          {s.highlight}
                        </span>
                      </div>
                    </div>
                    <span className="text-2xl font-editorial font-bold text-on-surface/30">
                      {s.fase}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <div className="space-y-3">
                    <h3 className="font-editorial text-2xl sm:text-3xl font-semibold text-on-surface">
                      {s.title}
                    </h3>
                    <p className="font-body text-base font-semibold text-primary leading-snug">
                      {s.shortDesc}
                    </p>
                    <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                      {s.fullDesc}
                    </p>
                  </div>

                  {/* Deliverables List */}
                  <div className="space-y-3 pt-2 border-t border-surface-variant/30">
                    <span className="text-xs uppercase tracking-widest font-bold text-on-surface/70 block">
                      Capacidades & Entregables:
                    </span>
                    <ul className="space-y-2">
                      {s.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-on-surface-variant">
                          <span className="material-symbols-outlined text-[15px] text-primary shrink-0 mt-0.5">
                            check_circle
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-6 mt-6 border-t border-surface-variant/30">
                  <Link
                    to="/contacto"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary hover:text-primary-hover group"
                  >
                    <span>Cotizar este servicio</span>
                    <span className="material-symbols-outlined text-sm transition-transform duration-200 group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODALIDADES DE TRABAJO */}
      <section className="w-full bg-surface py-16 md:py-24 border-b border-surface-variant/20">
        <div className="w-full px-margin-mobile md:px-margin-desktop space-y-12">
          <div className="max-w-3xl space-y-2">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-primary font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              <span>ESQUEMAS DE CONTRATACIÓN</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-semibold text-on-surface uppercase tracking-tight">
              ¿Cómo Colaboramos?
            </h2>
            <p className="font-body text-base sm:text-lg text-on-surface-variant leading-relaxed">
              Modelos de servicio flexibles que se adaptan a las necesidades operativas y presupuestarias de cada marca.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {modalidades.map((m, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-2xl flex flex-col justify-between ${
                  m.destacado
                    ? 'bg-surface-mid border-2 border-primary shadow-xl ring-1 ring-primary/20'
                    : 'bg-surface-mid/60 border border-surface-variant/40 hover:bg-surface-mid transition-colors duration-200'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold tracking-widest text-primary">
                      {m.tipo}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-surface border border-surface-variant/60 text-on-surface-variant">
                      {m.badge}
                    </span>
                  </div>
                  <h3 className="font-editorial text-2xl font-semibold text-on-surface">
                    {m.titulo}
                  </h3>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                    {m.desc}
                  </p>
                  <ul className="space-y-2 pt-3 border-t border-surface-variant/30">
                    {m.puntos.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-xs text-on-surface-variant">
                        <span className="material-symbols-outlined text-sm text-primary shrink-0 mt-0.5">
                          done
                        </span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-surface-variant/30">
                  <Link
                    to="/contacto"
                    className={`w-full inline-flex items-center justify-center py-2.5 px-4 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors duration-200 ${
                      m.destacado
                        ? 'bg-primary hover:bg-primary-hover text-white shadow-md'
                        : 'bg-surface hover:bg-surface-high text-on-surface border border-surface-variant/60'
                    }`}
                  >
                    Consultar Disponibilidad
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METODOLOGÍA / PROCESO EN 4 PASOS */}
      <section className="w-full bg-surface-low py-16 md:py-24 border-b border-surface-variant/20">
        <div className="w-full px-margin-mobile md:px-margin-desktop space-y-12">
          <div className="max-w-3xl space-y-2">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-primary font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              <span>METODOLOGÍA DE TRABAJO</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-semibold text-on-surface uppercase tracking-tight">
              De la Idea al Impacto en Pantalla
            </h2>
            <p className="font-body text-base sm:text-lg text-on-surface-variant leading-relaxed">
              Un flujo de trabajo riguroso y transparente que asegura entregas puntuales y calidad consistente en cada publicación.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pasos.map((p) => (
              <div key={p.num} className="p-6 bg-surface rounded-xl border border-surface-variant/40 space-y-3">
                <span className="text-3xl font-editorial font-bold text-primary block">
                  {p.num}
                </span>
                <h3 className="font-editorial text-xl font-semibold text-on-surface">
                  {p.title}
                </h3>
                <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN PORTAFOLIO DE REELS Y FOTOS (Extraído directamente de Canva) */}
      <section id="portafolio" className="w-full bg-surface py-16 md:py-24 border-b border-surface-variant/20 scroll-mt-20">
        <div className="w-full px-margin-mobile md:px-margin-desktop space-y-10">
          
          {/* Section Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-xs text-xs uppercase tracking-widest text-primary font-bold">
              <span className="inline-block w-2 h-2 rounded-full bg-primary" />
              <span>PORTAFOLIO PRODUCTORA AMARTE // REELS & FOTOS</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <h2 className="font-editorial text-3xl sm:text-5xl font-semibold text-on-surface uppercase tracking-tight">
                Muestras Oficiales de Producción
              </h2>
              <p className="font-body text-sm text-on-surface-variant max-w-md">
                Explora nuestras piezas por categoría. Pasa el cursor sobre un reel para ver una vista previa, o haz clic para reproducirlo en alta resolución.
              </p>
            </div>
          </div>

          {/* Categorías / Tabs del Canva */}
          <div className="flex flex-wrap items-center gap-2 border-b border-surface-variant/30 pb-4">
            {portfolioCategories.map((cat) => {
              const count = getCategoryCount(cat.key);
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'bg-primary text-white shadow-md shadow-primary/20'
                      : 'bg-surface-mid/80 text-on-surface-variant hover:bg-surface-mid hover:text-on-surface'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${isActive ? 'bg-black/20 text-white' : 'bg-surface text-on-surface-variant'}`}>
                    {count < 10 ? `0${count}` : count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-start">
            {filteredPortfolio.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveModalItem(item)}
                onMouseEnter={() => handleCardMouseEnter(item)}
                onMouseLeave={() => handleCardMouseLeave(item)}
                className="group relative cursor-pointer bg-surface-mid rounded-xl overflow-hidden border border-surface-variant/40 hover:border-primary/60 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl flex flex-col"
              >
                {/* Visual Media Container */}
                <div className={`w-full relative overflow-hidden bg-black ${item.type === 'video' ? 'aspect-[9/16]' : 'aspect-[4/5]'}`}>
                  {item.type === 'video' ? (
                    <>
                      {/* Video Player Preview */}
                      <video
                        ref={(el) => (videoRefs.current[item.id] = el)}
                        src={item.src}
                        poster={item.thumbnail}
                        muted
                        playsInline
                        loop
                        preload="metadata"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Video Badges & Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 flex flex-col justify-between p-4 pointer-events-none">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono font-bold bg-primary text-white px-2 py-0.5 rounded shadow">
                            REEL
                          </span>
                          <span className="text-[11px] font-mono font-bold bg-black/60 backdrop-blur-md text-white px-2 py-0.5 rounded">
                            {item.duration}
                          </span>
                        </div>

                        {/* Central Play Indicator */}
                        <div className="self-center">
                          <div className={`w-12 h-12 rounded-full bg-primary/90 text-white flex items-center justify-center shadow-lg transition-transform duration-300 ${playingVideoId === item.id ? 'opacity-0 scale-75' : 'opacity-90 group-hover:scale-110'}`}>
                            <span className="material-symbols-outlined text-2xl">play_arrow</span>
                          </div>
                        </div>

                        <div className="space-y-1">
                          <span className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold block">
                            {item.tag}
                          </span>
                          <h3 className="font-editorial text-lg font-semibold text-white leading-tight">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Image Item */}
                      <img
                        src={item.src}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 flex flex-col justify-between p-4 pointer-events-none">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono font-bold bg-white/20 backdrop-blur-md text-white px-2 py-0.5 rounded">
                            FOTO
                          </span>
                          <span className="text-white/80 material-symbols-outlined text-base">
                            zoom_in
                          </span>
                        </div>
                        <div className="space-y-1">
                          <span className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold block">
                            {item.tag}
                          </span>
                          <h3 className="font-editorial text-lg font-semibold text-white leading-tight">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Card Bottom Details */}
                <div className="p-4 bg-surface space-y-1 border-t border-surface-variant/30 flex-1 flex flex-col justify-between">
                  <p className="font-body text-xs text-on-surface-variant line-clamp-2">
                    {item.subtitle}
                  </p>
                  <div className="pt-2 flex items-center justify-between text-[11px] font-bold text-primary">
                    <span>{item.type === 'video' ? 'Ver Reel Completo' : 'Ampliar Fotografía'}</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="w-full bg-black text-white py-16 md:py-24">
        <div className="w-full px-margin-mobile md:px-margin-desktop text-center space-y-8 max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 bg-white/10 text-primary text-xs font-mono font-bold uppercase tracking-widest rounded-full">
            COMENCEMOS HOY // PRODUCTORA AMARTE
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl font-semibold uppercase tracking-tight leading-tight">
            ¿Listo para llevar el contenido de tu marca a otro nivel?
          </h2>
          <p className="font-body text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Platiquemos sobre los objetivos de tu empresa y diseñemos un plan de contenido y marketing a la medida de tus metas.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contacto"
              className="px-8 py-3.5 bg-primary hover:bg-primary-hover text-white font-bold text-sm uppercase tracking-wider rounded-lg transition-colors duration-200 shadow-lg shadow-primary/25"
            >
              Iniciar Proyecto
            </Link>
            <Link
              to="/"
              className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-sm uppercase tracking-wider rounded-lg transition-colors duration-200 border border-white/20"
            >
              Volver al Inicio
            </Link>
          </div>
        </div>
      </section>

      {/* LIGHTBOX / MODAL PARA VIDEOS O FOTOS */}
      {activeModalItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-fadeIn"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="relative max-w-4xl max-h-[92vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute -top-12 right-0 md:-right-12 w-10 h-10 rounded-full bg-white/20 hover:bg-primary text-white flex items-center justify-center transition-colors duration-200 cursor-pointer z-10"
              aria-label="Cerrar modal"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>

            {/* Media Rendering */}
            <div className="overflow-hidden rounded-xl bg-black shadow-2xl flex items-center justify-center">
              {activeModalItem.type === 'video' ? (
                <video
                  src={activeModalItem.src}
                  controls
                  autoPlay
                  playsInline
                  loop
                  className="max-h-[75vh] w-auto max-w-[90vw] rounded-xl object-contain bg-black"
                />
              ) : (
                <img
                  src={activeModalItem.src}
                  alt={activeModalItem.title}
                  className="max-h-[75vh] max-w-[90vw] object-contain rounded-xl"
                />
              )}
            </div>

            {/* Metadata Footer */}
            <div className="w-full mt-4 p-4 bg-surface rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-on-surface">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold block">
                  {activeModalItem.tag}
                </span>
                <h4 className="font-editorial text-xl font-semibold">
                  {activeModalItem.title}
                </h4>
                <p className="font-body text-xs text-on-surface-variant">
                  {activeModalItem.subtitle}
                </p>
              </div>
              <Link
                to="/contacto"
                className="px-4 py-2 bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors shrink-0"
              >
                Cotizar Proyecto Similar
              </Link>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
