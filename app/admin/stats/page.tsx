"use client"

import { useState, useEffect } from "react"
import type { StatsData, StatItem } from "@/lib/data"
import { Save, RotateCcw } from "lucide-react"

export default function AdminStatsPage() {
  const [data, setData] = useState<StatsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    fetch("/api/admin/stats").then((r) => r.json()).then((d) => { setData(d); setLoading(false) })
  }, [])

  function updateItem(i: number, field: keyof StatItem, value: string | number) {
    if (!data) return
    const items = [...data.items]
    items[i] = { ...items[i], [field]: field === "value" ? Number(value) : value }
    setData({ ...data, items })
  }

  async function handleSave() {
    if (!data) return
    setSaving(true)
    await fetch("/api/admin/stats", {
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
    <div className="max-w-2xl">
      <div className="mb-8">
        <h1 className="text-2xl font-black text-white">Statistik Beranda</h1>
        <p className="text-gray-400 text-sm mt-1">Angka-angka yang ditampilkan di bagian stats beranda</p>
      </div>

      <div className="space-y-4 mb-8">
        {data?.items.map((item, i) => (
          <div key={i} className="bg-gray-800 border border-gray-700 p-5">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-bold text-green-400 bg-green-600/15 px-2 py-0.5">Stat {i + 1}</span>
              <span className="text-gray-300 font-semibold text-sm">{item.label}</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-gray-500 mb-1.5">Angka (value)</label>
                <input
                  type="number"
                  value={item.value}
                  onChange={(e) => updateItem(i, "value", e.target.value)}
                  className="w-full bg-gray-900 border border-gray-600 text-white px-3 py-2 text-sm focus:outline-none focus:border-green-600"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1.5">Suffix (kosongkan jika tidak ada)</label>
                <input
                  type="text"
                  value={item.suffix}
                  onChange={(e) => updateItem(i, "suffix", e.target.value)}
                  className="w-full bg-gray-900 border border-gray-600 text-white px-3 py-2 text-sm focus:outline-none focus:border-green-600"
                  placeholder='Contoh: +, Thn, %'
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1.5">Label</label>
                <input
                  type="text"
                  value={item.label}
                  onChange={(e) => updateItem(i, "label", e.target.value)}
                  className="w-full bg-gray-900 border border-gray-600 text-white px-3 py-2 text-sm focus:outline-none focus:border-green-600"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1.5">Deskripsi singkat</label>
                <input
                  type="text"
                  value={item.desc}
                  onChange={(e) => updateItem(i, "desc", e.target.value)}
                  className="w-full bg-gray-900 border border-gray-600 text-white px-3 py-2 text-sm focus:outline-none focus:border-green-600"
                />
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-700">
              <p className="text-gray-500 text-xs">Preview: <span className="text-white font-bold">{item.value}{item.suffix}</span> · {item.label} · <span className="text-gray-400">{item.desc}</span></p>
            </div>
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
