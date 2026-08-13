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
      sidebar: [
        {
          label: '01. Variables',
          collapsed: true,
          items: [{ autogenerate: { directory: '01-variables' } }],
        },
        {
          label: '02. Strings',
          collapsed: true,
          items: [{ autogenerate: { directory: '02-strings' } }],
        },
        {
          label: '03. Operadores',
          collapsed: true,
          items: [{ autogenerate: { directory: '03-operadores' } }],
        },
        {
          label: '04. Flujos de control',
          collapsed: true,
          items: [{ autogenerate: { directory: '04-flujos-de-control' } }],
        },
        {
          label: '05. Arreglos',
          collapsed: true,
          items: [{ autogenerate: { directory: '05-arreglos' } }],
        },
        {
          label: '06. Matrices',
          collapsed: true,
          items: [{ autogenerate: { directory: '06-matrices' } }],
        },
        {
          label: '07. ArrayList',
          collapsed: true,
          items: [{ autogenerate: { directory: '08-arraylist' } }],
        },
        {
          label: '08. List',
          collapsed: true,
          items: [{ autogenerate: { directory: '11-list' } }],
        },
        {
          label: '09. Pruebas unitarias',
          collapsed: true,
          items: [{ autogenerate: { directory: '07-pruebas-unitarias' } }],
        },
        {
          label: '10. Gestión de errores',
          collapsed: true,
          items: [{ autogenerate: { directory: '09-gestion-de-errores' } }],
        },
        {
          label: '11. Manipulación de archivos',
          collapsed: true,
          items: [{ autogenerate: { directory: '10-manipular-archivos' } }],
        },
      ],
    }),
  ],
});
