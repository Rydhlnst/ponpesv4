"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Mic, BookOpen, Users, Globe, CheckCircle2 } from "lucide-react"

const kurikulum = [
  { no: "01", label: "Ilmu Dakwah & Retorika", desc: "Teknik berbicara di depan umum, penyampaian pesan yang efektif, dan manajemen audiens." },
  { no: "02", label: "Fiqih Dakwah", desc: "Metode dakwah Nabi ﷺ, etika berdakwah, dan cara merespons pertanyaan kritis masyarakat." },
  { no: "03", label: "Khutbah & Ceramah", desc: "Praktik langsung menyampaikan khutbah Jumat, ceramah tarawih, dan tausiyah acara." },
  { no: "04", label: "Baca Kitab Kuning", desc: "Kemampuan membaca dan memahami referensi klasik Islam sebagai bekal ilmiah seorang dai." },
  { no: "05", label: "Pengelolaan Majelis", desc: "Cara mendirikan dan mengelola majelis taklim, TPQ, dan komunitas dakwah di daerah." },
  { no: "06", label: "Praktek Lapangan", desc: "Santri diterjunkan langsung ke masjid dan komunitas sekitar pesantren untuk praktek dakwah nyata." },
]

const keunggulan = [
  { icon: Mic, title: "Praktek Langsung", desc: "Setiap santri wajib tampil berceramah dan menyampaikan materi di hadapan jamaah nyata." },
  { icon: BookOpen, title: "Bekal Ilmiah Kuat", desc: "Dakwah berbasis dalil shahih dari Al-Qur'an, hadits, dan kitab klasik yang diakui ulama." },
  { icon: Globe, title: "Siap Turun ke Daerah", desc: "Lulusan disiapkan untuk mengisi kekosongan dai di pelosok Maluku Utara dan sekitarnya." },
  { icon: Users, title: "Jaringan Alumni", desc: "Terhubung dengan jaringan alumni dai Darussalam yang tersebar di berbagai wilayah." },
]

export default function PengkaderanDaiPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Pengkaderan Dai Darussalam"
          subtitle="Program cetak dai dan ulama muda yang siap berdakwah — membekali santri dengan ilmu agama yang kokoh, kemampuan retorika, dan mental pejuang dakwah di garis terdepan."
          crumbs={[{ label: "Program" }, { label: "Pengkaderan Dai" }]}
          accent="Program Dakwah"
        />

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-10">
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
                  <div className="border-l-4 border-primary bg-gray-50 px-6 py-5 mb-8">
                    <p className="text-xl text-gray-800 font-bold leading-relaxed text-right mb-3" style={{ direction: "rtl", fontFamily: "serif" }}>
                      ادْعُ إِلَىٰ سَبِيلِ رَبِّكَ بِالْحِكْمَةِ وَالْمَوْعِظَةِ الْحَسَنَةِ
                    </p>
                    <p className="text-sm text-gray-500 italic">
                      "Serulah (manusia) kepada jalan Tuhanmu dengan hikmah dan pelajaran yang baik." — (QS. An-Nahl: 125)
                    </p>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-0.5 bg-primary" />
                    <span className="text-primary text-xs font-semibold uppercase tracking-widest">Tentang Program</span>
                  </div>
                  <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
                    <p>
                      Program Pengkaderan Dai Darussalam dirancang untuk menjawab kebutuhan mendesak akan
                      dai-dai berkualitas di wilayah Maluku Utara, khususnya di daerah-daerah terpencil yang
                      masih kekurangan tenaga pengajar agama Islam.
                    </p>
                    <p>
                      Santri yang telah menyelesaikan hafalan Al-Qur'an dan pendidikan formal MA dibekali
                      dengan ilmu dakwah, kemampuan berceramah, dan pengalaman terjun langsung ke lapangan
                      sebagai <strong className="text-gray-900">dai bersertifikat Darussalam Bacan</strong>.
                    </p>
                    <p>
                      Program ini adalah perwujudan dari motto pesantren:
                      <strong className="text-gray-900"> "Mencetak Da'i Rabbani, Mandiri Ekonomi"</strong>.
                    </p>
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>
                  <h2 className="text-2xl font-black text-gray-900 mb-5">Kurikulum Pengkaderan</h2>
                  <div className="space-y-3">
                    {kurikulum.map((k) => (
                      <div key={k.no} className="flex gap-4 border border-gray-100 p-4 bg-gray-50">
                        <span className="text-primary font-black text-sm font-mono flex-none">{k.no}</span>
                        <div>
                          <p className="font-bold text-gray-900 text-sm mb-0.5">{k.label}</p>
                          <p className="text-xs text-gray-500 leading-relaxed">{k.desc}</p>
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
                  <Image src="/images/gallery/gallery-33.jpg" alt="Kegiatan Pengkaderan Dai Darussalam" fill className="object-cover" />
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
                  <h2 className="text-2xl font-black text-gray-900 mb-4">Profil Lulusan</h2>
                  <div className="space-y-2">
                    {[
                      "Hafizh Al-Qur'an 30 juz dengan bacaan yang fasih",
                      "Mampu khutbah Jumat, ceramah Ramadan, dan tausiyah acara",
                      "Siap mendirikan TPQ atau Majelis Taklim mandiri",
                      "Memiliki kemampuan baca kitab kuning dasar",
                      "Bermental tangguh dan siap berdakwah di daerah terpencil",
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
                    <p className="font-bold text-gray-900 text-sm mb-2">Dukung Cetak Dai</p>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">
                      Setiap kontribusi Anda membantu mencetak dai yang akan menerangi pelosok Maluku Utara.
                      Hubungi kami untuk info donasi atau beasiswa program Pengkaderan Dai.
                    </p>
                    <Link
                      href="/kontak"
                      className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-6 py-2.5 hover:bg-primary/90 transition-colors"
                    >
                      Dukung Program Ini
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
                { label: "MA Darussalam", href: "/program/madrasah-aliyah", desc: "Jenjang lanjutan SMA" },
                { label: "Majelis Taklim", href: "/program/majelis-taklim", desc: "Kajian rutin komunitas" },
                { label: "SMP Tahfizh", href: "/program/smp-tahfizh", desc: "Jenjang awal pesantren" },
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
