import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { LogoImage } from "@/components/logo-image"

const socials = [
  {
    href: "#",
    label: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    href: "#",
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    href: "#",
    label: "YouTube",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.41 19.1C5.12 19.56 12 19.56 12 19.56s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95 29 29 0 00.46-5.33 29 29 0 00-.46-5.4z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white" />
      </svg>
    ),
  },
]

const quickLinks = [
  { label: "Program Donasi", href: "/program/kafil-yatim" },
  { label: "Tentang Kami", href: "/tentang" },
  { label: "Kabar Yatim", href: "/kabar-yatim" },
  { label: "Galeri", href: "/tentang/galeri" },
  { label: "Kontak", href: "/kontak" },
]

const programLinks = [
  { label: "Kafil Yatim", href: "/program/kafil-yatim" },
  { label: "Wakaf Masjid", href: "/program/wakaf-masjid" },
  { label: "Wakaf Produktif", href: "/program/wakaf-produktif" },
  { label: "Infaq Beras", href: "/program/infaq-beras" },
  { label: "Pengembangan Usaha", href: "/program/pengembangan-usaha" },
]

const legalLinks = [
  { label: "Kebijakan Privasi", href: "#" },
  { label: "Syarat & Ketentuan", href: "#" },
  { label: "Disclaimer", href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              {/* Ganti logo dengan menaruh file di /public/images/logo.png */}
              <LogoImage size={40} />
              <div>
                <p className="font-bold text-white text-lg leading-tight">Darussalam Bacan</p>
                <p className="text-primary text-xs">Pondok Pesantren</p>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-sm text-gray-500">
              Pondok Pesantren Darussalam Bacan berdiri sejak 8 Januari 2018 di Pulau Bacan,
              Halmahera Selatan. Mencetak generasi Qur'ani yang mandiri secara ekonomi dan spiritual.
            </p>
            <div className="space-y-2.5 text-sm">
              <div className="flex gap-2.5 items-start">
                <MapPin className="w-4 h-4 text-primary flex-none mt-0.5" />
                <span className="text-gray-500 leading-relaxed">
                  Jl. Pesantren No. 05, RT 03, Desa Kupal,
                  Kec. Bacan Selatan, Kab. Halmahera Selatan, Maluku Utara
                </span>
              </div>
              <div className="flex gap-2.5 items-center">
                <Phone className="w-4 h-4 text-primary flex-none" />
                <span className="text-gray-500">+62 822-9782-9892</span>
              </div>
              <div className="flex gap-2.5 items-center">
                <Mail className="w-4 h-4 text-primary flex-none" />
                <span className="text-gray-500">ponpesantren.darussalam@bacan.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Navigasi</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Program</h4>
            <ul className="space-y-2.5">
              {programLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          <p className="text-xs text-gray-600 text-center md:text-left">
            © 2026 Pondok Pesantren Darussalam Bacan. Seluruh hak cipta dilindungi.
          </p>
          <div className="flex items-center gap-5">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs text-gray-600 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-8 h-8 bg-gray-800 hover:bg-primary flex items-center justify-center transition-colors text-gray-400 hover:text-white"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
