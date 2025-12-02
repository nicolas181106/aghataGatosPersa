// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import netlify from '@astrojs/netlify';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],    
  },
});


/*
output: 'static',
adapter: netlify({}),

resolve: {
      alias: {
        "@components": path.resolve(path.dirname(''), './src/components'),
        "@assets": path.resolve(path.dirname(''), './src/assets'),
        "@layouts": path.resolve(path.dirname(''), './src/layouts'),
        "@scripts": path.resolve(path.dirname(''), './src/scripts')
      }
    }

*/