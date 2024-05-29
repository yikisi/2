const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  10661,
  'エンジン点火！',
  '中盤の半ばに差を付けて先頭だと\n超長時間速度をちょっと上げ続けるが\n終盤の終わりにちょっと垂れてしまう',
  1066,
  3,
  5,
  240,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 34 &&
      args.distance_rate <= 36 &&
      args.order === 1 &&
      args.bashin_diff_behind >= 1,
    (args) => args.phase === 3 && args.is_activate_other_skill_detail === 1,
  ],
  [13, 500],
  [500, 500],
  [
    [27, 0, 0],
    [21, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [500, 0, 0],
    [-500, 0, 0],
  ],
  [
    [1, 0, 0],
    [1, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 0],
  [30, 0],
  0,
);
