import React from 'react'
import { client } from './client'

type SanityBlock = any

export async function getPageBySlug(slug: string) {
  const query = `*[_type == "page" && slug.current == $slug][0]{..., content[]}`
  return await client.fetch(query, { slug })
}

// Minimal Portable Text renderer for common block types used in the site.
export function renderPortableText(blocks: SanityBlock[] | undefined) {
  if (!blocks || blocks.length === 0) return null

  return blocks.map((block, i) => {
    if (block._type === 'block') {
      const style = block.style || 'normal'
      const children = (block.children || []).map((c: any) => c.text).join('')

      if (style === 'h1') return <h1 key={i}>{children}</h1>
      if (style === 'h2') return <h2 key={i}>{children}</h2>
      if (style === 'h3') return <h3 key={i}>{children}</h3>
      if (style === 'blockquote') return <blockquote key={i}>{children}</blockquote>

      return <p key={i}>{children}</p>
    }

    if (block._type === 'list') {
      return (
        <ul key={i}>
          {(block.items || []).map((it: any, idx: number) => (
            <li key={idx}>{it}</li>
          ))}
        </ul>
      )
    }

    // Fallback: stringify
    return <div key={i}>{JSON.stringify(block)}</div>
  })
}

export default getPageBySlug
