"use client"

import { FaWhatsapp } from "react-icons/fa"

const WA_NUMBER = "6282297829892"
const WA_MESSAGE = encodeURIComponent("Assalamu'alaikum, saya ingin bertanya tentang Pondok Pesantren Darussalam Bacan.")

export function WhatsappButton() {
  return (
    <a
      href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba58] text-white shadow-lg hover:shadow-xl transition-all duration-200 rounded-full"
      aria-label="Chat WhatsApp"
    >
      <FaWhatsapp className="w-7 h-7" />
    </a>
  )
}
