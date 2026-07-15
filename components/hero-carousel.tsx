"use client"

import { useState, useEffect, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Heart, ChevronLeft, ChevronRight, Moon, BookOpen, Users, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import type { HeroSlide } from "@/lib/data"

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Moon, BookOpen, Users, Heart
}

export function HeroCarousel({ slides }: { slides: HeroSlide[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [current, setCurrent] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCurrent(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    const timer = setInterval(() => emblaApi.scrollNext(), 6000)
    return () => {
      clearInterval(timer)
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  const slide = slides[current]
  const CategoryIcon = ICON_MAP[slide?.categoryIcon ?? "Moon"] ?? Moon

  return (
    <section className="relative" style={{ minHeight: "min(100vh, 720px)" }}>
      {/* Slide backgrounds */}
      <div ref={emblaRef} className="absolute inset-0 overflow-hidden">
        <div className="flex h-full">
          {slides.map((s) => (
            <div key={s.id} className="relative flex-none w-full h-full bg-brand-dark">
              {/* Full-bleed background image with left gradient */}
              <Image
                src={s.imageSrc}
                alt="Pondok Pesantren Darussalam Bacan"
                fill
                className="object-cover opacity-70"
                priority={s.id === 1}
              />
              {/* Gradient: strong on left (text area), fades to transparent on right */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/50 to-brand-dark/10" />
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-end" style={{ minHeight: "min(100vh, 720px)", paddingTop: 80 }}>
        <div className="container mx-auto px-6 pb-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${current}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.45 }}
              className="max-w-2xl"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="inline-flex items-center gap-2 mb-6"
              >
                <div className="w-6 h-0.5 bg-primary" />
                <span className="text-brand-muted text-xs font-semibold uppercase tracking-widest flex items-center gap-1.5">
                  <CategoryIcon className="w-3.5 h-3.5" />
                  {slide.category}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight whitespace-pre-line mb-6"
              >
                {slide.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-gray-400 text-base leading-relaxed mb-8 max-w-md"
              >
                {slide.subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28 }}
                className="flex gap-3"
              >
                <Link href={slide.ctaHref}>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-none px-8 h-12 font-semibold text-sm">
                    <Heart className="w-4 h-4 fill-white" />
                    {slide.cta}
                  </Button>
                </Link>
                <Link href="/tentang">
                  <Button
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 hover:border-white/40 rounded-none px-8 h-12 text-sm bg-transparent"
                  >
                    Pelajari Lebih
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide controls */}
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="container mx-auto px-6 flex items-center gap-4">
          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="w-9 h-9 border border-white/20 text-white hover:bg-white/10 flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex gap-1.5 items-center">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={cn(
                  "h-0.5 transition-all duration-300",
                  i === current ? "w-10 bg-white" : "w-4 bg-white/30 hover:bg-white/50"
                )}
              />
            ))}
          </div>
          <button
            onClick={() => emblaApi?.scrollNext()}
            className="w-9 h-9 border border-white/20 text-white hover:bg-white/10 flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <span className="ml-auto text-white/40 text-xs font-mono">
            {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  )
}
