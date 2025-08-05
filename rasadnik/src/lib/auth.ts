import jwt from 'jsonwebtoken'

export function getUserFromToken(token: string) {
  try {
    return jwt.verify(token, process.env.JWT_SECRET!)
  } catch {
    return null
  }
}