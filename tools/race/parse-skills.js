const { PrismaClient } = require('@prisma/client');
const { execSync } = require('child_process');
const { writeFileSync } = require('node:fs');
const { join } = require('path');
const prisma = new PrismaClient();

function find_many_skills(where) {
  return prisma.skill_data.findMany({
    where,
    select: {
      ability_time_usage_1: true,
      ability_time_usage_2: true,
      ability_type_1_1: true,
      ability_type_1_2: true,
      ability_type_1_3: true,
      ability_type_2_1: true,
      ability_type_2_2: true,
      ability_type_2_3: true,
      ability_value_level_usage_1_1: true,
      ability_value_level_usage_1_2: true,
      ability_value_level_usage_1_3: true,
      ability_value_level_usage_2_1: true,
      ability_value_level_usage_2_2: true,
      ability_value_level_usage_2_3: true,
      ability_value_usage_1_1: true,
      ability_value_usage_1_2: true,
      ability_value_usage_1_3: true,
      ability_value_usage_2_1: true,
      ability_value_usage_2_2: true,
      ability_value_usage_2_3: true,
      activate_lot: true,
      additional_activate_type_1_1: true,
      additional_activate_type_1_2: true,
      additional_activate_type_1_3: true,
      additional_activate_type_2_1: true,
      additional_activate_type_2_2: true,
      additional_activate_type_2_3: true,
      condition_1: true,
      condition_2: true,
      disable_count_condition: true,
      disable_singlemode: true,
      disp_order: true,
      exp_type: true,
      filter_switch: true,
      float_ability_time_1: true,
      float_ability_time_2: true,
      float_ability_value_1_1: true,
      float_ability_value_1_2: true,
      float_ability_value_1_3: true,
      float_ability_value_2_1: true,
      float_ability_value_2_2: true,
      float_ability_value_2_3: true,
      float_cooldown_time_1: true,
      float_cooldown_time_2: true,
      grade_value: true,
      group_id: true,
      group_rate: true,
      icon_id: true,
      id: true,
      is_general_skill: true,
      plate_type: true,
      popularity_add_param_1: true,
      popularity_add_param_2: true,
      popularity_add_value_1: true,
      popularity_add_value_2: true,
      potential_per_default: true,
      precondition_1: true,
      precondition_2: true,
      priority: true,
      rarity: true,
      skill_category: true,
      tag_id: true,
      target_type_1_1: true,
      target_type_1_2: true,
      target_type_1_3: true,
      target_type_2_1: true,
      target_type_2_2: true,
      target_type_2_3: true,
      target_value_1_1: true,
      target_value_1_2: true,
      target_value_1_3: true,
      target_value_2_1: true,
      target_value_2_2: true,
      target_value_2_3: true,
      unique_skill_id_1: true,
      unique_skill_id_2: true,
    },
  });
}

function fill_dict(condition, dict, s) {
  if (condition) {
    condition.split(/[@&]/).forEach((e) => {
      if (e) {
        dict[e.replace(/((>=)|(<=)|>|<|(==)|(!=)).*$/, '')] = 1;
        if (e === '0') {
          console.log(s);
        }
      }
    });
  }
}

function parse_condition(condition) {
  if (condition && condition !== '0') {
    return `(args)=>(args.${condition.replace(/&/g, '&&args.').replace(/@/g, ')||(args.').replace(/==/g, '===').replace(/!=/g, '!==')})`;
  } else {
    return '()=>true';
  }
}

async function chara_skill() {
  const dict = {};
  const l = (await prisma.card_data.findMany())
    .filter((e) => e.id % 10 === 1 && e.id < 200000)
    .map((e) => Math.floor(e.id / 100));
  for (const chara_id of l) {
    dict[chara_id] = [
      (
        await prisma.skill_set.findMany({
          where: { id: chara_id * 10000 + 105 },
        })
      )[0].skill_id1,
      ...(
        await prisma.available_skill_set.findMany({
          where: { available_skill_set_id: chara_id * 100 + 1 },
        })
      ).map((e) => e.skill_id),
    ];
  }
  const skill_dict = {};
  Object.values(dict).forEach((e) => e.forEach((s) => (skill_dict[s] = 1)));
  console.log('角色卡技能', Object.keys(skill_dict).length);
  let buffer = 'const chara_skill_dict={},skills_dict = {};\n\n';
  for (const chara_id in dict) {
    buffer += `chara_skill_dict[${Number(chara_id) % 1000}] = [${dict[chara_id].sort().join(',')}];`;
  }
  (await prisma.skill_set.findMany()).forEach((e) => {
    for (const k in e) {
      if (k.startsWith('skill_id') && e[k]) {
        skill_dict[e[k]] = 1;
      }
    }
  });
  console.log('+技能组技能', Object.keys(skill_dict).length);
  (
    await prisma.text_data.findMany({
      where: { text: { in: require('./common-skills') }, category: 47 },
    })
  ).forEach((e) => (skill_dict[e.index] = 1));
  console.log('+通用技能', Object.keys(skill_dict).length);
  const skill_data = await find_many_skills({
    id: { in: Object.keys(skill_dict).map(Number) },
  });
  const translate_dict = {};
  require('./SkillParams.json').forEach((e) => (translate_dict[e[1]] = e[4]));
  const skill_text = {};
  (
    await prisma.text_data.findMany({
      where: {
        index: {
          in: skill_data.map((e) => e.id),
        },
        category: { in: [47, 48] },
      },
    })
  ).map((e) => {
    (skill_text[e.index] || (skill_text[e.index] = {}))[e.category] = e.text;
    if (e.category === 47 && !translate_dict[e.text]) {
      console.log('翻译缺失！', e.index, e.text);
    }
  });
  const pre_dict = {},
    c_dict = {};

  buffer += '\n\n';

  skill_data.forEach((e) => {
    const id = e.id;
    buffer += `skills_dict[${id}]=require('#/data/race/skill/skill-${id}');`;
    let sbuffer =
      "const UmaSkill = require('#/data/race/model/uma-skill');\n\nmodule.exports = new UmaSkill(";
    sbuffer += `${id},`;
    sbuffer += `"${skill_text[id][47]}",`;
    sbuffer += `"${skill_text[id][48]}",`;
    sbuffer += `${e.group_id},`;
    sbuffer += `${e.rarity},`;
    sbuffer += `${e.skill_category},`;
    sbuffer += `${e.grade_value},`;
    sbuffer += `[${parse_condition(e.precondition_1)},${parse_condition(e.precondition_2)}],`;
    sbuffer += `[${parse_condition(e.condition_1)},${parse_condition(e.condition_2)}],`;
    sbuffer += `[${e.float_ability_time_1 / 10000},${e.float_ability_time_2 / 10000}],`;
    sbuffer += `[${e.float_cooldown_time_1 / 10000},${e.float_cooldown_time_2 / 10000}],`;
    sbuffer += `[[${e.ability_type_1_1},${e.ability_type_1_2},${e.ability_type_1_3}],[${e.ability_type_2_1},${e.ability_type_2_2},${e.ability_type_2_3}]],`;
    sbuffer += `[[${e.ability_value_usage_1_1},${e.ability_value_usage_1_2},${e.ability_value_usage_1_3}],[${e.ability_value_usage_2_1},${e.ability_value_usage_2_2},${e.ability_value_usage_2_3}]],`;
    sbuffer += `[[${e.float_ability_value_1_1},${e.float_ability_value_1_2},${e.float_ability_value_1_3}],[${e.float_ability_value_2_1},${e.float_ability_value_2_2},${e.float_ability_value_2_3}]],`;
    sbuffer += `[[${e.target_type_1_1},${e.target_type_1_2},${e.target_type_1_3}],[${e.target_type_2_1},${e.target_type_2_2},${e.target_type_2_3}]],`;
    sbuffer += `[[${e.target_value_1_1},${e.target_value_1_2},${e.target_value_1_3}],[${e.target_value_2_1},${e.target_value_2_2},${e.target_value_2_3}]],`;
    sbuffer += `[${e.popularity_add_param_1},${e.popularity_add_param_2}],`;
    sbuffer += `[${e.popularity_add_value_1},${e.popularity_add_value_2}],`;
    sbuffer += `${e.activate_lot},`;
    writeFileSync(`../../ere/data/race/skill/skill-${id}.js`, `${sbuffer});`);
    fill_dict(e.precondition_1, pre_dict, e);
    fill_dict(e.precondition_2, pre_dict, e);
    fill_dict(e.condition_1, c_dict, e);
    fill_dict(e.condition_2, c_dict, e);
  });
  writeFileSync(
    '../../ere/data/race/skill/skill-const.js',
    `${buffer}\n\nmodule.exports = {chara_skill_dict,skills_dict};`,
  );
  buffer = 'class PreConditionParams { ';
  Object.keys(pre_dict)
    .sort()
    .forEach((k) => (buffer += `${k};`));
  writeFileSync(
    '../../ere/data/race/model/pre-condition-params.js',
    `${buffer}};\n\nmodule.exports = PreConditionParams;`,
  );
  buffer = 'class ConditionParams { ';
  Object.keys(c_dict)
    .sort()
    .forEach((k) => (buffer += `${k};`));
  writeFileSync(
    '../../ere/data/race/model/condition-params.js',
    `${buffer}};\n\nmodule.exports = ConditionParams;`,
  );
  console.log(
    '前置条件参数',
    Object.keys(pre_dict).length,
    '个；条件参数',
    Object.keys(c_dict).length,
    '个',
  );

  execSync('npx eslint --fix ./ere/data/race/model ./ere/data/race/skill', {
    cwd: join(process.cwd(), '../..'),
  });
}

chara_skill().then();
