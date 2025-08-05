import { NextResponse } from 'next/server'
import prisma from '@/lib/db'
import bcrypt from 'bcrypt'

export async function POST(req: Request) {
  const body = await req.json()
  const { name, email, password } = body

  if (!name || !email || !password) {
    return NextResponse.json({ message: 'Missing fields' }, { status: 400 })
  }

  const existingUser = await prisma.user.findUnique({ where: { email } })

  if (existingUser) {
    return NextResponse.json({ message: 'User already exists' }, { status: 409 })
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  })

  return NextResponse.json({
    message: 'User created',
    user: { id: newUser.id, name: newUser.name, email: newUser.email },
  }, { status: 201 })
}
