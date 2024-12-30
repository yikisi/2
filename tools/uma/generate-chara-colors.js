const { execSync } = require('child_process');
const { writeFileSync } = require('fs');
const { join } = require('path');

const uma_colors = require('../../common/uma/uma-colors.json');

writeFileSync(
  '../../ere/data/chara-colors.js',
  `const chara_colors = ${JSON.stringify(uma_colors)};
  
module.exports = {
  chara_colors,
  /** @param {number} chara_id */
  get_chara_color(chara_id) {
    if (chara_id === undefined) {
      return '#9f9f9f';
    }
    let ret = chara_colors[chara_id];
    ret = ret instanceof Array ? ret[0] : ret;
    if (!ret) {
      const id_color = chara_id.toString(9).padStart(3, '0');
      ret = \`#\${[id_color[0], id_color[1], id_color[2]]
    .map((e) => (0xff - Number(e) * 16).toString(16).padStart(2, '0'))
    .join('')}\`;
    }
    return ret;
  },
};`,
);

execSync('npx eslint --fix ./ere/data/chara-colors.js', {
  cwd: join(process.cwd(), '../..'),
});
