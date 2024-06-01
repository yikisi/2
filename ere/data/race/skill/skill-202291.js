const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202291,
  '明镜止水',
  '若使用技能回复过体力，且比赛中盘一开始身处后方时速度提升些许＜沙土＞',
  20229,
  2,
  10,
  508,
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
  1,
  false,
);
