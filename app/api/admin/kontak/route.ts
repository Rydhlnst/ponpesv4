import { NextRequest, NextResponse } from "next/server"
import { getKontak, upsertKontak, replaceBanks } from "@/lib/data"
import { kontakSchema } from "@/lib/validations"
import { ZodError } from "zod"

export async function GET() {
  const data = await getKontak()
  return NextResponse.json(data)
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json()
    const { banks, ...kontakData } = kontakSchema.parse(body)

    const savedKontak = await upsertKontak(kontakData)
    const savedBanks = await replaceBanks(
      banks.map((b, i) => ({ ...b, sortOrder: b.sortOrder ?? i }))
    )

    return NextResponse.json({ ...savedKontak, banks: savedBanks })
  } catch (err) {
    if (err instanceof ZodError) {
      return NextResponse.json({ error: "Validasi gagal", details: err.issues }, { status: 400 })
    }
    return NextResponse.json({ error: "Terjadi kesalahan server" }, { status: 500 })
  }
}

