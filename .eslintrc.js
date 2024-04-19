module.exports = {
  env: {
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['require-sort'],
  root: true,
  rules: {
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto',
        semi: true,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    'require-sort/require-sort': ['error', { ignoreDeclarationSort: true }],
  },
};
