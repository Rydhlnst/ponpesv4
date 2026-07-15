import { NextRequest, NextResponse } from "next/server"
import { getStats, saveStats, StatsData } from "@/lib/data"

export async function GET() {
  return NextResponse.json(getStats())
}

export async function PUT(req: NextRequest) {
  const body = await req.json() as StatsData
  saveStats(body)
  return NextResponse.json({ ok: true })
}
