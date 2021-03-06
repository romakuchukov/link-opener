const path = require('path');
const webpack = require('webpack');
const { GenerateSW } = require('workbox-webpack-plugin');
console.log(process.env.NODE_ENV)
const glob = (process.env.NODE_ENV === 'dev') ? {} : {
  globDirectory: './',
  globPatterns: ['favicon.ico', 'index.html', 'logo192.png', 'logo512.png', 'manifest.json' ],
};

const config = {
  // entry for the app @ development
  entry: {
    app: './src/index.js'
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
    //publicPath: '/public/',
    //contentBase: './',
    hot: true,
    compress: true,
    port: 8888,
    overlay: true,
    allowedHosts: ['localhost'],
    watchOptions: {
      // Delay the rebuild after the first change
      aggregateTimeout: 300,

      // Poll using interval (in ms, accepts boolean too)
      poll: 1000,
    },
  },
  plugins: [
    // Ignore node_modules so CPU usage with poll
    // watching drops significantly.
    new webpack.WatchIgnorePlugin([path.join(__dirname, 'node_modules')]),
    new webpack.DefinePlugin({ 'process.env': JSON.stringify(process.env) }),
    new webpack.ProvidePlugin({
      React: 'react',
      serviceWorker: ['serviceWorker', 'default']
    }),
    new GenerateSW({
      ...glob,
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true,
      swDest: '../service-worker.js', //service-worker in the root
    })
  ],
};

module.exports = config;
