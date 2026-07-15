import { cookies } from "next/headers"

export async function isAuthenticated(): Promise<boolean> {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get("admin_token")?.value
    if (!token) return false

    const expected = Buffer.from(
      `${process.env.ADMIN_PASSWORD}:${process.env.ADMIN_SECRET}`
    ).toString("base64")

    return token === expected
  } catch {
    return false
  }
}
