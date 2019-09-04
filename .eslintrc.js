module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  // {
  // "extends": [
  //   "plugin:cypress/recommended"
  // ]
  // },
  rules: {
    "no-underscore-dangle": "off",
    "prefer-arrow-callback": "off"
  },
};
