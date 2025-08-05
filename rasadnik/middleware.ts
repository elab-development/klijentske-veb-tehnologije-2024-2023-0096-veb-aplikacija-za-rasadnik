import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getUserFromToken } from '@/lib/auth'

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value
  const user = token ? getUserFromToken(token) : null

  const res = NextResponse.next()
  if (user) {
    res.headers.set('x-user', JSON.stringify(user))
  }

  return res
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
