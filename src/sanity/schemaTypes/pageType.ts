import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const pageType = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({name: 'title', type: 'string'}),
    defineField({name: 'slug', type: 'slug', options: {source: 'title'}}),
    defineField({name: 'heroTitle', title: 'Hero title', type: 'string'}),
    defineField({name: 'heroText', title: 'Hero text', type: 'string'}),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [defineArrayMember({type: 'service'})],
    }),
    defineField({name: 'blogIntro', type: 'string'}),
    defineField({name: 'contactIntro', type: 'string'}),
    defineField({name: 'content', title: 'Content', type: 'blockContent'}),
  ],
  preview: {
    select: {title: 'title'},
  },
})
