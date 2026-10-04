import { defineField, defineType } from 'sanity'

export const techStackSection = defineType({
  name: 'techStackSection',
  title: 'Tech Stack Section',
  type: 'document',
  fields: [
    defineField({
      name: 'sectionTag',
      title: 'Section Tag',
      type: 'string',
      initialValue: 'Engineering & Cloud Stack',
    }),
    defineField({
      name: 'skills',
      title: 'Stack Skills / Pills',
      type: 'array',
      of: [{ type: 'string' }],
      initialValue: [
        'Hostinger Origin',
        'AWS (EC2 / S3)',
        'Cloudflare CDN Edge',
        'Linux CLI & Bash',
        'Ubuntu Server',
        'Git & GitHub',
        'PHP 8.2 (MU-Plugins)',
        'WooCommerce Core',
        'Elementor Engine',
        'JavaScript (ES6+)',
        'HTML5 / Modern CSS',
        'WP Code Snippets',
      ],
    }),
  ],
})
