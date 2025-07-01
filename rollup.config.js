import {babel} from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';

/**
 * @param {object} config
 * @param {boolean} config.minifying
 * @param {string} [config.format]
 * @returns {RollupConfig}
 */
function getRollupObject ({minifying, format = 'umd'} = {}) {
  const nonMinified = {
    input: 'src/index.js',
    output: {
      format,
      sourcemap: minifying,
      file: `dist/index-${format}${minifying ? '.min' : ''}.js`,
      name: 'svgEditor'
    },
    plugins: [
      babel({
        babelHelpers: 'bundled'
      })
    ]
  };
  if (minifying) {
    nonMinified.plugins.push(terser());
  }
  return nonMinified;
}

export default [
  getRollupObject({minifying: true, format: 'umd'}),
  getRollupObject({minifying: true, format: 'esm'})
];
