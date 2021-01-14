/* eslint-disable */

module.exports = {
  env: {
    browser: true,
    jest: true,
    es6: true,
    node: true,
    'cypress/globals': true,
  },

  settings: {
    react: {
      version: 'detect',
    },
  },

  parser: 'babel-eslint',

  parserOptions: {
    ecmaVersion: 9,
    "sourceType": "module",
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },

  plugins: ['react', 'react-hooks', 'cypress'],

  extends: ['zurgbot', 'plugin:react/recommended'],
};

/* eslint-enable */
