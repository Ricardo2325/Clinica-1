import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans, DM_Mono } from 'next/font/google'
import { Navbar } from '@/components/Navbar'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Aureum Dental · Odontología estética de precisión · Madrid',
  description: 'Clínica dental de alto nivel en Madrid. Carillas, implantes y ortodoncia invisible con tecnología de precisión y resultados naturales.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${cormorant.variable} ${dmSans.variable} ${dmMono.variable} font-body bg-ivory text-midnight antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
