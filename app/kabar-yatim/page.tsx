import { getArticles } from "@/lib/data"
import { KabarYatimClient } from "@/app/kabar-yatim/client"

export const dynamic = "force-dynamic"

export default async function KabarYatimPage() {
  const all = await getArticles()
  const articles = all.filter((a) => a.published)
  return <KabarYatimClient articles={articles} />
}
