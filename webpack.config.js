const webpack = require('webpack');
var WebpackNotifierPlugin = require('webpack-notifier');

const NODE_ENV = (process.env === 'production') ? 'production' : 'development';
const EC2_HOST = process.env.EC2_HOST || 'ec2-52-53-231-190.us-west-1.compute.amazonaws.com';
const EC2_PORT = process.env.EC2_PORT || '8010';

const path = require('path');
  module.exports = {
    context: __dirname,
    entry: './app/index.jsx',
    output: {
      path: './',
      filename: './app/bundle.js'
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    plugins: [
      new WebpackNotifierPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify(NODE_ENV),
          'EC2_HOST': JSON.stringify(EC2_HOST),
          'EC2_PORT': JSON.stringify(EC2_PORT)
        }
      })
    ],
    module: {
      loaders: [
        {
          test: /.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loaders: [
            'babel?presets[]=es2015,presets[]=react,plugins[]=transform-object-rest-spread&retainLines=true',
            'ng-annotate-loader'
          ]
        },
        {
          test: /.node$/,
          loader: 'node-loader'
        },
        {
          test: [/.css?$/],
          loader: 'style-loader!css-loader'
        }
      ]
    },
    devtool: 'source-maps'
};
