// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import netlify from '@astrojs/netlify';
import path from 'path';

export default defineConfig({
  output: 'server',
  adapter: netlify({}),
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@components": path.resolve(path.dirname(''), './src/components'),
        "@assets": path.resolve(path.dirname(''), './src/assets'),
        "@layouts": path.resolve(path.dirname(''), './src/layouts'),
        "@scripts": path.resolve(path.dirname(''), './src/scripts')
      }
    }
  },
  
});
