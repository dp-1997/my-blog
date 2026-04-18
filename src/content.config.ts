import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const baseSchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  location: z.string().optional(),
  tags: z.array(z.string()).optional(),
});

const essays = defineCollection({
  loader: glob({ pattern: '**/index.mdx', base: './src/content/essays', generateId: ({ entry }) => entry.split('/')[0] }),
  schema: baseSchema,
});

const notes = defineCollection({
  loader: glob({ pattern: '**/index.mdx', base: './src/content/notes', generateId: ({ entry }) => entry.split('/')[0] }),
  schema: baseSchema,
});

const projects = defineCollection({
  loader: glob({ pattern: '**/index.mdx', base: './src/content/projects', generateId: ({ entry }) => entry.split('/')[0] }),
  schema: baseSchema.extend({
    techStack: z.array(z.string()).optional(),
    githubUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
  }),
});

export const collections = { essays, notes, projects };
