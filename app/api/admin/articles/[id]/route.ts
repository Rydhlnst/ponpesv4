import { NextRequest, NextResponse } from "next/server"
import { getArticles, saveArticles, Article } from "@/lib/data"

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const body = await req.json() as Partial<Article>
  const articles = getArticles()
  const idx = articles.findIndex((a) => a.id === id)
  if (idx === -1) return NextResponse.json({ error: "Not found" }, { status: 404 })
  articles[idx] = { ...articles[idx], ...body, id }
  saveArticles(articles)
  return NextResponse.json(articles[idx])
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const articles = getArticles()
  const filtered = articles.filter((a) => a.id !== id)
  if (filtered.length === articles.length) return NextResponse.json({ error: "Not found" }, { status: 404 })
  saveArticles(filtered)
  return NextResponse.json({ ok: true })
}
