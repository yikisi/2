const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  10661,
  '引擎点火！',
  '中盘中段处于领头位置时，超长时间内速度持续微幅上升，但终盘末段时会微幅逆喷射',
  1066,
  3,
  18,
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
    [0.05, 0, 0],
    [-0.05, 0, 0],
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
  true,
);
