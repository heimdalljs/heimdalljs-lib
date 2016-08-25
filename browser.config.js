import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';

export default {
  entry: 'src/browser/index.js',
  // module name is really heimdalljs but this is the global name
  moduleName: 'heimdall',
  plugins: [
    babel({
      ignore: ['node_modules/(?!perf-primitives)']
    }),
    nodeResolve({ jsnext: true, main: true }),
    commonjs({ include: 'node_modules/**' }),
  ],
  targets: [
    { dest: 'dist/heimdalljs.umd.js', format: 'umd' },
    { dest: 'dist/heimdalljs.iife.js', format: 'iife' },
  ]
};

