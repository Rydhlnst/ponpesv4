"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaWhatsapp, FaInstagram, FaTiktok, FaFacebookF } from "react-icons/fa"
import { Share2, X } from "lucide-react"

const WA_NUMBER = "6282297829892"
const WA_MESSAGE = encodeURIComponent("Assalamu'alaikum, saya ingin bertanya tentang Pondok Pesantren Darussalam Bacan.")

const socials = [
  {
    label: "WhatsApp",
    icon: FaWhatsapp,
    href: `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`,
    bg: "bg-[#25D366]",
    hover: "hover:bg-[#20ba58]",
  },
  {
    label: "Instagram",
    icon: FaInstagram,
    href: "https://instagram.com/darussalambacan",
    bg: "bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#bc1888]",
    hover: "hover:opacity-90",
  },
  {
    label: "TikTok",
    icon: FaTiktok,
    href: "https://tiktok.com/@darussalambacan",
    bg: "bg-[#010101]",
    hover: "hover:bg-[#2a2a2a]",
  },
  {
    label: "Facebook",
    icon: FaFacebookF,
    href: "https://facebook.com/darussalambacan",
    bg: "bg-[#1877F2]",
    hover: "hover:bg-[#1560cc]",
  },
]

export function WhatsappButton() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    if (open) document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [open])

  return (
    <div ref={ref} className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      {/* Social media items */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="flex flex-col items-center gap-3"
          >
            {socials.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.8 }}
                transition={{ delay: i * 0.05, duration: 0.2 }}
                className="relative group flex items-center justify-end gap-2"
              >
                {/* Label tooltip */}
                <span className="absolute right-16 bg-gray-900 text-white text-xs font-semibold px-2.5 py-1 rounded-none whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none">
                  {s.label}
                </span>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-center w-12 h-12 rounded-full shadow-md text-white transition-all duration-200 ${s.bg} ${s.hover}`}
                  aria-label={s.label}
                >
                  <s.icon className="w-5 h-5" />
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main toggle button */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.92 }}
        className={`flex items-center justify-center w-14 h-14 rounded-full shadow-lg text-white transition-all duration-300 ${
          open ? "bg-gray-800 hover:bg-gray-700" : "bg-primary hover:bg-primary/90"
        }`}
        aria-label="Hubungi kami"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="w-6 h-6" />
            </motion.span>
          ) : (
            <motion.span
              key="share"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <Share2 className="w-6 h-6" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}
