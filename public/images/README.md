# /public/images

Carpeta para imágenes locales del proyecto.

## Estructura

```
images/
├── clinica/       → Fotos de la consulta, sala de espera, instalaciones
├── equipo/        → Fotos de los doctores
└── antes-despues/ → Casos clínicos antes/después
```

## Uso en código

```tsx
import Image from 'next/image'

<Image
  src="/images/clinica/hero.jpg"
  alt="Clínica Aureum Dental"
  fill
  className="object-cover"
/>
```

## Formatos recomendados
- **Hero / secciones grandes**: JPG o WebP, mínimo 1400px ancho
- **Antes/después**: JPG, formato cuadrado o 3:4 vertical
- **Equipo**: JPG, formato cuadrado, mínimo 600×600px
