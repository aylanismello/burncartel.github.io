const SharedWebpack = require('./shared_webpack');
const webpack = require('webpack');

const NODE_ENV = 'production';
const EC2_HOST = process.env.EC2_HOST || 'ec2-54-193-25-169.us-west-1.compute.amazonaws.com';
const EC2_PORT = process.env.EC2_PORT || '80';

module.exports = {
	context: SharedWebpack.context,
	entry: SharedWebpack.entry,
	output: SharedWebpack.output,
	resolve: SharedWebpack.resolve,
	node: SharedWebpack.node,
	module: SharedWebpack.module,
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(NODE_ENV),
				EC2_HOST: JSON.stringify(EC2_HOST),
				EC2_PORT: JSON.stringify(EC2_PORT)
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		})
	]
};
