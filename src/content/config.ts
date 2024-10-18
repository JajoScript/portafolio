import { defineCollection, z } from 'astro:content';
import type { CollectionConfig } from 'astro:content';

const experiencies: CollectionConfig<any> = defineCollection({
  schema: z.object({
    company: z.string(),
    position: z.string(),
    is_current_job: z.boolean(),

    start_date: z.string(),
    end_date: z.string(),
    seniority: z.string(),

    modality: z.string(),
    location: z.string(),
    country: z.string(),
  })
});

const projects: CollectionConfig<any> = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    links: z.object({
      github: z.string(),
      deploy: z.string()
    }),

    image: z.string(),
    tags: z.array(z.string()),
    isPublic: z.boolean(),
  })
})

export const collections = { experiencies, projects };