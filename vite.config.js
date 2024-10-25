import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { svelteTesting } from '@testing-library/svelte/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/devops-s03-deploy/', // nom du dépôt
  plugins: [
    svelte(),
    svelteTesting()
  ],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest-setup.js'],
  },
})
