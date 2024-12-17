const { copyFileSync, existsSync, readFileSync, writeFileSync } = require('fs');
const { resolve } = require('path');

const webpack = require('webpack');

const config = require('../webpack.config');

if (!existsSync('./build/static.json')) {
  console.error('Build failed: no static.json!');
  process.exit(1);
}

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
  }
});
