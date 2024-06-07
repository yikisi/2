const { PrismaClient } = require('@prisma/client');
const { execSync } = require('child_process');
const { writeFileSync } = require('node:fs');
const { join } = require('path');
const prisma = new PrismaClient();

const UmaSkill = require('../../ere/data/race/model/uma-skill');

const rarity_names = {},
  ability_type_names = {},
  ability_type_usage_names = {},
  target_type_names = {};

Object.entries(UmaSkill.rarity_enum).map(
  ([key, value]) => (rarity_names[value] = key),
);
Object.entries(UmaSkill.ability_type_enum).map(
  ([k, v]) => (ability_type_names[v] = k),
);
Object.entries(UmaSkill.ability_usage_enum).map(
  ([k, v]) => (ability_type_usage_names[v] = k),
);
Object.entries(UmaSkill.target_type_enum).map(
  ([k, v]) => (target_type_names[v] = k),
);

const icon2skill_color = {
  10011: 0b00000,
  10012: 0b01000,
  10014: 0b00100,
  10016: 0b10000,
  10021: 0b00000,
  10022: 0b01000,
  10024: 0b00100,
  10031: 0b00000,
  10032: 0b01000,
  10034: 0b00100,
  10041: 0b00000,
  10051: 0b00000,
  10054: 0b00100,
  10061: 0b00000,
  10062: 0b01000,
  20011: 0b00010,
  20012: 0b01010,
  20013: 0b10010,
  20014: 0b00100,
  20016: 0b11010,
  20021: 0b00001,
  20022: 0b01001,
  20023: 0b10001,
  20024: 0b00100,
  20026: 0b11001,
  20041: 0b00010,
  20042: 0b01010,
  20043: 0b10010,
  20046: 0b11010,
  20051: 0b00010,
  20052: 0b01010,
  20061: 0b00010,
  20062: 0b01010,
  20064: 0b00100,
  20091: 0b00010,
  20092: 0b01010,
  20101: 0b00010,
  20102: 0b01010,
  20111: 0b00001,
  20112: 0b01001,
  20121: 0b00010,
  20122: 0b01010,
  20131: 0b00010,
  20132: 0b01010,
  20141: 0b00010,
  20142: 0b01010,
  20151: 0b00010,
  20152: 0b01010,
  20192: 0b01010,
  20202: 0b01010,
  20226: 0b11010,
  30011: 0b00011,
  30012: 0b01011,
  30021: 0b00011,
  30041: 0b00011,
  30051: 0b00011,
  30052: 0b01011,
  30071: 0b00011,
  30072: 0b01011,
  40012: 0b01000,
  2010010: 0b01010,
};

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

/**
 * @param {string} condition
 * @param {boolean} [is_pre]
 * @returns {string}
 */
function parse_condition(condition, is_pre) {
  if (condition && condition !== '0') {
    return `(args)=>(args.${condition
      .replace(/&/g, '&&args.')
      .replace(/@/g, ')||(args.')
      .replace(/random_lot==/g, 'random_lot<=')
      .replace(/==/g, '===')
      .replace(/!=/g, '!==')})`;
  } else {
    return `()=>${is_pre === true}`;
  }
}

function get_rarity(v) {
  if (!rarity_names[v]) {
    throw new Error(v);
  }
  return `UmaSkill.rarity_enum.${rarity_names[v]}`;
}

function get_ability_type(v) {
  if (!ability_type_names[v]) {
    throw new Error(v);
  }
  return `UmaSkill.ability_type_enum.${ability_type_names[v]}`;
}

function get_ability_usage(v) {
  if (!ability_type_usage_names[v]) {
    throw new Error(v);
  }
  return `UmaSkill.ability_usage_enum.${ability_type_usage_names[v]}`;
}

function get_target_type(v) {
  if (!target_type_names[v]) {
    throw new Error(v);
  }
  return `UmaSkill.target_type_enum.${target_type_names[v]}`;
}

async function chara_skill() {
  const dict = {};
  const l = (await prisma.card_data.findMany())
    .map((e) => e.chara_id)
    .filter((v, i, a) => i === a.indexOf(v));
  const skill_dict = {};
  for (const chara_id of l) {
    dict[chara_id] = [
      100000 + (chara_id - 1000) * 10 + 1,
      ...(
        await prisma.available_skill_set.findMany({
          where: { available_skill_set_id: chara_id * 100 + 1 },
        })
      ).map((e) => e.skill_id),
    ];
    skill_dict[dict[chara_id][0] + 800000] = 1;
  }
  Object.values(dict).forEach((e) => e.forEach((s) => (skill_dict[s] = 1)));
  console.log('角色卡技能', Object.keys(skill_dict).length);
  let buffer = 'const chara_skill_dict={},skills_dict = {};\n\n',
    buffer_common_skills = [202051];
  for (const chara_id in dict) {
    buffer += `chara_skill_dict[${Number(chara_id) % 1000}] = [${dict[chara_id].join(',')}];`;
  }
  buffer += '\n\nconst skill_sets = {0:[],\n';
  (
    await prisma.skill_set.findMany({
      where: {
        id: {
          in: [
            ...(await prisma.daily_race_npc.findMany()),
            ...(await prisma.legend_race_npc.findMany()),
            ...(await prisma.single_mode_npc.findMany()),
          ].map((e) => e.skill_set_id),
        },
      },
    })
  ).forEach((e) => {
    const to_write = [];
    for (const k in e) {
      if (k.startsWith('skill_id') && e[k]) {
        to_write.push(e[k]);
        skill_dict[e[k]] = 1;
      }
    }
    if (to_write.length > 0) {
      buffer += `${e.id}:[${to_write.sort().join(',')}],\n`;
    }
  });
  buffer += '};\n\n';
  console.log('+技能组技能', Object.keys(skill_dict).length);
  (
    await prisma.text_data.findMany({
      where: { text: { in: require('./common-skills') }, category: 47 },
    })
  ).forEach((e) => {
    buffer_common_skills.push(e.index);
    skill_dict[e.index] = 1;
  });
  skill_dict[202051] = 1;
  console.log('+通用技能', Object.keys(skill_dict).length);
  const skill_data = await find_many_skills({
    id: { in: Object.keys(skill_dict).map(Number) },
  });
  const translate_dict = require('./text_data.json');
  const enable_translate = true;
  const skill_text = (
    await prisma.text_data.findMany({
      where: {
        index: {
          in: skill_data.map((e) => e.id),
        },
        category: { in: [47, 48] },
      },
    })
  ).reduce((p, c) => {
    (p[c.index] || (p[c.index] = {}))[c.category] = c.text;
    return p;
  }, {});
  if (enable_translate) {
    Object.entries(skill_text).forEach((e) => {
      if (translate_dict[47][e[0]] && translate_dict[48][e[0]]) {
        e[1][47] = translate_dict[47][e[0]];
        e[1][48] = translate_dict[48][e[0]];
      } else {
        console.log('翻译缺失！', e[0], e[1][47]);
      }
    });
  }
  const c_dict = { is_used_skill_id: 1 };

  buffer += '\n\nconst current = new Date().getTime();\n\n';
  buffer += 'skills_dict[100039]=require("#/data/race/skill/skill-100039");';

  skill_data.forEach((e) => {
    const id = e.id;
    buffer += `skills_dict[${id}]=require('#/data/race/skill/skill-${id}');`;
    let sbuffer =
      "const UmaSkill = require('#/data/race/model/uma-skill');\n\nmodule.exports = new UmaSkill(";
    sbuffer += `${id},`;
    sbuffer += `"${skill_text[id][47]}",`;
    sbuffer += `"${skill_text[id][48]}",`;
    sbuffer += `${e.group_id},`;
    sbuffer += `${get_rarity(e.rarity)},`;
    sbuffer += `${icon2skill_color[e.icon_id]},`;
    sbuffer += `${e.grade_value},`;
    sbuffer += `[${parse_condition(e.precondition_1, true)},${parse_condition(e.precondition_2, true)}],`;
    sbuffer += `[${parse_condition(e.condition_1)},${parse_condition(e.condition_2)}],`;
    sbuffer += `[${e.float_ability_time_1 / 10000},${e.float_ability_time_2 / 10000}],`;
    sbuffer += `[${e.float_cooldown_time_1 / 10000},${e.float_cooldown_time_2 / 10000}],`;
    sbuffer += `[[${get_ability_type(e.ability_type_1_1)},${get_ability_type(e.ability_type_1_2)},${get_ability_type(e.ability_type_1_3)}],[${get_ability_type(e.ability_type_2_1)},${get_ability_type(e.ability_type_2_2)},${get_ability_type(e.ability_type_2_3)}]],`;
    sbuffer += `[[${get_ability_usage(e.ability_value_usage_1_1)},${get_ability_usage(e.ability_value_usage_1_2)},${get_ability_usage(e.ability_value_usage_1_3)}],[${get_ability_usage(e.ability_value_usage_2_1)},${get_ability_usage(e.ability_value_usage_2_2)},${get_ability_usage(e.ability_value_usage_2_3)}]],`;
    sbuffer += `[[${e.float_ability_value_1_1 / 10000},${e.float_ability_value_1_2 / 10000},${e.float_ability_value_1_3 / 10000}],[${e.float_ability_value_2_1 / 10000},${e.float_ability_value_2_2 / 10000},${e.float_ability_value_2_3 / 10000}]],`;
    sbuffer += `[[${get_target_type(e.target_type_1_1)},${get_target_type(e.target_type_1_2)},${get_target_type(e.target_type_1_3)}],[${get_target_type(e.target_type_2_1)},${get_target_type(e.target_type_2_2)},${get_target_type(e.target_type_2_3)}]],`;
    sbuffer += `[[${e.target_value_1_1},${e.target_value_1_2},${e.target_value_1_3}],[${e.target_value_2_1},${e.target_value_2_2},${e.target_value_2_3}]],`;
    sbuffer += `[${e.popularity_add_param_1},${e.popularity_add_param_2}],`;
    sbuffer += `[${e.popularity_add_value_1},${e.popularity_add_value_2}],`;
    sbuffer += `${e.activate_lot},`;
    sbuffer += `${e.condition_2 !== '' && e.condition_2.indexOf('is_activate_other_skill_detail') !== -1}`;
    writeFileSync(`../../ere/data/race/skill/skill-${id}.js`, `${sbuffer});`);
    fill_dict(e.precondition_1, c_dict, e);
    fill_dict(e.precondition_2, c_dict, e);
    fill_dict(e.condition_1, c_dict, e);
    fill_dict(e.condition_2, c_dict, e);
  });
  writeFileSync(
    '../../ere/data/race/skill/skill-const.js',
    `${buffer}\n\nconsole.log('[skill-const.js] skill list init done!',(new Date().getTime()-current).toLocaleString(),'ms')\n\nconst common_skills = [${buffer_common_skills.sort().join(',')}];\n\nmodule.exports = {chara_skill_dict,common_skills,skills_dict,skill_sets};`,
  );
  buffer = 'class ConditionParams { ';
  Object.keys(c_dict)
    .sort()
    .forEach((k) => (buffer += `${k};`));
  writeFileSync(
    '../../ere/data/race/model/condition-params.js',
    `${buffer}};\n\nmodule.exports = ConditionParams;`,
  );
  console.log('条件参数', Object.keys(c_dict).length, '个');

  execSync('npx eslint --fix ./ere/data/race/model ./ere/data/race/skill', {
    cwd: join(process.cwd(), '../..'),
  });
}

chara_skill().then();
