import { NextRequest, NextResponse } from "next/server"
import { getKontak, saveKontak, KontakData } from "@/lib/data"

export async function GET() {
  return NextResponse.json(getKontak())
}

export async function PUT(req: NextRequest) {
  const body = await req.json() as KontakData
  saveKontak(body)
  return NextResponse.json({ ok: true })
}
