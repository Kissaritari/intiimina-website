import {ImageIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'

export const cardType = defineType({
  title: 'Card',
  name: 'card',
  type: 'object',
  icon: ImageIcon,
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'description', title: 'Description', type: 'blockContent'}),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({name: 'alt', title: 'Alt text', type: 'string'})],
    }),
    defineField({name: 'link', title: 'Link', type: 'url'}),
  ],
  preview: {
    select: {title: 'title', media: 'image'},
  },
})
