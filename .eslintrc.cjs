module.exports = {
  root: true,
  env: {browser: true, es2020: true},
  extends: ['prettier', 'eslint:recommended', 'plugin:react-hooks/recommended', 'plugin:prettier/recommended', 'plugin:storybook/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:@tanstack/eslint-plugin-query/recommended', 'plugin:storybook/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react-refresh',
    'prettier',
    '@typescript-eslint',
    'unused-imports',
    'simple-import-sort',
    '@tanstack/query',
    'react'
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      {allowConstantExport: true},
    ],
    '@typescript-eslint/consistent-type-imports': 'error',
    'prettier/prettier': 'error',
    'react/jsx-curly-brace-presence': ['error', {props: 'never', children: 'never'}],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    'prefer-const': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': 'error',
    'react/react-in-jsx-scope': 'off',
  },
}
