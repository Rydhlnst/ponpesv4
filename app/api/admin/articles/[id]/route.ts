import { NextRequest, NextResponse } from "next/server"
import { getArticleById, updateArticle, deleteArticle } from "@/lib/data"
import { articleUpdateSchema } from "@/lib/validations"
import { deleteFromR2, keyFromUrl } from "@/lib/r2"
import { ZodError } from "zod"

function parseId(id: string) {
  const n = parseInt(id, 10)
  return isNaN(n) ? null : n
}

async function tryDeleteR2(url: string) {
  const key = keyFromUrl(url)
  if (key) await deleteFromR2(key).catch(() => {})
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const numId = parseId(id)
  if (!numId) return NextResponse.json({ error: "ID tidak valid" }, { status: 400 })

  try {
    const existing = await getArticleById(numId)
    if (!existing) return NextResponse.json({ error: "Artikel tidak ditemukan" }, { status: 404 })

    const body = await req.json()
    const validated = articleUpdateSchema.parse(body)
    const article = await updateArticle(numId, validated)

    if (validated.image !== undefined && validated.image !== existing.image && existing.image) {
      await tryDeleteR2(existing.image)
    }

    return NextResponse.json(article)
  } catch (err) {
    if (err instanceof ZodError) {
      return NextResponse.json({ error: "Validasi gagal", details: err.issues }, { status: 400 })
    }
    return NextResponse.json({ error: "Terjadi kesalahan server" }, { status: 500 })
  }
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const numId = parseId(id)
  if (!numId) return NextResponse.json({ error: "ID tidak valid" }, { status: 400 })

  const article = await getArticleById(numId)
  if (!article) return NextResponse.json({ error: "Artikel tidak ditemukan" }, { status: 404 })

  await deleteArticle(numId)

  if (article.image) await tryDeleteR2(article.image)

  return NextResponse.json({ ok: true })
}
