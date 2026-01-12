const { chara_colors } = require('../../ere/data/chara-colors');

let dict = {},
  flag = true;

console.log('[check-chara-colors.js] color conflicts:');

function a(k, v) {
  if (dict[k]) {
    console.log(`\t${k} ${dict[k]} <-> ${v}`);
    flag = false;
  } else {
    dict[k] = v;
  }
}

Object.entries(chara_colors).forEach((e) => {
  if (e[1] instanceof Array) {
    e[1].forEach((k) => a(k, e[0]));
  } else {
    a(e[1], e[0]);
  }
});

if (flag) {
  console.log('\tnone');
} else {
  process.exit(1);
}
