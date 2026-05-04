'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  staggerContainer,
  staggerItem,
  fadeUpVariants,
  viewportConfig,
} from '@/lib/animations'
import { serviciosDetalle } from '@/lib/servicios_detalle'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Button } from '@/components/ui/Button'

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

        {/* Grid de servicios */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink-subtle"
        >
          {serviciosDetalle.map((servicio, i) => (
            <motion.div key={servicio.id} variants={staggerItem} className="bg-ivory">
              <Link
                href="/servicios"
                className="group flex items-start justify-between p-8 lg:p-10 gap-6 hover:bg-white transition-colors duration-300 h-full"
              >
                <div className="flex gap-6 items-start">
                  <span className="font-mono text-3xl font-light text-gold/20 group-hover:text-gold/40 transition-colors shrink-0 leading-none pt-1">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    {servicio.destacado && (
                      <span className="text-[10px] font-body font-medium text-gold uppercase tracking-wider mb-2 block">
                        Más solicitado
                      </span>
                    )}
                    <h3 className="font-display text-2xl lg:text-3xl font-light text-midnight group-hover:text-gold transition-colors mb-2">
                      {servicio.nombre}
                    </h3>
                    <p className="text-sm text-muted font-body leading-relaxed">{servicio.tagline}</p>
                  </div>
                </div>
                <span className="text-gold/30 group-hover:text-gold group-hover:translate-x-1 transition-all shrink-0 mt-1 text-lg">
                  →
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={staggerItem}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-12 flex flex-col sm:flex-row gap-4 items-start"
        >
          <Button variant="primary" size="md" href="/servicios">
            Ver todos los tratamientos →
          </Button>
          <Button variant="ghost" size="md" href="/#contacto">
            Solicitar consulta
          </Button>
        </motion.div>

      </div>
    </section>
  )
}
