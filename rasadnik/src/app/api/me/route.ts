import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

export async function GET() {
  const cookieStore = await cookies() // ← ovde je fix
  const token = cookieStore.get('token')?.value

  if (!token) {
    return NextResponse.json({ message: 'Not authenticated' }, { status: 401 })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!)
    return NextResponse.json({ user: decoded }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 })
  }
}
