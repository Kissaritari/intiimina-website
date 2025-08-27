import Button from "@/components/Button";
import Card from "@/components/card";
import Header from "@/components/Header";
import RichText from "@/lib/RichText";
import ServiceCards from "@/components/ServiceCards";
import { getPageBySlug } from "@/sanity/lib/getPage";

export default async function Seksuaalineuvonta() {
  const page = await getPageBySlug("seksuaalineuvonta");
  const title =
    page?.title || "Seksuaalineuvonta – tukea ja ymmärrystä sinulle";
  const content = page?.content;

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">{title}</h1>
        <RichText value={content} />
        <ServiceCards cards={page?.cards} />
      </main>
    </div>
  );
}
