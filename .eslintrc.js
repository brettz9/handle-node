module.exports = {
  extends: [
    "ash-nazg/sauron-node"
  ],
  parserOptions: {
    sourceType: "module"
  },
  // Need to make explicit here for processing by jsdoc/check-examples
  plugins: [],
  env: {
    browser: false,
    node: true
  },
  settings: {
    polyfills: [
      "Map"
    ],
    jsdoc: {
      additionalTagNames: {
        // In case we need to extend
        customTags: []
      },
      tagNamePreference: {
        arg: "param",
        return: "returns"
      },
      allowOverrideWithoutParam: true,
      allowImplementsWithoutParam: true,
      allowAugmentsExtendsWithoutParam: true,
      // For `jsdoc/check-examples` in `ash-nazg`
      matchingFileName: "dummy.md",
      rejectExampleCodeRegex: "^`",
    }
  },
  overrides: [
    // Our Markdown rules (and used for JSDoc examples as well, by way of
    //   our use of `matchingFileName` in conjunction with
    //   `jsdoc/check-examples` within `ash-nazg`)
    {
      files: ["**/*.md"],
      rules: {
        "eol-last": ["off"],
        "no-console": ["off"],
        "no-undef": ["off"],
        "no-unused-vars": ["off"],
        "padded-blocks": ["off"],
        "import/unambiguous": ["off"],
        "import/no-commonjs": ["off"],
        "import/no-unresolved": ["off"],
        "node/no-missing-import": ["error", {
          allowModules: ["handle-node"]
        }],
        "node/no-missing-require": ["error", {
          allowModules: ["handle-node"]
        }]
      }
    }
  ],
  rules: {
    // Override these `ash-nazg/sauron` rules which are difficult for us
    //   to apply at this time
  }
};
