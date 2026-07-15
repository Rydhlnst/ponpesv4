"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { ProgramSidebar } from "@/components/program-sidebar"
import { motion } from "framer-motion"
import { Heart, Users, BookOpen, Utensils, Shirt, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const covers = [
  { icon: Utensils, label: "Makan & minum 3x sehari" },
  { icon: BookOpen, label: "Biaya pendidikan formal" },
  { icon: Shirt, label: "Pakaian & kebutuhan harian" },
  { icon: Shield, label: "Kesehatan & obat-obatan" },
  { icon: Heart, label: "Pembinaan akhlak & Qur'an" },
  { icon: Users, label: "Kegiatan sosial & islami" },
]

export default function KafilYatimPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Kafil Yatim"
          subtitle="Jadilah orang tua asuh bagi santri yatim Darussalam Bacan. Rp 800.000 per bulan sudah cukup untuk mengubah satu masa depan."
          crumbs={[{ label: "Program" }, { label: "Program Sosial & Yatim" }]}
          accent="Program Sosial"
        />

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main */}
              <div className="lg:col-span-2 space-y-10">
                {/* Hadits */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border-l-4 border-primary bg-gray-50 px-6 py-5"
                >
                  <p className="text-2xl text-gray-800 font-bold leading-relaxed text-right mb-3" style={{ direction: "rtl", fontFamily: "serif" }}>
                    أَنَا وَكَافِلُ الْيَتِيمِ فِي الْجَنَّةِ كَهَاتَيْنِ
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    "Aku dan pengasuh anak yatim akan berada di surga seperti ini" — (HR. Bukhari)
                  </p>
                </motion.div>

                {/* Description */}
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>
                  <h2 className="text-2xl font-black text-gray-900 mb-4">Apa itu Kafil Yatim?</h2>
                  <div className="space-y-3 text-gray-600 leading-relaxed text-sm">
                    <p>
                      Kafil Yatim adalah program di mana Anda secara langsung mensponsori seorang santri yatim di
                      Pondok Pesantren Darussalam Bacan, Pulau Bacan, Halmahera Selatan. Dengan menjadi kafil,
                      Anda menanggung kebutuhan hidup dan pendidikan seorang anak yang tidak memiliki orang tua.
                    </p>
                    <p>
                      Saat ini terdapat <strong className="text-gray-900">26 santri yatim</strong> yang belajar dan tinggal
                      di pesantren secara gratis berkat kebaikan hati para kafil. Mereka menjalani hari-hari penuh
                      semangat — menghafal Al-Qur'an, belajar akademik, dan tumbuh menjadi generasi berakhlak mulia.
                    </p>
                    <p>
                      Rasulullah ﷺ menjanjikan kedudukan yang sangat mulia bagi para kafil yatim — bersama beliau
                      di surga. Ini adalah investasi akhirat yang paling menguntungkan.
                    </p>
                  </div>
                </motion.div>

                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 }}
                  className="relative h-64 overflow-hidden"
                >
                  <Image src="/images/gallery/gallery-03.jpg" alt="Santri Darussalam Bacan" fill className="object-cover" />
                </motion.div>

                {/* What it covers */}
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }}>
                  <h2 className="text-2xl font-black text-gray-900 mb-6">Apa yang Ditanggung?</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {covers.map((c, i) => (
                      <div key={i} className="flex items-center gap-3 border border-gray-100 p-4 bg-gray-50">
                        <div className="w-8 h-8 bg-primary flex items-center justify-center flex-none">
                          <c.icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm text-gray-700 font-medium leading-tight">{c.label}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* How to */}
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                  <h2 className="text-2xl font-black text-gray-900 mb-6">Cara Menjadi Kafil Yatim</h2>
                  <div className="space-y-4">
                    {[
                      { n: "01", t: "Transfer Donasi", d: "Transfer Rp 800.000 ke rekening Yayasan Darussalam Bacan melalui Bank Muamalat atau BSI." },
                      { n: "02", t: "Konfirmasi via WhatsApp", d: "Kirim bukti transfer ke WhatsApp 0822 9782 9892 dengan menyebut nama dan program Kafil Yatim." },
                      { n: "03", t: "Terima Laporan", d: "Kami akan mengirimkan laporan perkembangan santri asuh Anda secara berkala." },
                    ].map((s) => (
                      <div key={s.n} className="flex gap-5 p-5 border border-gray-100">
                        <span className="text-4xl font-black text-gray-100 leading-none select-none w-12 flex-none">{s.n}</span>
                        <div>
                          <h3 className="font-bold text-gray-900 mb-1">{s.t}</h3>
                          <p className="text-sm text-gray-500 leading-relaxed">{s.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <ProgramSidebar
                    amount="Rp 800.000"
                    amountNote="per bulan / per anak yatim. Bisa untuk 1 atau lebih anak sekaligus."
                    waMessage="Assalamualaikum, saya ingin menjadi Kafil Yatim di Pesantren Darussalam Bacan. Mohon informasinya."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related programs */}
        <section className="py-12 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">Program Lainnya</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: "Wakaf Masjid", href: "/program/wakaf-masjid", desc: "Rp 75.000/sak semen" },
                { label: "Wakaf Produktif", href: "/program/wakaf-produktif", desc: "Sapi & Kambing" },
                { label: "Infaq Beras", href: "/program/infaq-beras", desc: "10–25 Kg/bulan" },
                { label: "Pengembangan Usaha", href: "/program/pengembangan-usaha", desc: "Air Kemasan" },
              ].map((p) => (
                <Link key={p.href} href={p.href} className="group border border-gray-200 hover:border-primary p-4 bg-white transition-colors">
                  <p className="font-semibold text-gray-900 group-hover:text-primary text-sm transition-colors">{p.label}</p>
                  <p className="text-xs text-gray-400 mt-1">{p.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
