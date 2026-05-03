export interface FilosofiaItem {
  id: number
  numero: string
  titulo: string
  descripcion: string
}

export const filosofiaData = {
  label: 'Nuestra filosofía',
  titular: 'La perfección no se improvisa.',
  subtitular: 'Se diseña, se planifica y se ejecuta con precisión milimétrica.',
  descripcion: `En Aureum Dental creemos que cada sonrisa es una obra singular.
No trabajamos con plantillas ni con atajos. Cada tratamiento comienza con
un análisis profundo, continúa con un plan personalizado y termina con
un resultado que el paciente reconoce como propio.`,
  pilares: [
    {
      id: 1,
      numero: '01',
      titulo: 'Diagnóstico sin prisas',
      descripcion: 'Dedicamos el tiempo necesario a entender cada caso antes de proponer cualquier solución. La primera visita nunca termina con una venta.',
    },
    {
      id: 2,
      numero: '02',
      titulo: 'Tecnología de precisión',
      descripcion: 'Escáner intraoral 3D, diseño digital de sonrisa y laboratorio propio. El margen de error no existe en nuestro vocabulario.',
    },
    {
      id: 3,
      numero: '03',
      titulo: 'Estética que respeta',
      descripcion: 'El objetivo no es una sonrisa genérica. Es una sonrisa que te pertenece, que encaja con tu rostro, tu personalidad y tu vida.',
    },
  ] satisfies FilosofiaItem[],
}
