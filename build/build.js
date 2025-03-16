const { existsSync,  writeFileSync } = require('fs');
const { resolve } = require('path');

const webpack = require('webpack');

const config = require('../webpack.config');

if (!existsSync('./build/static.json')) {
  console.error('Build failed: no static.json!');
  process.exit(1);
}

const staticData = require('./static.json');

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
    writeFileSync(resolve('./dist/static.json'), JSON.stringify(staticData));
  }
});
