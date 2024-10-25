import eslintPluginSvelte from 'eslint-plugin-svelte';
import svelteConfig from './svelte.config.js';

export default [
  ...eslintPluginSvelte.configs['flat/recommended'],
  {
    files: [
      '**/*.svelte',
      '*.svelte',
    ],
    languageOptions: {
      parserOptions: {
        svelteConfig
      }
    },
    rules: {
      'svelte/indent': ['error', { "indent": 2 }],
      'svelte/no-at-html-tags': 'warn',
      'svelte/no-target-blank': 'error',
      
      'no-console': 'warn',
      'prefer-const': 'error',
      'eqeqeq': ['error', 'always'],
    }
  }
];