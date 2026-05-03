'use client'
import { motion } from 'framer-motion'
import {
  staggerContainer,
  staggerContainerSlow,
  staggerItem,
  fadeLeftVariants,
  fadeRightVariants,
  lineExpandVariants,
  viewportConfig,
} from '@/lib/animations'
import { filosofiaData } from '@/lib/filosofia'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Button } from '@/components/ui/Button'

export function Filosofia() {
  return (
    <section id="filosofia" className="bg-midnight py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left column */}
          <motion.div
            variants={staggerContainerSlow}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.div variants={staggerItem}>
              <SectionLabel className="text-gold/70">{filosofiaData.label}</SectionLabel>
            </motion.div>

            <motion.h2
              variants={fadeLeftVariants}
              className="display-text text-5xl lg:text-6xl text-white mb-2 leading-[1.1]"
            >
              {filosofiaData.titular}
            </motion.h2>
            <motion.h2
              variants={fadeLeftVariants}
              className="display-text text-5xl lg:text-6xl text-gold italic leading-[1.1]"
            >
              {filosofiaData.subtitular}
            </motion.h2>

            <motion.div
              variants={lineExpandVariants}
              className="w-12 h-px bg-gold/50 my-8"
              style={{ transformOrigin: 'left' }}
            />

            <motion.p
              variants={staggerItem}
              className="text-white/55 leading-relaxed font-body text-base"
            >
              {filosofiaData.descripcion}
            </motion.p>
          </motion.div>

          {/* Right column — pilares */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex flex-col"
          >
            {filosofiaData.pilares.map((pilar) => (
              <motion.div
                key={pilar.id}
                variants={fadeRightVariants}
                className="flex gap-6 pb-10 mb-10 border-b border-white/10 last:border-0 last:pb-0 last:mb-0"
              >
                <span className="font-display text-5xl font-light text-gold/30 shrink-0 leading-none pt-1">
                  {pilar.numero}
                </span>
                <div>
                  <h3 className="font-body font-medium text-white mb-3 tracking-wide">
                    {pilar.titulo}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed font-body">
                    {pilar.descripcion}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA → página de detalle */}
          <motion.div
            variants={staggerItem}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="mt-12 pt-12 border-t border-white/10 flex flex-col sm:flex-row gap-4"
          >
            <Button variant="gold" size="md" href="/filosofia">
              Conocer nuestra filosofía →
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
