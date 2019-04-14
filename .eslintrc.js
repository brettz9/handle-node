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
  rules: {
    // Override these `ash-nazg/sauron` rules which are difficult for us
    //   to apply at this time
  }
};
