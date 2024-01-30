const { readFileSync, writeFileSync } = require('fs');

const talents = readFileSync('../../lines/无主马娘先天特性表.csv', 'utf-8')
  .replace(/^\ufeff/, '')
  .split('\n')
  .map((e) => e.replace(/\s+$/, '').split(','))
  .filter((e) => e[4]);
talents.shift();
talents.pop();

talents.forEach((e) => {
  let buffer = '\ufeff';
  buffer += `角色编号,${e[1]}\n`;
  e.slice(4, 12)
    .filter((t) => t)
    .forEach((t) => {
      const talent = t.replace('|', ',');
      buffer += `特性,${talent.indexOf(',') === -1 ? `${talent},1` : talent}\n`;
    });
  const file_name = `Chara${e[0]} ${e[2]}.csv`;
  writeFileSync(`../../csv/Chara/extend/${file_name}`, buffer);
});
