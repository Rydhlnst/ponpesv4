"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Users, Heart, Calendar, Handshake } from "lucide-react"
import type { StatItem } from "@/lib/data"

const ICONS = [Users, Heart, Calendar, Handshake]

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = Math.ceil(to / (1400 / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= to) { setCount(to); clearInterval(timer) }
      else setCount(start)
    }, 16)
    return () => clearInterval(timer)
  }, [inView, to])

  return <span ref={ref}>{count}{suffix}</span>
}

export function StatsSection({ items }: { items: StatItem[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="py-16 bg-brand-dark">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-white/10">
          {items.map((s, i) => {
            const Icon = ICONS[i % ICONS.length]
            return (
              <motion.div
                key={`${s.label}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08 }}
                className="px-8 py-10 first:pl-0 last:pr-0"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Icon className="w-4 h-4 text-white/50" />
                  <div className="w-8 h-0.5 bg-white/40" />
                </div>
                <p className="text-4xl font-black text-white tracking-tight mb-1">
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="text-brand-muted font-semibold text-sm mb-1">{s.label}</p>
                <p className="text-white/40 text-xs">{s.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
