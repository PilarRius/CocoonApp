// eslint.config.js (or eslint.config.cjs)
const js = require('@eslint/js');
const reactHooks = require('eslint-plugin-react-hooks');
const tseslint = require('@typescript-eslint/eslint-plugin');
const react = require('eslint-plugin-react');
const reactRefresh = require('eslint-plugin-react-refresh');

/** @type {import('eslint').Linter.Config} */
module.exports = [
  {
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'], // Add paths to your tsconfig files
        tsconfigRootDir: __dirname, // Use the current directory to resolve paths
      },
    },
    rules: {
      // Custom rules
      '@typescript-eslint/no-unused-vars': ['warn', { 'varsIgnorePattern': '^_' }],
    },
    plugins: {
      react: react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': tseslint,
    },
  },
  // You can now directly include the configs you need
  js.configs.recommended,
  reactHooks.configs.recommended,
  tseslint.configs.recommended,
];
