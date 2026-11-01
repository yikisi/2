const { readFileSync, writeFileSync } = require('fs');
const { join } = require('path');

const work_dir = join(__dirname, '..');
const gamebase_path = join(work_dir, 'csv/GameBase.csv');
const package_path = join(work_dir, 'package.json');

/**
 * 把 GameBase.csv 里的四位数版本号转换成符合 SemVer 的 package.json version
 * 例如 3201 -> 3.2.1、3131 -> 3.1.31、3200 -> 3.2.0
 * 注意 SemVer 不允许数字标识符带前导零，因此 patch 需要去掉前导零
 * @param {string} game_version
 * @returns {string}
 */
function to_package_version(game_version) {
  const digits = game_version.replace(/\D/g, '');
  if (digits.length < 3) {
    throw new Error(
      `[sync-version.js] 无法识别的版本号：${JSON.stringify(game_version)}`,
    );
  }
  return `${digits[0]}.${digits[1]}.${Number(digits.slice(2))}`;
}

const game_version = readFileSync(gamebase_path, 'utf-8')
  .replace(/^\uFEFF/, '')
  .split(/\r?\n/)
  .find((e) => e.startsWith('バージョン,'))
  ?.substring('バージョン,'.length)
  .replace(/\s+$/, '');

if (!game_version) {
  throw new Error(`[sync-version.js] ${gamebase_path} 中缺少バージョン`);
}

const version = to_package_version(game_version);
const pkg = JSON.parse(readFileSync(package_path, 'utf-8'));

if (pkg.version === version) {
  process.stdout.write(
    `[sync-version.js] package.json 版本已是最新：${version}\n`,
  );
  process.exit(0);
}

pkg.version = version;
writeFileSync(package_path, `${JSON.stringify(pkg, null, 2)}\n`);
process.stdout.write(
  `[sync-version.js] package.json 版本已更新：${version}（GameBase：${game_version}）\n`,
);
