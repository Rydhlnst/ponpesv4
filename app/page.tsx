import { Navbar } from "@/components/navbar"
import { HeroCarousel } from "@/components/hero-carousel"
import { StatsSection } from "@/components/stats-section"
import { WhyUsSection } from "@/components/why-us-section"
import { CategorySection } from "@/components/category-section"
import { GallerySection } from "@/components/gallery-section"
import { HowToDonate } from "@/components/how-to-donate"
import { NewsSection } from "@/components/news-section"
import { QuoteSection } from "@/components/quote-section"
import { PartnersSection } from "@/components/partners-section"
import { DonateBanner } from "@/components/donate-banner"
import { Footer } from "@/components/footer"
import { getHeroSlides, getStats } from "@/lib/data"

export const dynamic = "force-dynamic"

export default async function Home() {
  const [slides, statItems] = await Promise.all([getHeroSlides(), getStats()])

  return (
    <>
      <Navbar />
      <main>
        <HeroCarousel slides={slides} />
        <StatsSection items={statItems} />
        <WhyUsSection />
        <CategorySection />
        <GallerySection />
        <HowToDonate />
        <NewsSection />
        <QuoteSection />
        <PartnersSection />
        <DonateBanner />
      </main>
      <Footer />
    </>
  )
}
