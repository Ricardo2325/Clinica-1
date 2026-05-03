'use client'
import { motion } from 'framer-motion'
import {
  staggerContainerSlow,
  staggerItem,
  textRevealVariants,
  lineExpandVariants,
} from '@/lib/animations'
import { clinicaData, stats } from '@/lib/data'
import { Button } from '@/components/ui/Button'
import { SectionLabel } from '@/components/ui/SectionLabel'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-end pb-24 pt-32 overflow-hidden bg-ivory">

      {/* Right side image panel */}
      <div className="absolute top-0 right-0 w-full lg:w-[55%] h-full overflow-hidden">
        <div className="w-full h-full bg-gradient-to-bl from-steel/20 via-pearl to-ivory" />
        {/* Geometric accent lines */}
        <div className="absolute top-1/4 right-12 w-px h-48 bg-gold/20" />
        <div className="absolute top-1/4 right-20 w-px h-32 bg-gold/10" />
        {/* Left fade into ivory */}
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-ivory to-transparent" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ivory to-transparent" />
        {/* Placeholder label */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <span className="font-display text-8xl font-light text-midnight rotate-90 tracking-[0.3em]">
            AUREUM
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="max-w-xl">
          <motion.div
            variants={staggerContainerSlow}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={staggerItem}>
              <SectionLabel>{clinicaData.tagline}</SectionLabel>
            </motion.div>

            {/* Hero title — line by line reveal */}
            <motion.div variants={staggerItem} className="overflow-hidden mb-1">
              <motion.h1
                variants={textRevealVariants}
                className="display-text text-6xl lg:text-7xl xl:text-[82px] text-midnight"
              >
                La sonrisa
              </motion.h1>
            </motion.div>
            <motion.div variants={staggerItem} className="overflow-hidden mb-1">
              <motion.h1
                variants={textRevealVariants}
                className="display-text text-6xl lg:text-7xl xl:text-[82px] text-midnight italic"
              >
                que siempre
              </motion.h1>
            </motion.div>
            <motion.div variants={staggerItem} className="overflow-hidden mb-8">
              <motion.h1
                variants={textRevealVariants}
                className="display-text text-6xl lg:text-7xl xl:text-[82px] text-midnight"
              >
                imaginaste.
              </motion.h1>
            </motion.div>

            {/* Gold line */}
            <motion.div
              variants={lineExpandVariants}
              className="w-16 h-px bg-gold mb-8"
              style={{ transformOrigin: 'left' }}
            />

            <motion.p
              variants={staggerItem}
              className="text-muted font-body text-lg leading-relaxed max-w-sm mb-10"
            >
              Odontología estética de alto nivel en Madrid.
              Diseño digital de sonrisa, carillas y tratamientos de precisión
              para resultados que duran décadas.
            </motion.p>

            {/* Stats */}
            <motion.div variants={staggerItem} className="flex flex-wrap gap-8 mb-12">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-display text-3xl font-light text-midnight">{stat.valor}</span>
                  <span className="text-[10px] font-body text-muted uppercase tracking-wider mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={staggerItem} className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg" href="#contacto">
                {clinicaData.ctaPrincipal} →
              </Button>
              <Button variant="ghost" size="lg" href="#antes-despues">
                {clinicaData.ctaSecundario}
              </Button>
            </motion.div>

          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-12 bg-gold/30 animate-pulse" />
      </motion.div>
    </section>
  )
}
