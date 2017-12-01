const SharedWebpack = require('./shared_webpack');
const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');

const NODE_ENV = process.env.NODE_ENV || 'development';

const EC2_HOST = NODE_ENV === 'development' ? 'localhost' : 'the-bc-api.herokuapp.com/';
const EC2_PORT = NODE_ENV === 'development' ? '8000' : '80';

module.exports = {
	context: SharedWebpack.context,
	entry: SharedWebpack.entry,
	output: SharedWebpack.output,
	resolve: SharedWebpack.resolve,
	node: SharedWebpack.node,
	module: SharedWebpack.module,
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
	devtool: 'source-maps'
};
