import {z, defineCollection} from "astro:content";
import {glob} from "astro/loaders";

const blog = defineCollection({
    loader: glob({pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog"}),
    schema: ({image}) => z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.string().optional(),
        heroImage: image().optional(),
        badge: z.string().optional(),
        tags: z.array(z.string()).refine(items => new Set(items).size === items.length, {
            message: 'tags must be unique',
        }).optional(),
    }),
});

const store = defineCollection({
    loader: glob({pattern: '**/[^_]*.{md,mdx}', base: "./src/content/store"}),
    schema: ({image}) => z.object({
        title: z.string(),
        description: z.string(),
        custom_link_label: z.string(),
        custom_link: z.string().optional(),
        updatedDate: z.coerce.date(),
        pricing: z.string().optional(),
        oldPricing: z.string().optional(),
        badge: z.string().optional(),
        checkoutUrl: z.string().optional(),
        heroImage: image().optional(),
    }),
});

export const collections = {blog, store};