'use client'
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

interface Testimonio {
  id: number
  nombre: string
  edad: number
  tratamiento: string
  texto: string
  iniciales: string
  valoracion: number
}

function TestimonioCard({ testimonio }: { testimonio: Testimonio }) {
  return (
    <motion.div
      variants={staggerItem}
      className="border-t border-ink-subtle pt-8"
    >
      <p className="text-xs text-gold uppercase tracking-wider font-body font-medium mb-5">
        {testimonio.tratamiento}
      </p>

      <p className="font-display text-xl lg:text-2xl font-light leading-relaxed text-midnight mb-7 italic">
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
    </motion.div>
  )
}

export function Testimonios() {
  return (
    <section id="testimonios" className="bg-white py-32 lg:py-40">
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
            <SectionLabel>Pacientes</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeUpVariants}
            className="display-text text-5xl lg:text-6xl text-midnight max-w-xl"
          >
            Lo que dicen<br />
            <span className="italic">quienes ya confían en nosotros.</span>
          </motion.h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16"
        >
          {testimonios.map((testimonio) => (
            <TestimonioCard key={testimonio.id} testimonio={testimonio} />
          ))}
        </motion.div>

      </div>
    </section>
  )
}
