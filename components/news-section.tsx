"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Calendar, Clock, ArrowRight, ImageIcon } from "lucide-react"

const news = [
  {
    title: "Keutamaan Bersedekah untuk Anak Yatim dalam Islam",
    excerpt:
      "Islam sangat menganjurkan umatnya untuk memperhatikan anak-anak yatim. Rasulullah SAW menjanjikan kedudukan mulia bagi mereka yang menyayangi yatim.",
    date: "12 Juli 2026",
    readTime: "5 menit",
    category: "Kajian Islam",
    image: "/images/news-1.jpg",
  },
  {
    title: "Laporan Kegiatan Pesantren Bulan Juni 2026",
    excerpt:
      "Alhamdulillah, selama bulan Juni 2026 berbagai kegiatan positif berlangsung di pesantren kami. Khataman Al-Quran hingga lomba pidato.",
    date: "5 Juli 2026",
    readTime: "3 menit",
    category: "Kabar Pesantren",
    image: "/images/news-2.jpg",
  },
  {
    title: "Program Beasiswa Pendidikan Anak Yatim 2026",
    excerpt:
      "Kami membuka pendaftaran beasiswa untuk anak-anak yatim yang ingin melanjutkan pendidikan lebih tinggi dengan dukungan donatur setia kami.",
    date: "28 Juni 2026",
    readTime: "4 menit",
    category: "Program",
    image: "/images/news-3.jpg",
  },
  {
    title: "Kegiatan Buka Puasa Sunnah Senin & Kamis Bersama",
    excerpt:
      "Setiap Senin dan Kamis, anak-anak yatim pesantren kami melaksanakan puasa sunnah bersama sebagai sarana pembentukan karakter Islami.",
    date: "20 Juni 2026",
    readTime: "3 menit",
    category: "Kegiatan",
    image: "/images/news-4.jpg",
  },
]

export function NewsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div ref={ref} className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 gap-4">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="text-primary font-semibold text-sm uppercase tracking-widest mb-1"
            >
              Kabar Terbaru
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-gray-900"
            >
              Kabar Yatim
            </motion.h2>
          </div>
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="group flex items-center gap-1.5 text-primary font-semibold text-sm hover:gap-3 transition-all"
          >
            Lihat Semua
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        <Carousel opts={{ align: "start" }} className="relative">
          <CarouselContent className="-ml-4">
            {news.map((item, i) => (
              <CarouselItem key={item.title} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="h-full"
                >
                  <Card className="h-full overflow-hidden border border-gray-200 shadow-none hover:border-primary transition-colors duration-300 group pt-0">
                    {/* Image placeholder — replace with <Image> when real photo available */}
                    <div className="h-44 bg-gray-100 relative flex items-center justify-center">
                      <ImageIcon className="w-9 h-9 text-gray-300" />
                      <div className="absolute top-0 left-0">
                        <span className="text-xs font-bold px-3 py-1.5 bg-primary text-primary-foreground">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    <CardContent className="p-5">
                      <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {item.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {item.readTime}
                        </span>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2 text-sm leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm line-clamp-3 mb-4 leading-relaxed">
                        {item.excerpt}
                      </p>
                      <a
                        href="#"
                        className="group/link inline-flex items-center gap-1.5 text-primary text-sm font-semibold"
                      >
                        Baca Selengkapnya
                        <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="-left-5 rounded-none border-gray-200 hover:border-primary hover:text-primary" />
            <CarouselNext className="-right-5 rounded-none border-gray-200 hover:border-primary hover:text-primary" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}
