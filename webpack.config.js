const { resolve } = require('path');
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
    static: {
      import: '../build/static.json',
      library: { name: 'static', type: out_type },
    },
  },
  mode: 'production',
  output: {
    path: resolve(__dirname, 'dist/'),
    filename: '[name].bundle.js',
  },
  performance: { hints: false },
  plugins: [new webpack.ids.HashedModuleIdsPlugin({})],
  resolve: {
    alias: { '#': resolve(__dirname, 'ere/') },
  },
};
