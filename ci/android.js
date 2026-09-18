const { execSync } = require('child_process');
const { renameSync, rmSync } = require('fs');
const os = require('os');
const { join, resolve } = require('path');

const { path7za } = require('7zip-bin');
const { copySync } = require('fs-extra');
const webpack = require('webpack');

const config = require('../webpack.config');

rmSync('./dist', { force: true });

switch (os.platform()) {
  case 'linux':
  case 'darwin':
    execSync(`chmod +x ${path7za}`);
    break;
  case 'win32':
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
    // 将打包后的脚本压缩成 zip 文件然后上传
    // zip 格式基本上被大部分手机支持
    const game_dir = resolve(process.env.GAME_BUNDLE_DIR);
    const bundle_zip = resolve(process.env.GAME_BUNDLE_ZIP);
    [
      'CHANGELOG-test.md',
      'CHANGELOG-v1-kuuga.md',
      'CHANGELOG-v2-agito.md',
      'CHANGELOG-v3-ryuki.md',
      'RELEASE.md',
      'LICENSE',
      'README.md',
      'CONTRIBUTING.md',
    ].forEach((d) => copySync(join('./', d), join('./dist', d)));
    rmSync(game_dir, { force: true, recursive: true });
    renameSync('./dist', game_dir);
    rmSync(bundle_zip, { force: true });
    execSync(
      `${path7za} a -tzip -pera -mem=AES256 ${bundle_zip} ${process.env.GAME_BUNDLE_DIR}`,
    );
  }
});
