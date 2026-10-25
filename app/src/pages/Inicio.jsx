import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Inicio() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const team = [
    {
      name: 'David Shoemaker',
      role: 'Director Ejecutivo (CEO)',
      badge: 'CO FUNDADOR',
      subtitle: 'Co Fundador y Productor Audiovisual',
      bio: 'Lidero la ejecución de las estrategias para las redes sociales y producción audiovisual de los contenidos para los clientes y sus marcas.',
      image: '/team/david.png',
    },
    {
      name: 'Valentina Figueira',
      role: 'Directora de Operaciones (COO)',
      badge: 'CO FUNDADORA',
      subtitle: 'Co Fundadora y Comunicadora Social',
      bio: 'Responsable de la organización y planificación de los proyectos con los clientes para la producción audiovisual y redes sociales.',
      image: '/team/valentina.png',
    },
  ];

  return (
    <div className="flex flex-col w-full">

      {/* HERO INSTITUCIONAL */}
      <section className="relative w-full overflow-hidden pb-16 md:pb-24 border-b border-surface-variant/20">
        <div className="absolute -left-20 bottom-1/4 w-40 h-40 rounded-full bg-primary/10 pointer-events-none" />
        <div className="absolute -right-16 top-0 w-48 h-48 rounded-full bg-black/5 pointer-events-none" />
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[340px] bg-primary/5 rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="w-full px-margin-mobile md:px-margin-desktop pt-8 md:pt-16">
          {/* Metadata Strip */}
          <div className="flex flex-wrap items-center justify-between gap-sm pb-8 text-on-surface-variant">
            <div className="flex items-center gap-xs text-xs uppercase tracking-widest text-primary font-bold">
              <span className="inline-block w-2 h-2 rounded-full bg-primary animate-ping" />
              <span>PRODUCTORA AMARTE // CONSULTORA AUDIOVISUAL 2026</span>
            </div>
            <div className="hidden sm:flex items-center gap-lg text-xs font-mono text-on-surface-variant/80 tracking-wider">
              <span>CONTENIDO AUDIOVISUAL</span>
              <span className="text-surface-variant">|</span>
              <span>ESTRATEGIA & MARKETING</span>
              <span className="text-surface-variant">|</span>
              <span>COMMUNITY MANAGEMENT</span>
            </div>
          </div>

          {/* Título Hero & Propuesta de Valor */}
          <div className="max-w-6xl space-y-6 md:space-y-8">
            <h1 className="font-editorial text-3xl sm:text-5xl md:text-6xl font-semibold text-on-surface uppercase tracking-tight leading-[1.05] max-w-5xl">
              TU HISTORIA <span className="font-editorial italic font-normal text-primary">COMIENZA</span> AQUÍ.
            </h1>

            <p className="font-body text-base sm:text-lg md:text-xl text-on-surface-variant max-w-3xl leading-relaxed">
              Productora Amarte es una productora emergente creada para contar las historias de tu marca personal, negocio o emprendimiento.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#equipo"
                className="px-6 py-3 bg-surface hover:bg-surface-high text-on-surface text-xs font-bold uppercase tracking-wider rounded-lg transition-colors duration-200 border border-surface-variant/60"
              >
                Conoce al Equipo
              </a>
              <Link
                to="/servicios"
                className="px-6 py-3 bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors duration-200 shadow-lg shadow-primary/20 flex items-center gap-2"
              >
                <span>Servicios & Portafolio</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN VÍDEO DE PRESENTACIÓN */}
      <section className="w-full bg-black text-white py-16 md:py-24 border-b border-surface-variant/20 relative overflow-hidden">
        <div className="w-full px-margin-mobile md:px-margin-desktop space-y-8">
          {/* Reproductor / Contenedor Cinematográfico */}
          <div
            onClick={() => setVideoModalOpen(true)}
            className="relative w-full max-w-5xl mx-auto aspect-[16/9] rounded-2xl overflow-hidden bg-surface-dim border border-white/10 shadow-2xl group flex items-center justify-center cursor-pointer"
          >
            {/* Background Preview */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: 'url(/portfolio/thumbnails/presentacion.jpg)',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/60" />

            {/* Camera Viewfinder UI Elements */}
            <div className="absolute inset-0 p-4 md:p-8 pointer-events-none flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded text-primary font-bold">
                  <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                  <span>REC [00:00:00:00]</span>
                </div>
                <div className="flex items-center gap-2 text-white/80 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded">
                  <span>4K UHD</span>
                  <span>•</span>
                  <span>24 FPS</span>
                  <span>•</span>
                  <span>PRORES 422 HQ</span>
                </div>
              </div>

              <div className="flex items-end justify-between text-xs font-mono">
                <div className="space-y-1">
                  <span className="text-primary font-bold block text-[10px] tracking-widest">PRODUCTORA AMARTE</span>
                  <span className="text-white/70">REEL INSTITUCIONAL DE PRESENTACIÓN</span>
                </div>
                <span className="text-white/60 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded">
                  AUDIO 48kHz / 24-BIT
                </span>
              </div>
            </div>

            {/* Central Play Badge */}
            <div className="relative z-10 text-center space-y-4 max-w-lg px-4">
              <div
                onClick={() => setVideoModalOpen(true)}
                className="w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full bg-primary/90 hover:bg-primary text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 cursor-pointer group-hover:shadow-primary/50"
              >
                <span className="material-symbols-outlined text-4xl md:text-5xl ml-1">play_arrow</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN CONOCE AL EQUIPO */}
      <section id="equipo" className="w-full bg-surface-low py-16 md:py-24 border-b border-surface-variant/20 scroll-mt-20">
        <div className="w-full px-margin-mobile md:px-margin-desktop space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-primary font-bold">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span>NUESTRO EQUIPO // CREATIVOS & DIRECTORES</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl font-semibold text-on-surface uppercase tracking-tight">
              Conoce al Equipo
            </h2>
            <p className="font-body text-base text-on-surface-variant leading-relaxed">
              Las mentes creativas, directores técnicos y estrategas detrás de cada rodaje, campaña y pieza audiovisual de Productora Amarte.
            </p>
          </div>

          {/* Grid de Miembros del Equipo */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 items-stretch max-w-4xl">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="group bg-surface rounded-2xl overflow-hidden border border-surface-variant/40 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Foto de Perfil (fondo rojo de marca) */}
                  <div className="aspect-[4/5] relative overflow-hidden bg-primary">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 text-[10px] font-mono font-bold bg-black/60 backdrop-blur-md text-white px-2.5 py-1 rounded">
                      {member.badge}
                    </span>
                  </div>

                  {/* Datos del Miembro */}
                  <div className="px-5 space-y-2">
                    <h3 className="font-editorial text-xl font-bold text-on-surface group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
                      {member.role}
                    </p>
                    <p className="font-body text-xs font-semibold text-on-surface">
                      {member.subtitle}
                    </p>
                    <p className="font-body text-xs text-on-surface-variant leading-relaxed pt-1">
                      {member.bio}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-4 border-t border-surface-variant/30 flex items-center justify-between text-[11px] font-mono text-on-surface-variant/70">
                  <span>CREW // 0{idx + 1}</span>
                  <span className="text-primary font-bold">PRODUCTORA AMARTE</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BANNER DIRECTO HACIA SERVICIOS Y PORTAFOLIO */}
      <section className="w-full bg-surface-mid py-16 border-b border-surface-variant/20">
        <div className="w-full px-margin-mobile md:px-margin-desktop">
          <div className="p-8 sm:p-12 rounded-2xl bg-surface border-2 border-primary/30 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary block">
                CATÁLOGO COMPLETO DISPONIBLE
              </span>
              <h3 className="font-editorial text-2xl sm:text-4xl font-semibold text-on-surface uppercase tracking-tight">
                Explora Nuestros Servicios y el Portafolio Oficial
              </h3>
              <p className="font-body text-sm sm:text-base text-on-surface-variant leading-relaxed">
                Descubre en detalle nuestras 4 líneas de servicio (Creación de Contenido, Estrategia de Marketing, Community Management y Cobertura de Eventos) junto a nuestra galería de videos reels y sesiones fotográficas.
              </p>
            </div>

            <Link
              to="/servicios"
              className="px-8 py-4 bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors duration-200 shadow-lg shadow-primary/20 shrink-0 flex items-center gap-3"
            >
              <span>Ir a Servicios & Portafolio</span>
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* MANIFIESTO & CTA FINAL */}
      <section className="w-full bg-black text-white py-16 md:py-24">
        <div className="w-full px-margin-mobile md:px-margin-desktop text-center space-y-8 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-primary text-xs font-mono font-bold uppercase tracking-widest rounded-full">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>PRODUCTORA AMARTE // CONSULTORÍA ACTIVA</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl font-semibold uppercase tracking-tight leading-tight">
            Haz que tu marca hable a través de la imagen.
          </h2>
          <p className="font-body text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Platiquemos sobre los objetivos de tu negocio y diseñemos una estrategia audiovisual que capture la atención de tu audiencia.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contacto"
              className="px-8 py-3.5 bg-primary hover:bg-primary-hover text-white font-bold text-sm uppercase tracking-wider rounded-lg transition-colors duration-200 shadow-lg shadow-primary/25"
            >
              Iniciar Proyecto con Nosotros
            </Link>
            <Link
              to="/servicios"
              className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-sm uppercase tracking-wider rounded-lg transition-colors duration-200 border border-white/20"
            >
              Ver Servicios & Reels
            </Link>
          </div>
        </div>
      </section>

      {/* MODAL PARA EL VÍDEO DE PRESENTACIÓN */}
      {videoModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-fadeIn"
          onClick={() => setVideoModalOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute -top-12 right-0 md:-right-12 w-10 h-10 rounded-full bg-white/20 hover:bg-primary text-white flex items-center justify-center transition-colors duration-200 cursor-pointer z-10"
              aria-label="Cerrar reproductor"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>

            <div className="w-full aspect-[16/9] overflow-hidden rounded-xl bg-black shadow-2xl flex items-center justify-center">
              <video
                src="/portfolio/videos/presentacion.mp4"
                poster="/portfolio/thumbnails/presentacion.jpg"
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain bg-black"
              />
            </div>

            <div className="w-full mt-4 p-4 bg-surface rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-on-surface">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold block">
                  VIDEO DE PRESENTACIÓN INSTITUCIONAL
                </span>
                <h4 className="font-editorial text-xl font-semibold">
                  Productora Amarte — Reel de Identidad
                </h4>
                <p className="font-body text-xs text-on-surface-variant">
                  Estudio de producción cinematográfica, estrategias de marketing y community management.
                </p>
              </div>
              <Link
                to="/contacto"
                className="px-4 py-2 bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors shrink-0"
              >
                Contactar al Equipo
              </Link>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
