import { getArticles } from "@/lib/data"
import { notFound } from "next/navigation"
import { ArticleForm } from "../article-form"

export default async function EditArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const articles = getArticles()
  const article = articles.find((a) => a.id === id)
  if (!article) notFound()
  return <ArticleForm article={article} mode="edit" />
}
