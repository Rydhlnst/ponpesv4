import { getArticleById } from "@/lib/data"
import { notFound } from "next/navigation"
import { ArticleForm } from "../article-form"

export default async function EditArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const numId = parseInt(id, 10)
  if (isNaN(numId)) notFound()
  const article = await getArticleById(numId)
  if (!article) notFound()
  return <ArticleForm article={article} mode="edit" />
}
