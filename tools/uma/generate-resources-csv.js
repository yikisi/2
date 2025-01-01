const { existsSync, readFileSync, writeFileSync } = require('fs');

const id2suffix = require('../../common/clothe-id2suffix');

const lines = readFileSync('../../common/uma/uma-data.csv', 'utf-8')
  .replace(/^\ufeff/, '')
  .split('\n')
  .filter((e) => e);
const header = lines
  .shift()
  .split(',')
  .map((e) => e.replace(/\s+$/, ''));
const file_name_index = header.findIndex((e) => e === '文件名'),
  image_index = header.findIndex((e) => e === '角色Str|头像');

const buffer = {
  others: '\ufeff',
  race: '\ufeffdefault,chr_icon_0000.png,0,0,200,219\n',
  sportswear: '\ufeff',
  'uniform-summer': '\ufeff',
  'uniform-winter': '\ufeff',
};

const chara_lines = lines.map((e) => {
  const l = e.split(',');
  console.log(l[file_name_index]);
  return { id: l[file_name_index], alias: l[image_index].replace(/\s+$/, '') };
});

function check_and_add_to_csv(file_name, img_name, img_regex) {
  const icon = `chr_icon_${img_regex}_01.png`;
  const stand = `chara_stand_${img_regex}.png`;
  if (existsSync(`../../res/${file_name}/${icon}`)) {
    buffer[file_name] += `${img_name},${icon},0,0,200,219\n`;
  }
  if (existsSync(`../../res/${file_name}/${stand}`)) {
    buffer[file_name] += `${img_name}_半身,${stand},0,0,512,512\n`;
  }
}

chara_lines.unshift({ alias: '俺', id: '0000' });

chara_lines.forEach((chara) => {
  check_and_add_to_csv(
    'others',
    `${chara.alias}_私`,
    `${chara.id}_90${chara.id}`,
  );
  for (const key in id2suffix) {
    const k = Number(key),
      suffix = id2suffix[key];
    if (k <= 2) {
      check_and_add_to_csv(
        'race',
        `${chara.alias}${suffix}`,
        `${chara.id}_${chara.id}0${key}`,
      );
    } else {
      check_and_add_to_csv(
        'others',
        `${chara.alias}${suffix}`,
        `${chara.id}_${chara.id}${key}`,
      );
    }
  }

  check_and_add_to_csv('sportswear', `${chara.alias}_运`, `${chara.id}_000001`);

  check_and_add_to_csv(
    'uniform-summer',
    `${chara.alias}_夏`,
    `${chara.id}_000002`,
  );

  check_and_add_to_csv(
    'uniform-winter',
    `${chara.alias}_冬`,
    `${chara.id}_000005`,
  );
});

Object.entries(buffer).forEach(
  (e) => (buffer[e[0]] = e[1].replace(/\s+$/, '')),
);

writeFileSync('../../res/others/others.csv', buffer.others);
writeFileSync('../../res/race/race.csv', buffer.race);
writeFileSync('../../res/sportswear/sportswear.csv', buffer.sportswear);
writeFileSync(
  '../../res/uniform-summer/summer-uniform.csv',
  buffer['uniform-summer'],
);
writeFileSync(
  '../../res/uniform-winter/winter-uniform.csv',
  buffer['uniform-winter'],
);
