import { db } from "@/lib/db"
import { articles, heroSlides, stats, kontak, bankInfo } from "@/lib/db/schema"
import { eq, desc, asc } from "drizzle-orm"

// --- Articles ---
export type { Article, NewArticle } from "@/lib/db/schema"

export async function getArticles() {
  return db.select().from(articles).orderBy(desc(articles.createdAt))
}

export async function getArticleById(id: number) {
  const rows = await db.select().from(articles).where(eq(articles.id, id))
  return rows[0] ?? null
}

export async function createArticle(data: typeof articles.$inferInsert) {
  const rows = await db.insert(articles).values(data).returning()
  return rows[0]
}

export async function updateArticle(id: number, data: Partial<typeof articles.$inferInsert>) {
  const rows = await db.update(articles).set(data).where(eq(articles.id, id)).returning()
  return rows[0] ?? null
}

export async function deleteArticle(id: number) {
  const rows = await db.delete(articles).where(eq(articles.id, id)).returning()
  return rows[0] ?? null
}

// --- Hero ---
export type { HeroSlide, NewHeroSlide } from "@/lib/db/schema"

export async function getHeroSlides() {
  return db.select().from(heroSlides).orderBy(asc(heroSlides.sortOrder))
}

export async function replaceHeroSlides(slides: (typeof heroSlides.$inferInsert)[]) {
  await db.delete(heroSlides)
  if (slides.length === 0) return []
  return db.insert(heroSlides).values(slides).returning()
}

// --- Stats ---
export type { Stat, NewStat } from "@/lib/db/schema"

export async function getStats() {
  return db.select().from(stats).orderBy(asc(stats.sortOrder))
}

export async function replaceStats(items: (typeof stats.$inferInsert)[]) {
  await db.delete(stats)
  if (items.length === 0) return []
  return db.insert(stats).values(items).returning()
}

// --- Kontak ---
export type { Kontak, NewKontak, BankInfo, NewBankInfo } from "@/lib/db/schema"

// --- Backward-compat aliases for components ---
export type { Stat as StatItem } from "@/lib/db/schema"
export type HeroData = { slides: import("@/lib/db/schema").HeroSlide[] }
export type StatsData = { items: import("@/lib/db/schema").Stat[] }
export type KontakData = import("@/lib/db/schema").Kontak & {
  banks: import("@/lib/db/schema").BankInfo[]
}

export async function getKontak() {
  const [kontakRow] = await db.select().from(kontak).limit(1)
  const banks = await db.select().from(bankInfo).orderBy(asc(bankInfo.sortOrder))
  return kontakRow ? { ...kontakRow, banks } : null
}

export async function upsertKontak(data: typeof kontak.$inferInsert) {
  const [existing] = await db.select().from(kontak).limit(1)
  if (existing) {
    const rows = await db.update(kontak).set(data).where(eq(kontak.id, existing.id)).returning()
    return rows[0]
  }
  const rows = await db.insert(kontak).values(data).returning()
  return rows[0]
}

export async function replaceBanks(items: (typeof bankInfo.$inferInsert)[]) {
  await db.delete(bankInfo)
  if (items.length === 0) return []
  return db.insert(bankInfo).values(items).returning()
}
