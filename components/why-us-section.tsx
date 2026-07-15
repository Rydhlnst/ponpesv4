"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ShieldCheck, Zap, Award, BookOpen } from "lucide-react"

const reasons = [
  {
    icon: BookOpen,
    num: "01",
    title: "Kurikulum Tahfizh & Formal Terpadu",
    desc: "Santri menghafal Al-Qur'an 30 juz sekaligus menempuh pendidikan formal MTs dan MA. Dua jalur, satu tujuan: generasi yang utuh.",
  },
  {
    icon: Zap,
    num: "02",
    title: "Pesantren Mandiri Ekonomi",
    desc: "Memiliki usaha air galon, lahan pertanian 1 Ha, serta peternakan sapi, kambing, dan bebek. Mandiri ekonomi bukan sekadar wacana.",
  },
  {
    icon: ShieldCheck,
    num: "03",
    title: "Lembaga Resmi & Terpercaya",
    desc: "Terdaftar resmi dengan SK Kemenag, akta notaris, NPWP, dan NSPP. Berdiri di atas lahan wakaf ±20 Ha di Pulau Bacan.",
  },
  {
    icon: Award,
    num: "04",
    title: "Kepedulian Sosial yang Nyata",
    desc: "26 santri yatim dibina penuh tanpa biaya. Pesantren hadir bukan hanya untuk keluarga mampu, tapi untuk semua anak yang layak belajar.",
  },
]

export function WhyUsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 items-start">
          {/* Left label */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
            >
              <div className="w-8 h-0.5 bg-primary mb-4" />
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Keunggulan Kami</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 leading-tight">
                Darussalam Bacan dalam Angka & Fakta
              </h2>
            </motion.div>
          </div>

          {/* Right cards */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 gap-0 border border-gray-200">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08 }}
                className="group p-5 sm:p-8 border-b border-r border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-none">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-primary flex items-center justify-center">
                      <r.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <p className="text-primary/50 text-xs font-mono mb-1">{r.num}</p>
                    <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5 sm:mb-2 group-hover:text-primary transition-colors">
                      {r.title}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
