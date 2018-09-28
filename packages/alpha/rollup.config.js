import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import autoExternal from 'rollup-plugin-auto-external';

import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'es'
    }
  ],
  external: [
  ],
  plugins: [
    // say to rollup how to resolve node dependencies
    resolve(),
    // allow to include all kind of amd package in an ES6 way
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        'node_modules/react/index.js': ['Component', 'PureComponent', 'Fragment', 'Children', 'createElement', 'cloneElement']
      }
    }),
    // babel
    babel({exclude: "node_modules/**"}),
    // automatically detect what should be excluded from the build
    autoExternal()
  ]
}