export interface Servicio {
  id: string
  nombre: string
  tagline: string
  descripcion: string
  incluye: string[]
  precio: string
  duracion: string
  sesiones: string
  imagen: string | null
  destacado: boolean
}

export const serviciosDetalle: Servicio[] = [
  {
    id: 'carillas',
    nombre: 'Carillas de Porcelana',
    tagline: 'La transformación más precisa que existe.',
    descripcion: `Las carillas de porcelana son láminas ultrafinas adheridas a la cara
visible del diente. Cambian forma, color y tamaño con una permanencia de
15-20 años. Resultado: natural, duradero e indistinguible del diente real.`,
    incluye: [
      'Análisis facial y diseño digital de sonrisa',
      'Prueba de mock-up antes de cualquier tallado',
      'Carillas en porcelana feldespática o e.max',
      'Laboratorio propio — control total del resultado',
      'Seguimiento a los 6 y 12 meses incluido',
    ],
    precio: 'Desde 750€ por carilla',
    duracion: '2-3 sesiones',
    sesiones: '3 semanas de proceso',
    imagen: null,
    destacado: true,
  },
  {
    id: 'implantes',
    nombre: 'Implantes Dentales',
    tagline: 'La solución definitiva para el diente perdido.',
    descripcion: `El implante dental es la única solución que sustituye la raíz del diente,
no solo la corona. Titanio de grado médico, integración ósea completa,
resultado funcional y estético idéntico al diente natural.`,
    incluye: [
      'TAC dental 3D y planificación quirúrgica digital',
      'Implante de titanio de grado IV certificado',
      'Corona de zirconio personalizada en laboratorio propio',
      'Cirugía guiada por ordenador',
      'Garantía de 10 años en el implante',
    ],
    precio: 'Desde 1.800€ implante completo',
    duracion: '3-6 meses (proceso completo)',
    sesiones: '4-5 sesiones',
    imagen: null,
    destacado: false,
  },
  {
    id: 'ortodoncia',
    nombre: 'Ortodoncia Invisible',
    tagline: 'Alineación perfecta. Completamente invisible.',
    descripcion: `Alineadores transparentes a medida para corregir apiñamientos, diastemas
y maloclusiones sin brackets metálicos. Diseño 3D del movimiento completo
antes de empezar — ves tu resultado final antes de ponerte el primer alineador.`,
    incluye: [
      'Escáner intraoral 3D (sin moldes)',
      'Simulación 3D del resultado final antes de iniciar',
      'Serie completa de alineadores incluida',
      'Revisiones ilimitadas durante el tratamiento',
      'Retenedores de por vida incluidos',
    ],
    precio: 'Desde 2.400€ tratamiento completo',
    duracion: '8-18 meses',
    sesiones: 'Revisión cada 8 semanas',
    imagen: null,
    destacado: false,
  },
  {
    id: 'blanqueamiento',
    nombre: 'Blanqueamiento Profesional',
    tagline: 'Hasta 8 tonos en una sola sesión.',
    descripcion: `Blanqueamiento en clínica con luz LED de última generación y gel de
peróxido al 40%. Resultado inmediato, controlado y duradero.
Muy diferente al blanqueamiento doméstico — es un tratamiento médico.`,
    incluye: [
      'Estudio previo de sensibilidad dental',
      'Protección gingival total durante el proceso',
      'Sesión de 90 minutos en clínica',
      'Kit de mantenimiento doméstico incluido',
      'Revisión al mes incluida',
    ],
    precio: 'Desde 380€ sesión completa',
    duracion: '1 sesión de 90 minutos',
    sesiones: '1 sesión + mantenimiento',
    imagen: null,
    destacado: false,
  },
]

export const servicioDestacado = serviciosDetalle.find(s => s.destacado) ?? serviciosDetalle[0]
