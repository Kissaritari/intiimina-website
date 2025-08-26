import React from 'react'
import { client } from './client'

type SanityBlock = any

export async function getPageBySlug(slug: string) {
  // Only service pages are used for non-home pages now.
  const query = `*[_type == "servicePage" && slug.current == $slug][0]{..., content[]}`
  return await client.fetch(query, { slug })
}

export async function getHomepage() {
  // Fetch the singleton homepage document. Using document ID 'homepage' is safer if present.
  const byId = await client.fetch(`*[_id == "homepage"][0]{..., services[]->, content[]}`)
  if (byId) return byId

  // Fallback: fetch first document of type homepage
  const query = `*[_type == "homepage"][0]{..., services[]->, content[]}`
  return await client.fetch(query)
}

// Minimal Portable Text renderer for common block types used in the site.
export function renderPortableText(blocks: SanityBlock[] | undefined) {
  if (!blocks || blocks.length === 0) return null

  return blocks.map((block, i) => {
    if (block._type === 'block') {
      const style = block.style || 'normal'
  const children = (block.children || []).map((c: any) => c.text || '').join('')

  if (style === 'h1') return <h1 key={i}>{children}</h1>
  if (style === 'h2') return <h2 key={i}>{children}</h2>
  if (style === 'h3') return <h3 key={i}>{children}</h3>
  if (style === 'blockquote') return <blockquote key={i}>{children}</blockquote>

  // If the block has no text (an empty line in the editor), render a
  // paragraph with a non-breaking space and the site's paragraph margin so
  // the empty line becomes visible in the output instead of being skipped.
  if (!children.trim()) return <p key={i} className="mb-4">&nbsp;</p>

  return <p key={i} className="mb-4">{children}</p>
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
