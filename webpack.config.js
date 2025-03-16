const { resolve } = require('path');

const EreWebpackPlugin = require('ere-webpack-plugin');
const webpack = require('webpack');

const out_type = 'self';

module.exports = {
  context: resolve(__dirname, 'ere/'),
  entry: {
    era: {
      import: './era-electron.js',
      library: { name: '_era', type: out_type },
    },
    main: {
      dependOn: 'era',
      import: './main.js',
      library: {
        name: 'game',
        type: out_type,
      },
    },
  },
  mode: 'production',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  modules: false,
                  targets: { chrome: '60' },
                  useBuiltIns: false,
                },
              ],
            ],
          },
        },
      },
    ],
  },
  output: {
    path: resolve(__dirname, 'dist/'),
    filename: '[name].bundle.js',
  },
  performance: { hints: false },
  plugins: [new EreWebpackPlugin(), new webpack.ids.HashedModuleIdsPlugin({})],
  resolve: {
    alias: { '#': resolve(__dirname, 'ere/') },
  },
};
