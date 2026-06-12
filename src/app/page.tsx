import { Metadata } from "next";
import Card from "@/components/card";
import Button from "@/components/Button";
import { getHomepage, renderPortableText } from "@/sanity/lib/getPage";
import Header from "@/components/Header";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/carousel";

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

export default async function Home() {
  // Fetch the homepage singleton from Sanity.
  const page = await getHomepage();

  const heroTitle = page?.heroTitle || null;
  const heroText = page?.heroText || null;
  const blogIntro = page?.blogIntro || null;
  const services = page?.services || [];
  const contactIntro = page?.contactIntro || null;

  return (
    <div className="min-h-screen flex flex-col  bg-background text-text overflow-clip">
      {/* Hero Section */}
      <div className="relative h-[80vh]  bg-linear-to-r from-[#168385] via-highlight to-[#e9865e]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-4xl mx-auto text-center px-4">
            <h1 className="heading-primary md:text-6xl text-5xl font-bold tracking-tight mb-6">
              {heroTitle || <>Intiiminä koulutus ja konsultaatio</>}
            </h1>
            <p className="md:text-xl text-2xl max-w-2xl mx-auto mb-8 text-shadow-2xs">
              {heroText || <>Rohkeasti, lempeästi ja inhimillisesti.</>}
            </p>
            <Button href="#contact">Ota yhteyttä</Button>
          </div>
        </div>
      </div>
      <Header />

      <main className="flex-1 flex flex-col items-center section-padding section-spacing">
        {/* About Section */}
        {/*
        <section
          id="about"
          className="container-narrow text-center flex-col gap-4"
        >
          <h3 className="text-2xl font-bold mb-2">Tietoa</h3>
          <p className="text-body">Laajempi tietojuttu, ehkä kuva / kuvia.</p>
        </section>
      */}

        {/* Services Section */}
        <section id="services" className="w-full max-w-4xl mx-auto flex-col gap-6 mt-12">
          <h3 className="text-2xl font-bold mb-2 text-center ">Palvelut</h3>
          <Carousel opts={{ loop: true }} className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {services.length > 0 ? (
                services.map((s: any, idx: number) => (
                  <CarouselItem key={idx}>
                    <Card title={s.title}>
                      {s.description ? (
                        <div className="text-text">
                          {renderPortableText(s.description)}
                        </div>
                      ) : null}
                    </Card>
                  </CarouselItem>
                ))
              ) : (
                <>
                  <CarouselItem>
                    <Card title="Konsultointi">
                      <p className="text-text">
                        Tarjoan räätälöityjä konsultointipalveluita eri
                        toimialoille.
                      </p>
                    </Card>
                  </CarouselItem>
                  <CarouselItem>
                    <Card title="Koulutus">
                      <p className="text-text">
                        Tarjoan monipuolisia koulutuspalveluita organisaatioille
                        ja yksityishenkilöille.
                      </p>
                    </Card>
                  </CarouselItem>
                  <CarouselItem>
                    <Card title="Seksuaalineuvonta">
                      <p className="text-text">
                        Ammattimaista seksuaalineuvontaa yksilöille ja pareille.
                      </p>
                    </Card>
                  </CarouselItem>
                  <CarouselItem>
                    <Card title="Työnohjaus">
                      <p className="text-text">
                        Työnohjauspalvelut ammattilaisille ja työyhteisöille.
                      </p>
                    </Card>
                  </CarouselItem>
                </>
              )}
            </CarouselContent>
            <CarouselPrevious disabled={false}/>
            <CarouselNext disabled={false}/>
          </Carousel>
        </section>

        {/* Blog Section Link */}
        <section className="container-narrow text-center mt-8">
          <h3 className="text-2xl font-bold mb-2">Blogi</h3>
          <p className="text-body mb-4">
            {blogIntro || "Lue ajatuksiani ja tarinoita työstäni."}
          </p>
          <Button href="/blog">Siirry blogiin</Button>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="container-narrow text-center mt-16 flex-col gap-4"
        >
          <h3 className="text-2xl font-bold mb-2">Ota yhteyttä</h3>
          <p className="text-body mb-4">
            {contactIntro ||
              "Haluatko keskustella palveluistani? Ota yhteyttä."}
          </p>
          <Button href="mailto:intiimina@proton.me" external>
            Lähetä sähköpostia
          </Button>
        </section>
      </main>
      {/* Memberships / Logos */}
      <section className="container-narrow text-center mt-12 flex-col gap-4">
        <h3 className="text-2xl font-bold mb-2">Jäsenyydet</h3>

        <div className="flex items-center justify-center mt-4">
          {/* Use next/image for optimized loading; image lives in /public */}
          <Image
            src="/yrittajatLogo.png"
            alt="Yrittäjät Logo"
            width={240}
            height={80}
            className="object-contain my-2"
          />
        </div>
      </section>
    </div>
  );
}
