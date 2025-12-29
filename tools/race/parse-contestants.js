const { writeFileSync } = require('fs');
const { join } = require('path');

const { PrismaClient } = require('@prisma/client');

const id2suffix = require('../../common/clothe-id2suffix');
const legend_skill_sets = require('./custom-skill-sets');
const filtered = require('./filtered');

const prisma = new PrismaClient();

const koeffi = [
  0.5, 0.8, 1, 1.3, 1.6, 1.8, 2.1, 2.4, 2.6, 2.8, 2.9, 3, 3.1, 3.3, 3.4, 3.5,
  3.9, 4.1, 4.2, 4.3, 5.2, 5.5, 6.6, 6.8, 6.9,
];
const ovk = [
  7.888, 8, 8.1, 8.3, 8.4, 8.5, 8.6, 8.8, 8.9, 9, 9.2, 9.3, 9.4, 9.6, 9.7, 9.8,
  10, 10.1, 10.2, 10.3, 10.5, 10.6, 10.7, 10.9, 11, 11.1, 11.3, 11.4, 11.5,
  11.7, 11.8, 11.9, 12.1, 12.2, 12.3, 12.4, 12.6, 12.7, 12.8, 13, 13.1, 13.2,
  13.4, 13.5, 13.6, 13.8, 13.9, 14, 14.1, 14.3, 14.4, 14.5, 14.7, 14.8, 14.9,
  15.1, 15.2, 15.3, 15.5, 15.6, 15.7, 15.9, 16, 16.1, 16.2, 16.4, 16.5, 16.6,
  16.8, 16.9, 17, 17.2, 17.3, 17.4, 17.6, 17.7, 17.8, 17.9, 18.1, 18.2, 18.3,
];

function calc_attr_score(attr) {
  if (attr > 2000) {
    attr = 2000;
  }
  let oval = attr - 1200;
  if (attr > 1200) {
    attr = 1200;
  }
  let result = 0;

  if (oval >= 10) {
    result = 3912;
    oval += 1;
    let j = 1;
    while (j < Math.floor(oval / 10)) {
      result += Math.ceil(10 * ovk[j++]);
    }
    result += Math.ceil((oval % 10) * ovk[j]);
  } else {
    attr += 1;
    let i = 0;
    while (i < Math.floor(attr / 50)) {
      result += 50 * koeffi[i++];
    }
    result += (attr % 50) * koeffi[i];
    if (oval > 0) {
      let j = 0;
      while (j < Math.floor(oval / 10)) {
        result += 10 * ovk[j++];
      }
      result += (oval % 10) * ovk[j];
    }
  }

  return Math.floor(result);
}

async function task() {
  const contestants = { named: [], unnamed: [] };
  const skill_dict = {};
  const skill_set_dict = {};
  [
    ...(await prisma.daily_race_npc.findMany()),
    ...(await prisma.legend_race_boss_npc.findMany()),
    ...(await prisma.legend_race_npc.findMany()),
    ...(await prisma.single_mode_npc.findMany()),
    ...(await prisma.heroes_race_default_npc.findMany()),
    ...(await prisma.challenge_match_boss_npc.findMany()),
  ].forEach((e) => {
    const tmp = {
      adapt_distance: [
        e.proper_distance_short,
        e.proper_distance_mile,
        e.proper_distance_middle,
        e.proper_distance_long,
      ].map((e) => e - 1),
      adapt_ground: [e.proper_ground_turf, e.proper_ground_dirt].map(
        (e) => e - 1,
      ),
      adapt_style: [
        e.proper_running_style_nige,
        e.proper_running_style_senko,
        e.proper_running_style_sashi,
        e.proper_running_style_oikomi,
      ].map((e) => e - 1),
      attrs: [e.speed, e.stamina, e.pow, e.guts, e.wiz],
      motivation: [e.motivation_min || 1, e.motivation_max || 5].map(
        (e) => e - 3,
      ),
      skills: e.skill_set_id,
    };
    skill_set_dict[tmp.skills] = [];
    if (e.mob_id > 0) {
      contestants.unnamed.push(tmp);
    } else {
      tmp.id = e.chara_id % 1000;
      if (e.chara_id > 9000) {
        if (e.chara_id >= 9040 && e.chara_id <= 9042) {
          return;
        }
        tmp.id += 300;
      } else if (e.chara_id > 2000) {
        tmp.id += 200;
      }
      const dress = id2suffix[e.race_dress_id % 100];
      if (dress) {
        tmp.dress = dress;
      }
      contestants.named.push(tmp);
    }
  });
  [
    ...(await prisma.ultimate_race_npc.findMany()),
    ...(await prisma.heroes_race_mob_npc.findMany()),
  ].forEach((e) => {
    if (filtered.sets[e.skill_set_id_1] || filtered.sets[e.skill_set_id_2]) {
      return;
    }
    const tmp = {
      adapt_distance: [
        e.proper_distance_short,
        e.proper_distance_mile,
        e.proper_distance_middle,
        e.proper_distance_long,
      ].map((e) => e - 1),
      adapt_ground: [e.proper_ground_turf, e.proper_ground_dirt].map(
        (e) => e - 1,
      ),
      adapt_style: [
        e.proper_running_style_nige,
        e.proper_running_style_senko,
        e.proper_running_style_sashi,
        e.proper_running_style_oikomi,
      ].map((e) => e - 1),
      attrs: [e.speed, e.stamina, e.pow, e.guts, e.wiz],
      motivation: [e.motivation_min || 1, e.motivation_max || 5].map(
        (e) => e - 3,
      ),
    };
    skill_set_dict[e.skill_set_id_1] = [];
    skill_set_dict[e.skill_set_id_2] = [];
    if (e.mob_id) {
      contestants.unnamed.push({ ...tmp, skills: e.skill_set_id_1 });
      contestants.unnamed.push({ ...tmp, skills: e.skill_set_id_2 });
    } else {
      tmp.id = e.chara_id % 1000;
      if (e.chara_id > 9000) {
        if (e.chara_id >= 9040 && e.chara_id <= 9042) {
          return;
        }
        tmp.id += 300;
      } else if (e.chara_id > 2000) {
        tmp.id += 200;
      }
      const dress = id2suffix[e.race_dress_id % 100];
      if (dress) {
        tmp.dress = dress;
      }
      contestants.named.push({ ...tmp, skills: e.skill_set_id_1 });
      contestants.named.push({ ...tmp, skills: e.skill_set_id_2 });
    }
  });
  contestants.named.push(
    {
      attrs: [1062, 569, 696, 357, 556],
      adapt_ground: [6, 0],
      adapt_distance: [1, 7, 6, 4],
      adapt_style: [3, 6, 2, 5],
      motivation: [-2, 2],
      skills: 9022011,
      id: 22,
    },
    {
      attrs: [1141, 1011, 903, 958, 681],
      adapt_ground: [6, 0],
      adapt_distance: [1, 2, 7, 7],
      adapt_style: [3, 6, 4, 2],
      motivation: [-2, 2],
      skills: 9003011,
      id: 3,
    },
  );
  (
    await prisma.skill_set.findMany({
      where: { id: { in: Object.keys(skill_set_dict).map(Number) } },
    })
  ).forEach((e) => {
    for (const k in e) {
      if (k.startsWith('skill_id') && e[k]) {
        skill_set_dict[e.id].push(e[k]);
        skill_dict[e[k]] = 0;
      }
    }
  });
  for (const k in legend_skill_sets) {
    skill_set_dict[k] = legend_skill_sets[k];
    legend_skill_sets[k].forEach((e) => (skill_dict[e] = 0));
  }
  (
    await prisma.skill_data.findMany({
      where: { id: { in: Object.keys(skill_dict).map(Number) } },
      select: { id: true, grade_value: true },
    })
  ).forEach((e) => (skill_dict[e.id] = e.grade_value));
  for (const key in skill_set_dict) {
    skill_set_dict[key] = skill_set_dict[key].reduce(
      (p, c) => p + skill_dict[c],
      0,
    );
  }
  contestants.named.forEach((e) => {
    for (let i = 0; i < e.attrs.length; ++i) {
      e.attrs[i] = Math.ceil(e.attrs[i] * 0.8);
    }
  });
  [...contestants.named, ...contestants.unnamed].forEach((e) => {
    e.level =
      skill_set_dict[e.skills] +
      e.attrs.reduce((p, c) => p + calc_attr_score(c), 0);
  });
  const legends = [
    {
      adapt_ground: [7, 0],
      adapt_distance: [0, 6, 7, 6],
      adapt_style: [2, 6, 6, 3],
      attrs: [1772, 908, 1498, 1220, 1211],
      motivation: [-2, 2],
      skills: 9116011,
      id: 116,
      image: '贵妇_半身',
      name: 'l11601',
    },
    {
      adapt_ground: [6, 0],
      adapt_distance: [4, 5, 7, 5],
      adapt_style: [6, 2, 0, 0],
      attrs: [1713, 1065, 1691, 1112, 1208],
      motivation: [-2, 2],
      skills: 9026131,
      id: 26,
      image: '波旁_仆_半身',
      name: 'l02601',
    },
    {
      adapt_ground: [6, 0],
      adapt_distance: [0, 3, 7, 5],
      adapt_style: [2, 6, 5, 1],
      attrs: [1747, 1101, 1623, 1248, 1336],
      motivation: [-2, 2],
      skills: 9032301,
      id: 32,
      image: '速子_泳_半身',
      name: 'l03201',
    },
    {
      attrs: [1734, 1084, 1690, 1319, 1137],
      adapt_ground: [7, 0],
      adapt_distance: [0, 1, 7, 6],
      adapt_style: [0, 5, 7, 4],
      motivation: [-2, 2],
      skills: 9037301,
      id: 37,
      image: '闪耀_泳_半身',
      name: 'l03701',
    },
    {
      attrs: [1750, 1021, 1538, 1239, 1263],
      adapt_ground: [6, 0],
      adapt_distance: [0, 5, 7, 6],
      adapt_style: [1, 5, 6, 3],
      motivation: [-2, 2],
      skills: 9060101,
      id: 60,
      image: '内恰_春_半身',
      name: 'l06001',
    },
    {
      attrs: [1760, 1105, 1598, 1316, 1215],
      adapt_ground: [6, 0],
      adapt_distance: [5, 7, 6, 2],
      adapt_style: [6, 6, 0, 0],
      motivation: [-2, 2],
      skills: 9065011,
      id: 65,
      image: '太阳神_半身',
      name: 'l06501',
    },
    {
      attrs: [1775, 906, 1499, 1376, 1304],
      adapt_ground: [6, 0],
      adapt_distance: [7, 6, 6, 2],
      adapt_style: [3, 6, 6, 0],
      motivation: [-2, 2],
      skills: 9018261,
      id: 18,
      image: '气槽_婚_半身',
      name: 'l01801',
    },
    {
      attrs: [1756, 1010, 1527, 1473, 1238],
      adapt_ground: [6, 0],
      adapt_distance: [0, 6, 7, 6],
      adapt_style: [2, 6, 6, 3],
      motivation: [-2, 2],
      skills: 9116012,
      id: 116,
      image: '贵妇_半身',
      name: 'l11601',
    },
    {
      attrs: [1790, 945, 1533, 1191, 1314],
      adapt_ground: [1, 7],
      adapt_distance: [4, 7, 6, 1],
      adapt_style: [6, 7, 4, 0],
      motivation: [-2, 2],
      skills: 9098011,
      id: 98,
      image: '小林_半身',
      name: 'l09801',
    },
    {
      attrs: [1719, 713, 1348, 1222, 1228],
      adapt_ground: [6, 0],
      adapt_distance: [0, 6, 6, 6],
      adapt_style: [2, 6, 6, 3],
      motivation: [-2, 2],
      skills: 9116013,
      id: 116,
      image: '贵妇_半身',
      name: 'l11601',
    },
    {
      attrs: [1814, 969, 1350, 1411, 1282],
      adapt_ground: [6, 1],
      adapt_distance: [5, 6, 7, 2],
      adapt_style: [0, 6, 6, 1],
      motivation: [-2, 2],
      skills: 9086011,
      id: 86,
      image: '高峰_半身',
      name: 'l08601',
    },
    {
      attrs: [1818, 1001, 1384, 1353, 1231],
      adapt_ground: [6, 1],
      adapt_distance: [2, 5, 7, 3],
      adapt_style: [4, 6, 3, 0],
      motivation: [-2, 2],
      skills: 9071201,
      id: 71,
      image: '阿尔丹_礼_半身',
      name: 'l07101',
    },
  ].map((e) => {
    for (let i = 0; i < e.attrs.length; ++i) {
      e.attrs[i] = Math.ceil(e.attrs[i] / 1.1);
    }
    return e;
  });

  console.log(
    `生成NPC：路人 ${contestants.unnamed.length}，客串 ${contestants.named.length}，传奇 ${legends.length}`,
  );

  writeFileSync(
    join(__dirname, '../../ere/data/race/contestants/unnamed.json'),
    JSON.stringify(
      contestants.unnamed
        .sort((a, b) => a.level - b.level)
        .filter((e) => e.level <= 20000),
      undefined,
      2,
    ),
  );
  writeFileSync(
    join(__dirname, '../../ere/data/race/contestants/named.json'),
    JSON.stringify(
      contestants.named
        .sort((a, b) => a.level - b.level)
        .filter((e) => e.level >= contestants.unnamed[0].level),
      undefined,
      2,
    ),
  );
  writeFileSync(
    join(__dirname, '../../ere/data/race/contestants/legends.json'),
    JSON.stringify(legends, undefined, 2),
  );
}

task().then().catch(console.error);
