import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import Header from '@/components/Header'
import Button from '@/components/Button'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'

type Props = {
  params: { slug: string }
}

type Post = {
  _id: string
  title: string
  slug: { current: string }
  publishedAt?: string
  mainImage?: any
  description?: string
  body?: any
}

async function getPostBySlug(slug: string): Promise<Post | null> {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    publishedAt,
    mainImage,
    body
  }`

  return await client.fetch(query, { slug })
}

export async function generateMetadata({ params }: Props) {
  const post = await getPostBySlug(params.slug)
  if (!post) return {}

  const imageUrl = post.mainImage ? urlFor(post.mainImage).width(1200).height(630).auto('format').url() : '/yrittajatLogo.png'

  return {
    title: `${post.title} | Intiimina`,
    description: post.body && Array.isArray(post.body) ? undefined : post.title,
    openGraph: {
      title: post.title,
      description: post.description || undefined,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    alternates: {
      canonical: `https://intiimina.fi/blog/${params.slug}`,
    },
  }
}

export default async function PostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
        <Header />
        <main className="max-w-4xl mx-auto py-16 px-4">
          <h1 className="text-2xl font-semibold">Post not found</h1>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      <Header />
      <main className="max-w-4xl mx-auto py-16 px-4">
      
        <article>
          <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
          {post.mainImage && (
            <Image
              src={urlFor(post.mainImage).width(1600).auto('format').url()}
              alt={post.title}
              className="w-full rounded mb-6"
              width={1600}
              height={900}
              priority={true}
            />
          )}

          <div className="prose max-w-none">
            {post.body ? (
              <PortableText value={post.body} />
            ) : (
              <p>Tämän artikkelin sisältöä ei ole saatavilla.</p>
            )}
          </div>
        </article>
          <div className="mt-6">
          <Button href="/blog" className="px-4 py-2">&larr; Takaisin blogiin</Button>
        </div>
      </main>
    </div>
  )
}

export async function generateStaticParams() {
  // provide fallback list of slugs for static generation; keep it simple
  const query = `*[_type == "post" && defined(slug.current)]{ "slug": slug.current }`
  const slugs: { slug: string }[] = await client.fetch(query)
  return slugs.map((s) => ({ slug: s.slug }))
}
