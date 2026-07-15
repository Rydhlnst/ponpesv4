"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { BookOpen, GraduationCap, Heart, Sprout, Building2, Users, Mic, School } from "lucide-react"
import Link from "next/link"

const programs = [
  { icon: BookOpen, label: "Tahfizh Al-Qur'an", desc: "Hafalan 30 juz", href: "/program/tahfizh" },
  { icon: School, label: "SMP Tahfizh", desc: "Jenjang SMP pesantren", href: "/program/smp-tahfizh" },
  { icon: GraduationCap, label: "Madrasah Aliyah", desc: "Jenjang SMA pesantren", href: "/program/madrasah-aliyah" },
  { icon: BookOpen, label: "TPQ", desc: "Belajar Al-Qur'an dasar", href: "/program/tpq" },
  { icon: Heart, label: "LKSA Panti Asuhan", desc: "26 yatim dibina gratis", href: "/program/lksa" },
  { icon: Users, label: "Majelis Taklim", desc: "Kajian rutin komunitas", href: "/program/majelis-taklim" },
  { icon: Mic, label: "Pengkaderan Dai", desc: "Cetak dai & ulama muda", href: "/program/pengkaderan-dai" },
  { icon: Sprout, label: "Kemandirian Usaha", desc: "Air kemasan & ternak", href: "/program/pengembangan-usaha" },
  { icon: Building2, label: "Wakaf & Pembangunan", desc: "Masjid & lahan wakaf", href: "/program/wakaf-masjid" },
]

export function CategorySection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="py-10 bg-gray-50 border-t border-b border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex gap-0 overflow-x-auto no-scrollbar border border-gray-200 divide-x divide-gray-200">
          {programs.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.06 }}
              className="flex-none min-w-[160px]"
            >
              <Link
                href={p.href}
                className="group flex flex-col items-center gap-2 px-8 py-5 bg-white hover:bg-primary transition-colors w-full h-full"
              >
                <p.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                <div className="text-center">
                  <p className="font-semibold text-gray-900 group-hover:text-white text-sm leading-tight transition-colors">
                    {p.label}
                  </p>
                  <p className="text-xs text-gray-400 group-hover:text-primary-foreground/70 mt-0.5 transition-colors">
                    {p.desc}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
