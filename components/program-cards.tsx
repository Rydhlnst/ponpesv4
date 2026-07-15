"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Heart, Share2, Users, ImageIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const programs = [
  {
    title: "Biaya Listrik Pesantren",
    description: "Bantu biaya operasional listrik pesantren agar kegiatan belajar mengajar tetap berjalan lancar.",
    target: 5000000,
    collected: 210000,
    percent: 4,
    category: "SARPRAS",
    badge: "Mendesak",
    badgeColor: "bg-red-700 text-white",
    donorCount: 12,
  },
  {
    title: "Makan & Minum Anak Yatim",
    description: "Penuhi kebutuhan gizi sehari-hari anak-anak yatim agar mereka tumbuh sehat dan kuat.",
    target: 10000000,
    collected: 0,
    percent: 0,
    category: "Kesejahteraan",
    badge: "Baru",
    badgeColor: "bg-primary text-primary-foreground",
    donorCount: 0,
  },
  {
    title: "Kebutuhan ATK Anak Yatim",
    description: "Sediakan alat tulis dan kebutuhan sekolah agar anak-anak yatim semangat dalam belajar.",
    target: 3000000,
    collected: 0,
    percent: 0,
    category: "Pendidikan",
    badge: "Baru",
    badgeColor: "bg-primary text-primary-foreground",
    donorCount: 0,
  },
  {
    title: "Orang Tua Asuh",
    description: "Jadilah orang tua asuh dan sponsori pendidikan serta kebutuhan seorang anak yatim.",
    target: 12000000,
    collected: 0,
    percent: 0,
    category: "Layanan Umum",
    badge: "Populer",
    badgeColor: "bg-gray-900 text-white",
    donorCount: 0,
  },
  {
    title: "Puasa Sunnah Senin & Kamis",
    description: "Dukung program puasa sunnah anak-anak yatim dengan sedekah makanan berbuka puasa.",
    target: 1500000,
    collected: 100000,
    percent: 8,
    category: "Donasi Puasa",
    badge: "Aktif",
    badgeColor: "bg-primary text-primary-foreground",
    donorCount: 5,
  },
  {
    title: "Pemeliharaan Asrama & Gedung",
    description: "Bantu perawatan dan renovasi gedung asrama pesantren agar tetap layak huni.",
    target: 20000000,
    collected: 0,
    percent: 0,
    category: "SARPRAS",
    badge: "Prioritas",
    badgeColor: "bg-red-700 text-white",
    donorCount: 0,
  },
]

function formatRp(n: number) {
  if (n >= 1_000_000) return `Rp ${(n / 1_000_000).toFixed(1)}Jt`
  if (n >= 1_000) return `Rp ${(n / 1_000).toFixed(0)}Rb`
  return `Rp 0`
}

export function ProgramCards() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div ref={ref} className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="flex items-center gap-2 mb-3"
            >
              <div className="w-6 h-0.5 bg-primary" />
              <span className="text-primary text-xs font-semibold uppercase tracking-widest">Program Donasi</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900"
            >
              Pilih Program Donasi
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            <Button
              variant="outline"
              className="rounded-none border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Lihat Semua Program
            </Button>
          </motion.div>
        </div>

        {/* Carousel — 3 visible on desktop, 1 on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
        >
          <Carousel opts={{ align: "start", loop: true }} className="relative">
            <CarouselContent className="-ml-5">
              {programs.map((prog) => (
                <CarouselItem key={prog.title} className="pl-5 md:basis-1/2 lg:basis-1/3">
                  <div className="group h-full">
                    <Card className="overflow-hidden h-full border border-gray-200 shadow-none group-hover:border-primary transition-colors duration-300 pt-0">
                      {/* Image placeholder — replace <div> with <Image> when real photo available */}
                      <div className="h-32 bg-gray-100 relative flex items-center justify-center">
                        <ImageIcon className="w-8 h-8 text-gray-300" />
                        <div className="absolute top-0 left-0">
                          <span className={cn("text-xs font-bold px-2.5 py-1", prog.badgeColor)}>
                            {prog.badge}
                          </span>
                        </div>
                        <div className="absolute bottom-0 right-0">
                          <span className="text-xs text-gray-600 bg-white/90 px-2.5 py-1 font-medium">
                            {prog.category}
                          </span>
                        </div>
                      </div>

                      <CardContent className="p-4">
                        <h3 className="font-bold text-gray-900 text-sm mb-1 group-hover:text-primary transition-colors line-clamp-2">
                          {prog.title}
                        </h3>
                        <p className="text-gray-400 text-xs mb-3 line-clamp-2 leading-relaxed">
                          {prog.description}
                        </p>

                        <div className="mb-2.5">
                          <div className="flex justify-between text-xs text-gray-400 mb-1">
                            <span>Terkumpul</span>
                            <span className="font-bold text-primary">{prog.percent}%</span>
                          </div>
                          <Progress value={prog.percent} className="h-1" />
                          <div className="flex justify-between text-xs mt-1.5">
                            <span className="font-semibold text-gray-800">{formatRp(prog.collected)}</span>
                            <span className="text-gray-400">dari {formatRp(prog.target)}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-1 text-xs text-gray-400">
                          <Users className="w-3 h-3" />
                          <span>{prog.donorCount} Donatur</span>
                        </div>
                      </CardContent>

                      <CardFooter className="px-4 pb-4 pt-0 flex gap-2">
                        <Button className="flex-1 bg-primary hover:bg-primary/90 rounded-none text-xs h-8" size="sm">
                          <Heart className="w-3 h-3 fill-white" />
                          Donasi Sekarang
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="rounded-none border-gray-200 hover:border-primary hover:text-primary px-2"
                        >
                          <Share2 className="w-3 h-3" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="-left-5 rounded-none border-gray-200 hover:border-primary hover:text-primary" />
              <CarouselNext className="-right-5 rounded-none border-gray-200 hover:border-primary hover:text-primary" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  )
}
