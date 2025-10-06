import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: z.object({
    genericImage: 
    z.object({
        url: z.string(),
        alt: z.string().optional(),
    }),
    title: z.string(),
    description: z.string(),
    price: z.number().min(0),
    images: z.array(
      z.object({
        url: z.string(),
        alt: z.string().optional(),
      })
    ),
  }),
});

export const collections = { products };
