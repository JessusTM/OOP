// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightRosePine from 'starlight-theme-rose-pine'

// https://astro.build/config
export default defineConfig({
  site: 'https://JessusTM.github.io',
  base: '/OOP',
  integrations: [
    starlight({
      title: 'Programación Orientada a Objetos',
      favicon: '/java.svg',
      plugins: [starlightRosePine()],
      locales: {
        root: { label: 'Español', lang: 'es' },
      },
      customCss: ['./src/styles/layout.css'],
      sidebar: [
        {
          label: 'Reportes',
          collapsed: true,
          items: [
            {
              label: 'RT 01 - GitHub e IntelliJ IDEA',
              slug: 'reportes/rt-01-github-intellij-idea',
            },
            {
              label: 'RT 02 - Uso de GitHub',
              slug: 'reportes/rt-02-uso-de-github',
            },
            {
              label: 'RT 03 - Maven y JUnit',
              slug: 'reportes/rt-03-maven-junit',
            },
            {
              label: 'RT 04 - Unit Test y Error Handler',
              slug: 'reportes/rt-04-unit-test-error-handler',
            },
          ],
        },
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
        {
          label: 'INFOGRAFÍA - SOLID',
          slug: 'infografia-solid',
        },
      ],
    }),
  ],
});
