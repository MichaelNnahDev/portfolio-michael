import { defineField, defineType } from 'sanity'
import { ctaSection } from './ctaSection'
import { heroSection } from './heroSection'
import { techStackSection } from './techStackSection'
import { repository } from './repository'
import { engineerBio } from './engineerBio'
import { comparisonMatrix } from './comparisonMatrix'
import { page } from './page'
import { pageHeroBlock } from './blocks/pageHeroBlock'
import { richTextBlock } from './blocks/richTextBlock'
import { featureGridBlock } from './blocks/featureGridBlock'
import { imageGalleryBlock } from './blocks/imageGalleryBlock'

export const projectType = defineType({
  name: 'project',
  title: 'Portfolio Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle / Description',
      type: 'string',
    }),
    defineField({
      name: 'liveUrl',
      title: 'Live Site URL',
      type: 'url',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Tech Tags',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'orderRank',
      title: 'Display Order',
      type: 'number',
    }),
  ],
})

export const schemaTypes = [
  projectType,
  heroSection,
  techStackSection,
  repository,
  engineerBio,
  comparisonMatrix,
  ctaSection,
  page,
  pageHeroBlock,
  richTextBlock,
  featureGridBlock,
  imageGalleryBlock,
]
