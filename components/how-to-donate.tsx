"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Search, Heart, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const steps = [
  {
    num: "01",
    icon: Search,
    title: "Pilih Program",
    desc: "Telusuri program donasi yang tersedia dan pilih sesuai kebutuhan yang ingin Anda bantu.",
  },
  {
    num: "02",
    icon: Heart,
    title: "Tentukan Nominal",
    desc: "Masukkan jumlah donasi sesuai kemampuan. Tidak ada nominal minimum — setiap rupiah berarti.",
  },
  {
    num: "03",
    icon: CheckCircle,
    title: "Konfirmasi & Selesai",
    desc: "Selesaikan pembayaran via transfer bank atau dompet digital. Bukti donasi dikirim otomatis.",
  },
]

export function HowToDonate() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 md:mb-14 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-0.5 bg-primary" />
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                Cara Berdonasi
              </span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.05 }}
              className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900"
            >
              Mudah & Hanya 3 Langkah
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            <Button
              size="lg"
              className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground rounded-none px-10 font-semibold"
            >
              <Heart className="w-4 h-4 fill-white" />
              Mulai Berdonasi
            </Button>
          </motion.div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-200 divide-x divide-y md:divide-y-0 divide-gray-200">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12 }}
              className="group p-5 sm:p-8 bg-white hover:bg-primary transition-colors"
            >
              <div className="flex items-start gap-5 mb-5">
                <span className="text-5xl font-black text-primary/20 group-hover:text-primary-foreground/30 transition-colors leading-none select-none">
                  {step.num}
                </span>
              </div>
              <div className="w-10 h-10 border border-gray-200 group-hover:border-white/30 flex items-center justify-center mb-5 transition-colors">
                <step.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-bold text-gray-900 group-hover:text-white text-lg mb-2 transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-500 group-hover:text-primary-foreground/80 text-sm leading-relaxed transition-colors">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
