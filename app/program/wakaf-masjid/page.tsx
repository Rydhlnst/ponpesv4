"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { ProgramSidebar } from "@/components/program-sidebar"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Building2, Package, Layers, Droplets } from "lucide-react"

const wakafItems = [
  { icon: Package, label: "1 Sak Semen", amount: "Rp 75.000" },
  { icon: Layers, label: "10 Sak Semen", amount: "Rp 750.000" },
  { icon: Building2, label: "50 Sak Semen", amount: "Rp 3.750.000" },
  { icon: Droplets, label: "Seikhlasnya", amount: "Rp berapa saja" },
]

export default function WakafMasjidPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Wakaf Masjid Komplek Putri"
          subtitle="Satu sak semen senilai Rp 75.000 sudah menjadi bagian dari masjid yang akan menjadi pusat ibadah ribuan santri putri."
          crumbs={[{ label: "Program" }, { label: "Wakaf & Pembangunan" }]}
          accent="Wakaf"
        />

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main */}
              <div className="lg:col-span-2 space-y-10">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border-l-4 border-primary bg-gray-50 px-6 py-5"
                >
                  <p className="text-lg font-bold text-gray-800 mb-2">
                    "Barangsiapa membangun masjid karena Allah, maka Allah akan membangunkan untuknya sebuah rumah di surga."
                  </p>
                  <p className="text-sm text-gray-500">(HR. Bukhari & Muslim)</p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>
                  <h2 className="text-2xl font-black text-gray-900 mb-4">Tentang Program Ini</h2>
                  <div className="space-y-3 text-gray-600 leading-relaxed text-sm">
                    <p>
                      Pondok Pesantren Darussalam Bacan sedang membangun masjid khusus untuk komplek putri.
                      Masjid ini akan menjadi pusat ibadah, pembelajaran Al-Qur'an, dan kegiatan keislaman
                      bagi puluhan santri putri yang selama ini belum memiliki fasilitas ibadah yang layak.
                    </p>
                    <p>
                      Pesantren yang berdiri di atas lahan <strong className="text-gray-900">5,5 Ha</strong> di
                      Desa Kupal, Bacan Selatan, Halmahera Selatan ini tengah berkembang pesat dengan 60 santri
                      putri aktif yang membutuhkan ruang ibadah yang representatif.
                    </p>
                    <p>
                      Setiap sak semen yang Anda wakafkan adalah pahala yang terus mengalir selama masjid itu
                      berdiri dan digunakan untuk beribadah. Wakaf ini adalah amal jariyah terbaik.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 }}
                  className="relative h-64 overflow-hidden"
                >
                  <Image src="/images/gallery/gallery-08.jpg" alt="Pesantren Darussalam Bacan" fill className="object-cover" />
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }}>
                  <h2 className="text-2xl font-black text-gray-900 mb-6">Pilih Nominal Wakaf</h2>
                  <div className="grid grid-cols-2 gap-3">
                    {wakafItems.map((item, i) => (
                      <div key={i} className="border border-gray-100 p-5 bg-gray-50 hover:border-primary hover:bg-white transition-colors group">
                        <div className="w-9 h-9 bg-primary flex items-center justify-center mb-3">
                          <item.icon className="w-4 h-4 text-white" />
                        </div>
                        <p className="font-bold text-gray-900 text-sm group-hover:text-primary transition-colors">{item.label}</p>
                        <p className="text-primary font-black text-lg mt-0.5">{item.amount}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                  <h2 className="text-2xl font-black text-gray-900 mb-4">Mengapa Ini Penting?</h2>
                  <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
                    <p>Saat ini santri putri Darussalam Bacan belum memiliki masjid sendiri di komplek mereka. Ini menyulitkan pelaksanaan shalat berjamaah, kajian, dan kegiatan keislaman secara optimal.</p>
                    <p>Dengan selesainya masjid ini, diharapkan aktivitas ibadah dan pembelajaran Qur'an akan semakin intensif dan terjadwal dengan baik.</p>
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <ProgramSidebar
                    amount="Rp 75.000"
                    amountNote="per sak semen. Boleh wakafkan berapa sak sesuai kemampuan."
                    waMessage="Assalamualaikum, saya ingin berwakaf untuk pembangunan Masjid Komplek Putri Darussalam Bacan."
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
                { label: "Wakaf Produktif", href: "/program/wakaf-produktif", desc: "Sapi & Kambing" },
                { label: "Infaq Beras", href: "/program/infaq-beras", desc: "10–25 Kg/bulan" },
                { label: "Pengembangan Usaha", href: "/program/pengembangan-usaha", desc: "Air Kemasan" },
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
