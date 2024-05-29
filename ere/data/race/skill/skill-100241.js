const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100241,
  'ひらめき☆ランディング',
  '最終コーナー以降に前の方で競り合うと\n抜け出しやすくなる',
  10024,
  4,
  5,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.is_finalcorner === 1 &&
      args.blocked_side_continuetime >= 2 &&
      args.order <= 3,
    () => true,
  ],
  [5, 0],
  [500, 0],
  [
    [27, 31, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [2500, 3000, 0],
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
  [1, 3],
  [30, 30],
  0,
);
