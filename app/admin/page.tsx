import Link from "next/link"
import { getArticles, getStats } from "@/lib/data"
import { Newspaper, BarChart2, Image, Phone, ArrowRight, CheckCircle2, Clock } from "lucide-react"

export default async function AdminDashboard() {
  const [articles, statItems] = await Promise.all([getArticles(), getStats()])

  const published = articles.filter((a) => a.published).length
  const draft = articles.filter((a) => !a.published).length

  const cards = [
    {
      label: "Berita & Kegiatan",
      value: `${articles.length} artikel`,
      sub: `${published} published · ${draft} draft`,
      href: "/admin/berita",
      icon: Newspaper,
      color: "bg-blue-600",
    },
    {
      label: "Statistik Beranda",
      value: `${statItems.length} angka`,
      sub: "Santri, yatim, guru, tahun berdiri",
      href: "/admin/stats",
      icon: BarChart2,
      color: "bg-purple-600",
    },
    {
      label: "Hero / Beranda",
      value: "3 slide",
      sub: "Judul, subtitle & tombol CTA",
      href: "/admin/hero",
      icon: Image,
      color: "bg-amber-600",
    },
    {
      label: "Info Kontak",
      value: "Nomor & rekening",
      sub: "WhatsApp, email, bank, alamat",
      href: "/admin/kontak",
      icon: Phone,
      color: "bg-green-600",
    },
  ]

  return (
    <div className="max-w-5xl">
      <div className="mb-8">
        <h1 className="text-2xl font-black text-white">Dashboard</h1>
        <p className="text-gray-400 text-sm mt-1">Kelola konten website Darussalam Bacan</p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        {cards.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className="group flex gap-4 bg-gray-800 border border-gray-700 hover:border-gray-500 p-5 transition-colors"
          >
            <div className={`w-10 h-10 ${c.color} flex items-center justify-center flex-none`}>
              <c.icon className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-gray-400 text-xs font-semibold uppercase tracking-wide">{c.label}</p>
              <p className="text-white font-bold text-lg leading-tight mt-0.5">{c.value}</p>
              <p className="text-gray-500 text-xs mt-0.5 truncate">{c.sub}</p>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-gray-300 self-center transition-colors" />
          </Link>
        ))}
      </div>

      {/* Recent articles */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-white font-bold">Berita Terbaru</h2>
          <Link href="/admin/berita" className="text-green-400 text-sm hover:underline">
            Lihat semua →
          </Link>
        </div>
        <div className="bg-gray-800 border border-gray-700 divide-y divide-gray-700">
          {articles.slice(0, 4).map((a) => (
            <Link
              key={a.id}
              href={`/admin/berita/${a.id}`}
              className="flex items-center gap-4 px-5 py-4 hover:bg-gray-750 transition-colors group"
            >
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm font-medium truncate group-hover:text-green-400 transition-colors">
                  {a.title}
                </p>
                <p className="text-gray-500 text-xs mt-0.5">{a.date} · {a.category}</p>
              </div>
              <div className="flex items-center gap-1.5 flex-none">
                {a.published ? (
                  <><CheckCircle2 className="w-3.5 h-3.5 text-green-500" /><span className="text-green-500 text-xs">Published</span></>
                ) : (
                  <><Clock className="w-3.5 h-3.5 text-gray-500" /><span className="text-gray-500 text-xs">Draft</span></>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
