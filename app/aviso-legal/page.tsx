'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { staggerContainerSlow, staggerItem, fadeLeftVariants, lineExpandVariants } from '@/lib/animations'

import { Footer } from '@/components/sections/Footer'
import { clinicaData } from '@/lib/data'

export default function AvisoLegalPage() {
  return (
    <>
      

      <section className="bg-midnight pt-40 pb-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <motion.div variants={staggerContainerSlow} initial="hidden" animate="visible">
            <motion.div variants={staggerItem}>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-white/30 text-xs font-body uppercase tracking-[0.15em] hover:text-gold transition-colors mb-10 group"
              >
                <span className="group-hover:-translate-x-1 transition-transform">←</span>
                Volver al inicio
              </Link>
            </motion.div>
            <motion.h1 variants={fadeLeftVariants} className="display-text text-5xl lg:text-6xl text-white mb-4">
              Aviso legal
            </motion.h1>
            <motion.div variants={lineExpandVariants} className="w-16 h-px bg-gold/50 mt-8" style={{ transformOrigin: 'left' }} />
          </motion.div>
        </div>
      </section>

      <section className="bg-pearl py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 space-y-8 text-muted font-body leading-relaxed text-sm">

          <div>
            <h2 className="font-body font-medium text-midnight text-lg mb-3">1. Titular del sitio web</h2>
            <p>
              En cumplimiento del artículo 10 de la Ley 34/2002, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE), se informa:
            </p>
            <ul className="mt-3 space-y-1 pl-4 list-disc text-muted/80">
              <li>Denominación social: {clinicaData.nombre}</li>
              <li>Domicilio: {clinicaData.ubicacion}</li>
              <li>Correo electrónico: {clinicaData.email}</li>
              <li>Teléfono: {clinicaData.telefono}</li>
            </ul>
          </div>

          <div>
            <h2 className="font-body font-medium text-midnight text-lg mb-3">2. Objeto y ámbito de aplicación</h2>
            <p>El presente aviso legal regula el uso del sitio web de {clinicaData.nombre}. El acceso al sitio implica la aceptación plena de las presentes condiciones.</p>
          </div>

          <div>
            <h2 className="font-body font-medium text-midnight text-lg mb-3">3. Propiedad intelectual e industrial</h2>
            <p>Todos los contenidos del sitio web —textos, imágenes, logotipos, diseño gráfico y código fuente— son propiedad de {clinicaData.nombre} o de terceros que han autorizado su uso. Queda prohibida su reproducción, distribución o comunicación pública sin autorización expresa.</p>
          </div>

          <div>
            <h2 className="font-body font-medium text-midnight text-lg mb-3">4. Responsabilidad</h2>
            <p>{clinicaData.nombre} no se hace responsable de los daños derivados del uso del sitio ni de posibles interrupciones del servicio. La información publicada tiene carácter meramente informativo y no sustituye el consejo clínico individualizado.</p>
          </div>

          <div>
            <h2 className="font-body font-medium text-midnight text-lg mb-3">5. Legislación aplicable y jurisdicción</h2>
            <p>Las presentes condiciones se rigen por la legislación española. Para la resolución de cualquier controversia, las partes se someten a los juzgados y tribunales de Madrid, con renuncia expresa a cualquier otro fuero.</p>
          </div>

          <p className="text-xs text-muted/60 pt-4 border-t border-ink-subtle">Última actualización: mayo de 2025</p>
        </div>
      </section>

      <Footer />
    </>
  )
}
