'use client'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import {
  staggerContainerSlow,
  staggerItem,
  textRevealVariants,
  lineExpandVariants,
} from '@/lib/animations'
import { clinicaData, stats } from '@/lib/data'
import { Button } from '@/components/ui/Button'

const GOLD   = 'rgba(201,169,110,0.65)'
const GOLD_S = 'rgba(201,169,110,0.5)'
const NIGHT  = '#0A1628'

export function Hero() {
  return (
    <section
      className={cn(
        'relative z-0 flex min-h-screen w-full flex-col items-center justify-center overflow-hidden',
      )}
      style={{ backgroundColor: NIGHT }}
    >
      {/* ── Lamp layer — hangs from top ────────────────────────────────── */}
      <div className="absolute top-0 isolate z-0 flex w-full flex-1 items-start justify-center">

        {/* Backdrop blur strip */}
        <div className="absolute top-0 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />

        {/* Wide ambient glow — pushed to ~200px to iluminar el título */}
        <div
          className="absolute inset-auto z-50 h-48 w-[36rem] rounded-full blur-3xl"
          style={{ backgroundColor: GOLD, opacity: 0.6, transform: 'translateY(140%)' }}
        />

        {/* Tight core glow — anclado en el top */}
        <motion.div
          initial={{ width: '8rem' }}
          animate={{ width: '20rem' }}
          transition={{ ease: 'easeInOut', delay: 0.3, duration: 0.8 }}
          className="absolute top-0 z-30 h-36 rounded-full blur-2xl"
          style={{ backgroundColor: GOLD, transform: 'translateY(-20%)' }}
        />

        {/* Filament line */}
        <motion.div
          initial={{ width: '15rem', opacity: 0 }}
          animate={{ width: '84vw', opacity: 1 }}
          transition={{ ease: 'easeInOut', delay: 0.35, duration: 0.8 }}
          className="absolute inset-auto z-50 h-px"
          style={{ backgroundColor: GOLD, transform: 'translateY(250%)' }}
        />

        {/* Left cone */}
        <motion.div
          initial={{ opacity: 0.5, width: '15rem' }}
          animate={{ opacity: 1, width: '42vw' }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }}
          className="absolute inset-auto right-1/2 h-[30rem] overflow-visible"
          style={{
            backgroundImage: `conic-gradient(from 70deg at center top, ${GOLD}, transparent, transparent)`,
          }}
        >
          <div
            className="absolute inset-x-0 bottom-0 h-20 z-20"
            style={{
              backgroundColor: NIGHT,
              maskImage: 'linear-gradient(to top, white, transparent)',
              WebkitMaskImage: 'linear-gradient(to top, white, transparent)',
            }}
          />
          <div
            className="absolute left-0 inset-y-0 w-40 z-20"
            style={{
              backgroundColor: NIGHT,
              maskImage: 'linear-gradient(to right, white, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, white, transparent)',
            }}
          />
        </motion.div>

        {/* Right cone */}
        <motion.div
          initial={{ opacity: 0.5, width: '15rem' }}
          animate={{ opacity: 1, width: '42vw' }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }}
          className="absolute inset-auto left-1/2 h-[30rem] overflow-visible"
          style={{
            backgroundImage: `conic-gradient(from 290deg at center top, transparent, transparent, ${GOLD})`,
          }}
        >
          <div
            className="absolute right-0 inset-y-0 w-40 z-20"
            style={{
              backgroundColor: NIGHT,
              maskImage: 'linear-gradient(to left, white, transparent)',
              WebkitMaskImage: 'linear-gradient(to left, white, transparent)',
            }}
          />
          <div
            className="absolute inset-x-0 bottom-0 h-20 z-20"
            style={{
              backgroundColor: NIGHT,
              maskImage: 'linear-gradient(to top, white, transparent)',
              WebkitMaskImage: 'linear-gradient(to top, white, transparent)',
            }}
          />
        </motion.div>

      </div>

      {/* ── Content ────────────────────────────────────────────────────── */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: 'easeInOut', delay: 0.3, duration: 0.9 }}
        className="relative z-50 flex flex-1 flex-col items-center justify-center px-5 w-full max-w-4xl text-center -translate-y-16"
      >
        <motion.div
          variants={staggerContainerSlow}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center w-full gap-0"
        >
          {/* Tagline */}
          <motion.div variants={staggerItem} className="flex items-center gap-3 mb-8">
            <div className="w-6 h-px" style={{ backgroundColor: GOLD_S }} />
            <span
              className="text-xs font-body font-medium uppercase tracking-[0.22em]"
              style={{ color: GOLD_S }}
            >
              {clinicaData.tagline}
            </span>
            <div className="w-6 h-px" style={{ backgroundColor: GOLD_S }} />
          </motion.div>

          {/* Title */}
          <div className="mb-8">
            <div className="overflow-hidden mb-1">
              <motion.h1
                variants={textRevealVariants}
                className="display-text text-6xl lg:text-7xl xl:text-[86px] text-white leading-[1.05]"
              >
                La sonrisa
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-1">
              <motion.h1
                variants={textRevealVariants}
                className="display-text text-6xl lg:text-7xl xl:text-[86px] italic leading-[1.05]"
                style={{ color: '#C9A96E' }}
              >
                que siempre
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                variants={textRevealVariants}
                className="display-text text-6xl lg:text-7xl xl:text-[86px] text-white leading-[1.05]"
              >
                imaginaste.
              </motion.h1>
            </div>
          </div>

          {/* Gold line */}
          <motion.div
            variants={lineExpandVariants}
            className="h-px mb-8"
            style={{ width: '4rem', backgroundColor: GOLD_S, transformOrigin: 'center' }}
          />

          {/* Subtitle */}
          <motion.p
            variants={staggerItem}
            className="font-body text-base lg:text-lg leading-relaxed max-w-md mb-10"
            style={{ color: 'rgba(255,255,255,0.45)' }}
          >
            Odontología estética de alto nivel en Madrid.
            Carillas, implantes y ortodoncia invisible con tecnología
            de precisión y resultados que duran décadas.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={staggerItem} className="flex flex-col sm:flex-row gap-4 mb-14">
            <Button variant="gold" size="lg" href="/#contacto">
              {clinicaData.ctaPrincipal} →
            </Button>
            <Button variant="ghost" size="lg" href="/#antes-despues">
              <span style={{ color: 'rgba(255,255,255,0.5)' }}>{clinicaData.ctaSecundario}</span>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={staggerItem}
            className="flex flex-wrap justify-center gap-x-12 gap-y-5 pt-10 w-full max-w-2xl"
            style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <span className="font-display text-3xl lg:text-4xl font-light text-white">
                  {stat.valor}
                </span>
                <span
                  className="text-[10px] font-body uppercase tracking-[0.18em] mt-1"
                  style={{ color: 'rgba(255,255,255,0.35)' }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div
          className="w-px h-10 animate-pulse"
          style={{ backgroundColor: GOLD_S }}
        />
      </motion.div>
    </section>
  )
}
