const { readFileSync, writeFileSync } = require('fs');

const cup_dict = {
  AA: 5,
};
new Array(26).fill(0).forEach((_, i) => {
  cup_dict[String.fromCharCode(65 + i)] = 10 + Math.ceil(2.5 * i);
});

const lines = readFileSync('./uma-data.csv', 'utf-8')
  .replace(/^\uFEFF/, '')
  .split('\n')
  .filter((e) => e)
  .map((e) => e.replace(/\s+$/, ''));
const header = lines.shift().split(',');

function random_int(min, max) {
  return min + Math.floor((max + 1 - min) * Math.random());
}

function random_attr(chara_line) {
  // 生成随机属性
  let sum_attr = 550;
  chara_line[13] = random_int(84, 137);
  sum_attr -= chara_line[13];
  chara_line[14] = random_int(
    Math.max(71, sum_attr - 136 - 129 - 127),
    Math.min(143, sum_attr - 86 - 79 - 89),
  );
  sum_attr -= chara_line[14];
  chara_line[15] = random_int(
    Math.max(86, sum_attr - 129 - 127),
    Math.min(136, sum_attr - 79 - 89),
  );
  sum_attr -= chara_line[15];
  chara_line[16] = random_int(
    Math.max(79, sum_attr - 127),
    Math.min(129, sum_attr - 89),
  );
  sum_attr -= chara_line[16];
  chara_line[17] = sum_attr;

  // 生成随机属性加成
  let sum_buff = 30;
  chara_line[18] = random_int(0, 30);
  sum_buff -= chara_line[18];
  chara_line[19] = random_int(
    Math.max(0, sum_buff - 3 * 30),
    Math.min(30, sum_buff),
  );
  sum_buff -= chara_line[19];
  chara_line[20] = random_int(
    Math.max(0, sum_buff - 2 * 30),
    Math.min(30, sum_buff),
  );
  sum_buff -= chara_line[20];
  chara_line[21] = random_int(
    Math.max(0, sum_buff - 30),
    Math.min(30, sum_buff),
  );
  sum_buff -= chara_line[21];
  chara_line[22] = sum_buff;

  if (!chara_line[23]) {
    // 生成随机适性，每类有一个保底B，其他在A～G之中随机
    chara_line[random_int(23, 24)] = String.fromCharCode(65 + random_int(0, 1));
    for (let i = 23; i <= 24; ++i) {
      if (!chara_line[i]) {
        chara_line[i] = String.fromCharCode(65 + random_int(0, 6));
      }
    }

    chara_line[random_int(25, 28)] = String.fromCharCode(65 + random_int(0, 1));
    for (let i = 25; i <= 28; ++i) {
      if (!chara_line[i]) {
        chara_line[i] = String.fromCharCode(65 + random_int(0, 6));
      }
    }

    chara_line[random_int(29, 32)] = String.fromCharCode(65 + random_int(0, 1));
    for (let i = 29; i <= 32; ++i) {
      if (!chara_line[i]) {
        chara_line[i] = String.fromCharCode(65 + random_int(0, 6));
      }
    }
  }

  // 这类马娘统一给称号未实装
  chara_line[41] = chara_line[41] || '未 实 装';
}

lines
  .map((e) => e.split(','))
  .forEach((chara_line) => {
    if (chara_line.length === header.length && chara_line[8]) {
      if (!chara_line[14]) {
        random_attr(chara_line);
      }
      const file_name = `Chara${chara_line[0]}.csv`;
      const breast_down = chara_line[9] - cup_dict[chara_line[7]];
      console.log(
        `${file_name}\t${chara_line[8]}/${breast_down}=${
          chara_line[8] / breast_down
        }\t${breast_down}/${chara_line[10]}=${breast_down / chara_line[10]}`,
      );
      let buffer = '\ufeff';
      chara_line.forEach((e, i) => {
        if (i) {
          let col_value = chara_line[i];
          if (i === 2) {
            col_value = `${col_value}\n基础属性,性欲,10001\n基础属性,压力,10000\n基础属性,体重偏差,10000\n基础属性,药物残留,1000\n角色Flag,父方角色,-1\n角色Flag,母方角色,-1\n基础属性,体力,1000\n基础属性,精力,1000\n基础属性,根性,1200\n基础属性,智力,1200`;
          } else if (i === 7) {
            col_value = chara_line[9] - cup_dict[col_value];
          } else if (i >= 23 && i <= 32) {
            col_value = 'G'.charCodeAt(0) - col_value.charCodeAt(0);
          }
          buffer += `${header[i].replace('|', ',')},${col_value}\n`;
        }
      });
      writeFileSync(`../../csv/Chara/${file_name}`, buffer.replace(/\s+$/, ''));
    }
  });
