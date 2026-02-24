// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://jmbtechnical.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
