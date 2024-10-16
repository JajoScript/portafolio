import { defineCollection, z } from 'astro:content';
import type { CollectionConfig } from 'astro:content';

const experiencies: CollectionConfig<any> = defineCollection({
  schema: z.object({
    company: z.string(),
    position: z.string(),
    is_current_job: z.boolean(),

    start_date: z.string(),
    end_date: z.string(),

    modality: z.string(),
    location: z.string(),
    country: z.string(),
  })
});




export const collections = { experiencies };