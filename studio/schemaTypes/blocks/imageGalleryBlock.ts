import { defineField, defineType } from 'sanity'

export const imageGalleryBlock = defineType({
  name: 'imageGalleryBlock',
  title: 'Image / Gallery Block',
  type: 'object',
  fields: [
    defineField({
      name: 'caption',
      title: 'Gallery / Image Section Caption',
      type: 'string',
    }),
    defineField({
      name: 'layout',
      title: 'Display Layout',
      type: 'string',
      options: {
        list: [
          { title: 'Single Full-Width Feature Image', value: 'full' },
          { title: '2-Column Grid', value: 'grid-2' },
          { title: '3-Column Grid', value: 'grid-3' },
        ],
        layout: 'radio',
      },
      initialValue: 'full',
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alternative Text (Accessibility & SEO)',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'caption',
              title: 'Individual Caption',
              type: 'string',
            }),
          ],
        },
      ],
      validation: (rule) => rule.required().min(1),
    }),
  ],
})
