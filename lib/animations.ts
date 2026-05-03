import { Variants } from 'framer-motion'

export const EASE_LUXURY = [0.16, 1, 0.3, 1] as const
export const EASE_SMOOTH = [0.25, 0.1, 0.25, 1] as const

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE_LUXURY } },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
}

export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.22, delayChildren: 0.2 } },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE_LUXURY } },
}

export const fadeLeftVariants: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.0, ease: EASE_LUXURY } },
}

export const fadeRightVariants: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.0, ease: EASE_LUXURY } },
}

export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.0, ease: EASE_LUXURY } },
}

export const lineExpandVariants: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.9, ease: EASE_LUXURY, delay: 0.3 } },
}

export const textRevealVariants: Variants = {
  hidden: { y: '100%', opacity: 0 },
  visible: {
    y: '0%',
    opacity: 1,
    transition: { duration: 1.1, ease: EASE_LUXURY },
  },
}

export const cardHoverVariants = {
  rest: {
    y: 0,
    boxShadow: '0 1px 3px rgba(10,22,40,0.06)',
    transition: { duration: 0.4, ease: EASE_SMOOTH },
  },
  hover: {
    y: -6,
    boxShadow: '0 12px 32px rgba(10,22,40,0.12)',
    transition: { duration: 0.4, ease: EASE_SMOOTH },
  },
}

export const imageHoverVariants = {
  rest: { scale: 1, transition: { duration: 0.6, ease: EASE_SMOOTH } },
  hover: { scale: 1.03, transition: { duration: 0.6, ease: EASE_SMOOTH } },
}

export const buttonHoverVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.02, transition: { duration: 0.25 } },
  tap: { scale: 0.98, transition: { duration: 0.1 } },
}

export const navbarVariants: Variants = {
  transparent: {
    backgroundColor: 'rgba(250,250,248,0)',
    backdropFilter: 'blur(0px)',
    borderBottomColor: 'rgba(10,22,40,0)',
  },
  solid: {
    backgroundColor: 'rgba(250,250,248,0.95)',
    backdropFilter: 'blur(20px)',
    borderBottomColor: 'rgba(10,22,40,0.08)',
  },
}

export const mobileMenuVariants: Variants = {
  closed: { opacity: 0, height: 0, transition: { duration: 0.3, ease: EASE_SMOOTH } },
  open: { opacity: 1, height: 'auto', transition: { duration: 0.4, ease: EASE_SMOOTH } },
}

export const formSuccessVariants: Variants = {
  hidden: { opacity: 0, scale: 0.97, y: 8 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: EASE_LUXURY } },
  exit: { opacity: 0, scale: 0.97, y: -8, transition: { duration: 0.35 } },
}

export const viewportConfig = { once: true, margin: '-60px' }
