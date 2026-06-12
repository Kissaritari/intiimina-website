import Header from "@/components/Header";
import RichText from "@/lib/RichText";
import Card from "@/components/card";
import Button from "@/components/Button";
import { urlFor } from "@/sanity/lib/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/carousel";
import { getPageBySlug } from "@/sanity/lib/getPage";
import { CardItem } from "@/components/ServiceCards";

export default async function Koulutukset() {
  const page = await getPageBySlug("koulutukset");

  const content = page?.content;

  return (
    <div className="min-h-screen flex flex-col  bg-background text-text">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">
          {page?.title ||
            "Koulutukset sosiaali-, terveys- ja kasvatusaloille sekä vuorovaikutusammattilaisille"}
        </h1>
        <div className="prose max-w-none">
          <RichText value={content} />
          {page?.cards && page.cards.length > 0 ? (
            <div className="mt-12">
              <Carousel opts={{ loop: true }} className="w-full">
                <CarouselContent>
                  {page.cards.map((c:CardItem) => {
                    const key =
                      c._key || c.title || Math.random().toString(36).slice(2, 9);
                    const imageUrl = c.image
                      ? urlFor(c.image).width(800).url()
                      : undefined;

                    return (
                      <CarouselItem key={key}>
                        <div className="mx-auto w-full max-w-105 px-2 md:px-4">
                          <Card
                            className="bg-background"
                            title={c.title || ""}
                            description={
                              c.description ? (
                                <RichText align="left" value={c.description} />
                              ) : undefined
                            }
                            imageUrl={imageUrl}
                          >
                            {c.link && (
                              <div className="mt-4">
                                <Button href={c.link} className="w-full md:w-auto">
                                  Varaa
                                </Button>
                              </div>
                            )}
                          </Card>
                        </div>
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          ) : null}
        </div>
      </main>
    </div>
  );
}




