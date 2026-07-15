"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"
import type { Article } from "@/lib/data"

const ALL_CATEGORIES = ["Semua", "Prestasi", "Kegiatan", "Kisah Nyata", "Laporan", "Pengumuman", "Program"]

export function KabarYatimClient({ articles }: { articles: Article[] }) {
  const [activeCategory, setActiveCategory] = useState("Semua")

  const categories = ["Semua", ...Array.from(new Set(articles.map((a) => a.category)))]
  const filtered = activeCategory === "Semua" ? articles : articles.filter((a) => a.category === activeCategory)
  const featured = filtered.find((a) => a.featured) ?? filtered[0]
  const rest = filtered.filter((a) => a.id !== featured?.id)

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Berita & Kegiatan"
          subtitle="Kabar terbaru, cerita santri, dan kegiatan yang berlangsung di Pondok Pesantren Darussalam Bacan."
          crumbs={[{ label: "Berita & Kegiatan" }]}
          accent="Kabar Terkini"
        />

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap gap-2 mb-10"
            >
              {categories.map((cat, i) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 text-xs font-semibold border transition-colors ${
                    activeCategory === cat
                      ? "border-primary bg-primary text-white"
                      : "border-gray-200 text-gray-500 hover:border-primary hover:text-primary bg-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>

            {articles.length === 0 && (
              <p className="text-gray-400 text-center py-16 text-sm">Belum ada artikel yang dipublikasikan.</p>
            )}

            {featured && (
              <motion.div
                key={featured.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 border border-gray-100 overflow-hidden"
              >
                <div className="relative h-64 lg:h-auto min-h-[280px]">
                  <Image src={featured.image} alt={featured.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1">
                    {featured.category}
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-gray-400 text-xs mb-4">
                    <Calendar className="w-3 h-3" />
                    <span>{featured.date}</span>
                    <span className="text-gray-200">·</span>
                    <span className="text-primary font-semibold">Artikel Utama</span>
                  </div>
                  <h2 className="text-2xl font-black text-gray-900 mb-4 leading-tight">{featured.title}</h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{featured.excerpt}</p>
                  <button className="self-start flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all">
                    Baca Selengkapnya <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {rest.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {rest.map((article, i) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.08 }}
                    className="border border-gray-100 overflow-hidden group hover:border-primary transition-colors"
                  >
                    <div className="relative h-44 overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-2 py-0.5">
                        {article.category}
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-3">
                        <Calendar className="w-3 h-3" />
                        <span>{article.date}</span>
                      </div>
                      <h3 className="font-bold text-gray-900 text-sm leading-snug mb-3 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">{article.excerpt}</p>
                      <button className="mt-4 flex items-center gap-1.5 text-primary text-xs font-semibold hover:gap-2.5 transition-all">
                        Baca Selengkapnya <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="py-14 bg-brand-dark">
          <div className="container mx-auto px-6 text-center max-w-xl">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
              <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-3">Kenali Lebih Dekat</p>
              <h2 className="text-2xl font-black text-white mb-4">Ingin Tahu Lebih Banyak?</h2>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Kunjungi profil pesantren kami atau hubungi langsung untuk informasi
                program, pendaftaran santri, dan kerjasama.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/kontak"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold text-sm px-8 py-3 hover:bg-primary/90 transition-colors"
                >
                  Hubungi Kami <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/tentang"
                  className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold text-sm px-8 py-3 hover:bg-white/10 transition-colors"
                >
                  Profil Pesantren
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
