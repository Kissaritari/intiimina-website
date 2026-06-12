"use client";

import { useMemo, useState } from "react";
import Card from "@/components/card";
import Button from "@/components/Button";
import { urlFor } from "@/sanity/lib/image";

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt?: string;
  mainImage?: any;
  description?: string;
  categories?: { title: string; description?: string }[];
};

export default function ClientBlog({ posts }: { posts: Post[] }) {
  const [filters, setFilters] = useState<string[]>([]);

  // Unique available category titles for filter UI
  const availableCategories = useMemo(() => {
    const set = new Map<string, boolean>();
    posts.forEach((p) => p.categories?.forEach((c) => set.set(c.title, true)));
    return Array.from(set.keys());
  }, [posts]);

  const filteredPosts = useMemo(() => {
    if (filters.length === 0) return posts;
    return posts.filter((post) => {
      if (!post.categories) return false;
      const titles = post.categories.map((c) => c.title);
      // return true if at least one selected filter is present in the post's categories
      return filters.some((f) => titles.includes(f));
    });
  }, [posts, filters]);

  function toggleFilter(title: string) {
    setFilters((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  }

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2">
        {availableCategories.map((cat) => {
          const active = filters.includes(cat);
          return (
            <button
              key={cat}
              onClick={() => toggleFilter(cat)}
              className={`text-xs px-3 py-1 rounded-full border ${active ? "bg-[var(--color-petrol)] text-[var(--color-ivory)] border-[var(--color-petrol)]" : "bg-[var(--color-ivory)] text-[var(--color-graphite)] border-[var(--color-sage)]"}`}
            >
              {cat}
            </button>
          );
        })}
        {filters.length > 0 && (
          <button
            onClick={() => setFilters([])}
            className="text-xs px-3 py-1 rounded-full border bg-[var(--color-terracotta)]/15 text-[var(--color-terracotta)] border-[var(--color-terracotta)]"
          >
            Tyhjennä suodattimet
          </button>
        )}
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.length === 0 ? (
          <Card
            title="Tulossa pian!"
            description="Blogitekstejä ei ole vielä julkaistu. Pysy kuulolla!"
          ></Card>
        ) : (
          filteredPosts.map((p) => (
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
              <div className="mt-2 flex flex-wrap gap-1 p-2 rounded-lg bg-[var(--color-ivory)] border border-[var(--color-sage)]">
                {p.categories?.map((cat) => (
                  <div
                    key={cat.title}
                    className="bg-[var(--color-sage)]/25 text-[var(--color-petrol)] text-xs px-2 py-0.5 rounded-full"
                  >
                    {cat.title}
                  </div>
                ))}
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}


