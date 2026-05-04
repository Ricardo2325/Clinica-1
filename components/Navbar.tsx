'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { mobileMenuVariants, staggerItem } from '@/lib/animations'
import { Button } from '@/components/ui/Button'

const DARK_ROUTES = ['/filosofia', '/transformaciones', '/privacidad', '/aviso-legal', '/cookies']

const navLinks = [
  { label: 'Filosofía', href: '/filosofia' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Transformaciones', href: '/transformaciones' },
  { label: 'Contacto', href: '/#contacto' },
]

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const lightText = false // fondo siempre solido, texto siempre oscuro

  return (
    <nav
      className="fixed top-0 left-0 right-0 border-b transition-colors duration-300"
      style={{ zIndex: 9999, backgroundColor: '#FAFAF8', borderBottomColor: scrolled ? 'rgba(10,22,40,0.08)' : 'rgba(10,22,40,0)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none">
            <span className={`font-display font-light text-xl tracking-[0.3em] uppercase transition-colors duration-300 ${lightText ? 'text-white' : 'text-midnight'}`}>
              Aureum
            </span>
            <span className="font-body text-[9px] tracking-[0.28em] text-gold uppercase mt-0.5">
              Dental
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-body text-xs uppercase tracking-[0.14em] transition-colors duration-200 ${
                  lightText
                    ? 'text-white/70 hover:text-white'
                    : scrolled
                    ? 'text-ink-muted hover:text-midnight'
                    : 'text-midnight hover:text-gold'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA desktop */}
          <div className="hidden lg:block">
            <Button
              variant="gold"
              size="sm"
              href="/#contacto"
              className={!scrolled ? 'bg-gold text-midnight hover:bg-gold-light' : ''}
            >
              Primera visita
            </Button>
          </div>

          {/* Hamburger mobile */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2 min-h-[44px] min-w-[44px] items-center justify-center"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className={`w-5 h-px block origin-center transition-colors duration-300 ${lightText ? 'bg-white' : 'bg-midnight'}`}
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className={`w-5 h-px block transition-colors duration-300 ${lightText ? 'bg-white' : 'bg-midnight'}`}
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className={`w-5 h-px block origin-center transition-colors duration-300 ${lightText ? 'bg-white' : 'bg-midnight'}`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="lg:hidden overflow-hidden bg-ivory border-t border-ink-subtle"
            >
              <div className="py-6 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <motion.div key={link.href} variants={staggerItem}>
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block py-3 px-2 font-display text-2xl font-light text-midnight hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div variants={staggerItem} className="pt-4 pb-2">
                  <Button variant="gold" size="md" href="/#contacto">
                    Primera visita
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
