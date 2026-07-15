"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, MessageCircle, Copy, CheckCheck } from "lucide-react"

const banks = [
  { name: "Bank Muamalat", account: "8420009674", holder: "Yayasan Darussalam Bacan" },
  { name: "BSI (Bank Syariah Indonesia)", account: "7083059537", holder: "Yayasan Darussalam Bacan" },
]

const kontak = [
  {
    icon: MapPin,
    label: "Alamat",
    value: "Jl. Pesantren No. 05, RT 03, Desa Kupal, Kec. Bacan Selatan, Kab. Halmahera Selatan, Maluku Utara",
    action: null,
  },
  {
    icon: Phone,
    label: "Telepon / WhatsApp",
    value: "0822 9782 9892",
    action: { label: "Hubungi via WA", href: "https://wa.me/6282297829892?text=Assalamualaikum%2C+saya+ingin+menghubungi+Pesantren+Darussalam+Bacan." },
  },
  {
    icon: Mail,
    label: "Email",
    value: "ponpesantren.darussalam@bacan.com",
    action: { label: "Kirim Email", href: "mailto:ponpesantren.darussalam@bacan.com" },
  },
]

function BankCard({ bank }: { bank: typeof banks[0] }) {
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard.writeText(bank.account)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <div className="border border-gray-100 p-5 bg-gray-50">
      <p className="font-bold text-gray-900 text-sm">{bank.name}</p>
      <p className="text-xs text-gray-500 mt-0.5">{bank.holder}</p>
      <div className="flex items-center gap-3 mt-3">
        <span className="font-mono text-lg font-bold text-gray-900 tracking-wider">{bank.account}</span>
        <button
          onClick={copy}
          className="w-7 h-7 flex items-center justify-center border border-gray-200 hover:border-primary hover:text-primary text-gray-400 transition-colors"
          title="Salin nomor rekening"
        >
          {copied ? <CheckCheck className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>
    </div>
  )
}

export default function KontakPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" })
  const [sent, setSent] = useState(false)

  const handleWA = () => {
    const text = encodeURIComponent(
      `Assalamualaikum, saya ${formData.name || "[nama]"}.\n\nSubjek: ${formData.subject || "[subjek]"}\n\n${formData.message || "[pesan]"}`
    )
    window.open(`https://wa.me/6282297829892?text=${text}`, "_blank")
  }

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Hubungi Kami"
          subtitle="Ada pertanyaan tentang program donasi, pendaftaran santri, atau ingin bersilaturahmi? Kami siap merespons dengan cepat."
          crumbs={[{ label: "Kontak" }]}
          accent="Kontak"
        />

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

              {/* Info Kontak */}
              <div className="space-y-10">
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-6 h-0.5 bg-primary" />
                    <span className="text-primary text-xs font-semibold uppercase tracking-widest">Informasi Kontak</span>
                  </div>
                  <div className="space-y-4">
                    {kontak.map((k, i) => (
                      <div key={i} className="flex gap-4 border border-gray-100 p-5 bg-gray-50">
                        <div className="w-9 h-9 bg-primary flex items-center justify-center flex-none">
                          <k.icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">{k.label}</p>
                          <p className="text-gray-900 text-sm font-medium leading-relaxed">{k.value}</p>
                          {k.action && (
                            <a
                              href={k.action.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary text-xs font-semibold mt-2 inline-block hover:underline"
                            >
                              {k.action.label} →
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                  <h2 className="text-lg font-black text-gray-900 mb-4">Rekening Donasi</h2>
                  <div className="space-y-3">
                    {banks.map((bank) => (
                      <BankCard key={bank.account} bank={bank} />
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 mt-3">
                    Setelah transfer, konfirmasi via WhatsApp dengan menyertakan nama dan tujuan donasi.
                  </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
                  <div className="border border-primary/20 bg-primary/5 p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <MessageCircle className="w-4 h-4 text-primary" />
                      <p className="font-bold text-gray-900 text-sm">Jam Operasional</p>
                    </div>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Senin – Jumat</span>
                        <span className="font-semibold">08.00 – 17.00 WIT</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sabtu</span>
                        <span className="font-semibold">08.00 – 14.00 WIT</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Minggu / Libur</span>
                        <span className="font-semibold text-gray-400">Tutup</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400 mt-3">
                      * WhatsApp dapat direspon di luar jam operasional namun mungkin memerlukan waktu lebih lama.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Form */}
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }}>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-6 h-0.5 bg-primary" />
                  <span className="text-primary text-xs font-semibold uppercase tracking-widest">Kirim Pesan</span>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">Nama Lengkap *</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={e => setFormData(f => ({ ...f, name: e.target.value }))}
                        placeholder="Masukkan nama Anda"
                        className="w-full border border-gray-200 focus:border-primary outline-none px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">No. WhatsApp</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={e => setFormData(f => ({ ...f, phone: e.target.value }))}
                        placeholder="08xx xxxx xxxx"
                        className="w-full border border-gray-200 focus:border-primary outline-none px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={e => setFormData(f => ({ ...f, email: e.target.value }))}
                      placeholder="email@domain.com"
                      className="w-full border border-gray-200 focus:border-primary outline-none px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Subjek *</label>
                    <select
                      value={formData.subject}
                      onChange={e => setFormData(f => ({ ...f, subject: e.target.value }))}
                      className="w-full border border-gray-200 focus:border-primary outline-none px-4 py-2.5 text-sm text-gray-900 transition-colors bg-white"
                    >
                      <option value="">Pilih subjek pesan</option>
                      <option value="Donasi / Kafil Yatim">Donasi / Kafil Yatim</option>
                      <option value="Pendaftaran Santri">Pendaftaran Santri</option>
                      <option value="Kerjasama / Kemitraan">Kerjasama / Kemitraan</option>
                      <option value="Wakaf">Wakaf</option>
                      <option value="Lainnya">Lainnya</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Pesan *</label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={e => setFormData(f => ({ ...f, message: e.target.value }))}
                      placeholder="Tuliskan pesan Anda di sini..."
                      className="w-full border border-gray-200 focus:border-primary outline-none px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    onClick={handleWA}
                    className="w-full bg-primary text-white font-semibold text-sm py-3.5 hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Kirim via WhatsApp
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    Pesan akan dikirim langsung ke WhatsApp pesantren. Respons dalam 1–24 jam.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
