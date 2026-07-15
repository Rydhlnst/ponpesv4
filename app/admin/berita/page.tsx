import Link from "next/link"
import { getArticles } from "@/lib/data"
import { Plus, CheckCircle2, Clock, Star } from "lucide-react"
import { DeleteArticleButton } from "./delete-button"

export default function AdminBeritaPage() {
  const articles = getArticles()

  return (
    <div className="max-w-4xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-black text-white">Berita & Kegiatan</h1>
          <p className="text-gray-400 text-sm mt-1">{articles.length} artikel total</p>
        </div>
        <Link
          href="/admin/berita/baru"
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2.5 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Artikel Baru
        </Link>
      </div>

      <div className="bg-gray-800 border border-gray-700 divide-y divide-gray-700">
        {articles.length === 0 && (
          <div className="px-6 py-12 text-center text-gray-500 text-sm">
            Belum ada artikel. Buat artikel pertama.
          </div>
        )}
        {articles.map((a) => (
          <div key={a.id} className="flex items-start gap-4 px-5 py-4">
            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <span className={`text-xs font-bold px-1.5 py-0.5 ${
                  a.published ? "bg-green-600/20 text-green-400" : "bg-gray-700 text-gray-400"
                }`}>
                  {a.published ? "Published" : "Draft"}
                </span>
                {a.featured && (
                  <span className="text-xs font-bold px-1.5 py-0.5 bg-amber-600/20 text-amber-400 flex items-center gap-1">
                    <Star className="w-2.5 h-2.5" />Featured
                  </span>
                )}
                <span className="text-xs text-gray-500">{a.category}</span>
                <span className="text-xs text-gray-600">{a.date}</span>
              </div>
              <p className="text-white text-sm font-medium">{a.title}</p>
              <p className="text-gray-500 text-xs mt-1 line-clamp-1">{a.excerpt}</p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 flex-none">
              <Link
                href={`/admin/berita/${a.id}`}
                className="text-xs text-gray-400 hover:text-white border border-gray-600 hover:border-gray-400 px-3 py-1.5 transition-colors"
              >
                Edit
              </Link>
              <DeleteArticleButton id={a.id} title={a.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
