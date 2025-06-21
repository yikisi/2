const { execSync } = require('child_process');
const { readFileSync, writeFileSync } = require('fs');
const { join } = require('path');

const {
  motion_enum,
  towards_enum,
  up_enum,
} = require('../../ere/data/ero/part-const');

const motion_names = Object.keys(motion_enum);
const towards_names = Object.keys(towards_enum);
const up_names = Object.keys(up_enum);

const f = readFileSync(join(__dirname, './距离计算.md'), 'utf-8').split('\n');

let output = `const {
  base_enum,
  motion_enum,
  towards_enum,
  up_enum,
} = require('#/data/ero/part-const');

const base_dict = [
  [
    [
      [[], []],
      [[], []],
    ],
    [
      [[], []],
      [[], []],
    ],
    [
      [[], []],
      [[], []],
    ],
    [
      [[], []],
      [[], []],
    ],
  ],
  [
    [
      [[], []],
      [[], []],
    ],
    [
      [[], []],
      [[], []],
    ],
    [
      [[], []],
      [[], []],
    ],
    [
      [[], []],
      [[], []],
    ],
  ],
  [
    [
      [[], []],
      [[], []],
    ],
    [
      [[], []],
      [[], []],
    ],
    [
      [[], []],
      [[], []],
    ],
    [
      [[], []],
      [[], []],
    ],
  ],
  [
    [
      [[], []],
      [[], []],
    ],
    [
      [[], []],
      [[], []],
    ],
    [
      [[], []],
      [[], []],
    ],
    [
      [[], []],
      [[], []],
    ],
  ],
];

const base2motion = [[], [], [], [], [], []];

/**
 * @param {number} m_atk
 * @param {number} m_def
 * @param {number} t_atk
 * @param {number} t_def
 * @param {number} is_up
 */
function get_motion_code(m_atk, m_def, t_atk, t_def, is_up) {
  return is_up * 10000 + t_def * 1000 + m_def * 100 + t_atk * 10 + m_atk;
}

/**
 * @param {number} m_atk
 * @param {number} m_def
 * @param {number} t_atk
 * @param {number} t_def
 * @param {number} is_up
 * @param {number} val
 */
function register_motion(m_atk, m_def, t_atk, t_def, is_up, val) {
  const motion_code = get_motion_code(m_atk, m_def, t_atk, t_def, is_up);
  if (val > base_enum.no) {
    base2motion[val].push(motion_code);
  }
  base_dict[m_atk][m_def][t_atk][t_def][is_up] = val;
}

`;

function generate(a, u) {
  const up = up_names[u];
  a.forEach((l, dmi) => {
    const a = l
      .split('|')
      .slice(2, 6)
      .map((s) => s.replace(/^\s+|\s+$/g, '').split('<br>'));
    for (let ami = 0; ami < 4; ++ami) {
      if (a[ami].length === 1) {
        if (a[ami][0].endsWith('被踩')) {
          output += `register_motion(motion_enum.${motion_names[ami]},motion_enum.${motion_names[dmi]},towards_enum.right,towards_enum.right,up_enum.${up},base_enum.b_foot);\n`;
          output += `register_motion(motion_enum.${motion_names[ami]},motion_enum.${motion_names[dmi]},towards_enum.right,towards_enum.left,up_enum.${up},base_enum.b_foot);\n`;
          output += `register_motion(motion_enum.${motion_names[ami]},motion_enum.${motion_names[dmi]},towards_enum.left,towards_enum.right,up_enum.${up},base_enum.b_foot);\n`;
          output += `register_motion(motion_enum.${motion_names[ami]},motion_enum.${motion_names[dmi]},towards_enum.left,towards_enum.left,up_enum.${up},base_enum.b_foot);\n`;
        } else if (a[ami][0].endsWith('踩到')) {
          output += `register_motion(motion_enum.${motion_names[ami]},motion_enum.${motion_names[dmi]},towards_enum.right,towards_enum.right,up_enum.${up},base_enum.foot);\n`;
          output += `register_motion(motion_enum.${motion_names[ami]},motion_enum.${motion_names[dmi]},towards_enum.right,towards_enum.left,up_enum.${up},base_enum.foot);\n`;
          output += `register_motion(motion_enum.${motion_names[ami]},motion_enum.${motion_names[dmi]},towards_enum.left,towards_enum.right,up_enum.${up},base_enum.foot);\n`;
          output += `register_motion(motion_enum.${motion_names[ami]},motion_enum.${motion_names[dmi]},towards_enum.left,towards_enum.left,up_enum.${up},base_enum.foot);\n`;
        } else if (a[ami][0].endsWith('不可能')) {
          output += `register_motion(motion_enum.${motion_names[ami]},motion_enum.${motion_names[dmi]},towards_enum.right,towards_enum.right,up_enum.${up},base_enum.no);\n`;
          output += `register_motion(motion_enum.${motion_names[ami]},motion_enum.${motion_names[dmi]},towards_enum.right,towards_enum.left,up_enum.${up},base_enum.no);\n`;
          output += `register_motion(motion_enum.${motion_names[ami]},motion_enum.${motion_names[dmi]},towards_enum.left,towards_enum.right,up_enum.${up},base_enum.no);\n`;
          output += `register_motion(motion_enum.${motion_names[ami]},motion_enum.${motion_names[dmi]},towards_enum.left,towards_enum.left,up_enum.${up},base_enum.no);\n`;
        }
      } else {
        for (let ti = 0; ti < 4; ++ti) {
          const ati = Math.floor(ti / 2);
          const dti = ti % 2;
          let base = 'no';
          if (a[ami][ti].endsWith('同向直角')) {
            base = 's_tri';
          } else if (a[ami][ti].endsWith('反向直角')) {
            base = 'd_tri';
          } else if (a[ami][ti].endsWith('同向')) {
            base = 'same';
          } else if (a[ami][ti].endsWith('反向')) {
            base = 'diff';
          }
          output += `register_motion(motion_enum.${motion_names[ami]},motion_enum.${motion_names[dmi]},towards_enum.${towards_names[ati]},towards_enum.${towards_names[dti]},up_enum.${up},base_enum.${base});\n`;
        }
      }
    }
    output += '\n';
  });
}

generate(f.slice(6, 10), up_enum.up);
generate(f.slice(15, 19), up_enum.down);

output += `Object.values(base2motion).forEach((l) => l.sort((a, b) => a - b));

module.exports = { base_dict, base2motion, get_motion_code };
`;

writeFileSync(join(__dirname, '../../ere/data/ero/motion-const.js'), output);

try {
  process.stdout.write(
    execSync('npx eslint --fix ./ere/data/ero/motion-const.js', {
      cwd: join(__dirname, '../..'),
    }),
  );
} catch (e) {
  process.stdout.write(e.stdout);
}
