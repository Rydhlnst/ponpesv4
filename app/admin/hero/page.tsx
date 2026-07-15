"use client"

import { useState, useEffect } from "react"
import type { HeroData, HeroSlide } from "@/lib/data"
import { Save, ChevronDown, ChevronUp } from "lucide-react"
import { ImageUpload } from "@/components/admin/image-upload"

const ICONS = ["Moon", "BookOpen", "Users", "Heart", "Star", "Award"]

export default function AdminHeroPage() {
  const [data, setData] = useState<HeroData | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [openIdx, setOpenIdx] = useState<number>(0)

  useEffect(() => {
    fetch("/api/admin/hero").then((r) => r.json()).then((d) => { setData(d); setLoading(false) })
  }, [])

  function updateSlide(i: number, field: keyof HeroSlide, value: string) {
    if (!data) return
    const slides = [...data.slides]
    slides[i] = { ...slides[i], [field]: value }
    setData({ ...data, slides })
  }

  async function handleSave() {
    if (!data) return
    setSaving(true)
    await fetch("/api/admin/hero", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    setSaving(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  if (loading) return <div className="text-gray-400 text-sm">Memuat...</div>

  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <h1 className="text-2xl font-black text-white">Hero / Beranda</h1>
        <p className="text-gray-400 text-sm mt-1">Teks dan gambar pada slider utama beranda</p>
      </div>

      <div className="space-y-3 mb-8">
        {data?.slides.map((slide, i) => (
          <div key={slide.id} className="bg-gray-800 border border-gray-700">
            <button
              className="w-full flex items-center justify-between px-5 py-4 text-left"
              onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-gray-500 w-5">0{i + 1}</span>
                <span className="text-white font-semibold text-sm">{slide.title.split("\n")[0]}…</span>
              </div>
              {openIdx === i ? <ChevronUp className="w-4 h-4 text-gray-500" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
            </button>

            {openIdx === i && (
              <div className="px-5 pb-5 space-y-4 border-t border-gray-700 pt-4">
                <div>
                  <label className="block text-xs text-gray-500 mb-1.5">Label kategori (baris kecil di atas judul)</label>
                  <input
                    type="text"
                    value={slide.category}
                    onChange={(e) => updateSlide(i, "category", e.target.value)}
                    className="w-full bg-gray-900 border border-gray-600 text-white px-3 py-2 text-sm focus:outline-none focus:border-green-600"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-500 mb-1.5">
                    Judul (gunakan \n untuk baris baru)
                  </label>
                  <textarea
                    value={slide.title}
                    onChange={(e) => updateSlide(i, "title", e.target.value)}
                    rows={3}
                    className="w-full bg-gray-900 border border-gray-600 text-white px-3 py-2 text-sm focus:outline-none focus:border-green-600 font-mono resize-none"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-500 mb-1.5">Subtitle / Deskripsi</label>
                  <textarea
                    value={slide.subtitle}
                    onChange={(e) => updateSlide(i, "subtitle", e.target.value)}
                    rows={3}
                    className="w-full bg-gray-900 border border-gray-600 text-white px-3 py-2 text-sm focus:outline-none focus:border-green-600 resize-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-gray-500 mb-1.5">Teks tombol CTA</label>
                    <input
                      type="text"
                      value={slide.cta}
                      onChange={(e) => updateSlide(i, "cta", e.target.value)}
                      className="w-full bg-gray-900 border border-gray-600 text-white px-3 py-2 text-sm focus:outline-none focus:border-green-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1.5">Link tombol CTA</label>
                    <input
                      type="text"
                      value={slide.ctaHref}
                      onChange={(e) => updateSlide(i, "ctaHref", e.target.value)}
                      className="w-full bg-gray-900 border border-gray-600 text-white px-3 py-2 text-sm font-mono focus:outline-none focus:border-green-600"
                    />
                  </div>
                </div>

                <ImageUpload
                  value={slide.imageSrc}
                  onChange={(url) => updateSlide(i, "imageSrc", url)}
                  folder="hero"
                  label="Gambar Latar Slide"
                  aspectRatio="banner"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={handleSave}
        disabled={saving}
        className="flex items-center gap-2 bg-green-600 hover:bg-green-700 disabled:bg-green-900 text-white font-semibold text-sm px-6 py-2.5 transition-colors"
      >
        <Save className="w-4 h-4" />
        {saving ? "Menyimpan..." : saved ? "Tersimpan ✓" : "Simpan Perubahan"}
      </button>
    </div>
  )
}
