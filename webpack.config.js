const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  context: resolve(__dirname, 'ere/'),
  entry: {
    era: {
      import: './era-electron.js',
      library: { name: '_era', type: 'self' },
    },
    main: {
      dependOn: 'era',
      import: './main.js',
      library: {
        name: 'game',
        type: 'self',
      },
    },
  },
  mode: 'production',
  output: {
    path: resolve(__dirname, 'dist/'),
    filename: '[name].bundle.js',
  },
  plugins: [new webpack.ids.HashedModuleIdsPlugin({})],
  resolve: {
    alias: { '#': resolve(__dirname, 'ere/') },
  },
};
