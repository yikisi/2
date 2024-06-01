const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100601,
  '一定就在前方……！',
  '在比赛终盘处于第三名快要输掉的时候激发潜藏的昂扬斗志，速度加快',
  10060,
  4,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.phase >= 2 && args.order === 3 && args.bashin_diff_behind <= 1,
    () => false,
  ],
  [5, 0],
  [500, 0],
  [
    [27, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.35, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 0, 0],
    [0, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 0],
  [60, 0],
  0,
  false,
);
