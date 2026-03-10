import { defineConfig } from 'astro/config';
import path from 'node:path';
import tailwindcss from "@tailwindcss/vite";
import netlify from '@astrojs/netlify';

export default defineConfig({
    output: 'server',
    adapter: netlify(), 
    vite: {
        plugins: [tailwindcss()],
        resolve: {
            alias: {
                '@': path.resolve('./src')
            }
        }
    },
});