import { NextRequest, NextResponse } from "next/server"
import { getHeroSlides, replaceHeroSlides } from "@/lib/data"
import { heroDataSchema } from "@/lib/validations"
import { ZodError } from "zod"

export async function GET() {
  const slides = await getHeroSlides()
  return NextResponse.json({ slides })
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json()
    const { slides } = heroDataSchema.parse(body)
    const saved = await replaceHeroSlides(
      slides.map((s, i) => ({ ...s, sortOrder: s.sortOrder ?? i }))
    )
    return NextResponse.json({ slides: saved })
  } catch (err) {
    if (err instanceof ZodError) {
      return NextResponse.json({ error: "Validasi gagal", details: err.issues }, { status: 400 })
    }
    return NextResponse.json({ error: "Terjadi kesalahan server" }, { status: 500 })
  }
}

