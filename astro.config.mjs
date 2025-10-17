import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import netlify from '@astrojs/netlify';

export default defineConfig({
  output: 'server',      // importante para SSR
  adapter: netlify(),    // genera funciones serverless
  vite: {
    plugins: [tailwindcss()],
  },
});
