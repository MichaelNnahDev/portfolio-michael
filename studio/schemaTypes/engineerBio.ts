import { defineField, defineType } from 'sanity'

export const engineerBio = defineType({
  name: 'engineerBio',
  title: 'Engineer Bio Section',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      initialValue: 'Michael Nnah',
    }),
    defineField({
      name: 'title',
      title: 'Professional Title',
      type: 'string',
      initialValue: 'WordPress Performance & Cloud Infrastructure Engineer',
    }),
    defineField({
      name: 'bioParagraph1',
      title: 'Bio Paragraph 1',
      type: 'text',
      rows: 4,
      initialValue:
        'I operate at the intersection of custom WordPress development and Linux cloud administration. While many freelancers rely heavily on off-the-shelf plugins that cause database drag and security vulnerabilities, my workflow centers on clean PHP hooks, custom MU-plugins, and terminal-level optimization.',
    }),
    defineField({
      name: 'bioParagraph2',
      title: 'Bio Paragraph 2',
      type: 'text',
      rows: 4,
      initialValue:
        'Whether configuring zero-downtime Cloudflare edge proxies, hardening Hostinger origin nodes with Grade-A HTTP headers, or automating encrypted daily MySQL snapshots to Amazon S3, every site is engineered for peak conversion and continuous uptime.',
    }),
    defineField({
      name: 'guaranteeHeading',
      title: 'Guarantee Box Heading',
      type: 'string',
      initialValue: 'The Zero-Downtime Migration Standard:',
    }),
    defineField({
      name: 'guaranteeText',
      title: 'Guarantee Text',
      type: 'text',
      rows: 3,
      initialValue:
        'Every DNS cutover, database transition, and CDN edge deployment is engineered with low-TTL propagation bridges and transactional integrity — protecting active checkouts and customer orders from disruption.',
    }),
  ],
})
