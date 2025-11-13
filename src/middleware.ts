import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Domínios permitidos para CORS
const allowedOrigins = [
  'https://sh-vivaverao.vercel.app',
  // 'https://classicosmendorato.santahelena.com',
  'http://localhost:3000',
]

export function middleware(request: NextRequest) {
  // Verifica e ajusta o CORS
  const origin = request.headers.get('origin')
  if (origin && !allowedOrigins.includes(origin)) {
    return new NextResponse('Origin não permitida', { status: 403 })
  }

  return NextResponse.next()
}
