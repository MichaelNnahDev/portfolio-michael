import { defineField, defineType } from 'sanity'

export const page = defineType({
  name: 'page',
  title: 'Pages',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'seoDescription',
      title: 'Meta Description (SEO)',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'pageBuilder',
      title: 'Page Builder Sections',
      type: 'array',
      of: [
        { type: 'pageHeroBlock' },
        { type: 'featureGridBlock' },
        { type: 'richTextBlock' },
        { type: 'imageGalleryBlock' },
      ],
    }),
  ],
})
