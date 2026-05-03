import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
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

export const metadata: Metadata = {
  title: 'Aureum Dental · Odontología estética de precisión · Madrid',
  description: 'Clínica dental de alto nivel en Madrid. Carillas, implantes y ortodoncia invisible con tecnología de precisión y resultados naturales.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${cormorant.variable} ${dmSans.variable} font-body bg-ivory text-midnight antialiased`}>
        {children}
      </body>
    </html>
  )
}
