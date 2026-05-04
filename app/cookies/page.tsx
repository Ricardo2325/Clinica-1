'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { staggerContainerSlow, staggerItem, fadeLeftVariants, lineExpandVariants } from '@/lib/animations'

import { Footer } from '@/components/sections/Footer'
import { clinicaData } from '@/lib/data'

export default function CookiesPage() {
  return (
    <>
      

      <section className="bg-midnight pt-28 pb-24">
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
              Política de cookies
            </motion.h1>
            <motion.div variants={lineExpandVariants} className="w-16 h-px bg-gold/50 mt-8" style={{ transformOrigin: 'left' }} />
          </motion.div>
        </div>
      </section>

      <section className="bg-pearl py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 space-y-8 text-muted font-body leading-relaxed text-sm">

          <div>
            <h2 className="font-body font-medium text-midnight text-lg mb-3">¿Qué son las cookies?</h2>
            <p>Las cookies son pequeños archivos de texto que los sitios web depositan en tu dispositivo cuando los visitas. Sirven para que el sitio recuerde tus preferencias y funcione correctamente.</p>
          </div>

          <div>
            <h2 className="font-body font-medium text-midnight text-lg mb-3">Cookies que utilizamos</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="border-b border-ink-subtle">
                    <th className="text-left py-2 pr-4 text-midnight font-medium">Nombre</th>
                    <th className="text-left py-2 pr-4 text-midnight font-medium">Tipo</th>
                    <th className="text-left py-2 text-midnight font-medium">Finalidad</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink-subtle">
                  <tr>
                    <td className="py-3 pr-4 text-muted/80">_session</td>
                    <td className="py-3 pr-4 text-muted/80">Técnica</td>
                    <td className="py-3 text-muted/80">Mantener la sesión activa durante la navegación</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-muted/80">_preferences</td>
                    <td className="py-3 pr-4 text-muted/80">Funcional</td>
                    <td className="py-3 text-muted/80">Recordar preferencias de idioma y visualización</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4">Este sitio web <strong className="text-midnight font-medium">no utiliza cookies de seguimiento ni publicitarias</strong> de terceros.</p>
          </div>

          <div>
            <h2 className="font-body font-medium text-midnight text-lg mb-3">Cómo gestionar las cookies</h2>
            <p>Puedes configurar tu navegador para rechazar o eliminar las cookies en cualquier momento. Ten en cuenta que deshabilitar las cookies técnicas puede afectar al funcionamiento del sitio.</p>
            <ul className="mt-3 space-y-1 pl-4 list-disc text-muted/80">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Safari</a></li>
            </ul>
          </div>

          <div>
            <h2 className="font-body font-medium text-midnight text-lg mb-3">Más información</h2>
            <p>Para cualquier consulta sobre el uso de cookies, puedes contactarnos en <a href={`mailto:${clinicaData.email}`} className="text-gold hover:underline">{clinicaData.email}</a>.</p>
          </div>

          <p className="text-xs text-muted/60 pt-4 border-t border-ink-subtle">Última actualización: mayo de 2025</p>
        </div>
      </section>

      <Footer />
    </>
  )
}
