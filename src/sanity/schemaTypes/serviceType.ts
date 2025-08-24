import {defineField, defineType} from 'sanity'

// Small reusable object type for listing services on pages
export const serviceType = defineType({
  name: 'service',
  title: 'Service',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    }),
  ],
})
