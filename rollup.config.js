import {babel} from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';

/**
 * @param {object} [config]
 * @param {boolean} [config.minifying]
 * @param {"umd"|"esm"} [config.format]
 * @returns {import('rollup').RollupOptions}
 */
function getRollupObject ({minifying = false, format = 'umd'} = {}) {
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
    // @ts-expect-error - terser module types issue with default export
    nonMinified.plugins.push(terser());
  }
  return nonMinified;
}

export default [
  getRollupObject({minifying: true, format: 'umd'}),
  getRollupObject({minifying: true, format: 'esm'})
];
