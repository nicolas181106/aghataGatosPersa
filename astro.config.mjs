// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import netlify from '@astrojs/netlify/functions';
import path from 'path';

export default defineConfig({
  output: 'server',
  adapter: netlify({}),
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        // your aliases should mirror the ones defined in your tsconfig.json
        // i'll re-use the ones in the official docs:
        "@components": path.resolve(path.dirname(''), './src/components'),
        "@assets": path.resolve(path.dirname(''), './src/assets')
      }
    }
  },
  
});
