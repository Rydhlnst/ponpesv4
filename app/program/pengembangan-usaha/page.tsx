"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { ProgramSidebar } from "@/components/program-sidebar"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Droplets, TrendingUp, Package, Users } from "lucide-react"

const phases = [
  { icon: Droplets, n: "01", title: "Isi Ulang Galon (Berjalan)", desc: "Usaha isi ulang air galon sudah berjalan. Pendapatan digunakan untuk operasional harian pesantren." },
  { icon: Package, n: "02", title: "Air Kemasan (Target)", desc: "Pengembangan ke produk air minum kemasan botol dan gelas untuk distribusi lebih luas di Pulau Bacan." },
  { icon: TrendingUp, n: "03", title: "Distribusi & Pemasaran", desc: "Membangun jaringan distribusi di Bacan dan sekitarnya. Keuntungan kembali ke pesantren 100%." },
  { icon: Users, n: "04", title: "Lapangan Kerja Alumni", desc: "Memberikan lapangan kerja bagi alumni pesantren sebagai operator produksi dan distributor." },
]

export default function PengembanganUsahaPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Pengembangan Usaha Air Kemasan"
          subtitle="Pesantren mandiri bukan mimpi. Dengan Rp 200.000.000, Darussalam Bacan akan memiliki usaha air kemasan yang memberi manfaat jangka panjang."
          crumbs={[{ label: "Program" }, { label: "Kemandirian Usaha" }]}
          accent="Usaha Mandiri"
        />

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-10">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border-l-4 border-primary bg-gray-50 px-6 py-5"
                >
                  <p className="font-bold text-gray-800 text-base mb-2">Visi Kemandirian Pesantren</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    <em>"Mencetak 1 Desa 1 Rumah Qur'an Mandiri Ekonomi"</em> — visi besar Darussalam Bacan.
                    Pesantren yang mandiri secara ekonomi tidak akan bergantung pada donasi untuk terus beroperasi.
                  </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>
                  <h2 className="text-2xl font-black text-gray-900 mb-4">Latar Belakang</h2>
                  <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
                    <p>
                      Darussalam Bacan telah memulai usaha isi ulang air galon sebagai langkah pertama menuju
                      kemandirian ekonomi. Usaha ini berjalan dan berkontribusi pada pendapatan pesantren,
                      namun kapasitasnya masih sangat terbatas.
                    </p>
                    <p>
                      Tantangan utama saat ini adalah distribusi dan kendaraan operasional yang belum memadai.
                      Pesantren membutuhkan modal untuk mengembangkan usaha ke produk air kemasan botol dan gelas
                      yang memiliki pasar lebih luas dan margin lebih baik.
                    </p>
                    <p>
                      Pulau Bacan dan kawasan Halmahera Selatan memiliki potensi pasar yang besar untuk produk
                      air minum kemasan. Dengan modal yang cukup, pesantren bisa memiliki sumber pendapatan
                      tetap yang membiayai operasional tanpa bergantung pada donasi eksternal.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 }}
                >
                  <h2 className="text-2xl font-black text-gray-900 mb-4">Foto Kegiatan Usaha Mandiri</h2>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="relative h-52 overflow-hidden col-span-2">
                      <Image src="/images/usaha/usaha-01.jpg" alt="Panen tomat pesantren Darussalam Bacan" fill className="object-cover" />
                    </div>
                    <div className="relative h-36 overflow-hidden">
                      <Image src="/images/usaha/usaha-02.jpg" alt="Santri memilah hasil panen tomat" fill className="object-cover" />
                    </div>
                    <div className="relative h-36 overflow-hidden">
                      <Image src="/images/usaha/usaha-03.jpg" alt="Hasil panen tomat pesantren siap jual" fill className="object-cover" />
                    </div>
                    <div className="relative h-36 overflow-hidden">
                      <Image src="/images/usaha/usaha-04.jpg" alt="Lahan pertanian buah naga pesantren" fill className="object-cover" />
                    </div>
                    <div className="relative h-36 overflow-hidden">
                      <Image src="/images/usaha/usaha-05.jpg" alt="Kebun sayur pesantren Darussalam Bacan" fill className="object-cover" />
                    </div>
                    <div className="relative h-52 overflow-hidden col-span-2">
                      <Image src="/images/usaha/usaha-06.jpg" alt="Kebun kangkung dan sayuran pesantren" fill className="object-cover" />
                    </div>
                    <div className="relative h-36 overflow-hidden">
                      <Image src="/images/usaha/usaha-07.jpg" alt="Hasil panen kangkung siap jual" fill className="object-cover" />
                    </div>
                    <div className="relative h-36 overflow-hidden">
                      <Image src="/images/usaha/usaha-08.jpg" alt="Ikat kangkung hasil kebun pesantren" fill className="object-cover" />
                    </div>
                    <div className="relative h-36 overflow-hidden">
                      <Image src="/images/usaha/usaha-09.jpg" alt="Panen timun pesantren Darussalam Bacan" fill className="object-cover" />
                    </div>
                    <div className="relative h-36 overflow-hidden">
                      <Image src="/images/usaha/usaha-10.jpg" alt="Timbang timun hasil panen pesantren" fill className="object-cover" />
                    </div>
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }}>
                  <h2 className="text-2xl font-black text-gray-900 mb-6">Rencana Pengembangan</h2>
                  <div className="space-y-3">
                    {phases.map((p) => (
                      <div key={p.n} className="flex gap-5 border border-gray-100 p-5">
                        <div className="flex-none w-10 h-10 bg-primary flex items-center justify-center">
                          <p.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-mono text-gray-400">{p.n}</span>
                            <h3 className="font-bold text-gray-900 text-sm">{p.title}</h3>
                          </div>
                          <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                  <h2 className="text-2xl font-black text-gray-900 mb-4">Kebutuhan Dana</h2>
                  <div className="border border-gray-100 p-6 bg-gray-50">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-600">Total Kebutuhan</span>
                      <span className="text-2xl font-black text-primary">Rp 200.000.000</span>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600">
                      {[
                        { item: "Mesin produksi air kemasan", val: "Rp 80.000.000" },
                        { item: "Kendaraan distribusi", val: "Rp 70.000.000" },
                        { item: "Bahan baku & kemasan awal", val: "Rp 30.000.000" },
                        { item: "Perizinan & operasional awal", val: "Rp 20.000.000" },
                      ].map((i) => (
                        <div key={i.item} className="flex justify-between border-b border-gray-100 pb-2">
                          <span>{i.item}</span>
                          <span className="font-semibold text-gray-900">{i.val}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-gray-400 mt-4">
                      * Estimasi kebutuhan. Donasi berapapun sangat berarti. Bisa dicicil sesuai kemampuan.
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <ProgramSidebar
                    amount="Seikhlasnya"
                    amountNote="Target total Rp 200.000.000. Setiap donasi dicatat dan dilaporkan secara transparan."
                    waMessage="Assalamualaikum, saya ingin berdonasi untuk program Pengembangan Usaha Air Kemasan Pesantren Darussalam Bacan."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">Program Lainnya</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: "Kafil Yatim", href: "/program/kafil-yatim", desc: "Rp 800.000/bulan" },
                { label: "Wakaf Masjid", href: "/program/wakaf-masjid", desc: "Rp 75.000/sak" },
                { label: "Wakaf Produktif", href: "/program/wakaf-produktif", desc: "Sapi & Kambing" },
                { label: "Infaq Beras", href: "/program/infaq-beras", desc: "10–25 Kg/bulan" },
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
