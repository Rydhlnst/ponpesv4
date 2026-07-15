"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Heart, Users, BookOpen, Home, CheckCircle2 } from "lucide-react"

const layanan = [
  { no: "01", label: "Tempat Tinggal & Asrama", desc: "Anak-anak yatim tinggal di asrama pesantren bersama santri lainnya dalam lingkungan yang aman dan Islami." },
  { no: "02", label: "Pendidikan Formal & Agama", desc: "Seluruh biaya sekolah MTs/MA, seragam, dan alat tulis ditanggung penuh oleh pesantren dan donatur." },
  { no: "03", label: "Makan & Kebutuhan Harian", desc: "Kebutuhan gizi dan makan 3 kali sehari dipenuhi secara penuh selama mukim di pesantren." },
  { no: "04", label: "Kesehatan & Pembinaan", desc: "Pemeriksaan kesehatan rutin dan pembinaan mental spiritual dilakukan secara berkala." },
  { no: "05", label: "Beasiswa & Orang Tua Asuh", desc: "Program orang tua asuh membuka kesempatan donatur untuk mensponsori satu anak yatim secara pribadi." },
]

const keunggulan = [
  { icon: Home, title: "Rumah Kedua", desc: "Anak yatim diperlakukan seperti santri lain — tinggal, belajar, dan tumbuh bersama." },
  { icon: BookOpen, title: "Pendidikan Penuh", desc: "Sekolah, tahfizh, dan kegiatan pesantren semua dibiayai tanpa sisa tanggungan." },
  { icon: Heart, title: "Santunan Bulanan", desc: "Dompet anak yatim diisi setiap bulan dari donasi para muhsinin yang peduli." },
  { icon: Users, title: "26 Anak Aktif", desc: "Saat ini 26 anak yatim dan dhuafa sedang dibina — angka yang terus berkembang." },
]

export default function LKSAPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="LKSA Panti Asuhan Darussalam"
          subtitle="Lembaga Kesejahteraan Sosial Anak — hadir sebagai rumah kedua bagi 26 anak yatim dan dhuafa yang dibina penuh tanpa biaya, dengan pendidikan, tempat tinggal, dan kasih sayang."
          crumbs={[{ label: "Program" }, { label: "LKSA Panti Asuhan" }]}
          accent="Program Sosial"
        />

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            {/* Stats banner */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-3 border border-gray-100 mb-14"
            >
              {[
                { value: "26", label: "Anak Yatim Aktif", sub: "Dibina penuh saat ini" },
                { value: "100%", label: "Biaya Ditanggung", sub: "Pendidikan & kehidupan" },
                { value: "Sejak 2018", label: "Program Berjalan", sub: "Tanpa jeda hingga hari ini" },
              ].map((s, i) => (
                <div key={i} className={`text-center py-6 ${i < 2 ? "border-r border-gray-100" : ""}`}>
                  <p className="text-3xl font-black text-primary">{s.value}</p>
                  <p className="text-sm font-semibold text-gray-900 mt-1">{s.label}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{s.sub}</p>
                </div>
              ))}
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-10">
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.06 }}>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-0.5 bg-primary" />
                    <span className="text-primary text-xs font-semibold uppercase tracking-widest">Tentang Program</span>
                  </div>
                  <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
                    <p>
                      LKSA (Lembaga Kesejahteraan Sosial Anak) Panti Asuhan Darussalam adalah program sosial
                      unggulan pesantren yang menampung dan membina anak-anak yatim, yatim piatu, dan anak
                      dari keluarga dhuafa yang tidak mampu membiayai pendidikan.
                    </p>
                    <p>
                      Anak-anak ini tidak sekadar mendapat bantuan materil, melainkan juga
                      <strong className="text-gray-900"> diasuh secara penuh</strong> — tinggal bersama santri lain,
                      belajar di madrasah, mengikuti program tahfizh, dan dibentuk karakternya di lingkungan
                      pesantren yang kondusif.
                    </p>
                    <p>
                      Dengan dukungan para donatur dan muhsinin, pesantren berkomitmen tidak mengeluarkan
                      satu pun anak yatim hanya karena alasan biaya.
                    </p>
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                  <h2 className="text-2xl font-black text-gray-900 mb-5">Layanan yang Diberikan</h2>
                  <div className="space-y-3">
                    {layanan.map((l) => (
                      <div key={l.no} className="flex gap-4 border border-gray-100 p-4 bg-gray-50">
                        <span className="text-primary font-black text-sm font-mono flex-none">{l.no}</span>
                        <div>
                          <p className="font-bold text-gray-900 text-sm mb-0.5">{l.label}</p>
                          <p className="text-xs text-gray-500 leading-relaxed">{l.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="relative h-64 overflow-hidden"
                >
                  <Image src="/images/gallery/gallery-08.jpg" alt="Anak Yatim LKSA Darussalam Bacan" fill className="object-cover" />
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.14 }}>
                  <h2 className="text-2xl font-black text-gray-900 mb-5">Komitmen Kami</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {keunggulan.map((k, i) => (
                      <div key={i} className="border border-gray-100 p-5 bg-gray-50">
                        <div className="w-8 h-8 bg-primary flex items-center justify-center mb-3">
                          <k.icon className="w-4 h-4 text-white" />
                        </div>
                        <p className="font-bold text-gray-900 text-sm mb-1">{k.title}</p>
                        <p className="text-xs text-gray-500 leading-relaxed">{k.desc}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }}>
                  <h2 className="text-2xl font-black text-gray-900 mb-4">Apa yang Kami Jaga</h2>
                  <div className="space-y-2">
                    {[
                      "Setiap anak yatim diperlakukan setara dengan santri lainnya",
                      "Tidak ada diskriminasi berdasarkan latar belakang keluarga",
                      "Laporan penggunaan dana disediakan secara transparan kepada donatur",
                      "Anak-anak dibina hingga lulus MA dan siap mandiri",
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3 items-start">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-none mt-0.5" />
                        <p className="text-sm text-gray-600 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22 }}>
                  <div className="border border-primary/20 bg-primary/5 p-6">
                    <p className="font-bold text-gray-900 text-sm mb-2">Jadilah Orang Tua Asuh</p>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">
                      Satu anak yatim membutuhkan sponsor Rp 300.000–500.000 per bulan untuk kebutuhan
                      makan, pendidikan, dan keseharian. Jadilah bagian dari keluarga besar Darussalam Bacan.
                    </p>
                    <Link
                      href="/kontak"
                      className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-6 py-2.5 hover:bg-primary/90 transition-colors"
                    >
                      Saya Ingin Menjadi Donatur
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">Program Lainnya</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: "Kafil Yatim", href: "/program/kafil-yatim", desc: "Donasi untuk yatim" },
                { label: "Infaq Beras", href: "/program/infaq-beras", desc: "Beras untuk santri" },
                { label: "Majelis Taklim", href: "/program/majelis-taklim", desc: "Kajian rutin komunitas" },
                { label: "TPQ", href: "/program/tpq", desc: "Pendidikan Al-Qur'an" },
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
