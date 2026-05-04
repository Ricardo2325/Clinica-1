import Link from 'next/link'
import { GoldDivider } from '@/components/ui/GoldDivider'
import { clinicaData } from '@/lib/data'

const serviciosLinks = [
  { label: 'Carillas de Porcelana', href: '/servicios' },
  { label: 'Implantes Dentales', href: '/servicios' },
  { label: 'Ortodoncia Invisible', href: '/servicios' },
  { label: 'Blanqueamiento Profesional', href: '/servicios' },
]

const legalesLinks = [
  { label: 'Política de privacidad', href: '/privacidad' },
  { label: 'Aviso legal', href: '/aviso-legal' },
  { label: 'Cookies', href: '/cookies' },
]

export function Footer() {
  return (
    <footer className="bg-midnight">
      <GoldDivider className="opacity-20" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-16">

          {/* Col 1 — Brand */}
          <div>
            <div className="mb-6">
              <span className="font-display font-light text-2xl tracking-[0.3em] text-white uppercase block">
                Aureum
              </span>
              <span className="font-body text-[9px] tracking-[0.28em] text-gold uppercase mt-1 block">
                Dental
              </span>
            </div>
            <div className="space-y-2 text-white/40 text-sm font-body">
              <p>{clinicaData.ubicacion}</p>
              <p>{clinicaData.horario}</p>
              <a
                href={`tel:${clinicaData.telefono}`}
                className="block hover:text-gold transition-colors"
              >
                {clinicaData.telefono}
              </a>
              <a
                href={`mailto:${clinicaData.email}`}
                className="block hover:text-gold transition-colors"
              >
                {clinicaData.email}
              </a>
            </div>
          </div>

          {/* Col 2 — Services */}
          <div>
            <p className="text-[10px] text-gold uppercase tracking-[0.2em] font-body font-medium mb-5">
              Tratamientos
            </p>
            <ul className="space-y-3">
              {serviciosLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/40 text-sm font-body hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Legal */}
          <div>
            <p className="text-[10px] text-gold uppercase tracking-[0.2em] font-body font-medium mb-5">
              Legal
            </p>
            <ul className="space-y-3 mb-8">
              {legalesLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/40 text-sm font-body hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-white/20 text-xs font-body leading-relaxed">
              Colegiado nº XXXXX<br />
              Ilustre Colegio de Odontólogos<br />
              de Madrid
            </p>
          </div>

        </div>

        <GoldDivider className="opacity-10 mb-8" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-white/20 text-xs font-body">
            © {new Date().getFullYear()} Aureum Dental. Todos los derechos reservados.
          </p>
          <p className="text-white/15 text-xs font-body">
            Odontología estética de precisión · Madrid
          </p>
        </div>
      </div>
    </footer>
  )
}
