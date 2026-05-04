'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  staggerContainer,
  staggerContainerSlow,
  staggerItem,
  scaleInVariants,
  fadeUpVariants,
  fadeLeftVariants,
  lineExpandVariants,
  viewportConfig,
} from '@/lib/animations'
import { antesDespuesCasos } from '@/lib/data'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/sections/Footer'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Button } from '@/components/ui/Button'

const casoImages = [
  '/images/antes-despues/antes_despues1.webp',
  '/images/antes-despues/antes_despues2.webp',
  '/images/antes-despues/antes_despues3.webp',
]

export default function TransformacionesPage() {
  return (
    <>
      <Navbar dark />

      {/* Hero */}
      <section className="bg-midnight pt-40 pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            variants={staggerContainerSlow}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div variants={staggerItem}>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-white/30 text-xs font-body uppercase tracking-[0.15em] hover:text-gold transition-colors mb-10 group"
              >
                <span className="group-hover:-translate-x-1 transition-transform">←</span>
                Volver al inicio
              </Link>
            </motion.div>

            <motion.div variants={staggerItem}>
              <SectionLabel className="text-gold/70">Resultados reales</SectionLabel>
            </motion.div>

            <motion.h1
              variants={fadeLeftVariants}
              className="display-text text-6xl lg:text-7xl text-white leading-[1.05] mb-4"
            >
              Transformaciones
            </motion.h1>
            <motion.h2
              variants={fadeLeftVariants}
              className="display-text text-4xl lg:text-5xl text-gold italic leading-[1.1] mb-10"
            >
              que hablan por sí solas.
            </motion.h2>

            <motion.div
              variants={lineExpandVariants}
              className="w-16 h-px bg-gold/50 mb-10"
              style={{ transformOrigin: 'left' }}
            />

            <motion.p
              variants={staggerItem}
              className="text-white/55 text-lg leading-relaxed font-body max-w-2xl"
            >
              Cada caso es único. Estos son algunos de los resultados reales de nuestros
              pacientes, obtenidos con los mismos protocolos de precisión que aplicamos
              en cada tratamiento.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Casos */}
      <section className="bg-pearl py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid md:grid-cols-3 gap-10"
          >
            {antesDespuesCasos.map((caso, i) => (
              <motion.div key={caso.id} variants={scaleInVariants}>
                <div className="relative aspect-[4/3] mb-6 overflow-hidden">
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={casoImages[i]}
                      alt={`Antes y después — ${caso.tratamiento}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 90vw, 30vw"
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
                <p className="text-sm text-muted leading-relaxed font-body mb-1">
                  {caso.descripcion}
                </p>
                <p className="text-xs text-muted/70 font-body">Duración: {caso.duracion}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ivory py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.div variants={staggerItem}>
              <SectionLabel className="justify-center">Tu caso</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUpVariants}
              className="display-text text-4xl lg:text-5xl text-midnight mb-6"
            >
              ¿Quieres ver qué podemos<br />
              <span className="italic">hacer por ti?</span>
            </motion.h2>
            <motion.p variants={staggerItem} className="text-muted font-body mb-10 max-w-md mx-auto">
              Primera visita gratuita. Diagnóstico completo y diseño digital de sonrisa sin compromiso.
            </motion.p>
            <motion.div variants={staggerItem} className="flex flex-wrap gap-4 justify-center">
              <Button variant="primary" size="lg" href="/#contacto">
                Solicitar primera visita →
              </Button>
              <Button variant="ghost" size="md" href="/servicios">
                Ver tratamientos
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}
