module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true, // Указываем, что переменные Node.js (например, module) легальны
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {},
};
