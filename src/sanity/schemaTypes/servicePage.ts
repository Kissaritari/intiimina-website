import {DocumentTextIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const servicePageType = defineType({
  name: 'servicePage',
  title: 'Service Page',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'slug', type: 'slug', options: {source: 'title'}}),
    defineField({name: 'intro', title: 'Intro', type: 'string'}),
    defineField({name: 'content', title: 'Content', type: 'blockContent'}),
    // Cards section: allow multiple small card objects for service pages
    defineField({
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [
        defineField({
          type: 'object',
          name: 'card',
          title: 'Card',
          fields: [
            defineField({name: 'title', title: 'Title', type: 'string'}),
            // Use blockContent so the description can contain rich text (bold, headings, links, etc.)
            defineField({name: 'description', title: 'Description', type: 'blockContent'}),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {hotspot: true},
              fields: [
                defineField({name: 'alt', title: 'Alt text', type: 'string'}),
              ],
            }),
            defineField({name: 'link', title: 'Link', type: 'url'}),
          ],
          preview: {
            select: {title: 'title', media: 'image'},
          },
        }),
      ],
    }),
  ],
  preview: {select: {title: 'title'}},
})
