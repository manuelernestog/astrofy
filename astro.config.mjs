import { defineConfig, squooshImageService  } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  site: 'https://astrofy-template.netlify.app',
  output: 'server',
  adapter: vercel(),
  integrations: [mdx(), sitemap(), tailwind()],
  // image: {
  //   service: squooshImageService(),
  // },
});