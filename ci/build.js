const { execSync } = require('child_process');
const {
  mkdirSync,
  readFileSync,
  readdirSync,
  renameSync,
  rmSync,
  statSync,
  writeFileSync,
} = require('fs');
const os = require('os');
const { join, resolve } = require('path');

const { path7za } = require('7zip-bin');
const { copySync } = require('fs-extra');

const work_dir = resolve('.');

execSync('git submodule update --init engine res', { cwd: work_dir });

const engine_path = join(work_dir, 'engine');
const game_all_dir = join(engine_path, process.env.GAME_ALL_DIR);
const game_all_zip = join(engine_path, process.env.GAME_ALL_ZIP);
const game_dir = join(game_all_dir, process.env.GAME_DIR);
const game_zip = join(game_all_dir, process.env.GAME_ZIP);

execSync('git submodule update --init src/kojo-loader', { cwd: engine_path });
execSync('git lfs pull', { cwd: engine_path });
execSync('pnpm install', { cwd: engine_path });
execSync('pnpm run win:pack', { cwd: engine_path });

rmSync(game_all_dir, { force: true, recursive: true });
renameSync(join(engine_path, 'dist_electron', 'win-unpacked'), game_all_dir);
mkdirSync(join(game_all_dir, 'game'));
[
  'ere',
  'csv',
  'CHANGELOG-test.md',
  'CHANGELOG-v1-kuuga.md',
  'CHANGELOG-v2-agito.md',
  'CHANGELOG-v3-ryuki.md',
  'RELEASE.md',
  'LICENSE',
  'README.md',
  'CONTRIBUTING.md',
].forEach((d) => copySync(join(work_dir, d), join(game_all_dir, 'game', d)));

function clean_json(p) {
  readdirSync(p).forEach((f) => {
    const new_path = join(p, f);
    if (f.endsWith('.json')) {
      writeFileSync(
        new_path,
        JSON.stringify(JSON.parse(readFileSync(new_path, 'utf-8'))),
      );
    } else if (statSync(new_path).isDirectory()) {
      clean_json(new_path);
    }
  });
}

clean_json(join(game_all_dir, 'game', 'ere'));
rmSync(game_all_zip, { force: true });
switch (os.platform()) {
  case 'linux':
  case 'darwin':
    execSync(`chmod +x ${path7za}`);
    break;
  case 'win32':
}
execSync(`${path7za} a -pera ${game_all_zip} ${game_all_dir}`);

rmSync(game_dir, { force: true, recursive: true });
copySync(join(game_all_dir, 'game'), game_dir);
rmSync(game_zip, { force: true });

execSync(`${path7za} a -pera ${process.env.GAME_ZIP} ${process.env.GAME_DIR}`, {
  cwd: game_all_dir,
});

// 检查是否要生成最小更新用的基础包
// 如果当前版本和最小更新的最低支持版本相同就不生成，因为用不到
const min_version = readFileSync(join(work_dir, '.ere-min-version'), 'utf-8')
  .replace(/^\uFEFF/, '')
  .split('\n')[0]
  .replace(/\s+$/, '');
const game_version = readFileSync(join(work_dir, 'csv/GameBase.csv'), 'utf-8')
  .replace(/^\uFEFF/, '')
  .split('\n')
  .find((e) => e.startsWith('バージョン,'))
  .substring(6)
  .replace(/\s+$/, '');
if (min_version !== game_version) {
  const base_zip = join(game_all_dir, 'game', 'base.zip');
  rmSync(base_zip, { force: true });
  // 基础包里只需要一个静态数据文件夹（这里是csv）和游戏脚本集（ere）
  execSync(`${path7za} a ${base_zip} csv ere`, {
    cwd: join(game_all_dir, 'game'),
  });
}

const res_path = join(work_dir, 'res');
process.stdout.write(execSync('git fetch --tags', { cwd: res_path }));
const res_ver = String(
  execSync('git tag --sort=-creatordate | head -n 2', {
    cwd: res_path,
  }),
)
  .split('\n')
  .map((e) => e);

writeFileSync(
  join(work_dir, 'res.env'),
  `RES_VERSION=${res_ver[0]}\nOLD_VERSION=${res_ver[1]}`,
  { encoding: 'utf-8' },
);
