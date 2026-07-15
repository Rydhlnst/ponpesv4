import { neon } from "@neondatabase/serverless"
import { drizzle } from "drizzle-orm/neon-http"
import * as schema from "./schema"

const sql = neon(process.env.DATABASE_URL!)
const db = drizzle(sql, { schema })

const { articles, heroSlides, stats, kontak, bankInfo } = schema

async function seed() {
  console.log("Seeding database...")

  // Articles
  await db.insert(articles).values([
    {
      title: "Wisuda Tahfizh: 7 Santri Yatim Selesaikan Hafalan 30 Juz",
      excerpt:
        "Momen yang mengharukan. Tujuh santri yatim Darussalam Bacan berhasil menyelesaikan hafalan Al-Qur'an 30 juz setelah dua tahun berjuang keras.",
      date: "Maret 2026",
      category: "Prestasi",
      image: "/images/gallery/gallery-04.jpg",
      featured: true,
      published: true,
    },
    {
      title: "Ramadhan di Darussalam: Santri Yatim Khatam Qur'an Bersama",
      excerpt:
        "Bulan Ramadhan 1447 H menjadi momen spesial bagi 26 santri yatim Darussalam Bacan. Mereka menghabiskan sahur, shalat tarawih, dan tadarus bersama.",
      date: "Maret 2026",
      category: "Kegiatan",
      image: "/images/gallery/gallery-11.jpg",
      featured: false,
      published: true,
    },
    {
      title: "Cerita Fauzi: Yatim dari Bacan Selatan yang Kini Hafizh",
      excerpt:
        "Fauzi, 15 tahun, kehilangan ayahnya saat masih kelas 5 SD. Dua tahun di Darussalam Bacan mengubah hidupnya. Kini ia sudah hafal 15 juz.",
      date: "Februari 2026",
      category: "Kisah Nyata",
      image: "/images/gallery/gallery-16.jpg",
      featured: false,
      published: true,
    },
  ])
  console.log("✓ Articles seeded")

  // Hero slides
  await db.insert(heroSlides).values([
    {
      category: "Pondok Pesantren — Bacan, Halmahera Selatan",
      categoryIcon: "Moon",
      title: "Mendidik Generasi\nQur'ani Mandiri\ndi Pulau Bacan",
      subtitle:
        "Berdiri 8 Januari 2018 di Desa Kupal, Halmahera Selatan. Membina 110 santri putra-putri dengan kurikulum Tahfizh, MTs, dan MA yang terintegrasi.",
      cta: "Profil Pesantren",
      ctaHref: "/tentang",
      imageSrc: "/images/gallery/gallery-07.jpg",
      sortOrder: 0,
    },
    {
      category: "Program Unggulan",
      categoryIcon: "BookOpen",
      title: "SMP Tahfizh\ndan MA\nDarussalam Bacan",
      subtitle:
        "Hafalan Al-Qur'an 30 juz berjalan seiring pendidikan formal berjenjang. Santri kami tumbuh sebagai hafizh sekaligus generasi berprestasi akademik.",
      cta: "Lihat Program",
      ctaHref: "/program/tahfizh",
      imageSrc: "/images/gallery/gallery-14.jpg",
      sortOrder: 1,
    },
    {
      category: "Visi & Kemandirian",
      categoryIcon: "Users",
      title: "1 Desa 1 Rumah\nQur'an — Mandiri\nEkonomi & Spiritual",
      subtitle:
        "Dari usaha air galon, peternakan, hingga pertanian — Darussalam Bacan membangun kemandirian ekonomi pesantren yang nyata dan berkelanjutan.",
      cta: "Visi & Misi",
      ctaHref: "/tentang/visi-misi",
      imageSrc: "/images/gallery/gallery-20.jpg",
      sortOrder: 2,
    },
  ])
  console.log("✓ Hero slides seeded")

  // Stats
  await db.insert(stats).values([
    { value: 110, suffix: "+", label: "Santri Aktif", desc: "Putra & putri, MTs dan MA", sortOrder: 0 },
    { value: 26, suffix: "", label: "Santri Yatim", desc: "Dibina penuh, gratis tanpa syarat", sortOrder: 1 },
    { value: 8, suffix: " Thn", label: "Tahun Berdiri", desc: "Sejak 8 Januari 2018 di Bacan", sortOrder: 2 },
    { value: 24, suffix: "+", label: "Tenaga Pendidik", desc: "Guru & pengasuh berpengalaman", sortOrder: 3 },
  ])
  console.log("✓ Stats seeded")

  // Kontak
  const [savedKontak] = await db
    .insert(kontak)
    .values({
      phone: "082297829892",
      phoneDisplay: "+62 822-9782-9892",
      email: "ponpesantren.darussalam@bacan.com",
      address:
        "Jl. Pesantren No. 05, RT 03, Desa Kupal, Kec. Bacan Selatan, Kab. Halmahera Selatan, Maluku Utara",
      mapsEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.8!2d127.5!3d-0.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMC42!5e0!3m2!1sid!2sid!4v1",
    })
    .returning()
  console.log("✓ Kontak seeded", savedKontak.id)

  // Bank info
  await db.insert(bankInfo).values([
    {
      bank: "Bank Syariah Indonesia (BSI)",
      noRek: "7890123456",
      atasNama: "Yayasan Darussalam Bacan",
      sortOrder: 0,
    },
    {
      bank: "Bank Muamalat",
      noRek: "3456789012",
      atasNama: "Yayasan Darussalam Bacan",
      sortOrder: 1,
    },
  ])
  console.log("✓ Bank info seeded")

  console.log("\nSeeding selesai!")
}

seed().catch((err) => {
  console.error("Seed gagal:", err)
  process.exit(1)
})
