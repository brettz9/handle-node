import ashNazg from 'eslint-config-ash-nazg';

export default [
  {
    ignores: [
      'dist',
      'coverage'
    ]
  },
  ...ashNazg(['sauron', 'node']),
  // Our Markdown rules (and used for JSDoc examples as well, by way of
  //   our use of `matchingFileName` in conjunction with
  //   `jsdoc/check-examples` within `ash-nazg`)
  {
    files: ['*.md/*.js'],
    rules: {
      'eol-last': ['off'],
      'no-console': ['off'],
      'no-undef': ['off'],
      'no-unused-vars': ['off'],
      'padded-blocks': ['off'],
      'import/unambiguous': ['off'],
      'import/no-commonjs': ['off'],
      'import/no-unresolved': ['off'],
      'n/no-missing-import': ['error', {
        allowModules: ['handle-node']
      }],
      'n/no-missing-require': ['error', {
        allowModules: ['handle-node']
      }]
    }
  },
  {
    files: ['test/**'],
    rules: {
      'chai-expect/missing-assertion': 2,
      'chai-expect/terminating-properties': 1,
      'import/unambiguous': 0
    }
  },
  {
    rules: {
      // Override these `ash-nazg/sauron` rules which are difficult for us
      //   to apply at this time
    }
  }
];
