module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'next/core-web-vitals',
    'plugin:storybook/recommended',
  ],
  plugins: ['react', '@typescript-eslint', 'import'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
  },
  root: true,
  rules: {
    'sort-images': 0,
    'import/order': [
      'warn',
      {
        alphabetize: {
          order: 'asc',
        },
        'newlines-between': 'always',
        groups: ['builtin', 'external', 'internal'],
      },
    ],
    '@typescript-eslint/no-explicit-any': 0,
    'import/no-anonymous-default-export': 0,
  },
};
