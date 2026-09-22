const { resolve } = require('path');

const EreWebpackPlugin = require('ere-webpack-plugin');

const out_type = 'self';

module.exports = {
  cache: {
    type: 'filesystem',
    cacheDirectory: resolve(__dirname, 'node_modules/.cache/webpack'),
  },
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
      {
        test: /\.kojo$/,
        use: [
          {
            loader: require.resolve('kojo-loader'),
            options: {
              sdkPath: '#/era-electron',
            },
          },
        ],
      },
    ],
  },
  output: {
    path: resolve(__dirname, 'dist/'),
    filename: '[name].bundle.js',
  },
  performance: { hints: false },
  plugins: [new EreWebpackPlugin()],
  resolve: {
    alias: { '#': resolve(__dirname, 'ere/') },
  },
};
