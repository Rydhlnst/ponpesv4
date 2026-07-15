import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { GallerySection } from "@/components/gallery-section"

export default function GaleriPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Galeri Foto"
          subtitle="29 foto yang merekam kehidupan dan kegiatan santri Pondok Pesantren Darussalam Bacan — dari kelas hingga ladang, dari asrama hingga masjid."
          crumbs={[{ label: "Tentang", href: "/tentang" }, { label: "Galeri" }]}
          accent="Galeri"
        />
        <GallerySection defaultShowAll={true} />
      </main>
      <Footer />
    </>
  )
}
