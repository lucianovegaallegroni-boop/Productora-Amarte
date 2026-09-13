import React from 'react';
import { Link } from 'react-router-dom';

export default function MisionYVision() {
  return (
    <main className="w-full pt-20 bg-background min-h-screen font-body text-base text-on-surface antialiased">
      <div className="flex flex-col w-full">

        {/* HERO */}
        <section className="relative w-full overflow-hidden pb-2xl md:pb-4xl">
          <div className="absolute -left-20 bottom-1/4 w-40 h-40 rounded-full bg-primary/10 pointer-events-none" />
          <div className="absolute -right-16 top-0 w-48 h-48 rounded-full bg-black/5 pointer-events-none" />
          
          <div className="w-full px-margin-mobile md:px-margin-desktop pt-lg md:pt-2xl">
            <div className="flex flex-wrap items-center justify-between gap-sm pb-lg text-on-surface-variant">
              <div className="flex items-center gap-xs font-body text-xs uppercase tracking-widest text-primary">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
                <span>NUESTRA FILOSOFÍA</span>
              </div>
              <div className="hidden sm:flex items-center gap-lg font-body text-sm font-bold text-on-surface-variant/80">
                <span>EST. 2018</span>
                <span className="text-surface-variant">|</span>
                <span>PRODUCCIÓN INDEPENDIENTE</span>
              </div>
            </div>
            <div className="max-w-6xl space-y-md">
              <h1 className="font-display text-4xl font-black md:text-7xl text-on-surface leading-tight tracking-tight uppercase">
                Donde la técnica se vuelve <span className="italic font-normal text-primary">poesía</span> visual.
              </h1>
              <p className="font-body text-lg text-on-surface-variant max-w-3xl pt-xs">
                Cada proyecto que abordamos nace de una convicción inquebrantable: el cine es el arte más poderoso del siglo XXI, capaz de transformar percepciones, conectar culturas y desafiar el orden establecido.
              </p>
            </div>

            {/* Hero Image */}
            <div className="mt-2xl relative overflow-hidden rounded-xl bg-surface-dim shadow-2xl">
              <div className="w-full aspect-[2.39/1] relative overflow-hidden">
                <img className="absolute inset-0 w-full h-full object-cover" alt="Estudio de producción cinematográfica" src="https://picsum.photos/id/158/1920/803" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-surface-dim/40 to-transparent opacity-80"></div>
                <div className="absolute bottom-lg left-lg">
                  <span className="font-body text-sm font-bold bg-surface-dim/80 backdrop-blur-md px-xs py-2xs text-primary rounded">REEL // BEHIND THE SCENES</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MISIÓN */}
        <section className="w-full bg-surface-low py-3xl md:py-section">
          <div className="w-full px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2xl lg:gap-4xl items-start">
              {/* Left: Text */}
              <div className="space-y-lg">
                <div className="flex items-center gap-xs font-body text-xs text-primary uppercase tracking-widest">
                  <span className="material-symbols-outlined text-[16px]">flag</span>
                  <span>MISIÓN // 01</span>
                </div>
                <h2 className="font-body text-3xl font-bold md:text-5xl text-on-surface">Nuestra Misión</h2>
                <p className="font-body text-lg text-on-surface-variant">
                  Producir cine y contenido audiovisual que trascienda fronteras y generaciones. Combinamos la visión de autor con la excelencia comercial para crear obras que provoquen, inspiren y permanezcan en la memoria colectiva.
                </p>
                <p className="font-body text-base text-on-surface-variant">
                  Democratizamos el acceso al arte cinematográfico de primer nivel, garantizando que cada proyecto —independientemente de su escala— reciba el mismo nivel de dedicación, precisión técnica y pasión creativa que caracteriza a las grandes producciones internacionales.
                </p>
              </div>
              {/* Right: Cards */}
              <div className="space-y-lg">
                <div className="p-lg bg-surface-mid rounded-xl border border-surface-variant/30 hover:border-primary/30 transition-colors duration-300">
                  <div className="flex items-start gap-md">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-primary text-[24px]">visibility</span>
                    </div>
                    <div className="space-y-2xs">
                      <h3 className="font-body text-xl font-semibold text-on-surface">Excelencia Óptica</h3>
                      <p className="font-body text-sm text-on-surface-variant">Compromiso absoluto con los más altos estándares visuales. Cada fotograma es tratado como una pieza de arte, con atención milimétrica a la composición, la luz y el color.</p>
                    </div>
                  </div>
                </div>
                <div className="p-lg bg-surface-mid rounded-xl border border-surface-variant/30 hover:border-primary/30 transition-colors duration-300">
                  <div className="flex items-start gap-md">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-primary text-[24px]">auto_stories</span>
                    </div>
                    <div className="space-y-2xs">
                      <h3 className="font-body text-xl font-semibold text-on-surface">Narrativa con Propósito</h3>
                      <p className="font-body text-sm text-on-surface-variant">Historias que transforman y provocan. No contamos relatos vacíos; cada narrativa tiene una intención clara de conectar emocionalmente y generar reflexión en el espectador.</p>
                    </div>
                  </div>
                </div>
                <div className="p-lg bg-surface-mid rounded-xl border border-surface-variant/30 hover:border-primary/30 transition-colors duration-300">
                  <div className="flex items-start gap-md">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-primary text-[24px]">precision_manufacturing</span>
                    </div>
                    <div className="space-y-2xs">
                      <h3 className="font-body text-xl font-semibold text-on-surface">Innovación Técnica</h3>
                      <p className="font-body text-sm text-on-surface-variant">Empujamos los límites de la tecnología cinematográfica. Desde ópticas anamórficas hasta flujos de trabajo RAW en 8K y mezclas Dolby Atmos inmersivas.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VISIÓN */}
        <section className="w-full py-3xl md:py-section">
          <div className="w-full px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2xl lg:gap-4xl items-start">
              {/* Left: Cards */}
              <div className="space-y-lg order-2 lg:order-1">
                <div className="p-lg bg-surface-mid rounded-xl border border-surface-variant/30 hover:border-primary/30 transition-colors duration-300">
                  <div className="flex items-start gap-md">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-primary text-[24px]">public</span>
                    </div>
                    <div className="space-y-2xs">
                      <h3 className="font-body text-xl font-semibold text-on-surface">Referente Global</h3>
                      <p className="font-body text-sm text-on-surface-variant">Posicionar el cine latinoamericano en el mapa global, compitiendo en calidad técnica y narrativa con las producciones más reconocidas de Europa, Asia y Norteamérica.</p>
                    </div>
                  </div>
                </div>
                <div className="p-lg bg-surface-mid rounded-xl border border-surface-variant/30 hover:border-primary/30 transition-colors duration-300">
                  <div className="flex items-start gap-md">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-primary text-[24px]">diversity_3</span>
                    </div>
                    <div className="space-y-2xs">
                      <h3 className="font-body text-xl font-semibold text-on-surface">Talento Emergente</h3>
                      <p className="font-body text-sm text-on-surface-variant">Nutrir nuevas voces cinematográficas, ofreciendo plataforma, mentoría y recursos a directores, guionistas y técnicos que buscan contar historias que importan.</p>
                    </div>
                  </div>
                </div>
                <div className="p-lg bg-surface-mid rounded-xl border border-surface-variant/30 hover:border-primary/30 transition-colors duration-300">
                  <div className="flex items-start gap-md">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-primary text-[24px]">eco</span>
                    </div>
                    <div className="space-y-2xs">
                      <h3 className="font-body text-xl font-semibold text-on-surface">Sostenibilidad Creativa</h3>
                      <p className="font-body text-sm text-on-surface-variant">Construir un ecosistema creativo sostenible donde el arte y la viabilidad comercial coexistan, demostrando que la calidad es siempre una inversión, nunca un gasto.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right: Text */}
              <div className="space-y-lg order-1 lg:order-2">
                <div className="flex items-center gap-xs font-body text-xs text-primary uppercase tracking-widest">
                  <span className="material-symbols-outlined text-[16px]">explore</span>
                  <span>VISIÓN // 02</span>
                </div>
                <h2 className="font-body text-3xl font-bold md:text-5xl text-on-surface">Nuestra Visión</h2>
                <p className="font-body text-lg text-on-surface-variant">
                  Ser el referente de producción cinematográfica independiente en América Latina y un puente creativo hacia el escenario global. Visualizamos un futuro donde cada historia local tiene el potencial de resonar universalmente.
                </p>
                <p className="font-body text-base text-on-surface-variant">
                  Aspiramos a que Productora Amarte sea sinónimo de excelencia, innovación y compromiso artístico irreductible. Un estudio donde converjan las mejores mentes creativas y los recursos técnicos más avanzados del continente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* VALORES */}
        <section className="w-full bg-surface-low py-3xl md:py-section">
          <div className="w-full px-margin-mobile md:px-margin-desktop space-y-2xl">
            <div className="space-y-xs max-w-2xl">
              <div className="flex items-center gap-xs font-body text-xs text-primary uppercase tracking-widest">
                <span className="material-symbols-outlined text-[16px]">diamond</span>
                <span>PRINCIPIOS RECTORES // 03</span>
              </div>
              <h2 className="font-body text-3xl font-bold md:text-5xl text-on-surface">Valores Fundamentales</h2>
              <p className="font-body text-base text-on-surface-variant">Los pilares que guían cada decisión creativa, técnica y humana dentro de nuestro estudio.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-lg">
              <div className="p-lg bg-surface-mid rounded-xl hover:-translate-y-1 transition-transform duration-300">
                <span className="material-symbols-outlined text-primary text-[32px] mb-sm">fingerprint</span>
                <h3 className="font-body text-xl font-semibold text-on-surface mb-2xs">Autenticidad</h3>
                <p className="font-body text-sm text-on-surface-variant">Cada proyecto refleja una voz genuina. No imitamos tendencias, las creamos desde la honestidad artística y la verdad emocional.</p>
              </div>
              <div className="p-lg bg-surface-mid rounded-xl hover:-translate-y-1 transition-transform duration-300">
                <span className="material-symbols-outlined text-primary text-[32px] mb-sm">handshake</span>
                <h3 className="font-body text-xl font-semibold text-on-surface mb-2xs">Colaboración</h3>
                <p className="font-body text-sm text-on-surface-variant">El cine es un arte colectivo. Fomentamos la sinergia entre departamentos, directores, actores y técnicos como un organismo creativo unificado.</p>
              </div>
              <div className="p-lg bg-surface-mid rounded-xl hover:-translate-y-1 transition-transform duration-300">
                <span className="material-symbols-outlined text-primary text-[32px] mb-sm">workspace_premium</span>
                <h3 className="font-body text-xl font-semibold text-on-surface mb-2xs">Excelencia</h3>
                <p className="font-body text-sm text-on-surface-variant">Nunca nos conformamos con lo suficientemente bueno. Perseguimos la perfección en cada corte, cada ajuste de color y cada mezcla de audio.</p>
              </div>
              <div className="p-lg bg-surface-mid rounded-xl hover:-translate-y-1 transition-transform duration-300">
                <span className="material-symbols-outlined text-primary text-[32px] mb-sm">lightbulb</span>
                <h3 className="font-body text-xl font-semibold text-on-surface mb-2xs">Innovación</h3>
                <p className="font-body text-sm text-on-surface-variant">Adoptamos y desarrollamos nuevas tecnologías, técnicas narrativas y flujos de trabajo que expanden las fronteras de lo cinematográficamente posible.</p>
              </div>
              <div className="p-lg bg-surface-mid rounded-xl hover:-translate-y-1 transition-transform duration-300">
                <span className="material-symbols-outlined text-primary text-[32px] mb-sm">verified</span>
                <h3 className="font-body text-xl font-semibold text-on-surface mb-2xs">Integridad</h3>
                <p className="font-body text-sm text-on-surface-variant">Transparencia total con nuestros clientes y colaboradores. Cumplimos lo que prometemos, respetamos presupuestos y honramos los plazos acordados.</p>
              </div>
              <div className="p-lg bg-surface-mid rounded-xl hover:-translate-y-1 transition-transform duration-300">
                <span className="material-symbols-outlined text-primary text-[32px] mb-sm">local_fire_department</span>
                <h3 className="font-body text-xl font-semibold text-on-surface mb-2xs">Pasión</h3>
                <p className="font-body text-sm text-on-surface-variant">Amamos lo que hacemos con una intensidad que se refleja en cada fotograma. La pasión es el combustible que transforma un proyecto en una obra maestra.</p>
              </div>
            </div>
          </div>
        </section>

        {/* EQUIPO DIRECTIVO */}
        <section className="w-full py-3xl md:py-section">
          <div className="w-full px-margin-mobile md:px-margin-desktop space-y-2xl">
            <div className="space-y-xs max-w-2xl">
              <div className="flex items-center gap-xs font-body text-xs text-primary uppercase tracking-widest">
                <span className="material-symbols-outlined text-[16px]">groups</span>
                <span>CREW PRINCIPAL // 04</span>
              </div>
              <h2 className="font-body text-3xl font-bold md:text-5xl text-on-surface">Equipo Directivo</h2>
              <p className="font-body text-base text-on-surface-variant">Las mentes creativas y líderes técnicos detrás de cada producción de Amarte.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg">
              {/* Team Member 1 */}
              <div className="group bg-surface-mid rounded-xl overflow-hidden hover:-translate-y-1 transition-transform duration-300">
                <div className="aspect-[3/4] relative overflow-hidden bg-surface-dim">
                  <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Mateo S. Roncal" src="https://picsum.photos/id/64/400/533" />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-mid via-transparent to-transparent"></div>
                  <span className="absolute top-sm left-sm font-body text-xs bg-surface-dim/80 backdrop-blur-md px-xs py-2xs text-primary rounded">FUNDADOR</span>
                </div>
                <div className="p-md space-y-2xs">
                  <h3 className="font-body text-xl font-semibold text-on-surface group-hover:text-primary transition-colors">Mateo S. Roncal</h3>
                  <p className="font-body text-xs text-primary uppercase">Director General & Creativo</p>
                  <p className="font-body text-sm text-on-surface-variant">15 años de experiencia en dirección cinematográfica. Ganador del Oso de Plata en Berlín y nominado al Goya.</p>
                  <div className="pt-xs border-t border-surface-variant/40 font-body text-xs text-on-surface-variant">CREW_ID: MSR-001</div>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="group bg-surface-mid rounded-xl overflow-hidden hover:-translate-y-1 transition-transform duration-300">
                <div className="aspect-[3/4] relative overflow-hidden bg-surface-dim">
                  <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Clara V. Meyer" src="https://picsum.photos/id/65/400/533" />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-mid via-transparent to-transparent"></div>
                  <span className="absolute top-sm left-sm font-body text-xs bg-surface-dim/80 backdrop-blur-md px-xs py-2xs text-primary rounded">CO-FUNDADORA</span>
                </div>
                <div className="p-md space-y-2xs">
                  <h3 className="font-body text-xl font-semibold text-on-surface group-hover:text-primary transition-colors">Clara V. Meyer</h3>
                  <p className="font-body text-xs text-primary uppercase">Directora de Fotografía</p>
                  <p className="font-body text-sm text-on-surface-variant">Especialista en óptica anamórfica y cinematografía nocturna. Ex-operadora de cámara para Roger Deakins.</p>
                  <div className="pt-xs border-t border-surface-variant/40 font-body text-xs text-on-surface-variant">CREW_ID: CVM-002</div>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="group bg-surface-mid rounded-xl overflow-hidden hover:-translate-y-1 transition-transform duration-300">
                <div className="aspect-[3/4] relative overflow-hidden bg-surface-dim">
                  <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Dante Almirón" src="https://picsum.photos/id/91/400/533" />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-mid via-transparent to-transparent"></div>
                </div>
                <div className="p-md space-y-2xs">
                  <h3 className="font-body text-xl font-semibold text-on-surface group-hover:text-primary transition-colors">Dante Almirón</h3>
                  <p className="font-body text-xs text-primary uppercase">Director de Postproducción</p>
                  <p className="font-body text-sm text-on-surface-variant">Maestro en etalonaje y color grading. Responsable del look visual de más de 80 producciones premiadas.</p>
                  <div className="pt-xs border-t border-surface-variant/40 font-body text-xs text-on-surface-variant">CREW_ID: DAL-003</div>
                </div>
              </div>

              {/* Team Member 4 */}
              <div className="group bg-surface-mid rounded-xl overflow-hidden hover:-translate-y-1 transition-transform duration-300">
                <div className="aspect-[3/4] relative overflow-hidden bg-surface-dim">
                  <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Elena Ruiz" src="https://picsum.photos/id/177/400/533" />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-mid via-transparent to-transparent"></div>
                </div>
                <div className="p-md space-y-2xs">
                  <h3 className="font-body text-xl font-semibold text-on-surface group-hover:text-primary transition-colors">Elena Ruiz</h3>
                  <p className="font-body text-xs text-primary uppercase">Productora Ejecutiva</p>
                  <p className="font-body text-sm text-on-surface-variant">Gestión integral de producción con experiencia en 3 continentes. Conexiones con HBO, Netflix y Amazon Studios.</p>
                  <div className="pt-xs border-t border-surface-variant/40 font-body text-xs text-on-surface-variant">CREW_ID: ERZ-004</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative w-full py-3xl md:py-section overflow-hidden">
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[160px] pointer-events-none -z-10"></div>
          <div className="w-full px-margin-mobile md:px-margin-desktop">
            <div className="p-xl md:p-3xl bg-surface-low rounded-2xl relative overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between font-body text-sm font-bold text-primary pb-lg">
                <span>SLATE [COLLAB // 2025]</span>
                <span className="text-on-surface-variant font-body text-xs">ROLL B // TAKE 01</span>
              </div>
              <div className="max-w-4xl space-y-lg">
                <h2 className="font-body text-3xl font-bold md:text-5xl text-on-surface leading-tight">
                  "Las mejores historias nacen cuando las mentes más audaces se encuentran."
                </h2>
                <p className="font-body text-lg text-on-surface-variant max-w-2xl">
                  Si compartes nuestra visión y buscas un socio creativo que eleve tu proyecto al siguiente nivel, queremos conocerte. Cada gran obra comienza con una conversación.
                </p>
                <div className="flex flex-wrap items-center gap-md pt-xs">
                  <Link className="inline-flex items-center justify-center px-xl py-sm rounded-lg bg-primary text-on-primary font-body text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:bg-primary-hover shadow-md" to="/contacto">
                    <span className="material-symbols-outlined text-[20px] mr-2xs">mail</span>
                    Contáctanos
                  </Link>
                  <Link className="inline-flex items-center justify-center px-lg py-sm rounded-lg bg-surface-high text-on-surface hover:text-primary font-body text-sm font-bold uppercase tracking-widest transition-all duration-200" to="/#portafolio">
                    Ver Portafolio
                    <span className="material-symbols-outlined text-[18px] ml-2xs">arrow_forward</span>
                  </Link>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 opacity-5 font-display text-[180px] font-black pointer-events-none select-none text-on-surface">AMARTE</div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
