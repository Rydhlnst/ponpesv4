import { NextRequest, NextResponse } from "next/server"
import { getArticles, createArticle } from "@/lib/data"
import { articleSchema } from "@/lib/validations"
import { ZodError } from "zod"

export async function GET() {
  const data = await getArticles()
  return NextResponse.json(data)
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const validated = articleSchema.parse(body)
    const article = await createArticle(validated)
    return NextResponse.json(article, { status: 201 })
  } catch (err) {
    if (err instanceof ZodError) {
      return NextResponse.json({ error: "Validasi gagal", details: err.issues }, { status: 400 })
    }
    return NextResponse.json({ error: "Terjadi kesalahan server" }, { status: 500 })
  }
}

