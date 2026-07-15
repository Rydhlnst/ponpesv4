"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { BookOpen, Clock, Award, Users, CheckCircle2 } from "lucide-react"

const metode = [
  {
    icon: BookOpen,
    title: "Setoran Harian",
    desc: "Setiap santri menyetorkan hafalan baru kepada pengasuh tahfizh setiap hari setelah subuh dan ashar.",
  },
  {
    icon: Clock,
    title: "Murajaah Rutin",
    desc: "Pengulangan hafalan dilakukan secara terstruktur agar ayat yang telah dihafal tidak mudah terlupa.",
  },
  {
    icon: Users,
    title: "Halaqah Kelompok",
    desc: "Santri belajar dalam kelompok kecil (halaqah) yang dipimpin musyrif berpengalaman.",
  },
  {
    icon: Award,
    title: "Evaluasi Berkala",
    desc: "Ujian hafalan diselenggarakan setiap bulan untuk mengukur pencapaian dan motivasi santri.",
  },
]

const jenjang = [
  { label: "Tahfizh Pemula", kelas: "Kelas 7 MTs", target: "5 Juz", ket: "Al-Baqarah, Al-Mulk, Juz Amma" },
  { label: "Tahfizh Menengah", kelas: "Kelas 8–9 MTs", target: "15 Juz", ket: "Setengah Al-Qur'an" },
  { label: "Tahfizh Lanjutan", kelas: "Kelas 10–12 MA", target: "30 Juz", ket: "Hafizh lengkap, siap wisuda" },
]

export default function TahfizhPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Program Tahfizh Al-Qur'an"
          subtitle="Program unggulan Darussalam Bacan: menghafal Al-Qur'an 30 juz secara terstruktur, melalui setoran harian, murajaah, dan halaqah yang dipimpin pengasuh berpengalaman."
          crumbs={[{ label: "Program" }, { label: "Tahfizh Al-Qur'an" }]}
          accent="Program Unggulan"
        />

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-10">
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
                  <div className="border-l-4 border-primary bg-gray-50 px-6 py-5">
                    <p className="text-2xl text-gray-800 font-bold leading-relaxed text-right mb-3" style={{ direction: "rtl", fontFamily: "serif" }}>
                      خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ
                    </p>
                    <p className="text-sm text-gray-500 italic">
                      "Sebaik-baik kalian adalah yang mempelajari Al-Qur'an dan mengajarkannya." — (HR. Bukhari)
                    </p>
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>
                  <h2 className="text-2xl font-black text-gray-900 mb-4">Tentang Program Ini</h2>
                  <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
                    <p>
                      Program Tahfizh Al-Qur'an adalah inti dari pendidikan di Pondok Pesantren Darussalam Bacan.
                      Sejak hari pertama santri masuk, hafalan Al-Qur'an menjadi kegiatan utama yang mengisi
                      pagi, siang, dan malam hari.
                    </p>
                    <p>
                      Program ini dirancang agar santri dapat menyelesaikan hafalan <strong className="text-gray-900">30 juz</strong> selama
                      masa studi di MTs dan MA — tanpa mengorbankan prestasi akademik formal.
                    </p>
                    <p>
                      Dengan metode setoran harian, murajaah terstruktur, dan evaluasi berkala, setiap santri
                      didampingi untuk menjaga dan memperkuat hafalannya hingga benar-benar kuat dan siap menjadi
                      imam serta pengajar di masyarakat.
                    </p>
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }}>
                  <h2 className="text-2xl font-black text-gray-900 mb-5">Jenjang & Target Hafalan</h2>
                  <div className="space-y-0 border border-gray-100 overflow-hidden">
                    {jenjang.map((j, i) => (
                      <div key={i} className={`grid grid-cols-3 gap-4 px-5 py-4 text-sm ${i % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                        <div>
                          <p className="font-bold text-gray-900">{j.label}</p>
                          <p className="text-xs text-gray-400 mt-0.5">{j.kelas}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-primary font-black text-lg">{j.target}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-gray-500 leading-relaxed">{j.ket}</p>
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
                  <Image src="/images/gallery/gallery-02.jpg" alt="Santri Tahfizh Darussalam Bacan" fill className="object-cover" />
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.14 }}>
                  <h2 className="text-2xl font-black text-gray-900 mb-5">Metode Pembelajaran</h2>
                  <div className="space-y-3">
                    {metode.map((m, i) => (
                      <div key={i} className="flex gap-4 border border-gray-100 p-5 bg-gray-50">
                        <div className="w-9 h-9 bg-primary flex items-center justify-center flex-none">
                          <m.icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm mb-1">{m.title}</p>
                          <p className="text-sm text-gray-500 leading-relaxed">{m.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }}>
                  <h2 className="text-2xl font-black text-gray-900 mb-4">Luaran Program</h2>
                  <div className="space-y-2">
                    {[
                      "Hafal Al-Qur'an 30 juz dengan bacaan tajwid yang benar",
                      "Mampu memimpin shalat berjamaah dan tarawih sebagai imam",
                      "Siap menjadi pengajar tahfizh di masyarakat atau lembaga pendidikan",
                      "Memiliki karakter disiplin, sabar, dan cinta Al-Qur'an yang kuat",
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3 items-start">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-none mt-0.5" />
                        <p className="text-sm text-gray-600 leading-relaxed">{item}</p>
                      </div>
                    ))}
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
                { label: "Pendidikan MTs & MA", href: "/program/pendidikan", desc: "Formal + pesantren" },
                { label: "Program Sosial & Yatim", href: "/program/kafil-yatim", desc: "26 yatim gratis" },
                { label: "Kemandirian Usaha", href: "/program/pengembangan-usaha", desc: "Air kemasan & ternak" },
                { label: "Wakaf & Pembangunan", href: "/program/wakaf-masjid", desc: "Masjid & lahan" },
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
