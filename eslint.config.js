const eslint = require('@eslint/js');
const prettierConfig = require('eslint-config-prettier');
const nodePlugin = require('eslint-plugin-n');
const prettierPlugin = require('eslint-plugin-prettier');
const requireSort = require('eslint-plugin-require-sort');
const sortRequiresByPath = require('eslint-plugin-sort-requires-by-path');

module.exports = [
  nodePlugin.configs['flat/recommended'],
  eslint.configs.recommended,
  {
    languageOptions: { ecmaVersion: 'latest' },
    plugins: {
      prettier: prettierPlugin,
      'require-sort': requireSort,
      'sort-requires-by-path': sortRequiresByPath,
    },
    rules: {
      'max-lines': [
        'warn',
        { max: 1024, skipBlankLines: true, skipComments: true },
      ],
      'n/no-missing-require': 'off',
      'n/no-process-exit': 'warn',
      'n/no-unpublished-import': 'off',
      'n/no-unpublished-require': 'off',
      'no-unused-vars': [
        'error',
        {
          args: 'none',
          caughtErrors: 'none',
          vars: 'all',
        },
      ],
      'prettier/prettier': [
        'warn',
        {
          endOfLine: 'auto',
          semi: true,
          singleQuote: true,
          trailingComma: 'all',
        },
      ],
      'require-sort/require-sort': ['warn', { ignoreDeclarationSort: true }],
      'sort-requires-by-path/sort-requires-by-path': 'warn',
    },
  },
  prettierConfig,
];
