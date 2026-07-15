"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { BookOpen, Users, Clock, Heart, CheckCircle2 } from "lucide-react"

const materi = [
  { no: "01", label: "Iqra 1–6", desc: "Belajar membaca huruf hijaiyah secara bertahap hingga lancar mengeja Al-Qur'an." },
  { no: "02", label: "Tajwid Dasar", desc: "Hukum bacaan dasar: mad, nun sukun, mim sukun, dan waqaf yang benar." },
  { no: "03", label: "Hafalan Juz Amma", desc: "Menghafal surat-surat pendek Juz 30 sebagai bekal ibadah sehari-hari." },
  { no: "04", label: "Doa Harian", desc: "Hafalan doa sehari-hari: makan, tidur, masuk masjid, keluar rumah, dan lainnya." },
  { no: "05", label: "Akhlak & Adab", desc: "Penanaman nilai sopan santun, jujur, dan hormat kepada orang tua dan guru." },
]

const keunggulan = [
  { icon: BookOpen, title: "Metode Iqra Terstruktur", desc: "Pembelajaran bertahap dengan metode Iqra yang terbukti efektif untuk segala usia." },
  { icon: Users, title: "Kelas Kecil & Intens", desc: "Rasio guru 1:5 memastikan setiap anak mendapat perhatian dan bimbingan penuh." },
  { icon: Clock, title: "Waktu Fleksibel", desc: "Kelas sore hari sehingga tidak mengganggu jadwal sekolah formal anak." },
  { icon: Heart, title: "Gratis untuk Yatim", desc: "Anak yatim dan dhuafa mendapat layanan TPQ secara gratis tanpa biaya apapun." },
]

export default function TPQPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="TPQ Darussalam"
          subtitle="Taman Pendidikan Al-Qur'an — tempat anak-anak belajar membaca Al-Qur'an dari nol dengan metode Iqra yang menyenangkan, dibimbing ustaz dan ustazah berpengalaman."
          crumbs={[{ label: "Program" }, { label: "TPQ" }]}
          accent="Program Pendidikan"
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
                      TPQ Darussalam hadir sebagai layanan pendidikan Al-Qur'an untuk masyarakat sekitar Desa Kupal
                      dan Kecamatan Bacan Selatan. Program ini terbuka untuk anak-anak usia
                      <strong className="text-gray-900"> 5–15 tahun</strong>, baik yang mukim di pesantren
                      maupun yang tinggal di luar pesantren.
                    </p>
                    <p>
                      Dengan metode Iqra yang telah terbukti selama puluhan tahun, anak-anak dibimbing dari
                      mengenal huruf hijaiyah hingga mampu membaca Al-Qur'an dengan lancar dan benar sesuai tajwid.
                    </p>
                    <p>
                      TPQ Darussalam juga menjadi pintu masuk bagi anak-anak yang ingin melanjutkan ke
                      <strong className="text-gray-900"> program tahfizh</strong> atau mendaftarkan diri sebagai
                      santri resmi di Pondok Pesantren Darussalam Bacan.
                    </p>
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>
                  <h2 className="text-2xl font-black text-gray-900 mb-5">Materi Pembelajaran</h2>
                  <div className="space-y-3">
                    {materi.map((m) => (
                      <div key={m.no} className="flex gap-4 border border-gray-100 p-4 bg-gray-50">
                        <span className="text-primary font-black text-sm font-mono flex-none">{m.no}</span>
                        <div>
                          <p className="font-bold text-gray-900 text-sm mb-0.5">{m.label}</p>
                          <p className="text-xs text-gray-500 leading-relaxed">{m.desc}</p>
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
                  <Image src="/images/gallery/gallery-35.jpg" alt="Kegiatan TPQ Darussalam Bacan" fill className="object-cover" />
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.14 }}>
                  <h2 className="text-2xl font-black text-gray-900 mb-5">Keunggulan TPQ</h2>
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
                  <h2 className="text-2xl font-black text-gray-900 mb-4">Yang Akan Dicapai</h2>
                  <div className="space-y-2">
                    {[
                      "Mampu membaca Al-Qur'an dengan lancar dan benar",
                      "Hafal Juz Amma (surat-surat pendek Juz 30)",
                      "Hafal doa-doa harian yang dipraktikkan setiap hari",
                      "Memiliki adab dan akhlak yang baik kepada sesama",
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
                    <p className="font-bold text-gray-900 text-sm mb-2">Cara Mendaftar</p>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">
                      Pendaftaran TPQ terbuka sepanjang tahun. Cukup datang langsung ke pesantren
                      atau hubungi kami untuk informasi jadwal dan kelas yang tersedia.
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
                { label: "SMP Tahfizh", href: "/program/smp-tahfizh", desc: "Lanjutan setelah TPQ" },
                { label: "Tahfizh Al-Qur'an", href: "/program/tahfizh", desc: "Hafalan 30 juz" },
                { label: "Majelis Taklim", href: "/program/majelis-taklim", desc: "Kajian rutin komunitas" },
                { label: "LKSA Panti Asuhan", href: "/program/lksa", desc: "Santunan anak yatim" },
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
