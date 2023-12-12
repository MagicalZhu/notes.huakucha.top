import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  site: process.env.CI
    ? 'https://astro-shadcn-ui-template.vercel.app'
    : 'http://localhost:4321',
  integrations: [
    react(),
    starlight({
      title: '我的令人愉悦的文档网站',
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
})
