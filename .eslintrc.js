'use strict';

module.exports = {
  extends: [
    'ash-nazg/sauron-node'
  ],
  parserOptions: {
    sourceType: 'module'
  },
  // Need to make explicit here for processing by jsdoc/check-examples
  plugins: [
    'chai-expect'
  ],
  env: {
    browser: false,
    node: true
  },
  settings: {
    polyfills: [
      'Map'
    ]
  },
  overrides: [
    {
      files: '.eslintrc.js',
      extends: ['plugin:node/recommended-script'],
      rules: {
        'import/no-commonjs': 0,
        'import/unambiguous': 0
      }
    },
    // Our Markdown rules (and used for JSDoc examples as well, by way of
    //   our use of `matchingFileName` in conjunction with
    //   `jsdoc/check-examples` within `ash-nazg`)
    {
      files: ['**/*.md'],
      rules: {
        'eol-last': ['off'],
        'no-console': ['off'],
        'no-undef': ['off'],
        'no-unused-vars': ['off'],
        'padded-blocks': ['off'],
        'import/unambiguous': ['off'],
        'import/no-commonjs': ['off'],
        'import/no-unresolved': ['off'],
        'node/no-missing-import': ['error', {
          allowModules: ['handle-node']
        }],
        'node/no-missing-require': ['error', {
          allowModules: ['handle-node']
        }]
      }
    },
    {
      extends: ['plugin:chai-friendly/recommended'],
      files: ['test/**'],
      rules: {
        'chai-expect/missing-assertion': 2,
        'chai-expect/terminating-properties': 1,
        'import/unambiguous': 0
      }
    }
  ],
  rules: {
    // Override these `ash-nazg/sauron` rules which are difficult for us
    //   to apply at this time
  }
};
