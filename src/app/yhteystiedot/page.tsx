import Header from "@/components/Header";
import ServiceCards from "@/components/ServiceCards";
import RichText from "@/lib/RichText";
import getPageBySlug from "@/sanity/lib/getPage";

export default async function Contacts() {
  const page = await getPageBySlug("contacts");
  const title = page?.title || "Yhteystiedot";
  const content = page?.content;
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">{title}</h1>
        <div className="prose max-w-none">
          <RichText value={content} />
        </div>
        <ServiceCards cards={page?.cards} />
      </main>
    </div>
  );
}
