"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { BookOpen, Users, Heart, Clock, CheckCircle2 } from "lucide-react"

const kajian = [
  { no: "01", label: "Tafsir Al-Qur'an", desc: "Mempelajari makna dan kandungan ayat-ayat Al-Qur'an secara tematis setiap pertemuan." },
  { no: "02", label: "Fiqih Wanita & Keluarga", desc: "Hukum-hukum Islam yang berkaitan dengan kehidupan rumah tangga, ibadah, dan muamalah." },
  { no: "03", label: "Sirah Nabawiyah", desc: "Mengenal perjalanan hidup Nabi Muhammad ﷺ sebagai teladan dalam kehidupan sehari-hari." },
  { no: "04", label: "Akhlak & Tasawuf", desc: "Pembinaan jiwa dan hati melalui kajian akhlak Islam dan tazkiyatun nafs." },
  { no: "05", label: "Hafalan & Murottal", desc: "Sesi membaca dan mengulang hafalan Al-Qur'an bersama dipimpin ustazah Darussalam." },
]

const keunggulan = [
  { icon: BookOpen, title: "Kajian Ilmiah", desc: "Materi disampaikan dengan referensi kitab mu'tabar oleh ustaz/ustazah berpengalaman." },
  { icon: Users, title: "Komunitas Ibu", desc: "Menjadi wadah silaturahmi dan saling menguatkan antar ibu rumah tangga dan muslimah." },
  { icon: Clock, title: "Rutin Mingguan", desc: "Pertemuan diadakan setiap pekan sehingga ilmu terjaga dan komunitas terus tumbuh." },
  { icon: Heart, title: "Terbuka Umum", desc: "Majelis Taklim terbuka untuk seluruh muslimah di sekitar Bacan — tanpa biaya apapun." },
]

export default function MajelisTaklimPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Majelis Taklim Darussalam"
          subtitle="Wadah pembinaan ilmu agama dan silaturahmi bagi para muslimah dan masyarakat sekitar — melalui kajian rutin, murottal, dan pemberdayaan spiritual komunitas."
          crumbs={[{ label: "Program" }, { label: "Majelis Taklim" }]}
          accent="Program Komunitas"
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
                      Majelis Taklim Darussalam adalah program pembinaan keagamaan yang diperuntukkan bagi
                      masyarakat umum — khususnya para ibu, muslimah, dan warga sekitar yang ingin
                      mendalami ilmu agama Islam secara rutin dan sistematis.
                    </p>
                    <p>
                      Berbeda dengan pengajian biasa, Majelis Taklim Darussalam memiliki kurikulum yang
                      terstruktur: setiap pertemuan memiliki tema kajian yang bersambung dari pekan ke pekan,
                      sehingga peserta mendapat pemahaman yang utuh dan mendalam.
                    </p>
                    <p>
                      Program ini juga menjadi jembatan antara pesantren dan masyarakat luas, memperkuat
                      peran Darussalam Bacan sebagai
                      <strong className="text-gray-900"> pusat pendidikan Islam</strong> yang tidak hanya
                      membina santri, tetapi juga mencerahkan komunitas.
                    </p>
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>
                  <h2 className="text-2xl font-black text-gray-900 mb-5">Materi Kajian Rutin</h2>
                  <div className="space-y-3">
                    {kajian.map((k) => (
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
                  className="grid grid-cols-2 gap-2"
                >
                  <div className="relative col-span-2 h-52 overflow-hidden">
                    <Image src="/images/gallery/gallery-36.jpg" alt="Majelis Taklim Darussalam Bacan" fill className="object-cover" />
                  </div>
                  <div className="relative h-40 overflow-hidden">
                    <Image src="/images/gallery/gallery-35.jpg" alt="Kajian Rutin Darussalam" fill className="object-cover" />
                  </div>
                  <div className="relative h-40 overflow-hidden">
                    <Image src="/images/gallery/gallery-04.jpg" alt="Kegiatan Komunitas Darussalam" fill className="object-cover" />
                  </div>
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
                  <h2 className="text-2xl font-black text-gray-900 mb-4">Manfaat yang Dirasakan</h2>
                  <div className="space-y-2">
                    {[
                      "Pemahaman agama yang semakin mendalam dan terstruktur",
                      "Lingkungan sosial yang saling mengingatkan dalam kebaikan",
                      "Anak dan keluarga tumbuh dalam suasana Islami yang kuat",
                      "Terhubung langsung dengan pesantren sebagai sumber ilmu",
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
                    <p className="font-bold text-gray-900 text-sm mb-2">Bergabung dengan Majelis Kami</p>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">
                      Majelis Taklim terbuka untuk seluruh masyarakat tanpa biaya pendaftaran.
                      Hubungi pesantren untuk jadwal pertemuan mingguan dan lokasi pelaksanaan.
                    </p>
                    <Link
                      href="/kontak"
                      className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-6 py-2.5 hover:bg-primary/90 transition-colors"
                    >
                      Hubungi Kami
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
                { label: "TPQ", href: "/program/tpq", desc: "Pendidikan Al-Qur'an anak" },
                { label: "Pengkaderan Dai", href: "/program/pengkaderan-dai", desc: "Cetak dai masa depan" },
                { label: "LKSA Panti Asuhan", href: "/program/lksa", desc: "Santunan anak yatim" },
                { label: "Tahfizh Al-Qur'an", href: "/program/tahfizh", desc: "Hafalan 30 juz" },
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
