import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://gitlab.com/aaron-jeong',
  base: '/designer-wife-portfolio',
  outDir: 'public',
  publicDir: 'static',
});
