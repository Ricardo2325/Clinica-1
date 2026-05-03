'use client'
import { motion } from 'framer-motion'
import { fadeUpVariants, viewportConfig } from '@/lib/animations'

export function SectionLabel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className="flex items-center gap-3 mb-6"
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
    >
      <div className="w-6 h-px bg-gold" />
      <span className={`section-label ${className ?? ''}`}>{children}</span>
    </motion.div>
  )
}
