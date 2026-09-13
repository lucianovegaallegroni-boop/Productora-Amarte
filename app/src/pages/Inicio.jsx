import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Inicio() {
  const [activeCategory, setActiveCategory] = useState('all')

  const portfolioItems = [
    {
      id: 1, category: 'ficcion', image: 'https://picsum.photos/id/167/800/450',
      badgeLeft: 'San Sebastián Oficial', badgeRight: '112 MIN', type: 'LARGOMETRAJE FICCIÓN', year: '2024',
      title: 'Ecos del Silencio',
      description: 'Drama contemplativo sobre la memoria y el aislamiento grabado íntegramente en las islas Lofoten con luz natural de solsticio.',
      director: 'DIR: Mateo S. Roncal', camera: 'ARRI RAW / COOKE S4', featured: true
    },
    {
      id: 2, category: 'spots', image: 'https://picsum.photos/id/183/800/450',
      badgeLeft: 'Cannes Lions Bronce', badgeRight: '01:45', type: 'CAMPAÑA AUTOMOTRIZ GLOBAL', year: '2024',
      title: 'Volt: Neo Horizon',
      description: 'Pieza comercial de alta velocidad rodada con Russian Arm nocturno, exploración visual de la energía silenciosa y la urbe contemporánea.',
      director: 'DIR: Clara V. Meyer', camera: 'RED V-RAPTOR / MASTER ANAMORPHIC', featured: true
    },
    {
      id: 3, category: 'videoclips', image: 'https://picsum.photos/id/165/800/450',
      badgeLeft: 'Mejor Dir. de Arte', badgeRight: '03:50', type: 'VIDEOCLIP MUSICAL / SONY MUSIC', year: '2024',
      title: 'Sinfonía Carmesí',
      description: 'Experiencia hipnótica grabada en estudio cerrado con control robótico Bolt y diseño coreográfico escultural en 120 FPS.',
      director: 'DIR: Dante Almirón', camera: 'PHANTOM 4K / ZEISS SUPREME', featured: true
    },
    {
      id: 4, category: 'documentales', image: 'https://picsum.photos/id/139/800/450',
      badgeLeft: 'Premio Medio Ambiente', badgeRight: '54 MIN', type: 'DOCUMENTAL DE NATURALEZA', year: '2023',
      title: 'Guardianes del Abismo',
      description: 'Expedición submarina a más de 1.800 metros de profundidad documentando especies bioluminiscentes en fosas marinas del Pacífico Sur.',
      director: 'DIR: Elena & Gabriel Ruiz', camera: 'SONY VENICE 2 / CUSTOM NAUTICAM', featured: false
    },
    {
      id: 5, category: 'ficcion', image: 'https://picsum.photos/id/180/800/450',
      badgeLeft: 'Premio Guión & Fotografía', badgeRight: '98 MIN', type: 'THRILLER PSICOLÓGICO', year: '2023',
      title: 'El Último Solsticio',
      description: 'Estudio del dilema moral y el remordimiento, rodado en negativo analógico 35mm KODAK Vision3 con revelado fotoquímico personalizado.',
      director: 'DIR: Mateo S. Roncal', camera: '35MM FILM / LEICA LEITZ PRIME', featured: true
    },
    {
      id: 6, category: 'fashion', image: 'https://picsum.photos/id/164/800/450',
      badgeLeft: 'Milano Fashion Film Fest', badgeRight: '02:15', type: 'FASHION FILM / PARÍS', year: '2024',
      title: 'Aura Haute Couture',
      description: 'Homenaje al movimiento textil y la arquitectura moderna para la colección primavera-verano presentada en la semana de la moda.',
      director: 'DIR: Margot Chéron', camera: 'ARRI ALEXA MINI LF / ULTRA PRIME', featured: false
    }
  ]

  const filteredItems = portfolioItems.filter(
    item => activeCategory === 'all' || item.category === activeCategory
  )

  const categories = [
    { key: 'all', label: 'Todos [06]' },
    { key: 'ficcion', label: 'Ficción [02]' },
    { key: 'spots', label: 'Spots [01]' },
    { key: 'videoclips', label: 'Videoclips [01]' },
    { key: 'documentales', label: 'Documentales [01]' },
    { key: 'fashion', label: 'Fashion [01]' },
  ]

  return (
    <div className="flex flex-col w-full">

      {/* HERO SECTION */}
      <section className="relative w-full overflow-hidden pb-2xl md:pb-4xl">
        <div className="absolute -left-20 bottom-1/4 w-40 h-40 rounded-full bg-primary/10 pointer-events-none" />
        <div className="absolute -right-16 top-0 w-48 h-48 rounded-full bg-black/5 pointer-events-none" />
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[340px] bg-primary/5 rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="w-full px-margin-mobile md:px-margin-desktop pt-lg md:pt-2xl">
          {/* Metadata Strip */}
          <div className="flex flex-wrap items-center justify-between gap-sm pb-lg text-on-surface-variant">
            <div className="flex items-center gap-xs text-xs uppercase tracking-widest text-primary">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
              <span>ESTUDIO CINEMATOGRÁFICO INDEPENDIENTE</span>
            </div>
            <div className="hidden sm:flex items-center gap-lg text-sm font-bold text-on-surface-variant/80">
              <span>LAT 19°25'N / LON 99°07'W</span>
              <span className="text-surface-variant">|</span>
              <span>35MM • LARGE FORMAT RAW</span>
            </div>
          </div>

          {/* Título Hero & Descripción */}
          <div className="max-w-6xl space-y-md md:space-y-lg">
            <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-semibold text-on-surface uppercase tracking-tight leading-[1.05] max-w-5xl">
              <span className="block">CREAMOS CINE QUE DESAFÍA</span>
              <span className="block">
                LA <span className="font-editorial italic font-normal text-primary">GRAVEDAD</span> DE LAS IDEAS.
              </span>
            </h1>

            <p className="font-body text-base sm:text-lg md:text-xl text-on-surface-variant max-w-3xl pt-xs leading-relaxed">
              Diseñamos narrativas de escala monumental y precisión óptica milimétrica. Desde piezas de ficción galardonadas hasta campañas globales para marcas audaces, elevamos cada fotograma a la categoría de manifiesto artístico.
            </p>
          </div>

          {/* SHOWREEL PANORÁMICO */}
          <div className="mt-2xl relative group cursor-pointer overflow-hidden rounded-xl bg-surface-dim shadow-2xl">
            <div className="w-full aspect-[2.39/1] relative flex items-center justify-center overflow-hidden">
              <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" alt="Showreel cinematográfico Productora Amarte" src="https://picsum.photos/id/174/1920/803" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Camera overlay badges */}
              <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-sm md:p-lg">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold bg-black/60 backdrop-blur-md px-xs py-2xs text-primary rounded">TC 01:14:22:08</span>
                  <div className="flex items-center gap-2xs">
                    <span className="text-xs bg-black/60 backdrop-blur-md text-white px-xs py-2xs rounded">ARRI 4K HDR</span>
                    <span className="text-xs bg-black/60 backdrop-blur-md text-white px-xs py-2xs rounded">2.39:1 SCOPE</span>
                    <span className="text-xs bg-black/60 backdrop-blur-md text-primary px-xs py-2xs rounded">DOLBY ATMOS</span>
                  </div>
                </div>
                <div className="flex items-end justify-between">
                  <div className="space-y-2xs">
                    <p className="text-xs uppercase tracking-widest text-white/70">CARRETE OFICIAL DE TEMPORADA</p>
                    <h3 className="text-xl font-semibold text-white tracking-wide">SHOWREEL 2025: MATERIA Y LUZ</h3>
                  </div>
                  <div className="text-xs text-white/50 hidden md:block">AUDIO MASTER: STEREO / 5.1 / ATMOS</div>
                </div>
              </div>

              {/* Central Play Button */}
              <div className="relative z-10 flex flex-col items-center gap-sm group-hover:scale-105 transition-transform duration-300">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-xl transition-all duration-300 group-hover:bg-primary-hover group-hover:shadow-2xl">
                  <span className="material-symbols-outlined text-[36px] md:text-[44px] translate-x-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                </div>
                <div className="bg-black/70 backdrop-blur-lg px-md py-xs rounded-full shadow-lg">
                  <span className="text-sm font-bold uppercase tracking-widest text-white">Play Showreel 2025 (02:30)</span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 overflow-hidden">
                <div className="h-full bg-primary w-1/3 group-hover:w-full transition-all duration-1000" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MÉTRICAS DE IMPACTO */}
      <section className="w-full bg-surface-low py-2xl">
        <div className="w-full px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-lg md:gap-xl">
            {[
              { label: '[ VOLUMEN ]', value: '+140', desc: 'Proyectos cinematográficos, spots y documentales completados en postproducción in-house.' },
              { label: '[ RECONOCIMIENTO ]', value: '24', desc: 'Premios en festivales clase A: Cannes Lions, San Sebastián, Ciclope y BAFTA Shorts.' },
              { label: '[ ALCANCE GLOBAL ]', value: '3', desc: 'Continentes de rodaje recurrente: América, Europa y Asia con infraestructura local propia.' },
              { label: '[ CONFIANZA ]', value: '98%', desc: 'Tasa de fidelidad y recomendación de estudios, agencias y directores creativos de élite.' },
            ].map(m => (
              <div key={m.label} className="flex flex-col space-y-2xs">
                <span className="text-xs text-primary uppercase tracking-widest">{m.label}</span>
                <div className="text-3xl md:text-5xl font-bold text-on-surface tracking-tight">{m.value}</div>
                <p className="text-sm text-on-surface-variant">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTAFOLIO AUDIOVISUAL */}
      <section className="w-full py-3xl md:py-section" id="portafolio">
        <div className="w-full px-margin-mobile md:px-margin-desktop space-y-2xl">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-lg">
            <div className="space-y-xs max-w-2xl">
              <div className="flex items-center gap-xs text-xs text-primary uppercase tracking-widest">
                <span className="material-symbols-outlined text-[16px]">movie</span>
                <span>OBRAS SELECCIONADAS // ARCHIVO</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-on-surface">Portafolio Audiovisual</h2>
              <p className="text-base text-on-surface-variant">Una curaduría de nuestros proyectos más representativos. Dirección de fotografía con carácter, ritmo milimétrico y tratamiento cromático analógico.</p>
            </div>
            <div className="flex flex-wrap items-center gap-xs bg-surface-low p-2xs rounded-xl overflow-x-auto">
              {categories.map(cat => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-md py-xs rounded-lg text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
                    activeCategory === cat.key
                      ? 'bg-primary text-on-primary'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg md:gap-xl">
            {filteredItems.map(item => (
              <article key={item.id} className="group relative flex flex-col bg-surface-mid rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1">
                <div className="relative w-full aspect-video overflow-hidden bg-surface-dim">
                  <img className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" alt={item.title} src={item.image} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                  <div className="absolute top-sm left-sm right-sm flex items-center justify-between">
                    <span className={`text-xs px-xs py-2xs rounded ${item.featured ? 'bg-primary text-on-primary' : 'bg-surface-highest text-on-surface'}`}>{item.badgeLeft}</span>
                    <span className="text-sm font-bold bg-black/60 backdrop-blur-md px-xs py-2xs text-white rounded">{item.badgeRight}</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                    <div className="w-14 h-14 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-xl transform scale-90 group-hover:scale-100 transition-transform duration-200">
                      <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                    </div>
                  </div>
                </div>
                <div className="p-md flex-1 flex flex-col justify-between space-y-md bg-surface-mid">
                  <div className="space-y-2xs">
                    <div className="flex items-center justify-between text-on-surface-variant text-xs">
                      <span>{item.type}</span><span>{item.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-on-surface group-hover:text-primary transition-colors duration-200">{item.title}</h3>
                    <p className="text-sm text-on-surface-variant line-clamp-2">{item.description}</p>
                  </div>
                  <div className="pt-xs border-t border-surface-variant/40 flex items-center justify-between text-xs text-on-surface-variant">
                    <span>{item.director}</span><span className="text-secondary">{item.camera}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTES & MARCAS */}
      <section className="w-full bg-surface-dim py-2xl">
        <div className="w-full px-margin-mobile md:px-margin-desktop space-y-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-sm">
            <span className="text-xs uppercase tracking-widest text-on-surface-variant">COLABORADORES Y PLATAFORMAS GLOBALES</span>
            <span className="text-xs text-secondary">ESTÁNDAR DE CALIDAD BROADCAST &amp; THEATRICAL</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-md items-center">
            {['HBO', 'NETFLIX', 'SONY MUSIC', 'PORSCHE', 'RED BULL', 'SPOTIFY'].map(name => (
              <div key={name} className="p-md bg-surface-mid/50 hover:bg-surface-mid rounded-lg flex items-center justify-center transition-colors duration-200 h-20">
                <span className="text-xl font-bold tracking-widest text-on-surface-variant/80 hover:text-on-surface uppercase">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / MANIFIESTO */}
      <section className="relative w-full py-3xl md:py-section overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[160px] pointer-events-none -z-10" />
        <div className="w-full px-margin-mobile md:px-margin-desktop">
          <div className="p-xl md:p-3xl bg-surface-low rounded-2xl relative overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between text-sm font-bold text-primary pb-lg">
              <span>SLATE [PROD_CALL // 2025]</span>
              <span className="text-on-surface-variant text-xs font-normal">ROLL A // TAKE 01</span>
            </div>
            <div className="max-w-4xl space-y-lg">
              <h2 className="font-editorial text-3xl md:text-5xl text-on-surface leading-tight italic">
                "No grabamos simplemente lo que sucede frente al objetivo. Esculpimos el tiempo, la penumbra y la emoción hasta volverla inolvidable."
              </h2>
              <p className="text-lg text-on-surface-variant max-w-2xl">
                ¿Tienes un guión en desarrollo, un lanzamiento global de marca o un tratamiento que requiere una ejecución óptica extraordinaria? Nuestro equipo directivo evalúa proyectos de autor y producción comercial.
              </p>
              <div className="flex flex-wrap items-center gap-md pt-xs">
                <Link className="inline-flex items-center justify-center px-xl py-sm rounded-lg bg-primary text-on-primary text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:bg-primary-hover shadow-lg" to="/contacto">
                  <span className="material-symbols-outlined text-[20px] mr-2xs">calendar_today</span>
                  Agendar Llamada con Productor
                </Link>
                <Link className="inline-flex items-center justify-center px-lg py-sm rounded-lg border border-on-surface text-on-surface hover:bg-on-surface hover:text-white text-sm font-bold uppercase tracking-widest transition-all duration-200" to="/servicios">
                  Ver Servicios de Producción
                  <span className="material-symbols-outlined text-[18px] ml-2xs">arrow_forward</span>
                </Link>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 opacity-5 font-display text-[180px] font-black pointer-events-none select-none text-on-surface">24FPS</div>
          </div>
        </div>
      </section>

    </div>
  )
}
