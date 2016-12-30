'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
 devtool: 'cheap-module-source-map',
 entry: [
    path.join(__dirname, 'src/main.jsx')
 ],
 output: {
   path: path.join(__dirname, '/dist/'),
   filename: '[name]-[hash].min.js',
   publicPath: '/'
 },
 plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
   }),
   new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
   }),
   new webpack.optimize.CommonsChunkPlugin('common.js'),
   new webpack.optimize.AggressiveMergingPlugin(),
   new webpack.optimize.DedupePlugin(),
   new ExtractTextPlugin('[name]-[hash].min.css'),
   new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true
      }
   })
 ],
 module: {
   loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
         "presets": ["react", "es2015"]
      }
      },{
         test: /\.(jpg|png)$/,
         loader: 'file-loader?name=[path][name].[hash].[ext]'
      },{
         test: /\.less$/,
         loader: ExtractTextPlugin.extract(
                    // activate source maps via loader query
                    'css-loader?sourceMap!' +
                    'less-loader?sourceMap'
                )
      }]
   }
};
