const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202292,
  '清晰思考',
  '若使用技能回复过体力，且比赛中盘一开始身处后方时速度稍微提升＜沙土＞',
  20229,
  1,
  2,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.ground_type === 2 &&
      args.order_rate >= 50 &&
      args.activate_count_heal >= 1 &&
      args.distance_rate <= 42 &&
      args.phase === 1,
    () => false,
  ],
  [1.8, 0],
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
    [0.15, 0, 0],
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
  [20, 0],
  1,
  false,
);
