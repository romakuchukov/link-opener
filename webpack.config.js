/* global module, require, process, __dirname */
const path = require('path');
const webpack = require('webpack');
const { GenerateSW } = require('workbox-webpack-plugin');

// const glob = (process.env.NODE_ENV === 'dev') ? {} : {
//   globDirectory: './',
//   globPatterns: ['favicon.ico', 'index.html', 'logo192.png', 'logo512.png', 'manifest.json' ],
// };
const gws = new GenerateSW({
  //...glob,
  // these options encourage the ServiceWorkers to get in there fast
  // and not allow any straggling "old" SWs to hang around
  clientsClaim: true,
  skipWaiting: true,
  swDest: '../service-worker.js', //service-worker in the root
});
const config = {
  // entry for the app @ development
  mode: 'development',
  entry: {
    app: './src/index.js',
  },
  //output compiled js to a directory
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/public/',
  },
  //devtool: 'source-map',
  resolve: {
    extensions: ['.js'],
    alias: {
      serviceWorker: path.resolve(__dirname, './src/plugins/serviceWorker'),
    },
    fallback: { process: false },
  },
  module: {
    rules: [
      {
        //test:/\.(s*)css$/,
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              // ['@babel/preset-env', { targets: 'defaults' }],
              // ['@babel/preset-react', { targets: 'defaults' }],
            ],
          },
        },
      },
    ],
  },
  devServer: {
    hot: true,
    compress: true,
    port: 8888,
    allowedHosts: ['localhost'],
    watchFiles: ['src/**/*.js'],
  },
  plugins: [
    // Ignore node_modules so CPU usage with poll
    // watching drops significantly.
    new webpack.WatchIgnorePlugin({
      paths: [path.join(__dirname, 'node_modules')],
    }),
    new webpack.DefinePlugin({ 'process.env': JSON.stringify(process.env) }),
    new webpack.ProvidePlugin({
      React: 'react',
      serviceWorker: ['serviceWorker', 'default'],
    }),
    process.env.NODE_ENV === 'production' ? gws : () => {},
  ],
};

module.exports = config;
