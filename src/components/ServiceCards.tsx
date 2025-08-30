import React from "react";
import Card from "@/components/card";
import Button from "@/components/Button";
import { urlFor } from "@/sanity/lib/image";
import RichText from "@/lib/RichText";
import { PortableTextBlock } from "@portabletext/types";

type SanityImage = any;

type CardItem = {
  _key?: string;
  title?: string;
  description?: PortableTextBlock[];
  image?: SanityImage;
  link?: string;
};

type Props = {
  cards?: CardItem[];
};

export default function ServiceCards({ cards }: Props) {
  if (!cards || cards.length === 0) return null;

  return (
    <div className="mt-12">
      <div className="flex gap-6 pb-6 md:gap-8 overflow-x-scroll scroll-px-4">
        {cards.map((c) => {
          const key =
            c._key || c.title || Math.random().toString(36).slice(2, 9);
          const imageUrl = c.image
            ? urlFor(c.image).width(800).url()
            : undefined;

          return (
            <div
              key={key}
              className="min-w-[260px] md:min-w-[320px] lg:min-w-[380px] xl:min-w-[420px] flex-shrink-0 "
            >
              <Card
                className="bg-gray-100 "
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
          );
        })}
      </div>
    </div>
  );
}
