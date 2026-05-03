'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  staggerContainer,
  staggerItem,
  fadeLeftVariants,
  fadeRightVariants,
  formSuccessVariants,
  lineExpandVariants,
  viewportConfig,
} from '@/lib/animations'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Button } from '@/components/ui/Button'

interface FormData {
  nombre: string
  email: string
  telefono: string
  mensaje: string
}

const beneficios = [
  'Primera visita gratuita',
  'Sin listas de espera',
  'Presupuesto el mismo día',
]

export function FinalCTA() {
  const [form, setForm] = useState<FormData>({ nombre: '', email: '', telefono: '', mensaje: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setSuccess(true)
      } else {
        setError('Ha ocurrido un error. Por favor, inténtalo de nuevo.')
      }
    } catch {
      setError('Ha ocurrido un error. Por favor, inténtalo de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass =
    'w-full bg-transparent border-b border-white/20 text-white placeholder:text-white/30 pb-3 pt-1 focus:border-gold outline-none transition-colors duration-300 font-body text-sm'

  return (
    <section id="contacto" className="bg-midnight py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.div variants={staggerItem}>
              <SectionLabel className="text-gold/70">Contacto</SectionLabel>
            </motion.div>

            <motion.h2
              variants={fadeLeftVariants}
              className="display-text text-5xl lg:text-6xl text-white mb-6 leading-[1.1]"
            >
              El primer paso<br />
              <span className="italic text-gold">es una conversación.</span>
            </motion.h2>

            <motion.div
              variants={lineExpandVariants}
              className="w-12 h-px bg-gold/40 mb-8"
              style={{ transformOrigin: 'left' }}
            />

            <motion.p
              variants={staggerItem}
              className="text-white/50 leading-relaxed mb-10 font-body"
            >
              Primera visita sin compromiso. Diagnóstico completo,
              diseño digital de sonrisa y presupuesto detallado
              sin coste adicional.
            </motion.p>

            <motion.div variants={staggerContainer} className="space-y-3">
              {beneficios.map((item, i) => (
                <motion.div key={i} variants={staggerItem} className="flex items-center gap-3">
                  <div className="w-px h-4 bg-gold shrink-0" />
                  <span className="text-white/60 text-sm font-body">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            variants={fadeRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <div className="bg-white/5 border border-white/10 p-8 lg:p-10">
              <AnimatePresence mode="wait">
                {success ? (
                  <motion.div
                    key="success"
                    variants={formSuccessVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="flex flex-col items-center text-center py-12"
                  >
                    <div className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center mb-6">
                      <span className="text-gold text-xl">✓</span>
                    </div>
                    <h3 className="display-text text-3xl text-white mb-3">
                      Mensaje recibido.
                    </h3>
                    <p className="text-white/50 text-sm font-body leading-relaxed">
                      Nos pondremos en contacto contigo en menos de 24 horas.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    variants={formSuccessVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onSubmit={handleSubmit}
                    className="space-y-8"
                  >
                    <div>
                      <label className="text-[10px] text-white/40 uppercase tracking-wider font-body block mb-2">
                        Nombre
                      </label>
                      <input
                        type="text"
                        required
                        className={inputClass}
                        placeholder="Tu nombre completo"
                        value={form.nombre}
                        onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-white/40 uppercase tracking-wider font-body block mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        className={inputClass}
                        placeholder="tu@email.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-white/40 uppercase tracking-wider font-body block mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        className={inputClass}
                        placeholder="+34 6XX XXX XXX"
                        value={form.telefono}
                        onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-white/40 uppercase tracking-wider font-body block mb-2">
                        ¿Qué te gustaría mejorar?
                      </label>
                      <textarea
                        rows={3}
                        className={`${inputClass} resize-none`}
                        placeholder="Cuéntanos brevemente..."
                        value={form.mensaje}
                        onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                      />
                    </div>

                    {error && (
                      <p className="text-red-400 text-xs font-body">{error}</p>
                    )}

                    <Button
                      variant="gold"
                      size="lg"
                      type="submit"
                      disabled={loading}
                      className="w-full justify-center"
                    >
                      {loading ? 'Enviando...' : 'Solicitar primera visita →'}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
