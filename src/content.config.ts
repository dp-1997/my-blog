import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({
    pattern: '**/index.mdx',
    base: './src/content/posts',
    generateId: ({ entry }) => entry.split('/')[0],
  }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(['essay', 'note', 'project']).default('note'),
    location: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { posts };
