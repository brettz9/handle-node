import babel from 'rollup-plugin-babel';
import {terser} from 'rollup-plugin-terser';

/**
 * @param {PlainObject} config
 * @param {boolean} config.minifying
 * @param {string} [config.format='umd'} = {}]
 * @returns {external:RollupConfig}
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
      babel()
    ]
  };
  if (minifying) {
    nonMinified.plugins.push(terser());
  }
  return nonMinified;
}
// eslint-disable-next-line import/no-anonymous-default-export
export default [
  getRollupObject({minifying: true, format: 'umd'}),
  getRollupObject({minifying: true, format: 'esm'})
];
