var path = require('path');

module.exports = {
  context: __dirname,
  entry: './elon.js',
  output: {
    path: path.resolve(__dirname),
    filename: './app/assets/javascripts/bundle.js',
  },

  module: {
    loaders: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};
