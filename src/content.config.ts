import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Posts live in src/content/posts/<slug>/index.mdx
// generateId extracts the folder name as the post ID/slug
const posts = defineCollection({
  loader: glob({
    pattern: '**/index.mdx',
    base: './src/content/posts',
    generateId: ({ entry }) => entry.split('/')[0],
  }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    location: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { posts };
