/** @type {import("eslint").Linter.BaseConfig} */
module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['tailwindcss', 'cypress'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
    'plugin:cypress/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:@next/next/recommended',
    'next',
    'next/core-web-vitals',
    'turbo',
    'prettier',
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: ['apps/*/tsconfig.json'],
      },
    },
  },
  rules: {
    '@next/next/no-img-element': 'error',
    'react/jsx-key': 'error',
    'import/no-unresolved': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-curly-brace-presence': 'error',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'import/prefer-default-export': 'error',
    'no-unused-vars': ['error', { vars: 'all', args: 'none', ignoreRestSiblings: true }],
    'no-restricted-syntax': [
      'error',
      {
        selector: 'TSInterfaceDeclaration',
        message: 'Import the type file.',
      },
      {
        selector: 'TSTypeAliasDeclaration',
        message: 'Import the type file.',
      },
    ],
    '@typescript-eslint/consistent-type-imports': 'error',
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
        },
      },
    ],
    'lines-around-directive': 'error',
  },
  overrides: [
    {
      files: ['**/*.ts'],
      rules: {
        'no-restricted-syntax': 'off',
      },
    },
  ],
  ignorePatterns: [
    '**/*.js',
    '**/*.json',
    'node_modules',
    'public',
    'styles',
    '.next',
    'coverage',
    'dist',
    '.turbo',
  ],
}
