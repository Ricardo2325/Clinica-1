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

const GOLD = '#C9A96E'
const MIDNIGHT = '#0A1628'

// Los gradientes cónicos DEBEN ir en style inline — las utilidades from-* de
// Tailwind no setean --tw-gradient-stops para conic-gradient.
function LampContainer({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        'relative flex min-h-screen flex-col items-center justify-center overflow-hidden w-full z-0',
        className
      )}
      style={{ backgroundColor: MIDNIGHT }}
    >
      {/* ── Beams layer ─────────────────────────────────────────────────── */}
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">

        {/* Left beam */}
        <motion.div
          initial={{ opacity: 0.5, width: '15rem' }}
          animate={{ opacity: 1, width: '30rem' }}
          transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible"
          style={{
            backgroundImage: `conic-gradient(from 70deg at center top, ${GOLD}, transparent, transparent)`,
          }}
        >
          <div
            className="absolute w-full left-0 h-40 bottom-0 z-20"
            style={{
              backgroundColor: MIDNIGHT,
              maskImage: 'linear-gradient(to top, white, transparent)',
              WebkitMaskImage: 'linear-gradient(to top, white, transparent)',
            }}
          />
          <div
            className="absolute w-40 h-full left-0 bottom-0 z-20"
            style={{
              backgroundColor: MIDNIGHT,
              maskImage: 'linear-gradient(to right, white, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, white, transparent)',
            }}
          />
        </motion.div>

        {/* Right beam */}
        <motion.div
          initial={{ opacity: 0.5, width: '15rem' }}
          animate={{ opacity: 1, width: '30rem' }}
          transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-auto left-1/2 h-56 overflow-visible"
          style={{
            backgroundImage: `conic-gradient(from 290deg at center top, transparent, transparent, ${GOLD})`,
          }}
        >
          <div
            className="absolute w-40 h-full right-0 bottom-0 z-20"
            style={{
              backgroundColor: MIDNIGHT,
              maskImage: 'linear-gradient(to left, white, transparent)',
              WebkitMaskImage: 'linear-gradient(to left, white, transparent)',
            }}
          />
          <div
            className="absolute w-full right-0 h-40 bottom-0 z-20"
            style={{
              backgroundColor: MIDNIGHT,
              maskImage: 'linear-gradient(to top, white, transparent)',
              WebkitMaskImage: 'linear-gradient(to top, white, transparent)',
            }}
          />
        </motion.div>

        {/* Floor shadow */}
        <div
          className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 blur-2xl"
          style={{ backgroundColor: MIDNIGHT }}
        />

        {/* Wide ambient glow */}
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: GOLD }}
        />

        {/* Tight core glow */}
        <motion.div
          initial={{ width: '8rem' }}
          animate={{ width: '16rem' }}
          transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-auto z-30 h-36 -translate-y-[6rem] rounded-full blur-2xl opacity-35"
          style={{ backgroundColor: GOLD }}
        />

        {/* Filament — the horizontal light line */}
        <motion.div
          initial={{ width: '8rem', opacity: 0 }}
          animate={{ width: '30rem', opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-auto z-50 h-px -translate-y-[7rem]"
          style={{ backgroundColor: `${GOLD}99` }}
        />

        {/* Stage floor — cuts the light below the filament */}
        <div
          className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem]"
          style={{ backgroundColor: MIDNIGHT }}
        />
      </div>

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5 w-full max-w-4xl mx-auto">
        {children}
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <LampContainer>
      <motion.div
        variants={staggerContainerSlow}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center text-center w-full"
      >
        {/* Tagline */}
        <motion.div variants={staggerItem} className="flex items-center gap-3 mb-8">
          <div className="w-6 h-px" style={{ backgroundColor: `${GOLD}99` }} />
          <span className="text-xs font-body font-medium uppercase tracking-[0.22em]"
            style={{ color: `${GOLD}B3` }}>
            {clinicaData.tagline}
          </span>
          <div className="w-6 h-px" style={{ backgroundColor: `${GOLD}99` }} />
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
              style={{ color: GOLD }}
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

        {/* Divider */}
        <motion.div
          variants={lineExpandVariants}
          className="h-px mb-8"
          style={{ width: '4rem', backgroundColor: `${GOLD}80`, transformOrigin: 'center' }}
        />

        {/* Subtitle */}
        <motion.p
          variants={staggerItem}
          className="font-body text-base lg:text-lg leading-relaxed max-w-md mb-12"
          style={{ color: 'rgba(255,255,255,0.45)' }}
        >
          Odontología estética de alto nivel en Madrid.
          Carillas, implantes y ortodoncia invisible con tecnología
          de precisión y resultados que duran décadas.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={staggerItem} className="flex flex-col sm:flex-row gap-4 mb-16">
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
          className="flex flex-wrap justify-center gap-x-12 gap-y-6 pt-10 w-full max-w-2xl"
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

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-10 animate-pulse mx-auto"
          style={{ backgroundColor: `${GOLD}40` }}
        />
      </motion.div>
    </LampContainer>
  )
}
