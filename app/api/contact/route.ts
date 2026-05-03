import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as {
      nombre?: string
      email?: string
      telefono?: string
      mensaje?: string
    }

    if (!body.nombre || !body.email) {
      return NextResponse.json({ error: 'Nombre y email son obligatorios.' }, { status: 400 })
    }

    console.log('[Contact Form]', {
      nombre: body.nombre,
      email: body.email,
      telefono: body.telefono ?? '',
      mensaje: body.mensaje ?? '',
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({ ok: true }, { status: 200 })
  } catch {
    return NextResponse.json({ error: 'Error interno del servidor.' }, { status: 500 })
  }
}
