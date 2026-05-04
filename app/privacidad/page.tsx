'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { staggerContainerSlow, staggerItem, fadeLeftVariants, lineExpandVariants } from '@/lib/animations'

import { Footer } from '@/components/sections/Footer'
import { clinicaData } from '@/lib/data'

export default function PrivacidadPage() {
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
              Política de privacidad
            </motion.h1>
            <motion.div variants={lineExpandVariants} className="w-16 h-px bg-gold/50 mt-8" style={{ transformOrigin: 'left' }} />
          </motion.div>
        </div>
      </section>

      <section className="bg-pearl py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 prose prose-sm text-muted font-body leading-relaxed space-y-8">

          <div>
            <h2 className="font-body font-medium text-midnight text-lg mb-3">1. Responsable del tratamiento</h2>
            <p>{clinicaData.nombre} · {clinicaData.ubicacion} · {clinicaData.email}</p>
          </div>

          <div>
            <h2 className="font-body font-medium text-midnight text-lg mb-3">2. Datos que recogemos</h2>
            <p>A través del formulario de contacto recogemos nombre, dirección de correo electrónico, número de teléfono y el mensaje que nos envías. Estos datos son estrictamente necesarios para atender tu solicitud.</p>
          </div>

          <div>
            <h2 className="font-body font-medium text-midnight text-lg mb-3">3. Finalidad y base legitimadora</h2>
            <p>Los datos se utilizan exclusivamente para responder a tu consulta y, si lo solicitas, para gestionar tu primera visita. La base legal es tu consentimiento explícito al enviar el formulario (art. 6.1.a RGPD).</p>
          </div>

          <div>
            <h2 className="font-body font-medium text-midnight text-lg mb-3">4. Conservación de los datos</h2>
            <p>Los datos se conservan durante el tiempo necesario para atender tu solicitud y, en caso de convertirse en paciente, durante el período legalmente exigido por la normativa sanitaria aplicable.</p>
          </div>

          <div>
            <h2 className="font-body font-medium text-midnight text-lg mb-3">5. Cesión a terceros</h2>
            <p>No cedemos tus datos a terceros salvo obligación legal. No realizamos transferencias internacionales de datos.</p>
          </div>

          <div>
            <h2 className="font-body font-medium text-midnight text-lg mb-3">6. Tus derechos</h2>
            <p>Puedes ejercer en cualquier momento los derechos de acceso, rectificación, supresión, portabilidad, limitación y oposición escribiendo a <a href={`mailto:${clinicaData.email}`} className="text-gold hover:underline">{clinicaData.email}</a>. También tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (aepd.es).</p>
          </div>

          <div>
            <h2 className="font-body font-medium text-midnight text-lg mb-3">7. Seguridad</h2>
            <p>Aplicamos medidas técnicas y organizativas apropiadas para proteger tus datos frente a accesos no autorizados, pérdida o destrucción accidental.</p>
          </div>

          <p className="text-xs text-muted/60 pt-4 border-t border-ink-subtle">Última actualización: mayo de 2025</p>
        </div>
      </section>

      <Footer />
    </>
  )
}
