"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, ZoomIn, Images } from "lucide-react"
import { cn } from "@/lib/utils"

const TOTAL = 32
const INITIAL_COUNT = 12

const galleryImages = Array.from({ length: TOTAL }, (_, i) => ({
  src: `/images/gallery/gallery-${String(i + 1).padStart(2, "0")}.jpg`,
  alt: `Kegiatan Pondok Pesantren Darussalam Bacan - Foto ${i + 1}`,
}))

interface GallerySectionProps {
  defaultShowAll?: boolean
}

export function GallerySection({ defaultShowAll = false }: GallerySectionProps) {
  const [showAll, setShowAll] = useState(defaultShowAll)
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  const visibleImages = showAll ? galleryImages : galleryImages.slice(0, INITIAL_COUNT)
  const remaining = TOTAL - INITIAL_COUNT

  const prev = useCallback(() =>
    setLightboxIdx(i => (i === null ? null : (i - 1 + TOTAL) % TOTAL)), [])
  const next = useCallback(() =>
    setLightboxIdx(i => (i === null ? null : (i + 1) % TOTAL)), [])

  useEffect(() => {
    if (lightboxIdx === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIdx(null)
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [lightboxIdx, prev, next])

  useEffect(() => {
    document.body.style.overflow = lightboxIdx !== null ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [lightboxIdx])

  return (
    <>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div ref={ref} className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                className="flex items-center gap-2 mb-3"
              >
                <div className="w-6 h-0.5 bg-primary" />
                <span className="text-primary text-xs font-semibold uppercase tracking-widest">Galeri Pesantren</span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-black text-gray-900"
              >
                Potret Kehidupan Santri
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-gray-500 text-sm max-w-xs leading-relaxed text-left md:text-right"
            >
              Sekilas pandang aktivitas belajar, ibadah, dan keseharian santri Darussalam Bacan.
            </motion.p>
          </div>

          {/* Gallery Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 auto-rows-[160px] md:auto-rows-[200px] lg:auto-rows-[220px]">
              {visibleImages.map((img, i) => {
                const isNewBatch = showAll && i >= INITIAL_COUNT
                const delay = isNewBatch
                  ? (i - INITIAL_COUNT) * 0.055
                  : Math.min(i * 0.045, 0.48)

                return (
                  <motion.div
                    key={img.src}
                    initial={{ opacity: 0, y: 24 }}
                    animate={
                      isNewBatch
                        ? { opacity: 1, y: 0 }
                        : inView ? { opacity: 1, y: 0 } : {}
                    }
                    transition={{ delay, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    onClick={() => setLightboxIdx(i)}
                    className={cn(
                      "relative overflow-hidden cursor-pointer group",
                      i === 0 && "col-span-2 row-span-2"
                    )}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      sizes={
                        i === 0
                          ? "(max-width: 1024px) 100vw, 66vw"
                          : "(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw"
                      }
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-10 h-10 border border-white/70 flex items-center justify-center bg-black/20 backdrop-blur-sm">
                        <ZoomIn className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Gradient fade when not showing all */}
            <AnimatePresence>
              {!showAll && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.4 }}
                  className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white via-white/70 to-transparent pointer-events-none"
                />
              )}
            </AnimatePresence>
          </div>

          {/* Show More / Info */}
          <div className="mt-6">
            <AnimatePresence mode="wait">
              {!showAll ? (
                <motion.div
                  key="show-more"
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ delay: 0.5, duration: 0.35 }}
                  className="flex flex-col items-center gap-3"
                >
                  <button
                    onClick={() => setShowAll(true)}
                    className="group flex items-center gap-3 border border-gray-200 hover:border-primary px-8 py-3.5 text-sm font-semibold text-gray-700 hover:text-primary transition-all duration-300 hover:bg-primary/5"
                  >
                    <Images className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                    <span>Lihat {remaining} Foto Lainnya</span>
                    <span className="ml-1 bg-gray-100 group-hover:bg-primary group-hover:text-white text-gray-500 text-xs font-bold px-2 py-0.5 transition-colors duration-300">
                      {remaining}
                    </span>
                  </button>
                  <p className="text-xs text-gray-400">klik foto untuk tampilan penuh</p>
                </motion.div>
              ) : (
                <motion.div
                  key="show-info"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center justify-between"
                >
                  <p className="text-gray-400 text-xs font-mono">{TOTAL} foto tersedia</p>
                  <button
                    onClick={() => setLightboxIdx(0)}
                    className="text-primary text-xs font-semibold hover:text-primary/70 transition-colors"
                  >
                    Buka galeri lengkap →
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-[100] bg-black/96 flex items-center justify-center"
            onClick={() => setLightboxIdx(null)}
          >
            {/* Close */}
            <button
              onClick={() => setLightboxIdx(null)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white/50 hover:text-white border border-white/10 hover:border-white/30 hover:bg-white/10 transition-colors z-10"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prev() }}
              className="absolute left-3 md:left-6 w-11 h-11 flex items-center justify-center text-white/50 hover:text-white border border-white/10 hover:border-white/30 hover:bg-white/10 transition-colors z-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Image */}
            <div
              className="relative w-full max-w-5xl mx-14 md:mx-24"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={lightboxIdx}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.18 }}
                >
                  <Image
                    src={galleryImages[lightboxIdx].src}
                    alt={galleryImages[lightboxIdx].alt}
                    width={1200}
                    height={900}
                    className="object-contain w-full max-h-[82vh]"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              className="absolute right-3 md:right-6 w-11 h-11 flex items-center justify-center text-white/50 hover:text-white border border-white/10 hover:border-white/30 hover:bg-white/10 transition-colors z-10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Counter */}
            <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-3">
              <div className="w-24 h-px bg-white/10" />
              <span className="text-white/40 text-xs font-mono tracking-widest">
                {String(lightboxIdx + 1).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")}
              </span>
              <div className="w-24 h-px bg-white/10" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
