import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from '@typescript-eslint/eslint-plugin'
import react from 'eslint-plugin-react'

export default {
  parser: '@typescript-eslint/parser', // Use TypeScript parser
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: ['./tsconfig.app.json', './tsconfig.node.json'], // Make sure tsconfig files are included
    tsconfigRootDir: __dirname,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', // Enable TypeScript recommended rules
    'plugin:react/recommended', // Enable React recommended rules
    'plugin:react-hooks/recommended', // Enable React hooks rules
  ],
  plugins: [
    'react', // React plugin for linting
    '@typescript-eslint', // TypeScript plugin for linting
    'react-hooks', // React Hooks plugin
    'react-refresh' // React Refresh plugin (for Fast Refresh)
  ],
  settings: {
    react: {
      version: 'detect', // Automatically detect React version
    },
  },
  rules: {
    // Custom rules
    'react/prop-types': 'off',  // Turn off prop-types rule (use TypeScript instead)
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // Ignore unused vars that start with '_'
  },
};
