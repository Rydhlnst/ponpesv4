import { z } from "zod"

// --- Article ---
export const articleSchema = z.object({
  title: z.string().min(3, "Judul minimal 3 karakter").max(255, "Judul maksimal 255 karakter"),
  excerpt: z.string().min(10, "Excerpt minimal 10 karakter"),
  date: z.string().min(1, "Tanggal wajib diisi"),
  category: z.string().min(1, "Kategori wajib diisi"),
  image: z.string().default(""),
  featured: z.boolean().default(false),
  published: z.boolean().default(true),
})

export const articleUpdateSchema = articleSchema.partial()

export type ArticleInput = z.infer<typeof articleSchema>
export type ArticleUpdateInput = z.infer<typeof articleUpdateSchema>

// --- Hero Slide ---
export const heroSlideSchema = z.object({
  category: z.string().min(1, "Kategori wajib diisi"),
  categoryIcon: z.string().min(1, "Icon kategori wajib diisi"),
  title: z.string().min(3, "Judul minimal 3 karakter"),
  subtitle: z.string().min(10, "Subtitle minimal 10 karakter"),
  cta: z.string().min(1, "Teks CTA wajib diisi"),
  ctaHref: z.string().min(1, "Link CTA wajib diisi"),
  imageSrc: z.string().default(""),
  sortOrder: z.number().int().default(0),
})

export const heroDataSchema = z.object({
  slides: z.array(heroSlideSchema).min(1, "Minimal 1 slide"),
})

export type HeroSlideInput = z.infer<typeof heroSlideSchema>
export type HeroDataInput = z.infer<typeof heroDataSchema>

// --- Stat ---
export const statItemSchema = z.object({
  value: z.number().int("Nilai harus bilangan bulat").min(0, "Nilai tidak boleh negatif"),
  suffix: z.string().default(""),
  label: z.string().min(1, "Label wajib diisi"),
  desc: z.string().min(1, "Deskripsi wajib diisi"),
  sortOrder: z.number().int().default(0),
})

export const statsDataSchema = z.object({
  items: z.array(statItemSchema).min(1, "Minimal 1 item statistik"),
})

export type StatItemInput = z.infer<typeof statItemSchema>
export type StatsDataInput = z.infer<typeof statsDataSchema>

// --- Bank Info ---
export const bankInfoSchema = z.object({
  bank: z.string().min(1, "Nama bank wajib diisi"),
  noRek: z.string().min(5, "Nomor rekening minimal 5 karakter"),
  atasNama: z.string().min(3, "Nama pemilik rekening minimal 3 karakter"),
  sortOrder: z.number().int().default(0),
})

// --- Kontak ---
export const kontakSchema = z.object({
  phone: z
    .string()
    .min(9, "Nomor telepon minimal 9 karakter")
    .regex(/^[0-9+\-\s()]+$/, "Format nomor telepon tidak valid"),
  phoneDisplay: z.string().min(1, "Tampilan nomor telepon wajib diisi"),
  email: z.string().email("Format email tidak valid"),
  address: z.string().min(10, "Alamat minimal 10 karakter"),
  mapsEmbed: z.string().default(""),
  banks: z.array(bankInfoSchema).min(1, "Minimal 1 rekening bank"),
})

export type BankInfoInput = z.infer<typeof bankInfoSchema>
export type KontakInput = z.infer<typeof kontakSchema>
