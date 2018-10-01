const GLOBAL_CONFIG = {
  babel: {
    exclude: "node_modules/**"
  }
};

import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import autoExternal from 'rollup-plugin-auto-external';
import json from 'rollup-plugin-json';

export default function generateConfig( optional ) {
  
  
  return {
    input: optional.input || 'src/index.js',
    output: [
      {
        file: optional.main || "dist/index.js",
        format: 'cjs'
      },
      {
        file: optional.module || "dist/index.es.js",
        format: 'es'
      }
    ],
    external: optional.external || [],
    plugins: [
      // say to rollup how to resolve node dependencies
      resolve(),
      // allow to load inlined json
      json( Object.assign( optional.json || {}, {
        include: 'src/**',
        indent: ' '
      } ) ),
      // allow to include all kind of amd package in an ES6 way
      commonjs( Object.assign( optional.commonjs || {}, {
        include: 'node_modules/**',
        namedExports: {
          'node_modules/react/index.js': ['Component', 'PureComponent', 'Fragment', 'Children', 'createElement', 'cloneElement']
        }
      } ) ),
      // babel
      babel( Object.assign( optional.babel || {}, GLOBAL_CONFIG.babel ) ),
      // automatically detect what should be excluded from the build
      autoExternal()
    ]
  };
}