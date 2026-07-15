import { NextRequest, NextResponse } from "next/server"
import { getStats, replaceStats } from "@/lib/data"
import { statsDataSchema } from "@/lib/validations"
import { ZodError } from "zod"

export async function GET() {
  const items = await getStats()
  return NextResponse.json({ items })
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json()
    const { items } = statsDataSchema.parse(body)
    const saved = await replaceStats(
      items.map((s, i) => ({ ...s, sortOrder: s.sortOrder ?? i }))
    )
    return NextResponse.json({ items: saved })
  } catch (err) {
    if (err instanceof ZodError) {
      return NextResponse.json({ error: "Validasi gagal", details: err.issues }, { status: 400 })
    }
    return NextResponse.json({ error: "Terjadi kesalahan server" }, { status: 500 })
  }
}

