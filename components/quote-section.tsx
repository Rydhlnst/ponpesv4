"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export function QuoteSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="py-24 bg-green-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            {/* Left: decorative line + label */}
            <div className="md:col-span-3 flex md:flex-col items-center md:items-start gap-4">
              <motion.div
                initial={{ scaleY: 0 }}
                animate={inView ? { scaleY: 1 } : {}}
                transition={{ duration: 0.6 }}
                className="hidden md:block w-0.5 h-24 bg-primary/30 origin-top"
              />
              <div>
                <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-1">Hadits</p>
                <p className="text-gray-400 text-xs">HR. Bukhari & Muslim</p>
              </div>
            </div>

            {/* Right: quote content */}
            <div className="md:col-span-9">
              {/* Arabic */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                className="text-4xl md:text-5xl text-gray-900 font-bold mb-8 leading-relaxed text-right"
                style={{ fontFamily: "serif", direction: "rtl" }}
              >
                أَنَا وَكَافِلُ الْيَتِيمِ فِي الْجَنَّةِ كَهَاتَيْنِ
              </motion.p>

              {/* Separator */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="w-full h-px bg-gray-200 mb-8 origin-left"
              />

              {/* Translation */}
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="text-lg md:text-xl text-gray-700 leading-relaxed"
              >
                "Aku dan pengasuh anak yatim akan berada di surga seperti ini"
                <span className="text-primary font-semibold"> — seraya beliau menunjukkan jari telunjuk dan jari tengah.</span>
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
