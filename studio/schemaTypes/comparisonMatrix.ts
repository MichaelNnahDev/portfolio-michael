import { defineField, defineType } from 'sanity'

export const comparisonMatrix = defineType({
  name: 'comparisonMatrix',
  title: 'Comparison Matrix',
  type: 'document',
  fields: [
    defineField({
      name: 'sectionTag',
      title: 'Section Tag',
      type: 'string',
      initialValue: 'Engineering Difference',
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Code-First Engineering vs Plugin Overload',
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
      initialValue:
        'Direct comparisons of how these production environments operate compared to generic site setups.',
    }),
    defineField({
      name: 'rows',
      title: 'Comparison Rows',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'vector', title: 'Architecture Vector', type: 'string' }),
            defineField({ name: 'standardApproach', title: 'Standard Freelancer', type: 'string' }),
            defineField({ name: 'myApproach', title: 'My Custom Approach', type: 'string' }),
          ],
        },
      ],
      initialValue: [
        {
          vector: 'Checkout & Features',
          standardApproach: 'Installs 3–5 heavy third-party plugins',
          myApproach: 'Lightweight PHP Snippets (Payment Proof, Modals & Popups)',
        },
        {
          vector: 'Security & SEO Graph',
          standardApproach: 'Unconfigured shared headers',
          myApproach: 'Grade-A HTTP Security Headers + Lightweight PHP Social Graph',
        },
        {
          vector: 'Origin & Edge Routing',
          standardApproach: 'Standard DNS with migration downtime',
          myApproach: 'Hardened Hostinger Origin + Zero-Downtime Cloudflare Edge',
        },
        {
          vector: 'Backups & Redundancy',
          standardApproach: 'Manual local zip exports',
          myApproach: 'Automated Daily Encrypted Snapshots to Amazon S3',
        },
      ],
    }),
  ],
})
