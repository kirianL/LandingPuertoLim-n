import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'tap'
  },
  integrations: [
    react(),
    tailwind({
      // Configure Tailwind in nested config file
      configFile: './tailwind.config.js'
    })
  ],
  vite: {
    resolve: {
      alias: {
        '@': '/src'
      }
    }
  }
});
