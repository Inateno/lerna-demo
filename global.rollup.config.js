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

import postcss from 'rollup-plugin-postcss';
import cssNext from 'postcss-cssnext';
import cssReporter from 'postcss-reporter';
import cssImport from "postcss-import";

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
      postcss({
        // modules: true, // if true, create a css namespace => will add the name of the css file as prefix to all classname (ux-header became style_ux-header)
        plugins: [
          cssImport( { skipDuplicates: true } ),
          cssNext(),
          cssReporter()
        ]
      }),
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