'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { navbarVariants, mobileMenuVariants, staggerItem } from '@/lib/animations'
import { Button } from '@/components/ui/Button'

const navLinks = [
  { label: 'Filosofía', href: '#filosofia' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Transformaciones', href: '#antes-despues' },
  { label: 'Contacto', href: '#contacto' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.nav
      variants={navbarVariants}
      animate={scrolled ? 'solid' : 'transparent'}
      className="fixed top-0 left-0 right-0 z-50 border-b"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link href="#inicio" className="flex flex-col leading-none">
            <span className="font-display font-light text-xl tracking-[0.3em] text-midnight uppercase">
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
                className="font-body text-xs uppercase tracking-[0.14em] text-ink-muted hover:text-midnight transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA desktop */}
          <div className="hidden lg:block">
            <Button variant="gold" size="sm" href="#contacto">
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
              className="w-5 h-px bg-midnight block origin-center transition-transform"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-5 h-px bg-midnight block"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="w-5 h-px bg-midnight block origin-center"
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
                  <Button variant="gold" size="md" href="#contacto">
                    Primera visita
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
