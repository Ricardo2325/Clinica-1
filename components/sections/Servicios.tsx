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

        {/* Lista de servicios */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="divide-y divide-ink-subtle"
        >
          {serviciosDetalle.map((servicio, i) => (
            <motion.div key={servicio.id} variants={staggerItem}>
              <Link
                href="/servicios"
                className="group flex items-center justify-between py-7 gap-6 hover:pl-2 transition-all duration-300"
              >
                <div className="flex items-baseline gap-5">
                  <span className="font-mono text-xs text-gold/40 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-light text-midnight group-hover:text-gold transition-colors">
                      {servicio.nombre}
                    </h3>
                    <p className="text-sm text-muted font-body mt-0.5">{servicio.tagline}</p>
                  </div>
                </div>
                <span className="text-gold/40 group-hover:text-gold group-hover:translate-x-1 transition-all shrink-0">
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
