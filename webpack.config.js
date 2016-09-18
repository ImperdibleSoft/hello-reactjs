var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "./scripts/app.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'react-hot',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  externals:{
    'react': 'React'
  // },
  // resolve: {
  //   extensions: [
  //     '.js'
  //   ]
  // },
  // resolveLoader: {
  //   modulesDirectories: [
  //     './src',
  //     './node_modules',
  //     './app/bower_components'
  //   ]
  }
}
