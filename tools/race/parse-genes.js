const { readdirSync } = require('node:fs');
const { join } = require('node:path');

const skill_path = join(__dirname, '../../ere/data/race/skill');
const gene_path = join(__dirname, '../../ere/data/race/gene');
const { read_and_write_generated } = require('../libs');

const skill_list = readdirSync(skill_path);

const adaptability_names = [
  '草地',
  '泥地',
  '短距离',
  '英里赛',
  '中距离',
  '长距离',
  '逃马',
  '先马',
  '差马',
  '追马',
];
const attr_names = ['速度', '耐力', '力量', '根性', '智力'];

let output = 'const gene_dict = {};\n\n';

let n_out = '';
let d_out = '';

adaptability_names.forEach((e, i) => {
  const gene_id = 100000 + i;
  n_out += `${gene_id} = '秘传 · ${e}诀窍';`;
  d_out += `${gene_id} = '${e}适性提高';`;
  read_and_write_generated(
    join(gene_path, `gene-${gene_id}.js`),
    '//',
    `const UmaGene = require('#/data/race/model/uma-gene');\n\nmodule.exports = new UmaGene(${
      gene_id
    },UmaGene.gene_rarity_enum.r,UmaGene.gene_type_enum.adapt,${i},100,-1)`,
  );
  output += `gene_dict[${gene_id}] = require('#/data/race/gene/gene-${gene_id}');\n`;
});

const attr_gene_names = ['新星', '高手', '名宿', '大师'];
const attr_gene_cost = [25, 49, 72, 95];

attr_names.forEach((e, i) => {
  attr_gene_names.forEach((ne, j) => {
    const gene_id = 200000 + i * 10 + j;
    n_out += `${gene_id} = '${e}${ne}的追忆';`;
    d_out += `${gene_id} = '${e}属性及上限+${j * 25 + 25}';`;
    read_and_write_generated(
      join(gene_path, `gene-${gene_id}.js`),
      '//',
      `const UmaGene = require('#/data/race/model/uma-gene');\n\nmodule.exports = new UmaGene(${
        gene_id
      },${j},UmaGene.gene_type_enum.base,${i},${attr_gene_cost[j]},${j * 25 + 25})`,
    );
    output += `gene_dict[${gene_id}] = require('#/data/race/gene/gene-${gene_id}');\n`;
  });
});

skill_list
  .filter((e) => e.startsWith('skill-90') || e.startsWith('skill-910031'))
  .forEach((e) => {
    const skill_id = e.substring(6, 12);
    read_and_write_generated(
      join(gene_path, `gene-${skill_id}.js`),
      '//',
      `const UmaGene = require('#/data/race/model/uma-gene');const UmaSkillGene = require('#/data/race/model/uma-skill-gene');\n\nmodule.exports = new UmaSkillGene(${
        skill_id
      },UmaGene.gene_rarity_enum.sr,UmaGene.gene_type_enum.skill,-1,100,${skill_id});`,
    );
    output += `gene_dict[${skill_id}] = require('#/data/race/gene/gene-${skill_id}');\n`;
  });

output += 'gene_dict[300000] = require("#/data/race/gene/gene-300000")';

read_and_write_generated(
  join(gene_path, 'gene-const.js'),
  '//',
  `${output}\nmodule.exports = {gene_dict};`,
);

read_and_write_generated(
  join(__dirname, '../../ere/i18n/zh-CN/race/genes.js'),
  '//',
  n_out,
);
read_and_write_generated(
  join(__dirname, '../../ere/i18n/zh-CN/race/gene-desc.js'),
  '//',
  d_out,
);
