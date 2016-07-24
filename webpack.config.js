require('babel-polyfill');

const path = require('path');
const webpack = require('webpack');

const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build')
};

module.exports = {
    entry: {
        entry: [
            'babel-polyfill',
            'webpack/hot/dev-server',
            PATHS.app
        ]
    },
    output: {
        path: PATHS.build,
        filename: 'bundle.js',
        publicPath: PATHS.build
    },
    module: {
      loaders: [
          {
              test: /\.js$/,
              loader: 'babel-loader',
              exclude: /node_modules/
          }
      ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
