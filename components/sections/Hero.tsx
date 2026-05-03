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

function LampContainer({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn('relative min-h-screen overflow-hidden w-full', className)}
      style={{ backgroundColor: MIDNIGHT }}
    >
      {/* ── Lamp layer — absolute top, no impact on content layout ── */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[60vh] overflow-hidden">

        {/* Scale container — pushes beams downward for the "hanging lamp" look */}
        <div className="relative flex h-full w-full scale-y-125 items-end justify-center origin-top">

          {/* Left beam */}
          <motion.div
            initial={{ opacity: 0.4, width: '14rem' }}
            animate={{ opacity: 1, width: '30rem' }}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-0 right-1/2 h-56 overflow-visible"
            style={{
              backgroundImage: `conic-gradient(from 70deg at center top, ${GOLD}, transparent, transparent)`,
            }}
          >
            <div className="absolute inset-x-0 bottom-0 h-40 z-10"
              style={{
                backgroundColor: MIDNIGHT,
                maskImage: 'linear-gradient(to top, white, transparent)',
                WebkitMaskImage: 'linear-gradient(to top, white, transparent)',
              }}
            />
            <div className="absolute left-0 inset-y-0 w-40 z-10"
              style={{
                backgroundColor: MIDNIGHT,
                maskImage: 'linear-gradient(to right, white, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, white, transparent)',
              }}
            />
          </motion.div>

          {/* Right beam */}
          <motion.div
            initial={{ opacity: 0.4, width: '14rem' }}
            animate={{ opacity: 1, width: '30rem' }}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-0 left-1/2 h-56 overflow-visible"
            style={{
              backgroundImage: `conic-gradient(from 290deg at center top, transparent, transparent, ${GOLD})`,
            }}
          >
            <div className="absolute right-0 inset-y-0 w-40 z-10"
              style={{
                backgroundColor: MIDNIGHT,
                maskImage: 'linear-gradient(to left, white, transparent)',
                WebkitMaskImage: 'linear-gradient(to left, white, transparent)',
              }}
            />
            <div className="absolute inset-x-0 bottom-0 h-40 z-10"
              style={{
                backgroundColor: MIDNIGHT,
                maskImage: 'linear-gradient(to top, white, transparent)',
                WebkitMaskImage: 'linear-gradient(to top, white, transparent)',
              }}
            />
          </motion.div>

          {/* Wide ambient glow */}
          <div
            className="absolute bottom-16 h-32 w-[28rem] rounded-full blur-3xl z-20"
            style={{ backgroundColor: GOLD, opacity: 0.15 }}
          />

          {/* Tight core glow */}
          <motion.div
            initial={{ width: '8rem', opacity: 0 }}
            animate={{ width: '16rem', opacity: 0.35 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-20 h-20 rounded-full blur-2xl z-20"
            style={{ backgroundColor: GOLD }}
          />

          {/* Filament — horizontal line at the bottom of the lamp layer */}
          <motion.div
            initial={{ width: '8rem', opacity: 0 }}
            animate={{ width: '30rem', opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-[14rem] h-px z-30"
            style={{ backgroundColor: `${GOLD}80` }}
          />

          {/* Floor cut — hides the base of the beams cleanly */}
          <div
            className="absolute inset-x-0 bottom-0 h-40 z-20"
            style={{ backgroundColor: MIDNIGHT }}
          />
        </div>
      </div>

      {/* ── Content — centered independently, padded for navbar ── */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-5 pt-20 pb-16">
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
        className="flex flex-col items-center text-center w-full max-w-4xl"
      >
        {/* Tagline */}
        <motion.div variants={staggerItem} className="flex items-center gap-3 mb-8">
          <div className="w-6 h-px" style={{ backgroundColor: `${GOLD}80` }} />
          <span className="text-xs font-body font-medium uppercase tracking-[0.22em]"
            style={{ color: `${GOLD}99` }}>
            {clinicaData.tagline}
          </span>
          <div className="w-6 h-px" style={{ backgroundColor: `${GOLD}80` }} />
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
          style={{ width: '4rem', backgroundColor: `${GOLD}60`, transformOrigin: 'center' }}
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-10 animate-pulse mx-auto"
          style={{ backgroundColor: `${GOLD}30` }}
        />
      </motion.div>
    </LampContainer>
  )
}
