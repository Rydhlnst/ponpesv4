"use client"

import { Heart, MessageCircle, Copy, CheckCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface Bank {
  name: string
  account: string
}

interface ProgramSidebarProps {
  amount?: string
  amountNote?: string
  banks?: Bank[]
  whatsapp?: string
  waMessage?: string
}

export function ProgramSidebar({
  amount,
  amountNote,
  banks = [
    { name: "Bank Muamalat", account: "8420009674" },
    { name: "Bank BSI", account: "7083059537" },
  ],
  whatsapp = "6282297829892",
  waMessage = "Assalamualaikum, saya ingin berdonasi untuk program Darussalam Bacan.",
}: ProgramSidebarProps) {
  const [copied, setCopied] = useState<string | null>(null)

  const copy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(text)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="space-y-4">
      {/* Amount */}
      {amount && (
        <div className="border-l-4 border-primary bg-white p-5 shadow-sm">
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Nominal Donasi</p>
          <p className="text-2xl font-black text-primary leading-tight">{amount}</p>
          {amountNote && <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">{amountNote}</p>}
        </div>
      )}

      {/* CTA */}
      <Button
        asChild
        size="lg"
        className="w-full bg-primary hover:bg-primary/90 rounded-none h-12 font-bold text-sm"
      >
        <a
          href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(waMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Heart className="w-4 h-4 fill-white" />
          Donasi Sekarang
        </a>
      </Button>

      {/* Banks */}
      <div className="border border-gray-100 bg-white">
        <div className="px-5 py-3 border-b border-gray-100 bg-gray-50">
          <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Rekening Donasi</p>
          <p className="text-xs text-gray-400 mt-0.5">a.n. Yayasan Darussalam Bacan</p>
        </div>
        <div className="divide-y divide-gray-50">
          {banks.map((b) => (
            <div key={b.account} className="px-5 py-3.5 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold text-gray-700">{b.name}</p>
                <p className="font-mono text-sm font-bold text-gray-900 mt-0.5">{b.account}</p>
              </div>
              <button
                onClick={() => copy(b.account)}
                className="p-1.5 text-gray-400 hover:text-primary transition-colors flex-none"
                title="Salin nomor rekening"
              >
                {copied === b.account ? (
                  <CheckCheck className="w-4 h-4 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* WhatsApp confirm */}
      <a
        href={`https://wa.me/${whatsapp}?text=${encodeURIComponent("Assalamualaikum, saya sudah transfer untuk program Darussalam Bacan. Mohon konfirmasinya.")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 border border-gray-200 hover:border-primary text-gray-600 hover:text-primary py-3 text-sm font-semibold transition-colors w-full"
      >
        <MessageCircle className="w-4 h-4" />
        Konfirmasi via WhatsApp
      </a>

      {/* Contact */}
      <p className="text-xs text-gray-400 text-center leading-relaxed">
        Ada pertanyaan? Hubungi kami di{" "}
        <a href={`https://wa.me/${whatsapp}`} className="text-primary font-semibold" target="_blank" rel="noopener noreferrer">
          0822 9782 9892
        </a>
      </p>
    </div>
  )
}
