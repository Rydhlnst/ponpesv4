import { NextRequest, NextResponse } from "next/server"
import { getHero, saveHero, HeroData } from "@/lib/data"

export async function GET() {
  return NextResponse.json(getHero())
}

export async function PUT(req: NextRequest) {
  const body = await req.json() as HeroData
  saveHero(body)
  return NextResponse.json({ ok: true })
}
