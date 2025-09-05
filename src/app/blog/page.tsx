import Card from "@/components/card";
import Button from "@/components/Button";
import Header from "@/components/Header";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

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
    mainImage
  }`;

  return await client.fetch(query);
}

export const metadata = {
  title: "Blogi | Intiimina",
  description:
    "Ajatuksia ja oivalluksia seksuaalisuudesta, sukupuolesta ja moninaisuudesta",
};

export default async function Blog() {
  const posts = await getPosts();

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

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.length === 0 ? (
            <Card
              title="Tulossa pian!"
              description="Blogitekstejä ei ole vielä julkaistu. Pysy kuulolla!"
            ></Card>
          ) : (
            posts.map((p) => (
              <Card
                key={p._id}
                title={p.title}
                description={p.description}
                imageUrl={
                  p.mainImage
                    ? urlFor(p.mainImage).width(800).auto("format").url()
                    : undefined
                }
              >
                <Button
                  href={`/blog/${p.slug?.current || ""}`}
                  className="mt-4 w-full"
                >
                  Lue
                </Button>
                {p.categories?.map((cat) => (
                  <div
                    key={cat.title}
                    className="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 my-2 rounded-full mr-2 mb-2"
                  >
                    {cat.title}
                  </div>
                ))}
              </Card>
            ))
          )}
        </div>
      </main>
    </div>
  );
}
