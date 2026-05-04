'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  staggerContainerSlow,
  staggerItem,
  fadeLeftVariants,
  lineExpandVariants,
} from '@/lib/animations'
import { clinicaData, stats } from '@/lib/data'
import { Button } from '@/components/ui/Button'

const contactItems = [
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
    text: clinicaData.ubicacion,
  },
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    text: clinicaData.telefono,
  },
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    text: clinicaData.email,
  },
]

export function Hero() {
  return (
    <section className="relative flex min-h-screen w-full overflow-hidden bg-ivory">

      {/* ── Left panel — 45% ─────────────────────────────────────────── */}
      <motion.div
        variants={staggerContainerSlow}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex w-full flex-col justify-between px-8 py-10 bg-ivory md:bg-transparent md:w-[45%] md:px-12 lg:px-16 xl:px-20"
      >
        <div className="h-16 lg:h-20" />

        {/* Main content */}
        <div className="flex-1 flex flex-col justify-center py-12">

          {/* Tagline */}
          <motion.div variants={staggerItem} className="flex items-center gap-3 mb-10">
            <div className="w-5 h-px bg-gold" />
            <span className="section-label">{clinicaData.tagline}</span>
          </motion.div>

          {/* Title */}
          <motion.div variants={fadeLeftVariants}>
            <h1 className="display-text text-5xl lg:text-6xl xl:text-[68px] text-midnight leading-[1.05] mb-1">
              La sonrisa
            </h1>
            <h1 className="display-text text-5xl lg:text-6xl xl:text-[68px] text-midnight italic leading-[1.05] mb-1">
              que siempre
            </h1>
            <h1 className="display-text text-5xl lg:text-6xl xl:text-[68px] text-midnight leading-[1.05]">
              imaginaste.
            </h1>
          </motion.div>

          {/* Gold line */}
          <motion.div
            variants={lineExpandVariants}
            className="h-px bg-gold my-8"
            style={{ width: '3.5rem', transformOrigin: 'left' }}
          />

          {/* Subtitle */}
          <motion.p
            variants={staggerItem}
            className="font-body text-base leading-relaxed text-muted max-w-xs mb-10"
          >
            Diseño digital de sonrisa, carillas de porcelana e implantes
            con tecnología de precisión. Resultados que duran décadas.
          </motion.p>

          {/* CTA */}
          <motion.div variants={staggerItem} className="flex flex-wrap gap-3 mb-12">
            <Button variant="primary" size="lg" href="/#contacto">
              {clinicaData.ctaPrincipal} →
            </Button>
            <Button variant="ghost" size="md" href="/#antes-despues">
              {clinicaData.ctaSecundario}
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={staggerItem}
            className="grid grid-cols-2 gap-x-8 gap-y-5 pt-8 border-t border-ink-subtle"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <span className="font-mono text-3xl font-light text-midnight block leading-none">
                  {stat.valor}
                </span>
                <span className="text-[10px] font-body text-muted uppercase tracking-[0.16em] mt-1 block">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom: contact footer */}
        <motion.footer
          variants={staggerItem}
          className="flex flex-col gap-2.5 pt-8 border-t border-ink-subtle"
        >
          {contactItems.map((item, i) => (
            <div key={i} className="flex items-center gap-2.5 text-muted">
              <span className="text-gold shrink-0">{item.icon}</span>
              <span className="font-body text-xs tracking-wide">{item.text}</span>
            </div>
          ))}
        </motion.footer>
      </motion.div>

      {/* ── Right panel — mobile: flujo normal debajo del texto / desktop: absolute derecha ── */}
      <motion.div
        className="relative w-full h-72 md:absolute md:inset-y-0 md:right-0 md:h-auto md:w-[58%]"
        initial={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
        animate={{ clipPath: 'polygon(0% 0, 100% 0, 100% 100%, 0% 100%)' }}
        transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
      >
        <Image
          src="/images/clinica/dentista1.jpg"
          alt="Clínica Aureum Dental — Madrid"
          fill
          priority
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 58vw"
        />

        {/* Overlay izquierdo — solo desktop */}
        <div className="hidden md:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-ivory to-transparent z-10" />

        {/* Overlay bottom */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-midnight/20 to-transparent z-10" />

        {/* Año fundación */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-6 right-6 z-20 text-right"
        >
          <span className="font-display text-xs font-light text-white/60 uppercase tracking-[0.2em]">
            Est. {clinicaData.añosFundacion}
          </span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-8 md:left-[calc(45%-1.5rem)] z-20"
      >
        <div className="w-px h-10 bg-gold/30 animate-pulse" />
      </motion.div>
    </section>
  )
}
