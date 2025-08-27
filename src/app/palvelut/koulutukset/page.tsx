import Header from "@/components/Header";
import RichText from "@/lib/RichText";
import ServiceCards from "@/components/ServiceCards";
import { getPageBySlug } from "@/sanity/lib/getPage";
import Link from "next/link";

export default async function Koulutukset() {
  const page = await getPageBySlug("koulutukset");

  const content = page?.content;

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">
          {page?.title ||
            "Koulutukset sosiaali-, terveys- ja kasvatusaloille sekä vuorovaikutusammattilaisille"}
        </h1>
        <div className="prose max-w-none">
          <RichText value={content} />
          <ServiceCards cards={page?.cards} />
        </div>
      </main>
    </div>
  );
}
