const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  10601,
  '人家偶尔也是能行的，对吧？',
  '在比赛终盘处于第三名快要输掉的时候激发昂扬斗志，速度少量加快',
  1060,
  3,
  18,
  240,
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
    [0.25, 0, 0],
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
  [30, 0],
  0,
  false,
);
