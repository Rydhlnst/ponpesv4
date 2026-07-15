"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Trash2 } from "lucide-react"

export function DeleteArticleButton({ id, title }: { id: string; title: string }) {
  const router = useRouter()
  const [confirm, setConfirm] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleDelete() {
    setLoading(true)
    await fetch(`/api/admin/articles/${id}`, { method: "DELETE" })
    setLoading(false)
    setConfirm(false)
    router.refresh()
  }

  if (confirm) {
    return (
      <div className="flex items-center gap-1">
        <button
          onClick={handleDelete}
          disabled={loading}
          className="text-xs text-red-400 border border-red-800 px-3 py-1.5 hover:bg-red-950 transition-colors disabled:opacity-50"
        >
          {loading ? "..." : "Hapus"}
        </button>
        <button
          onClick={() => setConfirm(false)}
          className="text-xs text-gray-400 border border-gray-700 px-3 py-1.5 hover:border-gray-500 transition-colors"
        >
          Batal
        </button>
      </div>
    )
  }

  return (
    <button
      onClick={() => setConfirm(true)}
      title={`Hapus "${title}"`}
      className="text-gray-600 hover:text-red-400 transition-colors p-1.5"
    >
      <Trash2 className="w-4 h-4" />
    </button>
  )
}
