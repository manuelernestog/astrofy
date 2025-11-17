import {defineConfig} from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    site: 'https://astrofy-template.netlify.app',
    integrations: [mdx(), sitemap()],
    vite: {
        plugins: [tailwindcss()],
    },
});