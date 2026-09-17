const { mkdirSync, readFileSync, rmSync, writeFileSync } = require('fs');

rmSync('public', { force: true, recursive: true });
mkdirSync('public');

const min_version = readFileSync('.ere-min-version', 'utf-8')
  .replace(/^\uFEFF/, '')
  .split('\n')[0]
  .replace(/\s+$/, '');
// 版本号从 csv/GameBase.csv 里读取
// 如果是其他格式的可以自行修改
// json 可以直接 require，yml 需要装一个 yamljs 处理
const game_version = readFileSync('csv/GameBase.csv', 'utf-8')
  .replace(/^\uFEFF/, '')
  .split('\n')
  .find((e) => e.startsWith('バージョン,'))
  .substring(6)
  .replace(/\s+$/, '');

// 生成版本检查用的文件
writeFileSync('public/RELEASE', `${game_version}\n${min_version}`);
