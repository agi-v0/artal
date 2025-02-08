import { defineCollection, z } from "astro:content";
const store = defineCollection({
  schema: z.object({
    name: z.string(),
    price: z.string(),
    description: z.string(),
    checkoutURL: z.string(),
    includes: z.array(z.string()),
    images: z.array(
      z.object({
        url: z.string(),
        alt: z.string(),
      })
    ),
    thumbnail: z.object({
      url: z.string(),
      alt: z.string(),
    }).optional(),
  }),
});
const team = defineCollection({
  schema: z.object({
    name: z.string(),
    role: z.string(),
    intro: z.string(),
    education: z.array(z.string()),
    experience: z.array(z.string()),
    avatar: z.object({
      url: z.string(),
      alt: z.string(),
    }),
  }),
});
const services = defineCollection({
  schema: z.object({
    service: z.string(),
    description: z.string(),
  }),
});
const work = defineCollection({
  schema: z.object({
    company: z.string().optional(),
    details: z
      .array(
        z.object({
          name: z.string(),
          value: z.string(),
        })
      )
      .optional(),
    longImage: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    thumbnail: z.object({
      url: z.string(),
      alt: z.string(),
    }),
  }),
});
const infopages = defineCollection({
  schema: z.object({
    page: z.string(),
    pubDate: z.date(),
  }),
});
const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
  }),
});
export const collections = {
  store: store,
  team: team,
  services: services,
  work: work,
  infopages: infopages,
  posts: postsCollection,
};
