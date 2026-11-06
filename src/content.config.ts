import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Each project is a markdown file in src/content/projects/.
// Set `draft: false` when a write-up is ready and it gets its own page.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      fig: z.number(), // figure number; also sets the order
      summary: z.string().optional(),
      draft: z.boolean().default(true),
      cover: image().optional(),
      coverAlt: z.string().optional(),
    }),
});

export const collections = { projects };
