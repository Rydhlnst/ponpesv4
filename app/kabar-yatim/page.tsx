import { getArticles } from "@/lib/data"
import { KabarYatimClient } from "@/app/kabar-yatim/client"

export const dynamic = "force-dynamic"

export default function KabarYatimPage() {
  const articles = getArticles().filter((a) => a.published)
  return <KabarYatimClient articles={articles} />
}
