import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://portfolio.michaelnnah.com',
  output: 'static',
  integrations: [sitemap()],
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
  build: {
    inlineStylesheets: 'always', // Inlines critical CSS to avoid render-blocking network requests on 3G
  },
});
