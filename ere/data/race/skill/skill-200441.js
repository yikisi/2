const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200441,
  '鋼の意志',
  'レース序盤または中盤に前が詰まると\n強い意志を保ち持久力が回復し\nコース取りがうまくなる',
  20044,
  2,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.phase <= 1 &&
      args.accumulatetime >= 5 &&
      args.blocked_front_continuetime >= 1,
    () => true,
  ],
  [2, 0],
  [500, 500],
  [
    [9, 28, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [550, 350, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 0],
    [0, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [2, 0],
  [60, 0],
  1,
);
