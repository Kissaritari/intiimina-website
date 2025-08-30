import { PortableText, PortableTextComponents } from '@portabletext/react'
import { PortableTextBlock } from '@portabletext/types'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image' // adjust path if needed

type RichTextProps = {
  value: PortableTextBlock[]
  align?: 'left' | 'justify'
}

export default function RichText({ value, align = 'justify' }: RichTextProps) {
  const components: PortableTextComponents = {
    block: {
      h1: ({ children }) => <h1 className="text-4xl font-bold my-6">{children}</h1>,
      h2: ({ children }) => <h2 className="text-3xl font-semibold my-5">{children}</h2>,
      h3: ({ children }) => <h3 className="text-2xl font-semibold my-4">{children}</h3>,
      h4: ({ children }) => <h4 className="text-xl font-semibold my-3">{children}</h4>,
      blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4 text-gray-600">
          {children}
        </blockquote>
      ),
      normal: ({ children }) => {
        const extractText = (node: any): string => {
          if (node == null) return ''
          if (typeof node === 'string' || typeof node === 'number') return String(node)
          if (Array.isArray(node)) return node.map(extractText).join('')
          if (typeof node === 'object' && node.props) return extractText(node.props.children)
          return ''
        }

        const text = extractText(children)

        if (!text.trim()) {
          return <p className="mb-6">&nbsp;</p>
        }

        return (
          <p className={`mb-6 leading-relaxed ${align === 'left' ? 'text-left' : 'text-justify'}`}>
            {children}
          </p>
        )
      },
    },
    types: {
      image: ({ value }) => {
        if (!value?.asset?._ref) return null
        return (
          <div className="my-8">
            <Image
              src={urlFor(value).width(800).url()}
              alt={value.alt || ' '}
              width={800}
              height={450}
              className="rounded-lg object-cover"
            />
          </div>
        )
      },
    },
    marks: {
      link: ({ children, value }) => {
        const href = (value as { href: string }).href
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            {children}
          </a>
        )
      },
    },
    list: {
      bullet: ({ children }) => <ul className="list-disc pl-10 space-y-2 py-4">{children}</ul>,
      number: ({ children }) => <ol className="list-decimal pl-10 space-y-2 py-4">{children}</ol>,
    },
    listItem: {
      bullet: ({ children }) => <li>{children}</li>,
      number: ({ children }) => <li>{children}</li>,
    },
  }

  return <PortableText value={value} components={components} />
}
