import { NextRequest, NextResponse } from "next/server"
import { getArticles, saveArticles, Article } from "@/lib/data"

export async function GET() {
  return NextResponse.json(getArticles())
}

export async function POST(req: NextRequest) {
  const body = await req.json() as Omit<Article, "id">
  const articles = getArticles()
  const newArticle: Article = {
    ...body,
    id: Date.now().toString(),
  }
  saveArticles([newArticle, ...articles])
  return NextResponse.json(newArticle, { status: 201 })
}
