// Note: You must restart bin/webpack-dev-server for changes to take effect

/* eslint global-require: 0 */
/* eslint import/no-dynamic-require: 0 */

const webpack = require('webpack')
const { basename, dirname, join, relative, resolve } = require('path')
const { sync } = require('glob')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const extname = require('path-complete-extname')
const { env, paths, publicPath, loadersDir } = require('./configuration.js')

const extensionGlob = `**/*{${paths.extensions.join(',')}}*`

const packPaths = sync(join(paths.source_path, paths.entry, extensionGlob))

const basicEntry = [
  'es5-shim/es5-shim',
  'es5-shim/es5-sham',
  'babel-polyfill'
];

const filesEntry = packPaths.reduce(
  (map, entry) => {
    const localMap = map
    const namespace = relative(join(paths.source_path, paths.entry), dirname(entry))
    localMap[join(namespace, basename(entry, extname(entry)))] = resolve(entry)
    return localMap
  }, {});

/*filesEntry.basicEntry = basicEntry;*/
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
  entry: filesEntry,
  output: {
    filename: '[name].js',
    path: resolve(paths.output, paths.entry),
    publicPath
  },

  module: {
    rules: sync(join(loadersDir, '*.js')).map(loader => require(loader))
  },

  plugins: [
    new CommonsChunkPlugin("commons"),
    new webpack.EnvironmentPlugin(JSON.parse(JSON.stringify(env))),
    new ExtractTextPlugin((env.NODE_ENV === 'production' || env.NODE_ENV === 'staging') ? '[name]-[hash].css' : '[name].css'),
    new ManifestPlugin({ fileName: paths.manifest, publicPath, writeToFileEmit: true })
  ],

  resolve: {
    extensions: paths.extensions,
    modules: [
      resolve(paths.source_path),
      resolve(paths.node_modules)
    ]
  },

  resolveLoader: {
    modules: [paths.node_modules]
  }
}
