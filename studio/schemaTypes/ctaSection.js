import { defineType, defineField } from 'sanity';

export const ctaSection = defineType({
  name: 'ctaSection',
  title: 'Footer Call To Action',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Need Enterprise-Grade WordPress?',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      initialValue:
        'Available for zero-downtime migrations, plugin-free WooCommerce custom engineering, and automated cloud retainers.',
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Label',
      type: 'string',
      initialValue: 'Hire on Upwork Today →',
    }),
    defineField({
      name: 'buttonUrl',
      title: 'Button URL',
      type: 'url',
      initialValue: 'https://www.upwork.com',
    }),
  ],
});
