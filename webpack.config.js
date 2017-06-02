const webpack = require('webpack');
var WebpackNotifierPlugin = require('webpack-notifier');

const NODE_ENV = 'development';
const EC2_HOST = process.env.EC2_HOST || 'localhost';
const EC2_PORT = process.env.EC2_PORT || '3000';

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
				NODE_ENV: JSON.stringify(NODE_ENV),
				EC2_HOST: JSON.stringify(EC2_HOST),
				EC2_PORT: JSON.stringify(EC2_PORT)
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
				test: /\.json$/,
				loader: 'json-loader'
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
	node: {
		fs: 'empty',
		net: 'empty',
		tls: 'empty'
	},
	devtool: 'source-maps'
};
