"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

interface Crumb {
  label: string
  href?: string
}

interface PageHeroProps {
  title: string
  subtitle?: string
  crumbs: Crumb[]
  accent?: string
}

export function PageHero({ title, subtitle, crumbs, accent }: PageHeroProps) {
  return (
    <section className="bg-brand-dark pt-20 border-b border-white/5">
      <div className="container mx-auto px-6 py-14">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-1.5 text-xs text-gray-500 mb-6 flex-wrap"
        >
          <Link href="/" className="hover:text-white transition-colors">Beranda</Link>
          {crumbs.map((c, i) => (
            <span key={i} className="flex items-center gap-1.5">
              <ChevronRight className="w-3 h-3 flex-none" />
              {c.href && c.href !== "#" ? (
                <Link href={c.href} className="hover:text-white transition-colors">{c.label}</Link>
              ) : (
                <span className="text-white/80">{c.label}</span>
              )}
            </span>
          ))}
        </motion.nav>

        {accent && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.04 }}
            className="flex items-center gap-2 mb-3"
          >
            <div className="w-6 h-0.5 bg-primary" />
            <span className="text-primary text-xs font-semibold uppercase tracking-widest">{accent}</span>
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mb-4"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14 }}
            className="text-gray-400 text-base leading-relaxed max-w-2xl"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}
