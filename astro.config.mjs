// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightRosePine from 'starlight-theme-rose-pine'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Programación Orientada a Objetos',
      plugins: [starlightRosePine()],
      locales: {
        root: { label: 'Español', lang: 'es' },
      },
      customCss: ['./src/styles/layout.css'],
    }),
  ],
});
