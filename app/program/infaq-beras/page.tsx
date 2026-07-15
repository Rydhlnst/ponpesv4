"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { ProgramSidebar } from "@/components/program-sidebar"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Wheat } from "lucide-react"

const options = [
  {
    amount: "10 Kg",
    title: "Infaq Kecil",
    desc: "Mencukupi kebutuhan 1–2 hari makan santri",
    price: "± Rp 130.000",
  },
  {
    amount: "25 Kg",
    title: "Infaq Sedang",
    desc: "Mencukupi kebutuhan 3–4 hari makan santri",
    price: "± Rp 325.000",
    featured: true,
  },
]

export default function InfaqBerasPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Infaq Beras Rutin"
          subtitle="10 Kg atau 25 Kg beras per bulan — kebutuhan dasar yang paling dirasakan oleh 110 santri Darussalam Bacan setiap harinya."
          crumbs={[{ label: "Program" }, { label: "Infaq Beras" }]}
          accent="Infaq Rutin"
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
                  <p className="font-bold text-gray-800 text-base mb-1">
                    "Sedekah terbaik adalah yang memberikan manfaat langsung kepada orang yang membutuhkan."
                  </p>
                  <p className="text-sm text-gray-500">Infaq beras = kebutuhan nyata, dampak nyata.</p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>
                  <h2 className="text-2xl font-black text-gray-900 mb-4">Mengapa Beras?</h2>
                  <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
                    <p>
                      Beras adalah kebutuhan pangan utama setiap hari bagi <strong className="text-gray-900">110 santri</strong> yang
                      tinggal dan belajar di asrama Darussalam Bacan. Pesantren membutuhkan pasokan beras secara
                      rutin setiap bulan untuk memastikan seluruh santri dapat makan dengan layak.
                    </p>
                    <p>
                      Program infaq beras ini memungkinkan siapa saja untuk berkontribusi dalam bentuk yang paling
                      sederhana namun paling dirasakan manfaatnya — setiap butir beras yang Anda infaqkan menjadi
                      energi bagi para penghafal Qur'an untuk terus belajar.
                    </p>
                    <p>
                      Dari antara 110 santri, terdapat <strong className="text-gray-900">26 santri yatim</strong> yang tidak
                      memiliki kemampuan finansial sama sekali. Infaq beras Anda langsung dirasakan oleh mereka.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 }}
                  className="relative h-56 overflow-hidden"
                >
                  <Image src="/images/gallery/gallery-10.jpg" alt="Santri Darussalam Bacan" fill className="object-cover" />
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }}>
                  <h2 className="text-2xl font-black text-gray-900 mb-6">Pilih Jumlah Infaq</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {options.map((opt) => (
                      <div
                        key={opt.amount}
                        className={`border p-6 ${opt.featured ? "border-primary bg-primary/5" : "border-gray-100 bg-gray-50"}`}
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`w-9 h-9 flex items-center justify-center ${opt.featured ? "bg-primary" : "bg-gray-200"}`}>
                            <Wheat className={`w-4 h-4 ${opt.featured ? "text-white" : "text-gray-500"}`} />
                          </div>
                          {opt.featured && (
                            <span className="text-xs bg-primary text-white font-bold px-2 py-0.5">Dianjurkan</span>
                          )}
                        </div>
                        <p className="text-3xl font-black text-gray-900">{opt.amount}</p>
                        <p className={`font-semibold text-sm mt-0.5 ${opt.featured ? "text-primary" : "text-gray-600"}`}>{opt.title}</p>
                        <p className="text-xs text-gray-500 mt-2 leading-relaxed">{opt.desc}</p>
                        <p className="text-sm font-bold text-gray-700 mt-3">{opt.price}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 mt-3">
                    * Harga beras dapat bervariasi. Konfirmasi harga terkini via WhatsApp. Bisa kirim beras langsung atau via transfer uang.
                  </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                  <h2 className="text-2xl font-black text-gray-900 mb-4">Cara Berinfaq Beras</h2>
                  <div className="space-y-3">
                    {[
                      { n: "01", t: "Transfer atau Kirim Langsung", d: "Infaq bisa berupa transfer uang ke rekening pesantren, atau pengiriman beras langsung ke alamat pesantren di Desa Kupal, Bacan Selatan, Halmahera Selatan." },
                      { n: "02", t: "Konfirmasi via WhatsApp", d: "Hubungi 0822 9782 9892 untuk konfirmasi dan koordinasi pengiriman beras." },
                      { n: "03", t: "Rutin Setiap Bulan", d: "Infaq rutin bulanan sangat dianjurkan agar pesantren dapat merencanakan kebutuhan pangan dengan baik." },
                    ].map((s) => (
                      <div key={s.n} className="flex gap-5 p-5 border border-gray-100">
                        <span className="text-4xl font-black text-gray-100 leading-none select-none w-12 flex-none">{s.n}</span>
                        <div>
                          <h3 className="font-bold text-gray-900 mb-1 text-sm">{s.t}</h3>
                          <p className="text-sm text-gray-500 leading-relaxed">{s.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <ProgramSidebar
                    amount="10 / 25 Kg"
                    amountNote="Pilih sesuai kemampuan. Rutin setiap bulan lebih utama daripada sekali banyak."
                    waMessage="Assalamualaikum, saya ingin berinfaq beras untuk santri Pesantren Darussalam Bacan. Mohon informasinya."
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
