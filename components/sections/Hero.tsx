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

// ─── Lamp Container adaptado a paleta dental premium ─────────────────────────
function LampContainer({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        'relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-midnight w-full z-0',
        className
      )}
    >
      {/* Lamp beams */}
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">

        {/* Left beam — gold conic */}
        <motion.div
          initial={{ opacity: 0.3, width: '12rem' }}
          animate={{ opacity: 1, width: '28rem' }}
          transition={{ delay: 0.2, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ backgroundImage: 'conic-gradient(var(--conic-position), var(--tw-gradient-stops))' }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[28rem] bg-gradient-conic from-gold via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          {/* Feather bottom */}
          <div className="absolute w-full left-0 bg-midnight h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          {/* Feather left edge */}
          <div className="absolute w-40 h-full left-0 bg-midnight bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        {/* Right beam — gold conic */}
        <motion.div
          initial={{ opacity: 0.3, width: '12rem' }}
          animate={{ opacity: 1, width: '28rem' }}
          transition={{ delay: 0.2, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ backgroundImage: 'conic-gradient(var(--conic-position), var(--tw-gradient-stops))' }}
          className="absolute inset-auto left-1/2 h-56 w-[28rem] bg-gradient-conic from-transparent via-transparent to-gold text-white [--conic-position:from_290deg_at_center_top]"
        >
          {/* Feather right edge */}
          <div className="absolute w-40 h-full right-0 bg-midnight bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          {/* Feather bottom */}
          <div className="absolute w-full right-0 bg-midnight h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        {/* Floor shadow — anchors the light to the stage */}
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-midnight blur-2xl" />

        {/* Atmosphere haze */}
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />

        {/* Core glow — wide, warm */}
        <div className="absolute inset-auto z-50 h-36 w-[26rem] -translate-y-1/2 rounded-full bg-gold/20 blur-3xl" />

        {/* Core glow — tight, bright */}
        <motion.div
          initial={{ width: '6rem' }}
          animate={{ width: '14rem' }}
          transition={{ delay: 0.2, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-auto z-30 h-36 -translate-y-[6rem] rounded-full bg-gold/40 blur-2xl"
        />

        {/* Horizontal beam line — the lamp filament */}
        <motion.div
          initial={{ width: '12rem', opacity: 0 }}
          animate={{ width: '28rem', opacity: 1 }}
          transition={{ delay: 0.3, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-auto z-50 h-px -translate-y-[7rem] bg-gold/70"
        />

        {/* Stage floor — cuts light below beam center */}
        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-midnight" />
      </div>

      {/* Content — sits on top of stage */}
      <div className="relative z-50 flex -translate-y-72 lg:-translate-y-80 flex-col items-center px-5 w-full max-w-5xl mx-auto">
        {children}
      </div>
    </div>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
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
          <div className="w-6 h-px bg-gold/60" />
          <span className="text-xs font-body font-medium uppercase tracking-[0.22em] text-gold/70">
            {clinicaData.tagline}
          </span>
          <div className="w-6 h-px bg-gold/60" />
        </motion.div>

        {/* Title — line by line reveal */}
        <div className="mb-8">
          <div className="overflow-hidden mb-1">
            <motion.h1
              variants={textRevealVariants}
              className="display-text text-6xl lg:text-7xl xl:text-[88px] text-white leading-[1.05]"
            >
              La sonrisa
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-1">
            <motion.h1
              variants={textRevealVariants}
              className="display-text text-6xl lg:text-7xl xl:text-[88px] text-gold italic leading-[1.05]"
            >
              que siempre
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              variants={textRevealVariants}
              className="display-text text-6xl lg:text-7xl xl:text-[88px] text-white leading-[1.05]"
            >
              imaginaste.
            </motion.h1>
          </div>
        </div>

        {/* Gold divider */}
        <motion.div
          variants={lineExpandVariants}
          className="h-px bg-gold/50 mb-8"
          style={{ width: '4rem', transformOrigin: 'center' }}
        />

        {/* Subtitle */}
        <motion.p
          variants={staggerItem}
          className="text-white/45 font-body text-base lg:text-lg leading-relaxed max-w-md mb-12"
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
          <Button variant="outline" size="lg" href="/#antes-despues">
            <span className="text-white/60 border-white/20">{clinicaData.ctaSecundario}</span>
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={staggerItem}
          className="flex flex-wrap justify-center gap-x-12 gap-y-6 border-t border-white/10 pt-10 w-full max-w-2xl"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="font-display text-3xl lg:text-4xl font-light text-white">
                {stat.valor}
              </span>
              <span className="text-[10px] font-body text-white/35 uppercase tracking-[0.18em] mt-1">
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
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-10 bg-gold/25 animate-pulse" />
      </motion.div>
    </LampContainer>
  )
}
