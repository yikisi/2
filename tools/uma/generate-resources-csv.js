const { readFileSync, writeFileSync, existsSync } = require('fs');

const lines = readFileSync('./uma-data.csv', 'utf-8')
  .split('\n')
  .filter((e) => e);
lines.shift();

const buffer = {
  others: '\ufeff',
  race: '\ufeffdefault,chr_icon_0000.png\n',
  sportswear: '\ufeff',
  'uniform-summer': '\ufeff',
  'uniform-winter': '\ufeff',
};

const chara_lines = lines.map((e) => {
  const l = e.split(',');
  console.log(l[0]);
  return { id: l[0], alias: l[42].replace(/\s+$/, '') };
});

function check_and_add_to_csv(file_name, img_name, img_regex) {
  const icon = `chr_icon_${img_regex}_01.png`;
  const stand = `chara_stand_${img_regex}.png`;
  if (existsSync(`../../res/${file_name}/${icon}`)) {
    buffer[file_name] += `${img_name},${icon}\n`;
  }
  if (existsSync(`../../res/${file_name}/${stand}`)) {
    buffer[file_name] += `${img_name}_半身,${stand}\n`;
  }
}

chara_lines.unshift({ alias: '俺', id: '0000' });

chara_lines.forEach((chara) => {
  check_and_add_to_csv(
    'others',
    `${chara.alias}_私`,
    `${chara.id}_90${chara.id}`,
  );
  check_and_add_to_csv(
    'others',
    `${chara.alias}_春`,
    `${chara.id}_${chara.id}10`,
  );
  check_and_add_to_csv(
    'others',
    `${chara.alias}_仆`,
    `${chara.id}_${chara.id}13`,
  );
  check_and_add_to_csv(
    'others',
    `${chara.alias}_游`,
    `${chara.id}_${chara.id}16`,
  );
  check_and_add_to_csv(
    'others',
    `${chara.alias}_礼`,
    `${chara.id}_${chara.id}20`,
  );
  check_and_add_to_csv(
    'others',
    `${chara.alias}_夏私`,
    `${chara.id}_${chara.id}23`,
  );
  check_and_add_to_csv(
    'others',
    `${chara.alias}_婚`,
    `${chara.id}_${chara.id}26`,
  );
  check_and_add_to_csv(
    'others',
    `${chara.alias}_泳`,
    `${chara.id}_${chara.id}30`,
  );
  check_and_add_to_csv(
    'others',
    `${chara.alias}_万圣`,
    `${chara.id}_${chara.id}40`,
  );
  check_and_add_to_csv(
    'others',
    `${chara.alias}_江户`,
    `${chara.id}_${chara.id}43`,
  );
  check_and_add_to_csv(
    'others',
    `${chara.alias}_圣诞`,
    `${chara.id}_${chara.id}46`,
  );
  check_and_add_to_csv(
    'others',
    `${chara.alias}_应援`,
    `${chara.id}_${chara.id}50`,
  );

  check_and_add_to_csv('race', chara.alias, `${chara.id}_${chara.id}01`);
  check_and_add_to_csv('race', `${chara.alias}2`, `${chara.id}_${chara.id}02`);

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
