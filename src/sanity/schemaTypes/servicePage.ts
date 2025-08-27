import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

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
    defineField({
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [defineArrayMember({type: 'card'})],
    }),
  ],
  preview: {select: {title: 'title'}},
})
