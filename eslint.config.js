import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default {
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'], // Add your tsconfig paths
      tsconfigRootDir: import.meta.dirname,
    },
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommendedTypeChecked'],
};

