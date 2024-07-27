const { writeFileSync } = require('node:fs');

const { PrismaClient } = require('@prisma/client');

const attr_score_table = require('../../ere/data/attr-score-table.json');

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
    if (e.mob_id) {
      contestants.unnamed.push(tmp);
    } else {
      tmp.id = e.chara_id % 1000;
      if (e.chara_id > 9000) {
        return;
      } else if (e.chara_id > 2000) {
        tmp.id += 200;
      }
      tmp.attrs = tmp.attrs.map((e) => Math.floor(e - Math.min(e * 0.2, 100)));
      contestants.named.push(tmp);
    }
  });
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
  [...contestants.named, ...contestants.unnamed].forEach((e) => {
    e.level =
      skill_set_dict[e.skills] +
      e.attrs.reduce(
        (p, c) => p + (attr_score_table[c] ?? attr_score_table[1200]),
        0,
      );
  });

  console.log(
    `生成NPC：路人 ${contestants.unnamed.length}，客串 ${contestants.named.length}`,
  );

  writeFileSync(
    '../../ere/data/race/contestants/unnamed.json',
    JSON.stringify(contestants.unnamed.sort((a, b) => a.level - b.level)),
  );
  writeFileSync(
    '../../ere/data/race/contestants/named.json',
    JSON.stringify(
      contestants.named.sort(
        (a, b) => a.id * 10000 + a.level - b.id * 10000 - b.level,
      ),
    ),
  );
}

task().then();
