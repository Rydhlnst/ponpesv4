"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { buttonVariants } from "@/components/ui/button"
import { Menu, X, ChevronDown, Heart } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { LogoImage } from "@/components/logo-image"

const navItems = [
  {
    label: "Program",
    children: [
      { label: "Tahfizh Al-Qur'an", href: "/program/tahfizh" },
      { label: "SMP Tahfizh", href: "/program/smp-tahfizh" },
      { label: "Madrasah Aliyah", href: "/program/madrasah-aliyah" },
      { label: "TPQ", href: "/program/tpq" },
      { label: "LKSA Panti Asuhan", href: "/program/lksa" },
      { label: "Majelis Taklim", href: "/program/majelis-taklim" },
      { label: "Pengkaderan Dai", href: "/program/pengkaderan-dai" },
      { label: "Program Sosial & Yatim", href: "/program/kafil-yatim" },
      { label: "Kemandirian Usaha", href: "/program/pengembangan-usaha" },
      { label: "Wakaf & Pembangunan", href: "/program/wakaf-masjid" },
    ],
  },
  {
    label: "Tentang",
    children: [
      { label: "Profil Pesantren", href: "/tentang" },
      { label: "Sejarah Berdiri", href: "/tentang/sejarah" },
      { label: "Visi & Misi", href: "/tentang/visi-misi" },
      { label: "Struktur Organisasi", href: "/tentang/struktur" },
      { label: "Galeri", href: "/tentang/galeri" },
    ],
  },
  { label: "Berita & Kegiatan", href: "/kabar-yatim" },
  { label: "Kontak", href: "/kontak" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b bg-white border-green-100"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <LogoImage size={32} />
            <div className="leading-none">
              <p className="font-bold text-sm text-gray-900">
                Darussalam Bacan
              </p>
              <p className="text-[11px] mt-0.5 text-primary">
                Pondok Pesantren
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.children ? (
                  <button
                    className="flex items-center gap-1 px-4 h-20 text-sm font-medium border-b-2 border-transparent text-gray-600 hover:text-primary hover:border-primary transition-colors"
                  >
                    {item.label}
                    <motion.span
                      animate={{ rotate: activeDropdown === item.label ? 180 : 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <ChevronDown className="w-3.5 h-3.5" />
                    </motion.span>
                  </button>
                ) : (
                  <Link
                    href={(item as { label: string; href: string }).href}
                    className="flex items-center gap-1 px-4 h-20 text-sm font-medium border-b-2 border-transparent text-gray-600 hover:text-primary hover:border-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                )}

                <AnimatePresence>
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.12 }}
                      className="absolute top-full left-0 w-52 bg-white border border-green-100 shadow-xl z-50"
                    >
                      {item.children.map((child, i) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setActiveDropdown(null)}
                          className={cn(
                            "block px-4 py-2.5 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors",
                            i < item.children!.length - 1 && "border-b border-gray-100"
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/kontak"
              className={cn(buttonVariants({ size: "sm" }), "hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground rounded-none text-sm px-5 h-9 font-semibold")}
            >
              Hubungi Kami
            </Link>
            <button
              className="md:hidden p-1.5 text-gray-700"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                        className="w-full flex items-center justify-between font-semibold text-gray-900 py-2.5 text-sm border-b border-gray-100"
                      >
                        {item.label}
                        <motion.span
                          animate={{ rotate: mobileExpanded === item.label ? 180 : 0 }}
                          transition={{ duration: 0.15 }}
                        >
                          <ChevronDown className="w-4 h-4 text-gray-400" />
                        </motion.span>
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.15 }}
                            className="overflow-hidden pl-4 py-1"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => setMobileOpen(false)}
                                className="block py-2 text-sm text-gray-500 hover:text-primary transition-colors"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={(item as { label: string; href: string }).href}
                      onClick={() => setMobileOpen(false)}
                      className="block font-semibold text-gray-900 py-2.5 text-sm border-b border-gray-100"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-3">
                <Link
                  href="/kontak"
                  onClick={() => setMobileOpen(false)}
                  className={cn(buttonVariants(), "w-full bg-primary hover:bg-primary/90 rounded-none")}
                >
                  Hubungi Kami
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
