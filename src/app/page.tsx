import { Metadata } from "next";
import Card from "@/components/card";
import Button from "@/components/Button";
import { getHomepage, renderPortableText } from '@/sanity/lib/getPage'

// Metadata can be static or built from Sanity; we keep a default here.
export const metadata: Metadata = {
  title: "Intiiminä koulutus ja konsultaatio",
  description:
    "Tarjoamme ammattimaista seksuaalineuvontaa, koulutusta ja konsultaatiota - rohkeasti, lempeästi ja inhimillisesti.",
  openGraph: {
    title: "Intiiminä koulutus ja konsultaatio",
    description:
      "Tarjoamme ammattimaista seksuaalineuvontaa, koulutusta ja konsultaatiota - rohkeasti, lempeästi ja inhimillisesti.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Intiiminä",
      },
    ],
  },
};
import Header from "@/components/Header";
import Image from "next/image";
import Footer from "@/components/Footer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/carousel";

export default async function Home() {
  // Fetch the homepage singleton from Sanity.
  const page = await getHomepage()

  const heroTitle = page?.heroTitle || null
  const heroText = page?.heroText || null
  const blogIntro = page?.blogIntro || null
  const services = page?.services || []
  const contactIntro = page?.contactIntro || null

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      {/* Hero Section */}
      <div className="relative h-[80vh] gradient-primary">
        <div className="absolute inset-0 flex-center">
          <div className="container-wide text-center px-4">
            <h1 className="heading-primary mb-6">
              {heroTitle || (
                <>Intiiminä koulutus ja konsultaatio</>
              )}
            </h1>
            <p className="text-body-large max-w-2xl mx-auto mb-8 text-shadow-2xs">
              {heroText || (
                <>Rohkeasti, lempeästi ja inhimillisesti.</>
              )}
            </p>
            <Button href="#contact">Ota yhteyttä</Button>
          </div>
        </div>
      </div>

      <Header />

      <main className="flex-1 flex-col-center section-padding section-spacing">
        {/* About Section */}
      {  /*
        <section
          id="about"
          className="container-narrow text-center flex-col gap-4"
        >
          <h3 className="heading-tertiary">Tietoa</h3>
          <p className="text-body">Laajempi tietojuttu, ehkä kuva / kuvia.</p>
        </section>
      */}

        {/* Services Section */}
        <section id="services" className="container-wide flex-col gap-6">
          <h3 className="heading-tertiary text-center ">Palvelut</h3>
          <Carousel opts={{ loop: true }} className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {services.length > 0 ? (
                services.map((s: any, idx: number) => (
                  <CarouselItem key={idx}>
                    <Card title={s.title}>
                      {s.description ? (
                        <div className="text-gray-600">{renderPortableText(s.description)}</div>
                      ) : null}
                    </Card>
                  </CarouselItem>
                ))
              ) : (
                <>
                  <CarouselItem>
                    <Card title="Konsultointi">
                      <p className="text-gray-600">
                        Tarjoan räätälöityjä konsultointipalveluita eri
                        toimialoille.
                      </p>
                    </Card>
                  </CarouselItem>
                  <CarouselItem>
                    <Card title="Koulutus">
                      <p className="text-gray-600">
                        Tarjoan monipuolisia koulutuspalveluita organisaatioille ja
                        yksityishenkilöille.
                      </p>
                    </Card>
                  </CarouselItem>
                  <CarouselItem>
                    <Card title="Seksuaalineuvonta">
                      <p className="text-gray-600">
                        Ammattimaista seksuaalineuvontaa yksilöille ja pareille.
                      </p>
                    </Card>
                  </CarouselItem>
                  <CarouselItem>
                    <Card title="Työnohjaus">
                      <p className="text-gray-600">
                        Työnohjauspalvelut ammattilaisille ja työyhteisöille.
                      </p>
                    </Card>
                  </CarouselItem>
                </>
              )}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        {/* Blog Section Link */}
        <section className="container-narrow text-center mt-8">
          <h3 className="heading-tertiary">Blogi</h3>
          <p className="text-body mb-4">
            {blogIntro || 'Lue ajatuksiani ja tarinoita työstäni.'}
          </p>
          <Button href="/blog">Siirry blogiin</Button>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="container-narrow text-center mt-16 flex-col gap-4"
        >
          <h3 className="heading-tertiary">Ota yhteyttä</h3>
          <p className="text-body">
            {contactIntro || 'Haluatko keskustella palveluistani? Ota yhteyttä.'}
          </p>
          <Button href="mailto:info@intiimina.com" external>
            Lähetä sähköpostia
          </Button>
        </section>
      </main>
      {/* Memberships / Logos */}
      <section className="container-narrow text-center mt-12 flex-col gap-4">
        <h3 className="heading-tertiary">Jäsenyydet</h3>

        <div className="flex items-center justify-center mt-4">
          {/* Use next/image for optimized loading; image lives in /public */}
          <Image
            src="/yrittajatLogo.png"
            alt="Yrittäjät Logo"
            width={240}
            height={80}
            className="object-contain"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}
