const path = require('path')
const resolve = (f) => path.resolve(__dirname, f)
const webpack = require('webpack')

const __PROD__ = process.env.NODE_ENV === 'production'

module.exports = {
  entry: resolve('main.test.js'),
  output: {
    path:resolve('.'),
    filename: 'main.test.bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['react', ['es2015', {modules: false}]]
        }
      }
    }]
  },
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
    'react-dom/test-utils': true,
    'react-test-renderer/shallow': true
  }
}

if (__PROD__) {
  module.exports.output.filename = 'main.test.bundle.min.js'
  module.exports.plugins = []
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress : {
        unused    : true,
        dead_code : true,
        warnings  : false
      }
    })
  )
}
