"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Target, Eye, CheckCircle2 } from "lucide-react"

const misiList = [
  "Menyelenggarakan pendidikan Al-Qur'an (tahfizh & tahsin) yang terstruktur dan berkualitas",
  "Menyelenggarakan pendidikan formal tingkat MTs dan MA yang berintegrasi dengan nilai-nilai Islam",
  "Membangun kemandirian ekonomi pesantren melalui unit usaha produktif yang dikelola santri dan alumni",
  "Memberikan akses pendidikan gratis bagi anak-anak yatim dan kurang mampu di wilayah Halmahera Selatan",
  "Mencetak kader da'i, pengajar, dan wirausahawan Muslim yang berakhlak mulia",
  "Membangun satu rumah Al-Qur'an di setiap desa sebagai pusat pendidikan dan dakwah masyarakat",
  "Menjalin kerjasama dengan berbagai pihak untuk pengembangan pesantren yang berkelanjutan",
]

const nilaiList = [
  {
    title: "Keikhlasan",
    desc: "Seluruh kegiatan dilandasi niat yang tulus karena Allah semata, bukan karena pujian atau materi.",
    icon: "🤍",
  },
  {
    title: "Kemandirian",
    desc: "Pesantren mendidik santri untuk mandiri secara ekonomi, tidak bergantung pada bantuan semata.",
    icon: "💪",
  },
  {
    title: "Keilmuan",
    desc: "Menjunjung tinggi ilmu — baik ilmu agama maupun ilmu umum — sebagai bekal hidup yang utama.",
    icon: "📚",
  },
  {
    title: "Kepedulian",
    desc: "Mengutamakan pelayanan bagi anak-anak yatim dan masyarakat yang kurang beruntung.",
    icon: "🤝",
  },
]

export default function VisiMisiPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Visi & Misi"
          subtitle="Satu visi besar: 1 Desa 1 Rumah Qur'an Mandiri Ekonomi. Mewujudkan pesantren yang tidak hanya mencetak hafizh, tapi juga wirausahawan Muslim."
          crumbs={[{ label: "Tentang", href: "/tentang" }, { label: "Visi & Misi" }]}
          accent="Visi Besar"
        />

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            {/* Visi */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-16 max-w-3xl mx-auto text-center"
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-6 h-0.5 bg-primary" />
                <span className="text-primary text-xs font-semibold uppercase tracking-widest">Visi</span>
                <div className="w-6 h-0.5 bg-primary" />
              </div>
              <div className="border border-gray-100 bg-gray-50 p-8 md:p-12">
                <Eye className="w-8 h-8 text-primary mx-auto mb-5" />
                <blockquote className="text-2xl md:text-3xl font-black text-gray-900 leading-tight mb-4">
                  "1 Desa 1 Rumah Qur'an Mandiri Ekonomi"
                </blockquote>
                <p className="text-gray-500 text-sm leading-relaxed max-w-lg mx-auto">
                  Setiap desa di Pulau Bacan dan sekitarnya memiliki pusat pendidikan Al-Qur'an yang mandiri secara ekonomi —
                  tidak bergantung pada donasi untuk beroperasi, namun justru menjadi motor penggerak ekonomi masyarakat sekitarnya.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Misi */}
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                <div className="flex items-center gap-2 mb-6">
                  <Target className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-black text-gray-900">Misi Pesantren</h2>
                </div>
                <div className="space-y-3">
                  {misiList.map((m, i) => (
                    <div key={i} className="flex gap-3 p-4 border border-gray-100 bg-gray-50">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-none mt-0.5" />
                      <p className="text-sm text-gray-600 leading-relaxed">{m}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Nilai & Gambar */}
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="relative h-56 overflow-hidden"
                >
                  <Image src="/images/gallery/gallery-06.jpg" alt="Santri Darussalam Bacan" fill className="object-cover" />
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                  <h2 className="text-xl font-black text-gray-900 mb-5">Nilai-Nilai Kami</h2>
                  <div className="grid grid-cols-2 gap-3">
                    {nilaiList.map((n) => (
                      <div key={n.title} className="border border-gray-100 p-4 bg-gray-50">
                        <span className="text-2xl">{n.icon}</span>
                        <p className="font-bold text-gray-900 text-sm mt-2 mb-1">{n.title}</p>
                        <p className="text-xs text-gray-500 leading-relaxed">{n.desc}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
                  <div className="border-l-4 border-primary bg-gray-50 px-6 py-5">
                    <p className="font-bold text-gray-800 text-base mb-2">Mengapa Mandiri Ekonomi?</p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Pesantren yang mengandalkan donasi sepenuhnya rentan terhadap ketidakpastian. Dengan membangun
                      unit usaha — dari air galon, peternakan, hingga pertanian — Darussalam Bacan membangun fondasi
                      yang kokoh agar dapat terus melayani santri yatim dan masyarakat tanpa putus.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">Tentang Kami</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: "Profil Pesantren", href: "/tentang", desc: "Identitas & fasilitas" },
                { label: "Sejarah Berdiri", href: "/tentang/sejarah", desc: "Perjalanan sejak 2018" },
                { label: "Struktur Organisasi", href: "/tentang/struktur", desc: "Pimpinan & pengurus" },
                { label: "Galeri Foto", href: "/tentang/galeri", desc: "29 foto kegiatan" },
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
