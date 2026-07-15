"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import type { Article } from "@/lib/data"
import { Save, ArrowLeft, Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import { ImageUpload } from "@/components/admin/image-upload"

const CATEGORIES = ["Prestasi", "Kegiatan", "Kisah Nyata", "Laporan", "Pengumuman", "Program"]

interface Props {
  article?: Article
  mode: "create" | "edit"
}

export function ArticleForm({ article, mode }: Props) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [saved, setSaved] = useState(false)

  const [form, setForm] = useState<Omit<Article, "id">>({
    title: article?.title ?? "",
    excerpt: article?.excerpt ?? "",
    date: article?.date ?? new Date().toLocaleDateString("id-ID", { month: "long", year: "numeric" }),
    category: article?.category ?? "Kegiatan",
    image: article?.image ?? "/images/gallery/gallery-01.jpg",
    featured: article?.featured ?? false,
    published: article?.published ?? false,
  })

  function set<K extends keyof typeof form>(key: K, value: typeof form[K]) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    if (mode === "create") {
      await fetch("/api/admin/articles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      router.push("/admin/berita")
      router.refresh()
    } else {
      await fetch(`/api/admin/articles/${article!.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      setSaved(true)
      setTimeout(() => setSaved(false), 2000)
      router.refresh()
    }

    setLoading(false)
  }

  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/berita" className="text-gray-500 hover:text-white transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-2xl font-black text-white">
            {mode === "create" ? "Artikel Baru" : "Edit Artikel"}
          </h1>
          <p className="text-gray-400 text-sm mt-0.5">Berita & Kegiatan Pesantren</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Title */}
        <div>
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
            Judul Artikel
          </label>
          <input
            type="text"
            value={form.title}
            onChange={(e) => set("title", e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-green-600 transition-colors text-sm"
            placeholder="Judul berita atau kegiatan"
            required
          />
        </div>

        {/* Excerpt */}
        <div>
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
            Ringkasan / Excerpt
          </label>
          <textarea
            value={form.excerpt}
            onChange={(e) => set("excerpt", e.target.value)}
            rows={4}
            className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-green-600 transition-colors text-sm resize-none"
            placeholder="Deskripsi singkat artikel (tampil di halaman berita)..."
            required
          />
        </div>

        {/* Row: Category + Date */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
              Kategori
            </label>
            <select
              value={form.category}
              onChange={(e) => set("category", e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-green-600 transition-colors text-sm"
            >
              {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
              Tanggal
            </label>
            <input
              type="text"
              value={form.date}
              onChange={(e) => set("date", e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-green-600 transition-colors text-sm"
              placeholder="Contoh: Maret 2026"
            />
          </div>
        </div>

        {/* Image upload */}
        <ImageUpload
          value={form.image}
          onChange={(url) => set("image", url)}
          folder="berita"
          label="Gambar Artikel"
          aspectRatio="video"
        />

        {/* Toggles */}
        <div className="flex gap-6 pt-2">
          <label className="flex items-center gap-3 cursor-pointer group">
            <div
              onClick={() => set("published", !form.published)}
              className={`w-10 h-5 rounded-full relative transition-colors ${form.published ? "bg-green-600" : "bg-gray-700"}`}
            >
              <div className={`w-4 h-4 bg-white rounded-full absolute top-0.5 transition-transform ${form.published ? "translate-x-5" : "translate-x-0.5"}`} />
            </div>
            <span className="text-sm text-gray-300">
              {form.published ? <><Eye className="w-3.5 h-3.5 inline mr-1 text-green-400" />Published</> : <><EyeOff className="w-3.5 h-3.5 inline mr-1 text-gray-500" />Draft</>}
            </span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <div
              onClick={() => set("featured", !form.featured)}
              className={`w-10 h-5 rounded-full relative transition-colors ${form.featured ? "bg-amber-500" : "bg-gray-700"}`}
            >
              <div className={`w-4 h-4 bg-white rounded-full absolute top-0.5 transition-transform ${form.featured ? "translate-x-5" : "translate-x-0.5"}`} />
            </div>
            <span className="text-sm text-gray-300">Featured (tampil besar)</span>
          </label>
        </div>

        {/* Submit */}
        <div className="pt-2 flex gap-3">
          <button
            type="submit"
            disabled={loading}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 disabled:bg-green-900 text-white font-semibold text-sm px-6 py-2.5 transition-colors"
          >
            <Save className="w-4 h-4" />
            {loading ? "Menyimpan..." : saved ? "Tersimpan ✓" : mode === "create" ? "Buat Artikel" : "Simpan Perubahan"}
          </button>
          <Link href="/admin/berita" className="text-sm text-gray-400 hover:text-white border border-gray-700 hover:border-gray-500 px-6 py-2.5 transition-colors">
            Batal
          </Link>
        </div>
      </form>
    </div>
  )
}
