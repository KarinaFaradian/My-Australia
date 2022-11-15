module.exports = {
  extends: ['airbnb-base', 'plugin:css/recommended'],
  env: {
    browser: true,
    es6: true,
  },
  plugins: ['prettier', 'css'],
  rules: {
    'prettier/prettier': 'error',
    'linebreak-style': 0,
    'global-require': 0,
    'eslint-linebreak-style': [0, 'error', 'windows'],
  },
};
