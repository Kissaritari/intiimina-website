import React from 'react'
import Card from '@/components/card'
import Button from '@/components/Button'
import { urlFor } from '@/sanity/lib/image'
import RichText from '@/lib/RichText'

type SanityImage = any

type CardItem = {
  _key?: string
  title?: string
  description?: string
  image?: SanityImage
  link?: string
}

type Props = {
  cards?: CardItem[]
}

export default function ServiceCards({ cards }: Props) {
  if (!cards || !cards.length) return null

  return (
    <div className="mt-8">
      {/* On small screens: horizontal scrollable row. On md+: grid columns */}
      <div className="flex space-x-4 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:gap-8 md:space-x-0">
        {cards.map((c) => {
          const key = c._key || c.title || Math.random().toString(36).slice(2, 9)
          const imageUrl = c.image ? urlFor(c.image).width(800).url() : undefined

          return (
            <div key={key} className="min-w-[260px] md:min-w-0 flex-shrink-0">
              <Card title={c.title || ''} description={c.description ? <RichText value={c.description} /> : undefined} imageUrl={imageUrl}>
                {c.link ? (
                  <div className="mt-4">
                    <Button href={c.link} className="inline-block">Varaa</Button>
                  </div>
                ) : null}
              </Card>
            </div>
          )
        })}
      </div>
    </div>
  )
}
