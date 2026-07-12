import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Content conventions (load-bearing):
 * - Every entry lives in src/content/<collection>/<slug>/index.mdx
 * - The folder name IS the URL slug.
 * - Images are co-located in the entry's folder.
 */

const writingSchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  summary: z.string().optional(), // one-line dek; also used as meta description
  location: z.string().optional(),
  tags: z.array(z.string()).optional(),
  featured: z.boolean().default(false), // surfaces on the homepage
});

const essays = defineCollection({
  loader: glob({ pattern: '**/index.mdx', base: './src/content/essays', generateId: ({ entry }) => entry.split('/')[0] }),
  schema: writingSchema,
});

const notes = defineCollection({
  loader: glob({ pattern: '**/index.mdx', base: './src/content/notes', generateId: ({ entry }) => entry.split('/')[0] }),
  schema: writingSchema,
});

const work = defineCollection({
  loader: glob({ pattern: '**/index.mdx', base: './src/content/work', generateId: ({ entry }) => entry.split('/')[0] }),
  schema: z.object({
    title: z.string(), // the idea, not the deliverable — e.g. "From survey tool to civic stage"
    date: z.coerce.date(),
    kind: z.enum(['case-study', 'build', 'experiment']),
    kicker: z.string(), // mono label above the title — e.g. "SmartSurvey · Product launch · 2025–26"
    summary: z.string(), // one sentence: what happened and why it mattered
    dek: z.string().optional(), // italic line under the title on the detail page
    featured: z.boolean().default(false),
    order: z.number().default(99), // homepage/index ordering; lower = earlier
    role: z.string().optional(),
    timeframe: z.string().optional(),
    company: z.string().optional(),
    status: z.string().optional(), // e.g. "Live", "Shipped", "Ongoing"
    techStack: z.array(z.string()).optional(),
    githubUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
  }),
});

export const collections = { essays, notes, work };
