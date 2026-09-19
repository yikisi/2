const { execSync } = require('child_process');
const { join } = require('path');

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const translate_dict = require('../../common/text_data.json');
const {
  ability_tag_enum,
  ability_time_usage_enum,
  ability_type_enum,
  ability_usage_enum,
  get_skill_color,
  skill_border_enum,
  skill_name_enum,
  target_type_enum,
} = require('../../ere/data/race/model/skill-enum');
const { read_and_write_generated } = require('../libs');
const legend_skill_sets = require('./custom-skill-sets');
const filtered = require('./filtered');

const ability_time_usage_names = {};
const ability_type_names = {};
const ability_type_usage_names = {};
const target_type_names = {};

Object.entries(ability_time_usage_enum).map(
  ([k, v]) => (ability_time_usage_names[v] = k),
);
Object.entries(ability_type_enum).map(([k, v]) => (ability_type_names[v] = k));
Object.entries(ability_usage_enum).map(
  ([k, v]) => (ability_type_usage_names[v] = k),
);
Object.entries(target_type_enum).map(([k, v]) => (target_type_names[v] = k));

const icon2skill_color = {
  10011: get_skill_color(skill_name_enum.buff, skill_border_enum.normal),
  10012: get_skill_color(skill_name_enum.buff, skill_border_enum.advanced),
  10014: get_skill_color(skill_name_enum.debuff, skill_border_enum.normal),
  10016: get_skill_color(skill_name_enum.buff, skill_border_enum.evol),
  10021: get_skill_color(skill_name_enum.buff, skill_border_enum.normal),
  10022: get_skill_color(skill_name_enum.buff, skill_border_enum.advanced),
  10024: get_skill_color(skill_name_enum.debuff, skill_border_enum.normal),
  10026: get_skill_color(skill_name_enum.buff, skill_border_enum.evol),
  10031: get_skill_color(skill_name_enum.buff, skill_border_enum.normal),
  10032: get_skill_color(skill_name_enum.buff, skill_border_enum.advanced),
  10034: get_skill_color(skill_name_enum.debuff, skill_border_enum.normal),
  10036: get_skill_color(skill_name_enum.buff, skill_border_enum.evol),
  10041: get_skill_color(skill_name_enum.buff, skill_border_enum.normal),
  10044: get_skill_color(skill_name_enum.debuff, skill_border_enum.normal),
  10051: get_skill_color(skill_name_enum.buff, skill_border_enum.normal),
  10052: get_skill_color(skill_name_enum.buff, skill_border_enum.advanced),
  10054: get_skill_color(skill_name_enum.debuff, skill_border_enum.normal),
  10061: get_skill_color(skill_name_enum.buff, skill_border_enum.normal),
  10062: get_skill_color(skill_name_enum.buff, skill_border_enum.advanced),
  20011: get_skill_color(skill_name_enum.speed, skill_border_enum.normal),
  20012: get_skill_color(skill_name_enum.speed, skill_border_enum.advanced),
  20013: get_skill_color(skill_name_enum.speed, skill_border_enum.spe),
  20014: get_skill_color(skill_name_enum.debuff, skill_border_enum.normal),
  20016: get_skill_color(skill_name_enum.speed, skill_border_enum.evol),
  20021: get_skill_color(skill_name_enum.heal, skill_border_enum.normal),
  20022: get_skill_color(skill_name_enum.heal, skill_border_enum.advanced),
  20023: get_skill_color(skill_name_enum.heal, skill_border_enum.spe),
  20024: get_skill_color(skill_name_enum.debuff, skill_border_enum.normal),
  20026: get_skill_color(skill_name_enum.heal, skill_border_enum.evol),
  20041: get_skill_color(skill_name_enum.speed, skill_border_enum.normal),
  20042: get_skill_color(skill_name_enum.speed, skill_border_enum.advanced),
  20043: get_skill_color(skill_name_enum.speed, skill_border_enum.spe),
  20046: get_skill_color(skill_name_enum.speed, skill_border_enum.evol),
  20051: get_skill_color(skill_name_enum.speed, skill_border_enum.normal),
  20052: get_skill_color(skill_name_enum.speed, skill_border_enum.advanced),
  20056: get_skill_color(skill_name_enum.speed, skill_border_enum.evol),
  20061: get_skill_color(skill_name_enum.speed, skill_border_enum.normal),
  20062: get_skill_color(skill_name_enum.speed, skill_border_enum.advanced),
  20064: get_skill_color(skill_name_enum.debuff, skill_border_enum.normal),
  20066: get_skill_color(skill_name_enum.speed, skill_border_enum.evol),
  20091: get_skill_color(skill_name_enum.speed, skill_border_enum.normal),
  20092: get_skill_color(skill_name_enum.speed, skill_border_enum.advanced),
  20101: get_skill_color(skill_name_enum.speed, skill_border_enum.normal),
  20102: get_skill_color(skill_name_enum.speed, skill_border_enum.advanced),
  20111: get_skill_color(skill_name_enum.heal, skill_border_enum.normal),
  20112: get_skill_color(skill_name_enum.heal, skill_border_enum.advanced),
  20121: get_skill_color(skill_name_enum.speed, skill_border_enum.normal),
  20122: get_skill_color(skill_name_enum.speed, skill_border_enum.advanced),
  20131: get_skill_color(skill_name_enum.speed, skill_border_enum.normal),
  20132: get_skill_color(skill_name_enum.speed, skill_border_enum.advanced),
  20141: get_skill_color(skill_name_enum.speed, skill_border_enum.normal),
  20142: get_skill_color(skill_name_enum.speed, skill_border_enum.advanced),
  20151: get_skill_color(skill_name_enum.speed, skill_border_enum.normal),
  20152: get_skill_color(skill_name_enum.speed, skill_border_enum.advanced),
  20161: get_skill_color(skill_name_enum.speed, skill_border_enum.normal),
  20162: get_skill_color(skill_name_enum.speed, skill_border_enum.advanced),
  20171: get_skill_color(skill_name_enum.speed, skill_border_enum.normal),
  20181: get_skill_color(skill_name_enum.buff, skill_border_enum.normal),
  20191: get_skill_color(skill_name_enum.speed, skill_border_enum.normal),
  20192: get_skill_color(skill_name_enum.speed, skill_border_enum.advanced),
  20201: get_skill_color(skill_name_enum.speed, skill_border_enum.normal),
  20202: get_skill_color(skill_name_enum.speed, skill_border_enum.advanced),
  20211: get_skill_color(skill_name_enum.speed, skill_border_enum.normal),
  20212: get_skill_color(skill_name_enum.speed, skill_border_enum.advanced),
  20221: get_skill_color(skill_name_enum.speed, skill_border_enum.normal),
  20222: get_skill_color(skill_name_enum.speed, skill_border_enum.advanced),
  20226: get_skill_color(skill_name_enum.speed, skill_border_enum.evol),
  20231: get_skill_color(skill_name_enum.speed, skill_border_enum.normal),
  20241: get_skill_color(skill_name_enum.speed, skill_border_enum.normal),
  20242: get_skill_color(skill_name_enum.speed, skill_border_enum.advanced),
  20246: get_skill_color(skill_name_enum.speed, skill_border_enum.evol),
  20251: get_skill_color(skill_name_enum.speed, skill_border_enum.normal),
  20256: get_skill_color(skill_name_enum.speed, skill_border_enum.evol),
  20261: get_skill_color(skill_name_enum.speed, skill_border_enum.normal),
  20262: get_skill_color(skill_name_enum.speed, skill_border_enum.advanced),
  20266: get_skill_color(skill_name_enum.speed, skill_border_enum.evol),
  20276: get_skill_color(skill_name_enum.speed, skill_border_enum.evol),
  20286: get_skill_color(skill_name_enum.heal, skill_border_enum.evol),
  20291: get_skill_color(skill_name_enum.speed, skill_border_enum.normal),
  20292: get_skill_color(skill_name_enum.speed, skill_border_enum.advanced),
  20296: get_skill_color(skill_name_enum.speed, skill_border_enum.evol),
  20306: get_skill_color(skill_name_enum.speed, skill_border_enum.evol),
  20311: get_skill_color(skill_name_enum.speed, skill_border_enum.normal),
  20312: get_skill_color(skill_name_enum.speed, skill_border_enum.advanced),
  20316: get_skill_color(skill_name_enum.speed, skill_border_enum.evol),
  20321: get_skill_color(skill_name_enum.speed, skill_border_enum.normal),
  20322: get_skill_color(skill_name_enum.speed, skill_border_enum.advanced),
  20326: get_skill_color(skill_name_enum.speed, skill_border_enum.evol),
  20331: get_skill_color(skill_name_enum.speed, skill_border_enum.normal),
  20332: get_skill_color(skill_name_enum.speed, skill_border_enum.advanced),
  20346: get_skill_color(skill_name_enum.speed, skill_border_enum.evol),
  20351: get_skill_color(skill_name_enum.speed, skill_border_enum.normal),
  20361: get_skill_color(skill_name_enum.speed, skill_border_enum.normal),
  20362: get_skill_color(skill_name_enum.speed, skill_border_enum.advanced),
  20366: get_skill_color(skill_name_enum.speed, skill_border_enum.evol),
  30011: get_skill_color(skill_name_enum.control, skill_border_enum.normal),
  30012: get_skill_color(skill_name_enum.control, skill_border_enum.advanced),
  30021: get_skill_color(skill_name_enum.control, skill_border_enum.normal),
  30022: get_skill_color(skill_name_enum.control, skill_border_enum.advanced),
  30041: get_skill_color(skill_name_enum.control, skill_border_enum.normal),
  30051: get_skill_color(skill_name_enum.control, skill_border_enum.normal),
  30052: get_skill_color(skill_name_enum.control, skill_border_enum.advanced),
  30056: get_skill_color(skill_name_enum.control, skill_border_enum.evol),
  30071: get_skill_color(skill_name_enum.control, skill_border_enum.normal),
  30072: get_skill_color(skill_name_enum.control, skill_border_enum.advanced),
  40012: get_skill_color(skill_name_enum.buff, skill_border_enum.advanced),
  2010010: get_skill_color(skill_name_enum.speed, skill_border_enum.advanced),
  2010011: get_skill_color(skill_name_enum.speed, skill_border_enum.normal),
  2010016: get_skill_color(skill_name_enum.speed, skill_border_enum.evol),
};

const skill2skill_type = {
  101121: skill_name_enum.speed,
  101181: skill_name_enum.speed,
  101301: skill_name_enum.speed,
  101341: skill_name_enum.speed,
  101361: skill_name_enum.speed,
  101411: skill_name_enum.speed,
  101431: skill_name_enum.speed,
  101441: skill_name_enum.speed,
  101451: skill_name_enum.speed,
  101491: skill_name_enum.speed,
  120201: skill_name_enum.speed,
  120251: skill_name_enum.heal,
  120411: skill_name_enum.speed,
  203321: skill_name_enum.speed,
  203401: skill_name_enum.speed,
  203561: skill_name_enum.speed,
  203641: skill_name_enum.speed,
  204171: skill_name_enum.speed,
  204271: skill_name_enum.speed,
  204272: skill_name_enum.speed,
  204282: skill_name_enum.speed,
  204292: skill_name_enum.heal,
  204293: skill_name_enum.heal,
  204311: skill_name_enum.speed,
  204312: skill_name_enum.speed,
  204322: skill_name_enum.speed,
  204331: skill_name_enum.speed,
  204332: skill_name_enum.speed,
  204342: skill_name_enum.speed,
  204351: skill_name_enum.speed,
  204352: skill_name_enum.speed,
  204362: skill_name_enum.speed,
  204372: skill_name_enum.speed,
  204381: skill_name_enum.speed,
  204382: skill_name_enum.speed,
  204391: skill_name_enum.heal,
  204392: skill_name_enum.heal,
  204412: skill_name_enum.speed,
  204431: skill_name_enum.speed,
  204432: skill_name_enum.speed,
  204442: skill_name_enum.speed,
  204462: skill_name_enum.speed,
  204472: skill_name_enum.speed,
  204481: skill_name_enum.speed,
  204482: skill_name_enum.speed,
  204492: skill_name_enum.speed,
  204501: skill_name_enum.speed,
  204502: skill_name_enum.speed,
  204511: skill_name_enum.speed,
  204512: skill_name_enum.speed,
  204521: skill_name_enum.speed,
  204522: skill_name_enum.speed,
  204531: skill_name_enum.speed,
  204532: skill_name_enum.speed,
  204541: skill_name_enum.speed,
  204542: skill_name_enum.speed,
  204552: skill_name_enum.speed,
  204562: skill_name_enum.speed,
  204571: skill_name_enum.speed,
  204572: skill_name_enum.speed,
  204622: skill_name_enum.speed,
  204632: skill_name_enum.speed,
  204642: skill_name_enum.speed,
  204661: skill_name_enum.speed,
  204662: skill_name_enum.speed,
  204671: skill_name_enum.speed,
  204672: skill_name_enum.speed,
  204682: skill_name_enum.speed,
  204691: skill_name_enum.speed,
  204692: skill_name_enum.speed,
  204701: skill_name_enum.speed,
  204702: skill_name_enum.speed,
  204711: skill_name_enum.speed,
  204712: skill_name_enum.speed,
  901121: skill_name_enum.speed,
  901181: skill_name_enum.speed,
  901301: skill_name_enum.speed,
  901341: skill_name_enum.speed,
  901361: skill_name_enum.speed,
  901411: skill_name_enum.speed,
  901431: skill_name_enum.speed,
  901441: skill_name_enum.speed,
  901451: skill_name_enum.speed,
  901491: skill_name_enum.speed,
  100101311: skill_name_enum.speed,
  100201311: skill_name_enum.buff,
  102003111: skill_name_enum.speed,
  102003211: skill_name_enum.speed,
  102503111: skill_name_enum.speed,
  102503211: skill_name_enum.speed,
  104103111: skill_name_enum.speed,
  104103211: skill_name_enum.speed,
  114301111: skill_name_enum.speed,
  114301211: skill_name_enum.speed,
};

// 新增通用可学习技能，数据库里没有，所以需要在最后单独生成注册条目
const added_common_skills = [
  600011, 600012, 660011, 660012, 660021, 660022, 660031, 660032, 660041,
  660042, 660051, 660052, 990011, 990021,
];
// 不在任何角色卡技能组（所有角色都用于原皮的技能组）和选手技能组，但是游戏过程中可习得，所以需要强制生成固有技能
const force_gen_skills = [110031, 910031];
// 新增的角色固有技能，数据库里没有，所以需要在最后单独生成注册条目
const added_chara_skills = [
  100039, 100601, 102041, 102051, 102061, 900039, 900601, 902041, 902051,
  902061,
];
// 这些技能的效果都根据游戏修改过，所以在从数据库中获取描述时需要跳过
const skip_translate_skills = [
  101321, 110071, 210071, 210072, 210291, 210301, 210321, 210341, 210351,
  210361, 210371, 210381, 210391,
];

const used_skill_condition_dict = {
  100971:
    '(args)=>args.distance_type===3&&args.is_used_skill_id.includes(203781)&&args.phase>=2&&args.corner!==0',
  101201:
    '(args)=>args.furlong===3&&args.order_rate<=50&&args.is_used_skill_id.includes(203061)&&args.is_used_skill_id.includes(203071)',
  101371:
    '(args)=>args.order_rate<=70&&args.phase_firsthalf===1&&args.is_used_skill_id.includes(202051)',
  202441: '(args)=>args.popularity>=4&&args.random_lot_shared<=60',
  202442: '(args)=>args.popularity>=4&&args.random_lot_shared<=30',
  113701111:
    '(args)=>args.running_style===1&&args.phase_laterhalf_random===0&&args.is_used_skill_id.includes(202051)',
};
const used_skill_condition_dict_2 = {
  101361:
    '(args)=>args.is_activate_other_skill_detail===1&&args.run_at_full_speed_random===1&&args.is_used_skill_id_with_detail_one.includes(204452)',
  202441: '(args)=>args.popularity<=3&&args.random_lot_shared<=30',
  202442: '(args)=>args.popularity<=3&&args.random_lot_shared<=15',
};
const ability_tag_dict = {
  203781:
    'UmaSkill.ability_tag_enum.speed,UmaSkill.ability_tag_enum.stamina,UmaSkill.ability_tag_enum.power,UmaSkill.ability_tag_enum.guts,UmaSkill.ability_tag_enum.wiz',
  102602211:
    'UmaSkill.ability_tag_enum.speed,UmaSkill.ability_tag_enum.stamina,UmaSkill.ability_tag_enum.power,UmaSkill.ability_tag_enum.guts,UmaSkill.ability_tag_enum.wiz,UmaSkill.ability_tag_enum.startDash',
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

/**
 * @param {number[]} tags_list
 * @param {string} condition
 */
function fill_adapt_tags(tags_list, condition) {
  new Array(2)
    .fill(0)
    .map((_, i) => i)
    .forEach((e) => {
      if (condition.indexOf(`ground_type==${e + 1}`) !== -1) {
        tags_list.push(e);
      }
    });
  new Array(4)
    .fill(0)
    .map((_, i) => i)
    .forEach((e) => {
      if (condition.indexOf(`distance_type==${e + 1}`) !== -1) {
        tags_list.push(e + 2);
      }
    });
  new Array(4)
    .fill(0)
    .map((_, i) => i)
    .forEach((e) => {
      if (condition.indexOf(`running_style==${e + 1}`) !== -1) {
        tags_list.push(e + 6);
      }
    });
  return tags_list;
}

const ability_tag_enum_names = [];
ability_tag_enum_names[ability_type_enum.Speed] = ability_tag_enum.speed;
ability_tag_enum_names[ability_type_enum.Stamina] = ability_tag_enum.stamina;
ability_tag_enum_names[ability_type_enum.Power] = ability_tag_enum.power;
ability_tag_enum_names[ability_type_enum.Guts] = ability_tag_enum.guts;
ability_tag_enum_names[ability_type_enum.Wiz] = ability_tag_enum.wiz;
ability_tag_enum_names[ability_type_enum.StartDash] =
  ability_tag_enum.startDash;
ability_tag_enum_names[ability_type_enum.TemptationPer] =
  ability_tag_enum.tempPer;
ability_tag_enum_names[ability_type_enum.VisibleDistance] =
  ability_tag_enum.visible;
ability_tag_enum_names[ability_type_enum.CurrentSpeed] = ability_tag_enum_names[
  ability_type_enum.CurrentSpeedWithNaturalDeceleration
] = ability_tag_enum.currentSpeed;
ability_tag_enum_names[ability_type_enum.TargetSpeed] =
  ability_tag_enum.targetSpeed;
ability_tag_enum_names[ability_type_enum.Accel] = ability_tag_enum.accel;
ability_tag_enum_names[ability_type_enum.HpRate] = ability_tag_enum.hpRate;
ability_tag_enum_names[ability_type_enum.TemptationEndTime] =
  ability_tag_enum.temp;
ability_tag_enum_names[ability_type_enum.LaneMoveSpeed] =
  ability_tag_enum.laneMove;
ability_tag_enum_names[ability_type_enum.AccelFullSpeed] =
  ability_tag_enum.accelFull;

function get_ability_time_usage(v) {
  if (!ability_time_usage_names[v]) {
    throw new Error(`undefined ability_time_usage: ${v}`);
  }
  return `UmaSkill.ability_time_usage_enum.${ability_time_usage_names[v]}`;
}

function get_ability_type(v) {
  if (!ability_type_names[v]) {
    throw new Error(`undefined ability_type: ${v}`);
  }
  return `UmaSkill.ability_type_enum.${ability_type_names[v]}`;
}

function get_ability_usage(v) {
  if (!ability_type_usage_names[v]) {
    throw new Error(`undefined ability_usage: ${v}`);
  }
  return `UmaSkill.ability_usage_enum.${ability_type_usage_names[v]}`;
}

function get_target_type(v) {
  if (!target_type_names[v]) {
    throw new Error(`undefined target_type: ${v}`);
  }
  return `UmaSkill.target_type_enum.${target_type_names[v]}`;
}

function get_skill_group_level(skill) {
  if (skill.category >> 3 === 4) {
    return skill.rarity * 10 - 1;
  }
  return skill.rarity * 10 + (skill.id % 10);
}

async function chara_skill() {
  const c_s_dict = {};
  const chara_list = (await prisma.card_data.findMany())
    .map((e) => e.chara_id)
    .filter((v, i, a) => i === a.indexOf(v));
  const skill_dict = {};
  (
    await prisma.available_skill_set.findMany({
      where: {
        available_skill_set_id: { in: chara_list.map((cid) => cid * 100 + 1) },
      },
    })
  ).forEach((set) => {
    const cid = (set.available_skill_set_id - 1) / 100;
    (c_s_dict[cid] ||= [100000 + (cid - 1000) * 10 + 1]).push(set.skill_id);
  });
  for (const cid of chara_list) {
    skill_dict[900000 + (cid - 1000) * 10 + 1] = 1;
  }
  c_s_dict[44 + 1000] = [
    100441, 200781, 201482, 202082, 201512, 200642, 200732, 200641,
  ];
  c_s_dict[60 + 1000] = [
    100601, 200122, 200492, 202152, 200911, 200491, 201422, 202151,
  ];
  c_s_dict[204] = [
    102041, 201702, 200722, 201611, 201701, 200721, 201612, 200491,
  ];
  c_s_dict[205] = [
    102051, 202092, 202152, 202662, 202091, 202151, 202661, 201411,
  ];
  c_s_dict[206] = [
    102061, 203002, 202872, 202022, 203001, 202871, 202021, 200511,
  ];
  Object.values(c_s_dict).forEach((l) => l.forEach((s) => (skill_dict[s] = 1)));
  console.log('角色卡技能', Object.keys(skill_dict).length);
  let buffer =
    '/** @type {Record<string,number[]>} */\nconst chara_skill_dict={};\n/** @type {Record<string,UmaSkill>} */\nconst skills_dict = {};\n\n';
  let buffer_common_skills = [...added_common_skills];
  for (const cid in c_s_dict) {
    buffer += `chara_skill_dict[${Number(cid) % 1000}] = [${c_s_dict[cid].join(',')}];`;
  }
  buffer += '\n\nconst skill_sets = {0:[],\n';
  let skill_sets = [
    ...(await prisma.daily_race_npc.findMany()),
    ...(await prisma.legend_race_boss_npc.findMany()),
    ...(await prisma.legend_race_npc.findMany()),
    ...(await prisma.single_mode_npc.findMany()),
    ...(await prisma.heroes_race_default_npc.findMany()),
    ...(await prisma.challenge_match_boss_npc.findMany()),
  ]
    .filter((e) => e.chara_id < 9040 || e.chara_id > 9042)
    .map((e) => e.skill_set_id);
  [
    ...(await prisma.ultimate_race_npc.findMany()),
    ...(await prisma.heroes_race_mob_npc.findMany()),
  ].forEach((e) => skill_sets.push(e.skill_set_id_1, e.skill_set_id_2));
  skill_sets = skill_sets.filter((s) => !filtered.sets[s]);
  (
    await prisma.skill_set.findMany({
      where: {
        id: {
          in: skill_sets,
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
  for (const k in legend_skill_sets) {
    buffer += `${k}:[${legend_skill_sets[k]
      .map((e) => {
        skill_dict[e] = 1;
        return e;
      })
      .join(',')}],\n`;
  }
  buffer += '};\n\n';
  console.log('+技能组技能', Object.keys(skill_dict).length);

  const pt_dict = {};
  (await prisma.single_mode_skill_need_point.findMany()).forEach(
    (e) => (pt_dict[e.id] = e.need_skill_point),
  );

  (
    await prisma.skill_data.findMany({
      where: {
        id: { lt: 300000, gte: 200000 },
        grade_value: { gt: 0 },
      },
      select: { id: true },
    })
  ).forEach((e) => {
    if (pt_dict[e.id] > 0) {
      buffer_common_skills.push(e.id);
      skill_dict[e.id] = 1;
    }
  });
  for (const s of force_gen_skills) {
    skill_dict[s] = 1;
  }
  for (const s of added_chara_skills) {
    delete skill_dict[s];
  }
  console.log('+通用技能', Object.keys(skill_dict).length);
  const skill_data = await find_many_skills({
    id: { in: Object.keys(skill_dict).map(Number) },
  });
  const jp_text = (
    await prisma.text_data.findMany({
      where: {
        index: {
          in: skill_data.map((e) => e.id),
        },
        category: { in: [47, 48] },
      },
    })
  ).reduce((p, c) => {
    (p[c.index] ||= {})[c.category] = c.text;
    return p;
  }, {});
  const skill_text = {};
  let hasError = false;
  Object.keys(jp_text).forEach((sid) => {
    if (translate_dict[47][sid] && translate_dict[48][sid]) {
      skill_text[sid] = {
        47: translate_dict[47][sid],
        48: translate_dict[48][sid],
      };
    } else {
      hasError = true;
      console.error('翻译缺失！', sid, jp_text[sid]);
    }
  });

  if (hasError) {
    // eslint-disable-next-line n/no-process-exit
    process.exit(1);
  }

  const c_dict = { is_used_skill_id: 1 };

  buffer += '\n\nconst current = new Date().getTime();\n\n';

  function rarity2border(rarity) {
    switch (rarity) {
      case 5:
        return skill_border_enum.spe;
      case 2:
        return skill_border_enum.advanced;
      case 1:
        return skill_border_enum.normal;
      case 6:
        return skill_border_enum.evol;
    }
  }

  Object.values(
    skill_data.reduce((p, c) => {
      (p[c.group_id] || (p[c.group_id] = [])).push(c);
      return p;
    }, {}),
  ).forEach((s_list) => {
    s_list.forEach((e) => {
      e.name = skill_text[e.id][47];
      if (e.icon_id in icon2skill_color || e.id in skill2skill_type) {
        e.category =
          icon2skill_color[e.icon_id] ??
          get_skill_color(skill2skill_type[e.id], rarity2border(e.rarity));
      }
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

  let c_n_out = '';
  let c_d_out = '';
  let j_n_out = '';
  let j_d_out = '';
  for (const e of skill_data) {
    try {
      const id = e.id;
      buffer += `skills_dict[${id}]=require('#/data/race/skill/skill-${id}');`;
      let sbuffer =
        "const UmaSkill = require('#/data/race/model/uma-skill');\n\nmodule.exports = new UmaSkill(";
      if (e.category === undefined) {
        console.log(
          '\ticon missed!',
          e.icon_id,
          'from skill',
          e.id,
          jp_text[id][47],
        );
      }
      if (skip_translate_skills.indexOf(id) === -1) {
        c_n_out += `${id} = "${e.name}";`;
        c_d_out += `${id} = "${skill_text[id][48]}";`;
        j_n_out += `${id} = "${jp_text[id][47]}";`;
        j_d_out += `${id} = "${jp_text[id][48].replace(/(\\n)?＜[^＞]+＞$/, '')}";`;
      }
      // console.log(e.id);
      sbuffer += `${id},`;
      sbuffer += `${e.group_id},`;
      sbuffer += `${e.group_level},`;
      sbuffer += `${e.category},`;
      sbuffer += `${e.grade_value},`;
      sbuffer += `[${parse_condition(e.precondition_1, true)},${parse_condition(e.precondition_2, true)}],`;
      sbuffer += `[${used_skill_condition_dict[id] || parse_condition(e.condition_1)},${used_skill_condition_dict_2[id] || parse_condition(e.condition_2)}],`;
      sbuffer += `[${e.float_ability_time_1 / 10000},${e.float_ability_time_2 / 10000}],`;
      sbuffer += `[${e.float_cooldown_time_1 / 10000},${e.float_cooldown_time_2 / 10000}],`;
      sbuffer += `[${get_ability_time_usage(e.ability_time_usage_1)},${get_ability_time_usage(e.ability_time_usage_2)}],`;
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
      sbuffer += `${id.toString().startsWith('9')},`;
      sbuffer += `[${fill_adapt_tags(
        fill_adapt_tags([], e.condition_1),
        e.condition_2,
      )
        .filter((e, i, l) => i === l.indexOf(e))
        .join(',')}],`;
      sbuffer += `[${
        ability_tag_dict[id] ||
        [
          e.ability_type_1_1,
          e.ability_type_1_2,
          e.ability_type_1_3,
          e.ability_type_2_1,
          e.ability_type_2_2,
          e.ability_type_2_3,
        ]
          .map((e) => [e, ability_tag_enum_names[e]])
          .filter((e) => e[1] !== undefined)
          .filter((e, i, l) => i === l.findIndex((entry) => entry[1] === e[1]))
          .sort((a, b) => a[0] - b[0])
          .map(
            (e) =>
              `UmaSkill.ability_tag_enum.${Object.keys(ability_tag_enum)[e[1]]}`,
          )
          .join(',')
      }]`;
      read_and_write_generated(
        join(__dirname, `../../ere/data/race/skill/skill-${id}.js`),
        '//',
        `${sbuffer});`,
      );
      fill_dict(e.precondition_1, c_dict, e);
      fill_dict(e.precondition_2, c_dict, e);
      fill_dict(e.condition_1, c_dict, e);
      fill_dict(e.condition_2, c_dict, e);
    } catch (err) {
      console.error(e.id, e.name, err.message);
      hasError = true;
    }
  }

  if (hasError) {
    // eslint-disable-next-line n/no-process-exit
    process.exit(1);
  }

  [...added_chara_skills, ...added_common_skills].forEach(
    (s) =>
      (buffer += `skills_dict[${s}]=require("#/data/race/skill/skill-${s}");`),
  );

  read_and_write_generated(
    join(__dirname, '../../ere/data/race/skill/skill-const.js'),
    '//',
    `${buffer}\n\nconsole.log('技能列表注册完毕!',(new Date().getTime()-current).toLocaleString(),'ms')\n\nconst common_skills = [${buffer_common_skills
      .sort()
      .filter((e, i, l) => i === l.indexOf(e))
      .join(
        ',',
      )}];\n\nmodule.exports = {chara_skill_dict,common_skills,skills_dict,skill_sets};`,
  );
  buffer = '';
  c_dict['orgasm'] = c_dict['milk'] = c_dict['item'] = 1;
  delete c_dict['random_lot'];
  Object.keys(c_dict)
    .sort()
    .forEach((k) => (buffer += `${k};`));
  read_and_write_generated(
    join(__dirname, '../../ere/data/race/model/condition-params.js'),
    '//',
    `${buffer};`,
  );
  console.log('条件参数', Object.keys(c_dict).length, '个');

  try {
    process.stdout.write(
      execSync(
        'git add ./ere/data/race/model/condition-params.js ./ere/data/race/skill',
        { cwd: join(process.cwd(), '../..') },
      ),
    );

    read_and_write_generated(
      join(__dirname, '../../ere/i18n/zh-CN/race/skills.js'),
      '//',
      c_n_out,
    );
    read_and_write_generated(
      join(__dirname, '../../ere/i18n/zh-CN/race/skill-desc.js'),
      '//',
      c_d_out,
    );
    read_and_write_generated(
      join(__dirname, '../../ere/i18n/ja-JP/race/skills.js'),
      '//',
      j_n_out,
    );
    read_and_write_generated(
      join(__dirname, '../../ere/i18n/ja-JP/race/skill-desc.js'),
      '//',
      j_d_out,
    );

    process.stdout.write(execSync('node parse-genes.js'));
    process.stdout.write(execSync('node parse-contestants.js'));
    process.stdout.write(
      execSync('git add ./ere/data/race/gene', {
        cwd: join(process.cwd(), '../..'),
      }),
    );
    process.stdout.write(
      execSync('pnpm run lint', {
        cwd: join(process.cwd(), '../..'),
      }),
    );
  } catch (e) {
    if (e.stdout) {
      process.stderr.write(e.stdout);
    } else {
      console.error(e.stack);
    }
  }
}

chara_skill().then();
