'use client'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import {
  staggerContainer,
  staggerItem,
  fadeUpVariants,
  viewportConfig,
} from '@/lib/animations'
import { testimonios } from '@/lib/data'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GoldDividerShort } from '@/components/ui/GoldDivider'

const PER_PAGE = 3

function TestimonioCard({ testimonio }: { testimonio: typeof testimonios[0] }) {
  return (
    <div className="border-t border-ink-subtle pt-8 flex flex-col h-full">
      <p className="text-xs text-gold uppercase tracking-wider font-body font-medium mb-5">
        {testimonio.tratamiento}
      </p>
      <p className="font-display text-xl lg:text-2xl font-light leading-relaxed text-midnight mb-7 italic flex-1">
        &ldquo;{testimonio.texto}&rdquo;
      </p>
      <GoldDividerShort className="mb-6" />
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full border border-gold/30 flex items-center justify-center shrink-0">
          <span className="font-display text-sm font-light text-gold">{testimonio.iniciales}</span>
        </div>
        <div>
          <p className="font-body font-medium text-sm text-midnight">{testimonio.nombre}</p>
          <p className="text-xs text-muted">{testimonio.edad} años</p>
        </div>
      </div>
    </div>
  )
}

export function Testimonios() {
  const [page, setPage] = useState(0)
  const totalPages = Math.ceil(testimonios.length / PER_PAGE)
  const mobileRef = useRef<HTMLDivElement>(null)

  const visible = testimonios.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE)

  function prev() {
    setPage((p) => Math.max(0, p - 1))
  }
  function next() {
    setPage((p) => Math.min(totalPages - 1, p + 1))
  }

  return (
    <section id="testimonios" className="bg-white py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header + arrows */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16"
        >
          <div>
            <motion.div variants={staggerItem}>
              <SectionLabel>Pacientes</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUpVariants}
              className="display-text text-5xl lg:text-6xl text-midnight max-w-xl"
            >
              Lo que dicen<br />
              <span className="italic">quienes ya confían en nosotros.</span>
            </motion.h2>
          </div>

          {/* Desktop arrows */}
          <div className="hidden md:flex items-center gap-3 pb-2">
            <button
              onClick={prev}
              disabled={page === 0}
              aria-label="Anterior"
              className="w-11 h-11 border border-ink-subtle flex items-center justify-center text-midnight hover:border-gold hover:text-gold transition-colors disabled:opacity-25 disabled:cursor-not-allowed"
            >
              ←
            </button>
            <button
              onClick={next}
              disabled={page === totalPages - 1}
              aria-label="Siguiente"
              className="w-11 h-11 border border-ink-subtle flex items-center justify-center text-midnight hover:border-gold hover:text-gold transition-colors disabled:opacity-25 disabled:cursor-not-allowed"
            >
              →
            </button>
          </div>
        </motion.div>

        {/* Desktop grid */}
        <motion.div
          key={page}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="hidden md:grid md:grid-cols-3 gap-12 lg:gap-16"
        >
          {visible.map((t) => (
            <TestimonioCard key={t.id} testimonio={t} />
          ))}
        </motion.div>

        {/* Mobile horizontal scroll */}
        <div className="md:hidden">
          <div
            ref={mobileRef}
            className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="shrink-0 w-2" />
            {testimonios.map((t) => (
              <div key={t.id} className="snap-start shrink-0 w-[82vw] max-w-[320px]">
                <TestimonioCard testimonio={t} />
              </div>
            ))}
            <div className="shrink-0 w-2" />
          </div>
        </div>

        {/* Dots + mobile arrows */}
        <div className="flex items-center justify-center gap-4 mt-10">
          {/* Mobile prev arrow */}
          <button
            onClick={prev}
            disabled={page === 0}
            aria-label="Anterior"
            className="md:hidden w-9 h-9 border border-ink-subtle flex items-center justify-center text-midnight hover:border-gold hover:text-gold transition-colors disabled:opacity-25 disabled:cursor-not-allowed text-sm"
          >
            ←
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`Página ${i + 1}`}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  i === page ? 'bg-gold w-4' : 'bg-ink/20 hover:bg-ink/40'
                }`}
              />
            ))}
          </div>

          {/* Mobile next arrow */}
          <button
            onClick={next}
            disabled={page === totalPages - 1}
            aria-label="Siguiente"
            className="md:hidden w-9 h-9 border border-ink-subtle flex items-center justify-center text-midnight hover:border-gold hover:text-gold transition-colors disabled:opacity-25 disabled:cursor-not-allowed text-sm"
          >
            →
          </button>
        </div>

      </div>
    </section>
  )
}
