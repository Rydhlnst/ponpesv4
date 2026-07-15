"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { GraduationCap, BookOpen, Users, Clock, CheckCircle2 } from "lucide-react"

const jenjang = [
  {
    label: "MTs (Madrasah Tsanawiyah)",
    setara: "Setara SMP",
    durasi: "3 Tahun (Kelas 7–9)",
    desc: "Kurikulum formal nasional dipadu dengan pembelajaran agama pesantren. Santri mendapat ijazah setara SMP yang diakui negara.",
    mapel: ["Matematika", "IPA", "IPS", "Bahasa Indonesia", "Bahasa Inggris", "Fiqih", "Akidah Akhlak", "Al-Qur'an Hadits", "SKI", "Bahasa Arab"],
  },
  {
    label: "MA (Madrasah Aliyah)",
    setara: "Setara SMA",
    durasi: "3 Tahun (Kelas 10–12)",
    desc: "Jenjang lanjutan dengan kurikulum MA plus pendalaman ilmu agama. Lulusan siap melanjutkan ke perguruan tinggi atau berdakwah di masyarakat.",
    mapel: ["Matematika", "Fisika", "Kimia", "Biologi", "Sosiologi", "Tafsir", "Hadits", "Fiqih Lanjutan", "Bahasa Arab", "Ushul Fiqih"],
  },
]

const keunggulan = [
  { icon: BookOpen, title: "Kurikulum Terpadu", desc: "Mata pelajaran umum dan agama berjalan seimbang dalam satu jadwal yang terstruktur." },
  { icon: GraduationCap, title: "Ijazah Diakui Negara", desc: "Lulusan MTs dan MA mendapat ijazah resmi yang setara dengan SMP dan SMA negeri." },
  { icon: Users, title: "Kelas Kecil & Intensif", desc: "Rasio guru-santri yang ideal memungkinkan pembelajaran lebih personal dan efektif." },
  { icon: Clock, title: "Jadwal Terintegrasi Tahfizh", desc: "Waktu belajar formal tidak mengganggu jadwal tahfizh. Keduanya berjalan sinergis." },
]

export default function PendidikanPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Pendidikan Formal MTs & MA"
          subtitle="Madrasah Tsanawiyah dan Madrasah Aliyah Darussalam Bacan — pendidikan formal berjenjang yang terintegrasi penuh dengan kurikulum pesantren dan program tahfizh."
          crumbs={[{ label: "Program" }, { label: "Pendidikan MTs & MA" }]}
          accent="Pendidikan Formal"
        />

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-10">
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-6 h-0.5 bg-primary" />
                    <span className="text-primary text-xs font-semibold uppercase tracking-widest">Tentang Program</span>
                  </div>
                  <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
                    <p>
                      Darussalam Bacan menyelenggarakan pendidikan formal tingkat <strong className="text-gray-900">MTs (setara SMP)</strong> dan
                      <strong className="text-gray-900"> MA (setara SMA)</strong> yang sepenuhnya terintegrasi dengan kehidupan pesantren.
                    </p>
                    <p>
                      Santri tidak perlu memilih antara menghafal Al-Qur'an dan berprestasi di sekolah. Di Darussalam Bacan,
                      keduanya berjalan bersamaan dalam satu sistem yang dirancang dengan cermat.
                    </p>
                    <p>
                      Lulusan kami memegang ijazah resmi yang diakui negara, sekaligus memiliki hafalan Al-Qur'an dan
                      karakter keislaman yang kuat — modal lengkap untuk melanjutkan pendidikan atau terjun ke masyarakat.
                    </p>
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>
                  <h2 className="text-2xl font-black text-gray-900 mb-5">Jenjang Pendidikan</h2>
                  <div className="space-y-4">
                    {jenjang.map((j, i) => (
                      <div key={i} className="border border-gray-100 p-6 bg-gray-50">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-black text-gray-900">{j.label}</h3>
                            <p className="text-primary text-sm font-semibold mt-0.5">{j.setara} · {j.durasi}</p>
                          </div>
                          <span className="text-xs bg-primary/10 text-primary font-bold px-2 py-1">{String(i + 1).padStart(2, "0")}</span>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed mb-3">{j.desc}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {j.mapel.map((m) => (
                            <span key={m} className="text-xs border border-gray-200 px-2 py-0.5 text-gray-500 bg-white">{m}</span>
                          ))}
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
                >
                  <h2 className="text-2xl font-black text-gray-900 mb-4">Kegiatan Olahraga Santri</h2>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="relative h-48 overflow-hidden col-span-2">
                      <Image src="/images/olahraga/olahraga-01.jpg" alt="Santri bermain basket di halaman pesantren" fill className="object-cover" />
                    </div>
                    <div className="relative h-36 overflow-hidden">
                      <Image src="/images/olahraga/olahraga-02.jpg" alt="Kegiatan voli santri Darussalam Bacan" fill className="object-cover" />
                    </div>
                    <div className="relative h-36 overflow-hidden">
                      <Image src="/images/olahraga/olahraga-03.jpg" alt="Tim voli santri putra" fill className="object-cover" />
                    </div>
                    <div className="relative h-36 overflow-hidden col-span-2">
                      <Image src="/images/olahraga/olahraga-04.jpg" alt="Tim voli santri putri Darussalam Bacan" fill className="object-cover" />
                    </div>
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.14 }}>
                  <h2 className="text-2xl font-black text-gray-900 mb-5">Keunggulan Sistem Kami</h2>
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
                  <h2 className="text-2xl font-black text-gray-900 mb-4">Luaran Lulusan</h2>
                  <div className="space-y-2">
                    {[
                      "Ijazah MTs / MA yang diakui secara nasional",
                      "Hafalan Al-Qur'an minimal 15–30 juz sesuai pencapaian",
                      "Kemampuan baca kitab dan pemahaman fiqih dasar",
                      "Karakter disiplin, mandiri, dan berakhlak mulia",
                      "Siap melanjutkan ke pondok pesantren lanjutan atau perguruan tinggi",
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3 items-start">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-none mt-0.5" />
                        <p className="text-sm text-gray-600 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22 }}>
                  <div className="border border-gray-100 bg-gray-50 p-6">
                    <p className="font-bold text-gray-900 text-sm mb-2">Informasi Pendaftaran</p>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">
                      Penerimaan santri baru dibuka setiap tahun menjelang tahun ajaran baru. Hubungi kami untuk
                      informasi persyaratan dan jadwal pendaftaran.
                    </p>
                    <Link
                      href="/kontak"
                      className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-6 py-2.5 hover:bg-primary/90 transition-colors"
                    >
                      Hubungi Pesantren
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
                { label: "Tahfizh Al-Qur'an", href: "/program/tahfizh", desc: "Hafalan 30 juz" },
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
