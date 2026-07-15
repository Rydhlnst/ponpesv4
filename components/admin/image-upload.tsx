"use client"

import { useState, useRef, useCallback } from "react"
import Image from "next/image"
import { Upload, X, ImageIcon, Loader2, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface ImageUploadProps {
  value: string
  onChange: (url: string) => void
  folder?: string
  label?: string
  aspectRatio?: "square" | "video" | "banner"
}

export function ImageUpload({
  value,
  onChange,
  folder = "uploads",
  label = "Gambar",
  aspectRatio = "video",
}: ImageUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [dragging, setDragging] = useState(false)

  const heightClass = {
    square: "h-48",
    video: "h-44",
    banner: "h-36",
  }[aspectRatio]

  async function uploadFile(file: File) {
    setLoading(true)
    setError(null)

    const form = new FormData()
    form.append("file", file)
    form.append("folder", folder)

    const res = await fetch("/api/admin/upload", { method: "POST", body: form })
    const data = await res.json()

    setLoading(false)

    if (!res.ok) {
      setError(data.error ?? "Upload gagal.")
      return
    }

    onChange(data.url)
  }

  function handleFile(file: File | undefined) {
    if (!file) return
    uploadFile(file)
  }

  const onDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      setDragging(false)
      handleFile(e.dataTransfer.files[0])
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [folder]
  )

  const hasImage = Boolean(value)

  return (
    <div className="space-y-2">
      <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide">
        {label}
      </label>

      {/* Drop zone / preview */}
      <div
        className={cn(
          "relative border-2 border-dashed transition-colors overflow-hidden",
          heightClass,
          dragging ? "border-green-500 bg-green-950/20" : "border-gray-600 hover:border-gray-500",
          loading && "pointer-events-none opacity-60"
        )}
        onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
        onDragLeave={() => setDragging(false)}
        onDrop={onDrop}
        onClick={() => !loading && inputRef.current?.click()}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && inputRef.current?.click()}
      >
        {hasImage ? (
          <>
            <Image
              src={value}
              alt="Preview"
              fill
              className="object-cover"
              unoptimized={!value.startsWith("/")}
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
              <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur px-3 py-1.5 text-white text-xs font-semibold">
                <Upload className="w-3.5 h-3.5" />
                Ganti Gambar
              </div>
            </div>
          </>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-gray-500">
            {loading ? (
              <Loader2 className="w-6 h-6 animate-spin text-green-500" />
            ) : (
              <>
                <ImageIcon className="w-7 h-7" />
                <p className="text-xs text-center px-4">
                  Klik atau seret gambar ke sini
                  <br />
                  <span className="text-gray-600">JPEG, PNG, WebP · maks 5MB</span>
                </p>
              </>
            )}
          </div>
        )}

        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <Loader2 className="w-6 h-6 animate-spin text-green-400" />
          </div>
        )}
      </div>

      {/* Error */}
      {error && (
        <div className="flex items-center gap-2 text-red-400 text-xs border border-red-900 bg-red-950/30 px-3 py-2">
          <AlertCircle className="w-3.5 h-3.5 flex-none" />
          {error}
        </div>
      )}

      {/* URL manual fallback */}
      <div className="flex gap-2 items-center">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="/images/gallery/gallery-01.jpg atau URL R2"
          className="flex-1 bg-gray-900 border border-gray-700 text-white px-3 py-1.5 text-xs font-mono focus:outline-none focus:border-green-600 transition-colors placeholder-gray-600"
        />
        {value && (
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onChange("") }}
            className="text-gray-500 hover:text-red-400 transition-colors p-1"
            title="Hapus gambar"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
      <p className="text-xs text-gray-600">
        Upload lewat tombol di atas, atau ketik path/URL manual di bawah.
      </p>

      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif"
        className="hidden"
        onChange={(e) => handleFile(e.target.files?.[0])}
      />
    </div>
  )
}
