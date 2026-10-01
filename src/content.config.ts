import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string().optional(),
        description: z.string().optional(),
        pubDate: z.coerce.date().optional(),
        cover: image().optional(),
      })
      .passthrough(),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string().optional(),
        description: z.string().optional(),
        pubDate: z.coerce.date().optional(),
        cover: image().optional(),
      })
      .passthrough(),
});

export const collections = { pages, posts };
