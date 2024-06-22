module.exports = {
  env: {
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['require-sort', 'sort-requires-by-path'],
  root: true,
  rules: {
    'max-lines': [
      'warn',
      { max: 1000, skipBlankLines: true, skipComments: true },
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
};
