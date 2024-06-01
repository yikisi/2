const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110711,
  '翩翩起舞惜当下',
  '在比赛终盘的最终直线处于好位置且身后的马娘接近时，消耗少量体力速度上升，并稍微向前突进',
  11071,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.phase >= 2 &&
      args.is_last_straight === 1 &&
      args.order_rate >= 20 &&
      args.order_rate <= 40 &&
      args.bashin_diff_behind <= 1,
    () => false,
  ],
  [5, 0],
  [500, 0],
  [
    [27, 22, 9],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.35, 0.15, -0.03],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [0, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 3],
  [30, 30],
  0,
  false,
);
