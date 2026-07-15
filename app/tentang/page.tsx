"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail, BookOpen, Users, Leaf, Building2 } from "lucide-react"

const identitas = [
  { label: "Nama Pesantren", value: "Pondok Pesantren Darussalam Bacan" },
  { label: "Tanggal Berdiri", value: "8 Januari 2018" },
  { label: "Pimpinan Yayasan", value: "Yahya Hi Kasim, S.Pd" },
  { label: "Pimpinan Pesantren", value: "KH. Asep Sofyan, Lc., M.Pd.I" },
  { label: "Alamat", value: "Jl. Pesantren No. 05, RT 03, Desa Kupal, Kec. Bacan Selatan, Kab. Halmahera Selatan, Maluku Utara" },
  { label: "No. Telepon / WA", value: "0822 9782 9892" },
  { label: "Email", value: "ponpesantren.darussalam@bacan.com" },
  { label: "Luas Lahan Wakaf", value: "± 20 Hektar (lahan wakaf) + 5,5 Ha lahan pesantren" },
  { label: "Lahan Pertanian Aktif", value: "1 Hektar (baru diolah)" },
]

const fasilitas = [
  { icon: BookOpen, label: "Gedung Belajar", desc: "Ruang kelas MTs dan MA" },
  { icon: Building2, label: "Asrama Santri", desc: "Putra dan putri terpisah" },
  { icon: Users, label: "Masjid / Musholla", desc: "Pusat ibadah dan tahfizh" },
  { icon: Leaf, label: "Lahan Pertanian", desc: "1 Ha aktif dikelola" },
  { icon: Building2, label: "Usaha Air Galon", desc: "Isi ulang aktif berjalan" },
  { icon: Users, label: "Area Peternakan", desc: "Sapi, kambing, bebek, merpati" },
]

const stats = [
  { value: "110+", label: "Santri Aktif", sub: "Putra & Putri" },
  { value: "26", label: "Santri Yatim", sub: "Gratis penuh" },
  { value: "21+", label: "Tenaga Pendidik", sub: "Guru & Pengasuh" },
  { value: "8 Thn", label: "Berdiri Melayani", sub: "Sejak 2018" },
]

export default function TentangPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Tentang Pondok Pesantren Darussalam Bacan"
          subtitle="Berdiri sejak 8 Januari 2018 di Pulau Bacan, Halmahera Selatan. Mencetak generasi Qur'ani yang mandiri secara ekonomi dan spiritual."
          crumbs={[{ label: "Tentang Kami" }]}
          accent="Profil Pesantren"
        />

        {/* Stats */}
        <section className="py-12 bg-brand-dark">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="text-center"
                >
                  <p className="text-3xl md:text-4xl font-black text-primary">{s.value}</p>
                  <p className="text-white font-semibold text-sm mt-1">{s.label}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{s.sub}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-10">
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-0.5 bg-primary" />
                    <span className="text-primary text-xs font-semibold uppercase tracking-widest">Tentang Kami</span>
                  </div>
                  <h2 className="text-2xl font-black text-gray-900 mb-4">Profil Singkat</h2>
                  <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
                    <p>
                      Pondok Pesantren Darussalam Bacan adalah lembaga pendidikan Islam yang berdiri pada
                      <strong className="text-gray-900"> 8 Januari 2018</strong> di Desa Kupal, Kecamatan Bacan Selatan,
                      Kabupaten Halmahera Selatan, Provinsi Maluku Utara.
                    </p>
                    <p>
                      Didirikan oleh <strong className="text-gray-900">Yahya Hi Kasim, S.Pd</strong> sebagai Pimpinan Yayasan
                      dan diasuh oleh <strong className="text-gray-900">KH. Asep Sofyan, Lc., M.Pd.I</strong> sebagai Pimpinan Pesantren,
                      Darussalam Bacan hadir untuk menjawab kebutuhan pendidikan Islam yang berkualitas di wilayah Pulau Bacan.
                    </p>
                    <p>
                      Saat ini pesantren membina <strong className="text-gray-900">lebih dari 110 santri</strong> putra dan
                      putri, di mana <strong className="text-gray-900">26 di antaranya adalah santri yatim</strong> yang
                      dibiayai sepenuhnya oleh pesantren dan donatur setia.
                    </p>
                    <p>
                      Selain pendidikan agama dan tahfizh Al-Qur'an, pesantren juga menyelenggarakan pendidikan formal
                      tingkat MTs (SMP) dan MA (SMA) untuk memastikan santri mendapat bekal akademik yang lengkap.
                    </p>
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                  <h2 className="text-2xl font-black text-gray-900 mb-6">Identitas Pesantren</h2>
                  <div className="space-y-0 border border-gray-100">
                    {identitas.map((item, i) => (
                      <div key={item.label} className={`flex gap-4 px-5 py-3.5 text-sm ${i % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                        <span className="text-gray-500 flex-none w-36">{item.label}</span>
                        <span className="text-gray-900 font-medium leading-relaxed">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 }}
                  className="relative h-72 overflow-hidden"
                >
                  <Image src="/images/gallery/gallery-01.jpg" alt="Pesantren Darussalam Bacan" fill className="object-cover" />
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }}>
                  <h2 className="text-2xl font-black text-gray-900 mb-5">Fasilitas Pesantren</h2>
                  <div className="grid grid-cols-2 gap-3">
                    {fasilitas.map((f, i) => (
                      <div key={i} className="flex gap-3 border border-gray-100 p-4 bg-gray-50">
                        <div className="w-8 h-8 bg-primary flex items-center justify-center flex-none">
                          <f.icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">{f.label}</p>
                          <p className="text-xs text-gray-500 mt-0.5">{f.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                  <div className="border border-gray-100 p-6 bg-gray-50">
                    <h3 className="font-bold text-gray-900 mb-3">Hubungi Kami</h3>
                    <div className="space-y-2.5 text-sm">
                      <div className="flex gap-2.5 items-start">
                        <MapPin className="w-4 h-4 text-primary flex-none mt-0.5" />
                        <span className="text-gray-600 leading-relaxed">Jl. Pesantren No. 05, RT 03, Desa Kupal, Kec. Bacan Selatan, Kab. Halmahera Selatan, Maluku Utara</span>
                      </div>
                      <div className="flex gap-2.5 items-center">
                        <Phone className="w-4 h-4 text-primary flex-none" />
                        <span className="text-gray-600">0822 9782 9892</span>
                      </div>
                      <div className="flex gap-2.5 items-center">
                        <Mail className="w-4 h-4 text-primary flex-none" />
                        <span className="text-gray-600">ponpesantren.darussalam@bacan.com</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation cards */}
        <section className="py-12 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">Pelajari Lebih Lanjut</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: "Sejarah Berdiri", href: "/tentang/sejarah", desc: "Perjalanan sejak 2018" },
                { label: "Visi & Misi", href: "/tentang/visi-misi", desc: "1 Desa 1 Rumah Qur'an" },
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
