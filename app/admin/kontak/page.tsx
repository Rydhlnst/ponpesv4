"use client"

import { useState, useEffect } from "react"
import type { KontakData, BankInfo } from "@/lib/data"
import { Save, Plus, Trash2 } from "lucide-react"

export default function AdminKontakPage() {
  const [data, setData] = useState<KontakData | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    fetch("/api/admin/kontak").then((r) => r.json()).then((d) => { setData(d); setLoading(false) })
  }, [])

  function set<K extends keyof KontakData>(key: K, value: KontakData[K]) {
    if (!data) return
    setData({ ...data, [key]: value })
  }

  function updateBank(i: number, field: keyof BankInfo, value: string) {
    if (!data) return
    const banks = [...data.banks]
    banks[i] = { ...banks[i], [field]: value }
    setData({ ...data, banks })
  }

  function addBank() {
    if (!data) return
    setData({
      ...data,
      banks: [...data.banks, { id: Date.now().toString(), bank: "", noRek: "", atasNama: "" }],
    })
  }

  function removeBank(i: number) {
    if (!data) return
    setData({ ...data, banks: data.banks.filter((_, idx) => idx !== i) })
  }

  async function handleSave() {
    if (!data) return
    setSaving(true)
    await fetch("/api/admin/kontak", {
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
        <h1 className="text-2xl font-black text-white">Info Kontak</h1>
        <p className="text-gray-400 text-sm mt-1">Nomor WhatsApp, email, alamat, dan rekening bank</p>
      </div>

      <div className="space-y-6">
        {/* Kontak dasar */}
        <div className="bg-gray-800 border border-gray-700 p-5 space-y-4">
          <p className="text-white font-bold text-sm border-b border-gray-700 pb-3">Informasi Dasar</p>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-gray-500 mb-1.5">Nomor WhatsApp (tanpa +)</label>
              <input
                type="text"
                value={data?.phone ?? ""}
                onChange={(e) => set("phone", e.target.value)}
                className="w-full bg-gray-900 border border-gray-600 text-white px-3 py-2 text-sm font-mono focus:outline-none focus:border-green-600"
                placeholder="628229..."
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1.5">Tampilan nomor telefon</label>
              <input
                type="text"
                value={data?.phoneDisplay ?? ""}
                onChange={(e) => set("phoneDisplay", e.target.value)}
                className="w-full bg-gray-900 border border-gray-600 text-white px-3 py-2 text-sm focus:outline-none focus:border-green-600"
                placeholder="+62 822-9782-9892"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs text-gray-500 mb-1.5">Alamat Email</label>
            <input
              type="email"
              value={data?.email ?? ""}
              onChange={(e) => set("email", e.target.value)}
              className="w-full bg-gray-900 border border-gray-600 text-white px-3 py-2 text-sm focus:outline-none focus:border-green-600"
            />
          </div>

          <div>
            <label className="block text-xs text-gray-500 mb-1.5">Alamat Lengkap</label>
            <textarea
              value={data?.address ?? ""}
              onChange={(e) => set("address", e.target.value)}
              rows={3}
              className="w-full bg-gray-900 border border-gray-600 text-white px-3 py-2 text-sm focus:outline-none focus:border-green-600 resize-none"
            />
          </div>
        </div>

        {/* Bank accounts */}
        <div className="bg-gray-800 border border-gray-700 p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-gray-700 pb-3">
            <p className="text-white font-bold text-sm">Rekening Bank</p>
            <button
              onClick={addBank}
              className="flex items-center gap-1 text-xs text-green-400 hover:text-green-300 border border-green-800 hover:border-green-600 px-3 py-1.5 transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
              Tambah Rekening
            </button>
          </div>

          {data?.banks.length === 0 && (
            <p className="text-gray-500 text-sm text-center py-4">Belum ada rekening. Tambahkan rekening bank.</p>
          )}

          {data?.banks.map((bank, i) => (
            <div key={bank.id} className="border border-gray-700 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-gray-500">Rekening {i + 1}</span>
                <button onClick={() => removeBank(i)} className="text-gray-600 hover:text-red-400 transition-colors">
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1.5">Nama Bank</label>
                <input
                  type="text"
                  value={bank.bank}
                  onChange={(e) => updateBank(i, "bank", e.target.value)}
                  className="w-full bg-gray-900 border border-gray-600 text-white px-3 py-2 text-sm focus:outline-none focus:border-green-600"
                  placeholder="Bank Syariah Indonesia (BSI)"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-gray-500 mb-1.5">Nomor Rekening</label>
                  <input
                    type="text"
                    value={bank.noRek}
                    onChange={(e) => updateBank(i, "noRek", e.target.value)}
                    className="w-full bg-gray-900 border border-gray-600 text-white px-3 py-2 text-sm font-mono focus:outline-none focus:border-green-600"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1.5">Atas Nama</label>
                  <input
                    type="text"
                    value={bank.atasNama}
                    onChange={(e) => updateBank(i, "atasNama", e.target.value)}
                    className="w-full bg-gray-900 border border-gray-600 text-white px-3 py-2 text-sm focus:outline-none focus:border-green-600"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 disabled:bg-green-900 text-white font-semibold text-sm px-6 py-2.5 transition-colors"
        >
          <Save className="w-4 h-4" />
          {saving ? "Menyimpan..." : saved ? "Tersimpan ✓" : "Simpan Perubahan"}
        </button>
      </div>
    </div>
  )
}
