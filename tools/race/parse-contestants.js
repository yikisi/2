const { writeFileSync } = require('node:fs');

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function task() {
  const contestants = { named: [], unnamed: [] };
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
    tmp.level = tmp.attrs.reduce((p, c) => p + c);
    if (e.mob_id) {
      contestants.unnamed.push(tmp);
    } else {
      tmp.id = e.chara_id % 1000;
      if (e.chara_id > 9000) {
        tmp.id += 300;
      } else if (e.chara_id > 2000) {
        tmp.id += 200;
      }
      contestants.named.push(tmp);
    }
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
