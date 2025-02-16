const { execSync } = require('child_process');
const {
  createWriteStream,
  existsSync,
  readFileSync,
  renameSync,
  rmSync,
  writeFileSync,
} = require('fs');
const { resolve } = require('path');

const archiver = require('archiver');
const webpack = require('webpack');
archiver.registerFormat('zip-encrypted', require('archiver-zip-encrypted'));

const config = require('../webpack.config');

if (!existsSync('./build/static.json')) {
  console.error('Build failed: no static.json!');
  process.exit(1);
}

const staticData = require('../build/static.json');

rmSync('./dist', { force: true });

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
    const mainPath = resolve('./dist/main.bundle.js');
    writeFileSync(
      mainPath,
      readFileSync(mainPath, 'utf-8').replace(/\w\("La5K"\)/g, '_era'),
    );
    writeFileSync(resolve('./dist/static.json'), JSON.stringify(staticData));
    // 将打包后的脚本压缩成 zip 文件然后上传
    // zip 格式基本上被大部分手机支持
    const game_dir = resolve(process.env.GAME_BUNDLE_DIR),
      bundle_zip = resolve(process.env.GAME_BUNDLE_ZIP);
    rmSync(game_dir, { force: true, recursive: true });
    renameSync('./dist', game_dir);
    rmSync(bundle_zip, { force: true });
    const zip_file = archiver('zip-encrypted', {
      encryptionMethod: 'aes256',
      password: 'era',
      zlib: { level: 9 },
    });
    const out_stream = createWriteStream(bundle_zip);
    zip_file.pipe(out_stream);
    zip_file.directory(game_dir, process.env.GAME_BUNDLE_DIR);
    out_stream.on('finish', () =>
      // 安卓游戏包生成后上传
      execSync(
        `curl --fail-with-body --header "JOB-TOKEN: ${process.env.CI_JOB_TOKEN}" --upload-file ${bundle_zip} "${process.env.GAME_BUNDLE_URL}"`,
      ),
    );
    zip_file.finalize().then();
  }
});
