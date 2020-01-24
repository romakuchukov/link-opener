const path = require('path');
const webpack = require('webpack');

const config = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/public/',
  },
  //devtool: 'source-map',
  resolve: {
    extensions: ['.js'],
    alias: {
      //mq: path.resolve(__dirname, './src/plugins/mq'),
    }
  },

  module:{
    rules:[{
      //test:/\.(s*)css$/,
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        query: { presets: ['@babel/preset-env', '@babel/preset-react'] }
      }
    }]
  },
  devServer: {
    //contentBase: './public',
    hot: true,
    compress: true,
    port: 8080,
    allowedHosts: ['localhost'],
    watchOptions: {
      // Delay the rebuild after the first change
      aggregateTimeout: 300,

      // Poll using interval (in ms, accepts boolean too)
      poll: 1000,
    },
    overlay: true,
  },
  plugins: [
    // Ignore node_modules so CPU usage with poll
    // watching drops significantly.
    new webpack.WatchIgnorePlugin([path.join(__dirname, 'node_modules')]),
    // new webpack.ProvidePlugin({
    //   //mq: ['mq', 'default'],
    //   //react: 'react',
    // }),
  ],
};

module.exports = config;