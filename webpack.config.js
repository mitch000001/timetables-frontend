var path = require('path');

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src', 'main.es6.jsx')
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.es6.js', '.es6.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'public', 'compiled'),
    publicPath: '/compiled/',
    filename: '[name].es5.js'
  },
  module: {
    loaders: [
      {
        test: /\.es6\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.es6\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'source-map'
};
