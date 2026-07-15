"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { ProgramSidebar } from "@/components/program-sidebar"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const ternak = [
  { emoji: "🐄", name: "Sapi", count: "4 ekor", desc: "Sapi perah dan potong untuk kemandirian pesantren" },
  { emoji: "🐐", name: "Kambing", count: "20 ekor", desc: "Kambing Etawa — susu dan daging untuk santri" },
  { emoji: "🦆", name: "Bebek Entok", count: "90+ ekor", desc: "Telur sebagai sumber protein harian" },
  { emoji: "🕊️", name: "Merpati", count: "80 ekor", desc: "Ternak merpati untuk pendapatan tambahan" },
]

export default function WakafProduktifPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Wakaf Produktif"
          subtitle="1 Santri 1 Sapi, 1 Santri 1 Kambing. Program wakaf hewan ternak yang hasilnya langsung dirasakan santri dan pesantren."
          crumbs={[{ label: "Program" }, { label: "Wakaf Produktif" }]}
          accent="Wakaf Produktif"
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
                  <p className="font-bold text-gray-800 text-lg mb-1">Program Wakaf Produktif</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Setiap hewan yang Anda wakafkan akan tercatat atas nama Anda. Hasilnya — susu, daging, telur, dan
                    anak ternak — sepenuhnya digunakan untuk kebutuhan santri dan kemandirian pesantren.
                  </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>
                  <h2 className="text-2xl font-black text-gray-900 mb-4">Konsep Program</h2>
                  <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
                    <p>
                      Darussalam Bacan memiliki lahan wakaf seluas <strong className="text-gray-900">20 Ha</strong> dan
                      lahan pertanian yang baru diolah seluas <strong className="text-gray-900">1 Ha</strong>. Lahan ini
                      menjadi fondasi program kemandirian ekonomi pesantren.
                    </p>
                    <p>
                      Program Wakaf Produktif mengajak masyarakat untuk membelikan satu ekor sapi atau kambing atas
                      nama seorang santri. Hasil ternak — anak hewan, susu, dan daging — menjadi sumber pendapatan
                      pesantren sekaligus pelajaran kewirausahaan bagi santri.
                    </p>
                    <p>
                      Ini bukan sekadar donasi biasa. Ini investasi jangka panjang yang membangun kemandirian
                      pesantren dan mewujudkan visi <em>"1 Desa 1 Rumah Qur'an Mandiri Ekonomi"</em>.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 }}
                  className="relative h-56 overflow-hidden"
                >
                  <Image src="/images/gallery/gallery-15.jpg" alt="Lahan Pesantren Darussalam Bacan" fill className="object-cover" />
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }}>
                  <h2 className="text-2xl font-black text-gray-900 mb-6">Inventaris Ternak Saat Ini</h2>
                  <div className="grid grid-cols-2 gap-3">
                    {ternak.map((t) => (
                      <div key={t.name} className="border border-gray-100 p-5 bg-gray-50">
                        <p className="text-3xl mb-2">{t.emoji}</p>
                        <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                        <p className="text-primary font-black text-lg">{t.count}</p>
                        <p className="text-xs text-gray-500 mt-1 leading-relaxed">{t.desc}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                  <h2 className="text-2xl font-black text-gray-900 mb-4">Manfaat Ganda</h2>
                  <div className="space-y-3">
                    {[
                      "Pahala jariyah yang terus mengalir selama hewan dimanfaatkan",
                      "Santri mendapat pelajaran berternak dan wirausaha secara langsung",
                      "Pesantren memiliki sumber pendapatan mandiri yang berkelanjutan",
                      "Mengurangi ketergantungan pada donasi untuk operasional harian",
                    ].map((b, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-primary flex items-center justify-center flex-none mt-0.5">
                          <span className="text-white text-xs font-bold">{i + 1}</span>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">{b}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <ProgramSidebar
                    amount="Seikhlasnya"
                    amountNote="1 ekor sapi ≈ Rp 8–12 Juta. 1 ekor kambing ≈ Rp 2–4 Juta. Hubungi kami untuk info harga terkini."
                    waMessage="Assalamualaikum, saya ingin berpartisipasi dalam program Wakaf Produktif (sapi/kambing) Pesantren Darussalam Bacan."
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
                { label: "Wakaf Masjid", href: "/program/wakaf-masjid", desc: "Rp 75.000/sak semen" },
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
