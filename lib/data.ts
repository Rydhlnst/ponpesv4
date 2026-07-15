import fs from "fs"
import path from "path"

const DATA_DIR = path.join(process.cwd(), "data")

function readJson<T>(filename: string): T {
  const filePath = path.join(DATA_DIR, filename)
  const raw = fs.readFileSync(filePath, "utf-8")
  return JSON.parse(raw) as T
}

function writeJson(filename: string, data: unknown): void {
  const filePath = path.join(DATA_DIR, filename)
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8")
}

// --- Articles ---
export interface Article {
  id: string
  title: string
  excerpt: string
  date: string
  category: string
  image: string
  featured: boolean
  published: boolean
}

export function getArticles(): Article[] {
  return readJson<Article[]>("articles.json")
}

export function saveArticles(articles: Article[]): void {
  writeJson("articles.json", articles)
}

// --- Stats ---
export interface StatItem {
  value: number
  suffix: string
  label: string
  desc: string
}

export interface StatsData {
  items: StatItem[]
}

export function getStats(): StatsData {
  return readJson<StatsData>("stats.json")
}

export function saveStats(data: StatsData): void {
  writeJson("stats.json", data)
}

// --- Hero ---
export interface HeroSlide {
  id: string
  category: string
  categoryIcon: string
  title: string
  subtitle: string
  cta: string
  ctaHref: string
  imageSrc: string
}

export interface HeroData {
  slides: HeroSlide[]
}

export function getHero(): HeroData {
  return readJson<HeroData>("hero.json")
}

export function saveHero(data: HeroData): void {
  writeJson("hero.json", data)
}

// --- Kontak ---
export interface BankInfo {
  id: string
  bank: string
  noRek: string
  atasNama: string
}

export interface KontakData {
  phone: string
  phoneDisplay: string
  email: string
  address: string
  mapsEmbed: string
  banks: BankInfo[]
}

export function getKontak(): KontakData {
  return readJson<KontakData>("kontak.json")
}

export function saveKontak(data: KontakData): void {
  writeJson("kontak.json", data)
}
