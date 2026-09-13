import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-3xl">
      <div className="w-full px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-xl pb-2xl">
          <div className="space-y-xs">
            <Link to="/" className="flex items-center gap-sm">
              <img src="/6.png" alt="Productora Amarte" className="h-8 w-auto invert brightness-0 invert" />
            </Link>
            <p className="text-[13px] text-white/60 max-w-sm">
              Estudio de producción cinematográfica y publicitaria de alta fidelidad óptica, postproducción y etalonaje tonal.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-lg">
            {['Vimeo', 'Instagram', 'Behance', 'YouTube'].map(name => (
              <a
                key={name}
                href="#"
                className="text-[12px] uppercase tracking-widest text-white/60 hover:text-primary transition-colors duration-200"
              >
                {name}
              </a>
            ))}
          </div>
        </div>
        <div className="pt-lg border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-md">
          <div className="flex items-center gap-md text-[14px] font-bold text-primary">
            <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>REC [00:42:19:08]</span>
            <span className="text-white/40 text-[12px] font-normal">24 FPS / 2.39:1 SCOPE</span>
          </div>
          <div className="text-[12px] text-white/40">
            © 2026 PRODUCTORA AMARTE. TODOS LOS DERECHOS RESERVADOS.
          </div>
        </div>
      </div>
    </footer>
  )
}
