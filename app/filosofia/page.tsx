'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  staggerContainer,
  staggerContainerSlow,
  staggerItem,
  fadeLeftVariants,
  fadeRightVariants,
  fadeUpVariants,
  lineExpandVariants,
  viewportConfig,
} from '@/lib/animations'
import { filosofiaData } from '@/lib/filosofia'
import { clinicaData } from '@/lib/data'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/sections/Footer'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GoldDividerShort } from '@/components/ui/GoldDivider'
import { Button } from '@/components/ui/Button'

const valores = [
  {
    titulo: 'Transparencia radical',
    descripcion:
      'Explicamos cada paso del tratamiento antes de ejecutarlo. El paciente toma decisiones informadas, nunca a ciegas. Nuestros presupuestos no tienen letra pequeña.',
  },
  {
    titulo: 'Laboratorio propio',
    descripcion:
      'Controlamos el proceso desde el diseño digital hasta la pieza terminada. Sin intermediarios, sin incertidumbre, sin compromisos sobre el resultado.',
  },
  {
    titulo: 'Un especialista por área',
    descripcion:
      'En Aureum cada tratamiento lo ejecuta el especialista correspondiente. No creemos en el odontólogo único que hace todo — creemos en la maestría por especialidad.',
  },
  {
    titulo: 'Seguimiento incluido',
    descripcion:
      'El tratamiento no termina cuando sales de la clínica. Las revisiones de seguimiento forman parte del proceso, no son una venta adicional.',
  },
]

const equipo = [
  {
    nombre: 'Dra. Elena Romero',
    especialidad: 'Odontología estética · Directora clínica',
    descripcion:
      'Más de 15 años diseñando sonrisas. Formación en la Universidad de Bolonia y en la NYU School of Dentistry. Especialista en carillas de porcelana y diseño digital de sonrisa.',
    foto: '/images/equipo/dentista1.webp',
    iniciales: 'ER',
  },
  {
    nombre: 'Dr. Marcos Vidal',
    especialidad: 'Implantología y cirugía oral',
    descripcion:
      'Experto en implantología digital y cirugía guiada. Más de 2.000 implantes colocados. Formación especializada en Suecia e Israel.',
    foto: '/images/equipo/dentista2.webp',
    iniciales: 'MV',
  },
  {
    nombre: 'Dra. Sofía Núñez',
    especialidad: 'Ortodoncia invisible · Oclusión',
    descripcion:
      'Especialista en alineadores y tratamientos de oclusión funcional. Formadora certificada en técnicas de ortodoncia digital.',
    foto: '/images/equipo/dentista3.webp',
    iniciales: 'SN',
  },
]

export default function FilosofiaPage() {
  return (
    <>
      <Navbar dark />

      {/* Hero de la página */}
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
                href="/#filosofia"
                className="inline-flex items-center gap-2 text-white/30 text-xs font-body uppercase tracking-[0.15em] hover:text-gold transition-colors mb-10 group"
              >
                <span className="group-hover:-translate-x-1 transition-transform">←</span>
                Volver al inicio
              </Link>
            </motion.div>

            <motion.div variants={staggerItem}>
              <SectionLabel className="text-gold/70">{filosofiaData.label}</SectionLabel>
            </motion.div>

            <motion.h1
              variants={fadeLeftVariants}
              className="display-text text-6xl lg:text-7xl text-white leading-[1.05] mb-4"
            >
              {filosofiaData.titular}
            </motion.h1>
            <motion.h2
              variants={fadeLeftVariants}
              className="display-text text-4xl lg:text-5xl text-gold italic leading-[1.1] mb-10"
            >
              {filosofiaData.subtitular}
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
              {filosofiaData.descripcion}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Pilares */}
      <section className="bg-pearl py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="mb-16"
          >
            <motion.div variants={staggerItem}>
              <SectionLabel>Los tres pilares</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUpVariants}
              className="display-text text-5xl lg:text-6xl text-midnight"
            >
              Cómo trabajamos.
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid md:grid-cols-3 gap-12"
          >
            {filosofiaData.pilares.map((pilar) => (
              <motion.div key={pilar.id} variants={fadeUpVariants}>
                <span className="font-mono text-5xl font-light text-gold/25 block mb-6 leading-none">
                  {pilar.numero}
                </span>
                <GoldDividerShort className="mb-6" />
                <h3 className="font-body font-medium text-midnight text-lg mb-4">
                  {pilar.titulo}
                </h3>
                <p className="text-muted text-sm leading-relaxed font-body">
                  {pilar.descripcion}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Valores */}
      <section className="bg-ivory py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid lg:grid-cols-2 gap-16 items-start"
          >
            <motion.div variants={fadeLeftVariants} className="lg:sticky lg:top-32">
              <SectionLabel>Valores</SectionLabel>
              <h2 className="display-text text-5xl lg:text-6xl text-midnight mb-6">
                Lo que nos<br />
                <span className="italic">define.</span>
              </h2>
              <p className="text-muted leading-relaxed font-body">
                Después de {new Date().getFullYear() - clinicaData.añosFundacion} años,
                estos principios no han cambiado. No son marketing — son la razón
                por la que nuestros pacientes vuelven y nos recomiendan.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="space-y-0"
            >
              {valores.map((valor, i) => (
                <motion.div
                  key={i}
                  variants={fadeRightVariants}
                  className="py-8 border-b border-ink-subtle last:border-0"
                >
                  <div className="flex gap-4 items-start">
                    <span className="font-mono text-gold/30 text-xl font-light shrink-0 leading-none pt-1">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="font-body font-medium text-midnight mb-2">{valor.titulo}</h3>
                      <p className="text-muted text-sm leading-relaxed font-body">{valor.descripcion}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Equipo */}
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
              <SectionLabel className="text-gold/70">El equipo</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUpVariants}
              className="display-text text-5xl lg:text-6xl text-white"
            >
              Las personas<br />
              <span className="italic text-gold">detrás del resultado.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid md:grid-cols-3 gap-px bg-white/5"
          >
            {equipo.map((miembro) => (
              <motion.div
                key={miembro.nombre}
                variants={staggerItem}
                className="bg-midnight p-8 lg:p-10"
              >
                <div className="relative w-20 h-20 rounded-full overflow-hidden border border-gold/30 mb-6">
                  <Image
                    src={miembro.foto}
                    alt={miembro.nombre}
                    fill
                    className="object-cover object-top"
                    sizes="80px"
                  />
                </div>
                <h3 className="font-body font-medium text-white mb-1">{miembro.nombre}</h3>
                <p className="text-xs text-gold uppercase tracking-wider font-body mb-4">
                  {miembro.especialidad}
                </p>
                <GoldDividerShort className="mb-4 opacity-30" />
                <p className="text-white/40 text-sm leading-relaxed font-body">
                  {miembro.descripcion}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-ivory py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <GoldDividerShort className="mx-auto mb-10" />
          <h2 className="display-text text-4xl lg:text-5xl text-midnight mb-6">
            ¿Quieres conocernos?
          </h2>
          <p className="text-muted font-body mb-10 max-w-md mx-auto">
            La primera visita es gratuita y sin compromiso.
            Diagnóstico completo y presupuesto detallado el mismo día.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="primary" size="lg" href="/#contacto">
              Solicitar primera visita →
            </Button>
            <Button variant="ghost" size="md" href="/servicios">
              Ver tratamientos
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
