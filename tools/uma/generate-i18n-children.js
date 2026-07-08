const { readFileSync, writeFileSync } = require('fs');
const { join } = require('path');

const { parse: parseYaml } = require('yamljs');

const names = new (require('../../ere/i18n/zh-CN/chara/names'))();
const children = require('../../common/uma/child-names.json');
const { read_and_write_generated, stringify } = require('../libs');

const translation = parseYaml(
  readFileSync(join(__dirname, '../../common/i18n/name-dict.yaml'), 'utf-8'),
);

const dict = {};
const output = {};

for (const k in names) {
  const n = names[k];
  if (dict[n]) {
    console.log(`duplicate! ${dict[n]} and ${k} = ${n}`);
  }
  dict[n] = k;
}

const trans_dict = {};
for (const j in translation) {
  const [c, e] = translation[j];
  trans_dict[c] = [j, e];
}

let n1 = [];
let n2 = [];

for (const k in children) {
  if (dict[k]) {
    n1.push(k);
  } else {
    n2.push(k);
  }
}

const g = {};

let c_out = [];
let j_out = [];
let e_out = [];

while (n1.length > 0) {
  for (const n of n1) {
    const k = dict[n];
    const chi = children[n];
    if (Array.isArray(chi)) {
      output[k] = chi.map((e, i) => {
        const key = `${k}${i.toString().padStart(2, '0')}`;
        g[e] = dict[e] = key;
        return key;
      });
    } else {
      output[k] = dict[chi];
    }
  }
  const tmp = n2;
  n1 = [];
  n2 = [];
  for (const n of tmp) {
    if (dict[n]) {
      n1.push(n);
    } else {
      n2.push(n);
    }
  }
}

Object.entries(g)
  .sort((a, b) => Number(a[1]) - Number(b[1]))
  .forEach(([c, k]) => {
    c_out.push(`  ${k} = ${stringify(c)};`);
    if (trans_dict[c]) {
      j_out.push(`  ${k} = ${stringify(trans_dict[c][0])};`);
      e_out.push(`  ${k} = ${stringify(trans_dict[c][1])};`);
    }
  });

writeFileSync(
  join(__dirname, '../../ere/data/child-names.json'),
  JSON.stringify(output, null, 2),
);
read_and_write_generated(
  join(__dirname, '../../ere/i18n/zh-CN/chara/names.js'),
  '// CHILDREN',
  ...c_out,
);
read_and_write_generated(
  join(__dirname, '../../ere/i18n/ja-JP/chara/names.js'),
  '// CHILDREN',
  ...j_out,
);
read_and_write_generated(
  join(__dirname, '../../ere/i18n/en-US/chara/names.js'),
  '// CHILDREN',
  ...e_out,
);
