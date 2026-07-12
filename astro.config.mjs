// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://anyone-can-cook.com',
  trailingSlash: 'ignore',
  integrations: [mdx(), sitemap()],
});
