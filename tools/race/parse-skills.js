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
  10011: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.buff,
    UmaSkill.skill_border_enum.normal,
  ),
  10012: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.buff,
    UmaSkill.skill_border_enum.advanced,
  ),
  10014: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.debuff,
    UmaSkill.skill_border_enum.normal,
  ),
  10016: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.buff,
    UmaSkill.skill_border_enum.spe,
  ),
  10021: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.buff,
    UmaSkill.skill_border_enum.normal,
  ),
  10022: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.buff,
    UmaSkill.skill_border_enum.advanced,
  ),
  10024: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.debuff,
    UmaSkill.skill_border_enum.normal,
  ),
  10031: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.buff,
    UmaSkill.skill_border_enum.normal,
  ),
  10032: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.buff,
    UmaSkill.skill_border_enum.advanced,
  ),
  10034: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.debuff,
    UmaSkill.skill_border_enum.normal,
  ),
  10041: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.buff,
    UmaSkill.skill_border_enum.normal,
  ),
  10051: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.buff,
    UmaSkill.skill_border_enum.normal,
  ),
  10054: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.debuff,
    UmaSkill.skill_border_enum.normal,
  ),
  10061: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.buff,
    UmaSkill.skill_border_enum.normal,
  ),
  10062: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.buff,
    UmaSkill.skill_border_enum.advanced,
  ),
  20011: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.speed,
    UmaSkill.skill_border_enum.normal,
  ),
  20012: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.speed,
    UmaSkill.skill_border_enum.advanced,
  ),
  20013: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.speed,
    UmaSkill.skill_border_enum.spe,
  ),
  20014: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.debuff,
    UmaSkill.skill_border_enum.normal,
  ),
  20016: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.speed,
    UmaSkill.skill_border_enum.evol,
  ),
  20021: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.heal,
    UmaSkill.skill_border_enum.normal,
  ),
  20022: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.heal,
    UmaSkill.skill_border_enum.advanced,
  ),
  20023: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.heal,
    UmaSkill.skill_border_enum.spe,
  ),
  20024: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.debuff,
    UmaSkill.skill_border_enum.normal,
  ),
  20026: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.heal,
    UmaSkill.skill_border_enum.evol,
  ),
  20041: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.speed,
    UmaSkill.skill_border_enum.normal,
  ),
  20042: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.speed,
    UmaSkill.skill_border_enum.advanced,
  ),
  20043: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.speed,
    UmaSkill.skill_border_enum.spe,
  ),
  20046: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.speed,
    UmaSkill.skill_border_enum.evol,
  ),
  20051: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.speed,
    UmaSkill.skill_border_enum.normal,
  ),
  20052: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.speed,
    UmaSkill.skill_border_enum.advanced,
  ),
  20061: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.speed,
    UmaSkill.skill_border_enum.normal,
  ),
  20062: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.speed,
    UmaSkill.skill_border_enum.advanced,
  ),
  20064: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.debuff,
    UmaSkill.skill_border_enum.normal,
  ),
  20091: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.speed,
    UmaSkill.skill_border_enum.normal,
  ),
  20092: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.speed,
    UmaSkill.skill_border_enum.advanced,
  ),
  20101: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.speed,
    UmaSkill.skill_border_enum.normal,
  ),
  20102: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.speed,
    UmaSkill.skill_border_enum.advanced,
  ),
  20111: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.heal,
    UmaSkill.skill_border_enum.normal,
  ),
  20112: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.heal,
    UmaSkill.skill_border_enum.advanced,
  ),
  20121: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.speed,
    UmaSkill.skill_border_enum.normal,
  ),
  20122: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.speed,
    UmaSkill.skill_border_enum.advanced,
  ),
  20131: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.speed,
    UmaSkill.skill_border_enum.normal,
  ),
  20132: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.speed,
    UmaSkill.skill_border_enum.advanced,
  ),
  20141: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.speed,
    UmaSkill.skill_border_enum.normal,
  ),
  20142: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.speed,
    UmaSkill.skill_border_enum.advanced,
  ),
  20151: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.speed,
    UmaSkill.skill_border_enum.normal,
  ),
  20152: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.speed,
    UmaSkill.skill_border_enum.advanced,
  ),
  20191: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.speed,
    UmaSkill.skill_border_enum.normal,
  ),
  20192: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.speed,
    UmaSkill.skill_border_enum.advanced,
  ),
  20201: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.speed,
    UmaSkill.skill_border_enum.normal,
  ),
  20202: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.speed,
    UmaSkill.skill_border_enum.advanced,
  ),
  20211: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.speed,
    UmaSkill.skill_border_enum.normal,
  ),
  20212: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.speed,
    UmaSkill.skill_border_enum.advanced,
  ),
  20221: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.speed,
    UmaSkill.skill_border_enum.normal,
  ),
  20222: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.speed,
    UmaSkill.skill_border_enum.advanced,
  ),
  20241: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.speed,
    UmaSkill.skill_border_enum.normal,
  ),
  20242: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.speed,
    UmaSkill.skill_border_enum.advanced,
  ),
  20226: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.speed,
    UmaSkill.skill_border_enum.evol,
  ),
  30011: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.control,
    UmaSkill.skill_border_enum.normal,
  ),
  30012: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.control,
    UmaSkill.skill_border_enum.advanced,
  ),
  30021: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.control,
    UmaSkill.skill_border_enum.normal,
  ),
  30041: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.control,
    UmaSkill.skill_border_enum.normal,
  ),
  30051: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.control,
    UmaSkill.skill_border_enum.normal,
  ),
  30052: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.control,
    UmaSkill.skill_border_enum.advanced,
  ),
  30071: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.control,
    UmaSkill.skill_border_enum.normal,
  ),
  30072: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.control,
    UmaSkill.skill_border_enum.advanced,
  ),
  40012: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.buff,
    UmaSkill.skill_border_enum.advanced,
  ),
  2010010: UmaSkill.get_skill_color(
    UmaSkill.skill_name_enum.speed,
    UmaSkill.skill_border_enum.advanced,
  ),
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
  dict[1060] = [100601, 200122, 200492, 202152, 200911, 200491, 201422, 202151];
  dict[204] = [102041, 201702, 200722, 201611, 201701, 200721, 201612, 200491];
  dict[205] = [102051, 202092, 202152, 202662, 202091, 202151, 202661, 201411];
  dict[206] = [102061, 203002, 202872, 202022, 203001, 202871, 202021, 200511];
  Object.values(dict).forEach((e) => e.forEach((s) => (skill_dict[s] = 1)));
  console.log('角色卡技能', Object.keys(skill_dict).length);
  let buffer = 'const chara_skill_dict={},skills_dict = {};\n\n',
    buffer_common_skills = [202051, 990011, 990021];
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
          ]
            .filter((e) => e.chara_id < 9000)
            .map((e) => e.skill_set_id),
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
  skill_dict[200301] = 1;
  skill_dict[200302] = 1;
  skill_dict[910031] = 1;
  delete skill_dict[100601];
  delete skill_dict[900601];
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
  buffer +=
    'skills_dict[100039]=require("#/data/race/skill/skill-100039");skills_dict[900039]=require("#/data/race/skill/skill-900039");skills_dict[102041]=require("#/data/race/skill/skill-102041");skills_dict[902041]=require("#/data/race/skill/skill-902041");skills_dict[102051]=require("#/data/race/skill/skill-102051");skills_dict[902051]=require("#/data/race/skill/skill-902051");skills_dict[102061]=require("#/data/race/skill/skill-102061");skills_dict[902061]=require("#/data/race/skill/skill-902061");skills_dict[100601]=require("#/data/race/skill/skill-100601");skills_dict[900601]=require("#/data/race/skill/skill-900601");skills_dict[990011]=require("#/data/race/skill/skill-990011");skills_dict[990021]=require("#/data/race/skill/skill-990021");';

  const pt_dict = {};
  (await prisma.single_mode_skill_need_point.findMany()).forEach(
    (e) => (pt_dict[e.id] = e.need_skill_point),
  );

  function get_skill_group_level(skill) {
    if (skill.category >> 3 === 4) {
      return skill.rarity * 10 - 1;
    }
    return skill.rarity * 10 + (skill.id % 10);
  }

  Object.values(
    skill_data.reduce((p, c) => {
      (p[c.group_id] || (p[c.group_id] = [])).push(c);
      return p;
    }, {}),
  ).forEach((s_list) => {
    s_list.forEach((e) => {
      e.name = skill_text[e.id][47];
      e.category = icon2skill_color[e.icon_id];
    });
    s_list
      .sort((a, b) => get_skill_group_level(a) - get_skill_group_level(b))
      .forEach((e, i) => {
        if (e.category >> 3 === 4 || e.name.endsWith('×')) {
          e.group_level = -1;
        } else if (e.name.endsWith('◎')) {
          e.group_level = 2;
        } else if (e.name.endsWith('○')) {
          e.group_level = 1;
        } else {
          e.group_level = i + 1;
        }
      });
  });

  skill_data.forEach((e) => {
    const id = e.id;
    buffer += `skills_dict[${id}]=require('#/data/race/skill/skill-${id}');`;
    let sbuffer =
      "const UmaSkill = require('#/data/race/model/uma-skill');\n\nmodule.exports = new UmaSkill(";
    console.log(e.name);
    if (e.category === undefined) {
      console.log('\tmissed! ', e.icon_id);
    }
    sbuffer += `${id},`;
    sbuffer += `"${e.name}",`;
    sbuffer += `"${skill_text[id][48]}",`;
    sbuffer += `${e.group_id},`;
    sbuffer += `${e.group_level},`;
    sbuffer += `${get_rarity(e.rarity)},`;
    sbuffer += `${e.category},`;
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
    sbuffer += `${pt_dict[id] || 0},`;
    sbuffer += `${e.condition_2 !== '' && e.condition_2.indexOf('is_activate_other_skill_detail') !== -1},`;
    sbuffer += `${id.toString().startsWith('9')}`;
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
