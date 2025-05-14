const { writeFileSync } = require('node:fs');

const { PrismaClient } = require('@prisma/client');

const id2suffix = require('../../common/clothe-id2suffix');
const calc_attr_score = require('../../ere/data/calc-attr-score');
const legend_skill_sets = require('./custom-skill-sets');

const prisma = new PrismaClient();

async function task() {
  const contestants = { named: [], unnamed: [] },
    skill_dict = {},
    skill_set_dict = {};
  [
    ...(await prisma.daily_race_npc.findMany()),
    ...(await prisma.legend_race_npc.findMany()),
    ...(await prisma.single_mode_npc.findMany()),
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
        if (e.chara_id <= 9042) {
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
  (await prisma.ultimate_race_npc.findMany()).forEach((e) => {
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
    if (e.mob_id > 0) {
      contestants.unnamed.push({ ...tmp, skills: e.skill_set_id_1 });
      contestants.unnamed.push({ ...tmp, skills: e.skill_set_id_2 });
    } else {
      tmp.id = e.chara_id % 1000;
      if (e.chara_id > 9000) {
        if (e.chara_id <= 9042) {
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
      name: '传奇贵妇人',
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
      name: '传奇波旁',
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
      name: '传奇速子',
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
      name: '传奇闪耀',
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
      name: '传奇素质',
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
      name: '传奇太阳神',
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
      name: '传奇气槽',
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
      name: '传奇贵妇人',
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
      name: '传奇小林',
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
      name: '传奇贵妇人',
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
      name: '传奇高峰',
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
      name: '传奇阿尔丹',
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
    '../../ere/data/race/contestants/unnamed.json',
    JSON.stringify(
      contestants.unnamed.sort((a, b) => a.level - b.level),
      undefined,
      2,
    ),
  );
  writeFileSync(
    '../../ere/data/race/contestants/named.json',
    JSON.stringify(
      contestants.named
        .sort((a, b) => a.level - b.level)
        .filter((e) => e.level <= contestants.unnamed[0].level),
      undefined,
      2,
    ),
  );
  writeFileSync(
    '../../ere/data/race/contestants/legends.json',
    JSON.stringify(legends, undefined, 2),
  );
}

task().then();
