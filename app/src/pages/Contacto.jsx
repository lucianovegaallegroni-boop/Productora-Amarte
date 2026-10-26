import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { serviciosData } from '../data/servicesData';

export default function Contacto() {
  const [formSuccess, setFormSuccess] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!selectedService) {
      setDropdownOpen(true);
      return;
    }
    setFormSuccess(true);
    setTimeout(() => {
      setFormSuccess(false);
      setSelectedService(null);
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
              <div className="flex items-center gap-xs font-body text-xs uppercase tracking-widest text-primary font-bold">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
                <span>INICIA TU PROYECTO // CONSULTORÍA</span>
              </div>
              <div className="hidden sm:flex items-center gap-lg font-body text-sm font-bold text-on-surface-variant/80">
                <span>PRODUCTORA AMARTE</span>
                <span className="text-surface-variant">|</span>
                <span>DISPONIBLE PARA NUEVAS MARCAS</span>
              </div>
            </div>
            <div className="max-w-6xl space-y-md">
              <h1 className="font-editorial text-4xl font-semibold md:text-7xl text-on-surface leading-tight tracking-tight uppercase">
                Potenciemos tu marca con <span className="italic font-normal text-primary">contenido</span> que convierte.
              </h1>
              <p className="font-body text-lg text-on-surface-variant max-w-3xl pt-xs leading-relaxed">
                Cuéntanos sobre tu empresa, tus metas y lo que buscas lograr. Ya sea que necesites un paquete mensual de reels, gestión integral de redes sociales, una sesión fotográfica o la cobertura en vivo de tu próximo evento, nuestro equipo está listo para asesorarte.
              </p>
            </div>
          </div>
        </section>

        {/* FORMULARIO + CONTACTO */}
        <section className="w-full py-2xl md:py-3xl">
          <div className="w-full px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2xl">
              {/* Formulario (2 cols) */}
              <div className="lg:col-span-2 bg-surface-mid rounded-xl p-lg md:p-xl relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary rounded-t-xl"></div>
                <div className="flex items-center justify-between mb-xl">
                  <div className="flex items-center gap-xs font-body text-xs text-primary uppercase tracking-widest font-bold">
                    <span className="material-symbols-outlined text-[16px]">edit_document</span>
                    <span>SOLICITUD DE PROYECTO & ASESORÍA</span>
                  </div>
                  <span className="font-body text-sm font-bold text-on-surface-variant">2026</span>
                </div>

                <form className="space-y-lg" onSubmit={handleFormSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                    <div className="space-y-2xs">
                      <label className="font-body text-sm font-bold text-on-surface-variant uppercase tracking-wider" htmlFor="nombre">Nombre completo</label>
                      <input className={inputClassName} id="nombre" name="nombre" placeholder="Tu nombre y apellido" required type="text" />
                    </div>
                    <div className="space-y-2xs">
                      <label className="font-body text-sm font-bold text-on-surface-variant uppercase tracking-wider" htmlFor="empresa">Empresa o Marca</label>
                      <input className={inputClassName} id="empresa" name="empresa" placeholder="Nombre de tu marca / negocio" required type="text" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                    <div className="space-y-2xs">
                      <label className="font-body text-sm font-bold text-on-surface-variant uppercase tracking-wider" htmlFor="email">Correo electrónico</label>
                      <input className={inputClassName} id="email" name="email" placeholder="correo@tuempresa.com" required type="email" />
                    </div>
                    <div className="space-y-2xs">
                      <label className="font-body text-sm font-bold text-on-surface-variant uppercase tracking-wider" htmlFor="telefono">Teléfono / WhatsApp</label>
                      <input className={inputClassName} id="telefono" name="telefono" placeholder="+507 6774-2518" type="tel" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                    <div className="space-y-2xs relative" ref={dropdownRef}>
                      <label className="font-body text-sm font-bold text-on-surface-variant uppercase tracking-wider" htmlFor="tipo">Servicio de interés</label>
                      <input type="hidden" name="tipo" value={selectedService?.id || ''} required />
                      <button
                        id="tipo"
                        type="button"
                        onClick={() => setDropdownOpen((prev) => !prev)}
                        aria-haspopup="listbox"
                        aria-expanded={dropdownOpen}
                        className={`w-full px-md py-sm bg-white border rounded-lg text-left flex items-center justify-between gap-2 transition-all duration-200 cursor-pointer ${
                          dropdownOpen
                            ? 'border-primary ring-2 ring-primary/15 shadow-sm'
                            : 'border-outline-variant hover:border-on-surface-variant/60'
                        }`}
                      >
                        {selectedService ? (
                          <span className="flex items-center gap-2.5 text-on-surface font-medium truncate">
                            <span className="material-symbols-outlined text-primary text-[18px] shrink-0">
                              {selectedService.icon}
                            </span>
                            <span className="truncate">{selectedService.title}</span>
                          </span>
                        ) : (
                          <span className="text-on-surface-variant/50">Selecciona un servicio</span>
                        )}
                        <span
                          className={`material-symbols-outlined text-primary text-[22px] shrink-0 transition-transform duration-200 ${
                            dropdownOpen ? 'rotate-180' : ''
                          }`}
                        >
                          expand_more
                        </span>
                      </button>

                      {dropdownOpen && (
                        <ul
                          role="listbox"
                          className="absolute z-30 left-0 right-0 mt-1.5 bg-white border border-surface-variant/60 rounded-xl shadow-xl overflow-hidden py-1.5 divide-y divide-surface-variant/20"
                        >
                          {serviciosData.map((servicio) => {
                            const isSelected = selectedService?.id === servicio.id;
                            return (
                              <li
                                key={servicio.id}
                                role="option"
                                aria-selected={isSelected}
                                onClick={() => {
                                  setSelectedService(servicio);
                                  setDropdownOpen(false);
                                }}
                                className={`px-4 py-3 flex items-center justify-between gap-3 cursor-pointer transition-colors duration-150 ${
                                  isSelected
                                    ? 'bg-primary/10 text-primary font-semibold'
                                    : 'text-on-surface hover:bg-surface-mid'
                                }`}
                              >
                                <div className="flex items-center gap-3 min-w-0">
                                  <div
                                    className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                                      isSelected
                                        ? 'bg-primary text-white'
                                        : 'bg-primary/10 text-primary'
                                    }`}
                                  >
                                    <span className="material-symbols-outlined text-[18px]">
                                      {servicio.icon}
                                    </span>
                                  </div>
                                  <div className="min-w-0">
                                    <p className="font-body text-sm font-semibold leading-tight truncate">
                                      {servicio.title}
                                    </p>
                                    <p className="font-mono text-[10px] uppercase tracking-wider text-on-surface-variant truncate mt-0.5">
                                      {servicio.highlight}
                                    </p>
                                  </div>
                                </div>
                                {isSelected && (
                                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0">
                                    check_circle
                                  </span>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </div>

                    <div className="space-y-2xs">
                      <label className="font-body text-sm font-bold text-on-surface-variant uppercase tracking-wider" htmlFor="redes">Red social principal de la marca</label>
                      <input className={inputClassName} id="redes" name="redes" placeholder="@tu_cuenta (Instagram, TikTok, etc.)" type="text" />
                    </div>
                  </div>

                  <div className="space-y-2xs">
                    <label className="font-body text-sm font-bold text-on-surface-variant uppercase tracking-wider" htmlFor="mensaje">Descripción de las necesidades de la marca</label>
                    <textarea className={`${inputClassName} resize-y min-h-[140px]`} id="mensaje" name="mensaje" placeholder="Cuéntanos sobre tu negocio, tus objetivos actuales, qué tipo de contenido necesitas y fechas aproximadas..." required></textarea>
                  </div>

                  <button className={`w-full md:w-auto inline-flex items-center justify-center px-xl py-sm rounded-lg text-white font-body text-sm font-bold uppercase tracking-widest transition-all duration-300 shadow-md ${formSuccess ? 'bg-primary-hover' : 'bg-primary hover:bg-primary-hover hover:shadow-lg'}`} type="submit">
                    {formSuccess ? (
                      <>
                        <span className="material-symbols-outlined text-[20px] mr-2xs">check_circle</span>
                        ¡Mensaje Enviado con Éxito!
                      </>
                    ) : (
                      <>
                        <span className="material-symbols-outlined text-[20px] mr-2xs">send</span>
                        Enviar Solicitud de Proyecto
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Info de contacto */}
              <div className="space-y-lg">
                <div className="space-y-xs mb-lg">
                  <div className="flex items-center gap-xs font-body text-xs text-primary uppercase tracking-widest font-bold">
                    <span className="material-symbols-outlined text-[16px]">contact_page</span>
                    <span>ATENCIÓN DIRECTA</span>
                  </div>
                  <h3 className="font-editorial text-2xl font-semibold text-on-surface">Información de Contacto</h3>
                </div>

                <div className="p-md bg-surface-low rounded-xl flex items-start gap-md hover:bg-surface-mid transition-colors duration-200">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary text-[20px]">mail</span>
                  </div>
                  <div>
                    <p className="font-body text-xs font-bold text-on-surface uppercase tracking-wider mb-2xs">Email</p>
                    <p className="font-body text-sm text-on-surface-variant">contacto@productoraamarte.com</p>
                  </div>
                </div>

                <div className="p-md bg-surface-low rounded-xl flex items-start gap-md hover:bg-surface-mid transition-colors duration-200">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary text-[20px]">phone</span>
                  </div>
                  <div>
                    <p className="font-body text-xs font-bold text-on-surface uppercase tracking-wider mb-2xs">WhatsApp / Teléfono</p>
                    <p className="font-body text-sm text-on-surface-variant">+507 6774-2518</p>
                  </div>
                </div>

                <div className="p-md bg-surface-low rounded-xl flex items-start gap-md hover:bg-surface-mid transition-colors duration-200">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary text-[20px]">location_on</span>
                  </div>
                  <div>
                    <p className="font-body text-xs font-bold text-on-surface uppercase tracking-wider mb-2xs">Ubicación</p>
                    <p className="font-body text-sm text-on-surface-variant">Ciudad de México, México</p>
                  </div>
                </div>

                <div className="p-md bg-surface-low rounded-xl flex items-start gap-md hover:bg-surface-mid transition-colors duration-200">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary text-[20px]">schedule</span>
                  </div>
                  <div>
                    <p className="font-body text-xs font-bold text-on-surface uppercase tracking-wider mb-2xs">Horario de Atención</p>
                    <p className="font-body text-sm text-on-surface-variant">Lunes a Viernes, 9:00 – 18:00 (CST)</p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-lg border-t border-outline/40">
                  <p className="font-body text-xs font-bold text-on-surface uppercase tracking-wider mb-md">Canales & Redes</p>
                  <div className="flex flex-wrap gap-sm">
                    <a className="px-md py-xs bg-surface-low rounded-lg font-body text-xs text-on-surface-variant hover:text-primary hover:bg-surface-mid transition-all duration-200 uppercase tracking-widest" href="#">Instagram</a>
                    <a className="px-md py-xs bg-surface-low rounded-lg font-body text-xs text-on-surface-variant hover:text-primary hover:bg-surface-mid transition-all duration-200 uppercase tracking-widest" href="#">LinkedIn</a>
                    <a className="px-md py-xs bg-surface-low rounded-lg font-body text-xs text-on-surface-variant hover:text-primary hover:bg-surface-mid transition-all duration-200 uppercase tracking-widest" href="#">TikTok</a>
                    <a className="px-md py-xs bg-surface-low rounded-lg font-body text-xs text-on-surface-variant hover:text-primary hover:bg-surface-mid transition-all duration-200 uppercase tracking-widest" href="#">YouTube</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full bg-surface-low py-16 md:py-24 border-t border-surface-variant/20">
          <div className="w-full px-margin-mobile md:px-margin-desktop space-y-12">
            <div className="space-y-xs max-w-2xl">
              <div className="flex items-center gap-xs font-body text-xs text-primary uppercase tracking-widest font-bold">
                <span className="material-symbols-outlined text-[16px]">help</span>
                <span>FAQ // PREGUNTAS FRECUENTES</span>
              </div>
              <h2 className="font-editorial text-3xl font-semibold md:text-5xl text-on-surface">Preguntas Frecuentes</h2>
            </div>

            <div className="max-w-4xl space-y-sm">
              {[
                {
                  q: "¿Cómo funcionan los paquetes mensuales de creación de contenido?",
                  a: "Diseñamos una grilla mensual con objetivos concretos. Realizamos jornadas de rodaje programadas para producir en lote tus reels, fotos y piezas gráficas del mes. Editamos, musicalizamos y calendarizamos para que tu marca tenga publicaciones constantes de alto nivel sin que tengas que preocuparte por la producción diaria."
                },
                {
                  q: "¿Qué incluye el servicio de Community Management?",
                  a: "Manejo completo en Instagram, LinkedIn y TikTok: desde la publicación de los contenidos en horarios óptimos, hasta la interacción activa con usuarios, respuesta rápida a mensajes directos, moderación de comentarios, gestión de pautas publicitarias (Meta Ads / TikTok Ads) y entrega mensual de métricas de crecimiento y engagement."
                },
                {
                  q: "¿Cómo se coordina la cobertura de eventos en tiempo real?",
                  a: "Nuestro equipo se traslada al lugar del evento con equipo cinematográfico ligero y de rápida respuesta. Capturamos los momentos clave y generamos contenido al instante para historias y directos mientras el evento sucede. Posteriormente entregamos una galería fotográfica completa editada y un reel recap de alto impacto."
                },
                {
                  q: "¿Puedo contratar solo una sesión de fotos o un reel comercial?",
                  a: "¡Sí! Además de nuestros planes mensuales, trabajamos bajo la modalidad On-Demand por proyecto para marcas que requieren una campaña específica, un lote único de fotografías de producto o un spot puntual."
                },
                {
                  q: "¿En qué plataformas tienen mayor experiencia?",
                  a: "Nuestras estrategias y formatos están optimizados para las plataformas de mayor retorno de atención actual: Instagram (Reels y Feed), TikTok (contenido dinámico orgánico y Ads) y LinkedIn (posicionamiento de marca corporativa y liderazgo)."
                },
                {
                  q: "¿Cómo puedo ver más ejemplos de sus reels y fotos?",
                  a: (
                    <>
                      Puedes explorar nuestro <Link to="/#portafolio" className="text-primary hover:underline font-bold">portafolio interactivo</Link> en la página de inicio, dividido en Reels Promocionales, Entrevistas, Productos, Cobertura de Eventos y Sesiones Fotográficas.
                    </>
                  )
                }
              ].map((faq, index) => (
                <div key={index} className={`bg-surface rounded-xl overflow-hidden border ${openFaq === index ? 'border-primary/40' : 'border-surface-variant/40'}`}>
                  <button
                    className="w-full flex items-center justify-between p-lg text-left cursor-pointer"
                    type="button"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="font-editorial text-xl font-semibold text-on-surface pr-md">{faq.q}</span>
                    <span className="material-symbols-outlined text-primary text-[24px] transition-transform duration-300" style={{ transform: openFaq === index ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                      expand_more
                    </span>
                  </button>
                  <div className={`px-lg pb-lg ${openFaq === index ? 'block' : 'hidden'}`}>
                    <p className="font-body text-sm text-on-surface-variant leading-relaxed">{faq.a}</p>
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
