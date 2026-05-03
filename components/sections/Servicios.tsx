'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  staggerContainer,
  staggerItem,
  fadeUpVariants,
  cardHoverVariants,
  viewportConfig,
} from '@/lib/animations'
import { serviciosDetalle, type Servicio } from '@/lib/servicios_detalle'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Button } from '@/components/ui/Button'

function ServiceCard({ servicio }: { servicio: Servicio }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      variants={cardHoverVariants}
      initial="rest"
      whileHover="hover"
      className="bg-white border-subtle p-8 cursor-pointer rounded-none h-full flex flex-col"
    >
      {servicio.destacado && (
        <span className="text-xs font-body font-medium text-gold uppercase tracking-wider mb-4 block">
          — Más solicitado
        </span>
      )}

      <h3 className="font-display text-2xl font-light mb-2 text-midnight">
        {servicio.nombre}
      </h3>
      <p className="text-gold text-sm italic font-display mb-4">{servicio.tagline}</p>
      <p className="text-muted text-sm leading-relaxed mb-6 flex-1">{servicio.descripcion}</p>

      {/* Precio + duración */}
      <div className="flex gap-6 mb-6 pb-6 border-b border-ink-subtle">
        <div>
          <p className="text-[10px] text-muted uppercase tracking-wider mb-1">Inversión</p>
          <p className="font-body font-medium text-sm text-midnight">{servicio.precio}</p>
        </div>
        <div>
          <p className="text-[10px] text-muted uppercase tracking-wider mb-1">Proceso</p>
          <p className="font-body font-medium text-sm text-midnight">{servicio.sesiones}</p>
        </div>
      </div>

      {/* Expand button */}
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-2 text-xs text-gold uppercase tracking-wider font-body font-medium hover:text-midnight transition-colors min-h-[44px]"
      >
        {expanded ? 'Cerrar detalle' : 'Ver qué incluye'}
        <motion.span
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="inline-block"
        >
          ↓
        </motion.span>
      </button>

      {/* Expandable panel */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <ul className="mt-4 space-y-3">
              {servicio.incluye.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span className="text-gold shrink-0 mt-0.5">—</span>
                  <span className="text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function Servicios() {
  return (
    <section id="servicios" className="bg-ivory py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-16"
        >
          <motion.div variants={staggerItem}>
            <SectionLabel>Tratamientos</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeUpVariants}
            className="display-text text-5xl lg:text-6xl text-midnight max-w-xl"
          >
            Cada caso,<br />
            <span className="italic">una solución a medida.</span>
          </motion.h2>
        </motion.div>

        {/* Desktop grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="hidden md:grid md:grid-cols-2 gap-6"
        >
          {serviciosDetalle.map((servicio) => (
            <motion.div key={servicio.id} variants={staggerItem}>
              <ServiceCard servicio={servicio} />
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile horizontal scroll */}
        <div className="md:hidden">
          <div
            className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="shrink-0 w-2" />
            {serviciosDetalle.map((servicio) => (
              <div
                key={servicio.id}
                className="snap-start shrink-0 w-[80vw] max-w-[320px]"
              >
                <ServiceCard servicio={servicio} />
              </div>
            ))}
            {/* CTA card at end */}
            <div className="snap-start shrink-0 w-[80vw] max-w-[320px] flex items-center justify-center bg-pearl border-subtle p-8">
              <Button variant="outline" href="#contacto" className="w-full justify-center">
                Consultar todos →
              </Button>
            </div>
            <div className="shrink-0 w-2" />
          </div>

          {/* Scroll dots */}
          <div className="flex justify-center gap-1.5 mt-4">
            {serviciosDetalle.map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-ink/20" />
            ))}
          </div>
        </div>

        {/* CTA → página de detalle */}
        <motion.div
          variants={staggerItem}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-12 flex flex-col sm:flex-row gap-4 items-start"
        >
          <Button variant="primary" size="md" href="/servicios">
            Ver todos los tratamientos en detalle →
          </Button>
          <Button variant="ghost" size="md" href="/#contacto">
            Solicitar consulta
          </Button>
        </motion.div>

      </div>
    </section>
  )
}
