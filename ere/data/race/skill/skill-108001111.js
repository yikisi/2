const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  108001111,
  '情報強者',
  'レース序盤にスキルを多く発動すると\n加速力が上がる、マイルか中距離\nレースの場合は効果が増える',
  10800111,
  6,
  633,
  [() => true, () => true],
  [
    (args) =>
      (args.distance_type === 2 && args.activate_count_start >= 3) ||
      (args.distance_type === 3 && args.activate_count_start >= 3),
    (args) =>
      (args.distance_type === 1 && args.activate_count_start >= 3) ||
      (args.distance_type === 4 && args.activate_count_start >= 3),
  ],
  [3, 3],
  [500, 500],
  [
    [31, 0, 0],
    [31, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [5000, 0, 0],
    [4000, 0, 0],
  ],
  [
    [1, 0, 0],
    [1, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [3, 0],
  [60, 0],
  1,
);
