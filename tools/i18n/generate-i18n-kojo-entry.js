const { existsSync, readdirSync, statSync } = require('fs');

const { read_and_write_generated } = require('../libs');
const { join } = require('path');

const basePath = '#/i18n/zh-CN/kojo';

const kojoPath = join(__dirname, '../../ere' + basePath.substring(1));

const kojoDir = readdirSync(kojoPath);

const order = ['rec', 'daily', 'edu', 'love', 'ero', 'base'];
const name = {
  rec: 'recruit',
  base: 'basement',
};
const skipEntry = [106799].reduce((p, c) => {
  p[c] = 1;
  return p;
}, {});
const skip = [100300, 103200, 108500].reduce((p, c) => {
  p[c] = 1;
  return p;
}, {});

let entryOut = '';
for (const charaPath of kojoDir) {
  const kojoId = charaPath.replace(/\D+/, '').trim();
  if (kojoId.length !== 6 || skipEntry[kojoId]) {
    continue;
  }
  const p = join(kojoPath, charaPath);
  if (!statSync(p).isDirectory() || !existsSync(join(p, 'entry.js'))) {
    continue;
  }
  const files = readdirSync(p).filter((t) => t !== 'entry.js');
  let cid;
  {
    const temp = Math.floor(+kojoId / 100);
    if (temp >= 9000) {
      cid = temp - 9000 + 300;
    } else if (temp >= 4000) {
      cid = 400;
    } else if (temp >= 2000) {
      cid = temp - 2000 + 200;
    } else {
      cid = temp - 1000;
    }
  }
  entryOut += `${cid} = require('#/i18n/zh-CN/kojo/${charaPath}/entry')._;`;
  if (!skip[kojoId]) {
    const suffixDict = {};
    files.forEach((t) => (suffixDict[t.substring(t.indexOf('.'))] = 1));
    if (Object.keys(suffixDict).length > 1) {
      console.error(cid, 'conflicts!');
      continue;
    }
    const suffix = cid + Object.keys(suffixDict)[0];
    if (files.some((t) => !t.endsWith(suffix))) {
      console.error(cid, 'suffix error!');
      continue;
    }
    const entries = [];
    const className = 'I18nKojo' + kojoId;
    if (Object.keys(suffixDict).length > 0) {
      files.sort(
        (a, b) =>
          order.indexOf(a.substring(0, a.length - suffix.length - 1)) -
          order.indexOf(b.substring(0, b.length - suffix.length - 1)),
      );
      entries.push(
        ...(suffix.endsWith('js')
          ? files.map(
              (t) =>
                `${name[t.substring(0, t.length - suffix.length - 1)] ?? t.substring(0, t.length - suffix.length - 1)} = proxy_kojo_js(require('${basePath + '/' + charaPath + '/' + t}'));`,
            )
          : files.map(
              (t) =>
                `/** @type {KojoFile} */\n${name[t.substring(0, t.length - suffix.length - 1)] ?? t.substring(0, t.length - suffix.length - 1)} = require('${basePath + '/' + charaPath + '/' + t}');`,
            )),
      );
    }
    read_and_write_generated(
      join(p, 'entry.js'),
      '//',
      `class ${className} {\n\nstatic _ = new ${className}();\n${entries.join('\n')}`,
    );
  }
  // console.log(cid, className, charaPath);
}

read_and_write_generated(join(kojoPath, 'entry.js'), '//', entryOut);

console.log('done!');
