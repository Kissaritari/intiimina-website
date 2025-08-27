import Header from "@/components/Header";
import RichText from "@/lib/RichText";
import ServiceCards from "@/components/ServiceCards";
import { getPageBySlug } from "@/sanity/lib/getPage";

export default async function Konsultaatiot() {
  const page = await getPageBySlug("konsultaatiot");
  const title = page?.title || "Sparraus ja konsultaatio";
  const content = page?.content;

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">{title}</h1>
        <div className="prose max-w-none">
          <RichText value={content} />
          <ServiceCards cards={page?.cards} />
        </div>
      </main>
    </div>
  );
}
