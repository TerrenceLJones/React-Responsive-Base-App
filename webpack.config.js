// TODO
// 1. Move Loaders to seperate file
// 2. Add production/development logic

var path = require('path');
var util = require('gulp-util');
var HtmlWebpackPlugin = require('html-webpack-plugin');

// LOADERS
var babelLoader = {
    test:  /\.jsx?$/,
    exclude: path.resolve(__dirname, "node_modules"),
    loader: 'babel-loader',
    query: {
        presets: [
            'react',
            'es2015'
        ]
    }
};

var JSONLoader = {
    test: /\.json$/,
    loader: 'json'
};

var HTMLLoader = {
    test: /\.html$/, loader: 'file?name=[name].[ext]'
}

var CSSLoader = {
    test: /\.css$/,
    loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
};

var config = {
  debug: true,

  devtool: 'inline-source-map',

  entry: [
       'webpack-dev-server/client?http://localhost:8080',
       path.resolve(__dirname, "src", "index.jsx")
  ],

  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/',
    filename: 'bundle.js'
  },

  plugins: [
    new HtmlWebpackPlugin({
        inject: true,
        template: "src/index.html"
    })
  ],

  module : {
      loaders: [ CSSLoader, babelLoader, JSONLoader ]
  },

  resolve: {
      root: path.resolve('./src'),
      extensions: ['', '.js', '.jsx', '.json', '.css'],
  }
};

module.exports = config;
