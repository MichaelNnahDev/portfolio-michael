import { defineField, defineType } from 'sanity'

export const pageHeroBlock = defineType({
  name: 'pageHeroBlock',
  title: 'Page Hero Header',
  type: 'object',
  fields: [
    defineField({ name: 'badge', title: 'Top Tag / Badge', type: 'string' }),
    defineField({ name: 'heading', title: 'Main Heading', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'subheading', title: 'Subheading / Paragraph', type: 'text', rows: 3 }),
  ],
})
