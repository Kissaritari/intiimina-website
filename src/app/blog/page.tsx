import Card from "@/components/card";
import Button from "@/components/Button";
import Header from "@/components/Header";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import ClientBlog from "./ClientBlog";

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt?: string;
  mainImage?: any;
  description?: string;
  categories?: category[];
};
export interface category {
  title: string;
  description?: string;
}

async function getPosts(): Promise<Post[]> {
  // Fetch posts regardless of whether `publishedAt` is set so draft/unpublished posts show up
  // while debugging. Ordering will put posts with a publishedAt first.
  const query = `*[_type == "post"] | order(publishedAt desc){
    _id,
    title,
    "slug": slug,
    publishedAt,
    mainImage,
      categories[]->{
    title,
    description
  }
  }`;

  return await client.fetch(query);
}

export const metadata = {
  title: "Blogi | Intiimina",
  description:
    "Ajatuksia ja oivalluksia seksuaalisuudesta, sukupuolesta ja moninaisuudesta",
};

export default async function Blog() {
  const Posts = await getPosts();

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      <Header />
      <main className="max-w-4xl mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Blogi</h1>
          <p className="text-xl text-gray-600 mb-8">
            Ajatuksia ja oivalluksia hyvinvoinnista, moninaisuudesta ja
            rohkeudesta.
          </p>
        </div>

        {/* Client-side interactive list (handles filters) */}
        <ClientBlog posts={Posts} />
      </main>
    </div>
  );
}
