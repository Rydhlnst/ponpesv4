"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  LayoutDashboard, Newspaper, BarChart2, Image, Phone, ChevronRight,
  LogOut, Menu, X, ExternalLink
} from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard, exact: true },
  { label: "Berita & Kegiatan", href: "/admin/berita", icon: Newspaper },
  { label: "Hero / Beranda", href: "/admin/hero", icon: Image },
  { label: "Statistik", href: "/admin/stats", icon: BarChart2 },
  { label: "Info Kontak", href: "/admin/kontak", icon: Phone },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  if (pathname === "/admin/login") return <>{children}</>

  async function handleLogout() {
    await fetch("/api/admin/login", { method: "DELETE" })
    router.push("/admin/login")
    router.refresh()
  }

  function isActive(item: typeof navItems[0]) {
    if (item.exact) return pathname === item.href
    return pathname.startsWith(item.href)
  }

  const Sidebar = () => (
    <aside className="flex flex-col h-full bg-gray-950 border-r border-gray-800">
      {/* Logo */}
      <div className="px-5 py-5 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-green-600 flex items-center justify-center flex-none">
            <span className="text-white font-black text-xs">DA</span>
          </div>
          <div>
            <p className="text-white font-bold text-sm leading-none">Darussalam Bacan</p>
            <p className="text-gray-500 text-xs mt-0.5">Admin Panel</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-0.5">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setSidebarOpen(false)}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 text-sm font-medium transition-colors group",
              isActive(item)
                ? "bg-green-600/15 text-green-400"
                : "text-gray-400 hover:text-white hover:bg-gray-800"
            )}
          >
            <item.icon className={cn("w-4 h-4 flex-none", isActive(item) ? "text-green-400" : "text-gray-500 group-hover:text-gray-300")} />
            {item.label}
            {isActive(item) && <ChevronRight className="w-3 h-3 ml-auto" />}
          </Link>
        ))}
      </nav>

      {/* Bottom */}
      <div className="px-3 pb-5 space-y-1 border-t border-gray-800 pt-4">
        <Link
          href="/"
          target="_blank"
          className="flex items-center gap-3 px-3 py-2.5 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
        >
          <ExternalLink className="w-4 h-4 text-gray-500" />
          Lihat Website
        </Link>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-gray-400 hover:text-red-400 hover:bg-red-950/30 transition-colors"
        >
          <LogOut className="w-4 h-4 text-gray-500" />
          Keluar
        </button>
      </div>
    </aside>
  )

  return (
    <div className="min-h-screen bg-gray-900 flex">
      {/* Desktop sidebar */}
      <div className="hidden lg:block w-56 flex-none">
        <div className="fixed left-0 top-0 bottom-0 w-56">
          <Sidebar />
        </div>
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="w-56 flex-none">
            <Sidebar />
          </div>
          <div className="flex-1 bg-black/60" onClick={() => setSidebarOpen(false)} />
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 min-w-0">
        {/* Mobile topbar */}
        <div className="lg:hidden flex items-center gap-3 px-4 py-3 bg-gray-950 border-b border-gray-800">
          <button onClick={() => setSidebarOpen(true)} className="text-gray-400 hover:text-white">
            <Menu className="w-5 h-5" />
          </button>
          <span className="text-white font-bold text-sm">Admin Panel</span>
          {sidebarOpen && (
            <button onClick={() => setSidebarOpen(false)} className="ml-auto text-gray-400">
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
        <main className="p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  )
}
