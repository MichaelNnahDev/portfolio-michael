import { defineField, defineType } from 'sanity'

export const featureGridBlock = defineType({
  name: 'featureGridBlock',
  title: 'Feature / Services Grid',
  type: 'object',
  fields: [
    defineField({ name: 'sectionTag', title: 'Section Tag', type: 'string' }),
    defineField({ name: 'heading', title: 'Section Heading', type: 'string' }),
    defineField({
      name: 'items',
      title: 'Grid Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Item Title', type: 'string' }),
            defineField({ name: 'description', title: 'Item Description', type: 'text', rows: 3 }),
            defineField({ name: 'badge', title: 'Tech / Category Tag', type: 'string' }),
          ],
        },
      ],
    }),
  ],
})
