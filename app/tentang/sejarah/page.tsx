"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const timeline = [
  {
    year: "2018",
    period: "Januari",
    title: "Pendirian Pesantren",
    desc: "Pondok Pesantren Darussalam Bacan resmi berdiri pada 8 Januari 2018. Didirikan di atas lahan yang diwakafkan di Desa Kupal, Kecamatan Bacan Selatan, Kabupaten Halmahera Selatan oleh Yahya Hi Kasim, S.Pd bersama sejumlah tokoh masyarakat Pulau Bacan.",
    image: "/images/gallery/gallery-05.jpg",
    highlight: true,
  },
  {
    year: "2018",
    period: "Pertengahan",
    title: "Penerimaan Santri Pertama",
    desc: "Pesantren mulai menerima santri angkatan pertama. Kegiatan belajar diselenggarakan dengan sederhana namun penuh semangat. Program tahfizh Al-Qur'an menjadi unggulan utama sejak hari pertama.",
    image: null,
    highlight: false,
  },
  {
    year: "2019",
    period: "Tahun Kedua",
    title: "Pembukaan Program Formal MTs",
    desc: "Pesantren mulai menyelenggarakan pendidikan formal tingkat MTs (setara SMP) agar santri mendapat ijazah formal. Jumlah santri terus bertambah dari berbagai daerah di Pulau Bacan dan sekitarnya.",
    image: "/images/gallery/gallery-09.jpg",
    highlight: false,
  },
  {
    year: "2020",
    period: "Pandemi",
    title: "Bertahan di Tengah Ujian",
    desc: "Pandemi Covid-19 menjadi ujian berat, namun Darussalam Bacan tetap beroperasi. Santri yang tidak bisa pulang tetap tinggal dan melanjutkan hafalan. Pesantren membuktikan diri sebagai tempat berlindung yang aman dan bermakna.",
    image: null,
    highlight: false,
  },
  {
    year: "2021",
    period: "Pengembangan",
    title: "Penambahan Program MA & Wakaf Lahan",
    desc: "Dibuka program pendidikan tingkat MA (setara SMA). Bertambah pula lahan wakaf yang diterima pesantren, memperluas area untuk kegiatan peternakan dan pertanian sebagai bagian dari kemandirian ekonomi.",
    image: "/images/gallery/gallery-13.jpg",
    highlight: false,
  },
  {
    year: "2022",
    period: "Kemandirian",
    title: "Rintisan Usaha Air Galon",
    desc: "Pesantren merintis usaha isi ulang air galon sebagai langkah pertama program kemandirian ekonomi. Dikelola langsung oleh pengurus pesantren, usaha ini mulai memberikan kontribusi nyata bagi pendapatan pesantren.",
    image: "/images/gallery/gallery-18.jpg",
    highlight: false,
  },
  {
    year: "2023",
    period: "Pertumbuhan",
    title: "Berkembang ke 100+ Santri",
    desc: "Jumlah santri aktif melampaui 100 orang. Program Kafil Yatim resmi diluncurkan untuk memastikan 26 santri yatim dapat terus belajar tanpa biaya. Donatur dari berbagai penjuru Indonesia mulai bergabung.",
    image: "/images/gallery/gallery-22.jpg",
    highlight: false,
  },
  {
    year: "2024–2025",
    period: "Ekspansi",
    title: "Wakaf Produktif & Masjid Putri",
    desc: "Pesantren memperluas program wakaf produktif dengan hewan ternak: 4 sapi, 20 kambing, 90+ bebek entok, dan 80 merpati. Lahan pertanian seluas 1 Ha mulai diolah. Pembangunan Masjid Komplek Putri dimulai.",
    image: "/images/gallery/gallery-25.jpg",
    highlight: false,
  },
  {
    year: "2026",
    period: "Sekarang",
    title: "Menuju Pesantren Mandiri Total",
    desc: "Darussalam Bacan kini menjadi salah satu pesantren terkemuka di Pulau Bacan. Dengan visi '1 Desa 1 Rumah Qur'an Mandiri Ekonomi', pesantren terus berkembang. Target selanjutnya: produksi air kemasan Rp 200 Juta untuk kemandirian total.",
    image: "/images/gallery/gallery-29.jpg",
    highlight: true,
  },
]

export default function SejarahPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Sejarah Berdiri"
          subtitle="Dari sebuah tekad sederhana di Pulau Bacan, Darussalam Bacan kini tumbuh menjadi pesantren yang melayani lebih dari 110 santri."
          crumbs={[{ label: "Tentang", href: "/tentang" }, { label: "Sejarah Berdiri" }]}
          accent="Sejak 2018"
        />

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-gray-500 text-sm leading-relaxed mb-14 text-center"
            >
              Perjalanan panjang penuh pengorbanan. Setiap tahun membawa cerita perjuangan, pertumbuhan,
              dan keberkahan bagi ribuan santri dan keluarga di Pulau Bacan.
            </motion.p>

            {/* Timeline */}
            <div className="relative pl-8">
              {/* Vertical line */}
              <div className="absolute left-0 top-2 bottom-2 w-px bg-gray-100" />

              <div className="space-y-12">
                {timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    className="relative"
                  >
                    {/* Dot */}
                    <div
                      className={`absolute -left-8 top-1.5 w-3 h-3 -translate-x-1/2 ${
                        item.highlight ? "bg-primary" : "bg-gray-300"
                      } border-2 border-white`}
                    />

                    {/* Year badge */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs font-mono font-bold ${item.highlight ? "text-primary" : "text-gray-400"}`}>
                        {item.year}
                      </span>
                      <span className="text-xs text-gray-300">·</span>
                      <span className="text-xs text-gray-400">{item.period}</span>
                    </div>

                    <h3 className={`font-black text-gray-900 mb-2 ${item.highlight ? "text-xl" : "text-base"}`}>
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>

                    {item.image && (
                      <div className="relative h-44 mt-4 overflow-hidden">
                        <Image src={item.image} alt={item.title} fill className="object-cover" />
                      </div>
                    )}
                  </motion.div>
                ))}
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
