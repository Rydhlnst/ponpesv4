"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { BookOpen, Users, Clock, CheckCircle2, Star } from "lucide-react"

const kurikulum = [
  { mapel: "Al-Qur'an & Tajwid", ket: "Setoran harian, target 5–15 juz" },
  { mapel: "Bahasa Arab", ket: "Dasar percakapan & tata bahasa" },
  { mapel: "Fiqih & Akidah", ket: "Ibadah praktis sesuai usia" },
  { mapel: "Matematika & IPA", ket: "Kurikulum nasional" },
  { mapel: "Bahasa Indonesia & Inggris", ket: "Literasi & komunikasi" },
  { mapel: "IPS & PKn", ket: "Wawasan kebangsaan" },
]

const keunggulan = [
  { icon: BookOpen, title: "Tahfizh Terintegrasi", desc: "Hafalan Al-Qur'an berjalan seiring pelajaran sekolah tanpa mengorbankan keduanya." },
  { icon: Users, title: "Halaqah Harian", desc: "Setiap santri dibimbing dalam kelompok kecil oleh musyrif berpengalaman." },
  { icon: Clock, title: "Jadwal Terstruktur", desc: "Waktu belajar formal, tahfizh, dan ibadah diatur dalam jadwal yang seimbang." },
  { icon: Star, title: "Ijazah Nasional", desc: "Lulusan mendapat ijazah SMP yang diakui secara nasional oleh Kemendikbud." },
]

export default function SMPTahfizhPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="SMP Tahfizh Darussalam"
          subtitle="Sekolah Menengah Pertama berbasis tahfizh Al-Qur'an — menggabungkan kurikulum nasional dengan hafalan Qur'an dalam satu sistem pendidikan yang utuh dan terpadu."
          crumbs={[{ label: "Program" }, { label: "SMP Tahfizh" }]}
          accent="Program Pendidikan"
        />

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-10">
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-0.5 bg-primary" />
                    <span className="text-primary text-xs font-semibold uppercase tracking-widest">Tentang Program</span>
                  </div>
                  <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
                    <p>
                      SMP Tahfizh Darussalam adalah jenjang pendidikan menengah pertama yang diselenggarakan
                      Pondok Pesantren Darussalam Bacan dengan memadukan kurikulum nasional dan program hafalan
                      Al-Qur'an secara intensif.
                    </p>
                    <p>
                      Selama <strong className="text-gray-900">3 tahun (kelas 7–9)</strong>, santri menjalani
                      kegiatan belajar mengajar mata pelajaran umum sekaligus menyetorkan hafalan baru setiap hari.
                      Target minimal hafalan saat lulus adalah <strong className="text-gray-900">10–15 juz</strong>.
                    </p>
                    <p>
                      Kurikulum yang digunakan mengacu pada <strong className="text-gray-900">Kurikulum Merdeka</strong> yang
                      diperkaya dengan mata pelajaran keagamaan khas pesantren, sehingga santri siap menghadapi
                      ujian nasional sekaligus bekal agama yang kuat.
                    </p>
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>
                  <h2 className="text-2xl font-black text-gray-900 mb-5">Mata Pelajaran</h2>
                  <div className="space-y-0 border border-gray-100 overflow-hidden">
                    {kurikulum.map((k, i) => (
                      <div key={i} className={`flex gap-4 px-5 py-3.5 text-sm ${i % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                        <span className="font-semibold text-gray-900 w-44 flex-none">{k.mapel}</span>
                        <span className="text-gray-500">{k.ket}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }}>
                  <h2 className="text-2xl font-black text-gray-900 mb-4">Luaran Lulusan</h2>
                  <div className="space-y-2">
                    {[
                      "Ijazah SMP yang diakui negara (setara MTs)",
                      "Hafalan Al-Qur'an 10–15 juz dengan tajwid yang benar",
                      "Kemampuan shalat, membaca Al-Qur'an, dan ibadah harian yang kuat",
                      "Karakter disiplin, jujur, dan berakhlak mulia",
                      "Siap lanjut ke MA Darussalam atau sekolah lanjutan lainnya",
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3 items-start">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-none mt-0.5" />
                        <p className="text-sm text-gray-600 leading-relaxed">{item}</p>
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
                  <Image src="/images/gallery/gallery-35.jpg" alt="Kegiatan Belajar SMP Tahfizh Darussalam" fill className="object-cover" />
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.14 }}>
                  <h2 className="text-2xl font-black text-gray-900 mb-5">Keunggulan Program</h2>
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
                  <div className="border border-gray-100 bg-gray-50 p-6">
                    <p className="font-bold text-gray-900 text-sm mb-2">Informasi Pendaftaran</p>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">
                      Penerimaan santri baru SMP Tahfizh dibuka setiap tahun menjelang tahun ajaran baru.
                      Persyaratan: lulus SD/MI, tes baca Al-Qur'an dasar, dan wawancara orang tua.
                    </p>
                    <Link
                      href="/kontak"
                      className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-6 py-2.5 hover:bg-primary/90 transition-colors"
                    >
                      Daftar Sekarang
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
                { label: "MA Darussalam", href: "/program/madrasah-aliyah", desc: "Jenjang lanjutan SMA" },
                { label: "TPQ", href: "/program/tpq", desc: "Belajar Al-Qur'an dasar" },
                { label: "Tahfizh Al-Qur'an", href: "/program/tahfizh", desc: "Hafalan 30 juz" },
                { label: "Pengkaderan Dai", href: "/program/pengkaderan-dai", desc: "Cetak dai masa depan" },
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
