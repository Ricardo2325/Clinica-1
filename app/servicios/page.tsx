'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  staggerContainer,
  staggerContainerSlow,
  staggerItem,
  fadeLeftVariants,
  fadeUpVariants,
  lineExpandVariants,
  cardHoverVariants,
  viewportConfig,
} from '@/lib/animations'
import { serviciosDetalle, type Servicio } from '@/lib/servicios_detalle'

import { Footer } from '@/components/sections/Footer'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GoldDividerShort } from '@/components/ui/GoldDivider'
import { Button } from '@/components/ui/Button'

const proceso = [
  {
    paso: '01',
    titulo: 'Primera visita gratuita',
    descripcion: 'Exploración completa, radiografías y escáner intraoral 3D. Sin compromiso, sin presión.',
  },
  {
    paso: '02',
    titulo: 'Plan personalizado',
    descripcion: 'Diseño digital de sonrisa y simulación del resultado final antes de empezar.',
  },
  {
    paso: '03',
    titulo: 'Tratamiento de precisión',
    descripcion: 'Cada paso ejecutado por el especialista correspondiente con tecnología de última generación.',
  },
  {
    paso: '04',
    titulo: 'Seguimiento incluido',
    descripcion: 'Revisiones de control a los 6 y 12 meses. El resultado es nuestra responsabilidad.',
  },
]

function ServicioDetalle({ servicio }: { servicio: Servicio }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      variants={cardHoverVariants}
      initial="rest"
      whileHover="hover"
      className="bg-white border-subtle p-8 lg:p-10 rounded-none"
    >
      {servicio.destacado && (
        <span className="text-xs font-body font-medium text-gold uppercase tracking-wider mb-4 block">
          — Más solicitado
        </span>
      )}

      <div className="lg:grid lg:grid-cols-[1fr_auto] lg:gap-8 lg:items-start">
        <div>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-midnight mb-2">
            {servicio.nombre}
          </h2>
          <p className="text-gold text-base italic font-display mb-5">{servicio.tagline}</p>
          <p className="text-muted text-sm leading-relaxed font-body mb-6">
            {servicio.descripcion}
          </p>

          {/* Precio + duración */}
          <div className="flex flex-wrap gap-8 mb-8 pb-8 border-b border-ink-subtle">
            <div>
              <p className="text-[10px] text-muted uppercase tracking-wider mb-1.5 font-body">Inversión</p>
              <p className="font-body font-medium text-midnight">{servicio.precio}</p>
            </div>
            <div>
              <p className="text-[10px] text-muted uppercase tracking-wider mb-1.5 font-body">Duración</p>
              <p className="font-body font-medium text-midnight">{servicio.duracion}</p>
            </div>
            <div>
              <p className="text-[10px] text-muted uppercase tracking-wider mb-1.5 font-body">Sesiones</p>
              <p className="font-body font-medium text-midnight">{servicio.sesiones}</p>
            </div>
          </div>

          {/* Expand */}
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 text-xs text-gold uppercase tracking-wider font-body font-medium hover:text-midnight transition-colors min-h-[44px]"
          >
            {expanded ? 'Ocultar detalle' : 'Ver qué incluye'}
            <motion.span
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="inline-block"
            >
              ↓
            </motion.span>
          </button>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="overflow-hidden"
              >
                <ul className="mt-5 space-y-3">
                  {servicio.incluye.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <span className="text-gold shrink-0 mt-0.5">—</span>
                      <span className="text-muted font-body">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* CTA lateral en desktop */}
        <div className="hidden lg:flex flex-col gap-3 min-w-[180px] pt-2">
          <Button variant="primary" size="sm" href="/#contacto">
            Consultar →
          </Button>
          <Button variant="ghost" size="sm" href="/#contacto">
            Pedir cita
          </Button>
        </div>
      </div>

      {/* CTA mobile */}
      <div className="lg:hidden mt-6 pt-6 border-t border-ink-subtle">
        <Button variant="primary" size="md" href="/#contacto" className="w-full justify-center">
          Consultar este tratamiento →
        </Button>
      </div>
    </motion.div>
  )
}

export default function ServiciosPage() {
  return (
    <>
      

      {/* Hero */}
      <section className="bg-ivory pt-20 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            variants={staggerContainerSlow}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div variants={staggerItem}>
              <Link
                href="/#servicios"
                className="inline-flex items-center gap-2 text-ink-muted text-xs font-body uppercase tracking-[0.15em] hover:text-gold transition-colors mb-10 group"
              >
                <span className="group-hover:-translate-x-1 transition-transform">←</span>
                Volver al inicio
              </Link>
            </motion.div>

            <motion.div variants={staggerItem}>
              <SectionLabel>Tratamientos</SectionLabel>
            </motion.div>

            <motion.h1
              variants={fadeLeftVariants}
              className="display-text text-6xl lg:text-7xl text-midnight leading-[1.05] mb-4"
            >
              Cada caso,
            </motion.h1>
            <motion.h1
              variants={fadeLeftVariants}
              className="display-text text-6xl lg:text-7xl text-midnight italic leading-[1.05] mb-10"
            >
              una solución a medida.
            </motion.h1>

            <motion.div
              variants={lineExpandVariants}
              className="w-16 h-px bg-gold mb-10"
              style={{ transformOrigin: 'left' }}
            />

            <motion.p
              variants={staggerItem}
              className="text-muted text-lg leading-relaxed font-body max-w-xl"
            >
              No trabajamos con paquetes estándar. Cada plan de tratamiento se diseña
              después de un diagnóstico profundo, adaptado a la anatomía, los objetivos
              y el presupuesto de cada paciente.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Lista de servicios */}
      <section className="bg-ivory pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-6"
          >
            {serviciosDetalle.map((servicio) => (
              <motion.div key={servicio.id} variants={fadeUpVariants}>
                <ServicioDetalle servicio={servicio} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Proceso */}
      <section className="bg-midnight py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="mb-16"
          >
            <motion.div variants={staggerItem}>
              <SectionLabel className="text-gold/70">Cómo funciona</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUpVariants}
              className="display-text text-5xl lg:text-6xl text-white"
            >
              El proceso<br />
              <span className="italic text-gold">de principio a fin.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5"
          >
            {proceso.map((paso) => (
              <motion.div
                key={paso.paso}
                variants={staggerItem}
                className="bg-midnight p-8 lg:p-10"
              >
                <span className="font-mono text-4xl font-light text-gold/25 block mb-6 leading-none">
                  {paso.paso}
                </span>
                <GoldDividerShort className="mb-5 opacity-30" />
                <h3 className="font-body font-medium text-white mb-3">{paso.titulo}</h3>
                <p className="text-white/40 text-sm leading-relaxed font-body">
                  {paso.descripcion}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-pearl py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10"
          >
            <motion.div variants={fadeLeftVariants} className="max-w-xl">
              <GoldDividerShort className="mb-8" />
              <h2 className="display-text text-4xl lg:text-5xl text-midnight mb-4">
                Primera visita sin coste.<br />
                <span className="italic">Sin compromiso.</span>
              </h2>
              <p className="text-muted font-body">
                Diagnóstico completo, diseño digital de sonrisa y presupuesto
                detallado sin coste adicional.
              </p>
            </motion.div>

            <motion.div variants={staggerItem} className="flex flex-col gap-3 shrink-0">
              <Button variant="primary" size="lg" href="/#contacto">
                Solicitar primera visita →
              </Button>
              <Button variant="ghost" size="md" href="/filosofia">
                Conocer nuestra filosofía
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}
