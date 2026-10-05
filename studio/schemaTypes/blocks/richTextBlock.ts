import { defineField, defineType } from 'sanity'

export const richTextBlock = defineType({
  name: 'richTextBlock',
  title: 'Rich Content Block',
  type: 'object',
  fields: [
    defineField({
      name: 'content',
      title: 'Content',
      type: 'text',
      rows: 8,
      validation: (rule) => rule.required(),
    }),
  ],
})
