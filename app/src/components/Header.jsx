import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/mision-y-vision', label: 'Misión y Visión' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/contacto', label: 'Contáctanos' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-xl shadow-[0_1px_4px_rgba(0,0,0,0.08)]">
      <div className="h-20 w-full px-margin-mobile md:px-margin-desktop flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-sm">
          <img src="/6.png" alt="Productora Amarte" className="h-10 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-xl">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-[14px] font-bold uppercase tracking-wider transition-colors duration-200 focus:outline-none ${
                location.pathname === link.to
                  ? 'text-primary'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-md">
          <Link
            to="/contacto"
            className="inline-flex items-center justify-center px-md py-xs rounded-lg bg-primary text-on-primary text-[14px] font-bold uppercase tracking-wider transition-all duration-300 hover:bg-primary-hover shadow-sm hover:shadow-md"
          >
            <span className="material-symbols-outlined text-[18px] mr-2xs">play_arrow</span>
            Iniciar Proyecto
          </Link>
          {/* Mobile menu button */}
          <button
            className="md:hidden w-8 h-8 flex items-center justify-center"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="material-symbols-outlined text-on-surface text-[24px]">
              {mobileOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden flex flex-col bg-white px-margin-mobile py-md gap-md border-t border-surface-variant/30">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`text-[14px] font-bold uppercase tracking-wider ${
                location.pathname === link.to
                  ? 'text-primary'
                  : 'text-on-surface-variant'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
