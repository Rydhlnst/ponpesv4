import {
  pgTable,
  serial,
  text,
  boolean,
  integer,
  timestamp,
} from "drizzle-orm/pg-core"

export const articles = pgTable("articles", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  excerpt: text("excerpt").notNull(),
  date: text("date").notNull(),
  category: text("category").notNull(),
  image: text("image").notNull().default(""),
  featured: boolean("featured").notNull().default(false),
  published: boolean("published").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
})

export const heroSlides = pgTable("hero_slides", {
  id: serial("id").primaryKey(),
  category: text("category").notNull(),
  categoryIcon: text("category_icon").notNull(),
  title: text("title").notNull(),
  subtitle: text("subtitle").notNull(),
  cta: text("cta").notNull(),
  ctaHref: text("cta_href").notNull(),
  imageSrc: text("image_src").notNull().default(""),
  sortOrder: integer("sort_order").notNull().default(0),
})

export const stats = pgTable("stats", {
  id: serial("id").primaryKey(),
  value: integer("value").notNull(),
  suffix: text("suffix").notNull().default(""),
  label: text("label").notNull(),
  desc: text("desc").notNull(),
  sortOrder: integer("sort_order").notNull().default(0),
})

export const kontak = pgTable("kontak", {
  id: serial("id").primaryKey(),
  phone: text("phone").notNull(),
  phoneDisplay: text("phone_display").notNull(),
  email: text("email").notNull(),
  address: text("address").notNull(),
  mapsEmbed: text("maps_embed").notNull().default(""),
})

export const bankInfo = pgTable("bank_info", {
  id: serial("id").primaryKey(),
  bank: text("bank").notNull(),
  noRek: text("no_rek").notNull(),
  atasNama: text("atas_nama").notNull(),
  sortOrder: integer("sort_order").notNull().default(0),
})

export type Article = typeof articles.$inferSelect
export type NewArticle = typeof articles.$inferInsert

export type HeroSlide = typeof heroSlides.$inferSelect
export type NewHeroSlide = typeof heroSlides.$inferInsert

export type Stat = typeof stats.$inferSelect
export type NewStat = typeof stats.$inferInsert

export type Kontak = typeof kontak.$inferSelect
export type NewKontak = typeof kontak.$inferInsert

export type BankInfo = typeof bankInfo.$inferSelect
export type NewBankInfo = typeof bankInfo.$inferInsert
