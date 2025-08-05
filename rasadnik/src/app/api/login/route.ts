import { NextResponse } from 'next/server'
import prisma from '@/lib/db'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export async function POST(req: Request) {
  const body = await req.json()
  const { email, password } = body

  if (!email || !password) {
    return NextResponse.json({ message: 'Missing fields' }, { status: 400 })
  }

  const user = await prisma.user.findUnique({ where: { email } })

  if (!user) {
    return NextResponse.json({ message: 'User not found' }, { status: 404 })
  }

  const isValid = await bcrypt.compare(password, user.password)

  if (!isValid) {
    return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 })
  }

  // ✅ Kreiraj JWT token
  const token = jwt.sign(
    { id: user.id, name: user.name, email: user.email },
    process.env.JWT_SECRET!,
    { expiresIn: '7d' }
  )

  // ✅ Postavi cookie (httpOnly)
  const res = NextResponse.json({ message: 'Login successful' }, { status: 200 })
  res.cookies.set('token', token, {
    httpOnly: true,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 7 dana
    path: '/',
  })

  return res
}
