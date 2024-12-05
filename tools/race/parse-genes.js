const { readFileSync, readdirSync, writeFileSync } = require('node:fs');
const { join, resolve } = require('node:path');

const {
  adaptability_names,
  attr_names,
} = require('../../ere/data/train-const');

const skill_path = resolve('../../ere/data/race/skill');
const gene_path = resolve('../../ere/data/race/gene');

const skill_list = readdirSync(skill_path);

let output = 'const gene_dict = {};\n\n';

adaptability_names.forEach((e, i) => {
  const gene_id = 100000 + i;
  writeFileSync(
    join(gene_path, `gene-${gene_id}.js`),
    `const UmaGene = require('#/data/race/model/uma-gene');\n\nmodule.exports = new UmaGene(${
      gene_id
    },UmaGene.gene_rarity_enum.r,'秘传 · ${e}诀窍','${e}适性提高',UmaGene.gene_type_enum.adapt,'${e}',100,-1)`,
  );
  output += `gene_dict[${gene_id}] = require('#/data/race/gene/gene-${gene_id}.js');\n`;
});

const attr_gene_names = ['新星', '高手', '名宿', '大师'],
  attr_gene_cost = [25, 49, 72, 95];

attr_names.forEach((e, i) => {
  attr_gene_names.forEach((ne, j) => {
    const gene_id = 200000 + i * 10 + j;
    writeFileSync(
      join(gene_path, `gene-${gene_id}.js`),
      `const UmaGene = require('#/data/race/model/uma-gene');\n\nmodule.exports = new UmaGene(${
        gene_id
      },${j},'${e}${ne}的追忆','${e}属性及上限+${j * 25 + 25}',UmaGene.gene_type_enum.base,'${e}',${attr_gene_cost[j]},${j * 25 + 25})`,
    );
    output += `gene_dict[${gene_id}] = require('#/data/race/gene/gene-${gene_id}.js');\n`;
  });
});

skill_list
  .filter((e) => e.startsWith('skill-90') || e.startsWith('skill-910031'))
  .forEach((e) => {
    const f = readFileSync(join(skill_path, e)).toString(),
      skill_id = e.substring(6, 12),
      info_arr = f.split('\n'),
      skill_name = info_arr[4].substring(3).replace(/['"],\s*$/, ''),
      skill_desc = info_arr[5].substring(3).replace(/['"],\s*$/, '');
    writeFileSync(
      join(gene_path, `gene-${skill_id}.js`),
      `const UmaGene = require('#/data/race/model/uma-gene');\n\nmodule.exports = new UmaGene(${
        skill_id
      },UmaGene.gene_rarity_enum.sr,"「${skill_name}」之回响","习得「${
        skill_name
      }」\\n${skill_desc}",UmaGene.gene_type_enum.skill,-1,100,${skill_id});`,
    );
    output += `gene_dict[${skill_id}] = require('#/data/race/gene/gene-${skill_id}.js');\n`;
  });

writeFileSync(
  join(gene_path, 'gene-300000.js'),
  "const UmaGene = require('#/data/race/model/uma-gene');\n\nmodule.exports = new UmaGene(300000,UmaGene.gene_rarity_enum.n,'殿堂马娘的灵魂','技能点数+600',UmaGene.gene_type_enum.skill,-1,100,600)",
);
output += 'gene_dict[300000] = require("#/data/race/gene/gene-300000.js")';

writeFileSync(
  join(gene_path, 'gene-const.js'),
  `${output}\nmodule.exports = {gene_dict};`,
);
