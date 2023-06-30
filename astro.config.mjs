import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: 'https://ahmadikhwan.github.io',
  integrations: [mdx(), sitemap(), tailwind(), image(
    {
      serviceEntryPoint: '@astrojs/image/sharp',
      cacheDir: "./.cache/image",
      logLevel: 'debug',
    }
  )]
});