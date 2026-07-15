"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const partners = [
  { name: "Baznas", abbr: "BAZNAS" },
  { name: "LAZ Dompet Dhuafa", abbr: "Dompet Dhuafa" },
  { name: "Kemensos RI", abbr: "Kemensos" },
  { name: "Bank Syariah Indonesia", abbr: "BSI" },
  { name: "Yayasan Rumah Zakat", abbr: "Rumah Zakat" },
  { name: "Lazismu", abbr: "LAZISMU" },
  { name: "Pemkab Lampung Selatan", abbr: "Pemkab Lamsel" },
  { name: "MUI Lampung", abbr: "MUI Lampung" },
]

export function PartnersSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-8"
        >
          Dipercaya & Bermitra dengan
        </motion.p>

        {/* Marquee wrapper */}
        <div className="relative overflow-hidden border-t border-b border-gray-100">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="flex gap-0 w-max divide-x divide-gray-100"
          >
            {[...partners, ...partners].map((p, i) => (
              <div
                key={i}
                className="flex-none flex items-center justify-center h-16 px-10 bg-white hover:bg-primary transition-colors group cursor-default"
              >
                <span className="text-gray-400 group-hover:text-white font-semibold text-sm whitespace-nowrap tracking-wide transition-colors uppercase">
                  {p.abbr}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
