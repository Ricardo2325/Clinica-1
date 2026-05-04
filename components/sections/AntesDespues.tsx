'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  staggerContainer,
  staggerItem,
  scaleInVariants,
  fadeUpVariants,
  viewportConfig,
} from '@/lib/animations'
import { antesDespuesCasos } from '@/lib/data'
import { SectionLabel } from '@/components/ui/SectionLabel'

const casoImages = [
  '/images/antes-despues/antes_despues1.webp',
  '/images/antes-despues/antes_despues1.webp',
  '/images/antes-despues/antes_despues1.webp',
]

interface Caso {
  id: number
  tratamiento: string
  descripcion: string
  duracion: string
}

function CasoCard({ caso, imageSrc }: { caso: Caso; imageSrc: string }) {
  return (
    <motion.div
      variants={scaleInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
    >
      <div className="relative aspect-[4/3] mb-5 overflow-hidden">
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative w-full h-full"
        >
          <Image
            src={imageSrc}
            alt={`Antes y después — ${caso.tratamiento}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 80vw, 30vw"
          />
        </motion.div>
        <span className="absolute bottom-3 left-3 text-[10px] font-body font-medium text-white bg-midnight/70 px-2.5 py-1 uppercase tracking-wider z-10">
          Antes · Después
        </span>
      </div>

      <div className="w-6 h-px bg-gold mb-3" />
      <p className="text-xs text-gold uppercase tracking-wider font-body font-medium mb-2">
        {caso.tratamiento}
      </p>
      <p className="text-sm text-muted leading-relaxed font-body mb-1">{caso.descripcion}</p>
      <p className="text-xs text-muted/70 font-body">Duración: {caso.duracion}</p>
    </motion.div>
  )
}

export function AntesDespues() {
  return (
    <section id="antes-despues" className="bg-pearl py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-16"
        >
          <motion.div variants={staggerItem}>
            <SectionLabel>Resultados reales</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeUpVariants}
            className="display-text text-5xl lg:text-6xl text-midnight max-w-xl"
          >
            Transformaciones<br />
            <span className="italic">que hablan por sí solas.</span>
          </motion.h2>
        </motion.div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {antesDespuesCasos.map((caso, i) => (
            <CasoCard key={caso.id} caso={caso} imageSrc={casoImages[i]} />
          ))}
        </div>

        {/* Mobile scroll */}
        <div className="md:hidden">
          <div
            className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="shrink-0 w-2" />
            {antesDespuesCasos.map((caso, i) => (
              <div key={caso.id} className="snap-start shrink-0 w-[80vw] max-w-[300px]">
                <CasoCard caso={caso} imageSrc={casoImages[i]} />
              </div>
            ))}
            <div className="shrink-0 w-2" />
          </div>
          <div className="flex justify-center gap-1.5 mt-4">
            {antesDespuesCasos.map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-ink/20" />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
