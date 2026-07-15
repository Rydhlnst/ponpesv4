"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const pengurus = [
  { name: "Sekretaris Yayasan", role: "Administrasi & Kesekretariatan" },
  { name: "Bendahara Yayasan", role: "Keuangan & Pelaporan" },
  { name: "Kepala Bidang Pendidikan", role: "Kurikulum MTs & MA" },
  { name: "Kepala Bidang Tahfizh", role: "Program Tahfizh Al-Qur'an" },
  { name: "Kepala Bidang Usaha", role: "Kemandirian Ekonomi Pesantren" },
]

const unitPendidikan = [
  { unit: "MTs Darussalam Bacan", desc: "Pendidikan formal setara SMP dengan integrasi kurikulum pesantren" },
  { unit: "MA Darussalam Bacan", desc: "Pendidikan formal setara SMA dengan program tahfizh intensif" },
  { unit: "Program Tahfizh", desc: "Kelas khusus hafalan Al-Qur'an 30 juz untuk santri putra dan putri" },
  { unit: "Madrasah Diniyah", desc: "Kajian kitab kuning, fiqih, akidah, dan bahasa Arab" },
]

export default function StrukturPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Struktur Organisasi"
          subtitle="Kepengurusan Pondok Pesantren Darussalam Bacan yang berkomitmen mencetak generasi Qur'ani mandiri di Halmahera Selatan."
          crumbs={[{ label: "Tentang", href: "/tentang" }, { label: "Struktur Organisasi" }]}
          accent="Kepengurusan"
        />

        {/* Pimpinan Utama — Hero Cards */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 mb-10"
            >
              <div className="w-6 h-0.5 bg-primary" />
              <span className="text-primary text-xs font-semibold uppercase tracking-widest">Pimpinan Utama</span>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto">
              {/* Pimpinan Yayasan */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 }}
                className="group relative border border-gray-100 bg-gray-50 p-8 text-center overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
                <div className="w-20 h-20 bg-primary/10 border-2 border-primary/20 flex items-center justify-center mx-auto mb-5">
                  <span className="text-primary text-2xl font-black">Y</span>
                </div>
                <h3 className="font-black text-gray-900 text-xl leading-tight mb-1">
                  Yahya Hi Kasim, S.Pd
                </h3>
                <p className="text-primary font-semibold text-sm mb-4">Pimpinan Yayasan</p>
                <div className="w-8 h-0.5 bg-primary/30 mx-auto mb-4" />
                <p className="text-gray-500 text-sm leading-relaxed">
                  Pendiri dan pimpinan yayasan Pondok Pesantren Darussalam Bacan. Inisiator dan pemangku
                  kebijakan utama sejak berdirinya pesantren pada 8 Januari 2018.
                </p>
              </motion.div>

              {/* Pimpinan Pesantren — dengan foto */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.14 }}
                className="group relative overflow-hidden border-2 border-primary shadow-lg shadow-primary/10"
              >
                {/* Foto */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src="/images/pimpinan.jpg"
                    alt="KH. Asep Sofyan, Lc., M.Pd.I — Pimpinan Pesantren Darussalam Bacan"
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* gradient bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/30 to-transparent" />

                  {/* Badge di atas foto */}
                  <div className="absolute top-3 right-3 bg-primary text-white text-xs font-bold px-3 py-1">
                    Pimpinan Pesantren
                  </div>
                </div>

                {/* Info di bawah foto */}
                <div className="bg-brand-dark px-6 py-5">
                  <h3 className="font-black text-white text-xl leading-tight mb-1">
                    KH. Asep Sofyan, Lc., M.Pd.I
                  </h3>
                  <p className="text-primary font-semibold text-sm mb-3">Pimpinan Pesantren</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Pengasuh dan pimpinan pesantren yang bertanggung jawab atas pendidikan agama,
                    kurikulum, dan pembinaan santri sehari-hari.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Pengurus */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }} className="mb-14">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-0.5 bg-primary" />
                <span className="text-primary text-xs font-semibold uppercase tracking-widest">Pengurus Yayasan</span>
              </div>
              <div className="space-y-0 border border-gray-100 overflow-hidden max-w-2xl">
                {pengurus.map((p, i) => (
                  <div key={i} className={`flex gap-4 px-6 py-4 ${i % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                    <div className="w-1.5 h-1.5 bg-primary flex-none mt-2" />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{p.name}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{p.role}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-3">
                * Nama pengurus lengkap tersedia. Hubungi pesantren untuk informasi lebih lanjut.
              </p>
            </motion.div>

            {/* Tenaga Pendidik */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22 }} className="mb-14">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-0.5 bg-primary" />
                <span className="text-primary text-xs font-semibold uppercase tracking-widest">Tenaga Pendidik</span>
              </div>
              <div className="border border-gray-100 bg-gray-50 p-8 text-center mb-6 max-w-sm">
                <p className="text-5xl font-black text-primary">21+</p>
                <p className="text-gray-700 font-semibold mt-2">Guru & Pengasuh Aktif</p>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                  Guru agama, guru mata pelajaran formal, musyrif/musyrifah asrama, dan pengasuh tahfizh.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl">
                {[
                  { t: "Guru Agama & Kitab", d: "Fiqih, Akidah, Tafsir, Hadits, Bahasa Arab, Nahwu Shorof" },
                  { t: "Guru Mata Pelajaran Formal", d: "Matematika, IPA, IPS, B.Indonesia, B.Inggris, PKn" },
                  { t: "Musyrif / Musyrifah Asrama", d: "Pembina santri putra dan putri di asrama 24 jam" },
                  { t: "Pengasuh Tahfizh", d: "Pengampu hafalan Al-Qur'an & murajaah harian" },
                ].map((item, i) => (
                  <div key={i} className="border border-gray-100 p-5 bg-gray-50">
                    <p className="font-bold text-gray-900 text-sm mb-1">{item.t}</p>
                    <p className="text-xs text-gray-500">{item.d}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Unit Pendidikan */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.26 }}>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-0.5 bg-primary" />
                <span className="text-primary text-xs font-semibold uppercase tracking-widest">Unit Pendidikan</span>
              </div>
              <div className="space-y-3 max-w-2xl">
                {unitPendidikan.map((u, i) => (
                  <div key={i} className="flex gap-4 border border-gray-100 p-5 bg-gray-50">
                    <span className="text-xs font-mono text-primary font-bold flex-none mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">{u.unit}</p>
                      <p className="text-xs text-gray-500 mt-1 leading-relaxed">{u.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-12 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">Tentang Kami</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: "Profil Pesantren", href: "/tentang", desc: "Identitas & fasilitas" },
                { label: "Sejarah Berdiri", href: "/tentang/sejarah", desc: "Perjalanan sejak 2018" },
                { label: "Visi & Misi", href: "/tentang/visi-misi", desc: "1 Desa 1 Rumah Qur'an" },
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
