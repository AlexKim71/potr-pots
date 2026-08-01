module.exports = {
  extends: ['stylelint-config-standard-scss'],
  plugins: ['stylelint-selector-bem-pattern'],
  rules: {
    'plugin/selector-bem-pattern': {
      preset: 'bem',
    },
  },
};
