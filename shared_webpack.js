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
	node: {
		fs: 'empty',
		net: 'empty',
		tls: 'empty'
	},
	module: {
		loaders: [
			{
				test: /.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015'],
					plugins: ['transform-object-rest-spread']
				}
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
	}
};
