import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Contacto() {
  const [formSuccess, setFormSuccess] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSuccess(true);
    setTimeout(() => {
      setFormSuccess(false);
      e.target.reset();
    }, 3000);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const inputClassName = "w-full px-md py-sm bg-white border border-outline-variant rounded-lg text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary focus:outline-none transition-colors duration-200";

  return (
    <main className="w-full bg-background min-h-screen pt-20">
      <div className="flex flex-col w-full">
        {/* HERO */}
        <section className="relative w-full overflow-hidden pb-2xl md:pb-3xl">
          <div className="absolute -left-20 bottom-1/4 w-40 h-40 rounded-full bg-primary/10 pointer-events-none" />
          <div className="absolute -right-16 top-0 w-48 h-48 rounded-full bg-black/5 pointer-events-none" />

          <div className="w-full px-margin-mobile md:px-margin-desktop pt-lg md:pt-2xl">
            <div className="flex flex-wrap items-center justify-between gap-sm pb-lg text-on-surface-variant">
              <div className="flex items-center gap-xs font-body text-xs uppercase tracking-widest text-primary">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
                <span>INICIA TU PROYECTO</span>
              </div>
              <div className="hidden sm:flex items-center gap-lg font-body text-sm font-bold text-on-surface-variant/80">
                <span>OPEN FOR PROJECTS</span>
                <span className="text-surface-variant">|</span>
                <span>2025 Q3-Q4</span>
              </div>
            </div>
            <div className="max-w-6xl space-y-md">
              <h1 className="font-display text-4xl font-black md:text-7xl text-on-surface leading-tight tracking-tight uppercase">
                Convierte tu visión en <span className="italic font-normal text-primary">realidad</span> cinematográfica.
              </h1>
              <p className="font-body text-lg text-on-surface-variant max-w-3xl pt-xs">
                Cada gran producción comienza con una conversación. Cuéntanos tu idea, tu visión, tu sueño cinematográfico. Nuestro equipo directivo está listo para evaluar tu proyecto y diseñar un plan de acción a la medida.
              </p>
            </div>
          </div>
        </section>

        {/* FORMULARIO + CONTACTO */}
        <section className="w-full py-2xl md:py-3xl">
          <div className="w-full px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2xl">
              {/* Formulario (2 cols) */}
              <div className="lg:col-span-2 bg-surface-mid rounded-xl p-lg md:p-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
                <div className="flex items-center justify-between mb-xl">
                  <div className="flex items-center gap-xs font-body text-xs text-primary uppercase tracking-widest">
                    <span className="material-symbols-outlined text-[16px]">edit_document</span>
                    <span>FORMULARIO DE PROYECTO</span>
                  </div>
                  <span className="font-body text-sm font-bold text-on-surface-variant">TAKE 01</span>
                </div>

                <form className="space-y-lg" onSubmit={handleFormSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                    <div className="space-y-2xs">
                      <label className="font-body text-sm font-bold text-on-surface-variant uppercase tracking-wider" htmlFor="nombre">Nombre completo</label>
                      <input className={inputClassName} id="nombre" name="nombre" placeholder="Tu nombre completo" required type="text" />
                    </div>
                    <div className="space-y-2xs">
                      <label className="font-body text-sm font-bold text-on-surface-variant uppercase tracking-wider" htmlFor="email">Correo electrónico</label>
                      <input className={inputClassName} id="email" name="email" placeholder="correo@ejemplo.com" required type="email" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                    <div className="space-y-2xs">
                      <label className="font-body text-sm font-bold text-on-surface-variant uppercase tracking-wider" htmlFor="telefono">Teléfono</label>
                      <input className={inputClassName} id="telefono" name="telefono" placeholder="+52 55 1234 5678" type="tel" />
                    </div>
                    <div className="space-y-2xs">
                      <label className="font-body text-sm font-bold text-on-surface-variant uppercase tracking-wider" htmlFor="tipo">Tipo de proyecto</label>
                      <select className={`${inputClassName} appearance-none cursor-pointer`} id="tipo" name="tipo" required>
                        <option value="">Selecciona una opción</option>
                        <option value="largometraje">Largometraje</option>
                        <option value="cortometraje">Cortometraje</option>
                        <option value="spot">Spot Publicitario</option>
                        <option value="videoclip">Videoclip Musical</option>
                        <option value="documental">Documental</option>
                        <option value="fashion">Fashion Film</option>
                        <option value="digital">Contenido Digital</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2xs">
                    <label className="font-body text-sm font-bold text-on-surface-variant uppercase tracking-wider" htmlFor="presupuesto">Presupuesto estimado</label>
                    <select className={`${inputClassName} appearance-none cursor-pointer`} id="presupuesto" name="presupuesto">
                      <option value="">Selecciona un rango</option>
                      <option value="10k">Menos de $10,000 USD</option>
                      <option value="10-50k">$10,000 – $50,000 USD</option>
                      <option value="50-150k">$50,000 – $150,000 USD</option>
                      <option value="150-500k">$150,000 – $500,000 USD</option>
                      <option value="500k+">Más de $500,000 USD</option>
                      <option value="tbd">Por definir</option>
                    </select>
                  </div>

                  <div className="space-y-2xs">
                    <label className="font-body text-sm font-bold text-on-surface-variant uppercase tracking-wider" htmlFor="mensaje">Mensaje / Descripción del proyecto</label>
                    <textarea className={`${inputClassName} resize-y min-h-[160px]`} id="mensaje" name="mensaje" placeholder="Cuéntanos sobre tu proyecto: la historia, el estilo visual, referencias, fechas tentativas..." required></textarea>
                  </div>

                  <button className={`w-full md:w-auto inline-flex items-center justify-center px-xl py-sm rounded-lg text-on-primary font-body text-sm font-bold uppercase tracking-widest transition-all duration-300 shadow-sm ${formSuccess ? 'bg-primary-hover' : 'bg-primary hover:bg-primary-hover hover:shadow-md'}`} type="submit">
                    {formSuccess ? (
                      <>
                        <span className="material-symbols-outlined text-[20px] mr-2xs">check_circle</span>
                        ¡Propuesta Enviada!
                      </>
                    ) : (
                      <>
                        <span className="material-symbols-outlined text-[20px] mr-2xs">send</span>
                        Enviar Propuesta de Proyecto
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Info de contacto */}
              <div className="space-y-lg">
                <div className="space-y-xs mb-lg">
                  <div className="flex items-center gap-xs font-body text-xs text-primary uppercase tracking-widest">
                    <span className="material-symbols-outlined text-[16px]">contact_page</span>
                    <span>CONTACTO DIRECTO</span>
                  </div>
                  <h3 className="font-body text-xl font-semibold text-on-surface">Información de Contacto</h3>
                </div>

                <div className="p-md bg-surface-low rounded-xl flex items-start gap-md hover:bg-surface-mid transition-colors duration-200">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary text-[20px]">mail</span>
                  </div>
                  <div>
                    <p className="font-body text-sm font-bold text-on-surface uppercase tracking-wider mb-2xs">Email</p>
                    <p className="font-body text-base text-on-surface-variant">contacto@productoraamarte.com</p>
                  </div>
                </div>

                <div className="p-md bg-surface-low rounded-xl flex items-start gap-md hover:bg-surface-mid transition-colors duration-200">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary text-[20px]">phone</span>
                  </div>
                  <div>
                    <p className="font-body text-sm font-bold text-on-surface uppercase tracking-wider mb-2xs">Teléfono</p>
                    <p className="font-body text-base text-on-surface-variant">+52 55 1234 5678</p>
                  </div>
                </div>

                <div className="p-md bg-surface-low rounded-xl flex items-start gap-md hover:bg-surface-mid transition-colors duration-200">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary text-[20px]">location_on</span>
                  </div>
                  <div>
                    <p className="font-body text-sm font-bold text-on-surface uppercase tracking-wider mb-2xs">Ubicación</p>
                    <p className="font-body text-base text-on-surface-variant">Ciudad de México, México</p>
                  </div>
                </div>

                <div className="p-md bg-surface-low rounded-xl flex items-start gap-md hover:bg-surface-mid transition-colors duration-200">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary text-[20px]">schedule</span>
                  </div>
                  <div>
                    <p className="font-body text-sm font-bold text-on-surface uppercase tracking-wider mb-2xs">Horario</p>
                    <p className="font-body text-base text-on-surface-variant">Lun – Vie, 9:00 – 18:00 (CST)</p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-lg border-t border-outline/40">
                  <p className="font-body text-sm font-bold text-on-surface uppercase tracking-wider mb-md">Redes Sociales</p>
                  <div className="flex flex-wrap gap-sm">
                    <a className="px-md py-xs bg-surface-low rounded-lg font-body text-xs text-on-surface-variant hover:text-primary hover:bg-surface-mid transition-all duration-200 uppercase tracking-widest" href="#">Vimeo</a>
                    <a className="px-md py-xs bg-surface-low rounded-lg font-body text-xs text-on-surface-variant hover:text-primary hover:bg-surface-mid transition-all duration-200 uppercase tracking-widest" href="#">Instagram</a>
                    <a className="px-md py-xs bg-surface-low rounded-lg font-body text-xs text-on-surface-variant hover:text-primary hover:bg-surface-mid transition-all duration-200 uppercase tracking-widest" href="#">Behance</a>
                    <a className="px-md py-xs bg-surface-low rounded-lg font-body text-xs text-on-surface-variant hover:text-primary hover:bg-surface-mid transition-all duration-200 uppercase tracking-widest" href="#">YouTube</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ESTUDIO / MAPA */}
        <section className="w-full bg-surface-low py-3xl md:py-section">
          <div className="w-full px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2xl items-start">
              {/* Map Placeholder */}
              <div className="bg-surface-dim rounded-xl overflow-hidden aspect-[16/10] relative flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-surface-dim via-surface-mid to-surface-low opacity-90"></div>
                <div className="relative z-10 text-center space-y-md">
                  <span className="material-symbols-outlined text-primary text-[48px]">map</span>
                  <div>
                    <p className="font-body text-xl font-semibold text-on-surface">Nuestro Estudio</p>
                    <p className="font-body text-sm font-bold text-primary mt-2xs">LAT 19°25'N / LON 99°07'W</p>
                  </div>
                  <p className="font-body text-sm text-on-surface-variant max-w-xs mx-auto">Col. Roma Norte, Ciudad de México, CP 06700</p>
                </div>
                {/* Grid pattern decoration */}
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(rgba(255,0,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,0,0.3) 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
              </div>

              {/* Studio Info */}
              <div className="space-y-lg">
                <div className="space-y-xs">
                  <div className="flex items-center gap-xs font-body text-xs text-primary uppercase tracking-widest">
                    <span className="material-symbols-outlined text-[16px]">apartment</span>
                    <span>SEDE PRINCIPAL // CDMX</span>
                  </div>
                  <h2 className="font-body text-3xl font-bold md:text-3xl text-on-surface">Nuestro Estudio</h2>
                  <p className="font-body text-base text-on-surface-variant">
                    Ubicado en el corazón creativo de la Ciudad de México, nuestro estudio combina espacios de preproducción, sala de color calibrada, suites de edición y un stage de rodaje controlado de 200m².
                  </p>
                </div>

                <div className="space-y-md">
                  <div className="p-md bg-surface-mid rounded-xl">
                    <h4 className="font-body text-sm font-bold text-on-surface uppercase tracking-wider mb-sm">Dirección Completa</h4>
                    <p className="font-body text-base text-on-surface-variant">Calle Orizaba 123, Int. 4<br />Col. Roma Norte, Cuauhtémoc<br />Ciudad de México, CP 06700, México</p>
                  </div>
                  <div className="p-md bg-surface-mid rounded-xl">
                    <h4 className="font-body text-sm font-bold text-on-surface uppercase tracking-wider mb-sm">Horario de Operación</h4>
                    <div className="space-y-2xs font-body text-sm">
                      <div className="flex justify-between text-on-surface-variant"><span>Lunes – Viernes</span><span className="text-on-surface">9:00 – 18:00</span></div>
                      <div className="flex justify-between text-on-surface-variant"><span>Sábado</span><span className="text-on-surface">10:00 – 14:00 (con cita)</span></div>
                      <div className="flex justify-between text-on-surface-variant"><span>Domingo</span><span className="text-secondary">Cerrado</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full py-3xl md:py-section">
          <div className="w-full px-margin-mobile md:px-margin-desktop space-y-2xl">
            <div className="space-y-xs max-w-2xl">
              <div className="flex items-center gap-xs font-body text-xs text-primary uppercase tracking-widest">
                <span className="material-symbols-outlined text-[16px]">help</span>
                <span>FAQ // PREGUNTAS FRECUENTES</span>
              </div>
              <h2 className="font-body text-3xl font-bold md:text-5xl text-on-surface">Preguntas Frecuentes</h2>
            </div>

            <div className="max-w-4xl space-y-sm">
              {[
                {
                  q: "¿Cuál es el proceso para iniciar un proyecto?",
                  a: "Todo comienza con una conversación. Puedes enviarnos tu propuesta a través del formulario o contactarnos directamente. Nuestro equipo de producción evaluará tu proyecto en un plazo de 48-72 horas y agendaremos una videollamada para discutir el concepto, el alcance, el presupuesto y el cronograma. Una vez alineados, procedemos con la fase de preproducción."
                },
                {
                  q: "¿Trabajan con presupuestos limitados?",
                  a: "Sí. Creemos que la calidad no debería estar limitada por el presupuesto. Trabajamos con proyectos de todos los tamaños y adaptamos nuestros recursos y equipo para maximizar el valor de cada producción. Lo más importante para nosotros es la historia y la visión del proyecto."
                },
                {
                  q: "¿Ofrecen servicios internacionales?",
                  a: "Absolutamente. Hemos rodado en más de 12 países y 3 continentes. Contamos con infraestructura local, partners técnicos y fijadores en las principales ciudades de América, Europa y Asia. Nuestro equipo maneja producción internacional con experiencia en permisos, logística y regulaciones locales."
                },
                {
                  q: "¿Cuánto tiempo toma producir un proyecto típico?",
                  a: "Depende del tipo y escala del proyecto. Un spot publicitario puede completarse en 3-6 semanas. Un videoclip en 4-8 semanas. Un cortometraje en 2-4 meses. Un largometraje puede tomar de 6 meses a 2 años. Siempre proporcionamos un cronograma detallado durante la fase de preproducción."
                },
                {
                  q: "¿Qué formatos de entrega manejan?",
                  a: "Entregamos en todos los formatos profesionales: DCP para proyección en sala, ProRes/DNxHR para broadcast, H.264/H.265 para digital, HDR10+ y Dolby Vision para plataformas de streaming. También manejamos masterización en Dolby Atmos para audio inmersivo y subtitulado/localización en múltiples idiomas."
                },
                {
                  q: "¿Cómo puedo ver más de su trabajo?",
                  a: (
                    <>
                      Puedes explorar nuestro <Link to="/#portafolio" className="text-primary hover:underline">portafolio audiovisual</Link> en nuestra página principal. También compartimos contenido behind-the-scenes y nuevos proyectos en nuestras redes sociales: Vimeo, Instagram, Behance y YouTube. Para proyectos confidenciales o no publicados, agenda una llamada con nuestro equipo.
                    </>
                  )
                }
              ].map((faq, index) => (
                <div key={index} className={`bg-surface-mid rounded-xl overflow-hidden border ${openFaq === index ? 'border-primary/30' : 'border-outline/30'}`}>
                  <button
                    className="w-full flex items-center justify-between p-lg text-left"
                    type="button"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="font-body text-xl font-semibold text-on-surface pr-md">{faq.q}</span>
                    <span className="material-symbols-outlined text-primary text-[24px] transition-transform duration-300" style={{ transform: openFaq === index ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                      expand_more
                    </span>
                  </button>
                  <div className={`px-lg pb-lg ${openFaq === index ? 'block' : 'hidden'}`}>
                    <p className="font-body text-base text-on-surface-variant">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
