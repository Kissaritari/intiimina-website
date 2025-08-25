import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const homepageType = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'heroTitle', title: 'Hero title', type: 'string'}),
    defineField({name: 'heroText', title: 'Hero text', type: 'string'}),
    defineField({name: 'blogIntro', title: 'Blog intro', type: 'string'}),
    defineField({name: 'contactIntro', title: 'Contact intro', type: 'string'}),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [defineArrayMember({type: 'service'})],
    }),
    defineField({name: 'content', title: 'Content', type: 'blockContent'}),
  ],
  preview: {select: {title: 'title'}},
})
