const { PrismaClient } = require('@prisma/client');
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

async function skill_set() {
  const skill_set = await prisma.skill_set.findMany();
  const dict = {};
  console.log(skill_set[0]);
  skill_set.forEach((e) => {
    for (const k in e) {
      if (k.startsWith('skill_id')) {
        dict[e[k]] = 1;
      }
    }
  });
  console.log(
    Object.keys(dict)
      .map(Number)
      .filter((e) => e).length,
  );
}

async function skill_set_find() {
  const skill_set = await prisma.skill_set.findMany();
  const c = [];
  skill_set.forEach((e) => {
    const a = [];
    for (const k in e) {
      if (k.startsWith('skill_id') && e[k]) {
        a.push(e[k]);
      }
    }
    if (a.indexOf(100011) !== -1) {
      c.push(a);
    }
  });
  for (const arr of c) {
    console.log(
      (
        await prisma.text_data.findMany({
          where: {
            index: {
              in: arr,
            },
            category: 47,
          },
        })
      ).map((e) => e.text),
    );
  }
}

async function skill_data() {
  const ret = await find_many_skills({ id: 100011 });
  console.log(ret[0]);
  console.log(ret.length);
  const text_data = await prisma.text_data.findMany({
    where: { category: { in: [47, 48] }, index: ret[0].id },
  });
  console.log(text_data.map((e) => e.text));
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

async function condition_set() {
  const ret = await find_many_skills();
  const pre_dict = {},
    c_dict = {};

  // fill_dict(ret[0].precondition_1, pre_dict);
  // fill_dict(ret[0].precondition_2, pre_dict);
  // fill_dict(ret[0].condition_1, c_dict);
  // fill_dict(ret[0].condition_2, c_dict);
  ret.forEach((e) => {
    fill_dict(e.precondition_1, pre_dict, e);
    fill_dict(e.precondition_2, pre_dict, e);
    fill_dict(e.condition_1, c_dict, e);
    fill_dict(e.condition_2, c_dict, e);
  });
  console.log(Object.keys(pre_dict).length, Object.keys(c_dict).length);
}

async function chara_skill() {
  const dict = {};
  const l = (await prisma.card_data.findMany())
    .filter((e) => e.id % 10 === 1 && e.id < 200000)
    .map((e) => Math.floor(e.id / 100));
  for (const chara_id of l) {
    dict[chara_id] = [
      ...(
        await prisma.available_skill_set.findMany({
          where: { available_skill_set_id: chara_id * 100 + 1 },
        })
      ).map((e) => e.skill_id),
      (
        await prisma.skill_set.findMany({
          where: { id: chara_id * 10000 + 105 },
        })
      )[0].skill_id1,
    ];
  }
  const skill_dict = {};
  Object.values(dict).forEach((e) => e.forEach((s) => (skill_dict[s] = 1)));
  await prisma.skill_set.findMany;
  // for (const chara_id in dict) {
  //   console.log(
  //     chara_id,
  //     ...(
  //       await prisma.text_data.findMany({
  //         where: { index: { in: dict[chara_id] }, category: 47 },
  //       })
  //     ).map((e) => e.text),
  //   );
  // }
}

async function check_npc() {
  let skills = (
    await prisma.single_mode_npc.findMany({
      where: { chara_id: 2005 },
    })
  ).map((e) => e.skill_set_id);
  skills = await prisma.skill_set.findMany({ where: { id: { in: skills } } });
  for (const ss of skills) {
    const condition = [];
    for (const k in ss) {
      if (k.startsWith('skill_id') && ss[k]) {
        condition.push(ss[k]);
      }
    }
    console.log(
      (
        await prisma.text_data.findMany({
          where: { index: { in: condition }, category: 47 },
        })
      ).map((e) => e.text),
    );
  }
}

check_npc().then();
