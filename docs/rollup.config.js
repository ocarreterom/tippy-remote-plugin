import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import replace from 'rollup-plugin-replace'

export default {
  input: 'index.js',
  output: {
    file: 'bundle.js',
    format: 'iife'
  },
  plugins: [
    resolve(),
    babel({ babelHelpers: 'bundled' }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
}
