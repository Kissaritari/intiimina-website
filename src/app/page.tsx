import { Metadata } from "next";
import Card from "@/components/card";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Intiiminä koulutus ja konsultaatio",
  description: "Tarjoamme ammattimaista seksuaalineuvontaa, koulutusta ja konsultaatiota - rohkeasti, lempeästi ja inhimillisesti.",
  openGraph: {
    title: "Intiiminä koulutus ja konsultaatio",
    description: "Tarjoamme ammattimaista seksuaalineuvontaa, koulutusta ja konsultaatiota - rohkeasti, lempeästi ja inhimillisesti.",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Intiiminä',
      },
    ],
  },
};
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/carousel";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      {/* Hero Section */}
      <div className="relative h-[80vh] gradient-primary">
        <div className="absolute inset-0 flex-center">
          <div className="container-wide text-center px-4">
            <h1 className="heading-primary mb-6">
              Intiiminä koulutus ja konsultaatio
            </h1>
            <p className="text-body-large max-w-2xl mx-auto mb-8 text-shadow-2xs">
              Rohkeasti, lempeästi ja inhimillisesti.
            </p>
            <Button href="#contact">
              Ota yhteyttä
            </Button>
          </div>
        </div>
      </div>

      <Header />

      <main className="flex-1 flex-col-center section-padding section-spacing">
     

        {/* About Section */}
        <section
          id="about"
          className="container-narrow text-center flex-col gap-4"
        >
          <h3 className="heading-tertiary">Tietoa</h3>
          <p className="text-body">
            Laajempi tietojuttu, ehkä kuva / kuvia.
          </p>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="container-wide flex-col gap-6"
        >
          <h3 className="heading-tertiary text-center">
            Palvelut
          </h3>
          <Carousel opts={{ loop: true }} className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              <CarouselItem>
                <Card title="Konsultointi">
                  <p className="text-gray-600">
                    Tarjoan räätälöityjä konsultointipalveluita eri toimialoille.
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
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        {/* Blog Section Link */}
        <section className="container-narrow text-center mt-8">
          <h3 className="heading-tertiary">
            Blogi
          </h3>
          <p className="text-body mb-4">
            Lue ajatuksiamme, vinkkejä ja tarinoita työstämme.
          </p>
          <Button href="/blog">
            Siirry blogiin
          </Button>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="container-narrow text-center mt-16 flex-col gap-4"
        >
          <h3 className="heading-tertiary">Ota yhteyttä</h3>
          <p className="text-body">
            Haluatko keskustella palveluistamme? Ota yhteyttä maksuttomaan
            alkukeskusteluun.
          </p>
          <Button href="mailto:info@intiimina.com" external>
            Lähetä sähköpostia
          </Button>
        </section>
      </main>

      <Footer />
    </div>
  );
}
