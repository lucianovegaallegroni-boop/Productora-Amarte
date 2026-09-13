import React from 'react';
import { Link } from 'react-router-dom';

export default function Servicios() {
  const pilares = [
    {
      fase: '01',
      tag: 'FASE [01] • DESARROLLO',
      icon: 'edit_note',
      title: 'Preproducción',
      description: 'La arquitectura de la narrativa. Diseñamos cada milímetro de la producción para optimizar el presupuesto y garantizar la máxima potencia visual en set.',
      featured: false,
      deliverable: 'ENTREGABLE: CARPETA DE PRODUCCIÓN COMPLETA',
      items: [
        'Desarrollo y pulido de guion técnico y literario',
        'Storyboard, animatics y arte conceptual visual',
        'Casting internacional y dirección de talento',
        'Scouting técnico, permisos y seguros de locación',
        'Plan de rodaje y desglose de producción por planos',
        'Presupuestación detallada y optimización de recursos',
      ],
    },
    {
      fase: '02',
      tag: 'FASE [02] • RODAJE PRINCIPAL',
      icon: 'videocam',
      title: 'Producción en Set',
      description: 'El instante donde la visión cobra vida física. Crew de élite, disciplina técnica rigurosa y los sistemas de cámara más avanzados de la industria internacional.',
      featured: true,
      deliverable: 'ENTREGABLE: MATERIAL RAW & MASTER DAILIES',
      items: [
        'Dirección cinematográfica y puesta en escena',
        'Dirección de fotografía con sensores de gran formato',
        'Iluminación cinematográfica de alta potencia y grip profesional',
        'Captura de sonido directo multicanal en 32-bit float',
        'Dirección de arte, props y diseño de vestuario en set',
        'Monitoreo DIT en tiempo real y respaldo redundante LTO',
      ],
    },
    {
      fase: '03',
      tag: 'FASE [03] • FINALIZACIÓN',
      icon: 'movie_filter',
      title: 'Postproducción',
      description: 'Donde el material bruto se esculpe en una obra terminada. Montaje rítmico, etalonaje cinematográfico en ACES y diseño de audio inmersivo con master para cines.',
      featured: false,
      deliverable: 'ENTREGABLE: MASTER DCP 4K, PRORES & ARCHIVO',
      items: [
        'Montaje offline de corte de autor y conformado online 4K/8K',
        'Color grading profesional en DaVinci Resolve con monitores grading',
        'Composición digital, limpieza y efectos visuales (VFX)',
        'Diseño de sonido, Foley y mezcla inmersiva Dolby Atmos',
        'Masterización en formato DCP teatral para salas de cine',
        'Control de calidad (QC) exhaustivo y paquetes para streaming global',
      ],
    },
  ];

  const verticales = [
    {
      icon: 'campaign',
      title: 'Spots Publicitarios',
      description: 'Campañas comerciales de alto impacto para televisión, cine y plataformas digitales. Narrativas visuales condensadas que construyen deseo de marca con lenguaje cinematográfico.',
      format: '15s / 30s / 60s / 90s • 4K HDR',
      badge: 'COMMERCIAL',
    },
    {
      icon: 'music_note',
      title: 'Videoclips Musicales',
      description: 'Experiencias visuales que amplifican la identidad sonora de artistas líderes. Puestas en escena coreográficas, iluminación expresiva y diseño visual de vanguardia.',
      format: '3-7 MIN • PHANTOM HIGH SPEED',
      badge: 'MUSIC VIDEO',
    },
    {
      icon: 'video_camera_back',
      title: 'Documentales',
      description: 'Historias de la vida real abordadas con rigor de investigación y sensibilidad poética. Cinematografía en condiciones extremas y montaje con pulso narrativo profundo.',
      format: '30-120 MIN • SONY VENICE RAW',
      badge: 'DOCUMENTARY',
    },
    {
      icon: 'diamond',
      title: 'Fashion Films',
      description: 'Piezas audiovisuales donde la alta costura, el movimiento del cuerpo y la arquitectura dialogan en armonía. Texturas lumínicas sutiles y estética editorial refinada.',
      format: '1-5 MIN • 35MM / LARGE FORMAT',
      badge: 'FASHION',
    },
    {
      icon: 'devices',
      title: 'Contenido Digital & Branded',
      description: 'Series web, documentales de marca y formatos para ecosistemas digitales con la misma factura técnica y elegancia de una producción cinematográfica de gran pantalla.',
      format: 'MULTI-FORMATO (16:9 / 9:16)',
      badge: 'BRANDED',
    },
    {
      icon: 'theaters',
      title: 'Cine de Autor & Ficción',
      description: 'Cortometrajes y largometrajes destinados a festivales de clase A y distribución en salas comerciales. Desarrollo dramatúrgico integral y estándares internacionales de exhibición.',
      format: 'DCP THEATRICAL • 2.39:1 SCOPE',
      badge: 'CINEMA',
    },
  ];

  const arsenal = [
    {
      category: 'Cámaras & Sensores',
      icon: 'photo_camera',
      tag: '[5 SISTEMAS]',
      specs: [
        { name: 'ARRI ALEXA 65', detail: 'Sensor 65mm Open Gate 6K' },
        { name: 'ARRI ALEXA Mini LF', detail: 'Full Frame 4.5K Arri RAW' },
        { name: 'RED V-RAPTOR 8K', detail: 'VistaVision 120 FPS 8K' },
        { name: 'Sony VENICE 2', detail: '8.6K Dual Native ISO Sensor' },
        { name: 'Phantom Flex4K', detail: '1000 FPS High-Speed Cinema' },
      ],
    },
    {
      category: 'Sistemas Ópticos',
      icon: 'lens',
      tag: '[5 PAQUETES]',
      specs: [
        { name: 'Cooke S4/i Primes', detail: 'T2.0 Natural Organic Look' },
        { name: 'ARRI Signature Primes', detail: 'T1.8 LPL Mount Full Frame' },
        { name: 'Zeiss Supreme Primes', detail: 'Radiance Flares Coating' },
        { name: 'ARRI Master Anamorphics', detail: '2.0x Classic Cinematic Oval' },
        { name: 'Leica Leitz Primes', detail: 'High Telecentricity Resolution' },
      ],
    },
    {
      category: 'Iluminación & Grip',
      icon: 'light_mode',
      tag: '[STUDIO & ON-SET]',
      specs: [
        { name: 'ARRI SkyPanel S360-C', detail: 'Full Color Gamut Softlight' },
        { name: 'Litepanels Gemini 2x1', detail: 'Bi-Color Soft Panel Wireless' },
        { name: 'Astera Titan Tube Kits', detail: 'CRMX Wireless Tubes RGBMint' },
        { name: 'Dedolight DLED Neo', detail: 'Aspheric Precision Optics' },
        { name: 'HMI M-Series M90/M40', detail: 'Daylight High-Output Punch' },
      ],
    },
    {
      category: 'Sonido & Post-Audio',
      icon: 'headphones',
      tag: '[32-BIT / ATMOS]',
      specs: [
        { name: 'Sound Devices Scorpio', detail: '32-Channel 32-Bit Float Mixer' },
        { name: 'Sennheiser MKH 8060', detail: 'Short Shotgun RF Condenser' },
        { name: 'DPA 4017C & 4060', detail: 'Pristine Miniature Microphones' },
        { name: 'Neumann U87 Studio', detail: 'Gold-Standard Voiceover Mic' },
        { name: 'Dolby Atmos 7.1.4', detail: 'Mixing & Mastering Studio Suite' },
      ],
    },
  ];

  const pasos = [
    {
      num: '01',
      title: 'Briefing & Visión',
      desc: 'Escuchamos tu objetivo, analizamos las necesidades narrativas y definimos el concepto creativo fundacional con referencias visuales y tratamiento técnico.',
    },
    {
      num: '02',
      title: 'Preproducción',
      desc: 'Elaboramos el guion técnico, desgloses, casting, scouting de locaciones, plan de rodaje y presupuesto cerrado sin imprevistos.',
    },
    {
      num: '03',
      title: 'Rodaje en Set',
      desc: 'Despliegue integral con crew especializado de primer nivel, dirección de actores, fotografía de precisión y monitoreo DIT de alta fidelidad.',
    },
    {
      num: '04',
      title: 'Postproducción',
      desc: 'Montaje de edición, corrección de color en espacio ACES, composición visual VFX, mezcla de audio inmersiva y musicalización original.',
    },
    {
      num: '05',
      title: 'Master & Delivery',
      desc: 'Generación de masters DCP para festivales y cines, codificaciones ProRes 4444 XQ y entregables multiformato optimizados para cualquier pantalla.',
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
              <span>CATÁLOGO DE PRODUCCIÓN // END-TO-END</span>
            </div>
            <div className="hidden sm:flex items-center gap-lg text-xs font-mono text-on-surface-variant/80 tracking-wider">
              <span>FULL-SERVICE STUDIO</span>
              <span className="text-surface-variant">|</span>
              <span>4K / 8K ACES WORKFLOW</span>
              <span className="text-surface-variant">|</span>
              <span>DOLBY ATMOS CERTIFIED</span>
            </div>
          </div>

          {/* Título Hero & Descripción */}
          <div className="max-w-6xl space-y-6 md:space-y-8">
            <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-semibold text-on-surface uppercase tracking-tight leading-[1.05] max-w-5xl">
              <span className="block">SERVICIOS DE PRODUCCIÓN DE</span>
              <span className="block">
                <span className="font-editorial italic font-normal text-primary">PRECISIÓN</span> CINEMATOGRÁFICA.
              </span>
            </h1>

            <p className="font-body text-base sm:text-lg md:text-xl text-on-surface-variant max-w-3xl leading-relaxed">
              Ofrecemos un ecosistema integral de realización audiovisual: desde la concepción dramática inicial hasta la entrega del master final en salas de cine y plataformas globales. Cada etapa está calibrada para garantizar excelencia técnica y resonancia artística.
            </p>
          </div>
        </div>
      </section>

      {/* LOS TRES PILARES ESTRUCTURALES (Preproducción, Producción, Postproducción) */}
      <section className="w-full bg-surface-low/50 py-16 md:py-24 border-b border-surface-variant/20">
        <div className="w-full px-margin-mobile md:px-margin-desktop space-y-12">
          {/* Section Header */}
          <div className="max-w-3xl space-y-2">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-primary font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              <span>FASES ESTRUCTURALES // 01 — 03</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-semibold text-on-surface uppercase tracking-tight">
              Los Tres Pilares de Realización
            </h2>
            <p className="font-body text-base sm:text-lg text-on-surface-variant leading-relaxed">
              Una metodología estructurada donde cada fase protege y potencia la visión creativa del director y de la marca.
            </p>
          </div>

          {/* 3 Pillars Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {pilares.map((pilar) => (
              <div
                key={pilar.fase}
                className={`relative rounded-2xl flex flex-col justify-between transition-all duration-300 p-6 md:p-8 ${
                  pilar.featured
                    ? 'bg-surface-mid border-2 border-primary shadow-xl ring-1 ring-primary/20 hover:shadow-2xl hover:-translate-y-1'
                    : 'bg-surface-mid/80 border border-surface-variant/40 hover:border-primary/40 hover:bg-surface-mid hover:-translate-y-1'
                }`}
              >
                {/* Accent top line */}
                <div
                  className={`absolute top-0 left-8 right-8 h-1 rounded-full ${
                    pilar.featured ? 'bg-primary' : 'bg-transparent group-hover:bg-primary/50'
                  }`}
                />

                <div className="space-y-6">
                  {/* Top card bar */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        pilar.featured
                          ? 'bg-primary text-on-primary shadow-md shadow-primary/20'
                          : 'bg-surface-highest text-primary border border-surface-variant/40'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[26px]">{pilar.icon}</span>
                    </div>

                    <span className="font-mono text-xs font-bold tracking-widest px-2.5 py-1 rounded-md bg-surface-highest/80 text-primary border border-surface-variant/30">
                      {pilar.tag}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <div>
                    <h3 className="font-editorial text-2xl md:text-3xl font-bold text-on-surface mb-2">
                      {pilar.title}
                    </h3>
                    <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                      {pilar.description}
                    </p>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="pt-2 border-t border-surface-variant/30">
                    <div className="text-xs uppercase tracking-wider font-mono text-on-surface-variant/70 mb-3">
                      CAPACIDADES Y TAREAS CLAVE
                    </div>
                    <ul className="space-y-2.5">
                      {pilar.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm font-body text-on-surface">
                          <span className="text-primary text-xs font-bold mt-0.5 flex-shrink-0">◆</span>
                          <span className="leading-snug text-on-surface/90">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Deliverable Footer */}
                <div className="mt-8 pt-4 border-t border-surface-variant/40">
                  <div className="flex items-center justify-between text-xs font-mono text-primary font-bold">
                    <span>{pilar.deliverable}</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICIOS ESPECIALIZADOS (6 Áreas) */}
      <section className="w-full py-16 md:py-24 border-b border-surface-variant/20">
        <div className="w-full px-margin-mobile md:px-margin-desktop space-y-12">
          <div className="max-w-3xl space-y-2">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-primary font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              <span>VERTICALES CREATIVAS // ESPECIALIZACIÓN</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-semibold text-on-surface uppercase tracking-tight">
              Formatos y Narrativas Especializadas
            </h2>
            <p className="font-body text-base sm:text-lg text-on-surface-variant leading-relaxed">
              Cada género demanda un lenguaje cinematográfico y un despliegue técnico particular. Estas son nuestras áreas de especialización.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {verticales.map((item, idx) => (
              <div
                key={idx}
                className="group p-6 md:p-8 bg-surface-mid/60 rounded-2xl border border-surface-variant/40 hover:border-primary/50 hover:bg-surface-mid transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-surface-highest/80 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all duration-300 shadow-sm">
                      <span className="material-symbols-outlined text-[26px]">{item.icon}</span>
                    </div>
                    <span className="text-[11px] font-mono tracking-widest text-on-surface-variant/70 uppercase px-2 py-0.5 rounded bg-surface-highest/50 border border-surface-variant/30">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-editorial text-xl md:text-2xl font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-surface-variant/30 flex items-center justify-between text-xs font-mono text-on-surface-variant/80">
                  <span>{item.format}</span>
                  <span className="material-symbols-outlined text-[16px] text-primary transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARSENAL TÉCNICO (Tech Specs) */}
      <section className="w-full bg-surface-low/60 py-16 md:py-24 border-b border-surface-variant/20">
        <div className="w-full px-margin-mobile md:px-margin-desktop space-y-12">
          <div className="max-w-3xl space-y-2">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-primary font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              <span>INFRAESTRUCTURA // TECH SPECS</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-semibold text-on-surface uppercase tracking-tight">
              Arsenal Técnico de Élite
            </h2>
            <p className="font-body text-base sm:text-lg text-on-surface-variant leading-relaxed">
              Equipamiento cinematográfico propio y alianzas exclusivas con las principales casas de renta óptica internacionales.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {arsenal.map((col, idx) => (
              <div
                key={idx}
                className="bg-surface-mid/80 rounded-2xl p-6 border border-surface-variant/40 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-surface-variant/40">
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-primary text-[22px]">{col.icon}</span>
                    <h3 className="font-editorial text-lg font-bold text-on-surface">{col.category}</h3>
                  </div>
                  <span className="text-[10px] font-mono text-primary font-bold">{col.tag}</span>
                </div>

                <ul className="space-y-3.5">
                  {col.specs.map((item, sIdx) => (
                    <li key={sIdx} className="space-y-0.5">
                      <div className="font-body text-sm font-bold text-on-surface flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
                        <span>{item.name}</span>
                      </div>
                      <div className="font-mono text-xs text-on-surface-variant/70 pl-3">
                        {item.detail}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PIPELINE / PROCESO */}
      <section className="w-full py-16 md:py-24 border-b border-surface-variant/20">
        <div className="w-full px-margin-mobile md:px-margin-desktop space-y-12">
          <div className="max-w-3xl space-y-2">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-primary font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              <span>WORKFLOW // PIPELINE</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-semibold text-on-surface uppercase tracking-tight">
              Del Concepto al Master
            </h2>
            <p className="font-body text-base sm:text-lg text-on-surface-variant leading-relaxed">
              Un flujo de trabajo riguroso y transparente, probado en más de 140 producciones exitosas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6">
            {pasos.map((paso, idx) => (
              <div
                key={idx}
                className="relative p-6 bg-surface-mid/70 rounded-2xl border border-surface-variant/40 hover:border-primary/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-bold text-primary">{paso.num}</span>
                    <span className="text-[10px] font-mono uppercase text-on-surface-variant/60 tracking-wider">
                      FASE {paso.num}
                    </span>
                  </div>
                  <h3 className="font-editorial text-lg font-bold text-on-surface mb-2">
                    {paso.title}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    {paso.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-surface-variant/30 flex items-center gap-1.5 text-[11px] font-mono text-primary font-semibold">
                  <span className="w-1 h-1 rounded-full bg-primary"></span>
                  <span>CONFIRMADO</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative w-full py-16 md:py-24 overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[160px] pointer-events-none -z-10" />

        <div className="w-full px-margin-mobile md:px-margin-desktop">
          <div className="p-8 md:p-14 bg-surface-mid rounded-3xl border border-surface-variant/40 relative overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between font-mono text-xs font-bold text-primary pb-6 border-b border-surface-variant/30">
              <span className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
                SLATE [QUOTE_REQ // 2026]
              </span>
              <span className="text-on-surface-variant hidden sm:inline">PRODUCCIÓN CINEMATOGRÁFICA</span>
            </div>

            <div className="max-w-3xl space-y-6 pt-6">
              <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-on-surface uppercase tracking-tight leading-tight">
                Lleva tu proyecto al siguiente nivel visual.
              </h2>
              <p className="font-body text-base sm:text-lg text-on-surface-variant leading-relaxed">
                Cuéntanos tu idea o tratamiento. Nuestro equipo de directores y productores analizará la viabilidad técnica y te presentará una propuesta de producción detallada con desglose y presupuesto.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/contacto"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-primary text-on-primary font-body text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:bg-primary-hover hover:scale-[1.02] shadow-lg shadow-primary/20"
                >
                  <span className="material-symbols-outlined text-[20px] mr-2">request_quote</span>
                  Solicitar Presupuesto
                </Link>
                <Link
                  to="/#portafolio"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-surface-highest text-on-surface hover:text-primary font-body text-sm font-bold uppercase tracking-widest transition-all duration-200 border border-surface-variant/40"
                >
                  Ver Showreel & Trabajos
                  <span className="material-symbols-outlined text-[18px] ml-2">arrow_forward</span>
                </Link>
              </div>
            </div>

            <div className="absolute -bottom-10 -right-10 opacity-5 font-editorial text-[200px] pointer-events-none select-none text-on-surface">
              CINEMA
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
