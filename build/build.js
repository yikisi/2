const { copyFileSync, readFileSync, renameSync, writeFileSync } = require('fs');
const { resolve } = require('path');

const webpack = require('webpack');

const config = require('../webpack.config');

renameSync(
  resolve('./ere/era-electron.js'),
  resolve('./ere/era-electron.js.backup'),
);
copyFileSync(
  resolve('./build/era-electron.js'),
  resolve('./ere/era-electron.js'),
);

webpack(config, (err, stats) => {
  if (err || stats.hasErrors()) {
    console.error('Build failed:', err || stats.toJson().errors);
  } else {
    console.log(
      'Build succeeded:',
      stats.toString({
        chunks: false,
        colors: true,
      }),
    );
    const content = readFileSync(resolve('./dist/main.bundle.js'), 'utf-8');
    writeFileSync(
      resolve('./dist/main.bundle.js'),
      content.replace(/\w\("7OW8"\)/g, '_era'),
    );
    renameSync(
      resolve('./ere/era-electron.js.backup'),
      resolve('./ere/era-electron.js'),
    );
  }
});
