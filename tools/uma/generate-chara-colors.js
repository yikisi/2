const { readFileSync, writeFileSync } = require('fs');
const { join } = require('path');

const { generate_content } = require('../libs');

const uma_colors = require('../../common/uma/uma-colors.json');

uma_colors[7] = [uma_colors[7], '#ffff00'];
uma_colors[17] = [uma_colors[17], '#ff755e'];
uma_colors[34] = [uma_colors[34], '#dda0dd'];
uma_colors[38] = [uma_colors[38], '#ff68bc'];
uma_colors[52] = [uma_colors[52], '#ff6d9f'];

const color_path = join(__dirname, '../../ere/data/chara-colors.js');

writeFileSync(
  color_path,
  generate_content(
    readFileSync(color_path, 'utf-8'),
    '//',
    `const chara_colors = {
${Object.entries(uma_colors)
  .filter(([u]) => u.length < 4)
  .map(
    ([u, c]) =>
      `  ${u}: ${c instanceof Array ? `[${c.map((o) => `'${o}'`).join(', ')}]` : `'${c}'`},`,
  )
  .join('\n')}
};`,
  ),
);

console.log('done!');
