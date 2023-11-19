/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

const path = require('node:path');
const createAliasSetting = require('@vue/eslint-config-airbnb/createAliasSetting');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-airbnb',
    'plugin:vue-pug/vue3-recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'import/no-unresolved': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: true },
    ],
    'import/extensions': ['error', 'always', {
      js: 'never',
      ts: 'never',
      vue: 'never',
      cjs: 'never',
    }],
  },
  plugins: ['import'],
  settings: {
    ...createAliasSetting({
      '@': `${path.resolve(__dirname, './src')}`,
      '@styles': `${path.resolve(__dirname, './src/assets/styles')}`,
      '@theme': `${path.resolve(__dirname, './src/assets/theme')}`,
    }),
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
          ['@styles', './src/assets/styles'],
          ['@theme', './src/assets/theme'],
        ],
        extensions: ['.ts', '.js', '.jsx', '.json'],
      },
      node: true,
      typescript: {
        alwaysTryTypes: true,
        project: [
          '*/vite.config',
        ],
      },
    },
  },
};
