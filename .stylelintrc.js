'use strict';

const config = {
  extends: ['stylelint-config-recommended', 'stylelint-config-rational-order'],
  ignoreFiles: [
    'node_modules/**',
    '**/*.css',
    'src/style/fonts/**',
    '**/*.json',
    '**/*.svg',
    '**/*.{and another unneeded types}'
  ],
  rules: {
    'no-empty-source': null
  }
};

module.exports = config;
