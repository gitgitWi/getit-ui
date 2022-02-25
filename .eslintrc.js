/** @type {import ("eslint").ESLint.Options} */
const options = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: [
      './atoms/**/tsconfig.json',
      './molecules/**/tsconfig.json',
      './organisms/**/tsconfig.json',
      './stories/tsconfig.json',
    ],
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/ban-ts-comment': 'warn',
    'prettier/prettier': 'warn',
    // TODO: erase
    'react/jsx-key': 'warn',
  },
};

module.exports = options;
