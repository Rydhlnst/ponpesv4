"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Phone, ArrowRight, MapPin } from "lucide-react"
import Link from "next/link"

export function DonateBanner() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="bg-primary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Left: text */}
          <div className="py-16 lg:py-20 lg:pr-16 border-b lg:border-b-0 lg:border-r border-primary-foreground/20">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              className="flex items-center gap-2 mb-5"
            >
              <div className="w-6 h-0.5 bg-primary-foreground/60" />
              <span className="text-primary-foreground/60 text-xs font-semibold uppercase tracking-widest">
                Jalin Silaturahmi
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-black text-white leading-tight mb-5"
            >
              Kunjungi atau<br />Dukung Pesantren Kami
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-primary-foreground/80 text-base leading-relaxed max-w-md"
            >
              Darussalam Bacan terbuka untuk kunjungan, kerjasama, dan kemitraan.
              Jika Anda ingin mengenal pesantren kami lebih dekat atau turut berpartisipasi
              dalam program yang kami jalankan, hubungi kami kapan saja.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.28 }}
              className="flex items-start gap-2 mt-6 text-primary-foreground/60 text-sm"
            >
              <MapPin className="w-4 h-4 flex-none mt-0.5" />
              <span>Desa Kupal, Kec. Bacan Selatan, Kab. Halmahera Selatan, Maluku Utara</span>
            </motion.div>
          </div>

          {/* Right: actions */}
          <div className="py-16 lg:py-20 lg:pl-16 flex flex-col justify-center gap-4">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="/kontak"
                className="flex items-center justify-between w-full bg-white text-primary hover:bg-white/90 transition-colors h-14 px-8 font-bold text-base"
              >
                <span className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Hubungi Kami
                </span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.38 }}
            >
              <Link
                href="/program/tahfizh"
                className="flex items-center justify-between w-full border border-white/40 text-white hover:bg-white/10 hover:border-white transition-colors h-14 px-8 text-base font-semibold"
              >
                <span>Lihat Program Kami</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
