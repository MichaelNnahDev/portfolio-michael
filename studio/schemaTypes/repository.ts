import { defineField, defineType } from 'sanity'

export const repository = defineType({
  name: 'repository',
  title: 'Developer Repositories',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Repository Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'languageText',
      title: 'Language / Framework Label',
      type: 'string',
      description: 'e.g. PHP / AWS SDK, Bash / OpenSSH',
    }),
    defineField({
      name: 'languageDotClass',
      title: 'Dot Color Class',
      type: 'string',
      description: 'dot-php, dot-bash, dot-js, or dot-config',
      initialValue: 'dot-php',
    }),
    defineField({
      name: 'repoUrl',
      title: 'GitHub URL',
      type: 'url',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'orderRank',
      title: 'Display Order',
      type: 'number',
    }),
  ],
})
