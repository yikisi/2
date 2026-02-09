const { readFileSync } = require('fs');
const { join } = require('path');

const named_contestants = require('../../ere/data/race/contestants/named.json');
const { read_and_write_generated } = require('../libs');

const i18n_feat = new (require('../../ere/i18n/zh-CN/chara/feature'))();

const cup_dict = {
  AA: 5,
};
new Array(26).fill(0).forEach((_, i) => {
  cup_dict[String.fromCharCode(65 + i)] = 10 + Math.ceil(2.5 * i);
});

const lines = readFileSync(
  join(__dirname, '../../common/uma/uma-data.csv'),
  'utf-8',
)
  .replace(/^\uFEFF/, '')
  .split('\n')
  .filter((e) => e)
  .map((e) => e.replace(/\s+$/, ''));
const header = lines
  .shift()
  .split(',')
  .map((e) => e.replace(/\s+$/, ''));
const cup_index = header.findIndex((e) => e === '角色Flag|下胸围');
const breast_index = header.findIndex((e) => e === '角色Flag|胸围');
const file_name_index = header.findIndex((e) => e === '文件名');
const height_index = header.findIndex((e) => e === '角色Flag|身高');
const waist_index = header.findIndex((e) => e === '角色Flag|腰围');
const name_index = header.findIndex((e) => e === '姓名');
const call_index = header.findIndex((e) => e === '默认称呼');
const attr_start_index = header.findIndex((e) => e === '角色Flag|初始速度');
const buff_start_index = header.findIndex((e) => e === '角色Flag|速度加成');
const adapt_start_index = header.findIndex((e) => e === '角色Flag|草地适性');
const title_index = header.findIndex((e) => e === '角色Str|称号');
const race_index = header.findIndex((e) => e === '角色Flag|种族');
const id_index = header.findIndex((e) => e === '角色编号');
const hc_index = header.findIndex((e) => e === '角色Str|发色');
const bhc_index = header.findIndex((e) => e === '角色Str|毛色');
const fh_index = header.findIndex((e) => e === '角色Str|前发');
const mh_index = header.findIndex((e) => e === '角色Str|中发');
const bh_index = header.findIndex((e) => e === '角色Str|后发');
const th_index = header.findIndex((e) => e === '角色Str|呆毛');

function random_int(min, max) {
  return min + Math.floor((max + 1 - min) * Math.random());
}

function find_key_by_value(dict, val) {
  const pair = Object.entries(dict).find((e) => e[1] === val);
  if (pair) {
    return pair[0];
  }
  return val;
}

function random_attr(chara_line) {
  const id = Number(chara_line[id_index]);
  // 生成随机属性
  let sum_attr = 550;
  chara_line[attr_start_index] = random_int(84, 137);
  sum_attr -= chara_line[attr_start_index];
  chara_line[attr_start_index + 1] = random_int(
    Math.max(71, sum_attr - 136 - 129 - 127),
    Math.min(143, sum_attr - 86 - 79 - 89),
  );
  sum_attr -= chara_line[attr_start_index + 1];
  chara_line[attr_start_index + 2] = random_int(
    Math.max(86, sum_attr - 129 - 127),
    Math.min(136, sum_attr - 79 - 89),
  );
  sum_attr -= chara_line[attr_start_index + 2];
  chara_line[attr_start_index + 3] = random_int(
    Math.max(79, sum_attr - 127),
    Math.min(129, sum_attr - 89),
  );
  sum_attr -= chara_line[attr_start_index + 3];
  chara_line[attr_start_index + 4] = sum_attr;

  // 生成随机属性加成
  let sum_buff = 30;
  chara_line[buff_start_index] = random_int(0, 30);
  sum_buff -= chara_line[buff_start_index];
  chara_line[buff_start_index + 1] = random_int(
    Math.max(0, sum_buff - 3 * 30),
    Math.min(30, sum_buff),
  );
  sum_buff -= chara_line[buff_start_index + 1];
  chara_line[buff_start_index + 2] = random_int(
    Math.max(0, sum_buff - 2 * 30),
    Math.min(30, sum_buff),
  );
  sum_buff -= chara_line[buff_start_index + 2];
  chara_line[buff_start_index + 3] = random_int(
    Math.max(0, sum_buff - 30),
    Math.min(30, sum_buff),
  );
  sum_buff -= chara_line[buff_start_index + 3];
  chara_line[buff_start_index + 4] = sum_buff;

  if (!chara_line[adapt_start_index]) {
    let contestant;
    if (
      (contestant = named_contestants.find((e) => e.id === id)) !== undefined
    ) {
      for (let i = 0; i < 2; ++i) {
        chara_line[adapt_start_index + i] = String.fromCharCode(
          65 + 6 - Math.min(contestant.adapt_ground[i], 6),
        );
      }
      for (let i = 0; i < 4; ++i) {
        chara_line[adapt_start_index + 2 + i] = String.fromCharCode(
          65 + 6 - Math.min(contestant.adapt_distance[i], 6),
        );
      }
      for (let i = 0; i < 4; ++i) {
        chara_line[adapt_start_index + 6 + i] = String.fromCharCode(
          65 + 6 - Math.min(contestant.adapt_style[i], 6),
        );
      }
      console.log(
        id,
        chara_line.slice(adapt_start_index, adapt_start_index + 10),
      );
    } else {
      // 生成随机适性，每类有一个保底B，其他在A～G之中随机
      chara_line[random_int(adapt_start_index, adapt_start_index + 1)] =
        String.fromCharCode(65 + random_int(0, 1));
      for (let i = adapt_start_index; i <= adapt_start_index + 1; ++i) {
        if (!chara_line[i]) {
          chara_line[i] = String.fromCharCode(65 + random_int(0, 6));
        }
      }

      chara_line[random_int(adapt_start_index + 2, adapt_start_index + 5)] =
        String.fromCharCode(65 + random_int(0, 1));
      for (let i = adapt_start_index + 2; i <= adapt_start_index + 5; ++i) {
        if (!chara_line[i]) {
          chara_line[i] = String.fromCharCode(65 + random_int(0, 6));
        }
      }

      chara_line[random_int(adapt_start_index + 6, adapt_start_index + 9)] =
        String.fromCharCode(65 + random_int(0, 1));
      for (let i = adapt_start_index + 6; i <= adapt_start_index + 9; ++i) {
        if (!chara_line[i]) {
          chara_line[i] = String.fromCharCode(65 + random_int(0, 6));
        }
      }
    }
  }

  chara_line[title_index] = chara_line[title_index] || '幻觉马娘';
}

lines
  .map((e) => e.split(','))
  .forEach((chara_line) => {
    if (
      chara_line.length === header.length &&
      chara_line[cup_index] &&
      chara_line[breast_index] &&
      chara_line[file_name_index]
    ) {
      if (!chara_line[attr_start_index]) {
        random_attr(chara_line);
      }
      const file_id = chara_line[file_name_index];
      const file_name = `Chara${chara_line[file_name_index]}.csv`;
      const breast_down =
        chara_line[breast_index] - cup_dict[chara_line[cup_index]];
      console.log(
        `${file_name}\t${chara_line[height_index]}/${breast_down}=${
          chara_line[height_index] / breast_down
        }\t${breast_down}/${chara_line[waist_index]}=${
          breast_down / chara_line[waist_index]
        }`,
      );
      let buffer = '';
      let name;
      chara_line.forEach((e, i) => {
        if (i > 0) {
          let col_value = chara_line[i];
          if (i === name_index) {
            name = col_value;
            col_value = `${file_id}01\n基础属性,性欲,10001\n基础属性,压力,10000\n基础属性,体重偏差,10000\n基础属性,药物残留,1000\n角色Flag,父方角色,-1\n角色Flag,母方角色,-1\n基础属性,体力,1000\n基础属性,精力,1000\n基础属性,根性,1200\n基础属性,智力,1200`;
          } else if (i === race_index) {
            col_value = `${col_value}\n${['速度', '耐力', '力量']
              .map((e) => `基础属性,${e},${col_value === '1' ? 1200 : 400}`)
              .join('\n')}`;
          } else if (i === cup_index) {
            col_value = breast_down;
          } else if (i >= adapt_start_index && i <= adapt_start_index + 9) {
            col_value = 'G'.charCodeAt(0) - col_value.charCodeAt(0);
          } else if (i === call_index) {
            if (col_value === name) {
              col_value = `${file_id}01`;
            } else {
              col_value = `${file_id}11`;
            }
          } else if (i === title_index) {
            col_value = `${file_id}01`;
          } else if (i === hc_index || i === bhc_index) {
            col_value = find_key_by_value(i18n_feat, col_value).substring(3);
          } else if (
            i === fh_index ||
            i === mh_index ||
            i === bh_index ||
            i === th_index
          ) {
            col_value = col_value
              .split('+')
              .map((e) => find_key_by_value(i18n_feat, e).substring(3))
              .join('+');
          }
          buffer += `${header[i].replace('|', ',')},${col_value}\n`;
        }
      });
      read_and_write_generated(
        join(__dirname, `../../csv/Chara/${file_name}`),
        ';',
        buffer.replace(/\s+$/, ''),
      );
    }
  });
