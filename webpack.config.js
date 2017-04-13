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
